---
description: Route a business request to the right Business OS workflow and identify the best next skill or process to run.
argument-hint: "[business request]"
disable-model-invocation: true
---

Use the Business OS router to classify this request:

$ARGUMENTS

Steps:

1. Classify the primary intent.
   Valid intents:
   - Start From Scratch
   - Validate An Idea
   - Pivot Existing Business
   - Launch A New Product Or Service
   - Improve Sales Or Marketing
   - Fix Pricing, Economics, Or Capital Pressure
   - Improve Operations Or Delivery
   - Improve Retention, Support, Or Post-Sale Experience
   - Evaluate Expansion / New Category
   - Document My Business
   - Diagnose What Is Broken

2. Classify the business context.
   Possible contexts:
   - physical product
   - service
   - studio / creative practice
   - ecommerce-led brand
   - B2B / project-led
   - distributor / channel-led
   - SaaS / digital product
   - local service
   - education / coaching
   - hybrid

3. Ask only the minimum clarifying questions needed to route well.

4. Use the canonical Business OS docs from `/home/darko/Code/chitr/docs`.
   Ignore `/home/darko/Code/chitr/docs/deprecated/` unless historical comparison is explicitly needed.

5. Recommend the best next workflow or local skill:
   - `/start-business`
   - `/pivot-business`
   - `/launch-product-or-service`
   - `/improve-sales-or-marketing`
   - `/expansion-smoke-test`
   - `/saas-digital-product`
   - `/local-service-business`
   - `/distributor-wholesale-readiness`
   - `/partner-channel-rollout`
   - `/premium-d2c-launch-commerce`
   If the context is SaaS / digital product, prefer `/saas-digital-product`.
   If the context is local service, prefer `/local-service-business`.
   If the user is asking about distributors or wholesale, prefer `/distributor-wholesale-readiness`.
   If the user is asking about onboarding, governing, or scaling existing partner channels, prefer `/partner-channel-rollout`.
   If the user is asking about premium D2C ecommerce conversion, prefer `/premium-d2c-launch-commerce`.
   Otherwise recommend the right canonical workflow doc and next modules.

Return a compact route summary with:
- Primary intent
- Business context
- Recommended workflow
- Reason
- First step
