---
name: premium-d2c-conversion-audit
description: Audit premium D2C ecommerce conversion using the Business OS workflow. Use when the user needs a structured review of PDPs, trust, browsing clarity, and post-purchase confidence before scaling traffic.
---

# Premium D2C Conversion Audit

Use this skill for premium D2C conversion-audit work.

## When To Use

Use this skill when the user:

- wants to audit a premium D2C site or launch before scaling traffic
- needs help with product-page conversion, trust gaps, or browsing clarity
- suspects the brand looks strong but is still hard to buy
- wants to decide between self-serve and assisted conversion

Do not use this skill when:

- the business is not primarily D2C
- the offer is still too undefined for a real conversion audit
- the issue is only traffic generation with no commerce-layer question

## Core Workflow

Run the `Premium D2C Conversion Audit` workflow from the canonical Business OS docs.

### Stage Order

1. Audit framing
2. Assortment and browsing review
3. PDP decision-usefulness review
4. Trust and proof review
5. Post-purchase confidence review
6. Assisted-vs-self-serve decision
7. Audit recommendation and priority plan

## Required Operating Rules

1. Use the canonical Business OS docs in `/home/darko/Code/chitr/docs`.
2. Keep the audit tied to conversion decisions, not generic design taste.
3. Do not recommend paid scale if the commerce layer still has critical trust or decision-usefulness gaps.
4. Prefer assisted or staged conversion when premium trust and proof are still thin.
5. Convert the audit recommendation into an Execution Activation Plan for the next 30-60 days.
6. Use evidence honestly and state confidence clearly.

## Main Docs To Load

Load these as needed:

- `/home/darko/Code/chitr/docs/business-os-workflow-premium-d2c-conversion-audit.md`
- `/home/darko/Code/chitr/docs/business-os-module-spec-o16-premium-d2c-launch-commerce.md`
- `/home/darko/Code/chitr/docs/business-os-artifact-templates.md`
- `/home/darko/Code/chitr/docs/business-os-evidence-rubric.md`
- `/home/darko/Code/chitr/docs/business-os-question-bank.md`

## Default Output Set

Aim to produce or outline:

- Premium D2C Conversion Audit
- PDP asset checklist where useful
- trust-gap note where useful
- assisted-vs-self-serve recommendation
- Launch Readiness update where relevant
- Execution Activation Plan for the first 30-60 day fix sequence

## Gate Behavior

By the end, classify the commerce layer into one of:

- ready for controlled traffic
- fix critical conversion gaps first
- launch assisted first
- narrow the assortment and rebuild the commerce layer

## References

Read `/home/darko/Code/chitr/.agents/skills/premium-d2c-conversion-audit/references/workflow-map.md` when you need the exact workflow and output map.
