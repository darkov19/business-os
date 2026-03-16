# Business OS Module Spec Template v2

Status: Implementation template
Purpose: Define the standard structure every Business OS module should use so modules are consistent, AI-runnable, and easy to convert into skills, workflows, and reusable business-building components.

Related:

- [business-os-framework-v2.md](./business-os-framework-v2.md)
- [business-os-module-map-v2.md](./business-os-module-map-v2.md)
- [business-os-decision-gate-philosophy-v2.md](./business-os-decision-gate-philosophy-v2.md)
- [business-os-bmad-v6-research-v1.md](./business-os-bmad-v6-research-v1.md)

---

## 1. Why This Template Exists

The Business OS architecture defines:

- what modules exist
- what they are for
- how they connect

But architecture alone is not enough to make the system executable.

This template turns each module into a standard operating unit that can later be used by:

- Codex skills
- Claude Code skills or commands
- router workflows
- artifact generators
- human reviewers

Without a consistent module spec, each module would become ad hoc and difficult to reuse.

---

## 2. Design Goals

Every module spec should be:

- clear enough for human review
- structured enough for agent execution
- small enough to load on demand
- explicit about evidence and assumptions
- explicit about outputs
- explicit about decision gates

This template is intentionally BMAD-like in operating discipline, but adapted for business work rather than software delivery.

---

## 3. Standard Module Spec Structure

Every Business OS module should use the following top-level sections.

1. Module Identity
2. Purpose
3. When To Use
4. When Not To Use
5. Inputs And Prerequisites
6. Discovery Questions
7. Research Requirements
8. Analysis Tasks
9. Evidence Requirements
10. Outputs
11. Decision Gates
12. Red Flags
13. Handoff / Next Routing
14. Artifact Update Rules
15. Skill / Agent Notes

---

## 4. Canonical Template

Use the following structure for every module spec.

```md
# <Module ID> <Module Name>

Status: Draft / Active
Type: Core / Overlay / Control
Version: v2
Owner: Business OS

## 1. Purpose

State exactly what decision this module helps the user make.

## 2. When To Use

Describe the situations, intents, and business contexts where this module should activate.

## 3. When Not To Use

Describe when this module is premature, irrelevant, or should be deferred.

## 4. Prerequisites

List the minimum conditions, prior modules, or baseline context needed.

## 5. Inputs

List the inputs this module expects.

Typical inputs may include:

- user-provided context
- prior artifacts
- assumptions log
- evidence tracker
- competitor list
- interview notes

## 6. Discovery Questions

List the questions the agent should ask the user before drafting major outputs.

Split into:

### Required Questions

Questions that must be answered before meaningful work can begin.

### Useful Questions

Questions that improve quality but do not always block progress.

## 7. Research Requirements

Describe what the agent should research externally or internally.

Split into:

### Required Research

Minimum research needed for credibility.

### Optional Research

Additional work that deepens the result if time and context allow.

## 8. Analysis Tasks

List the reasoning and synthesis tasks this module must perform.

These should be action-oriented.

Examples:

- compare customer segments
- identify decision criteria
- map competitors by position and price
- estimate margin sensitivity

## 9. Evidence Requirements

Define what evidence quality is needed.

Reference the Business OS evidence model where possible.

For example:

- minimum evidence threshold for exploratory output
- minimum evidence threshold for strategic recommendation
- what counts as weak vs strong evidence in this module

## 10. Outputs

List the artifact(s) this module can produce.

For each output, specify:

- artifact name
- output condition
- output depth level

## 11. Decision Gates

Define the possible gate outcomes for this module and what conditions trigger them.

Use the standard gate outcomes:

- Proceed
- Proceed With Warnings
- Conditional Proceed
- Defer
- Block / Validate First

## 12. Red Flags

List the conditions that should cause the agent to slow down, warn, defer, or block.

## 13. Handoff / Next Routing

Define where this module normally routes next.

Include:

- common next modules
- optional next modules
- conditions that trigger each route

## 14. Artifact Update Rules

Specify which control artifacts must be updated.

Typically:

- Assumption Log
- Evidence Tracker
- Decision Gate Tracker
- Open Questions Register

## 15. Skill / Agent Notes

Document execution notes for future skill implementation.

Examples:

- whether this module should run in one pass or iteratively
- whether subagent research is useful
- whether the workflow should pause for user review before writing outputs
- whether the module is a good standalone skill or a router-invoked component
```

---

## 5. Section Guidance

## 5.1 Module Identity

