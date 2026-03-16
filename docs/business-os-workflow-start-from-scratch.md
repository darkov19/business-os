# Business OS Workflow: Start From Scratch

Status: Draft workflow spec
Purpose: Define the end-to-end workflow the Business OS should use when a user wants to start a business from scratch with only an idea, a vague concept, or an early direction.

Related:

- [business-os-framework.md](./business-os-framework.md)
- [business-os-intent-map.md](./business-os-intent-map.md)
- [business-os-context-classifier.md](./business-os-context-classifier.md)
- [business-os-module-map.md](./business-os-module-map.md)
- [business-os-module-spec-template.md](./business-os-module-spec-template.md)
- [business-os-artifact-templates.md](./business-os-artifact-templates.md)
- [business-os-evidence-rubric.md](./business-os-evidence-rubric.md)
- [business-os-question-bank.md](./business-os-question-bank.md)

---

## 1. Why This Workflow Exists

Many users will enter the Business OS with only:

- an idea
- a rough business direction
- a personal motivation
- little structure

This workflow exists to turn that early-stage ambiguity into:

- a clearer business definition
- a better customer hypothesis
- a basic market view
- a first positioning direction
- an initial offer structure
- a clear next validation or planning path

This is not a “write a business plan immediately” workflow.

It is a structured business-foundation workflow.

---

## 2. When To Use

Use this workflow when:

- the user's primary intent is `Start From Scratch`
- no real business system exists yet
- the user has an idea but does not know where to start
- the user wants a structured business foundation before deeper planning

Typical user queries:

- I want to start a business
- I have an idea but I do not know where to start
- help me build this from scratch
- help me turn this into a real business idea

---

## 3. When Not To Use

Do not use this workflow when:

- the user already has an operating business and wants to pivot it
- the user mainly wants to launch a defined offer
- the user is trying to diagnose an existing problem
- the user is evaluating an expansion inside an existing business

In those cases, route to a more specific workflow such as:

- Pivot Existing Business
- Launch New Product Or Service
- Diagnose What Is Broken
- Evaluate Expansion / New Category

---

## 4. Workflow Goal

By the end of this workflow, the system should be able to produce:

- a Founder Brief
- a Business Definition Note
- an Opportunity / Problem Memo
- a Customer Research Brief
- a Market And Competitor Memo
- a Positioning Memo
- a Business Concept Dossier

And it should be able to say one of the following:

- this idea is ready for deeper planning
- this idea needs validation first
- this idea is too vague and needs clarification
- this idea may be weak or misaligned and should be reconsidered

---

## 5. Primary Modules

This workflow should typically use:

1. M01 Founder Context And Intent
2. M03 Business Definition
3. M04 Problem / Opportunity Definition
4. M05 Customer Research
5. M06 Market, Competitor, And Alternatives Research
6. M07 Positioning And Value Proposition
7. M08 Offer Architecture

Control modules used throughout:

- C01 Assumption Log
- C02 Evidence Tracker
- C03 Decision Gate Tracker
- C05 Open Questions Register

Optional overlays if needed:

- O10 SaaS / Digital Product Overlay
- O11 Local Service Operations Overlay
- O12 Education / Coaching Overlay
- O13 Marketplace / Platform Strategy Overlay
- O14 Experimentation And Pilot Design Overlay

---

## 6. Workflow Stages

This workflow should run in six stages.

1. Entry And Routing
2. Foundation Discovery
3. Customer And Market Understanding
4. Strategy Framing
5. Concept Consolidation
6. Gate And Next-Step Decision

---

## 7. Stage 1: Entry And Routing

### Goal

Confirm that this is truly a start-from-scratch case and classify the business context.

### Required Actions

1. Detect `Start From Scratch` as the primary intent.
2. Confirm whether a business already exists.
3. Classify the broad business type:
   - product
   - service
   - software
   - education
   - hybrid
4. Determine whether the user has:
   - only an idea
   - early research
   - early customer experience
   - a rough offer already in mind

### Key Questions

- Are you starting from zero, or does a business already exist?
- What kind of business are you trying to build?
- How far along are you right now?
- Do you already know what you want to sell, or is that still unclear?

### Outputs

- routing confirmation
- initial context classification

### Gate

If the user is not actually starting from scratch, exit this workflow and reroute.

---

## 8. Stage 2: Foundation Discovery

### Goal

Turn a vague idea into a clearer foundation.

### Primary Modules

- M01 Founder Context And Intent
- M03 Business Definition
- M04 Problem / Opportunity Definition

### Required Questions

- Why do you want to build this business?
- Why now?
- What problem, need, or opportunity do you think exists?
- What do you think the business would sell?
- Who do you think would buy it?
- What constraints already matter for you?

### Analysis Tasks

1. Clarify founder motivation and constraints.
2. Clarify whether the idea is product, service, software, education, or hybrid.
3. Define a first-pass business model summary.
4. Define the problem or opportunity hypothesis.

### Outputs

- Founder Brief
- Business Definition Note
- Opportunity / Problem Memo

### Gate

Use `Proceed With Warnings` if the foundation is still assumption-heavy but coherent enough to continue.

Use `Defer` or `Block / Validate First` if the user cannot yet explain:

