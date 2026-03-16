# M17 Financial Planning And Capital Allocation

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

- how much cash the business really needs
- where cash gets tied up
- what financial strain the current plan creates
- which investments or commitments should be prioritized first
- what downside scenarios the business must survive

Its job is to stop the business from making another common commercial mistake:

- assuming profitable ideas are automatically financeable

This module should answer:

- what the cash structure of the business looks like
- where working-capital pressure comes from
- what the main capital allocation priorities are
- what commitments are too risky right now
- what should be phased, delayed, or funded differently

---

## 2. When To Use

Use this module when:

- the user is preparing a launch that requires upfront spend
- the business carries inventory, long lead times, receivables, or deposits
- the business is considering distributor, wholesale, marketplace, or project-led channels
- the user is evaluating expansion, import sourcing, or new category risk
- the business is profitable on paper but may still face cash strain
- the user is deciding where limited capital should go first

This module is especially relevant for:

- physical product businesses
- inventory-heavy businesses
- import or sourcing-heavy businesses
- wholesale / distributor-led businesses
- B2B businesses with long payment cycles
- hybrid businesses with both custom and standardized work

It can also matter for:

- SaaS businesses with heavy acquisition or onboarding cost
- service businesses with hiring, utilization, or receivable risk

---

## 3. When Not To Use

Do not use this module as the first deep step if:

- the offer is still undefined
- pricing and cost logic are still too vague
- the user is only doing early-stage brainstorming

This module may be deferred temporarily if:

- M08 Offer Architecture has not defined what is being sold
- M09 Costing, Pricing, And Unit Economics has not yet provided a believable unit view
- the current business model is still changing too quickly to model cash meaningfully

---

## 4. Prerequisites

Preferred prerequisites:

- M08 Offer Architecture
- M09 Costing, Pricing, And Unit Economics
- M10 Operations, Delivery, And Supply System

Helpful prerequisites where available:

- M12 Route-To-Market And Sales Architecture
- O06 Import / Sourcing Evaluation
- O14 Experimentation And Pilot Design

Minimum viable prerequisites:

- a defined or mostly defined offer
- a rough cost structure
- a rough view of how and when cash moves through the business

If those do not exist, the agent should slow down and clarify the cash model before making strong financial recommendations.

---

## 5. Inputs

Typical inputs may include:

- offer structure and launch scope
- pricing and margin assumptions
- production or delivery lead times
- payment terms
- supplier terms
- receivable cycles
- inventory assumptions
- hiring or staffing plans
- planned marketing spend
- planned capex or setup costs
- existing cash reserves or funding constraints
- prior sales and payment timing patterns
- existing artifacts such as:
    - Offer Architecture Document
    - Pricing And Unit Economics Memo
    - Operations Playbook
    - Route-To-Market Strategy Memo
    - Expansion Smoke Test Memo

---

## 6. Discovery Questions

### Required Questions

- How much cash would this business, launch, or expansion require before it starts generating reliable inflow?
- Where does cash get tied up?
- What are the biggest upfront cash commitments?
- What payment timing applies for customers, vendors, and partners?
- Are you carrying inventory, receivables, long production cycles, or long installation cycles?
- What happens if sales arrive slower than expected?
- What happens if delivery costs rise or delays occur?
- What cash or capital constraints already exist?

### Useful Questions

- What must be funded immediately versus later?
- Which spend creates the strongest near-term business value?
- What part of the plan is fixed commitment versus flexible spend?
- Are deposits, milestone billing, subscriptions, or retainers possible?
- Could the business phase scope to reduce capital risk?
- Are you financing growth with founder cash, operating cash flow, credit terms, or outside funding?
- What commitments would be hardest to reverse if demand is weaker than expected?

### Channel And Working-Capital Questions

Use where relevant:

- Do distributors, retailers, or B2B buyers pay on delay?
- Do marketplaces hold payouts or create return risk?
- Does one channel require more inventory or sampling than another?
- Could fast growth create a cash crunch even if demand is strong?

### Expansion And Import Questions

Use where relevant:

- What MOQ, import, tooling, sampling, or freight commitments are required?
- What customs, duty, or landed-cost uncertainty exists?
- How much stock could remain unsold if demand is weaker than expected?
- Would local sourcing reduce cash strain even if unit margin changes?

---

## 7. Research Requirements

### Required Research

At minimum, the module should gather enough evidence to judge:

- major cash outflows
- cash conversion timing
- working-capital strain
- obvious financial fragility

Required research may include:

- internal cash-flow pattern review
- payment-term review
- inventory or procurement cycle review
- rough capital-needs modeling
- channel cash-timing review

If the user explicitly requests research, or the business depends on unfamiliar channel or sourcing models, external research should be performed.

### Optional Research

Where useful, deeper research may include:

- landed-cost timing review
- receivable and credit-term benchmarking
- scenario modeling
- deposit / pre-order / milestone structure benchmarking
- inventory turn benchmarking
- financing-option comparison

### Source Priority

Prefer:

1. real internal cash and payment data
2. real operating and procurement constraints
3. actual channel terms or partner terms
4. realistic scenario assumptions grounded in prior business performance
5. external benchmarks and secondary research

---

## 8. Analysis Tasks

This module should perform the following analysis tasks:

