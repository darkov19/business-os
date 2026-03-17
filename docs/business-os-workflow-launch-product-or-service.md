# Business OS Workflow: Launch A New Product Or Service

Status: Draft workflow spec
Purpose: Define the end-to-end workflow the Business OS should use when a user has a business idea, offer concept, or existing business and wants to prepare a product or service for a real launch.

Related:

- [business-os-framework.md](./business-os-framework.md)
- [business-os-intent-map.md](./business-os-intent-map.md)
- [business-os-module-map.md](./business-os-module-map.md)
- [business-os-artifact-templates.md](./business-os-artifact-templates.md)
- [business-os-question-bank.md](./business-os-question-bank.md)
- [business-os-evidence-rubric.md](./business-os-evidence-rubric.md)

---

## 1. Why This Workflow Exists

Many users are past idea-stage, but not yet ready to launch well.

They may already have:

- a defined offer
- a prototype or draft offer
- some customer clarity
- an existing business adding a new line

But they still need to answer:

- what exactly is launching
- what the launch-ready offer is
- how it will be priced
- how it will be delivered
- how it will be sold
- how it will be marketed
- whether the business is actually ready

This workflow exists to move an offer from “we should launch this” to “we can launch this responsibly.”

---

## 2. When To Use

Use this workflow when:

- the primary intent is `Launch A New Product Or Service`
- the user has enough business clarity to define a concrete offer
- the user needs launch structure, not just strategy discussion

Typical user queries:

- help me launch this product
- help me launch this service
- build a launch plan for this offer
- I know what I want to sell, now help me take it to market

---

## 3. When Not To Use

Do not use this workflow when:

- the user is still defining the basic business idea
- the user mainly needs a pivot diagnosis
- the user is evaluating a new category inside an existing business
- the problem is only a pricing fix or marketing optimization for an already launched offer

In those cases, route to:

- Start From Scratch
- Pivot Existing Business
- Evaluate Expansion / New Category
- Fix Pricing, Economics, Or Capital Pressure
- Improve Sales Or Marketing

---

## 4. Workflow Goal

By the end of this workflow, the system should be able to produce:

- an Offer Architecture Document
- a Pricing And Unit Economics Memo
- an Operations Playbook
- a Brand, Messaging, And Trust Framework
- a Route-To-Market Strategy Memo
- a Marketing Strategy Plan
- a Launch Readiness Document
- a Financial Planning Memo where needed
- a Customer Success And Retention Memo where relevant
- a Launch Dossier

And it should be able to state clearly:

- whether the offer is launch-ready
- what still needs to be fixed
- what should be phased
- what should be validated before launch

---

## 5. Primary Modules

This workflow should typically use:

1. M08 Offer Architecture
2. M09 Costing, Pricing, And Unit Economics
3. M10 Operations, Delivery, And Supply System
4. M11 Brand, Messaging, And Trust Assets
5. M12 Route-To-Market And Sales Architecture
6. M13 Marketing And Growth System
7. M14 Launch And Execution Planning
8. M17 Financial Planning And Capital Allocation
9. M18 Customer Success And Retention System where post-sale experience matters

Overlay modules commonly used:

- O02 Productization / Service Standardization
- O03 Inventory, Fulfillment, And Packaging
- O04 B2B Pipeline And Account Strategy
- O05 Distributor / Wholesale Readiness
- O08 Offline Retail / Exhibition Readiness
- O11 Local Service Operations Overlay
- O13 Marketplace / Platform Strategy Overlay
- O14 Experimentation And Pilot Design
- O16 Premium D2C Launch Commerce

Control modules used throughout:

- C01 Assumption Log
- C02 Evidence Tracker
- C03 Decision Gate Tracker
- C05 Open Questions Register

---

## 6. Workflow Stages

This workflow should run in seven stages.

1. Launch Framing
2. Offer Definition
3. Economics And Financial Readiness
4. Operations And Delivery Readiness
5. Channel And Marketing Readiness
6. Launch Readiness Review
7. Launch Recommendation And Next-Step Decision

---

## 7. Stage 1: Launch Framing

### Goal

Clarify what is launching and under what conditions.

### Required Actions

1. Define the offer being launched.
2. Define whether this is:
   - first launch for the whole business
   - launch of a new line in an existing business
   - relaunch of an existing offer
3. Identify the intended customer and primary launch channel.

### Key Questions

- What exactly are you launching?
- Who is it for?
- Is this the first launch of the business, or a new offer inside an existing business?
- What does “successful launch” mean in practical terms?

### Gate

If the offer itself is still unclear, stop and route deeper into Offer Architecture before continuing.

---

## 8. Stage 2: Offer Definition

### Goal

Define a launchable offer with clear boundaries.

### Primary Modules

- M08 Offer Architecture
- O02 Productization / Service Standardization where needed

### Required Questions

- What is the core launch offer?
- What is included and excluded?
- What should be standardized versus custom?
- Is the offer too broad for a first launch?
- What offer complexity should be avoided?

### Outputs

- Offer Architecture Document

### Gate

Use `Conditional Proceed` if the offer should be narrowed or phased before launch.

