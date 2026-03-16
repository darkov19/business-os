# Business OS Workflow: Pivot Existing Business v2

Status: Draft workflow spec
Purpose: Define the end-to-end workflow the Business OS should use when a user already has a business and wants to change its direction, model, offer structure, customer focus, or go-to-market approach.

Related:

- [business-os-framework-v2.md](./business-os-framework-v2.md)
- [business-os-intent-map-v2.md](./business-os-intent-map-v2.md)
- [business-os-context-classifier-v2.md](./business-os-context-classifier-v2.md)
- [business-os-module-map-v2.md](./business-os-module-map-v2.md)
- [business-os-gap-resolution-v2.md](./business-os-gap-resolution-v2.md)
- [business-os-workflow-start-from-scratch-v2.md](./business-os-workflow-start-from-scratch-v2.md)

---

## 1. Why This Workflow Exists

Many users will not be starting from zero.

They will already have:

- an existing business
- current customers
- some revenue or activity
- operating habits
- sunk costs
- founder identity tied to the current model

But something is no longer working.

They may want to:

- move from services to products
- change customer type
- reduce dependence on custom work
- create a new business model
- reposition an existing business
- preserve what works while changing what does not

This workflow exists to help the user pivot deliberately rather than reactively.

---

## 2. When To Use

Use this workflow when:

- the primary intent is `Pivot Existing Business`
- a business already exists in some meaningful form
- the user wants to change direction rather than only optimize one small area

Typical user queries:

- my current business is not working
- I want to pivot this business
- we want to move from services to products
- I want to change this business model
- I want to reposition the business and build something stronger

---

## 3. When Not To Use

Do not use this workflow when:

- the user is truly starting from zero
- the user only wants to launch a defined offer inside an otherwise healthy business
- the user only needs a pricing fix, channel fix, or operations cleanup
- the user is only evaluating one expansion idea rather than rethinking the business itself

In those cases, route to:

- Start From Scratch
- Launch A New Product Or Service
- Fix Pricing, Economics, Or Capital Pressure
- Improve Operations Or Delivery
- Evaluate Expansion / New Category

---

## 4. Workflow Goal

By the end of this workflow, the system should be able to produce:

- a Current State / Pivot Diagnosis Memo
- an Asset And Capability Audit
- an updated Business Definition Note
- a Positioning Memo for the new direction
- an Offer Architecture Document for the new model
- a Pricing And Unit Economics Memo
- a Route-To-Market Strategy Memo
- a Financial Planning Memo where relevant
- a Pivot Strategy Dossier

And it should be able to state clearly:

- what should be preserved
- what should be stopped
- what the new business direction is
- what risks the pivot creates
- what should be tested before full commitment

---

## 5. Primary Modules

This workflow should typically use:

1. M01 Founder Context And Intent
2. M02 Current State And Pivot Diagnosis
3. M03 Business Definition
4. M05 Customer Research
5. M07 Positioning And Value Proposition
6. M08 Offer Architecture
7. M09 Costing, Pricing, And Unit Economics
8. M10 Operations, Delivery, And Supply System
9. M12 Route-To-Market And Sales Architecture
10. M14 Launch And Execution Planning
11. M17 Financial Planning And Capital Allocation

Overlay modules commonly used:

- O01 Asset And Capability Audit
- O02 Productization / Service Standardization
- O03 Inventory, Fulfillment, And Packaging
- O09 Founder Dependency And Delegation Risk
- O14 Experimentation And Pilot Design
- O15 Organization And Team Design

Control modules used throughout:

- C01 Assumption Log
- C02 Evidence Tracker
- C03 Decision Gate Tracker
- C05 Open Questions Register

---

## 6. Workflow Stages

This workflow should run in seven stages.

1. Entry And Pivot Confirmation
2. Current State Diagnosis
3. Asset And Constraint Audit
4. New Direction Definition
5. Pivot Model Design
6. Risk, Finance, And Execution Readiness
7. Pivot Decision And Next-Step Recommendation

---

## 7. Stage 1: Entry And Pivot Confirmation

### Goal

