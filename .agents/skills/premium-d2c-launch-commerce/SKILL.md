---
name: premium-d2c-launch-commerce
description: Evaluate premium D2C ecommerce launch readiness using the Business OS overlay. Use when the user needs premium product-page, trust, presentation, and self-serve conversion logic for a direct-to-consumer brand.
---

# Premium D2C Launch Commerce

Use this skill for premium D2C launch-commerce work.

## When To Use

Use this skill when the user:

- is launching a premium D2C product brand
- needs help with premium ecommerce conversion
- needs stronger product-page, asset, trust, packaging, or assisted-vs-self-serve logic
- wants to know if the D2C commerce layer is ready before traffic scale

Do not use this skill when:

- the business is not primarily D2C
- the offer is low-consideration and commodity-like
- the launch is mainly assisted B2B or partner-led

## Core Workflow

Run the `Premium D2C Launch Commerce` overlay from the canonical Business OS docs.

### Core Evaluation Areas

1. Premium conversion requirements
2. PDP and asset requirements
3. Trust and proof requirements
4. Assisted versus self-serve recommendation
5. Post-purchase confidence requirements
6. Gate and next-step decision

## Required Operating Rules

1. Use the canonical Business OS docs in `/home/darko/Code/chitr/docs`.
2. Keep the analysis tied to conversion decisions, not brand aesthetics alone.
3. Do not recommend paid scale if the commerce layer is not yet believable.
4. Prefer assisted or staged launch when premium trust and proof are still thin.
5. When the commerce path is clear, produce an Execution Activation Plan.
6. Use evidence honestly and state confidence clearly.

## Main Docs To Load

Load these as needed:

- `/home/darko/Code/chitr/docs/business-os-module-spec-o16-premium-d2c-launch-commerce.md`
- `/home/darko/Code/chitr/docs/business-os-workflow-launch-product-or-service.md`
- `/home/darko/Code/chitr/docs/business-os-artifact-templates.md`
- `/home/darko/Code/chitr/docs/business-os-evidence-rubric.md`
- `/home/darko/Code/chitr/docs/business-os-question-bank.md`

## Default Output Set

Aim to produce or outline:

- Premium D2C Launch Commerce Note
- PDP asset checklist where useful
- launch trust-gap note where useful
- assisted-selling recommendation note where useful
- Execution Activation Plan where the commerce path is clear

## Gate Behavior

By the end, classify the commerce layer into one of:

- proceed
- proceed with warnings
- conditional proceed
- defer
- block / validate first

## References

Read `/home/darko/Code/chitr/.agents/skills/premium-d2c-launch-commerce/references/workflow-map.md` when you need the exact evaluation map.
