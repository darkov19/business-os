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

export async function readFileIfExists(targetPath) {
  if (!(await pathExists(targetPath))) {
    return null;
  }

  return fs.readFile(targetPath);
}

export async function listFilesRecursive(rootPath, options = {}) {
  const { filter } = options;
  const results = [];

  async function walk(currentPath) {
    const entries = await fs.readdir(currentPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentPath, entry.name);
      if (filter && !filter(fullPath, entry)) {
        continue;
      }

      if (entry.isDirectory()) {
        await walk(fullPath);
      } else if (entry.isFile()) {
        results.push(fullPath);
      }
    }
  }

  await walk(rootPath);
  return results;
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

export async function copyDirSafe(sourcePath, targetPath, options = {}) {
  const { force = false, dryRun = false, filter } = options;
  const sourceFiles = await listFilesRecursive(sourcePath, { filter });
  let copied = 0;
  let skipped = 0;

  for (const sourceFile of sourceFiles) {
    const relativePath = path.relative(sourcePath, sourceFile);
    const targetFile = path.join(targetPath, relativePath);
    const result = await copyFileSafe(sourceFile, targetFile, { force, dryRun });

    if (result.copied) {
      copied += 1;
    } else if (result.skipped) {
      skipped += 1;
    }
  }

  return { copied, skipped };
}
