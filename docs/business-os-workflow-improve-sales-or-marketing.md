# Business OS Workflow: Improve Sales Or Marketing

Status: Draft workflow spec
Purpose: Define the end-to-end workflow the Business OS should use when a user has an existing business or offer and wants to improve weak sales, weak marketing, poor conversion, unclear messaging, or underperforming channels.

Related:

- [business-os-framework.md](./business-os-framework.md)
- [business-os-intent-map.md](./business-os-intent-map.md)
- [business-os-module-map.md](./business-os-module-map.md)
- [business-os-question-bank.md](./business-os-question-bank.md)
- [business-os-evidence-rubric.md](./business-os-evidence-rubric.md)
- [business-os-artifact-templates.md](./business-os-artifact-templates.md)

---

## 1. Why This Workflow Exists

Many businesses do not have a product or strategy problem.

They have a growth problem.

Typical symptoms:

- traffic but low conversion
- inquiries but few sales
- unclear positioning
- weak trust signals
- wrong channels
- poor follow-up
- weak retention or repeat behavior

This workflow exists to diagnose whether the main issue is:

- customer mismatch
- positioning or messaging weakness
- offer weakness
- channel mismatch
- marketing execution weakness
- sales-process weakness
- trust or proof weakness

And then turn that diagnosis into a practical improvement plan.

---

## 2. When To Use

Use this workflow when:

- the primary intent is `Improve Sales Or Marketing`
- the business or offer already exists in some form
- the user wants growth improvement rather than full business redesign

Typical user queries:

- sales are weak
- marketing is not working
- people are interested but not buying
- help me improve conversion
- how should I market and sell this better

---

## 3. When Not To Use

Do not use this workflow when:

- the business is still only an idea
- the user is actually describing a full pivot
- the user needs a first launch plan
- the user is only evaluating a new expansion idea

In those cases, route to:

- Start From Scratch
- Pivot Existing Business
- Launch A New Product Or Service
- Evaluate Expansion / New Category

---

## 4. Workflow Goal

By the end of this workflow, the system should be able to produce:

- a Growth Diagnosis Memo
- a Route-To-Market Strategy Memo
- a Marketing Strategy Plan
- a Brand, Messaging, And Trust Framework
- a Customer Success And Retention Memo where relevant
- an Execution Activation Plan
- a prioritized growth-improvement plan

And it should be able to state:

- what the main growth bottleneck is
- what should be fixed first
- what channels or tactics are wrong, premature, or missing
- what the business should do first over the next 30-60 days

---

## 5. Primary Modules

This workflow should typically use:

1. M05 Customer Research
2. M07 Positioning And Value Proposition
3. M08 Offer Architecture
4. M11 Brand, Messaging, And Trust Assets
5. M12 Route-To-Market And Sales Architecture
6. M13 Marketing And Growth System
7. M16 Metrics, Review Loops, And Pivot Rules
8. M18 Customer Success And Retention System where repeat behavior matters

Overlay modules commonly used:

- O04 B2B Pipeline And Account Strategy
- O11 Local Service Operations Overlay
- O13 Marketplace / Platform Strategy Overlay
- O15 Organization And Team Design where follow-up ownership is unclear

Control modules used throughout:

- C01 Assumption Log
- C02 Evidence Tracker
- C03 Decision Gate Tracker
- C05 Open Questions Register

---

## 6. Workflow Stages

This workflow should run in six stages.

1. Growth Problem Framing
2. Customer And Offer Recheck
3. Message, Trust, And Positioning Review
4. Channel And Funnel Diagnosis
5. Retention And Follow-Through Review
6. Growth Recommendation And Prioritized Plan

---

## 7. Stage 1: Growth Problem Framing

### Goal

Clarify what “not working” actually means.

### Required Questions

- What exactly feels weak: traffic, inquiries, conversion, repeat purchase, sales cycle, or channel performance?
- What evidence do you have that this is the problem?
- Since when has this been happening?
- What has already been tried?

### Analysis Tasks

1. translate vague growth complaints into concrete symptoms
2. identify whether the issue is acquisition, conversion, retention, or a mixture

### Output

- growth problem framing summary

### Gate

If the problem is still too vague, ask for a more concrete description before moving on.

---

## 8. Stage 2: Customer And Offer Recheck

### Goal

Test whether the growth problem actually comes from customer or offer mismatch.

### Primary Modules

- M05 Customer Research
- M08 Offer Architecture

### Required Questions

- Who is the current target customer?
- Who is actually responding?
- What offer are they being shown first?
- Is the offer clear and relevant to the right customer?

### Analysis Tasks

1. compare intended customer with actual responder or buyer
2. assess whether the current offer is attractive enough
3. identify whether the business is trying to serve too many segments at once

### Output

- customer and offer mismatch note

### Gate

