---
name: launch-product-or-service
description: Prepare a product or service for launch with clear offer, pricing, operations, channels, marketing, and launch readiness logic. Use when the user knows what they want to launch and needs a disciplined launch process.
---

# Launch Product Or Service

Use this skill for launch planning and readiness.

## When To Use

Use this skill when the user:

- already has a defined or mostly defined offer
- wants to launch a product or service
- needs pricing, operations, channels, and marketing aligned for launch
- wants a launch-readiness decision instead of general strategy only

Do not use this skill when:

- the business idea is still too vague
- the user needs a pivot diagnosis first
- the user is only evaluating an expansion idea

## Core Workflow

Run the `Launch A New Product Or Service` workflow from the canonical Business OS docs.

### Stage Order

1. Launch framing
2. Offer definition
3. Economics and financial readiness
4. Operations and delivery readiness
5. Channel and marketing readiness
6. Launch readiness review
7. Launch recommendation and next-step decision

## Required Operating Rules

1. Use the canonical Business OS docs in `/home/darko/Code/chitr/docs`.
2. Keep the workflow execution-aware, not just strategic.
3. Do not recommend launch if pricing, delivery, or channels are still speculative.
4. Prefer phased or pilot launch recommendations when readiness is mixed.
5. Treat route-to-market as a required launch decision, not a loose options list.
6. If hybrid is recommended, state:
   - the primary launch channel first
   - the later channel to activate next
   - why now / why not now
   - the gate for moving into the later channel
7. When the launch path is clear, produce an Execution Activation Plan and a 30/60 Day Execution Plan.
8. Make blockers explicit when the answer is `not ready`.

## Main Docs To Load

Load these as needed:

- `/home/darko/Code/chitr/docs/business-os-workflow-launch-product-or-service.md`
- `/home/darko/Code/chitr/docs/business-os-artifact-templates.md`
- `/home/darko/Code/chitr/docs/business-os-evidence-rubric.md`
- `/home/darko/Code/chitr/docs/business-os-question-bank.md`
- `/home/darko/Code/chitr/docs/business-os-module-map.md`

## Default Output Set

Aim to produce or outline:

- Offer Architecture Document
- Pricing And Unit Economics Memo
- Operations Playbook
- Brand, Messaging, And Trust Framework
- Route-To-Market Strategy Memo
- Marketing Strategy Plan
- Execution Activation Plan
- 30/60 Day Execution Plan
- Launch Readiness Document
- Financial Planning Memo where needed
- Customer Success And Retention Memo where relevant
- Launch Dossier

The Route-To-Market Strategy Memo should explicitly state:

- recommended channel architecture
- primary launch channel first
- secondary channel later if relevant
- deferred channels
- why now / why not now
- channel decision gate

## Gate Behavior

By the end, classify the launch into one of:

- ready to launch
- launch in phases
- pilot before full launch
- not ready

## References

Read `/home/darko/Code/chitr/.agents/skills/launch-product-or-service/references/workflow-map.md` when you need the exact workflow and output map.
