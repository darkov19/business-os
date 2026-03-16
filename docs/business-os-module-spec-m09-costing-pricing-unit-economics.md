# M09 Costing, Pricing, And Unit Economics

Status: Draft
Type: Core
Version: current
Owner: Business OS

Related:

- [business-os-module-spec-template.md](./business-os-module-spec-template.md)
- [business-os-module-map.md](./business-os-module-map.md)
- [business-os-decision-gate-philosophy.md](./business-os-decision-gate-philosophy.md)
- [business-os-artifact-templates.md](./business-os-artifact-templates.md)

---

## 1. Purpose

This module helps determine:

- what an offer really costs to deliver
- what pricing logic is believable
- whether the business can support its chosen channels
- whether the offer has viable unit economics
- where the biggest cost and margin risks sit

Its job is to stop the business from making one of the most common commercial mistakes:

- treating pricing as branding or founder preference while ignoring real economics

This module should answer:

- what the offer should likely cost
- what pricing range is plausible
- what margin structure is realistic
- what channel mix the economics can support
- what must be validated before scaling

---

## 2. When To Use

Use this module when:

- the user is defining a new offer
- the user is preparing a launch
- the user is choosing between channels with different margin pressure
- the user is diagnosing weak profitability
- the user is evaluating an expansion or new category
- the user wants to know whether the business can sustain its current pricing

This module is relevant across:

- physical product businesses
- service businesses
- SaaS / digital product businesses
- local service businesses
- B2B and distributor-led businesses
- hybrid businesses with both custom and standardized offers

---

## 3. When Not To Use

Do not use this module as the first deep step if:

- the offer itself is still undefined
- the customer is still too vague to judge value and price logic
- the user is only asking for high-level brainstorming with no real offer structure yet

This module may be deferred temporarily if:

- M08 Offer Architecture has not defined what is being sold
- M05 Customer Research is still too weak to judge willingness to pay or buying context
- the user is only exploring an abstract idea and is not yet ready for commercial modeling

---

## 4. Prerequisites

Preferred prerequisites:

- M05 Customer Research
- M08 Offer Architecture

Helpful prerequisites where available:

- M10 Operations, Delivery, And Supply System
- M12 Route-To-Market And Sales Architecture

Minimum viable prerequisites:

- a defined or mostly defined offer
- a rough idea of the target customer
- a rough list of cost drivers

If those do not exist, the agent should clarify the offer and cost structure before drafting strong recommendations.

---

## 5. Inputs

Typical inputs may include:

- offer description
- bill of materials or delivery inputs
- time and labor estimates
- vendor or sourcing quotes
- shipping, packaging, installation, onboarding, or servicing assumptions
- channel assumptions
- current or target price points
- competitor pricing observations
- prior sales history
- refund, remake, discount, or support cost patterns
- existing artifacts such as:
    - Customer Research Brief
    - Offer Architecture Document
    - Operations Playbook
    - Route-To-Market Strategy Memo
    - Expansion Smoke Test Memo

---

## 6. Discovery Questions

### Required Questions

- What exactly is being priced?
- What are the main cost components to deliver one unit, project, subscription, or engagement?
- Which costs are fixed, variable, or semi-variable?
- What price are you currently charging, or thinking of charging?
- Why does that price feel right to you today?
- Which channels will this offer be sold through?
- What margin or profit outcome do you think is necessary?
- Which cost assumptions are still uncertain?

### Useful Questions

- Is the price meant to maximize conversion, profit, prestige, or channel compatibility?
- Are there multiple offer tiers or package levels?
- How often do discounts, revisions, returns, or rework happen?
- Are shipping, installation, onboarding, or support included or charged separately?
- Is the customer comparing you to cheaper substitutes, premium alternatives, or custom solutions?
- What evidence do you have about willingness to pay?
- What happens to economics if volume stays low for longer than expected?

### Channel-Sensitive Questions

Use where relevant:

- What commission, marketplace fee, retailer margin, or distributor margin applies?
- Does this channel require lower pricing, higher margin, credit terms, or promotional spend?
- Does the same price work across all channels?
- Could one channel destroy economics that work elsewhere?

### Service And Customization Questions

Use where relevant:

- How much founder or expert time is hidden in delivery?
- How often does scope expand after the sale?
- What part of the offer is standardized versus custom?
- Are quoting errors or underestimation common?

---

## 7. Research Requirements

### Required Research

At minimum, the module should gather enough evidence to judge:

- internal cost realism
- pricing plausibility
- channel margin pressure
- obvious economic red flags

Required research may include:

- internal cost and process review
- competitor and substitute pricing review
- channel-fee review
- rough customer willingness-to-pay signals

If the user explicitly requests research, or the category is unfamiliar, external research should be performed.

### Optional Research

Where useful, deeper research may include:

- price ladder mapping across competitors
- procurement or vendor quote comparison
- sensitivity modeling
- package or tier benchmarking
- contract term or payment-cycle review
- return, warranty, or support cost benchmarking

### Source Priority

Prefer:

1. real internal cost data
2. actual sales history or quote history
3. direct customer willingness-to-pay signals
4. competitor and substitute pricing
5. secondary market summaries

---

## 8. Analysis Tasks

This module should perform the following analysis tasks:

