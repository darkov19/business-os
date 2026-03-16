import path from "node:path";
import { runInstall } from "./commands/install.js";
import { runDoctor } from "./commands/doctor.js";
import { runUpdate } from "./commands/update.js";

function printHelp() {
  console.log(`Business OS CLI

Usage:
  business-os install [--target codex|claude|both] [--project PATH] [--no-docs] [--force] [--dry-run]
  business-os doctor [--project PATH]
  business-os update [--project PATH] [--dry-run]

Examples:
  business-os install
  business-os install --target codex
  business-os doctor
  business-os update
`);
}

function parseArgs(argv) {
  const args = {
    command: argv[0] || "help",
    project: process.cwd(),
    target: "both",
    docs: true,
    force: false,
    dryRun: false
  };

  for (let index = 1; index < argv.length; index += 1) {
    const value = argv[index];

    if (value === "--project") {
      args.project = path.resolve(argv[index + 1]);
      index += 1;
    } else if (value === "--target") {
      args.target = argv[index + 1];
      index += 1;
    } else if (value === "--no-docs") {
      args.docs = false;
    } else if (value === "--force") {
      args.force = true;
    } else if (value === "--dry-run") {
      args.dryRun = true;
    } else if (value === "--help" || value === "-h") {
      args.command = "help";
    } else {
      throw new Error(`Unknown argument: ${value}`);
    }
  }

  return args;
}

export async function main(argv) {
  const args = parseArgs(argv);

  switch (args.command) {
    case "install":
      await runInstall(args);
      return;
    case "doctor":
      await runDoctor(args);
      return;
    case "update":
      await runUpdate(args);
      return;
    case "help":
    default:
      printHelp();
  }
}
