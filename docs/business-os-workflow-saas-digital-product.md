# Business OS Workflow: SaaS / Digital Product

Status: Draft workflow spec
Purpose: Define the end-to-end workflow the Business OS should use when a user is building, validating, launching, or tightening a SaaS or digital product business where activation, retention, trust, and product behavior materially affect success.

Related:

- [business-os-framework.md](./business-os-framework.md)
- [business-os-context-classifier.md](./business-os-context-classifier.md)
- [business-os-module-map.md](./business-os-module-map.md)
- [business-os-module-spec-o10-saas-digital-product.md](./business-os-module-spec-o10-saas-digital-product.md)
- [business-os-artifact-templates.md](./business-os-artifact-templates.md)
- [business-os-question-bank.md](./business-os-question-bank.md)
- [business-os-evidence-rubric.md](./business-os-evidence-rubric.md)

---

## 1. Why This Workflow Exists

SaaS and digital products often look simple from the outside:

- build the product
- get users
- charge a subscription

But many early software businesses fail because they confuse:

- features with product value
- signups with activation
- early interest with retention
- pricing with monetization readiness
- acquisition with scalable growth

This workflow exists to move a SaaS or digital product from a vague or early software idea into a more disciplined business path.

It should force the system to answer:

- who the product is really for
- what first value looks like
- what makes users stay or churn
- how the product should be sold
- whether the business should validate, launch narrowly, or improve product adoption first

---

## 2. When To Use

Use this workflow when:

- the business context is `SaaS / digital product`
- the user is starting or validating a software product business
- the user is launching or relaunching a SaaS or AI tool
- activation, onboarding, usage, or retention are central to the decision

Typical user queries:

- I want to build a SaaS around this workflow
- help me validate this AI tool idea
- help me launch this software product
- users are trying it but not sticking

---

## 3. When Not To Use

Do not use this workflow when:

- the offer is mainly a service with no meaningful software product behavior
- the user only needs a generic start-from-scratch flow
- the user only needs a narrow marketing diagnosis for an already mature SaaS

In those cases, route to:

- Start From Scratch
- Improve Sales Or Marketing
- Improve Retention, Support, Or Post-Sale Experience

---

## 4. Workflow Goal

By the end of this workflow, the system should be able to produce:

- a Business Definition Note
- a Customer Research Brief
- an Offer Architecture Document
- a SaaS / Digital Product Growth Note
- a Pricing And Unit Economics Memo
- a Route-To-Market Strategy Memo
- a Customer Success And Retention Memo where relevant
- an Execution Activation Plan where the SaaS path is clear
- a 30/60 Day Execution Plan where validation or launch work is ready
- a Business Concept Dossier or Launch Dossier depending on stage

And it should be able to state clearly:

- whether the product should validate first
- whether the product is ready for a narrow launch
- whether onboarding or activation must improve before growth
- whether retention risk makes scale premature
- what should happen first over the next 30-60 days

---

## 5. Primary Modules

This workflow should typically use:

1. M03 Business Definition
2. M04 Problem / Opportunity Definition
3. M05 Customer Research
4. M08 Offer Architecture
5. M09 Costing, Pricing, And Unit Economics
6. M12 Route-To-Market And Sales Architecture
7. M13 Marketing And Growth System
8. M18 Customer Success And Retention System

Overlay modules commonly used:

- O10 SaaS / Digital Product Overlay
- O13 Marketplace / Platform Strategy Overlay where relevant
- O14 Experimentation And Pilot Design

Control modules used throughout:

- C01 Assumption Log
- C02 Evidence Tracker
- C03 Decision Gate Tracker
- C05 Open Questions Register

---

## 6. Workflow Stages

This workflow should run in seven stages.

1. SaaS Framing
2. Customer And Product Outcome Definition
3. Activation And Onboarding Review
4. Pricing And GTM Design
5. Retention And Product Trust Review
6. Validation Or Launch Plan
7. Gate And Next-Step Decision

---

## 7. Stage 1: SaaS Framing

### Goal

Confirm that the business is truly a software or digital-product business and define the current stage.

### Required Questions

- Is the core offer actually a product, a service, or a hybrid?
- Who is the user and who is the buyer?
- Is this at idea stage, prototype stage, pilot stage, or live stage?
- What is the software supposed to do better than the current alternative?

### Outputs

- SaaS context confirmation
- current-stage summary

### Gate

