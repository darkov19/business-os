import fs from "node:fs/promises";
import path from "node:path";
import {
  DEFAULT_PROFILE,
  getComponentCatalog,
  INSTALL_DIR,
  isValidProfile,
  isValidTarget,
  OVERRIDE_DIR,
  PACKAGE_ROOT,
  PACKAGE_VERSION,
  resolveSelection
} from "../config.js";
import {
  copyDirSafe,
  copyFileSafe,
  ensureDir,
  listFilesRecursive,
  pathExists,
  readFileIfExists
} from "../lib/fs.js";
import { canPrompt, createPrompter } from "../lib/prompt.js";

const PLAN_STATUS_ORDER = ["create", "overwrite", "skip", "preserve", "unchanged"];

function validateTarget(target) {
  if (!isValidTarget(target)) {
    throw new Error(`Invalid target '${target}'. Use codex, claude, or both.`);
  }
}

function validateProfile(profile) {
  if (!isValidProfile(profile)) {
    throw new Error(`Invalid profile '${profile}'. Use core, full, or custom.`);
  }
}

function validateComponentSelection(profile, componentIds) {
  if (profile === "custom" && componentIds.length === 0) {
    throw new Error("Custom profile requires at least one component.");
  }

  if (profile !== "custom" && componentIds.length > 0) {
    throw new Error("Explicit components can only be used with the custom profile.");
  }
}

function makeManifest({ project, target, profile, docs, componentIds, codexSkills, claudeCommands }) {
  return {
    package: "business-os",
    version: PACKAGE_VERSION,
    installedAt: new Date().toISOString(),
    project,
    target,
    profile,
    docsInstalled: docs,
    selectedComponents: componentIds,
    codexSkills,
    claudeCommands,
    overrideDir: OVERRIDE_DIR
  };
}

function buildOverrideFiles({ profile, componentIds, target, docs }) {
  const configSummary = JSON.stringify(
    {
      profile,
      selectedComponents: componentIds,
      target,
      docsInstalled: docs
    },
    null,
    2
  );

  return [
    {
      area: "overrides",
      relativePath: "README.md",
      protectExisting: true,
      contents: `# Business OS Local Overrides

This folder is reserved for project-specific customizations that should survive package updates.

Suggested usage:

- keep local notes about custom workflow changes
- document project-specific routing or skill extensions
- store override drafts before promoting them into the main package

Installer behavior:

- this folder is scaffolded on first install
- update should not overwrite files you edit here
- shipped Business OS files remain outside this folder

Current install baseline:

${configSummary}
`
    },
    {
      area: "overrides",
      relativePath: "local-notes.md",
      protectExisting: true,
      contents: `# Local Notes

Use this file for project-only decisions, override ideas, and integration notes.
`
    }
  ];
}

function shouldPrompt(options) {
  if (options.interactive === true) {
    return true;
  }

  if (options.interactive === false || options.yes) {
    return false;
  }

  return canPrompt();
}

function summarizeComponents(componentIds) {
  const catalog = new Map(getComponentCatalog().map((component) => [component.id, component]));
  return componentIds.map((id) => catalog.get(id)?.label || id).join(", ");
}

