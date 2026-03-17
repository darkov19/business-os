---
name: partner-channel-rollout
description: Roll out and govern distributor, wholesale, dealer, or reseller channels using the Business OS partner-channel workflow. Use when the business has decided to enter indirect channels and now needs onboarding, governance, reorder, and channel-conflict logic.
---

# Partner Channel Rollout

Use this skill for post-readiness partner-channel execution.

## When To Use

Use this skill when the user:

- has decided to enter distributor, wholesale, dealer, or reseller channels
- needs a rollout system for partner onboarding and governance
- needs help with reorder management, collections, account ownership, or channel conflict
- has an indirect channel already and needs to tighten execution

Do not use this skill when:

- the user is still deciding whether indirect channels are a good idea
- readiness is still unclear
- the need is only a normal direct B2B sales pipeline

## Core Workflow

Run the `Partner Channel Rollout` workflow from the canonical Business OS docs.

### Stage Order

1. Channel rollout framing
2. Partner model and scope definition
3. Economics, payment, and stock discipline
4. Partner onboarding and support design
5. Territory, conflict, and governance rules
6. Performance, reorder, and collections review
7. Rollout recommendation and next-step decision

## Required Operating Rules

1. Use the canonical Business OS docs in `/home/darko/Code/chitr/docs`.
2. Keep the work operational and governance-heavy, not abstract channel strategy.
3. Do not recommend broad rollout if support, reorder, or collections discipline is weak.
4. Prefer bounded rollout and measurable review cadence over uncontrolled partner sprawl.
5. When the rollout path is clear, produce an Execution Activation Plan and a 30/60 Day Execution Plan.
6. Use evidence honestly and state confidence clearly.

## Main Docs To Load

Load these as needed:

- `/home/darko/Code/chitr/docs/business-os-workflow-partner-channel-rollout.md`
- `/home/darko/Code/chitr/docs/business-os-module-spec-o05-distributor-wholesale-readiness.md`
- `/home/darko/Code/chitr/docs/business-os-artifact-templates.md`
- `/home/darko/Code/chitr/docs/business-os-evidence-rubric.md`
- `/home/darko/Code/chitr/docs/business-os-question-bank.md`

## Default Output Set

Aim to produce or outline:

- Partner Channel Rollout Plan
- Distributor / Wholesale Readiness Memo where missing
- Route-To-Market Strategy Memo where needed
- Financial Planning Memo where payment-cycle risk matters
- operations and support update
- Execution Activation Plan
- 30/60 Day Execution Plan

## Gate Behavior

By the end, classify the rollout into one of:

- pilot with controlled partners
- roll out with conditions
- tighten governance first
- defer broader rollout

## References

Read `/home/darko/Code/chitr/.agents/skills/partner-channel-rollout/references/workflow-map.md` when you need the exact workflow and output map.
