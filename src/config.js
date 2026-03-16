import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const PACKAGE_ROOT = path.resolve(__dirname, "..");
export const PACKAGE_VERSION = "0.1.0";

export const CODEX_SKILLS = [
  "business-os-router",
  "start-business",
  "pivot-business",
  "launch-product-or-service",
  "improve-sales-or-marketing",
  "expansion-smoke-test",
  "saas-digital-product",
  "local-service-business",
  "distributor-wholesale-readiness",
  "partner-channel-rollout",
  "premium-d2c-launch-commerce",
  "premium-d2c-conversion-audit"
];

export const CLAUDE_COMMANDS = [
  "business-os-router.md",
  "start-business.md",
  "pivot-business.md",
  "launch-product-or-service.md",
  "improve-sales-or-marketing.md",
  "expansion-smoke-test.md",
  "saas-digital-product.md",
  "local-service-business.md",
  "distributor-wholesale-readiness.md",
  "partner-channel-rollout.md",
  "premium-d2c-launch-commerce.md",
  "premium-d2c-conversion-audit.md"
];

export const INSTALL_DIR = ".business-os";
