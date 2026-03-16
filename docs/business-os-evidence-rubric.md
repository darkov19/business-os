# Business OS Evidence Rubric

Status: Implementation document
Purpose: Define how the Business OS should evaluate evidence quality, confidence, and readiness so modules and artifacts use a consistent standard when making recommendations or passing decision gates.

Related:

- [business-os-decision-gate-philosophy.md](./business-os-decision-gate-philosophy.md)
- [business-os-module-spec-template.md](./business-os-module-spec-template.md)
- [business-os-artifact-templates.md](./business-os-artifact-templates.md)

---

## 1. Why This Exists

The Business OS should not treat all inputs as equally trustworthy.

Founders often have:

- intuitions
- assumptions
- anecdotes
- partial research
- real evidence

Without a shared evidence rubric, the system will:

- overstate weak ideas
- under-label assumptions
- produce inconsistent confidence levels across modules
- apply decision gates unevenly

This rubric standardizes how evidence should be judged.

---

## 2. Core Principle

The Business OS should separate:

- facts
- assumptions
- weak signals
- directional evidence
- validated evidence

The goal is not to eliminate uncertainty.

The goal is to make uncertainty visible and proportionate.

---

## 3. Evidence Categories

The OS should classify evidence into these broad categories.

### 3.1 User-Provided Facts

Examples:

- actual past sales
- current channel mix
- known lead times
- current supplier terms
- real customer list

These are high-value inputs, but still require caution if they are incomplete or outdated.

### 3.2 Founder Assumptions

Examples:

- I think designers will like this
- I believe this can sell at this price
- I feel this category will grow

These are useful starting points, but not evidence.

### 3.3 Observed Signals

Examples:

- competitor activity
- review trends
- user complaints in forums
- repeated social comments
- repeated category patterns

These are directional, but not always proof for the user's exact business.

### 3.4 Direct Customer Evidence

Examples:

- interviews
- inquiries
- actual objections
- pre-orders
- usage feedback
- retention behavior

This is among the most valuable evidence categories.

### 3.5 Operating Evidence

Examples:

- measured conversion
- repeat purchase
- churn rate
- fulfillment failure rate
- real margins
- service completion rate

This is crucial for mature decisions.

### 3.6 External Research Evidence

Examples:

- credible market reports
- official documentation
- primary industry sources
- reliable public benchmarks

This helps contextualize decisions, but should not replace customer-specific evidence.

---

## 4. Evidence Levels

The OS should use the following evidence levels consistently.

### E0. No Evidence

Definition:

- pure intuition
- no supporting data or observation

Examples:

- I just have a feeling this will work
- we have not looked at customers, competitors, or costs

Use:

- exploratory thinking only

### E1. Weak Signal

Definition:

- limited anecdotal or indirect support

Examples:

- a few informal founder observations
- one or two customer comments
- some competitor existence with no deeper analysis

Use:

- exploratory outputs
- early hypothesis framing

### E2. Directional Evidence

Definition:

- multiple signs point in the same direction, but proof is still incomplete

Examples:

- several customer conversations
- review mining plus competitor review
- rough cost model
- repeated demand signal

Use:

- strategy drafting
- early prioritization
- conditional recommendations

### E3. Strong Working Evidence

Definition:

- enough real-world signal exists to support a practical recommendation

Examples:

- multiple strong customer patterns
- pilot outcomes
- believable economics
- operating feasibility demonstrated
- early conversion or repeat signal

Use:

- strong recommendations
- phased launches
- pilot expansion

### E4. Validated Operating Evidence

Definition:

- the business has real performance proof in the area under review

Examples:

- live sales data
- repeat behavior data
- real retention metrics
- actual delivered margin
- proven delivery reliability

Use:

- high-confidence scaling or optimization decisions

---

## 5. Evidence Strength Dimensions

The strength of evidence should not be judged only by quantity.

Each major evidence set should be assessed across these dimensions.

### 5.1 Relevance

Questions:

- Does this evidence relate directly to the user's business?
- Is it about the same customer, channel, or offer?

### 5.2 Specificity

Questions:

- Is the evidence specific or generic?
- Does it actually reduce ambiguity for the decision at hand?

