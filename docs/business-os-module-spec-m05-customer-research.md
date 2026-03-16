# M05 Customer Research

Status: Draft
Type: Core
Version: current
Owner: Business OS

Related:

- [business-os-module-spec-template.md](./business-os-module-spec-template.md)
- [business-os-module-map.md](./business-os-module-map.md)
- [business-os-decision-gate-philosophy.md](./business-os-decision-gate-philosophy.md)

---

## 1. Purpose

This module helps determine:

- who the business should prioritize as the first or primary customer
- what that customer actually wants or values
- what triggers them to buy
- how they evaluate options
- what pains, goals, and buying constraints matter most

Its job is to reduce one of the most dangerous early-stage business mistakes:

- building for a vague, imagined, or overly broad customer

---

## 2. When To Use

Use this module when:

- the user is starting a business from scratch
- the user is validating an idea
- the user is pivoting and may need a new target customer
- the user wants to improve sales or marketing
- the user wants clearer positioning
- the user wants to test whether a new category serves the same or a different buyer

This module is relevant across:

- product businesses
- service businesses
- SaaS / digital product businesses
- education / coaching businesses
- B2B businesses
- local service businesses

---

## 3. When Not To Use

Do not use this module as the first deep step if:

- the user cannot yet explain what kind of business they are trying to build
- the request is purely about legal setup or documentation formatting
- the user only wants a narrow operational fix unrelated to customer selection, demand, or buying behavior

This module may be deferred temporarily if:

- the business context is still so vague that Business Definition must come first
- the problem / opportunity framing is too unclear to know what kind of customer to study

---

## 4. Prerequisites

Preferred prerequisites:

- M03 Business Definition
- M04 Problem / Opportunity Definition

Minimum viable prerequisites:

- a rough description of what the business sells or wants to sell
- a rough guess about who might buy

If those do not exist, the agent should ask short foundational questions before proceeding.

---

## 5. Inputs

Typical inputs may include:

- founder description of the business idea
- existing notes about target customer
- prior sales experience
- anecdotal founder observations
- early customer conversations
- competitor examples
- existing audience or client list if the business already exists
- prior artifacts such as:
    - Founder Brief
    - Business Definition Note
    - Opportunity / Problem Memo
    - Current State / Pivot Diagnosis Memo

---

## 6. Discovery Questions

### Required Questions

- What exactly are you selling, or planning to sell?
- Who do you currently think the buyer is?
- Is this buyer an end customer, a business, a professional intermediary, or some mix?
- What problem, need, aspiration, or job do you believe this customer has?
- What makes you think this customer is the right one?
- Are there multiple possible customer segments? If yes, which one seems most promising first?
- How does this customer currently solve the problem today?
- What would make this customer choose your offer instead of current alternatives?

### Useful Questions

- When does this customer typically decide to buy?
- What triggers urgency for them?
- What are their biggest frustrations with existing alternatives?
- What budget or willingness-to-pay signal do you have?
- Are they buying for themselves, their team, their client, or their family?
- What objections or anxieties might block purchase?
- Is the decision emotional, practical, professional, or mixed?
- Where does this customer discover options today?
- What kind of proof would make them trust a new business?

### Existing-Business Questions

Use when the business already exists:

- Which customer types have already bought from you?
- Which customer types are easiest to convert?
- Which customer types are most profitable?
- Which customer types are hardest to serve?
- Do your best customers differ from your most frequent leads?

---

## 7. Research Requirements

### Required Research

At minimum, the agent should gather enough evidence to avoid purely imagined customer definitions.

Required research may include:

- competitor and alternative review
- observed customer language from websites, reviews, communities, or marketplaces
- demand signals relevant to the category
- internal customer evidence if the business already exists

If the user explicitly requests external research, or the business category is uncertain, external research should be performed.

### Optional Research

Where appropriate, deeper research may include:

- customer interview planning
- review mining
- community observation
- keyword or search-intent observation
- social comment analysis
- forum and discussion review
- demographic or category reports

### Source Priority

Prefer:

1. direct user/customer evidence
2. primary buyer-language sources such as reviews, forums, or interviews
3. competitor and substitute offerings
4. market reports and secondary summaries

---

## 8. Analysis Tasks

This module should perform the following analysis tasks:

