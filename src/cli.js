import path from "node:path";
import { runInstall } from "./commands/install.js";
import { runDoctor } from "./commands/doctor.js";
import { runUpdate } from "./commands/update.js";
import { DEFAULT_PROFILE, DEFAULT_TARGET } from "./config.js";

function printHelp() {
  console.log(`Business OS CLI

Usage:
  business-os install [--target codex|claude|both] [--profile core|full|custom] [--components LIST] [--project PATH] [--no-docs] [--force] [--yes] [--plan] [--dry-run]
  business-os doctor [--project PATH]
  business-os update [--project PATH] [--plan] [--dry-run]

Examples:
  business-os install
  business-os install --target codex
  business-os install --profile core --yes
  business-os install --profile custom --components saas,local-service
  business-os doctor
  business-os update

Defaults:
  target: ${DEFAULT_TARGET}
  profile: ${DEFAULT_PROFILE}
`);
}

function parseArgs(argv) {
  const args = {
    command: argv[0] || "help",
    project: process.cwd(),
    target: DEFAULT_TARGET,
    profile: DEFAULT_PROFILE,
    components: [],
    docs: true,
    force: false,
    dryRun: false,
    plan: false,
    yes: false,
    interactive: undefined,
    explicit: {
      project: false,
      target: false,
      profile: false,
      components: false,
      docs: false
    }
  };

  for (let index = 1; index < argv.length; index += 1) {
    const value = argv[index];

    if (value === "--project") {
      args.project = path.resolve(argv[index + 1]);
      index += 1;
      args.explicit.project = true;
    } else if (value === "--target") {
      args.target = argv[index + 1];
      index += 1;
      args.explicit.target = true;
    } else if (value === "--profile") {
      args.profile = argv[index + 1];
      index += 1;
      args.explicit.profile = true;
    } else if (value === "--components") {
      args.components = argv[index + 1]
        .split(",")
        .map((entry) => entry.trim())
        .filter(Boolean);
      index += 1;
      args.explicit.components = true;
    } else if (value === "--no-docs") {
      args.docs = false;
      args.explicit.docs = true;
    } else if (value === "--yes" || value === "-y") {
      args.yes = true;
      args.interactive = false;
    } else if (value === "--interactive") {
      args.interactive = true;
    } else if (value === "--force") {
      args.force = true;
    } else if (value === "--dry-run") {
      args.dryRun = true;
    } else if (value === "--plan") {
      args.plan = true;
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
