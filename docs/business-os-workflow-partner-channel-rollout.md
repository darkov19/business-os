# Business OS Workflow: Partner Channel Rollout

Status: Draft workflow spec
Purpose: Define the end-to-end workflow the Business OS should use when a business has decided to work with distributors, wholesalers, dealers, or reseller partners and now needs an execution system for rollout, governance, reorder health, and channel conflict.

Related:

- [business-os-framework.md](./business-os-framework.md)
- [business-os-module-map.md](./business-os-module-map.md)
- [business-os-module-spec-o05-distributor-wholesale-readiness.md](./business-os-module-spec-o05-distributor-wholesale-readiness.md)
- [business-os-artifact-templates.md](./business-os-artifact-templates.md)
- [business-os-question-bank.md](./business-os-question-bank.md)
- [business-os-evidence-rubric.md](./business-os-evidence-rubric.md)

---

## 1. Why This Workflow Exists

Many businesses correctly evaluate partner-channel readiness and still fail when they actually enter the channel.

Typical post-entry failures:

- weak partner onboarding
- unclear territory or account rules
- poor reorder discipline
- hidden support burden
- slow collections
- direct-versus-partner conflict
- no partner performance review system

This workflow exists to move the business from:

- `we think wholesale / distribution could work`

to:

- `we have a controlled rollout and management system for this channel`

---

## 2. When To Use

Use this workflow when:

- the business has already decided to enter a partner channel
- a pilot distributor, dealer, reseller, or wholesale rollout is being prepared
- the user needs a system for partner onboarding, governance, reorder health, and channel control
- the current indirect channel exists but is underperforming due to execution issues

Typical user queries:

- help me roll out wholesale properly
- how should we onboard dealer partners
- how do we manage distributor performance
- we have partner interest but need a channel operating system

---

## 3. When Not To Use

Do not use this workflow when:

- the user is still deciding whether indirect channels are a good idea
- the offer, margin structure, or operational readiness is still too weak
- the business mainly needs a normal direct B2B pipeline

In those cases, route to:

- Distributor / Wholesale Readiness
- Route-To-Market And Sales Architecture
- Financial Planning And Capital Allocation

---

## 4. Workflow Goal

By the end of this workflow, the system should be able to produce:

- a Distributor / Wholesale Readiness Memo if missing
- a Partner Channel Rollout Plan
- a Route-To-Market Strategy Memo
- an Operations Playbook update
- a Financial Planning Memo where payment-cycle risk matters
- a Customer Success And Retention Memo where account-management logic matters
- an Execution Activation Plan
- a 30/60 Day Execution Plan

And it should be able to state clearly:

- how the partner rollout should be staged
- what support and governance system is required
- what the reorder and collections health model should be
- what direct-versus-partner conflict rules should apply
- what should happen in the next 30-60 days

---

## 5. Primary Modules

This workflow should typically use:

1. M10 Operations, Delivery, And Supply System
2. M12 Route-To-Market And Sales Architecture
3. M17 Financial Planning And Capital Allocation
4. M18 Customer Success And Retention System

Overlay modules commonly used:

- O05 Distributor / Wholesale Readiness
- O03 Inventory, Fulfillment, And Packaging
- O14 Experimentation And Pilot Design

Control modules used throughout:

- C01 Assumption Log
- C02 Evidence Tracker
- C03 Decision Gate Tracker
- C05 Open Questions Register

---

## 6. Workflow Stages

This workflow should run in seven stages.

1. Channel Rollout Framing
2. Partner Model And Scope Definition
3. Economics, Payment, And Stock Discipline
4. Partner Onboarding And Support Design
5. Territory, Conflict, And Governance Rules
6. Performance, Reorder, And Collections Review
7. Rollout Recommendation And Next-Step Decision

---

## 7. Stage 1: Channel Rollout Framing

### Goal

Clarify which partner channel is being rolled out and why now.

### Required Questions

- What kind of partner channel is this?
- Is this a pilot, a first rollout, or a cleanup of an existing channel?
- What does success mean in practical terms?
- What is the current biggest worry: margin, operations, control, or collections?

### Gate

If channel readiness itself is still unclear, route back to `Distributor / Wholesale Readiness` first.

