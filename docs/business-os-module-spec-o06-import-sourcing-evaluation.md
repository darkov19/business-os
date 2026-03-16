# O06 Import / Sourcing Evaluation

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

This overlay helps determine how a business should source a product, material, or production input when decisions involve:

- imports
- local manufacturing versus import comparison
- supplier-model comparison
- MOQ pressure
- landed-cost uncertainty
- quality-control risk

Its job is to stop the business from treating sourcing as a pure price decision while ignoring lead time, quality, cash exposure, and dependency risk.

This overlay should answer:

- which sourcing model is directionally best
- what hidden cost and timing pressures exist
- what quality and supplier-dependence risks exist
- whether the business should import now, source locally, pilot first, or defer

---

## 2. When To Use

Use this overlay when:

- the business is comparing import versus local sourcing
- MOQ, landed cost, freight, customs, or vendor-dependence matter materially
- the user is evaluating a new product line with unclear sourcing risk
- sourcing decisions could materially affect pricing, cash, or launch timing
- supplier choice could affect quality consistency or serviceability

This overlay is especially useful for:

- physical product businesses
- import-sensitive expansions
- inventory-heavy businesses
- product brands with external manufacturing
- hybrid studio-to-product businesses moving toward repeatable production

Use it alongside core modules such as:

- M09 Costing, Pricing, And Unit Economics
- M10 Operations, Delivery, And Supply System
- M17 Financial Planning And Capital Allocation
- O07 Expansion / New Category Smoke Test

---

## 3. When Not To Use

Do not use this overlay when:

- the business has no meaningful sourcing choice or dependency
- the offer is purely digital or service-only
- the issue is only minor procurement housekeeping with no strategic impact

This overlay may be deferred temporarily if:

- the product or material requirement is still too vague
- the user cannot yet define what is being sourced, in what quantity, or for which channel

---

## 4. Prerequisites

Preferred prerequisites:

- M08 Offer Architecture
- M09 Costing, Pricing, And Unit Economics
- M10 Operations, Delivery, And Supply System

Helpful prerequisites where available:

- M17 Financial Planning And Capital Allocation
- O07 Expansion / New Category Smoke Test

Minimum viable prerequisites:

- a clear description of what must be sourced
- a rough estimate of expected quantity or volume logic
- a rough understanding of why sourcing choice matters

If those do not exist, the agent should clarify them before making strong sourcing recommendations.

---

## 5. Inputs

Typical inputs may include:

- product or material specification
- sourcing options under consideration
- supplier quotes or rough cost assumptions
- MOQ assumptions
- lead-time assumptions
- shipping and freight assumptions
- duty, customs, or tax assumptions
- local manufacturing assumptions
- quality requirements
- tolerance for defects, delays, or remake risk
- existing artifacts such as:
    - Offer Architecture Document
    - Pricing And Unit Economics Memo
    - Operations Playbook
    - Financial Planning Memo
    - Expansion Smoke Test Memo

---

## 6. Discovery Questions

### Required Questions

- What exactly needs to be sourced?
- Why are you evaluating multiple sourcing models?
- What sourcing options are actually on the table?
- What quantity, MOQ, or scale assumption matters here?
- What quality standard must be maintained?
- What lead time is acceptable?
- What happens if supply is delayed, inconsistent, or defective?
- How much cash can the business realistically tie up?

### Useful Questions

- Is this for pilot volume, launch volume, or scaled volume?
- Does this need local customization, finishing, or assembly after sourcing?
- How easy is it to switch suppliers later?
- Is there single-supplier dependence risk?
- How much design or material IP risk matters?
- Does the supplier affect packaging, installation, warranty, or after-sales complexity?

### Import-Sensitive Questions

Use where relevant:

- What freight, customs, duty, clearance, or documentation complexity exists?
- What landed-cost uncertainty exists?
- What happens if exchange rates move materially?
- What happens if the shipment is delayed or partially unusable?
- Can small test quantities be imported before larger commitments?

### Local-Sourcing Questions

Use where relevant:

- Can local job work or manufacturing meet quality consistently?
- What tooling, training, or setup burden would local sourcing require?
- Would local sourcing improve responsiveness enough to justify any unit-cost increase?
- Does local sourcing reduce MOQ or working-capital pressure?

---

## 7. Research Requirements

### Required Research

At minimum, the overlay should gather enough evidence to judge:

- directional landed cost
- directional lead time
- supplier reliability risk
- quality-control risk
- working-capital impact

Required research may include:

- supplier-model comparison
- rough landed-cost review
- MOQ and lead-time comparison
- local versus import feasibility review
- defect, rework, and dependency-risk review

If the user explicitly requests research, or the sourcing market is unfamiliar, external research should be performed.

### Optional Research

Where useful, deeper research may include:

- supplier shortlist comparison
- logistics-partner review
- tariff or customs workflow review
- small-batch test strategy review
- dual-sourcing feasibility review

### Source Priority

Prefer:

1. real supplier terms and quotes
2. real operating and quality requirements
3. actual freight, duty, and timing constraints
4. prior business experience with similar sourcing
5. external sourcing benchmarks or market guidance

---

## 8. Analysis Tasks

This overlay should perform the following analysis:

1. Define the sourcing decision clearly.
2. Identify the practical sourcing options.
3. Compare options on landed cost, MOQ, and working-capital burden.
4. Compare options on lead time, flexibility, and reorder responsiveness.
5. Compare options on quality control, defect risk, and remake exposure.
6. Assess supplier concentration and dependency risk.
7. Assess how sourcing choice affects operations, packaging, installation, warranty, or after-sales support.
8. Assess whether the proposed sourcing model fits the current business stage.
9. Determine whether the business should:
    - source locally
    - import
    - use a hybrid model
    - test with small batches first
    - defer the sourcing-heavy move
