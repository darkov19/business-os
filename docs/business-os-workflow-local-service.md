# Business OS Workflow: Local Service Business

Status: Draft workflow spec
Purpose: Define the end-to-end workflow the Business OS should use when a user is starting, structuring, or tightening a local service business where geography, scheduling, delivery reliability, and reputation materially affect success.

Related:

- [business-os-framework.md](./business-os-framework.md)
- [business-os-context-classifier.md](./business-os-context-classifier.md)
- [business-os-module-map.md](./business-os-module-map.md)
- [business-os-module-spec-o11-local-service-operations.md](./business-os-module-spec-o11-local-service-operations.md)
- [business-os-artifact-templates.md](./business-os-artifact-templates.md)
- [business-os-question-bank.md](./business-os-question-bank.md)
- [business-os-evidence-rubric.md](./business-os-evidence-rubric.md)

---

## 1. Why This Workflow Exists

Local service businesses often fail for reasons that generic business workflows underweight:

- territory is too broad
- travel time destroys economics
- booking and dispatch are weak
- service recovery is undefined
- reviews and referrals are treated as marketing only, not operational trust

This workflow exists to turn a local service concept or early operation into a more disciplined local business path.

It should force the system to answer:

- where the business should operate first
- how demand should be booked and delivered
- how reliability and recovery should work
- what channel mix fits local buying behavior
- whether the business should launch narrower or expand later

---

## 2. When To Use

Use this workflow when:

- the business context is `local service`
- the user is starting a city-bound or territory-bound service business
- the user is launching or tightening local operations
- scheduling, field delivery, reviews, or repeat usage matter materially

Typical user queries:

- I want to start a home service business in one city
- help me build a reliable local service operation
- how should I launch this local service properly
- we get local demand but operations are messy

---

## 3. When Not To Use

Do not use this workflow when:

- the offer is not geographically constrained
- the business is mainly digital or remote
- the user only needs a narrow marketing diagnosis for an already stable local business

In those cases, route to:

- Start From Scratch
- Improve Sales Or Marketing
- Improve Operations Or Delivery

---

## 4. Workflow Goal

By the end of this workflow, the system should be able to produce:

- a Business Definition Note
- a Customer Research Brief
- an Offer Architecture Document
- a Pricing And Unit Economics Memo
- a Local Service Operations Plan
- a Route-To-Market Strategy Memo
- a Customer Success And Retention Memo where repeat service matters
- a Business Concept Dossier or Launch Dossier depending on stage

And it should be able to state clearly:

- whether the local service should launch now
- whether the territory should be narrower
- whether delivery systems must improve before more demand is added
- whether reputation and recovery risk make expansion premature

---

## 5. Primary Modules

This workflow should typically use:

1. M03 Business Definition
2. M05 Customer Research
3. M08 Offer Architecture
4. M09 Costing, Pricing, And Unit Economics
5. M10 Operations, Delivery, And Supply System
6. M12 Route-To-Market And Sales Architecture
7. M13 Marketing And Growth System
8. M18 Customer Success And Retention System

Overlay modules commonly used:

- O11 Local Service Operations Overlay
- O14 Experimentation And Pilot Design

Control modules used throughout:

- C01 Assumption Log
- C02 Evidence Tracker
- C03 Decision Gate Tracker
- C05 Open Questions Register

---

## 6. Workflow Stages

This workflow should run in seven stages.

1. Local Service Framing
2. Customer And Territory Definition
3. Offer And Service-Delivery Design
4. Local Economics And Capacity Review
5. Booking, Dispatch, And Recovery Review
6. Local Acquisition And Reputation Plan
7. Gate And Next-Step Decision

---

## 7. Stage 1: Local Service Framing

### Goal

Confirm that the business is truly a local service business and define the current stage.

### Required Questions

- What service is being delivered?
- In what geography?
- Is this idea-stage, early-launch, or live-but-messy?
- What part feels most fragile today: demand, delivery, scheduling, or reliability?

### Outputs

- local-service context confirmation
- current-stage summary

### Gate

If geography and delivery model are not central, reroute to a more suitable workflow.