---

## 8. Stage 2: Partner Model And Scope Definition

### Goal

Define which partners, territories, products, and account rules are in scope.

### Primary Modules

- O05 Distributor / Wholesale Readiness
- M12 Route-To-Market And Sales Architecture

### Required Questions

- Which partner type is being onboarded first?
- Which SKUs or offers are available to the channel?
- Which territory or account boundaries apply?
- Is this exclusive, non-exclusive, or conditional?

### Outputs

- rollout scope note
- Partner Channel Rollout Plan

### Gate

Use `Conditional Proceed` if the rollout should start with fewer partners, fewer SKUs, or a narrower geography.

---

## 9. Stage 3: Economics, Payment, And Stock Discipline

### Goal

Make sure the rollout can survive partner discounts, payment delays, and stock burden.

### Primary Modules

- O05 Distributor / Wholesale Readiness
- M17 Financial Planning And Capital Allocation
- O03 Inventory, Fulfillment, And Packaging

### Required Questions

- What margin does the partner expect?
- What payment terms apply?
- What stock, samples, or display burden is required?
- What reorder pattern is needed to make this channel worthwhile?

### Outputs

- Financial Planning Memo where needed
- rollout economics note

### Gate

Use `Block / Validate First` if stock and payment burden can break the business before reorder proof exists.

---

## 10. Stage 4: Partner Onboarding And Support Design

### Goal

Define how partners will be onboarded, enabled, and supported.

### Primary Modules

- M10 Operations, Delivery, And Supply System
- M18 Customer Success And Retention System

### Required Questions

- What training or sales enablement do partners need?
- What samples, catalogs, or tools are required?
- Who owns partner onboarding and account support?
- What issue-resolution process exists for damaged stock, complaints, or slow-moving inventory?

### Outputs

- Partner Channel Rollout Plan
- operations and support update

### Gate

Use `Proceed With Warnings` if the channel is viable but partner-support ownership remains thin.

---

## 11. Stage 5: Territory, Conflict, And Governance Rules

### Goal

Set the rules that keep partner channels from damaging the rest of the business.

### Primary Modules

- M12 Route-To-Market And Sales Architecture
- O05 Distributor / Wholesale Readiness

### Required Questions

- What direct-versus-partner conflict rules apply?
- What account ownership rules apply?
- What discounting or price-control rules exist?
- What happens if a partner underperforms or violates terms?

### Outputs

- channel-governance note
- Partner Channel Rollout Plan

### Gate

Use `Block / Validate First` if the rollout would create unmanaged channel conflict.

---

## 12. Stage 6: Performance, Reorder, And Collections Review

### Goal

Define what good health looks like after rollout.

### Primary Modules

- M17 Financial Planning And Capital Allocation
- M18 Customer Success And Retention System

### Required Questions

- What metrics will define a healthy partner?
- What reorder frequency or sell-through matters?
- What collections thresholds matter?
- When should a partner be expanded, corrected, or exited?

### Outputs

- Partner Channel Rollout Plan
- partner performance review note

### Gate

Use `Conditional Proceed` if the channel should launch only with a formal review cadence and exit rules.

---

## 13. Stage 7: Rollout Recommendation And Next-Step Decision

### Goal

End with a controlled rollout recommendation.

### Possible End States

#### Pilot With Controlled Partners

The channel is ready, but only with a small set of partners and tight controls.

#### Roll Out With Conditions

The channel can expand, but only with defined territory, payment, and support rules.

#### Tighten Governance First

The channel logic is sound, but onboarding, conflict, or collections systems are too weak.

#### Defer Broader Rollout

The business should not expand the channel until economics, support, or reorder health improves.

---

## 14. Control Artifact Rules

Throughout the workflow, update:

- Assumption Log
- Evidence Tracker
- Decision Gate Tracker
- Open Questions Register

These should capture:

- partner assumptions
- payment and reorder assumptions
- territory and conflict assumptions
- support and governance gaps

---

## 15. Skill / Agent Notes

- This workflow should usually be used after readiness has already been established.
- It should stay operational and governance-heavy, not drift back into abstract channel strategy.
- It should prefer bounded rollout and measurable review cadence over broad partner sprawl.