Confirm that the user needs a real pivot workflow rather than a smaller optimization workflow.

### Required Actions

1. Confirm that a business already exists.
2. Clarify what is changing:
   - offer
   - customer
   - revenue model
   - channel mix
   - positioning
   - business model
3. Classify the current business type and desired future type.

### Key Questions

- What business exists today?
- What is not working well enough?
- What kind of change are you considering?
- Is this a full pivot or a major shift inside the same business?

### Gate

If the change is narrow and not strategic, reroute to a smaller workflow.

---

## 8. Stage 2: Current State Diagnosis

### Goal

Understand what exists before recommending what should change.

### Primary Modules

- M02 Current State And Pivot Diagnosis

### Required Questions

- What do you currently sell?
- Who currently buys from you?
- What is working today?
- What is not working today?
- Where are the biggest frustrations: demand, delivery, pricing, margins, focus, or something else?
- What evidence do you have that the current model is weak?

### Analysis Tasks

1. map the current business model
2. identify strengths and failure points
3. distinguish symptoms from likely root causes
4. identify whether the pivot is driven by:
   - weak demand
   - weak margins
   - founder fatigue
   - delivery complexity
   - channel mismatch
   - limited scalability

### Outputs

- Current State / Pivot Diagnosis Memo

### Gate

Use `Proceed With Warnings` if diagnosis is directionally clear but data is limited.

Use `Block / Validate First` if the user is trying to pivot without understanding what is actually broken.

---

## 9. Stage 3: Asset And Constraint Audit

### Goal

Determine what should be preserved and what can be reused.

### Primary Modules

- O01 Asset And Capability Audit
- O09 Founder Dependency And Delegation Risk

### Required Questions

- What capabilities does the business already have?
- What customers, reputation, channels, vendors, or systems already exist?
- What parts of the current business are worth preserving?
- What parts should probably be stopped?
- Where is the founder too central to the current model?

### Analysis Tasks

1. identify reusable assets
2. identify transferable capabilities
3. identify sunk-cost traps that should not drive the pivot
4. identify founder bottlenecks

### Outputs

- Asset And Capability Audit
- Founder Dependency Risk Note if needed

### Gate

Use `Conditional Proceed` if the new direction depends heavily on capabilities the business does not yet have.

---

## 10. Stage 4: New Direction Definition

### Goal

Define what the pivot is actually trying to become.

### Primary Modules

- M03 Business Definition
- M05 Customer Research
- M07 Positioning And Value Proposition

### Required Questions

- What should the future business look like?
- Who should the future primary customer be?
- What should the business be known for after the pivot?
- Why is this new direction better than the current one?

### Analysis Tasks

1. define the post-pivot business model at a high level
2. identify the future priority customer
3. define the pivot positioning
4. test whether the new direction fits the preserved assets

### Outputs

- updated Business Definition Note
- Customer Research Brief if customer changes materially
- Positioning Memo

### Gate

Use `Block / Validate First` if the future direction is still vague or internally inconsistent.

---

## 11. Stage 5: Pivot Model Design

### Goal

Translate the future direction into a usable business model.

### Primary Modules

- M08 Offer Architecture
- M09 Costing, Pricing, And Unit Economics
- M10 Operations, Delivery, And Supply System
- M12 Route-To-Market And Sales Architecture
- O02 Productization / Service Standardization where relevant

### Required Questions

- What exactly will the new business sell?
- What should remain custom versus standardized?
- How will the business make money under the new model?
- How will the offer be delivered?
- How will customers buy?

### Analysis Tasks

1. define the new offer structure
2. assess whether the economics improve meaningfully
3. assess whether the new model is more repeatable or scalable
4. assess channel fit and sales model fit

### Outputs

- Offer Architecture Document
- Pricing And Unit Economics Memo
- Operations Playbook
- Route-To-Market Strategy Memo

### Gate

Use `Conditional Proceed` if the pivot model looks promising but should be piloted before full transition.

Use `Block / Validate First` if the new model does not solve the old model’s core weaknesses.

---

## 12. Stage 6: Risk, Finance, And Execution Readiness

### Goal

