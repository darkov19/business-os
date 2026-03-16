# Business OS Artifact Templates

Status: Implementation template set
Purpose: Define the standard structure for Business OS artifacts so outputs remain consistent across modules, workflows, and future skills.

Related:

- [business-os-artifact-map.md](./business-os-artifact-map.md)
- [business-os-module-spec-template.md](./business-os-module-spec-template.md)
- [business-os-module-spec-m05-customer-research.md](./business-os-module-spec-m05-customer-research.md)
- [business-os-module-spec-o07-expansion-smoke-test.md](./business-os-module-spec-o07-expansion-smoke-test.md)

---

## 1. Why This Exists

The Business OS now has:

- architecture
- module specs
- routing logic
- decision gates

But modules are only truly reusable if they produce outputs in a predictable shape.

This template set ensures:

- different agents produce compatible artifacts
- users can review outputs faster
- artifacts can feed later modules cleanly
- dossier-building becomes easier

---

## 2. Artifact Design Principles

Every artifact should be:

- decision-oriented
- explicit about evidence quality
- explicit about assumptions
- easy to scan
- reusable by later modules
- proportional to the user’s current stage

Artifacts should avoid:

- generic business-plan filler
- fake certainty
- overly long narrative without decisions
- decorative sections with no business use

---

## 3. Standard Artifact Fields

Most Business OS artifacts should contain some version of these fields:

1. Title
2. Status
3. Date
4. Owner / Context
5. Purpose
6. Business Context Summary
7. Key Inputs
8. Findings / Analysis
9. Evidence Used
10. Assumptions
11. Decision / Recommendation
12. Open Questions
13. Next Steps

Not every artifact needs every field, but this is the common operating structure.

---

## 4. Universal Base Template

Use this base structure unless a specific artifact type requires a specialized layout.

```md
# <Artifact Title>

Status: Draft / Working / Agreed / Validated
Date: YYYY-MM-DD
Owner: Business OS / Founder / Team
Source Module: <Module ID and name>

## 1. Purpose

State why this artifact exists and what decision or business question it supports.

## 2. Business Context Summary

Summarize only the context needed to understand the artifact.

## 3. Key Inputs

List the most important inputs used to create the artifact.

Examples:

- user-provided facts
- prior artifacts
- research findings
- internal performance data

## 4. Analysis / Findings

Present the main findings in a structured way.

## 5. Evidence Used

State what evidence exists and how strong it is.

## 6. Assumptions

List the assumptions still in play.

## 7. Decision / Recommendation

State the current recommendation, priority choice, or judgment.

## 8. Open Questions

List unresolved questions that still matter.

## 9. Next Steps

State what should happen next and which module or workflow should follow.
```

---

## 5. Artifact Status Rules

Use consistent status labels:

- `Draft`
    - early output, still under development
- `Working`
    - currently being used for decision-making
- `Agreed`
    - direction accepted by the user or team
- `Validated`
    - backed by stronger evidence or live results
- `Deprecated`
    - no longer active but retained for history

---

## 6. Artifact Depth Levels

Artifacts should scale with readiness.

### Level 1: Exploratory

Use when:

- evidence is weak
- many assumptions remain

Characteristics:

- shorter
- more open questions
- fewer hard recommendations

### Level 2: Strategic

Use when:

- directional evidence exists
- decisions need to be made

Characteristics:

- clearer recommendations
- explicit tradeoffs
- stronger synthesis

### Level 3: Execution

Use when:

- the business is preparing to act

Characteristics:

- concrete next steps
- owner-level clarity
- dependencies and operational details

---

## 7. Specialized Artifact Templates

Below are the standard layouts for major Business OS artifact families.

---

## 7.1 Founder Brief Template

```md
# Founder Brief

Status:
Date:
Owner:
Source Module: M01 Founder Context And Intent

## 1. Founder Context

- founder background
- relevant strengths
- current resources

## 2. Motivation

- why this business matters
- why now

## 3. Goals

- financial goals
- lifestyle goals
- growth ambition

## 4. Constraints

- time
- capital
- skills
- risk tolerance

## 5. Strategic Implications

- what this means for business design

## 6. Open Questions

## 7. Next Steps
```

---

## 7.2 Customer Research Brief Template

```md
# Customer Research Brief

Status:
Date:
Owner:
Source Module: M05 Customer Research

## 1. Purpose

## 2. Business Context Summary

## 3. Candidate Customer Segments

## 4. Recommended Priority Segment

## 5. Buyer vs User

## 6. Jobs, Pains, And Gains

## 7. Buying Triggers

## 8. Objections And Anxieties

## 9. Alternatives Used Today

## 10. Trust Requirements

## 11. Evidence Used

## 12. Assumptions

## 13. Recommendation

## 14. Open Questions

## 15. Next Steps
```

---

## 7.3 Positioning Memo Template

