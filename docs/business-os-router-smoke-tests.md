# Business OS Router Smoke Tests

Status: Draft review
Purpose: Record an end-to-end routing smoke test across mixed business prompts to verify that the Business OS router selects the right specialist skill or workflow path without forcing the user to know the internal architecture.

Related:

- [business-os-intent-map.md](./business-os-intent-map.md)
- [business-os-context-classifier.md](./business-os-context-classifier.md)
- [business-os-framework.md](./business-os-framework.md)
- [business-os-specialist-skill-smoke-tests.md](./business-os-specialist-skill-smoke-tests.md)

---

## 1. Test Method

These were run as mixed-prompt routing tests, not live interactive sessions.

Each test checks:

- whether the prompt can be classified without heavy clarification
- whether the router should prefer a specialist skill or a general workflow
- whether the recommended route is specific enough to be useful
- where the router still feels ambiguous

---

## 2. Coverage Summary

| Scenario | Expected route | Result |
| --- | --- | --- |
| New generic business idea | `$start-business` | Strong |
| Existing studio pivot | `$pivot-business` | Strong |
| Defined product launch | `$launch-product-or-service` | Strong |
| Weak growth in existing brand | `$improve-sales-or-marketing` | Strong |
| New category expansion | `$expansion-smoke-test` | Strong |
| New SaaS idea | `$saas-digital-product` | Strong |
| New local service idea | `$local-service-business` | Strong |
| Considering distributors | `$distributor-wholesale-readiness` | Strong |
| Running partner rollout | `$partner-channel-rollout` | Strong |
| Premium D2C launch readiness | `$premium-d2c-launch-commerce` | Strong |
| Premium D2C site audit | `$premium-d2c-conversion-audit` | Strong |

---

## 3. Scenario: New Generic Business Idea

### Prompt

`I want to start a business around eco-friendly packaging, but I do not know where to start.`

### Expected Route

- Primary intent: Start From Scratch
- Context: likely physical product or hybrid, but still vague
- Best route: `$start-business`

### Why This Route Is Right

The user is too early for a specialist path. The router should not overfit too soon.

### Result

- Strong

---

## 4. Scenario: Existing Studio Pivot

### Prompt

`We run a custom interior art studio and want to pivot toward a more scalable product brand.`

### Expected Route

- Primary intent: Pivot Existing Business
- Context: studio / creative practice, hybrid, physical product
- Best route: `$pivot-business`

### Why This Route Is Right

This is a real business-model pivot, not a cold start or narrow launch.

### Result

- Strong

---

## 5. Scenario: Defined Product Launch

### Prompt

`We already know the collection we want to sell. Help us prepare the launch properly.`

### Expected Route

- Primary intent: Launch A New Product Or Service
- Context: likely product or hybrid
- Best route: `$launch-product-or-service`

### Why This Route Is Right

The user already has a defined offer and needs launch structure.

### Result

- Strong

---

## 6. Scenario: Weak Growth In Existing Brand

### Prompt

`People visit our site and inquire, but sales are weak. I need help figuring out what is broken.`

### Expected Route

- Primary intent: Improve Sales Or Marketing
- Context: existing brand with live demand signals
- Best route: `$improve-sales-or-marketing`

### Why This Route Is Right

This is a growth diagnosis problem, not a start, launch, or pivot problem.

### Result

- Strong

---

## 7. Scenario: New Category Expansion

### Prompt

`We already sell wall art. Should we add wallpaper next year or is that too risky?`

### Expected Route

- Primary intent: Evaluate Expansion / New Category
- Context: physical product, hybrid, expansion-sensitive
- Best route: `$expansion-smoke-test`

### Why This Route Is Right

This is an adjacency question with strategic, economic, and operational implications.

### Result

- Strong

---

## 8. Scenario: New SaaS Idea

### Prompt

`I want to build a SaaS product for salon owners to automate client reminders and repeat bookings.`

### Expected Route

- Primary intent: Start From Scratch
- Context: SaaS / digital product
- Best route: `$saas-digital-product`

### Why This Route Is Right

The intent is early-stage, but the context is specific enough that the SaaS specialist skill should outperform the generic start workflow.

### Result

- Strong

---

## 9. Scenario: New Local Service Idea

### Prompt

`I want to start a premium pest-control service in one city and build a reliable system before I expand.`

### Expected Route

- Primary intent: Start From Scratch
- Context: local service
- Best route: `$local-service-business`

### Why This Route Is Right

The local-service operating logic is central from day one.

### Result

- Strong

---

## 10. Scenario: Considering Distributors

### Prompt

`Some dealer partners are approaching us. I do not know whether wholesale is a good move for our brand.`

### Expected Route

- Primary intent: channel evaluation inside an existing business
- Context: distributor / channel-led possibility
- Best route: `$distributor-wholesale-readiness`

### Why This Route Is Right

This is still a readiness decision, not a rollout problem.

### Result

- Strong

---

## 11. Scenario: Running Partner Rollout

### Prompt

`We already decided to try dealer partners. Help me set up onboarding, territory rules, reorder tracking, and payment discipline.`

### Expected Route

- Primary intent: improve operations or delivery inside a channel expansion
- Context: distributor / channel-led
- Best route: `$partner-channel-rollout`

### Why This Route Is Right

The user is past the `should we do this` stage and now needs a channel operating system.

### Result

- Strong

---

## 12. Scenario: Premium D2C Launch Readiness

### Prompt

`We are launching a premium home decor brand online. I need to know what is missing in the commerce layer before we drive traffic.`

### Expected Route

- Primary intent: launch readiness
- Context: ecommerce-led premium product brand
- Best route: `$premium-d2c-launch-commerce`

### Why This Route Is Right

The user needs readiness logic, not yet a detailed conversion audit.

### Result

- Strong

---

## 13. Scenario: Premium D2C Site Audit

### Prompt

`Audit our premium D2C site. I want to know what is blocking conversion on the PDPs and whether we should stay self-serve.`

### Expected Route

- Primary intent: conversion diagnosis
- Context: ecommerce-led premium product brand
- Best route: `$premium-d2c-conversion-audit`

### Why This Route Is Right

The user is explicitly asking for an audit and fix-order, not only readiness framing.

### Result

- Strong

---

## 14. Main Findings

The router is now materially stronger because:

- generic requests still route to the broad foundation workflows
- context-specific requests now get specialist paths without the user needing to know the architecture
- the two formerly weak areas now split correctly:
  - distributor readiness vs partner rollout
  - premium D2C launch readiness vs premium D2C conversion audit

The main remaining routing risks are narrower and more manageable:

- highly regulated SaaS prompts may still need explicit compliance-boundary warnings
- some premium D2C prompts could still blur readiness versus audit if the user is vague
- mixed queries that contain both launch and growth language may still need a compact clarification question

---

## 15. Recommendation

The router is strong enough for real usage.

The next best move is:

1. run live prompt tests through the router in real sessions
2. add regulated-SaaS boundary language where needed
3. add lightweight ambiguity rules for blended launch-plus-growth prompts