Purpose:

- make the module referenceable, versioned, and stable

Recommended fields:

- module ID
- module name
- type
- version
- status

## 5.2 Purpose

This section must answer:

- what decision is this module for
- what business ambiguity should be reduced

It should not be generic.

Bad:

- helps with strategy

Better:

- helps determine which customer segment should be prioritized first and why

## 5.3 When To Use / When Not To Use

This section is important for routing.

It should mention:

- user intents
- business types
- maturity stage
- cases where the module is too early or unnecessary

## 5.4 Prerequisites And Inputs

These sections stop the module from pretending context exists when it does not.

They should explicitly say:

- what prior documents or facts are needed
- what can be inferred
- what must be asked

## 5.5 Discovery Questions

This section is critical.

Questions should be:

- specific
- decision-relevant
- grouped by importance

Avoid massive question dumps.

The goal is to gather only what is needed to do credible work.

## 5.6 Research Requirements

This section should define:

- what research is necessary
- what sources are acceptable
- when research can be skipped

This is especially important for market, competitor, pricing, and channel modules.

## 5.7 Analysis Tasks

This should define what the agent actually has to think through.

This is where the business logic lives.

The tasks should be concrete enough that two different agents would perform comparable work.

## 5.8 Evidence Requirements

This section should connect to the gate system.

Every module should say:

- what evidence threshold is acceptable for an exploratory output
- what threshold is acceptable for a recommendation

## 5.9 Outputs

Each module may produce:

- a primary artifact
- one or more supporting notes
- control artifact updates

This section should say exactly what the module is responsible for creating.

## 5.10 Decision Gates

This section should make the module behavior disciplined.

For each likely gate outcome, describe:

- what triggers it
- what next action it implies

## 5.11 Red Flags

This section should capture module-specific failure modes.

Examples:

- customer definition too broad
- pricing built without cost inputs
- expansion proposed without capability proof

## 5.12 Handoff / Next Routing

This section turns a module into part of a workflow rather than an isolated note.

Examples:

- customer research normally routes into positioning
- positioning normally routes into offer architecture
- pricing may route into finance or route-to-market

## 5.13 Artifact Update Rules

This section enforces control-system discipline.

At minimum, most modules should update:

- assumptions
- evidence
- decisions
- open questions

## 5.14 Skill / Agent Notes

This section makes the spec implementation-ready for Codex and Claude Code.

Examples:

- use subagent-style research only when external research volume is high
- pause after discovery before generating a formal artifact
- treat this as a router-invoked submodule, not a top-level skill

---

## 6. Evidence And Gate Integration Rules

Every module spec should explicitly reference:

- the evidence levels from [business-os-decision-gate-philosophy-v2.md](./business-os-decision-gate-philosophy-v2.md)
- the standard gate outcomes

Minimum expectation:

- define exploratory threshold
- define recommendation threshold
- define block conditions

This ensures module behavior stays aligned with the Business OS judgment system.

---

## 7. Module Spec Writing Rules

When writing a Business OS module spec:

1. optimize for decision quality, not completeness theater
2. keep the module narrow enough to be reusable
3. avoid embedding business-specific assumptions into universal modules
4. move business-specific complexity into overlays
5. define what the agent should ask before it writes
6. define what the agent should research before it concludes
7. define what artifact the module owns
8. define when the module should stop and ask for validation

---

## 8. Mapping To Codex Skills

This template is designed to map cleanly into Codex skills.

Typical mapping:

- `Purpose`, `When To Use`, and `When Not To Use` inform `SKILL.md`
- `Discovery Questions`, `Research Requirements`, and `Analysis Tasks` become the skill workflow
- `Outputs` define which docs or artifacts are created
- `Skill / Agent Notes` define whether scripts, references, or helper files are needed

Recommended implementation pattern:

- top-level user workflows become standalone skills
- deeper modules may be router-invoked internal skills or reusable references

---

## 9. Mapping To Claude Code

This template also maps well to Claude Code.

Typical mapping:

- module rules can live in project docs or skill files
- `When To Use` helps slash-command selection or skill activation
- `Artifact Update Rules` can later inform hooks or enforcement logic
- `Skill / Agent Notes` can guide use of forked context, memory, or hooks

---

## 10. Recommended Next Step

After this template, the best next implementation documents are:

1. a worked example module spec
2. artifact templates
3. evidence rubric
4. question bank

The best first worked example is likely:

- `M05 Customer Research`

because it sits near the center of the Business OS and affects many downstream decisions.