---

## 8. Stage 2: Customer And Territory Definition

### Goal

Define the initial buyer, service area, and local demand logic.

### Primary Modules

- M05 Customer Research
- O11 Local Service Operations Overlay

### Required Questions

- Who is the customer?
- Where are they located?
- How far should the business realistically travel?
- What local trigger causes them to buy?

### Outputs

- Customer Research Brief
- territory note

### Gate

Use `Block / Validate First` if the business wants to serve too broad an area without density or capacity logic.

---

## 9. Stage 3: Offer And Service-Delivery Design

### Goal

Define what the service includes, what is standardized, and how it is delivered.

### Primary Modules

- M08 Offer Architecture
- M10 Operations, Delivery, And Supply System
- O11 Local Service Operations Overlay

### Required Questions

- What exactly is being sold?
- What is included versus excluded?
- What should be standardized versus custom?
- What service standard must be repeatable every time?

### Outputs

- Offer Architecture Document
- Local Service Operations Plan

### Gate

Use `Conditional Proceed` if the service should launch narrower or with tighter scope.

---

## 10. Stage 4: Local Economics And Capacity Review

### Goal

Determine whether pricing, travel, labor, and delivery capacity are believable.

### Primary Modules

- M09 Costing, Pricing, And Unit Economics
- M10 Operations, Delivery, And Supply System
- O11 Local Service Operations Overlay

### Required Questions

- What does one visit, job, or contract really cost?
- How does travel time affect economics?
- How many jobs can the business handle reliably?
- What staffing or scheduling assumption is most fragile?

### Outputs

- Pricing And Unit Economics Memo
- capacity and utilization note

### Gate

Use `Block / Validate First` if the business wants aggressive demand before delivery capacity is believable.

---

## 11. Stage 5: Booking, Dispatch, And Recovery Review

### Goal

Ensure that local delivery operations can handle real-world messiness.

### Primary Modules

- O11 Local Service Operations Overlay
- M18 Customer Success And Retention System

### Required Questions

- How are leads booked?
- How are jobs assigned or dispatched?
- What happens when a technician is late, unavailable, or underperforms?
- What is the complaint and recovery process?

### Outputs

- Local Service Operations Plan
- recovery and repeat-service note

### Gate

Use `Block / Validate First` if scheduling, dispatch, or recovery systems remain too fragile for launch or expansion.

---

## 12. Stage 6: Local Acquisition And Reputation Plan

### Goal

Determine how the business should get local demand and maintain trust.

### Primary Modules

- M12 Route-To-Market And Sales Architecture
- M13 Marketing And Growth System
- O11 Local Service Operations Overlay

### Required Questions

- How do local customers find providers like this?
- Will acquisition come from search, maps, referrals, communities, partnerships, or paid channels?
- What review and reputation loop is needed?
- What should the business avoid until service delivery is stable?

### Outputs

- Route-To-Market Strategy Memo
- local acquisition and reputation plan

### Gate

Use `Proceed With Warnings` if acquisition is plausible but the review and trust loop is still thin.

---

## 13. Stage 7: Gate And Next-Step Decision

### Goal

End with a clear local-service recommendation.

### Possible End States

#### Launch Narrowly

The business is ready to start in a bounded geography with controlled operations.

#### Tighten Operations First

The service idea is workable, but scheduling, staffing, or recovery needs work before more demand is added.

#### Improve Density Before Expanding

The business should build repeatable local density before widening territory.

#### Validate First

The concept is still too assumption-heavy to launch confidently.

---

## 14. Control Artifact Rules

Throughout the workflow, update:

- Assumption Log
- Evidence Tracker
- Decision Gate Tracker
- Open Questions Register

These should capture:

- territory assumptions
- staffing and utilization assumptions
- service recovery and review risk
- local demand and referral assumptions

---

## 15. Skill / Agent Notes

- This workflow is a strong candidate for a future local-service launch skill.
- It should keep operations and reputation tightly linked.
- It should prefer narrower geographies and tighter delivery standards over premature expansion.
- It should not treat local-service growth as just a lead-generation problem.