Determine whether the business can realistically afford and execute the pivot.

### Primary Modules

- M14 Launch And Execution Planning
- M17 Financial Planning And Capital Allocation
- O14 Experimentation And Pilot Design where testing is needed

### Required Questions

- What will this pivot cost in time, money, and focus?
- What happens to the current business while the pivot is underway?
- What needs to be tested before full commitment?
- What are the biggest execution risks?
- What could break cash flow during the transition?

### Analysis Tasks

1. identify pivot transition costs
2. identify working-capital or cash-risk issues
3. identify pilot or phased transition options
4. identify operational dependencies for the pivot

### Outputs

- Financial Planning Memo
- Launch / Transition Plan
- Experiment / Pilot Design Memo if needed

### Gate

Use `Defer` if the pivot is directionally right but financially or operationally mistimed.

Use `Conditional Proceed` if the pivot should start with a small pilot rather than a full shift.

---

## 13. Stage 7: Pivot Decision And Next-Step Recommendation

### Goal

Consolidate the pivot logic into a clear decision-ready artifact.

### Output

- Pivot Strategy Dossier

### The dossier should answer:

- what the current business is
- what is broken
- what should be preserved
- what the new business direction is
- why that direction is better
- how it will make money
- what must be tested
- what the transition risks are

### Possible End States

#### End State A: Proceed With Pivot

Use when:

- the new direction is coherent
- economics are directionally stronger
- assets support the move
- execution path is realistic

#### End State B: Pivot Through Pilot

Use when:

- the direction is promising
- but should be tested before committing fully

#### End State C: Defer Pivot

Use when:

- the pivot is likely directionally right
- but capital, timing, or focus are wrong now

#### End State D: Rethink Pivot

Use when:

- the proposed pivot does not solve the business’s real problem
- the new direction is not better than the current one

---

## 14. Control Artifact Rules

Throughout the workflow, update:

- Assumption Log
  - track all assumptions about the new model
- Evidence Tracker
  - track evidence for current problems and future opportunity
- Decision Gate Tracker
  - track key go / defer / pilot decisions
- Open Questions Register
  - track unresolved issues around customer, economics, or execution

---

## 15. Evidence Expectations

This workflow should be stricter than `Start From Scratch`.

Why:

- an existing business creates more real consequences
- the user may already have internal evidence
- the pivot may affect revenue, cash flow, and reputation

### Acceptable Evidence Pattern

- diagnosis should use at least E1-E2
- new-direction logic should ideally reach E2
- full pivot commitment should prefer E2-E3
- pilot-first recommendations are acceptable with directional evidence

### Not Acceptable

Do not recommend a major pivot based only on:

- founder boredom
- trend-chasing
- vague assumptions that “products scale better”
- copying competitors without asset fit

---

## 16. Skill / Agent Notes

- This workflow is a strong candidate for a top-level skill such as `pivot-business`.
- The workflow should be more diagnostic and more evidence-sensitive than `Start From Scratch`.
- The agent should explicitly separate:
  - current business facts
  - founder interpretation
  - future-state assumptions
- The workflow should end with a clear recommendation class:
  - proceed
  - pilot
  - defer
  - rethink

---

## 17. Suggested Skill Behavior

If implemented as a skill, the workflow should behave roughly like this:

1. confirm that a real business already exists
2. diagnose what is broken and what is still valuable
3. audit assets and capability reuse
4. define the future business direction
5. model the new offer, economics, channels, and ops
6. assess transition risk and cash strain
7. produce a Pivot Strategy Dossier with a gate-based recommendation

---

## 18. Chitr Relevance

This workflow is especially relevant to businesses like Chitr by Aalekh because it supports:

- service-to-product transition
- preservation of studio capabilities
- reduction of custom-work dependency
- evaluation of productization and channel shifts
- phased pivot logic instead of sudden reinvention

---

## 19. Recommended Next Workflow To Build

After `Pivot Existing Business`, the next highest-value workflow is likely:

- `Evaluate Expansion / New Category`

That would complete the three strongest early workflow pillars:

- start from scratch
- pivot existing business
- evaluate expansion
