# O07 Expansion / New Category Smoke Test

Status: Draft
Type: Overlay
Version: current
Owner: Business OS

Related:

- [business-os-module-spec-template.md](./business-os-module-spec-template.md)
- [business-os-module-map.md](./business-os-module-map.md)
- [business-os-decision-gate-philosophy.md](./business-os-decision-gate-philosophy.md)

---

## 1. Purpose

This module helps determine whether a business should add:

- a new category
- a new product line
- a new service line
- a new channel
- a new geography
- a major adjacency

Its job is to stop businesses from treating every attractive idea as something that should be added now.

The module should answer:

- should this be added now
- should it be tested first
- should it stay custom or limited
- should it be deferred
- should it be rejected

---

## 2. When To Use

Use this module when the user asks questions like:

- should I add this to the business
- should I launch this new category
- should I start selling through distributors
- should I expand into this new channel
- should I add wallpapers / courses / SaaS / retail / wholesale / import sourcing

Use it when:

- the core business already exists
- a launch plan exists and the user wants to add breadth
- a pivoting business wants to test a new adjacency
- a new line is being considered inside an existing business

This module is especially useful for:

- product businesses
- hybrid businesses
- studio-to-product businesses
- distributor and import-led businesses
- education and SaaS businesses considering new offer layers

---

## 3. When Not To Use

Do not use this module when:

- the user is still trying to define the first core business
- the idea under review is actually the main business itself, not an expansion
- the user mainly needs pricing or operational cleanup inside the current offer

This module may be premature if:

- the current business is still undefined
- no core offer exists yet
- the business has not launched at all and the "expansion" is just unresolved initial scoping

---

## 4. Prerequisites

Preferred prerequisites:

- M03 Business Definition
- M08 Offer Architecture
- M09 Costing, Pricing, And Unit Economics
- M10 Operations, Delivery, And Supply System
- M12 Route-To-Market And Sales Architecture
- M17 Financial Planning And Capital Allocation where capital burden matters

Minimum viable prerequisites:

- a clear description of the current business
- a clear description of the proposed addition

If those are missing, the agent should pause and clarify before evaluation.

---

## 5. Inputs

Typical inputs may include:

- current business description
- current offer structure
- current customer type
- current channel mix
- current operating capacity
- proposed new category or channel
- reason the founder wants to add it
- evidence of customer demand
- rough costing or sourcing assumptions
- examples of competitors doing something similar
- existing artifacts such as:
    - Offer Architecture Document
    - Pricing And Unit Economics Memo
    - Operations Playbook
    - Route-To-Market Strategy Memo
    - Financial Planning Memo

---

## 6. Discovery Questions

### Required Questions

- What exactly is the proposed expansion?
- Why do you want to add it now?
- Who would buy it?
- Is that the same customer as your current business, or a new one?
- What problem or opportunity does this expansion address?
- What evidence do you have that customers actually want this?
- How would it be sold?
- How would it be produced, sourced, or delivered?
- What new complexity would it add to the business?
- What would this distract from?

### Useful Questions

- Has anyone already asked you for this repeatedly?
- Is this an upsell, a cross-sell, or a completely new offer?
- Does this strengthen your brand or pull it in a different direction?
- Would this require new vendors, new staff, new software, or new logistics?
- Would this require inventory, certification, installation, customer support, or training?
- Would you test this in a limited way before rolling it out broadly?

### Capital And Risk Questions

Use where relevant:

- Does this require upfront inventory, import orders, or large sampling cost?
- What is the minimum viable test cost?
- What happens if demand is weaker than expected?
- What is the likely impact on cash flow?

### Channel Questions

Use where relevant:

- Would this be sold through the same channels as the current business?
- Does this require a different sales process?
- Would this create conflict with existing channel partners or brand positioning?

---

## 7. Research Requirements

### Required Research

At minimum, the module should gather enough evidence to judge:

- strategic fit
- customer fit
- economic plausibility
- operational plausibility

Required research may include:

- competitor and substitute review
- current customer-signal review
- rough market demand check
- rough sourcing or delivery comparison

### Optional Research

Where useful, deeper research may include:

- import cost comparison
- channel economics comparison
- customer interview or survey design
- platform or distributor suitability review
- pilot design benchmarking

### Source Priority

Prefer:

1. actual customer requests or behavior
2. current business performance data
3. competitor / alternative evidence
4. realistic operating or sourcing evidence
5. market-level secondary evidence

---

## 8. Analysis Tasks

This module should perform the following analysis:

1. Define the expansion clearly.
2. Determine whether it is:
    - core extension
    - adjacent offer
    - new business line
    - channel expansion
    - geography expansion