1. Define the basic cash structure of the business.
2. Identify the major upfront, ongoing, and delayed cash flows.
3. Distinguish profit logic from cash timing.
4. Identify where working capital is tied up.
5. Assess the financial effect of inventory, receivables, lead times, and channel terms.
6. Identify the minimum capital needed to operate the current plan responsibly.
7. Rank capital allocation priorities by business necessity and expected leverage.
8. Assess whether the plan should be phased to reduce cash risk.
9. Stress-test downside scenarios such as slower sales, higher cost, delayed collections, or partner delays.
10. Determine whether the current financial structure is:
    - workable
    - tight but manageable
    - fragile
    - underfunded
    - overly aggressive
11. Highlight what remains assumed versus validated.

---

## 9. Evidence Requirements

Use the standard evidence model from the Business OS gate philosophy.

### Exploratory Output Threshold

An exploratory financial planning memo may be created with:

- E1 Weak Signal

if the memo is clearly labeled directional and scenario-based.

### Recommendation Threshold

A meaningful financial planning recommendation should usually require at least:

- E2 Directional Evidence

Examples:

- rough cash-flow timing
- rough payment-term understanding
- rough capital-needs estimate
- rough downside scenario logic

### Strong Recommendation Threshold

To strongly recommend inventory commitments, channel expansion, or large capital allocation decisions, prefer:

- E3 Strong Working Evidence

Examples:

- real payment-cycle data
- real procurement and lead-time data
- actual channel terms
- actual historical cash strain patterns

### High-Risk Cases

Use extra caution when:

- inventory or import commitments are large
- payout cycles are long or uncertain
- channel partners control payment timing
- the business has low cash reserves
- one failed launch could materially damage the business

---

## 10. Outputs

### Primary Output

- `Financial Planning Memo`

This should include:

- business context summary
- cash structure
- working-capital pressures
- capital allocation priorities
- financial risks
- scenario notes
- recommendation

### Optional Supporting Outputs

- cash pressure note
- capital allocation priorities table
- downside scenario note
- funding-structure decision summary

### Output Depth

- exploratory if cash assumptions are thin
- decision-ready if cash timing and major risks are directionally believable
- high-confidence if real financial history or operating data exists

---

## 11. Decision Gates

### Proceed

Use when:

- the business can support the plan without obvious cash fragility
- major commitments are sized realistically
- working-capital strain is manageable
- capital priorities are coherent

### Proceed With Warnings

Use when:

- the plan is likely workable
- but cash pressure is meaningful and must be watched closely

Warnings should explicitly mention:

- what cash assumptions are still thin
- what could create stress fastest
- what should be monitored first

### Conditional Proceed

Use when:

- the plan can work
- but only with phased scope, tighter payment terms, smaller inventory, lower upfront spend, or slower expansion

Typical conditions:

- launch smaller before carrying full inventory
- require deposits or milestone billing
- defer channel expansion with long payment cycles
- delay hiring or capex until demand strengthens

### Defer

Use when:

- financial planning is premature because pricing, scope, or operations are still too unclear

### Block / Validate First

Use when:

- large inventory, import, or partner commitments are being considered without clear cash visibility
- the plan is materially underfunded
- the downside case is unacceptable
- working-capital strain could break the business even if demand exists

---

## 12. Red Flags

- profit is being confused with cash availability
- payment timing is ignored
- inventory or procurement commitments are treated as harmless
- receivables or distributor delays are ignored
- large fixed costs are added before demand is proven
- the founder assumes growth will solve cash pressure by itself
- capital is being spread thinly across too many priorities
- no downside scenario has been considered

---

## 13. Handoff / Next Routing

Typical next modules:

- M10 Operations, Delivery, And Supply System
- M12 Route-To-Market And Sales Architecture
- M14 Launch And Execution Planning
- O06 Import / Sourcing Evaluation
- O14 Experimentation And Pilot Design

Routing logic:

- if the main uncertainty is lead times, procurement, or inventory flow -> route to M10 or O06
- if the main uncertainty is channel payment timing or partner economics -> route to M12
- if the plan should be phased to reduce risk -> route to M14
- if the safest path is a bounded test -> route to O14

Optional routes:

- M09 Costing, Pricing, And Unit Economics if pricing and margin assumptions are still weak
- O15 Organization And Team Design if staffing or founder-dependence is a major cash constraint

---

## 14. Artifact Update Rules

This module should update:

- Assumption Log
    - add all uncertain cash-flow, timing, payment-term, and capital-allocation assumptions
- Evidence Tracker
    - record the source and strength of payment, inventory, and scenario evidence
- Decision Gate Tracker
    - record whether the plan is financially workable, conditional, deferred, or blocked
- Open Questions Register
    - record unresolved questions such as missing terms, unknown cash exposure, or scenario gaps

---

## 15. Skill / Agent Notes

- This module is a strong standalone skill candidate for businesses under cash or scale pressure.
- The module should stay practical and founder-usable; avoid finance jargon that does not change a decision.
- It should emphasize cash timing, working-capital pressure, and capital sequencing, not just profit.
- If hard numbers are missing, the module should still produce scenario-based planning with explicit assumptions.
- For high-risk launches or expansions, the module should lean toward phased and reversible commitments.

---

## 16. Suggested Artifact Structure

The `Financial Planning Memo` generated from this module should typically contain:

1. business context summary
2. cash structure summary
3. working-capital pressure points
4. capital allocation priorities
5. scenario notes
6. key financial risks
7. evidence used
8. assumptions still open
9. recommendation
10. next recommended module
