# Business OS Decision Gate Philosophy

Status: Revised draft
Purpose: Define how the Business OS should apply judgment in version 2, including the added areas of finance, retention, experimentation, SaaS, and local-service logic.

Related:

- [business-os-decision-gate-philosophy-v1.md](./deprecated/business-os-decision-gate-philosophy-v1.md)
- [business-os-module-map.md](./business-os-module-map.md)

---

## 1. Core Principle

The OS should help the user move forward, but it should not hide weak evidence, financial strain, or operational fragility behind polished outputs.

Version 2 keeps the same five gate outcomes:

1. Proceed
2. Proceed With Warnings
3. Conditional Proceed
4. Defer
5. Block / Validate First

---

## 2. What The Current System Adds

Compared with v1, decision gates should now more explicitly judge:

- working-capital pressure
- cash flow strain
- retention and support readiness
- experiment quality
- software / platform dependencies
- local service execution burden

---

## 3. Core Gate Criteria

Every major decision should still be judged across:

1. strategic fit
2. customer fit
3. evidence strength
4. economic logic
5. operational feasibility
6. channel feasibility
7. focus cost

Version 2 adds two more criteria where relevant:

8. financial resilience
9. post-sale sustainability

### Financial Resilience

Questions:

- can the business support this in cash terms, not only margin terms
- does this create working-capital strain
- does it require funding the business does not have

### Post-Sale Sustainability

Questions:

- can the business support users after purchase
- will support, onboarding, or service recovery break under this choice
- is churn, complaint, or reputation risk being ignored

---

## 4. Evidence Levels

The OS keeps the same evidence model:

- E0 No Evidence
- E1 Weak Signal
- E2 Directional Evidence
- E3 Strong Working Evidence
- E4 Validated Operating Evidence

Version 2 should also pay more attention to whether evidence is:

- customer-reported
- market-inferred
- pilot-observed
- financially modeled
- operationally measured

---

## 5. Gate Rules

### Rule 1: Pricing Before Channels

Do not recommend channel expansion without believable pricing and margin logic.

### Rule 2: Capital Before Inventory Or Imports

Do not recommend inventory-heavy or import-heavy moves until working-capital strain is understood.

### Rule 3: Customer Before Positioning

Do not finalize positioning if target-customer logic is still vague.

### Rule 4: Repeatability Before Scale

Do not recommend scale if the offer cannot be delivered consistently.

### Rule 5: Proof Before Paid Growth

Do not recommend strong paid acquisition before offer, message, and conversion clarity exist.

### Rule 6: Pilot Before Expansion

When uncertainty is material, prefer bounded pilots over full expansion.

### Rule 7: Support Before Retention Claims

Do not recommend aggressive retention goals or repeat-purchase strategies if support and post-sale experience are weak.

### Rule 8: Activation Before SaaS Scale

Do not recommend scaling SaaS / AI acquisition if onboarding and activation are not working.

### Rule 9: Service Recovery Before Local Scale

Do not recommend local service expansion if complaint handling, scheduling, and recovery logic are weak.

### Rule 10: Focus Before Complexity

If a move adds major complexity while the core business is unstable, default toward defer or conditional pilot.

---

## 6. Stage-Aware Thresholds

### Exploration Stage

Acceptable outcomes:

- Proceed With Warnings
- Conditional Proceed

### Validation Stage

Acceptable outcomes:

- Proceed With Warnings
- Conditional Proceed
- Block if no customer evidence exists

### Launch Stage

Acceptable outcomes:

- Proceed
- Proceed With Warnings
- Block if economics, operations, or support are still speculative

### Expansion Stage

Acceptable outcomes:

- Conditional Proceed
- Defer
- Proceed only when financial and operational evidence are strong

---

## 7. Module-Level Additions

### M17 Financial Planning And Capital Allocation

Default gate expectation:

- block large inventory, import, or partner commitments if cash strain is unclear

### M18 Customer Success And Retention System

Default gate expectation:

- proceed with warnings if support exists informally
- block strong repeat / retention assumptions if onboarding and issue resolution are weak

### O10 SaaS / Digital Product Overlay

Default gate expectation:

- block scale if onboarding, activation, or reliability remain weak

### O11 Local Service Operations Overlay

Default gate expectation:

- block local expansion if scheduling, dispatch, or recovery systems are fragile

### O14 Experimentation And Pilot Design Overlay

Default gate expectation:

- a pilot should not proceed without a clear learning goal and success threshold

---

## 8. Gate Output Format

Every major gated decision should end with:

- decision under review
- gate outcome
- why it received that outcome
- evidence used
- open assumptions
- next required action

---

## 9. Chitr In The Current System

For Chitr, the gate improvements matter mainly in:

- launch cash discipline
- product expansion timing
- channel readiness
- support readiness after product launch

That makes the framework safer for real execution.

---

## 10. Recommended Next Layer

The next step after the gate philosophy is implementation:

- standard module spec template
- artifact templates
- evidence rubric
