import fs from "node:fs/promises";
import path from "node:path";
import {
  DEFAULT_PROFILE,
  getClaudeCommands,
  getCodexSkills,
  INSTALL_DIR,
  isValidProfile,
  isValidTarget,
  PACKAGE_ROOT,
  PACKAGE_VERSION
} from "../config.js";
import { copyDirSafe, copyFileSafe, ensureDir } from "../lib/fs.js";
import { canPrompt, createPrompter } from "../lib/prompt.js";

function validateTarget(target) {
  if (!isValidTarget(target)) {
    throw new Error(`Invalid target '${target}'. Use codex, claude, or both.`);
  }
}

function validateProfile(profile) {
  if (!isValidProfile(profile)) {
    throw new Error(`Invalid profile '${profile}'. Use core or full.`);
  }
}

function makeManifest({ project, target, profile, docs, codexSkills, claudeCommands }) {
  return {
    package: "business-os",
    version: PACKAGE_VERSION,
    installedAt: new Date().toISOString(),
    project,
    target,
    profile,
    docsInstalled: docs,
    codexSkills,
    claudeCommands
  };
}

async function installDocs(projectRoot, options) {
  const sourceDocs = path.join(PACKAGE_ROOT, "docs");
  const targetDocs = path.join(projectRoot, INSTALL_DIR, "docs");

  await ensureDir(path.join(projectRoot, INSTALL_DIR), options.dryRun);
  await copyDirSafe(sourceDocs, targetDocs, {
    force: options.force,
    dryRun: options.dryRun,
    filter: (source) => !source.includes(`${path.sep}deprecated`)
  });
}

async function installCodexSkills(projectRoot, skills, options) {
  const sourceRoot = path.join(PACKAGE_ROOT, ".agents", "skills");
  const targetRoot = path.join(projectRoot, ".agents", "skills");
  let installed = 0;

  await ensureDir(targetRoot, options.dryRun);

  for (const skill of skills) {
    const source = path.join(sourceRoot, skill);
    const target = path.join(targetRoot, skill);
    const result = await copyDirSafe(source, target, {
      force: options.force,
      dryRun: options.dryRun
    });

    if (result.copied) {
      installed += 1;
    }
  }

  return installed;
}

async function installClaudeCommands(projectRoot, commands, options) {
  const sourceRoot = path.join(PACKAGE_ROOT, ".claude", "commands");
  const targetRoot = path.join(projectRoot, ".claude", "commands");
  let installed = 0;

  await ensureDir(targetRoot, options.dryRun);

  for (const command of commands) {
    const result = await copyFileSafe(
      path.join(sourceRoot, command),
      path.join(targetRoot, command),
      { force: options.force, dryRun: options.dryRun }
    );

    if (result.copied) {
      installed += 1;
    }
  }

  return installed;
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

async function resolveInstallOptions(options) {
  if (!shouldPrompt(options)) {
    return {
      project: path.resolve(options.project),
      target: options.target,
      profile: options.profile || DEFAULT_PROFILE,
      docs: options.docs
    };
  }

  const prompter = createPrompter();

  try {
    const project = path.resolve(
      await prompter.text("Install project path", path.resolve(options.project))
    );

    const target = options.explicit.target
      ? options.target
      : await prompter.choice("Install target", ["both", "codex", "claude"], options.target);

    const profile = options.explicit.profile
      ? options.profile
      : await prompter.choice("Workflow profile", ["full", "core"], options.profile || DEFAULT_PROFILE);

    const docs = options.explicit.docs
      ? options.docs
      : await prompter.yesNo("Install Business OS docs into .business-os/docs?", options.docs);

    console.log("");
    console.log("Install plan");
    console.log(`  Project: ${project}`);
    console.log(`  Target: ${target}`);
    console.log(`  Profile: ${profile}`);
    console.log(`  Docs: ${docs ? "yes" : "no"}`);
    console.log(`  Force overwrite: ${options.force ? "yes" : "no"}`);
    console.log(`  Dry run: ${options.dryRun ? "yes" : "no"}`);
    console.log("");

    const proceed = await prompter.yesNo("Continue with install?", true);
    if (!proceed) {
      return null;
    }

    return { project, target, profile, docs };
  } finally {
    prompter.close();
  }
}

export async function runInstall(options) {
  const resolved = await resolveInstallOptions(options);
  if (!resolved) {
    console.log("Install cancelled.");
    return;
  }

  validateTarget(resolved.target);
  validateProfile(resolved.profile);

  const projectRoot = path.resolve(resolved.project);
  const manifestPath = path.join(projectRoot, INSTALL_DIR, "install-manifest.json");
  const codexSkills = getCodexSkills(resolved.profile);
  const claudeCommands = getClaudeCommands(resolved.profile);
  let codexInstalled = 0;
  let claudeInstalled = 0;

  await ensureDir(path.join(projectRoot, INSTALL_DIR), options.dryRun);

  if (resolved.docs) {
    await installDocs(projectRoot, options);
  }

  if (resolved.target === "codex" || resolved.target === "both") {
    codexInstalled = await installCodexSkills(projectRoot, codexSkills, options);
  }

  if (resolved.target === "claude" || resolved.target === "both") {
    claudeInstalled = await installClaudeCommands(projectRoot, claudeCommands, options);
  }

  const manifest = makeManifest({
    project: projectRoot,
    target: resolved.target,
    profile: resolved.profile,
    docs: resolved.docs,
    codexSkills: resolved.target === "claude" ? [] : codexSkills,
    claudeCommands: resolved.target === "codex" ? [] : claudeCommands
  });

  if (!options.dryRun) {
    await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  }

  console.log(`Installed Business OS into ${projectRoot}`);
  console.log(`Target: ${resolved.target}`);
  console.log(`Profile: ${resolved.profile}`);
  console.log(`Docs: ${resolved.docs ? "yes" : "no"}`);
  console.log(`Codex skills processed: ${codexInstalled}/${codexSkills.length}`);
  console.log(`Claude commands processed: ${claudeInstalled}/${claudeCommands.length}`);
  console.log(`Dry run: ${options.dryRun ? "yes" : "no"}`);
}
