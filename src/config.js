import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const PACKAGE_ROOT = path.resolve(__dirname, "..");
export const PACKAGE_VERSION = "0.2.0";
export const DEFAULT_TARGET = "both";
export const DEFAULT_PROFILE = "full";

export const CORE_CODEX_SKILLS = [
  "business-os-router",
  "start-business",
  "pivot-business",
  "launch-product-or-service",
  "improve-sales-or-marketing",
  "expansion-smoke-test"
];

export const FULL_CODEX_SKILLS = [
  ...CORE_CODEX_SKILLS,
  "saas-digital-product",
  "local-service-business",
  "distributor-wholesale-readiness",
  "partner-channel-rollout",
  "premium-d2c-launch-commerce",
  "premium-d2c-conversion-audit"
];

export const CORE_CLAUDE_COMMANDS = [
  "business-os-router.md",
  "start-business.md",
  "pivot-business.md",
  "launch-product-or-service.md",
  "improve-sales-or-marketing.md",
  "expansion-smoke-test.md"
];

export const FULL_CLAUDE_COMMANDS = [
  ...CORE_CLAUDE_COMMANDS,
  "saas-digital-product.md",
  "local-service-business.md",
  "distributor-wholesale-readiness.md",
  "partner-channel-rollout.md",
  "premium-d2c-launch-commerce.md",
  "premium-d2c-conversion-audit.md"
];

export const INSTALL_DIR = ".business-os";

export function isValidTarget(target) {
  return ["codex", "claude", "both"].includes(target);
}

export function isValidProfile(profile) {
  return ["core", "full"].includes(profile);
}

export function getCodexSkills(profile = DEFAULT_PROFILE) {
  return profile === "core" ? CORE_CODEX_SKILLS : FULL_CODEX_SKILLS;
}

export function getClaudeCommands(profile = DEFAULT_PROFILE) {
  return profile === "core" ? CORE_CLAUDE_COMMANDS : FULL_CLAUDE_COMMANDS;
}
