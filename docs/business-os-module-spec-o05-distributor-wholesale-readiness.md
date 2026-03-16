# O05 Distributor / Wholesale Readiness

Status: Draft
Type: Overlay
Version: current
Owner: Business OS

Related:

- [business-os-module-spec-template.md](./business-os-module-spec-template.md)
- [business-os-module-map.md](./business-os-module-map.md)
- [business-os-decision-gate-philosophy.md](./business-os-decision-gate-philosophy.md)
- [business-os-artifact-map.md](./business-os-artifact-map.md)

---

## 1. Purpose

This overlay helps determine whether a business is ready to sell through:

- distributors
- wholesalers
- dealers
- reseller networks
- channel partners that materially affect margin and control

Its job is to stop businesses from entering indirect channels too early because those channels often add:

- margin pressure
- payment delays
- stock commitments
- brand-control loss
- partner dependency

This overlay should answer:

- whether distributor or wholesale channels are strategically right
- whether the business is operationally ready for them
- whether the economics survive partner margins and payment cycles
- whether the business should pilot, defer, or avoid the channel

---

## 2. When To Use

Use this overlay when:

- indirect-channel growth is under consideration
- the user is evaluating wholesale, dealer, reseller, or distributor channels
- large-account or partner-led expansion is being discussed
- the business wants reach but may lose brand control or margin

This overlay is especially useful for:

- physical product businesses
- product brands considering retail or channel scale
- import and inventory-heavy businesses
- B2B or trade-driven businesses
- businesses where channel conflict may matter

Use it alongside core modules such as:

- M09 Costing, Pricing, And Unit Economics
- M10 Operations, Delivery, And Supply System
- M12 Route-To-Market And Sales Architecture
- M17 Financial Planning And Capital Allocation
- O07 Expansion / New Category Smoke Test

---

## 3. When Not To Use

Do not use this overlay when:

- the business only sells direct and partner channels are not being considered
- the offer is too early or too undefined to discuss channel readiness
- the issue is only a normal B2B sales pipeline, not true indirect-channel readiness

This overlay may be deferred temporarily if:

- the product, pricing, or margin structure is still unclear
- operational repeatability is still weak

---

## 4. Prerequisites

Preferred prerequisites:

- M08 Offer Architecture
- M09 Costing, Pricing, And Unit Economics
- M10 Operations, Delivery, And Supply System
- M12 Route-To-Market And Sales Architecture

Helpful prerequisites where available:

- M17 Financial Planning And Capital Allocation
- O03 Inventory, Fulfillment, And Packaging
- O07 Expansion / New Category Smoke Test

Minimum viable prerequisites:

- a clear offer
- a rough pricing structure
- a rough description of the partner channel being considered

If those do not exist, the agent should slow down and clarify before making strong channel-readiness recommendations.

---

## 5. Inputs

Typical inputs may include:

- offer and SKU structure
- direct-channel pricing
- expected distributor or wholesale margin demands
- payment-term assumptions
- packaging and fulfillment assumptions
- MOQ or stocking expectations
- brand-control expectations
- field-sales or partner-support assumptions
- existing artifacts such as:
    - Offer Architecture Document
    - Pricing And Unit Economics Memo
    - Operations Playbook
    - Route-To-Market Strategy Memo
    - Financial Planning Memo

---

## 6. Discovery Questions

### Required Questions

- What kind of partner channel are you considering?
- Why do you want this channel now?
- What margin or discount would the partner expect?
- What payment terms apply?
- What inventory, display, or stocking burden would this create?
- What operational support would partners expect from you?
- What brand-control loss are you willing to tolerate?
- What happens if the partner underperforms or delays payment?

### Useful Questions

- Is this meant to complement or replace direct channels?
- Would this create channel conflict with direct sales?
- Does the partner need exclusivity?
- What training, samples, or sales tools are required?
- Does this require returns, damaged-stock handling, or buyback risk?
- What minimum reorder velocity would make this worthwhile?

### Channel-Risk Questions

Use where relevant:

- Could this channel compress price perception?
- Could this channel lock the business into weak economics?
- Does the business have enough repeatable supply to support multiple partners?
- Would one large partner create dangerous concentration risk?

---

## 7. Research Requirements

### Required Research

At minimum, the overlay should gather enough evidence to judge:

- partner-margin viability
- payment-cycle risk
- operational support burden
- brand and channel-conflict risk

Required research may include:

- partner-model comparison
- margin and payment-term review
- fulfillment and inventory-readiness review
- competitor channel-structure review
- channel-conflict and price-positioning review

If the user explicitly requests research, or the partner model is unfamiliar, external research should be performed.

### Optional Research

Where useful, deeper research may include:

- distributor contract-pattern review
- dealer incentive comparison
- display, merchandising, or field-support benchmark review
- partner pilot design review

### Source Priority

Prefer:

1. real partner terms or credible assumptions
2. real direct-channel economics
3. real operational and packaging constraints
4. competitor or substitute channel behavior
5. secondary partner-channel benchmarks

---

## 8. Analysis Tasks

