---
name: start-business
description: Guide a founder from a vague idea to a structured business foundation. Use when the user is starting from scratch and wants help defining the business, customer, market, positioning, and first offer before deeper launch planning.
---

# Start Business

Use this skill for greenfield business creation.

## When To Use

Use this skill when the user:

- has a business idea but no real structure yet
- wants help starting from zero
- wants to turn rough thinking into a business foundation
- needs business docs before launch planning

Do not use this skill when:

- a real business already exists and the user wants to change it
- the user is evaluating an expansion inside an existing business
- the main issue is a narrow pricing, ops, or channel problem

In those cases, prefer `$pivot-business`, `$expansion-smoke-test`, or the appropriate later workflow.

## Core Workflow

Run the `Start From Scratch` workflow from the canonical Business OS docs.

### Stage Order

1. Entry and routing confirmation
2. Foundation discovery
3. Customer and market understanding
4. Strategy framing
5. Concept consolidation
6. Gate and next-step decision

## Required Operating Rules

1. Use the canonical Business OS docs in `/home/darko/Code/chitr/docs`.
2. Ask compact batches of questions, not giant interrogations.
3. Separate:
   - user facts
   - inferred conclusions
   - open assumptions
4. Use the evidence rubric honestly. Do not overstate weak signals.
5. If the workflow reaches route-to-market, recommend the best current channel model rather than listing options only.
6. If hybrid is the answer, state:
   - the first channel to focus on
   - the later channel to unlock next
   - why now / why not now
   - the gate for moving into the later channel
7. End with a clear next-step recommendation, not just a long document.

## Main Docs To Load

Load these as needed:

- `/home/darko/Code/chitr/docs/business-os-workflow-start-from-scratch.md`
- `/home/darko/Code/chitr/docs/business-os-question-bank.md`
- `/home/darko/Code/chitr/docs/business-os-artifact-templates.md`
- `/home/darko/Code/chitr/docs/business-os-evidence-rubric.md`
- `/home/darko/Code/chitr/docs/business-os-module-spec-m05-customer-research.md`

## Default Output Set

Aim to produce or outline:

- Founder Brief
- Business Definition Note
- Opportunity / Problem Memo
- Customer Research Brief
- Market And Competitor Memo
- Positioning Memo
- Route-To-Market Strategy Memo where the concept is developed enough
- Business Concept Dossier

If the user is too early for full outputs, say so and keep the artifact set lighter.

## Gate Behavior

By the end, classify the idea into one of:

- ready for deeper planning
- needs validation first
- too vague and needs clarification
- weak or misaligned opportunity

## References

Read `/home/darko/Code/chitr/.agents/skills/start-business/references/workflow-map.md` when you need the exact workflow and output map.