- what the business is
- who it serves
- why it should exist

---

## 9. Stage 3: Customer And Market Understanding

### Goal

Move from founder belief to a more grounded view of demand and customer priority.

### Primary Modules

- M05 Customer Research
- M06 Market, Competitor, And Alternatives Research

### Required Questions

- Who are the most likely customer segments?
- Which one should be prioritized first?
- How do they currently solve the problem?
- What alternatives already exist?
- Why might a customer switch?

### Required Research

Depending on the business type, this may include:

- competitor review
- alternative review
- review mining
- community observation
- category scan
- observed buyer language

### Analysis Tasks

1. identify candidate customer segments
2. choose a likely priority segment
3. identify the current alternatives
4. assess whether the opportunity is real, crowded, differentiated, or too vague

### Outputs

- Customer Research Brief
- Market And Competitor Memo

### Gate

Use `Conditional Proceed` if multiple segments still look plausible and further validation is needed.

Use `Block / Validate First` if the target customer remains too broad or purely imagined.

---

## 10. Stage 4: Strategy Framing

### Goal

Turn the customer and market understanding into a first strategic business frame.

### Primary Modules

- M07 Positioning And Value Proposition
- M08 Offer Architecture

### Required Questions

- What should this business be known for?
- What makes it meaningfully different?
- What is the most credible value proposition for the chosen customer?
- What is the likely first offer?
- What should be included or excluded at the start?

### Analysis Tasks

1. define a first positioning direction
2. define a first value proposition
3. identify the likely core offer
4. avoid overly broad offer design

### Outputs

- Positioning Memo
- Offer Architecture Document

### Gate

Use `Proceed With Warnings` if the positioning is directional but customer proof is still limited.

Use `Conditional Proceed` if the offer should be narrowed further before launch planning.

---

## 11. Stage 5: Concept Consolidation

### Goal

Consolidate the most important early findings into one usable startup-stage business artifact.

### Inputs

- Founder Brief
- Business Definition Note
- Opportunity / Problem Memo
- Customer Research Brief
- Market And Competitor Memo
- Positioning Memo
- Offer Architecture Document

### Output

- Business Concept Dossier

### Dossier Purpose

The dossier should capture:

- what the business is
- who it serves
- why it may be worth building
- how it is different
- what the likely first offer is
- what remains uncertain

This is the main output of the workflow.

---

## 12. Stage 6: Gate And Next-Step Decision

### Goal

Decide what should happen after the foundation workflow is completed.

### Possible End States

#### End State A: Ready For Deeper Planning

Use when:

- the business concept is coherent
- customer and market logic are directionally credible
- the initial offer is clear enough

Likely next workflows:

- Launch A New Product Or Service
- Fix Pricing, Economics, Or Capital Pressure
- Route-To-Market Strategy

#### End State B: Needs Validation First

Use when:

- the concept is promising
- but customer priority, pricing, or demand still need evidence

Likely next workflow:

- Validate An Idea
- O14 Experimentation And Pilot Design

#### End State C: Too Vague

Use when:

- the business still lacks a stable definition

Likely next action:

- return to foundation questions
- narrow the idea

#### End State D: Weak Or Misaligned Opportunity

Use when:

- customer need appears weak
- differentiation appears weak
- founder constraints are badly misaligned

Likely next action:

- revise the idea or rethink the business direction

---

## 13. Control Artifact Rules

Throughout the workflow, update:

- Assumption Log
  - capture all early beliefs that are not validated
- Evidence Tracker
  - capture customer, market, and competitor evidence
- Decision Gate Tracker
  - capture key gate outcomes at each stage
- Open Questions Register
  - capture unresolved issues around customer, positioning, offer, or viability

---

## 14. Evidence Expectations

This workflow should allow progress with limited evidence, but it must label confidence honestly.

### Acceptable Evidence Pattern

At early stage, it is acceptable to work with:

- E0-E1 in Stage 2
- E1-E2 in Stage 3
- E2 preferred for stronger Stage 4 recommendations

### Not Acceptable

Do not treat the workflow as fully validated just because:

- the founder is excited
- competitors exist
- the concept sounds good in abstract terms

The final artifact should clearly state:

- what is known
- what is inferred
- what still needs validation

---

## 15. Skill / Agent Notes

- This workflow is a strong candidate for a top-level standalone skill such as `start-business`.
- The workflow should be interactive, not one-shot.
- The agent should pause after the foundation stage if the user’s answers are still too vague.
- External research should be used selectively and proportionately.
- The workflow should end with a clear next-step recommendation rather than simply a large document dump.

---

## 16. Suggested Skill Behavior

If implemented as a skill, the workflow should behave roughly like this:

1. confirm intent and classify business type
2. ask a compact first set of foundation questions
3. summarize understanding before going deeper
4. run customer and market discovery
5. propose a first positioning and offer frame
6. generate the Business Concept Dossier
7. provide a gate-based recommendation for what the user should do next

---

## 17. Recommended Next Workflow To Build

After `Start From Scratch`, the next highest-value workflow is likely:

- `Pivot Existing Business`

That will test the Business OS in a very different scenario and make it much more useful for businesses like Chitr.