If the software layer is not central to the business, reroute to a more suitable workflow.

---

## 8. Stage 2: Customer And Product Outcome Definition

### Goal

Define the customer, the user job, and the core product outcome.

### Primary Modules

- M04 Problem / Opportunity Definition
- M05 Customer Research
- M08 Offer Architecture
- O10 SaaS / Digital Product Overlay

### Required Questions

- What user problem is the product solving?
- What result should the user get from the product?
- What does the user currently do instead?
- What product scope is essential versus optional right now?

### Outputs

- Customer Research Brief
- Offer Architecture Document

### Gate

Use `Block / Validate First` if the product is still described as feature ideas without a clear user outcome.

---

## 9. Stage 3: Activation And Onboarding Review

### Goal

Determine how the product creates first value and where adoption may fail.

### Primary Modules

- O10 SaaS / Digital Product Overlay
- M18 Customer Success And Retention System where onboarding is high-touch

### Required Questions

- What is the activation moment?
- What steps must happen before first value appears?
- What friction blocks activation?
- Does this product need assisted onboarding?

### Outputs

- SaaS / Digital Product Growth Note
- onboarding and activation diagnosis

### Gate

Use `Conditional Proceed` if the product can move forward only with a narrow pilot or high-touch onboarding.

Use `Block / Validate First` if activation remains too vague or too fragile.

---

## 10. Stage 4: Pricing And GTM Design

### Goal

Determine how the product should be priced and sold.

### Primary Modules

- M09 Costing, Pricing, And Unit Economics
- M12 Route-To-Market And Sales Architecture
- M13 Marketing And Growth System

### Required Questions

- What pricing model fits the product and usage reality?
- Should this be self-serve, assisted, sales-led, or hybrid?
- What channel is realistic first?
- Does the current product maturity justify aggressive acquisition?

### Outputs

- Pricing And Unit Economics Memo
- Route-To-Market Strategy Memo

### Gate

Use `Proceed With Warnings` if pricing and GTM are plausible but still assumption-heavy.

Use `Block / Validate First` if the business is trying to scale acquisition without believable activation logic.

---

## 11. Stage 5: Retention And Product Trust Review

### Goal

Assess whether users will stay and whether the product is trustworthy enough to grow.

### Primary Modules

- O10 SaaS / Digital Product Overlay
- M18 Customer Success And Retention System

### Required Questions

- What makes a user stay or churn?
- What support, implementation, or success help is required?
- What reliability, privacy, or trust concerns matter?
- What usage behavior would signal healthy retention?

### Outputs

- Customer Success And Retention Memo where relevant
- product trust and retention note

### Gate

Use `Block / Validate First` if reliability, privacy, or retention assumptions are too weak for scale.

---

## 12. Stage 6: Validation Or Launch Plan

### Goal

Turn the product and business logic into a credible next operating path.

### Primary Modules

- O14 Experimentation And Pilot Design
- M13 Marketing And Growth System
- M18 Customer Success And Retention System

### Possible Outputs

- Experiment / Pilot Design Memo
- Launch Dossier where the product is ready enough
- Business Concept Dossier where validation is still primary

### Decision Logic

- early products should usually validate through bounded pilots
- mid-stage products may launch narrowly to one ICP
- live products with weak retention should improve product adoption before scaling acquisition

---

## 13. Stage 7: Gate And Next-Step Decision

### Goal

End with a clear, stage-aware recommendation.

### Possible End States

#### Validate First

The product concept is promising, but the business still needs sharper evidence on customer value or adoption behavior.

#### Narrow Launch

The product is ready for a bounded ICP, channel, or onboarding-led launch.

#### Improve Onboarding Or Activation First

The business should not scale acquisition yet because users are not reliably reaching first value.

#### Improve Retention Or Trust First

The product may get interest, but it is not yet strong enough to keep users or support scale.

---

## 14. Control Artifact Rules

Throughout the workflow, update:

- Assumption Log
- Evidence Tracker
- Decision Gate Tracker
- Open Questions Register

These should capture:

- product-behavior assumptions
- pricing-model assumptions
- adoption and retention uncertainty
- trust and reliability risks

---

## 15. Skill / Agent Notes

- This workflow is a strong candidate for a future top-level skill.
- It should not collapse into generic startup advice.
- It should keep a strong distinction between acquisition, activation, retention, and trust.
- It should usually prefer narrow launch or bounded validation over broad software ambitions.