async function resolveInstallOptions(options) {
  const impliedProfile =
    options.explicit.components && !options.explicit.profile ? "custom" : options.profile || DEFAULT_PROFILE;

  if (!shouldPrompt(options)) {
    return {
      project: path.resolve(options.project),
      target: options.target,
      profile: impliedProfile,
      componentIds: options.components || [],
      docs: options.docs
    };
  }

  const prompter = createPrompter();

  try {
    await prompter.intro("Business OS Installer", [
      "This setup will install the Business OS baseline into the selected project.",
      "You can choose a full install, a lighter core install, or a custom component mix."
    ]);

    const project = path.resolve(
      await prompter.text("Install project path", path.resolve(options.project))
    );

    const target = options.explicit.target
      ? options.target
      : await prompter.menu("Install target", [
        { value: "both", label: "Both", description: "Install Codex skills and Claude commands." },
        { value: "codex", label: "Codex only", description: "Install only .agents/skills." },
        { value: "claude", label: "Claude only", description: "Install only .claude/commands." }
      ], options.target);

    const profile = options.explicit.profile
      ? impliedProfile
      : await prompter.menu("Install mode", [
        {
          value: "full",
          label: "Full",
          description: "Install the complete Business OS workflow set."
        },
        {
          value: "core",
          label: "Core",
          description: "Install the main start, pivot, launch, growth, and expansion workflows."
        },
        {
          value: "custom",
          label: "Custom",
          description: "Pick only the workflow components you want."
        }
      ], impliedProfile);

    const componentIds = profile === "custom"
      ? (options.explicit.components
        ? options.components
        : await prompter.multiChoice(
          "Select Business OS components",
          getComponentCatalog().map((component) => ({
            value: component.id,
            label: component.label,
            description: component.description
          })),
          options.components.length > 0 ? options.components : getComponentCatalog().map((component) => component.id)
        ))
      : [];

    const docs = options.explicit.docs
      ? options.docs
      : await prompter.yesNo("Install Business OS docs into .business-os/docs?", options.docs);

    console.log("");
    console.log("Install plan");
    console.log(`  Project: ${project}`);
    console.log(`  Target: ${target}`);
    console.log(`  Profile: ${profile}`);
    if (profile === "custom") {
      console.log(`  Components: ${summarizeComponents(componentIds)}`);
    }
    console.log(`  Docs: ${docs ? "yes" : "no"}`);
    console.log(`  Force overwrite: ${options.force ? "yes" : "no"}`);
    console.log(`  Dry run: ${options.dryRun ? "yes" : "no"}`);
    console.log("");

    const proceed = await prompter.yesNo("Continue with install?", true);
    if (!proceed) {
      return null;
    }

    return { project, target, profile, componentIds, docs };
  } finally {
    prompter.close();
  }
}

function shouldIncludeActiveDoc(sourcePath, entry) {
  if (sourcePath.includes(`${path.sep}deprecated${path.sep}`)) {
    return false;
  }

  const basename = entry?.name || path.basename(sourcePath);
  return basename !== ".npmignore";
}

async function determinePlanStatus(sourceContent, targetPath, options = {}) {
  const { force = false, protectExisting = false } = options;
  const targetContent = await readFileIfExists(targetPath);

  if (!targetContent) {
    return "create";
  }

  if (Buffer.compare(Buffer.isBuffer(sourceContent) ? sourceContent : Buffer.from(sourceContent), targetContent) === 0) {
    return "unchanged";
  }

  if (protectExisting) {
    return "preserve";
  }

  return force ? "overwrite" : "skip";
}

async function collectDirOperations({ area, sourceRoot, targetRoot, force, filter, displayPrefix = "" }) {
  const sourceFiles = await listFilesRecursive(sourceRoot, { filter });
  const operations = [];

  for (const sourceFile of sourceFiles) {
    const relativePath = path.relative(sourceRoot, sourceFile);
    const targetPath = path.join(targetRoot, relativePath);
    const sourceContent = await fs.readFile(sourceFile);
    const status = await determinePlanStatus(sourceContent, targetPath, { force });

    operations.push({
      area,
      relativePath: displayPrefix ? path.join(displayPrefix, relativePath) : relativePath,
      status
    });
  }

  return operations;
}

async function collectGeneratedFileOperations({ rootPath, files, force }) {
  const operations = [];

  for (const file of files) {
    const targetPath = path.join(rootPath, file.relativePath);
    const status = await determinePlanStatus(file.contents, targetPath, {
      force,
      protectExisting: file.protectExisting
    });

    operations.push({
      area: file.area,
      relativePath: file.relativePath,
      status
    });
  }

  return operations;
}

