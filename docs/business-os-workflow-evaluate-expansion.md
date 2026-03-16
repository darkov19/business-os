# Business OS Workflow: Evaluate Expansion / New Category

Status: Draft workflow spec
Purpose: Define the end-to-end workflow the Business OS should use when a user wants to evaluate adding a new category, product line, service line, channel, geography, or adjacent business opportunity inside an existing business.

Related:

- [business-os-framework.md](./business-os-framework.md)
- [business-os-intent-map.md](./business-os-intent-map.md)
- [business-os-module-map.md](./business-os-module-map.md)
- [business-os-module-spec-o07-expansion-smoke-test.md](./business-os-module-spec-o07-expansion-smoke-test.md)
- [business-os-workflow-pivot-existing-business.md](./business-os-workflow-pivot-existing-business.md)

---

## 1. Why This Workflow Exists

Businesses rarely stop at one idea.

Once a business has some identity, traction, or capability, the founder starts considering:

- a new product category
- a new service line
- a new price tier
- a new sales channel
- a new geography
- a related business adjacency

Some of these moves are powerful.

Some are distractions.

This workflow exists to help the user decide:

- whether the proposed expansion should happen
- whether it should happen now
- whether it should be piloted first
- whether it should remain limited or custom
- whether it should be rejected

---

## 2. When To Use

Use this workflow when:

- the primary intent is `Evaluate Expansion / New Category`
- the business already has a defined core model
- the user wants to assess a major addition rather than optimize the existing offer

Typical user queries:

- should I add this category
- should I start selling through distributors
- should I import this and add it to the business
- should I launch this new line next year
- should I expand into this channel or market

---

## 3. When Not To Use

Do not use this workflow when:

- the user is still defining the first version of the business
- the proposed idea is actually the core business, not an expansion
- the user is really asking for a pivot, not an addition
- the question is only about improving the current offer

In those cases, route to:

- Start From Scratch
- Pivot Existing Business
- Launch A New Product Or Service
- Improve Operations Or Delivery

---

## 4. Workflow Goal

By the end of this workflow, the system should be able to produce:

- an Expansion Smoke Test Memo
- a Financial Planning Memo where capital strain matters
- an Import / Sourcing Evaluation Memo where relevant
- a Route-To-Market Strategy Memo where channel impact changes
- an Experiment / Pilot Design Memo where the right next step is testing
- an Expansion Decision Dossier

And it should state clearly one of these outcomes:

- add now
- pilot first
- keep limited or custom
- defer
- reject

---

## 5. Primary Modules

This workflow should typically use:

1. M08 Offer Architecture
2. M09 Costing, Pricing, And Unit Economics
3. M10 Operations, Delivery, And Supply System
4. M12 Route-To-Market And Sales Architecture
5. M17 Financial Planning And Capital Allocation
6. O07 Expansion / New Category Smoke Test

Overlay modules commonly used:

- O06 Import / Sourcing Evaluation
- O13 Marketplace / Platform Strategy Overlay
- O14 Experimentation And Pilot Design
- O03 Inventory, Fulfillment, And Packaging
- O08 Offline Retail / Exhibition Readiness

Control modules used throughout:

- C01 Assumption Log
- C02 Evidence Tracker
- C03 Decision Gate Tracker
- C05 Open Questions Register

---

## 6. Workflow Stages

This workflow should run in six stages.

1. Expansion Framing
2. Core-Business Readiness Check
3. Expansion Fit Assessment
4. Economics, Operations, And Channel Assessment
5. Pilot / Phasing Design
6. Expansion Decision

---

## 7. Stage 1: Expansion Framing

### Goal

Define exactly what is being considered.

### Required Actions

1. Clarify the proposed expansion.
2. Identify whether it is:
   - category expansion
   - product-line expansion
   - service expansion
   - channel expansion
   - geography expansion
   - adjacency
3. Clarify why the founder wants to pursue it now.

### Key Questions

- What exactly are you considering adding?
- Why do you want to add it now?
- Is this meant to serve the same customer or a different one?
- Is this an upsell, cross-sell, or a new business line?

### Output

- expansion framing summary

### Gate

If the proposed addition is too vague to evaluate, pause and clarify before proceeding.

---

## 8. Stage 2: Core-Business Readiness Check

### Goal

Ensure the current business is stable enough to absorb expansion.

### Primary Modules

- O07 Expansion / New Category Smoke Test
- M17 Financial Planning And Capital Allocation where needed

### Required Questions

- How stable is the current business?
- What is currently working well?
- What is currently fragile?
- What would this distract from?
- Can the current business absorb more complexity?

### Analysis Tasks

1. assess whether the current business is strong enough for expansion
2. identify whether the expansion is a growth move or an avoidance move
3. identify focus cost and complexity cost

### Gate

Use `Defer` or `Block / Validate First` if:

- the core business is still unstable
- the founder is using expansion to avoid fixing a deeper issue

---

## 9. Stage 3: Expansion Fit Assessment

### Goal

Judge whether the expansion actually fits the business.

### Primary Modules

- O07 Expansion / New Category Smoke Test
- M08 Offer Architecture
- M12 Route-To-Market And Sales Architecture if fit depends on customer/channel shifts

### Required Questions

- Does this strengthen the business identity or dilute it?
- Does it serve the same customer, a related customer, or a completely new one?
- What evidence exists that this expansion is wanted?
- Does the current brand and offer architecture support it?

