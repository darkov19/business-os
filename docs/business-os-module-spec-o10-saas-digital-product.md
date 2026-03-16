# O10 SaaS / Digital Product Overlay

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

This overlay adds software-specific logic to the core Business OS for businesses that sell:

- SaaS products
- AI tools
- digital workflows
- software-enabled subscriptions
- productized internal tooling sold as a service

Its job is to stop the system from evaluating a software business like a normal product or service business.

This overlay should answer:

- what the real product outcome is
- what activation and onboarding must achieve
- what makes users retain or churn
- what reliability, privacy, and support risks affect trust
- whether the product is ready to scale, pilot, or stay narrow

---

## 2. When To Use

Use this overlay when:

- the business sells a software product, AI product, or digital subscription
- the user is validating, launching, or growing a digital product
- onboarding, activation, retention, or reliability matter materially
- the business may appear high-margin but still depends on product adoption behavior

This overlay is especially useful for:

- B2B SaaS
- AI workflow tools
- subscription software
- usage-based digital products
- SaaS products embedded in broader service businesses

Use it alongside core modules such as:

- M05 Customer Research
- M08 Offer Architecture
- M09 Costing, Pricing, And Unit Economics
- M12 Route-To-Market And Sales Architecture
- M13 Marketing And Growth System
- M18 Customer Success And Retention System

---

## 3. When Not To Use

Do not use this overlay when:

- the offer is primarily a service with no meaningful software product component
- the offer is a one-time digital file or course better handled by a different overlay
- the user only needs generic business-definition help and the software-specific questions are premature

This overlay may be deferred temporarily if:

- the business idea is still too vague to define a product outcome
- the user cannot yet explain who the user is, what job the product does, or how usage would happen

---

## 4. Prerequisites

Preferred prerequisites:

- M03 Business Definition
- M05 Customer Research
- M08 Offer Architecture

Helpful prerequisites where available:

- M07 Positioning And Value Proposition
- M09 Costing, Pricing, And Unit Economics
- M12 Route-To-Market And Sales Architecture

Minimum viable prerequisites:

- a rough description of the product
- a rough user or buyer definition
- a rough statement of the core outcome the product is supposed to create

If those do not exist, the agent should clarify them before making strong SaaS recommendations.

---

## 5. Inputs

Typical inputs may include:

- product description
- target user and buyer description
- onboarding flow or draft user journey
- pricing model assumptions
- roadmap notes
- feature or workflow list
- activation assumptions
- churn concerns
- support, reliability, or privacy constraints
- current analytics or usage evidence
- existing artifacts such as:
    - Customer Research Brief
    - Offer Architecture Document
    - Pricing And Unit Economics Memo
    - Route-To-Market Strategy Memo
    - Marketing Strategy Plan
    - Customer Success And Retention Memo

---

## 6. Discovery Questions

### Required Questions

- What is the core product outcome?
- Who is the user, and who is the buyer?
- What must happen for a user to experience value for the first time?
- What is the activation moment?
- What makes a user stay, expand, or churn?
- What pricing model are you considering?
- What reliability, privacy, or trust concerns matter?
- What product dependencies or delivery risks exist?

### Useful Questions

- What is the onboarding flow today or in your current draft?
- Which features are critical versus nice to have?
- Which metrics matter most right now?
- What usage behavior predicts retention?
- What human support is needed before the product becomes more self-serve?
- What implementation effort exists for B2B customers?
- What integration, compliance, or data-quality risks matter?

### Growth And Scale Questions

Use where relevant:

- Are users trying the product but failing to activate?
- Are buyers purchasing but teams not adopting?
- Are you trying to scale acquisition before retention is healthy?
- Which part is weakest: acquisition, activation, engagement, retention, or expansion?

---

## 7. Research Requirements

### Required Research

At minimum, the overlay should gather enough evidence to judge:

- user-job clarity
- activation plausibility
- retention logic
- product trust and reliability risks

Required research may include:

- competitor and substitute review
- onboarding and pricing review
- user journey review
- product-review or community-signal review
- current internal usage or funnel evidence if it exists

If the user explicitly requests research, or the category is unfamiliar, external research should be performed.

### Optional Research

Where useful, deeper research may include:

- churn and retention benchmarking
- onboarding benchmark review
- pricing model comparison
- PLG versus sales-led benchmark comparison
- privacy or compliance expectation review

### Source Priority

Prefer:

1. real user behavior and analytics
2. customer conversations and observed implementation issues
3. onboarding and support evidence
4. competitor and substitute product behavior
5. secondary SaaS benchmarks

---

## 8. Analysis Tasks

This overlay should perform the following analysis:

1. Clarify the core product job to be done.
2. Separate buyer logic from user logic.
3. Identify the activation moment and what blocks it.
4. Assess whether onboarding is likely to create first value quickly enough.
5. Assess the retention logic and likely churn drivers.
6. Assess whether pricing logic matches product value and adoption behavior.
7. Assess whether the GTM model fits the product complexity.
8. Assess reliability, privacy, and trust requirements.
9. Identify whether the business is trying to scale too early.
10. Recommend whether the product should:
    - keep validating
    - launch narrowly
    - improve onboarding first
    - improve retention first
    - avoid scaling yet

