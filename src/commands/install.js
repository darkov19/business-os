import fs from "node:fs/promises";
import path from "node:path";
import { CLAUDE_COMMANDS, CODEX_SKILLS, INSTALL_DIR, PACKAGE_ROOT, PACKAGE_VERSION } from "../config.js";
import { copyDirSafe, copyFileSafe, ensureDir } from "../lib/fs.js";

function validateTarget(target) {
  if (!["codex", "claude", "both"].includes(target)) {
    throw new Error(`Invalid target '${target}'. Use codex, claude, or both.`);
  }
}

function makeManifest({ project, target, docs }) {
  return {
    package: "business-os",
    version: PACKAGE_VERSION,
    installedAt: new Date().toISOString(),
    project,
    target,
    docsInstalled: docs,
    codexSkills: CODEX_SKILLS,
    claudeCommands: CLAUDE_COMMANDS
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

async function installCodexSkills(projectRoot, options) {
  const sourceRoot = path.join(PACKAGE_ROOT, ".agents", "skills");
  const targetRoot = path.join(projectRoot, ".agents", "skills");

  await ensureDir(targetRoot, options.dryRun);

  for (const skill of CODEX_SKILLS) {
    const source = path.join(sourceRoot, skill);
    const target = path.join(targetRoot, skill);
    await copyDirSafe(source, target, {
      force: options.force,
      dryRun: options.dryRun
    });
  }
}

async function installClaudeCommands(projectRoot, options) {
  const sourceRoot = path.join(PACKAGE_ROOT, ".claude", "commands");
  const targetRoot = path.join(projectRoot, ".claude", "commands");

  await ensureDir(targetRoot, options.dryRun);

  for (const command of CLAUDE_COMMANDS) {
    await copyFileSafe(
      path.join(sourceRoot, command),
      path.join(targetRoot, command),
      { force: options.force, dryRun: options.dryRun }
    );
  }
}

export async function runInstall(options) {
  validateTarget(options.target);

  const projectRoot = path.resolve(options.project);
  const manifestPath = path.join(projectRoot, INSTALL_DIR, "install-manifest.json");

  if (options.docs) {
    await installDocs(projectRoot, options);
  }

  if (options.target === "codex" || options.target === "both") {
    await installCodexSkills(projectRoot, options);
  }

  if (options.target === "claude" || options.target === "both") {
    await installClaudeCommands(projectRoot, options);
  }

  const manifest = makeManifest({
    project: projectRoot,
    target: options.target,
    docs: options.docs
  });

  if (!options.dryRun) {
    await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  }

  console.log(`Installed Business OS into ${projectRoot}`);
  console.log(`Target: ${options.target}`);
  console.log(`Docs: ${options.docs ? "yes" : "no"}`);
  console.log(`Dry run: ${options.dryRun ? "yes" : "no"}`);
}
