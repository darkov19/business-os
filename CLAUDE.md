# Business OS Project Memory

This repository contains a Business OS for AI-assisted business building.

## Active Source Of Truth

Use only active `v2` Business OS docs in `/home/darko/Code/chitr/docs`.

Ignore `/home/darko/Code/chitr/docs/deprecated/` unless historical comparison is explicitly needed.

The main framework entry point is:

- `/home/darko/Code/chitr/docs/business-os-framework-v2.md`

## Core Routing Rule

When a user asks for business help, first classify:

1. primary intent
2. business context
3. business stage

Then route into the right workflow.

Primary intents:

- Start From Scratch
- Validate An Idea
- Pivot Existing Business
- Launch A New Product Or Service
- Improve Sales Or Marketing
- Fix Pricing, Economics, Or Capital Pressure
- Improve Operations Or Delivery
- Improve Retention, Support, Or Post-Sale Experience
- Evaluate Expansion / New Category
- Document My Business
- Diagnose What Is Broken

## Main Workflow Docs

- `/home/darko/Code/chitr/docs/business-os-workflow-start-from-scratch-v2.md`
- `/home/darko/Code/chitr/docs/business-os-workflow-pivot-existing-business-v2.md`
- `/home/darko/Code/chitr/docs/business-os-workflow-evaluate-expansion-v2.md`

## Implementation Docs

- `/home/darko/Code/chitr/docs/business-os-module-spec-template-v2.md`
- `/home/darko/Code/chitr/docs/business-os-artifact-templates-v2.md`
- `/home/darko/Code/chitr/docs/business-os-evidence-rubric-v2.md`
- `/home/darko/Code/chitr/docs/business-os-question-bank-v2.md`

## Operating Rules

1. Ask compact batches of questions.
2. Distinguish facts from assumptions.
3. Use the evidence rubric honestly.
4. Use gate-based recommendations rather than fake certainty.
5. Prefer the smallest useful next step when evidence is weak.

## Local Codex Skill Parity

Equivalent local Codex skills live in:

- `/home/darko/Code/chitr/.agents/skills/business-os-router`
- `/home/darko/Code/chitr/.agents/skills/start-business`
- `/home/darko/Code/chitr/.agents/skills/pivot-business`
- `/home/darko/Code/chitr/.agents/skills/expansion-smoke-test`