```md
# Positioning Memo

Status:
Date:
Owner:
Source Module: M07 Positioning And Value Proposition

## 1. Purpose

## 2. Business Context Summary

## 3. Target Customer

## 4. Positioning Options Considered

## 5. Recommended Positioning

## 6. Value Proposition

## 7. Differentiation

## 8. Proof Logic

## 9. Messaging Implications

## 10. Evidence Used

## 11. Assumptions

## 12. Recommendation

## 13. Open Questions

## 14. Next Steps
```

---

## 7.4 Offer Architecture Document Template

```md
# Offer Architecture Document

Status:
Date:
Owner:
Source Module: M08 Offer Architecture

## 1. Purpose

## 2. Business Context Summary

## 3. Core Offer

## 4. Secondary Offers

## 5. Offer Tiers Or Packages

## 6. Boundaries

## 7. Who Each Offer Is For

## 8. Strategic Role Of Each Offer

## 9. Risks Or Complexity

## 10. Evidence Used

## 11. Assumptions

## 12. Recommendation

## 13. Open Questions

## 14. Next Steps
```

---

## 7.5 Pricing And Unit Economics Memo Template

```md
# Pricing And Unit Economics Memo

Status:
Date:
Owner:
Source Module: M09 Costing, Pricing, And Unit Economics

## 1. Purpose

## 2. Business Context Summary

## 3. Offer(s) Reviewed

## 4. Cost Structure

## 5. Pricing Logic

## 6. Margin View

## 7. Channel Impact

## 8. Risks And Sensitivities

## 9. Evidence Used

## 10. Assumptions

## 11. Recommendation

## 12. Open Questions

## 13. Next Steps
```

---

## 7.6 Financial Planning Memo Template

```md
# Financial Planning Memo

Status:
Date:
Owner:
Source Module: M17 Financial Planning And Capital Allocation

## 1. Purpose

## 2. Business Context Summary

## 3. Cash Structure

## 4. Working Capital Pressures

## 5. Capital Allocation Priorities

## 6. Financial Risks

## 7. Scenario Notes

## 8. Evidence Used

## 9. Assumptions

## 10. Recommendation

## 11. Open Questions

## 12. Next Steps
```

---

## 7.7 Route-To-Market Strategy Memo Template

```md
# Route-To-Market Strategy Memo

Status:
Date:
Owner:
Source Module: M12 Route-To-Market And Sales Architecture

## 1. Purpose

## 2. Business Context Summary

## 3. Customer Buying Context

## 4. Channel Options Considered

## 5. Recommended Channel Strategy

## 6. Sales Model

## 7. Channel Economics

## 8. Channel Risks

## 9. Evidence Used

## 10. Assumptions

## 11. Recommendation

## 12. Open Questions

## 13. Next Steps
```

---

## 7.8 Operations Playbook Template

```md
# Operations Playbook

Status:
Date:
Owner:
Source Module: M10 Operations, Delivery, And Supply System

## 1. Purpose

## 2. Business Context Summary

## 3. Delivery Model

## 4. Process Flow

## 5. Capacity Assumptions

## 6. Quality Logic

## 7. Dependencies

## 8. Risks

## 9. Evidence Used

## 10. Assumptions

## 11. Recommendation

## 12. Open Questions

## 13. Next Steps
```

---

## 7.9 Customer Success And Retention Memo Template

```md
# Customer Success And Retention Memo

Status:
Date:
Owner:
Source Module: M18 Customer Success And Retention System

## 1. Purpose

## 2. Business Context Summary

## 3. Post-Sale Journey

## 4. Onboarding Or First-Use Experience

## 5. Support Model

## 6. Retention Logic

## 7. Referral Or Repeat Behavior Logic

## 8. Risks

## 9. Evidence Used

## 10. Assumptions

## 11. Recommendation

## 12. Open Questions

## 13. Next Steps
```

---

## 7.10 Expansion Smoke Test Memo Template

```md
# Expansion Smoke Test Memo

Status:
Date:
Owner:
Source Module: O07 Expansion / New Category Smoke Test

## 1. Purpose

## 2. Current Business Summary

## 3. Proposed Expansion

## 4. Why It Is Being Considered

## 5. Strategic Fit

## 6. Customer Fit

## 7. Demand Evidence

## 8. Economic Implications

## 9. Operational Implications

## 10. Channel Implications

## 11. Focus Cost

## 12. Evidence Used

## 13. Assumptions

## 14. Recommendation Class

## 15. Open Questions

## 16. Next Steps
```

---

## 7.11 Experiment / Pilot Design Memo Template

```md
# Experiment / Pilot Design Memo

Status:
Date:
Owner:
Source Module: O14 Experimentation And Pilot Design

## 1. Purpose

## 2. Hypothesis Being Tested

## 3. Why This Test Matters

## 4. Scope Of The Test

## 5. Success Criteria

## 6. Failure Criteria

## 7. Evidence To Capture

## 8. Timebox

## 9. Risks

## 10. Recommendation

## 11. Next Steps
```

