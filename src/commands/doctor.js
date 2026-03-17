import fs from "node:fs/promises";
import path from "node:path";
import { INSTALL_DIR } from "../config.js";
import { pathExists } from "../lib/fs.js";

export async function runDoctor(options) {
  const projectRoot = path.resolve(options.project);
  const manifestPath = path.join(projectRoot, INSTALL_DIR, "install-manifest.json");
  const manifestExists = await pathExists(manifestPath);
  const manifest = manifestExists
    ? JSON.parse(await fs.readFile(manifestPath, "utf8"))
    : null;

  console.log(`Project: ${projectRoot}`);
  console.log(`Manifest: ${manifestExists ? "present" : "missing"}`);

  if (manifest) {
    console.log(`Installed version: ${manifest.version}`);
    console.log(`Installed target: ${manifest.target}`);
    console.log(`Installed profile: ${manifest.profile || "full"}`);
    if (Array.isArray(manifest.selectedComponents) && manifest.selectedComponents.length > 0) {
      console.log(`Selected components: ${manifest.selectedComponents.join(", ")}`);
    }
    console.log(`Docs installed: ${manifest.docsInstalled ? "yes" : "no"}`);
    const codexRoot = path.join(projectRoot, ".agents", "skills");
    const claudeRoot = path.join(projectRoot, ".claude", "commands");
    const expectedCodex = manifest.codexSkills || [];
    const expectedClaude = manifest.claudeCommands || [];

    let installedCodex = 0;
    for (const skill of expectedCodex) {
      if (await pathExists(path.join(codexRoot, skill))) {
        installedCodex += 1;
      }
    }

    let installedClaude = 0;
    for (const command of expectedClaude) {
      if (await pathExists(path.join(claudeRoot, command))) {
        installedClaude += 1;
      }
    }

    console.log(`Codex skills found: ${installedCodex}/${expectedCodex.length}`);
    console.log(`Claude commands found: ${installedClaude}/${expectedClaude.length}`);
    return;
  }

  console.log("No install manifest found, so expected package contents cannot be verified.");
  console.log("Run `business-os install` in the target project to create a verifiable installation.");
}