1. Identify all plausible customer segments.
2. Distinguish the buyer from the user where relevant.
3. Compare segments by urgency, willingness to pay, accessibility, and strategic fit.
4. Identify the likely primary segment for the current stage.
5. Describe the segment's jobs, pains, gains, and buying triggers.
6. Identify the current alternatives the segment uses.
7. Surface likely purchase objections and trust requirements.
8. Determine whether the business is targeting too many segments at once.
9. Highlight what remains assumed versus validated.

---

## 9. Evidence Requirements

Use the standard evidence model from the Business OS gate philosophy.

### Exploratory Output Threshold

An exploratory customer research brief may be created with:

- E0 No Evidence
- E1 Weak Signal

but it must be labeled as exploratory and assumption-heavy.

### Recommendation Threshold

A meaningful recommendation about which customer to prioritize should usually require at least:

- E2 Directional Evidence

Examples of acceptable directional evidence:

- several founder observations plus external buyer-language review
- customer conversations
- existing sales patterns
- repeated demand signals across competitors or communities

### Strong Recommendation Threshold

To strongly recommend a primary segment, prefer:

- E3 Strong Working Evidence

Examples:

- repeated customer patterns
- actual buyer behavior
- sales evidence
- pilot learnings

---

## 10. Outputs

### Primary Output

- `Customer Research Brief`

This should include:

- candidate segments
- recommended priority segment
- jobs, pains, gains
- triggers and objections
- trust requirements
- alternatives
- open assumptions

### Optional Supporting Outputs

- interview question draft
- segment comparison table
- ICP draft
- customer-priority decision note

### Output Depth

- exploratory if evidence is weak
- strategic if evidence is directional
- high-confidence if evidence is strong and real behavior exists

---

## 11. Decision Gates

### Proceed

Use when:

- a clear primary segment is identified
- buying context is coherent
- evidence is at least directional

### Proceed With Warnings

Use when:

- a likely segment exists
- but direct evidence is still limited

Warnings should mention:

- what is still assumed
- what should be validated next

### Conditional Proceed

Use when:

- multiple plausible segments exist
- but a small pilot, interview set, or focused test could resolve the uncertainty

Typical condition:

- choose one segment for the next test rather than serving all segments at once

### Defer

Use when:

- customer analysis is premature because the business definition is still too vague

### Block / Validate First

Use when:

- the customer is defined so broadly that no meaningful prioritization is possible
- the user is trying to finalize positioning or pricing without any real customer signal

---

## 12. Red Flags

- "everyone" is treated as the target customer
- multiple customer types are named but no prioritization exists
- the buyer and the user are confused
- willingness to pay is assumed without any evidence
- the business is trying to solve very different problems for different segments at once
- segment choice is based only on founder preference, not observed demand or fit

---

## 13. Handoff / Next Routing

Typical next modules:

- M06 Market, Competitor, And Alternatives Research
- M07 Positioning And Value Proposition
- M08 Offer Architecture

Routing logic:

- if the main uncertainty is category structure or competitor behavior -> route to M06
- if the main uncertainty is how to frame the business for the chosen customer -> route to M07
- if the main uncertainty is what exactly to sell to the customer -> route to M08

Optional routes:

- M12 Route-To-Market And Sales Architecture if buying behavior and channel choice need immediate attention
- O14 Experimentation And Pilot Design Overlay if the segment choice needs testing

---

## 14. Artifact Update Rules

This module should update:

- Assumption Log
    - add all customer assumptions not yet validated
- Evidence Tracker
    - record customer evidence source and quality
- Decision Gate Tracker
    - record whether customer priority is clear, conditional, or blocked
- Open Questions Register
    - record unresolved questions such as segment choice, buying trigger uncertainty, or willingness-to-pay gaps

---

## 15. Skill / Agent Notes

- This module is a strong candidate for both a standalone skill and a router-invoked component.
- The workflow should usually pause after discovery if the user has provided very little context.
- If external research volume is high, subagent-style research or a dedicated research skill may be useful.
- The module should avoid overproducing persona fluff; it should stay focused on decision-useful customer insight.
- For advanced users, the module can move faster and focus on prioritization rather than basic explanation.

---

## 16. Suggested Artifact Structure

The `Customer Research Brief` generated from this module should typically contain:

1. business context summary
2. candidate customer segments
3. recommended priority segment
4. buyer vs user distinction where relevant
5. jobs, pains, gains
6. buying triggers
7. objections and anxieties
8. alternatives used today
9. trust and proof requirements
10. evidence used
11. assumptions still open
12. recommendation for the next module