1. Define the pricing unit clearly.
2. Map all meaningful cost drivers.
3. Separate fixed, variable, and hidden costs.
4. Estimate the true delivery cost per unit, order, project, or account where possible.
5. Compare target price with internal economics.
6. Compare price logic with market and substitute context.
7. Assess gross margin and contribution logic.
8. Assess how channels affect margin, cash timing, and price control.
9. Identify the biggest sensitivities such as volume, discounting, rework, or sourcing volatility.
10. Determine whether the current or proposed pricing is:
    - viable
    - fragile
    - channel-incompatible
    - prestige-misaligned
    - underpriced
    - overpriced without proof
11. Highlight what remains assumed versus validated.

---

## 9. Evidence Requirements

Use the standard evidence model from the Business OS gate philosophy.

### Exploratory Output Threshold

An exploratory pricing memo may be created with:

- E1 Weak Signal

if cost inputs are incomplete but the document is clearly labeled directional.

### Recommendation Threshold

A meaningful pricing or economics recommendation should usually require at least:

- E2 Directional Evidence

Examples:

- rough but believable cost breakdown
- competitor price observations
- channel-fee review
- early willingness-to-pay signals

### Strong Recommendation Threshold

To strongly recommend pricing, margin targets, or channel-specific price logic, prefer:

- E3 Strong Working Evidence

Examples:

- real delivered-cost data
- repeated quote or sales history
- actual discount and conversion patterns
- actual channel economics

### High-Risk Cases

Use extra caution when:

- import or commodity cost volatility is high
- pricing depends on wholesale or distributor layers
- the offer has high refund, remake, or support cost
- the business is premium-positioned but lacks proof assets

---

## 10. Outputs

### Primary Output

- `Pricing And Unit Economics Memo`

This should include:

- business context summary
- offer(s) reviewed
- cost structure
- pricing logic
- margin view
- channel impact
- risks and sensitivities
- recommendation

### Optional Supporting Outputs

- price ladder note
- margin comparison table
- channel economics note
- pricing decision summary

### Output Depth

- exploratory if cost inputs are thin
- decision-ready if economics are directional and channel logic is credible
- high-confidence if real operating data exists

---

## 11. Decision Gates

### Proceed

Use when:

- the offer is clear
- cost structure is believable
- price logic is coherent
- margins appear viable for the intended channels
- no major hidden-cost risk is being ignored

### Proceed With Warnings

Use when:

- the economics are probably workable
- but one or more cost assumptions remain thin

Warnings should explicitly mention:

- what is still assumed
- what margin could be eroded by
- what should be validated next

### Conditional Proceed

Use when:

- the offer could work
- but only with narrower scope, price adjustment, channel change, or phased rollout

Typical conditions:

- launch direct first before wholesale
- remove low-margin customization
- increase price only after stronger proof is added
- keep a pilot price while actual delivery cost is measured

### Defer

Use when:

- pricing work is premature because the offer or customer is still unclear
- cost structure depends on decisions not yet made elsewhere

### Block / Validate First

Use when:

- the current or proposed price is not believable against cost
- margin is too weak for the intended channel
- hidden cost drivers are likely large and ignored
- the user wants to scale before economics are understood

---

## 12. Red Flags

- price is set mainly by gut feel or competitor copying
- important costs such as founder time, support, rework, shipping, or returns are excluded
- channel commissions or partner margins are ignored
- the business assumes scale economics before proving demand
- custom work is being priced like a standardized product
- premium pricing is claimed without premium proof, experience, or trust assets
- discounts are frequent but not reflected in economics
- one channel is subsidizing another without visibility

---

## 13. Handoff / Next Routing

Typical next modules:

- M10 Operations, Delivery, And Supply System
- M11 Brand, Messaging, And Trust Assets
- M12 Route-To-Market And Sales Architecture
- M14 Launch And Execution Planning
- M17 Financial Planning And Capital Allocation

Routing logic:

- if the main uncertainty is actual delivery cost or repeatability -> route to M10
- if the main uncertainty is whether price is justified in the market -> route to M11
- if the main uncertainty is whether margins survive the intended channels -> route to M12
- if the main uncertainty is cash burden, inventory, or payment timing -> route to M17
- if launch scope should shrink due to economics -> route to M14

Optional routes:

- O06 Import / Sourcing Evaluation if raw-material or import dependency drives economics
- O14 Experimentation And Pilot Design if the price needs live-market testing

---

## 14. Artifact Update Rules

This module should update:

- Assumption Log
    - add all uncertain cost, price, discount, and margin assumptions
- Evidence Tracker
    - record the source and strength of cost, competitor, and channel-economics evidence
- Decision Gate Tracker
    - record whether pricing is viable, conditional, deferred, or blocked
- Open Questions Register
    - record missing inputs such as unknown delivery costs, channel fees, or willingness-to-pay gaps

---

## 15. Skill / Agent Notes

- This module is a strong candidate for both a standalone skill and a common router-invoked component.
- The workflow should be practical, not academic; do not produce finance theater without usable decisions.
- The module should distinguish clearly between price, margin, and cash flow instead of collapsing them together.
- When the user lacks real cost data, the module should still create a structured estimate but label it honestly.
- For premium, custom, or channel-heavy businesses, the module should strongly emphasize hidden-cost and channel-pressure analysis.

---

## 16. Suggested Artifact Structure

The `Pricing And Unit Economics Memo` generated from this module should typically contain:

1. business context summary
2. offer(s) reviewed
3. pricing unit definition
4. cost structure breakdown
5. pricing logic and rationale
6. margin view
7. channel impact
8. key sensitivities and downside risks
9. evidence used
10. assumptions still open
11. recommendation
12. next recommended module