Use `Proceed With Warnings` if customer or offer clarity is still weak but diagnosable.

Use `Block / Validate First` if the business is trying to fix marketing without a coherent customer or offer.

---

## 9. Stage 3: Message, Trust, And Positioning Review

### Goal

Determine whether people are not buying because the business is unclear, unconvincing, or untrusted.

### Primary Modules

- M07 Positioning And Value Proposition
- M11 Brand, Messaging, And Trust Assets

### Required Questions

- What promise is the business currently making?
- What proof does the business currently show?
- What objections or doubts keep appearing?
- Does the messaging fit the actual customer?

### Analysis Tasks

1. review positioning strength
2. review message clarity
3. review trust gaps
4. identify whether the business sounds generic, unclear, or unbelievable

### Outputs

- Brand, Messaging, And Trust Framework
- positioning and trust diagnosis note

### Gate

Use `Conditional Proceed` if messaging can improve conversion but more customer evidence is still needed.

---

## 10. Stage 4: Channel And Funnel Diagnosis

### Goal

Assess whether the business is using the wrong channels, the wrong funnel, or the wrong sales process.

### Primary Modules

- M12 Route-To-Market And Sales Architecture
- M13 Marketing And Growth System
- M16 Metrics, Review Loops, And Pivot Rules

### Overlay Modules

- O04 B2B Pipeline And Account Strategy
- O11 Local Service Operations Overlay
- O13 Marketplace / Platform Strategy Overlay

### Required Questions

- How are people currently finding the business?
- How are they supposed to buy?
- Where in the funnel are they dropping off?
- Which channels are underperforming?
- Which channels may be premature?

### Analysis Tasks

1. identify the current funnel stages
2. identify the likely bottleneck point
3. assess whether current channels fit the offer and customer
4. assess whether the sales process is too weak, too slow, or too unclear

### Outputs

- Route-To-Market Strategy Memo
- Marketing Strategy Plan
- channel / funnel diagnosis note

### Gate

Use `Block / Validate First` if the business wants aggressive marketing spend before having a believable conversion path.

---

## 11. Stage 5: Retention And Follow-Through Review

### Goal

Check whether the growth problem is partly caused by weak post-sale behavior, poor support, or weak follow-up.

### Primary Modules

- M18 Customer Success And Retention System

### Required Questions

- What happens after someone buys or signs up?
- What happens after someone inquires but does not buy immediately?
- Are customers returning, referring, or dropping off?
- Is support or onboarding hurting trust?

### Analysis Tasks

1. assess follow-up quality
2. assess support or onboarding quality
3. assess whether retention is part of the real growth problem

### Outputs

- Customer Success And Retention Memo where relevant

### Gate

Use this stage selectively. If the business is pre-sale weak and has no real post-sale flow yet, keep this section lighter.

---

## 12. Stage 6: Growth Recommendation And Prioritized Plan

### Goal

Turn diagnosis into a practical improvement plan.

### Primary Output

- Growth Diagnosis Memo

### This should answer:

- what the real bottleneck is
- what is only a symptom
- what should be fixed first
- what should be fixed later
- what the business should stop doing

### Possible End States

#### Customer / Offer Problem

The business should fix customer focus or offer clarity before pushing harder on marketing.

#### Messaging / Trust Problem

The business should fix positioning, proof, and communication before adding more traffic.

#### Channel / Funnel Problem

The business should change route-to-market or sales-process design.

#### Retention / Support Problem

The business should improve post-sale systems before expecting stronger repeat growth.

#### Mixed Problem

The business should prioritize a staged fix order rather than trying to change everything at once.

---

## 13. Control Artifact Rules

Throughout the workflow, update:

- Assumption Log
- Evidence Tracker
- Decision Gate Tracker
- Open Questions Register

These should capture:

- what the business thinks is wrong
- what evidence supports or weakens that belief
- what still needs validation

---

## 14. Evidence Expectations

This workflow should be evidence-sensitive.

### Acceptable Pattern

- symptom framing may begin with E1
- bottleneck diagnosis should usually reach E2
- high-confidence channel or growth recommendations should prefer E3

### Not Acceptable

Do not recommend:

- paid growth
- major channel expansion
- aggressive top-of-funnel investment

if the likely problem is really:

- weak offer
- weak message
- weak trust
- weak follow-up

---

## 15. Skill / Agent Notes

- This workflow is a strong candidate for a top-level skill such as `improve-sales-or-marketing`.
- The workflow should diagnose before prescribing tactics.
- It should avoid generic growth advice.
- The final plan should be prioritized and staged, not a large list of random suggestions.

---

## 16. Recommended Next Workflow To Build

After this workflow, the next useful workflow is likely:

- `Fix Pricing, Economics, Or Capital Pressure`

That would make the Business OS stronger on the money side, which is still one of the thinner practical areas.