---

## 9. Evidence Requirements

Use the standard evidence model from the Business OS gate philosophy.

### Exploratory Output Threshold

An exploratory SaaS growth or launch note may be created with:

- E1 Weak Signal

if the output is clearly labeled exploratory.

### Recommendation Threshold

A meaningful recommendation about onboarding, activation, pricing model, or readiness should usually require at least:

- E2 Directional Evidence

Examples:

- founder observations plus competitor patterns
- early demos or pilot usage
- early funnel data
- support or onboarding observations

### Strong Recommendation Threshold

To recommend aggressive scaling, channel expansion, or high-confidence retention assumptions, prefer:

- E3 Strong Working Evidence

Examples:

- real activation data
- real retention behavior
- real onboarding outcomes
- repeated buyer and user patterns

### High-Risk Cases

Use extra caution when:

- privacy, compliance, or sensitive data are involved
- the product needs heavy implementation or services to work
- reliability problems can materially destroy trust
- the business is trying to buy traffic before activation is working

---

## 10. Outputs

### Primary Output

- `SaaS / Digital Product Growth Note`

This should include:

- business and product summary
- user and buyer distinction
- activation logic
- retention logic
- pricing model fit
- product trust and reliability risks
- scale-readiness recommendation

### Optional Supporting Outputs

- onboarding diagnosis note
- activation-risk summary
- retention-risk summary
- PLG versus sales-led fit note

### Output Depth

- exploratory if product usage evidence is thin
- decision-ready if activation and retention logic are directional
- high-confidence if real product behavior exists

---

## 11. Decision Gates

### Proceed

Use when:

- the core product outcome is clear
- onboarding can plausibly drive first value
- activation is directionally believable
- reliability and trust risks are manageable
- scaling pressure is not obviously premature

### Proceed With Warnings

Use when:

- the product direction is credible
- but onboarding, pricing, or retention still have meaningful uncertainty

Warnings should explicitly mention:

- what still needs evidence
- what could break adoption
- what metric should be watched first

### Conditional Proceed

Use when:

- the product should move forward
- but only through a narrower pilot, smaller ICP, assisted onboarding, or retention fix before scale

Typical conditions:

- launch to one ICP first
- keep onboarding high-touch for now
- fix activation before paid acquisition
- delay expansion until reliability improves

### Defer

Use when:

- the software-specific evaluation is premature because the product and user journey are still too undefined

### Block / Validate First

Use when:

- onboarding, activation, or reliability remain weak
- the business is trying to scale acquisition before retention is healthy
- the product depends on risky assumptions about user behavior with little evidence
- trust, privacy, or implementation risk is too high to ignore

---

## 12. Red Flags

- the product outcome is described as features, not user value
- the buyer and user are confused
- activation is undefined
- churn is discussed vaguely with no behavioral understanding
- the business wants growth before the product reliably creates value
- onboarding depends too heavily on founder hand-holding but is treated as productized
- pricing is copied from competitors without matching usage reality
- privacy, data, or reliability concerns are dismissed

---

## 13. Handoff / Next Routing

Typical next modules:

- M09 Costing, Pricing, And Unit Economics
- M12 Route-To-Market And Sales Architecture
- M13 Marketing And Growth System
- M18 Customer Success And Retention System
- O14 Experimentation And Pilot Design

Routing logic:

- if the main uncertainty is pricing model viability -> route to M09
- if the main uncertainty is GTM motion or sales model -> route to M12
- if the main uncertainty is acquisition versus activation -> route to M13
- if the main uncertainty is retention, support, or onboarding -> route to M18
- if the product needs structured validation before scale -> route to O14

Optional routes:

- M05 Customer Research if the ICP is still weak
- M08 Offer Architecture if the product and packaging are still unclear

---

## 14. Artifact Update Rules

This overlay should update:

- Assumption Log
    - add all product-behavior, activation, retention, and trust assumptions
- Evidence Tracker
    - record activation, onboarding, and user-behavior evidence
- Decision Gate Tracker
    - record whether the product is ready to launch narrowly, scale, defer, or validate first
- Open Questions Register
    - record unresolved questions such as missing metrics, unclear retention logic, or trust-risk gaps

---

## 15. Skill / Agent Notes

- This overlay is a strong candidate for a future SaaS-specific workflow or launch skill.
- The overlay should not turn generic SaaS advice into dogma; B2B, AI, PLG, and sales-led products behave differently.
- The main job is to force attention onto activation, retention, and trust before scaling.
- If analytics are weak, the overlay should still produce a structured behavioral hypothesis with honest confidence labels.
- In regulated or sensitive sectors, the overlay should warn clearly when privacy or compliance is outside the current system boundary.

---

## 16. Suggested Artifact Structure

The `SaaS / Digital Product Growth Note` generated from this overlay should typically contain:

1. product and business summary
2. user and buyer distinction
3. core outcome and activation moment
4. onboarding view
5. retention and churn logic
6. pricing model fit
7. trust, privacy, and reliability risks
8. evidence used
9. assumptions still open
10. recommendation
11. next recommended module