10. Highlight what remains assumed versus validated.

---

## 9. Evidence Requirements

Use the standard evidence model from the Business OS gate philosophy.

### Exploratory Output Threshold

An exploratory sourcing evaluation memo may be created with:

- E1 Weak Signal

if the output is clearly labeled exploratory.

### Recommendation Threshold

A meaningful recommendation about sourcing model or supplier path should usually require at least:

- E2 Directional Evidence

Examples:

- rough supplier comparison
- rough landed-cost logic
- rough MOQ and lead-time understanding
- rough quality and dependency assessment

### Strong Recommendation Threshold

To recommend large import commitments, single-supplier dependence, or aggressive stock build, prefer:

- E3 Strong Working Evidence

Examples:

- real supplier quotes and terms
- real sample or pilot results
- real defect and lead-time patterns
- real landed-cost and payment data

### High-Risk Cases

Use extra caution when:

- MOQ is large relative to business size
- quality inconsistency could materially damage the brand
- imports create large cash or timing exposure
- supplier switching is difficult
- the business has little buffer for delays or defects

---

## 10. Outputs

### Primary Output

- `Import / Sourcing Evaluation Memo`

This should include:

- sourcing decision summary
- options compared
- cost and landed-cost implications
- lead-time and flexibility implications
- quality and dependency risks
- working-capital implications
- recommendation

### Optional Supporting Outputs

- supplier comparison table
- landed-cost note
- MOQ and batch-strategy note
- sourcing-risk summary

### Output Depth

- exploratory if supplier evidence is thin
- decision-ready if sourcing logic is directional
- high-confidence if real supplier and pilot evidence exists

---

## 11. Decision Gates

### Proceed

Use when:

- the sourcing path is coherent
- quality risk is manageable
- lead times are acceptable
- cash burden is manageable
- supplier dependence is not dangerously concentrated

### Proceed With Warnings

Use when:

- the sourcing model is directionally workable
- but quality, timing, or cash assumptions still need validation

Warnings should explicitly mention:

- what could break first
- what is still assumed
- what test or sample step should happen next

### Conditional Proceed

Use when:

- the sourcing path looks viable
- but only with smaller batches, pilot sampling, dual sourcing, or phased commitments

Typical conditions:

- import only small trial quantities first
- keep local backup sourcing
- delay larger MOQs until sell-through is proven
- sample across multiple suppliers before committing

### Defer

Use when:

- the sourcing decision is premature because the product or expansion itself is still too unclear

### Block / Validate First

Use when:

- landed cost is unclear enough to threaten viability
- MOQ or payment terms create unacceptable cash risk
- quality risk is high and untested
- the business wants to commit before sampling, validation, or supplier comparison

---

## 12. Red Flags

- the cheapest quote is treated as the best decision
- landed cost is confused with ex-factory cost
- MOQ pressure is ignored
- supplier dependence is treated as harmless
- quality control is assumed rather than tested
- delays, customs issues, or freight variability are ignored
- the business has no plan for defects, rework, or unusable stock
- sourcing risk is separated from brand and customer experience impact

---

## 13. Handoff / Next Routing

Typical next modules:

- M09 Costing, Pricing, And Unit Economics
- M10 Operations, Delivery, And Supply System
- M17 Financial Planning And Capital Allocation
- O07 Expansion / New Category Smoke Test
- O14 Experimentation And Pilot Design

Routing logic:

- if the main uncertainty is unit margin or landed-cost viability -> route to M09
- if the main uncertainty is production flow, QC, or fulfillment impact -> route to M10
- if the main uncertainty is cash burden or MOQ risk -> route to M17
- if the sourcing choice is part of a broader adjacency decision -> route to O07
- if the safest path is a sample or small-batch pilot -> route to O14

Optional routes:

- M12 Route-To-Market And Sales Architecture if sourcing choice constrains channels or launch timing
- M14 Launch And Execution Planning if the sourcing decision is now launch-critical

---

## 14. Artifact Update Rules

This overlay should update:

- Assumption Log
    - add all cost, MOQ, timing, quality, and supplier-risk assumptions
- Evidence Tracker
    - record supplier, landed-cost, lead-time, and sample evidence
- Decision Gate Tracker
    - record whether the sourcing path is workable, conditional, deferred, or blocked
- Open Questions Register
    - record unresolved questions such as missing supplier terms, unclear landed cost, or untested QC

---

## 15. Skill / Agent Notes

- This overlay is a strong candidate for a future sourcing-evaluation or import-readiness skill.
- The overlay should stay commercial and operational, not turn into abstract supply-chain jargon.
- The main job is to connect sourcing choice to economics, cash, risk, and customer impact.
- If hard sourcing data is missing, the overlay should still produce a structured comparison with explicit assumptions and recommended validation steps.
- For early-stage businesses, the overlay should usually prefer reversible sourcing moves over large irreversible commitments.

---

## 16. Suggested Artifact Structure

The `Import / Sourcing Evaluation Memo` generated from this overlay should typically contain:

1. sourcing decision summary
2. sourcing options compared
3. cost and landed-cost view
4. MOQ and working-capital implications
5. lead-time and flexibility implications
6. quality and dependency risks
7. evidence used
8. assumptions still open
9. recommendation
10. next recommended module
