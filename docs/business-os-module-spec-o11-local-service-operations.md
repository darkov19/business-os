# O11 Local Service Operations Overlay

Status: Draft
Type: Overlay
Version: current
Owner: Business OS

Related:

- [business-os-module-spec-template.md](./business-os-module-spec-template.md)
- [business-os-module-map.md](./business-os-module-map.md)
- [business-os-decision-gate-philosophy.md](./business-os-decision-gate-philosophy.md)
- [business-os-artifact-templates.md](./business-os-artifact-templates.md)

---

## 1. Purpose

This overlay adds local-service operating logic to the core Business OS for businesses that are:

- geographically bound
- service-delivery heavy
- schedule dependent
- reputation sensitive in a defined local area

Its job is to stop the system from evaluating a local service business like a normal product business or abstract service business.

This overlay should answer:

- what territory the business should serve
- how leads should be booked and scheduled
- how service delivery should be assigned, dispatched, and monitored
- how failures, complaints, and no-shows should be handled
- whether the business can scale locally without breaking service quality

---

## 2. When To Use

Use this overlay when:

- the business serves customers in a specific city, locality, or territory
- delivery depends on field staff, appointment slots, routes, or on-site execution
- service recovery, punctuality, and reputation materially affect trust
- travel time, capacity, or territory design matter to unit economics

This overlay is especially useful for:

- home services
- beauty and wellness services with location logic
- maintenance and repair services
- cleaning, moving, installation, and inspection services
- local healthcare or diagnostic services where operations matter

Use it alongside core modules such as:

- M05 Customer Research
- M08 Offer Architecture
- M09 Costing, Pricing, And Unit Economics
- M10 Operations, Delivery, And Supply System
- M12 Route-To-Market And Sales Architecture
- M18 Customer Success And Retention System

---

## 3. When Not To Use

Do not use this overlay when:

- the offer is not geographically constrained
- the business is mostly remote, digital, or centralized delivery
- the service is high-touch consulting without scheduling, dispatch, or territory complexity

This overlay may be deferred temporarily if:

- the user is still too early to define geography or service format
- there is no clear description of how the service is delivered

---

## 4. Prerequisites

Preferred prerequisites:

- M03 Business Definition
- M05 Customer Research
- M08 Offer Architecture

Helpful prerequisites where available:

- M09 Costing, Pricing, And Unit Economics
- M10 Operations, Delivery, And Supply System
- M12 Route-To-Market And Sales Architecture

Minimum viable prerequisites:

- a rough description of the service
- a rough target geography
- a rough idea of how the service is booked and delivered

If those do not exist, the agent should clarify them before making strong local-operations recommendations.

---

## 5. Inputs

Typical inputs may include:

- service description
- target geography or service territory
- booking flow
- staffing or technician assumptions
- travel-time assumptions
- scheduling constraints
- quality standards
- complaint and refund patterns
- lead sources
- reputation or review patterns
- existing artifacts such as:
    - Customer Research Brief
    - Offer Architecture Document
    - Pricing And Unit Economics Memo
    - Operations Playbook
    - Route-To-Market Strategy Memo
    - Customer Success And Retention Memo

---

## 6. Discovery Questions

### Required Questions

- What geography are you serving first?
- How do leads currently come in, or how do you expect them to come in?
- How are jobs booked and scheduled?
- How is service delivery assigned or dispatched?
- What happens if a job goes wrong, is late, or gets canceled?
- What capacity constraints matter most?
- How do local customers usually find providers like this?
- What service standard must be maintained every time?

### Useful Questions

- What territory boundaries matter?
- How will travel time affect utilization and margin?
- What minimum booking density is needed to operate efficiently?
- What staff skill or training differences matter?
- What part of the experience creates trust or anxiety for the customer?
- How will reviews and reputation be managed?
- What repeat-service or referral behavior matters?

### Reliability And Recovery Questions

Use where relevant:

- What is the no-show policy?
- What is the complaint-resolution process?
- How are refunds, rework, or revisit jobs handled?
- What happens if staff availability changes suddenly?
- What operational issue damages reputation fastest?

---

## 7. Research Requirements

### Required Research

At minimum, the overlay should gather enough evidence to judge:

- territory logic
- booking and dispatch plausibility
- service recovery needs
- local acquisition and reputation risks

Required research may include:

- local competitor and substitute review
- local buying-behavior review
- booking and service-model review
- travel, density, or territory logic review
- review-pattern and complaint-pattern review

If the user explicitly requests research, or the market is unfamiliar, external research should be performed.

### Optional Research

Where useful, deeper research may include:

- local SEO and map-pack review
- referral and partnership benchmark review
- route-density or utilization comparison
- cancellation and service-recovery benchmark review

### Source Priority

Prefer:

1. real local customer behavior
2. real operating constraints
3. review and complaint signals from competitors
4. actual staff or scheduling realities
5. local market benchmarks

---

## 8. Analysis Tasks

This overlay should perform the following analysis:

1. Define the starting territory clearly.
2. Assess whether the service area is too broad, too narrow, or directionally right.
3. Assess the booking and scheduling logic.
4. Assess dispatch or assignment logic where relevant.
5. Assess travel-time and utilization pressure.
6. Assess service standard repeatability.
7. Assess complaint, cancellation, and service-recovery readiness.
8. Assess local acquisition dependencies such as reviews, referrals, local SEO, or partnerships.
9. Assess whether the business can scale locally without degrading reliability.
10. Recommend whether the business should:
    - start narrower
    - tighten scheduling first
    - improve recovery systems first
    - build demand density before expanding territory
    - avoid local expansion yet

