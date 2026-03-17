import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const PACKAGE_ROOT = path.resolve(__dirname, "..");
export const PACKAGE_VERSION = "0.3.1";
export const DEFAULT_TARGET = "both";
export const DEFAULT_PROFILE = "full";
export const INSTALL_DIR = ".business-os";
export const OVERRIDE_DIR = path.join(INSTALL_DIR, "_cfg");

export const COMPONENTS = [
  {
    id: "start-core",
    label: "Start From Scratch",
    description: "Router, start, pivot, launch, growth, and expansion workflows.",
    codexSkill: "start-business",
    claudeCommand: "start-business.md"
  },
  {
    id: "pivot",
    label: "Pivot Existing Business",
    description: "Restructure or productize an existing business.",
    codexSkill: "pivot-business",
    claudeCommand: "pivot-business.md"
  },
  {
    id: "launch",
    label: "Launch Product Or Service",
    description: "Prepare an offer for launch and readiness checks.",
    codexSkill: "launch-product-or-service",
    claudeCommand: "launch-product-or-service.md"
  },
  {
    id: "growth",
    label: "Improve Sales Or Marketing",
    description: "Diagnose and improve route-to-market and conversion.",
    codexSkill: "improve-sales-or-marketing",
    claudeCommand: "improve-sales-or-marketing.md"
  },
  {
    id: "expansion",
    label: "Expansion Smoke Test",
    description: "Evaluate new categories or adjacent offers before adding them.",
    codexSkill: "expansion-smoke-test",
    claudeCommand: "expansion-smoke-test.md"
  },
  {
    id: "saas",
    label: "SaaS / Digital Product",
    description: "Activate the SaaS-specific business workflow.",
    codexSkill: "saas-digital-product",
    claudeCommand: "saas-digital-product.md"
  },
  {
    id: "local-service",
    label: "Local Service Business",
    description: "Activate local-service operations and route planning.",
    codexSkill: "local-service-business",
    claudeCommand: "local-service-business.md"
  },
  {
    id: "wholesale-readiness",
    label: "Distributor / Wholesale Readiness",
    description: "Evaluate partner-channel readiness before rollout.",
    codexSkill: "distributor-wholesale-readiness",
    claudeCommand: "distributor-wholesale-readiness.md"
  },
  {
    id: "partner-rollout",
    label: "Partner Channel Rollout",
    description: "Run partner onboarding and rollout planning after readiness.",
    codexSkill: "partner-channel-rollout",
    claudeCommand: "partner-channel-rollout.md"
  },
  {
    id: "premium-d2c-launch",
    label: "Premium D2C Launch",
    description: "Check premium D2C launch readiness and commerce setup.",
    codexSkill: "premium-d2c-launch-commerce",
    claudeCommand: "premium-d2c-launch-commerce.md"
  },
  {
    id: "premium-d2c-audit",
    label: "Premium D2C Conversion Audit",
    description: "Audit premium D2C conversion blockers and asset quality.",
    codexSkill: "premium-d2c-conversion-audit",
    claudeCommand: "premium-d2c-conversion-audit.md"
  }
];

export const ROUTER_SKILL = "business-os-router";
export const ROUTER_COMMAND = "business-os-router.md";

export const PROFILE_COMPONENTS = {
  core: ["start-core", "pivot", "launch", "growth", "expansion"],
  full: COMPONENTS.map((component) => component.id)
};

const COMPONENT_MAP = new Map(COMPONENTS.map((component) => [component.id, component]));

export function isValidTarget(target) {
  return ["codex", "claude", "both"].includes(target);
}

export function isValidProfile(profile) {
  return ["core", "full", "custom"].includes(profile);
}

export function getAllComponentIds() {
  return COMPONENTS.map((component) => component.id);
}

export function getProfileComponentIds(profile = DEFAULT_PROFILE) {
  if (profile === "custom") {
    return [];
  }

  return PROFILE_COMPONENTS[profile] || PROFILE_COMPONENTS[DEFAULT_PROFILE];
}

export function normalizeComponentIds(componentIds = []) {
  const normalized = [];
  for (const componentId of componentIds) {
    if (!COMPONENT_MAP.has(componentId)) {
      throw new Error(`Unknown component '${componentId}'.`);
    }

    if (!normalized.includes(componentId)) {
      normalized.push(componentId);
    }
  }

  return normalized;
}

export function parseComponentList(rawValue = "") {
  if (!rawValue.trim()) {
    return [];
  }

  return normalizeComponentIds(
    rawValue
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean)
  );
}

export function getComponentCatalog() {
  return COMPONENTS.map((component) => ({ ...component }));
}

export function resolveSelection(profile = DEFAULT_PROFILE, componentIds = []) {
  const selectedComponentIds =
    profile === "custom"
      ? normalizeComponentIds(componentIds)
      : getProfileComponentIds(profile);

  const selectedComponents = selectedComponentIds.map((id) => COMPONENT_MAP.get(id));
  const codexSkills = [ROUTER_SKILL, ...selectedComponents.map((component) => component.codexSkill)];
  const claudeCommands = [ROUTER_COMMAND, ...selectedComponents.map((component) => component.claudeCommand)];

  return {
    componentIds: selectedComponentIds,
    codexSkills,
    claudeCommands
  };
}