### 5.3 Freshness

Questions:

- Is the evidence current enough to trust?
- Could the conditions have changed?

### 5.4 Source Quality

Questions:

- Is the source direct, primary, and credible?
- Is it hearsay, marketing copy, or unverified opinion?

### 5.5 Consistency

Questions:

- Do multiple sources point in the same direction?
- Or is the evidence fragmented and contradictory?

### 5.6 Behavioral Weight

Questions:

- Is this what people said, or what they actually did?

Behavioral evidence should usually be weighted more heavily than stated preference.

---

## 6. Evidence Hierarchy

When evidence conflicts, the OS should generally weight sources in this order:

1. real operating behavior
2. direct customer behavior or commitments
3. direct customer interviews and objections
4. internal business data
5. observed market signals
6. competitor evidence
7. secondary reports and benchmarks
8. founder belief

This hierarchy is a default, not an absolute rule.

Context may shift weighting.

---

## 7. Confidence Labels

Artifacts and module outputs should use confidence labels derived from evidence quality.

### Low Confidence

Use when:

- evidence is mostly E0-E1

Meaning:

- output is exploratory
- assumptions are high
- no major recommendation should be treated as stable

### Moderate Confidence

Use when:

- evidence is mostly E2

Meaning:

- output is directionally useful
- recommendations may be reasonable but should still be tested

### High Confidence

Use when:

- evidence is mostly E3-E4

Meaning:

- recommendation is well supported for the current stage

---

## 8. Evidence By Decision Type

Different decisions need different evidence thresholds.

### 8.1 Customer Priority

Minimum useful threshold:

- E2

Preferred strong threshold:

- E3

### 8.2 Positioning Choice

Minimum useful threshold:

- E2

Preferred strong threshold:

- E3

### 8.3 Pricing Recommendation

Minimum useful threshold:

- E2 with rough cost structure

Preferred strong threshold:

- E3 with real operating or customer response signal

### 8.4 Channel Recommendation

Minimum useful threshold:

- E2 with customer and economic logic

Preferred strong threshold:

- E3 with pilot or live performance signal

### 8.5 Expansion Decision

Minimum useful threshold:

- E2 for pilot recommendation

Preferred strong threshold:

- E3 for add-now recommendation

### 8.6 Scale Recommendation

Minimum useful threshold:

- E3

Preferred strong threshold:

- E4

---

## 9. Module Writing Rules

Every module spec should explicitly define:

- the minimum evidence threshold for exploratory output
- the minimum threshold for recommendation
- what would count as strong evidence in that module
- what assumptions must be logged if evidence is weak

This keeps module behavior consistent with the gate system.

---

## 10. Artifact Writing Rules

Every major artifact should include:

- the evidence used
- the evidence level
- any major assumptions that weaken confidence
- an implicit or explicit confidence label

Where useful, include a short line such as:

- Confidence: Low / Moderate / High

---

## 11. Red Flags In Evidence Use

The OS should slow down when:

- the founder treats belief as proof
- competitor presence is treated as customer validation
- one anecdote is treated as a market trend
- market reports are used to skip real customer understanding
- pricing is set without cost evidence
- expansion is justified without demand or capability evidence
- support assumptions are made without post-sale evidence

---

## 12. Suggested Evidence Scoring Method

Where helpful, agents may use a lightweight scoring model.

Example dimensions:

- relevance: 1-3
- specificity: 1-3
- source quality: 1-3
- consistency: 1-3
- behavioral weight: 1-3

This can help compare multiple evidence sources, but should not replace judgment.

---

## 13. Chitr Example

For Chitr by Aalekh:

- existing Studio Aalekh portfolio is strong evidence of material capability
- founder belief that a product pivot can work is not enough on its own
- repeated client interest in related categories would be directional evidence
- successful test sales of standardized Chitr pieces would become strong working evidence
- repeat product sales and stable margins would become validated operating evidence

This shows how the same business can have different evidence levels in different areas.

---

## 14. Recommended Next Step

After the evidence rubric, the best next implementation document is:

- `business-os-question-bank.md`

That will let the router and module workflows ask more consistent questions across intents and business types.