---

## 9. Evidence Requirements

Use the standard evidence model from the Business OS gate philosophy.

### Exploratory Output Threshold

An exploratory local-service operations note may be created with:

- E1 Weak Signal

if the output is clearly labeled exploratory.

### Recommendation Threshold

A meaningful recommendation about service territory, booking flow, or local operating readiness should usually require at least:

- E2 Directional Evidence

Examples:

- founder observations plus local competitor patterns
- early lead and booking observations
- early operating simulations
- local review and complaint signals

### Strong Recommendation Threshold

To recommend territory expansion, aggressive local growth, or high-confidence operational scale assumptions, prefer:

- E3 Strong Working Evidence

Examples:

- real booking and completion patterns
- real complaint and recovery data
- real utilization data
- repeated local customer behavior

### High-Risk Cases

Use extra caution when:

- reputation damage spreads quickly in a tight local market
- travel time strongly affects economics
- staff quality is inconsistent
- service failures require expensive rework or refunds
- the business wants to widen territory before density is healthy

---

## 10. Outputs

### Primary Output

- `Local Service Operations Note`

This should include:

- business and service summary
- territory logic
- booking and dispatch model
- utilization and travel implications
- service recovery model
- local acquisition and reputation dependencies
- readiness recommendation

### Optional Supporting Outputs

- territory design note
- booking and dispatch checklist
- service recovery summary
- local growth-risk note

### Output Depth

- exploratory if operational evidence is thin
- decision-ready if local operating logic is directional
- high-confidence if real service data exists

---

## 11. Decision Gates

### Proceed

Use when:

- the starting territory is coherent
- booking and dispatch logic are believable
- service recovery is workable
- reputation risk is manageable
- local scale pressure is not obviously premature

### Proceed With Warnings

Use when:

- the operating model is directionally workable
- but scheduling, staffing, or recovery still have meaningful uncertainty

Warnings should explicitly mention:

- what could break first
- what local operating assumption is still thin
- what should be monitored most closely

### Conditional Proceed

Use when:

- the business should move forward
- but only with a smaller territory, tighter scheduling window, stronger recovery rules, or slower hiring plan

Typical conditions:

- launch in fewer neighborhoods first
- keep booking windows constrained
- stabilize staff quality before expanding
- improve complaint handling before scaling acquisition

### Defer

Use when:

- local-service evaluation is premature because the service model and geography are still too vague

### Block / Validate First

Use when:

- scheduling, dispatch, or recovery systems are fragile
- territory plans are too broad for the current operating model
- the business wants local expansion before density or reliability is healthy
- service failure risk is too high to ignore

---

## 12. Red Flags

- the service area is too broad for the current team
- travel time is ignored
- bookings are treated as simple even though delivery windows matter
- service recovery is undefined
- reviews and reputation are treated as a marketing problem instead of an operations problem
- hiring or quality control is assumed to solve itself
- the business wants more demand before it can deliver reliably
- expansion is being driven by ambition, not density or operational proof

---

## 13. Handoff / Next Routing

Typical next modules:

- M09 Costing, Pricing, And Unit Economics
- M10 Operations, Delivery, And Supply System
- M12 Route-To-Market And Sales Architecture
- M18 Customer Success And Retention System
- O14 Experimentation And Pilot Design

Routing logic:

- if the main uncertainty is travel, labor, or visit economics -> route to M09
- if the main uncertainty is SOPs, staffing, or delivery repeatability -> route to M10
- if the main uncertainty is local acquisition channel design -> route to M12
- if the main uncertainty is complaint handling, repeat service, or trust recovery -> route to M18
- if the safest next step is a small geography or capacity pilot -> route to O14

Optional routes:

- M05 Customer Research if the local buyer is still poorly defined
- M08 Offer Architecture if the service packaging is still unclear

---

## 14. Artifact Update Rules

This overlay should update:

- Assumption Log
    - add all territory, staffing, scheduling, and recovery assumptions
- Evidence Tracker
    - record operating, review, and local-demand evidence
- Decision Gate Tracker
    - record whether the business is ready to launch locally, narrow scope, defer, or validate first
- Open Questions Register
    - record unresolved questions such as service density, staffing reliability, or review-risk gaps

---

## 15. Skill / Agent Notes

- This overlay is a strong candidate for a future local-service launch or operations skill.
- The overlay should keep local reputation and service recovery close to operations, not separate them as pure marketing.
- The main job is to force attention onto density, scheduling, dispatch, and recovery before expansion.
- If the user has little real operating data, the overlay should still produce a structured local operating hypothesis with honest confidence labels.
- The overlay should favor narrower launch territories and higher reliability over premature local sprawl.

---

## 16. Suggested Artifact Structure

The `Local Service Operations Note` generated from this overlay should typically contain:

1. service and business summary
2. starting territory definition
3. booking and dispatch model
4. travel-time and utilization implications
5. service recovery model
6. local acquisition and reputation dependencies
7. evidence used
8. assumptions still open
9. recommendation
10. next recommended module