### Analysis Tasks

1. assess strategic fit
2. assess customer fit
3. assess whether the current offer stack can absorb the expansion
4. identify whether this creates a second business instead of a natural extension

### Outputs

- Expansion Smoke Test Memo

### Gate

Use `Conditional Proceed` if fit looks plausible but evidence is still directional.

Use `Reject`-equivalent behavior through `Block / Validate First` if the fit is weak and distracting.

---

## 10. Stage 4: Economics, Operations, And Channel Assessment

### Goal

Determine whether the expansion can work financially and operationally.

### Primary Modules

- M09 Costing, Pricing, And Unit Economics
- M10 Operations, Delivery, And Supply System
- M12 Route-To-Market And Sales Architecture
- M17 Financial Planning And Capital Allocation

### Overlay Modules

- O06 Import / Sourcing Evaluation if sourcing is changing materially
- O03 Inventory, Fulfillment, And Packaging if physical goods are involved
- O13 Marketplace / Platform Strategy Overlay if platform/channel dependence matters
- O08 Offline Retail / Exhibition Readiness if offline sales are involved

### Required Questions

- What will this cost to test and to scale?
- How will it be produced, sourced, or delivered?
- How will it be sold?
- What new support, packaging, staffing, or logistics burden does it create?
- What capital strain or inventory strain does it create?

### Analysis Tasks

1. assess rough economics
2. assess capital burden
3. assess operational burden
4. assess whether the current channels can support it
5. identify hidden complexity

### Outputs

- Pricing And Unit Economics Memo if updated
- Financial Planning Memo if needed
- Import / Sourcing Evaluation Memo if needed
- Route-To-Market Strategy Memo if channel implications change materially

### Gate

Use `Block / Validate First` if:

- economics are not believable
- capital burden is too high
- operations are clearly not ready

Use `Conditional Proceed` if:

- the economics look possible
- but only a limited pilot is sensible

---

## 11. Stage 5: Pilot / Phasing Design

### Goal

If the right answer is not “add now,” define the smallest responsible next step.

### Primary Modules

- O14 Experimentation And Pilot Design

### Required Questions

- What is the smallest useful test?
- What do we need to learn before scaling?
- What would count as success?
- What would count as failure?
- How much cost, time, and complexity can we tolerate for the test?

### Analysis Tasks

1. define pilot scope
2. define success criteria
3. define failure criteria
4. define what evidence the pilot should generate

### Outputs

- Experiment / Pilot Design Memo

### Gate

If the system recommends `pilot first`, this stage should be completed before finalizing the decision dossier.

---

## 12. Stage 6: Expansion Decision

### Goal

Consolidate the full analysis into a final decision-ready output.

### Output

- Expansion Decision Dossier

### Decision Classes

#### Add Now

Use when:

- strategic fit is strong
- customer fit is clear
- economics are believable
- operations are manageable
- current business is ready

#### Pilot First

Use when:

- the expansion is promising
- but evidence or readiness is not yet strong enough for full rollout

#### Keep Limited / Custom

Use when:

- the idea is attractive
- but should remain a selective or special-case offer rather than a core line

#### Defer

Use when:

- the expansion may be good later
- but timing, focus, or capability is wrong now

#### Reject

Use when:

- the expansion is weakly aligned
- distracting
- unsupported by evidence
- financially or operationally unsound

---

## 13. Control Artifact Rules

Throughout the workflow, update:

- Assumption Log
  - add all demand, cost, sourcing, and capability assumptions
- Evidence Tracker
  - capture evidence supporting or weakening the expansion
- Decision Gate Tracker
  - record the final recommendation class and revisit conditions
- Open Questions Register
  - record what still must be answered before a stronger decision is possible

---

## 14. Evidence Expectations

This workflow should be more demanding than greenfield ideation because expansion decisions can damage focus and capital.

### Acceptable Evidence Pattern

- exploratory framing may begin at E1
- pilot-first recommendations should usually reach E2
- add-now recommendations should prefer E3

### Not Acceptable

Do not recommend expansion simply because:

- the founder is excited
- a competitor does it
- the current business feels boring
- the expansion sounds brand-enhancing without real evidence

---

## 15. Skill / Agent Notes

- This workflow is a strong candidate for a top-level skill such as `expansion-smoke-test`.
- The workflow should remain highly decision-focused.
- It should avoid turning into a giant strategy document if the correct outcome is simply `defer` or `pilot first`.
- When uncertainty is material, the default positive path should usually be a bounded pilot rather than a full launch.

---

## 16. Suggested Skill Behavior

If implemented as a skill, the workflow should behave roughly like this:

1. define the proposed expansion clearly
2. check whether the current business is stable enough
3. assess strategic and customer fit
4. assess economics, operations, and channel impact
5. define a pilot if needed
6. produce an Expansion Decision Dossier with one of five recommendation classes

---

## 17. Chitr Relevance

This workflow is especially relevant to Chitr-like businesses because it supports questions such as:

- should we add wallpapers
- should we test imported raw materials
- should we enter distributors
- should we add a machine-embroidery product line
- should we keep something as custom first instead of launching it fully

---

## 18. Recommended Next Workflow To Build

After `Evaluate Expansion / New Category`, the next highest-value workflow is likely:

- `Launch A New Product Or Service`

That would complete a very strong first workflow set for the Business OS.
