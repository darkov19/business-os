import fs from "node:fs/promises";
import path from "node:path";
import { CLAUDE_COMMANDS, CODEX_SKILLS, INSTALL_DIR } from "../config.js";
import { pathExists } from "../lib/fs.js";

export async function runDoctor(options) {
  const projectRoot = path.resolve(options.project);
  const manifestPath = path.join(projectRoot, INSTALL_DIR, "install-manifest.json");
  const manifestExists = await pathExists(manifestPath);

  console.log(`Project: ${projectRoot}`);
  console.log(`Manifest: ${manifestExists ? "present" : "missing"}`);

  if (manifestExists) {
    const manifest = JSON.parse(await fs.readFile(manifestPath, "utf8"));
    console.log(`Installed version: ${manifest.version}`);
    console.log(`Installed target: ${manifest.target}`);
    console.log(`Docs installed: ${manifest.docsInstalled ? "yes" : "no"}`);
  }

  const codexRoot = path.join(projectRoot, ".agents", "skills");
  const claudeRoot = path.join(projectRoot, ".claude", "commands");

  let installedCodex = 0;
  for (const skill of CODEX_SKILLS) {
    if (await pathExists(path.join(codexRoot, skill))) {
      installedCodex += 1;
    }
  }

  let installedClaude = 0;
  for (const command of CLAUDE_COMMANDS) {
    if (await pathExists(path.join(claudeRoot, command))) {
      installedClaude += 1;
    }
  }

  console.log(`Codex skills found: ${installedCodex}/${CODEX_SKILLS.length}`);
  console.log(`Claude commands found: ${installedClaude}/${CLAUDE_COMMANDS.length}`);
}
