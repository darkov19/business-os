# Business OS Smoke Test Results

Status: Draft review
Purpose: Record a first practical smoke-test pass on the Business OS router, workflows, and skills using realistic business prompts across different business types.

Related:

- [business-os-framework.md](./business-os-framework.md)
- [business-os-workflow-start-from-scratch.md](./business-os-workflow-start-from-scratch.md)
- [business-os-workflow-pivot-existing-business.md](./business-os-workflow-pivot-existing-business.md)
- [business-os-workflow-launch-product-or-service.md](./business-os-workflow-launch-product-or-service.md)
- [business-os-workflow-evaluate-expansion.md](./business-os-workflow-evaluate-expansion.md)

---

## 1. Test Method

These tests were run as architecture-and-workflow smoke tests, not live user sessions.

Each test checks:

- likely router intent classification
- likely context classification
- best workflow choice
- expected primary outputs
- where the system feels strong
- where the system still feels thin

---

## 2. Coverage Summary

| Scenario | Expected route | Result |
| --- | --- | --- |
| Chitr product launch | Launch A New Product Or Service | Strong |
| Chitr service-to-product pivot | Pivot Existing Business | Strong |
| Chitr wallpaper expansion | Evaluate Expansion / New Category | Strong |
| New AI SaaS idea | Start From Scratch | Strong-Partial |
| New local home service | Start From Scratch | Strong-Partial |

---

## 3. Scenario: Chitr Product Launch

### Prompt

`We already have Studio Aalekh and want to launch Chitr as a product line with fixed artworks. Help us structure the launch.`

### Expected Route

- Primary intent: Launch A New Product Or Service
- Context: hybrid, physical product, studio / creative practice
- Workflow: [business-os-workflow-launch-product-or-service.md](./business-os-workflow-launch-product-or-service.md)

### Why This Route Is Correct

The user is not starting from zero and is not asking whether to pivot the entire business identity.
They are trying to prepare a defined product line for launch.

### Expected Outputs

- Offer Architecture Document
- Pricing And Unit Economics Memo
- Operations Playbook
- Route-To-Market Strategy Memo
- Marketing Strategy Plan
- Launch Dossier

### What Feels Strong

- launch logic is well covered
- product, operations, and channel thinking align well
- launch readiness and phase logic are explicit

### What Still Feels Thin

- no dedicated worked module yet for financial planning
- premium visual-commerce requirements are still spread across several docs rather than one concentrated launch-commerce artifact

---

## 4. Scenario: Chitr Service-To-Product Pivot

### Prompt

`Our custom studio business is not scaling well and we want to move toward a product brand while preserving our strengths.`

### Expected Route

- Primary intent: Pivot Existing Business
- Context: studio / creative practice, hybrid, physical product
- Workflow: [business-os-workflow-pivot-existing-business.md](./business-os-workflow-pivot-existing-business.md)

### Why This Route Is Correct

This is a true pivot: the business already exists and the user wants to change the model while preserving useful assets.

### Expected Outputs

- Current State / Pivot Diagnosis Memo
- Asset And Capability Audit
- Positioning Memo
- Offer Architecture Document
- Pivot Strategy Dossier

### What Feels Strong

- Chitr-like pivots are one of the strongest areas of the system
- asset reuse and productization are explicitly supported
- pilot-first pivot logic is mature enough

### What Still Feels Thin

- org design and delegation exist only as overlays, not as a worked workflow yet
- no dedicated transition-risk template beyond the broader pivot dossier

---

## 5. Scenario: Chitr Wallpaper Expansion

### Prompt

`After a year, should we add wallpapers, maybe with local manufacturing or imported raw material?`

### Expected Route

- Primary intent: Evaluate Expansion / New Category
- Context: physical product, hybrid, import-sensitive expansion
- Workflow: [business-os-workflow-evaluate-expansion.md](./business-os-workflow-evaluate-expansion.md)

### Why This Route Is Correct

This is not a launch-from-zero or full pivot question.
It is an adjacency decision with strategic, sourcing, and financial implications.

### Expected Outputs

- Expansion Smoke Test Memo
- Financial Planning Memo
- Import / Sourcing Evaluation Memo
- Experiment / Pilot Design Memo
- Expansion Decision Dossier

### What Feels Strong

- this is one of the strongest judgment workflows in the system
- the recommendation classes are clear
- it naturally supports Chitr’s future category questions

### What Still Feels Thin

- no dedicated import / sourcing worked module yet
- distributor and partner expansion still need deeper execution templates

---

## 6. Scenario: New AI SaaS Idea

### Prompt

`I want to build an AI tool for small clinics to automate patient follow-up. I have the idea but no business yet.`

### Expected Route

- Primary intent: Start From Scratch
- Context: SaaS / digital product, likely B2B
- Workflow: [business-os-workflow-start-from-scratch.md](./business-os-workflow-start-from-scratch.md)

### Why This Route Is Correct

The user is still at business-foundation stage, even though the business type is software.

### Expected Outputs

- Founder Brief
- Business Definition Note
- Opportunity / Problem Memo
- Customer Research Brief
- Business Concept Dossier

### What Feels Strong

- the router can classify this reasonably well
- the start workflow is still a valid first pass
- the SaaS context classifier exists and prevents a product-brand-only mindset

### What Still Feels Thin

- SaaS-specific depth still lacks a dedicated workflow even though the overlay direction is now clearer
- no dedicated SaaS launch or SaaS validation workflow exists yet
- regulated domain concerns like clinics / healthcare are outside the current system boundary

### Result

- Strong-Partial

---

## 7. Scenario: New Local Home Service

### Prompt

`I want to start a premium home cleaning service in one city and build a reliable system from scratch.`

### Expected Route

- Primary intent: Start From Scratch
- Context: local service business
- Workflow: [business-os-workflow-start-from-scratch.md](./business-os-workflow-start-from-scratch.md)

### Why This Route Is Correct

The user is still defining the business from zero, even though later they will need local-service overlays.

### Expected Outputs

- Founder Brief
- Business Definition Note
- Customer Research Brief
- Business Concept Dossier

### What Feels Strong

- the context classifier should correctly flag local service
- the question bank supports territory, scheduling, and local acquisition questions

### What Still Feels Thin

- no dedicated local-service launch workflow yet
- no worked overlay spec yet for local service operations
- service recovery and booking system outputs need more implementation depth

### Result

- Strong-Partial

---

## 8. Main Findings

The system already feels strong for:

- Chitr-like pivots
- product launches
- expansion decisions

The system is usable but still thinner for:

- SaaS-specific workflows
- local-service-specific workflows
- deep import / sourcing execution
- launch-commerce specifics for premium D2C brands

---

## 9. Recommended Next Build Priorities

Based on this smoke test, the best next documents or skills are:

1. SaaS-specific workflow
2. local-service overlay spec
3. deep import / sourcing execution spec
4. launch-commerce specifics for premium D2C brands
5. more worked modules in retention, operations, or sourcing as needed

---

## 10. Conclusion

The Business OS is already coherent enough to use on real product, pivot, and expansion questions.

It is not yet complete across all business types, but the current foundation is strong enough to begin real usage and iterative refinement.