---

## 7.12 Distributor / Wholesale Readiness Memo Template

```md
# Distributor / Wholesale Readiness Memo

Status:
Date:
Owner:
Source Module: O05 Distributor / Wholesale Readiness

## 1. Purpose

## 2. Business Context Summary

## 3. Channel Model Under Review

## 4. Economics And Payment Implications

## 5. Operational Readiness

## 6. Channel Conflict And Brand Control

## 7. Partner Support Burden

## 8. Evidence Used

## 9. Assumptions

## 10. Recommendation

## 11. Open Questions

## 12. Next Steps
```

---

## 7.13 SaaS / Digital Product Growth Note Template

```md
# SaaS / Digital Product Growth Note

Status:
Date:
Owner:
Source Module: O10 SaaS / Digital Product Overlay

## 1. Purpose

## 2. Product And Business Summary

## 3. User And Buyer Distinction

## 4. Activation And Onboarding Logic

## 5. Retention And Churn Logic

## 6. Pricing Model Fit

## 7. Trust, Reliability, And Risk

## 8. Evidence Used

## 9. Assumptions

## 10. Recommendation

## 11. Open Questions

## 12. Next Steps
```

---

## 7.14 Local Service Operations Plan Template

```md
# Local Service Operations Plan

Status:
Date:
Owner:
Source Module: O11 Local Service Operations Overlay

## 1. Purpose

## 2. Service And Business Summary

## 3. Territory Definition

## 4. Booking And Dispatch Model

## 5. Capacity And Utilization Logic

## 6. Service Recovery Model

## 7. Local Acquisition And Reputation Dependencies

## 8. Evidence Used

## 9. Assumptions

## 10. Recommendation

## 11. Open Questions

## 12. Next Steps
```

---

## 7.15 Premium D2C Launch Commerce Note Template

```md
# Premium D2C Launch Commerce Note

Status:
Date:
Owner:
Source Module: O16 Premium D2C Launch Commerce

## 1. Purpose

## 2. Brand And Offer Context

## 3. Premium Conversion Requirements

## 4. PDP And Asset Requirements

## 5. Trust And Proof Requirements

## 6. Assisted Vs Self-Serve Recommendation

## 7. Post-Purchase Confidence Requirements

## 8. Evidence Used

## 9. Assumptions

## 10. Recommendation

## 11. Open Questions

## 12. Next Steps
```

---

## 7.16 Partner Channel Rollout Plan Template

```md
# Partner Channel Rollout Plan

Status:
Date:
Owner:
Source Workflow: Partner Channel Rollout

## 1. Purpose

## 2. Channel Rollout Summary

## 3. Partner Scope And Territory Rules

## 4. Pricing, Payment, And Stock Rules

## 5. Onboarding And Support Model

## 6. Channel Conflict And Governance Rules

## 7. Performance, Reorder, And Collections Review Logic

## 8. Evidence Used

## 9. Assumptions

## 10. Recommendation

## 11. Open Questions

## 12. Next Steps
```

---

## 7.17 Business Master Dossier Template

```md
# Business Master Dossier

Status:
Date:
Owner:

## 1. Business Summary

## 2. Founder Context

## 3. Customer Summary

## 4. Positioning Summary

## 5. Offer Summary

## 6. Economics Summary

## 7. Operations Summary

## 8. Route-To-Market Summary

## 9. Marketing Summary

## 10. Financial Planning Summary

## 11. Retention / Support Summary

## 12. Major Risks

## 13. Open Questions

## 14. Artifact Index

## 15. Recommended Next Steps
```

---

## 8. Control Artifact Templates

Control artifacts should be lighter, but structured.

### Assumption Log

```md
# Assumption Log

## Active Assumptions

- assumption
- source module
- risk if wrong
- validation priority
```

### Evidence Tracker

```md
# Evidence Tracker

## Evidence Entries

- evidence summary
- source
- evidence level
- relevant module
- notes
```

### Decision Gate Tracker

```md
# Decision Gate Tracker

## Decisions

- decision under review
- source module
- gate outcome
- reason
- revisit condition
```

### Open Questions Register

```md
# Open Questions Register

## Open Questions

- question
- source module
- why it matters
- priority
```

---

## 9. Artifact Writing Rules

When creating artifacts:

1. lead with the decision the artifact supports
2. keep context short and relevant
3. separate findings from assumptions
4. state evidence quality explicitly
5. end with a recommendation or next action
6. update related control artifacts when required

---

## 10. Mapping To Skills

This template set is designed for both:

- Codex skills
- Claude Code-compatible workflows

In practice:

- module specs define the behavior
- artifact templates define the output structure
- router workflows decide which artifact gets created

---

## 11. Recommended Next Step

After artifact templates, the next useful implementation documents are:

1. evidence rubric
2. question bank
3. workflow specs

The best next one is likely:

- `business-os-evidence-rubric.md`

because evidence quality controls both module decisions and artifact confidence.
