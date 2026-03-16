import fs from "node:fs/promises";
import path from "node:path";
import { INSTALL_DIR } from "../config.js";
import { pathExists } from "../lib/fs.js";
import { runInstall } from "./install.js";

export async function runUpdate(options) {
  const projectRoot = path.resolve(options.project);
  const manifestPath = path.join(projectRoot, INSTALL_DIR, "install-manifest.json");

  if (!(await pathExists(manifestPath))) {
    throw new Error("No install manifest found. Run 'business-os install' first.");
  }

  const manifest = JSON.parse(await fs.readFile(manifestPath, "utf8"));

  await runInstall({
    ...options,
    project: projectRoot,
    target: manifest.target || "both",
    profile: manifest.profile || "full",
    docs: manifest.docsInstalled !== false,
    force: true
  });
}
