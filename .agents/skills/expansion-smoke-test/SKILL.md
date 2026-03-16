---
name: expansion-smoke-test
description: Evaluate whether a business should add a new category, channel, geography, or adjacency. Use when the user wants a disciplined recommendation such as add now, pilot first, keep limited, defer, or reject.
---

# Expansion Smoke Test

Use this skill for bounded expansion decisions inside an existing business.

## When To Use

Use this skill when the user asks questions like:

- should I add this category
- should I enter this channel
- should I import this and sell it
- should I launch this new line
- should I expand into this geography

Do not use this skill when:

- the user is still defining the first core business
- the idea under review is actually a full business pivot
- the issue is only current-offer optimization

## Core Workflow

Run the `Evaluate Expansion / New Category` workflow from the active `v2` docs.

### Stage Order

1. Expansion framing
2. Core-business readiness check
3. Expansion fit assessment
4. Economics, operations, and channel assessment
5. Pilot or phasing design
6. Expansion decision

## Required Operating Rules

1. Keep the workflow decision-focused.
2. Do not confuse founder excitement with evidence.
3. Check whether the current business is stable enough to absorb more complexity.
4. Prefer a pilot recommendation when uncertainty is material.
5. Pull in finance, sourcing, ops, and channel analysis when the idea touches them materially.

## Main Docs To Load

Load these as needed:

- `/home/darko/Code/chitr/docs/business-os-workflow-evaluate-expansion-v2.md`
- `/home/darko/Code/chitr/docs/business-os-module-spec-o07-expansion-smoke-test-v2.md`
- `/home/darko/Code/chitr/docs/business-os-artifact-templates-v2.md`
- `/home/darko/Code/chitr/docs/business-os-evidence-rubric-v2.md`
- `/home/darko/Code/chitr/docs/business-os-question-bank-v2.md`

Also load:

- `/home/darko/Code/chitr/docs/business-os-module-map-v2.md`

when you need to route into finance, operations, sourcing, marketplaces, or experiment design.

## Default Output Set

Aim to produce or outline:

- Expansion Smoke Test Memo
- Financial Planning Memo where needed
- Import / Sourcing Evaluation Memo where needed
- Route-To-Market Strategy Memo where needed
- Experiment / Pilot Design Memo where needed
- Expansion Decision Dossier

## Recommendation Classes

End with one of:

- add now
- pilot first
- keep limited or custom
- defer
- reject

## References

Read `/home/darko/Code/chitr/.agents/skills/expansion-smoke-test/references/workflow-map.md` when you need the exact workflow and output map.