async function buildInstallPlan(projectRoot, options, resolved, selection) {
  const plan = [];

  if (resolved.docs) {
    plan.push(
      ...(await collectDirOperations({
        area: "docs",
        sourceRoot: path.join(PACKAGE_ROOT, "docs"),
        targetRoot: path.join(projectRoot, INSTALL_DIR, "docs"),
        force: options.force,
        filter: (sourcePath, entry) => shouldIncludeActiveDoc(sourcePath, entry)
      }))
    );
  }

  if (resolved.target === "codex" || resolved.target === "both") {
    for (const skill of selection.codexSkills) {
      plan.push(
        ...(await collectDirOperations({
          area: "codex",
          sourceRoot: path.join(PACKAGE_ROOT, ".agents", "skills", skill),
          targetRoot: path.join(projectRoot, ".agents", "skills", skill),
          force: options.force,
          displayPrefix: skill
        }))
      );
    }
  }

  if (resolved.target === "claude" || resolved.target === "both") {
    const commandFiles = selection.claudeCommands.map((command) => ({
      area: "claude",
      relativePath: command,
      contents: fs.readFile(path.join(PACKAGE_ROOT, ".claude", "commands", command), "utf8")
    }));

    for (const commandFile of commandFiles) {
      plan.push({
        area: commandFile.area,
        relativePath: commandFile.relativePath,
        status: await determinePlanStatus(
          await commandFile.contents,
          path.join(projectRoot, ".claude", "commands", commandFile.relativePath),
          { force: options.force }
        )
      });
    }
  }

  const overrideFiles = buildOverrideFiles({
    profile: resolved.profile,
    componentIds: selection.componentIds,
    target: resolved.target,
    docs: resolved.docs
  });

  plan.push(
    ...(await collectGeneratedFileOperations({
      rootPath: path.join(projectRoot, OVERRIDE_DIR),
      files: overrideFiles,
      force: false
    }))
  );

  const manifest = makeManifest({
    project: projectRoot,
    target: resolved.target,
    profile: resolved.profile,
    docs: resolved.docs,
    componentIds: selection.componentIds,
    codexSkills: resolved.target === "claude" ? [] : selection.codexSkills,
    claudeCommands: resolved.target === "codex" ? [] : selection.claudeCommands
  });

  plan.push(
    ...(await collectGeneratedFileOperations({
      rootPath: path.join(projectRoot, INSTALL_DIR),
      files: [
        {
          area: "manifest",
          relativePath: "install-manifest.json",
          contents: `${JSON.stringify(manifest, null, 2)}\n`,
          protectExisting: false
        }
      ],
      force: true
    }))
  );

  return { plan, manifest, overrideFiles };
}

function summarizePlan(plan) {
  const summary = new Map();

  for (const operation of plan) {
    const areaSummary = summary.get(operation.area) || {
      create: 0,
      overwrite: 0,
      skip: 0,
      preserve: 0,
      unchanged: 0
    };

    areaSummary[operation.status] += 1;
    summary.set(operation.area, areaSummary);
  }

  return summary;
}

function printPlan(plan, options) {
  const summary = summarizePlan(plan);
  console.log("Planned file actions");

  for (const [area, counts] of summary.entries()) {
    const tokens = PLAN_STATUS_ORDER
      .filter((status) => counts[status] > 0)
      .map((status) => `${status}:${counts[status]}`)
      .join(" ");

    console.log(`  ${area}: ${tokens || "none"}`);
  }

  const changed = plan.filter((operation) => operation.status !== "unchanged");
  if (changed.length === 0) {
    console.log("  no file changes");
    return;
  }

  if (options.plan || options.dryRun) {
    const previewLimit = 60;
    console.log("");
    console.log("Changed paths");
    for (const operation of changed.slice(0, previewLimit)) {
      console.log(`  [${operation.area}] ${operation.status} ${operation.relativePath}`);
    }

    if (changed.length > previewLimit) {
      console.log(`  ... ${changed.length - previewLimit} more`);
    }
  }
}