This overlay should perform the following analysis:

1. Define the partner-channel model clearly.
2. Compare indirect-channel logic with direct-channel logic.
3. Assess whether economics survive partner discounts, incentives, and payment delays.
4. Assess whether packaging, logistics, and supply repeatability are ready.
5. Assess channel conflict and brand-control risk.
6. Assess partner-support burden such as samples, training, merchandising, or account management.
7. Assess concentration risk if few partners drive most volume.
8. Determine whether the business should:
    - stay direct for now
    - pilot with a small number of partners
    - enter wholesale with conditions
    - defer indirect-channel expansion
9. Highlight what remains assumed versus validated.

---

## 9. Evidence Requirements

Use the standard evidence model from the Business OS gate philosophy.

### Exploratory Output Threshold

An exploratory distributor or wholesale memo may be created with:

- E1 Weak Signal

if the output is clearly labeled exploratory.

### Recommendation Threshold

A meaningful recommendation about partner-channel readiness should usually require at least:

- E2 Directional Evidence

Examples:

- rough partner economics
- rough payment-term assumptions
- rough fulfillment readiness
- rough channel-conflict understanding

### Strong Recommendation Threshold

To recommend aggressive indirect-channel expansion or major partner dependence, prefer:

- E3 Strong Working Evidence

Examples:

- real partner terms
- real reorder or pilot behavior
- real fulfillment performance
- real payment-cycle data

### High-Risk Cases

Use extra caution when:

- partner margins heavily compress direct economics
- payment cycles are long
- the business cannot support consistent supply
- brand dilution risk is high
- one or two partners could dominate revenue

---

## 10. Outputs

### Primary Output

- `Distributor / Wholesale Readiness Memo`

This should include:

- channel decision summary
- economics and payment implications
- operational readiness
- channel conflict and brand-control implications
- partner-support burden
- recommendation

### Optional Supporting Outputs

- partner economics table
- channel conflict note
- pilot partner strategy note
- indirect-channel risk summary

### Output Depth

- exploratory if partner evidence is thin
- decision-ready if economics and ops are directional
- high-confidence if real partner and fulfillment evidence exists

---

## 11. Decision Gates

### Proceed

Use when:

- channel economics are workable
- operational support is believable
- payment-cycle risk is manageable
- channel conflict is manageable

### Proceed With Warnings

Use when:

- the partner path is directionally workable
- but margin, payment, or support assumptions still need validation

Warnings should explicitly mention:

- what could break first
- what partner assumption is still weak
- what should be piloted next

### Conditional Proceed

Use when:

- the partner channel may work
- but only through a small pilot, limited territory, limited assortment, or tighter terms

Typical conditions:

- pilot with one or two partners only
- restrict the SKU set
- keep direct-first pricing discipline
- delay broad rollout until reorder behavior is proven

### Defer

Use when:

- the partner channel is premature because product, pricing, or supply repeatability is still weak

### Block / Validate First

Use when:

- indirect-channel economics are not believable
- payment-cycle or stock burden creates unacceptable financial strain
- operational readiness is too fragile
- the business is trying to use partners to hide weak direct-channel fundamentals

---

## 12. Red Flags

- distributor interest is treated as proof the channel is right
- partner margins are ignored or minimized
- payment delays are ignored
- channel conflict is not considered
- supply repeatability is assumed
- sample, merchandising, or support burden is ignored
- the business wants scale before proving reorder logic
- one partner could dominate the business too quickly

---

## 13. Handoff / Next Routing

Typical next modules:

- M09 Costing, Pricing, And Unit Economics
- M10 Operations, Delivery, And Supply System
- M12 Route-To-Market And Sales Architecture
- M17 Financial Planning And Capital Allocation
- O14 Experimentation And Pilot Design

Routing logic:

- if the main uncertainty is partner-margin viability -> route to M09
- if the main uncertainty is packaging, supply, or reorder support -> route to M10
- if the main uncertainty is channel structure and conflict -> route to M12
- if the main uncertainty is payment-cycle or stock burden -> route to M17
- if the safest next step is a limited partner trial -> route to O14

Optional routes:

- O03 Inventory, Fulfillment, And Packaging if packaging or stocking assumptions are thin
- O08 Offline Retail / Exhibition Readiness if the partner model relies heavily on display presence

---

## 14. Artifact Update Rules

This overlay should update:

- Assumption Log
    - add all partner, pricing, payment, and support assumptions
- Evidence Tracker
    - record partner-term, economic, and ops-readiness evidence
- Decision Gate Tracker
    - record whether indirect-channel entry is workable, conditional, deferred, or blocked
- Open Questions Register
    - record unresolved questions such as missing terms, unclear reorder logic, or channel-conflict gaps

---

## 15. Skill / Agent Notes

- This overlay is a strong candidate for a future distributor-readiness skill.
- The overlay should stay grounded in economics and operational burden, not channel prestige.
- It should usually prefer bounded partner pilots over broad wholesale rollout.
- It should not let users escape weak direct-channel fundamentals by hiding behind intermediaries.
