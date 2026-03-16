import fs from "node:fs/promises";
import path from "node:path";

export async function ensureDir(dirPath, dryRun = false) {
  if (dryRun) {
    return;
  }

  await fs.mkdir(dirPath, { recursive: true });
}

export async function pathExists(targetPath) {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
}

export async function copyFileSafe(sourcePath, targetPath, { force = false, dryRun = false } = {}) {
  const exists = await pathExists(targetPath);
  if (exists && !force) {
    return { copied: false, skipped: true };
  }

  await ensureDir(path.dirname(targetPath), dryRun);

  if (!dryRun) {
    await fs.copyFile(sourcePath, targetPath);
  }

  return { copied: true, skipped: false };
}

export async function copyDirSafe(sourcePath, targetPath, { force = false, dryRun = false, filter } = {}) {
  if (dryRun) {
    return;
  }

  await fs.cp(sourcePath, targetPath, {
    recursive: true,
    force,
    errorOnExist: !force,
    filter
  });
}