async function writeGeneratedFiles(rootPath, files, dryRun = false) {
  for (const file of files) {
    const targetPath = path.join(rootPath, file.relativePath);
    const exists = await pathExists(targetPath);

    if (exists && file.protectExisting) {
      continue;
    }

    await ensureDir(path.dirname(targetPath), dryRun);
    if (!dryRun) {
      await fs.writeFile(targetPath, file.contents);
    }
  }
}

async function installDocs(projectRoot, options) {
  const sourceDocs = path.join(PACKAGE_ROOT, "docs");
  const targetDocs = path.join(projectRoot, INSTALL_DIR, "docs");

  await ensureDir(path.join(projectRoot, INSTALL_DIR), options.dryRun);
  return copyDirSafe(sourceDocs, targetDocs, {
    force: options.force,
    dryRun: options.dryRun,
    filter: (sourcePath, entry) => shouldIncludeActiveDoc(sourcePath, entry)
  });
}

async function installCodexSkills(projectRoot, skills, options) {
  const sourceRoot = path.join(PACKAGE_ROOT, ".agents", "skills");
  const targetRoot = path.join(projectRoot, ".agents", "skills");
  let copied = 0;

  await ensureDir(targetRoot, options.dryRun);

  for (const skill of skills) {
    const result = await copyDirSafe(
      path.join(sourceRoot, skill),
      path.join(targetRoot, skill),
      { force: options.force, dryRun: options.dryRun }
    );
    copied += result.copied;
  }

  return copied;
}

async function installClaudeCommands(projectRoot, commands, options) {
  const sourceRoot = path.join(PACKAGE_ROOT, ".claude", "commands");
  const targetRoot = path.join(projectRoot, ".claude", "commands");
  let copied = 0;

  await ensureDir(targetRoot, options.dryRun);

  for (const command of commands) {
    const result = await copyFileSafe(
      path.join(sourceRoot, command),
      path.join(targetRoot, command),
      { force: options.force, dryRun: options.dryRun }
    );

    if (result.copied) {
      copied += 1;
    }
  }

  return copied;
}

export async function runInstall(options) {
  const resolved = await resolveInstallOptions(options);
  if (!resolved) {
    console.log("Install cancelled.");
    return;
  }

  validateTarget(resolved.target);
  validateProfile(resolved.profile);
  validateComponentSelection(resolved.profile, resolved.componentIds);

  const selection = resolveSelection(resolved.profile, resolved.componentIds);
  const projectRoot = path.resolve(resolved.project);
  const installRoot = path.join(projectRoot, INSTALL_DIR);
  const { plan, manifest, overrideFiles } = await buildInstallPlan(projectRoot, options, resolved, selection);

  printPlan(plan, options);

  if (options.dryRun) {
    console.log("");
    console.log("Dry run only. No files were written.");
    return;
  }

  await ensureDir(installRoot, false);
  await ensureDir(path.join(projectRoot, OVERRIDE_DIR), false);

  if (resolved.docs) {
    await installDocs(projectRoot, options);
  }

  let codexCopied = 0;
  let claudeCopied = 0;

  if (resolved.target === "codex" || resolved.target === "both") {
    codexCopied = await installCodexSkills(projectRoot, selection.codexSkills, options);
  }

  if (resolved.target === "claude" || resolved.target === "both") {
    claudeCopied = await installClaudeCommands(projectRoot, selection.claudeCommands, options);
  }

  await writeGeneratedFiles(path.join(projectRoot, OVERRIDE_DIR), overrideFiles);
  await fs.writeFile(path.join(installRoot, "install-manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);

  console.log("");
  console.log(`Installed Business OS into ${projectRoot}`);
  console.log(`Target: ${resolved.target}`);
  console.log(`Profile: ${resolved.profile}`);
  console.log(`Components: ${selection.componentIds.length > 0 ? summarizeComponents(selection.componentIds) : "(profile default)"}`);
  console.log(`Docs: ${resolved.docs ? "yes" : "no"}`);
  console.log(`Codex files copied: ${codexCopied}`);
  console.log(`Claude commands copied: ${claudeCopied}`);
}