3. Assess strategic fit with the current business identity.
4. Assess customer fit and whether it serves the same or a new segment.
5. Assess evidence strength for actual demand.
6. Assess economic logic, including margin and capital strain.
7. Assess operational feasibility, including sourcing, delivery, support, and quality risks.
8. Assess channel fit and whether the same go-to-market system can support it.
9. Assess focus cost and distraction risk.
10. Recommend one of the following:
    - add now
    - pilot first
    - keep as custom / limited
    - defer
    - reject

---

## 9. Evidence Requirements

Use the standard evidence model from the Business OS gate philosophy.

### Exploratory Output Threshold

An exploratory smoke test memo may be created with:

- E1 Weak Signal

if the output is clearly labeled exploratory.

### Recommendation Threshold

A meaningful expansion recommendation should usually require at least:

- E2 Directional Evidence

Examples:

- repeated customer requests
- category demand signal
- competitor proof
- rough economics
- rough operating logic

### Strong Recommendation Threshold

To recommend `add now`, prefer:

- E3 Strong Working Evidence

Examples:

- real demand proof
- pilot signal
- believable economics
- feasible operations

---

## 10. Outputs

### Primary Output

- `Expansion Smoke Test Memo`

This should include:

- current business context
- proposed expansion
- strategic fit
- customer fit
- demand evidence
- economics
- operational implications
- channel implications
- focus cost
- recommendation

### Optional Supporting Outputs

- pilot recommendation note
- sourcing comparison note
- channel comparison note
- expansion decision summary

### Output Depth

- exploratory if evidence is weak
- decision-ready if evidence is directional or stronger

---

## 11. Decision Gates

### Proceed

Use when:

- strategic fit is strong
- customer fit is clear
- economics are believable
- operational feasibility is believable
- focus cost is manageable

This outcome should usually still recommend a phased rollout unless evidence is already strong.

### Proceed With Warnings

Use when:

- the idea is directionally good
- but some key evidence remains thin

Warnings should explicitly mention:

- what is still assumed
- what could break
- what needs testing next

### Conditional Proceed

Use when:

- the expansion looks promising
- but should only move forward as a bounded pilot, limited offer, or custom/B2B test

This is the default positive outcome for many expansions.

### Defer

Use when:

- the idea may be good later
- but timing, capacity, capital, or focus is wrong now

### Block / Validate First

Use when:

- strategic fit is weak
- customer demand is speculative
- economics are not believable
- the move creates too much operational strain
- the current business is not stable enough to absorb the complexity

---

## 12. Red Flags

- the founder wants to add it because it feels exciting, not because evidence exists
- the expansion serves a very different customer but no new GTM logic exists
- the expansion requires new operations the business does not understand
- margins are assumed but not modeled
- import or inventory burden is ignored
- support or service complexity is ignored
- the core business is still unstable
- the expansion is actually a distraction from fixing the main business

---

## 13. Handoff / Next Routing

Typical next modules:

- M09 Costing, Pricing, And Unit Economics
- M10 Operations, Delivery, And Supply System
- M12 Route-To-Market And Sales Architecture
- M17 Financial Planning And Capital Allocation
- O06 Import / Sourcing Evaluation
- O14 Experimentation And Pilot Design

Routing logic:

- if the main uncertainty is profitability -> route to M09
- if the main uncertainty is delivery or sourcing -> route to M10 or O06
- if the main uncertainty is how to sell it -> route to M12
- if the main uncertainty is capital burden -> route to M17
- if the recommendation is pilot-first -> route to O14

---

## 14. Artifact Update Rules

This module should update:

- Assumption Log
    - add all demand, cost, and capability assumptions
- Evidence Tracker
    - record what proof exists for customer demand, economics, and feasibility
- Decision Gate Tracker
    - record the expansion outcome and conditions for revisiting it
- Open Questions Register
    - record what must be answered before the recommendation can become stronger

---

## 15. Skill / Agent Notes

- This module is a strong standalone skill candidate because users often ask this directly.
- The workflow should usually end with a recommendation class such as:
    - add now
    - pilot first
    - keep limited
    - defer
    - reject
- For high-risk expansions, the agent should prefer a pilot path over a full recommendation.
- If the expansion touches imports, distributors, or large cash commitments, the agent should strongly encourage routing into finance and sourcing modules.
- This module should stay concise and decision-focused rather than turning into a giant strategy document.

---

## 16. Suggested Artifact Structure

The `Expansion Smoke Test Memo` generated from this module should typically contain:

1. current business summary
2. proposed expansion summary
3. why it is being considered
4. strategic fit assessment
5. customer fit assessment
6. evidence of demand
7. economic implications
8. operational implications
9. channel implications
10. focus and complexity cost
11. recommendation class
12. open assumptions
13. next recommended module or pilot step