Use `Block / Validate First` if the user still cannot define the offer clearly.

---

## 9. Stage 3: Economics And Financial Readiness

### Goal

Determine whether the launch is financially believable and supportable.

### Primary Modules

- M09 Costing, Pricing, And Unit Economics
- M17 Financial Planning And Capital Allocation

### Required Questions

- What does it cost to deliver this offer?
- How will it be priced?
- What margin or profit structure is expected?
- What cash is needed before launch?
- What financial risks would make the launch fragile?

### Outputs

- Pricing And Unit Economics Memo
- Financial Planning Memo where needed

### Gate

Use `Block / Validate First` if pricing or economics are still speculative.

Use `Conditional Proceed` if the launch is possible but should start smaller due to cash strain.

---

## 10. Stage 4: Operations And Delivery Readiness

### Goal

Define how the offer will be delivered reliably.

### Primary Modules

- M10 Operations, Delivery, And Supply System
- M18 Customer Success And Retention System where relevant

### Overlay Modules

- O03 Inventory, Fulfillment, And Packaging
- O11 Local Service Operations Overlay

### Required Questions

- How will this offer be produced, fulfilled, or delivered?
- What dependencies matter?
- What could fail operationally?
- What support or onboarding is needed after purchase?

### Outputs

- Operations Playbook
- Customer Success And Retention Memo where relevant
- Support And Issue-Resolution Playbook where relevant

### Gate

Use `Block / Validate First` if delivery quality or support readiness is weak.

---

## 11. Stage 5: Channel And Marketing Readiness

### Goal

Define how the offer will reach customers and convert them.

### Primary Modules

- M11 Brand, Messaging, And Trust Assets
- M12 Route-To-Market And Sales Architecture
- M13 Marketing And Growth System

### Overlay Modules

- O04 B2B Pipeline And Account Strategy
- O08 Offline Retail / Exhibition Readiness
- O13 Marketplace / Platform Strategy Overlay

### Required Questions

- How will people discover this launch?
- Through which channel will they buy?
- Which channel architecture is best for this launch right now?
- If hybrid is likely, which channel should go first and which should wait?
- What proof or messaging is needed?
- What trust gaps must be solved before launch?

### Outputs

- Brand, Messaging, And Trust Framework
- Route-To-Market Strategy Memo
- Marketing Strategy Plan

The Route-To-Market Strategy Memo should explicitly state:

- recommended channel architecture
- channel order of operations
- why now / why not now
- channel decision gate

### Gate

Use `Proceed With Warnings` if the channel is plausible but the content or trust system is still thin.

Use `Block / Validate First` if the business has no believable route to customer acquisition.

---

## 12. Stage 6: Launch Readiness Review

### Goal

Bring the launch pieces together and assess whether the business is truly ready.

### Primary Modules

- M14 Launch And Execution Planning
- O14 Experimentation And Pilot Design where staged rollout is needed

### Analysis Tasks

1. identify what is ready
2. identify what is incomplete
3. identify what can be launched now versus later
4. determine whether the launch should be:
   - full
   - phased
   - pilot-led

### Outputs

- Launch Readiness Document
- Experiment / Pilot Design Memo where needed

### Gate

Use `Conditional Proceed` if a phased launch or pilot launch is more responsible than a full rollout.

Use `Defer` if core launch dependencies remain too weak.

---

## 13. Stage 7: Launch Recommendation And Next-Step Decision

### Goal

Consolidate the launch logic into a final launch-ready output.

### Output

- Launch Dossier

### Possible End States

#### Ready To Launch

Use when:

- offer, pricing, operations, and channel logic are coherent
- major risks are known and manageable

#### Launch In Phases

Use when:

- the offer is viable
- but some elements should be delayed or tested

#### Pilot Before Full Launch

Use when:

- the launch logic is promising
- but evidence or readiness is still thin

#### Not Ready

Use when:

- critical elements such as pricing, operations, or route-to-market are still too weak

---

## 14. Control Artifact Rules

Throughout the workflow, update:

- Assumption Log
- Evidence Tracker
- Decision Gate Tracker
- Open Questions Register

These should reflect:

- launch assumptions
- readiness risks
- unresolved blockers
- phase or pilot decisions

---

## 15. Evidence Expectations

This workflow should be stricter than idea-stage planning.

### Acceptable Pattern

- launch framing may start with E1-E2
- launch recommendation should usually reach E2
- full launch confidence should prefer E3 in the most important areas

### Not Acceptable

Do not recommend launch just because:

- the founder wants momentum
- the offer sounds good conceptually
- marketing ideas exist but delivery is weak

---

## 16. Skill / Agent Notes

- This workflow is a strong candidate for a top-level skill such as `launch-product-or-service`.
- The workflow should stay practical and execution-aware.
- The system should not hide weak launch readiness behind polished launch language.
- When the launch is not ready, the output should still be useful by making the blockers explicit.

---

## 17. Recommended Next Workflow To Build

After this workflow, the next useful workflow is likely:

- `Improve Sales Or Marketing`

That would make the first Business OS workflow set much more complete.
