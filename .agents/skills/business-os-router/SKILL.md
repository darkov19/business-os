---
name: business-os-router
description: Route business-building queries to the right Business OS workflow. Use when a user wants help starting, pivoting, launching, diagnosing, documenting, improving, or expanding a business and the correct workflow is not yet clear.
---

# Business OS Router

Use this skill as the first routing layer for Business OS requests.

## When To Use

Use this skill when the user:

- asks broad business questions
- is unsure where to start
- mixes multiple business needs in one request
- wants the system to decide the right workflow
- wants business documentation but has not specified which process should run

Do not use this skill when the user has already clearly invoked a more specific Business OS skill such as `$start-business`, `$pivot-business`, or `$expansion-smoke-test`.

## Core Behavior

1. Use the canonical Business OS docs in `/home/darko/Code/chitr/docs`.
2. Ignore `/home/darko/Code/chitr/docs/deprecated/` unless comparing history is explicitly useful.
3. Classify the request across:
   - primary intent
   - secondary intents
   - business context
   - business stage
4. Ask only the minimum clarifying questions needed to route well.
5. Recommend the best workflow skill or, if a skill does not exist yet, recommend the right workflow doc and module path.

## Routing Steps

### 1. Confirm Intent

Map the request to one primary intent:

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

### 2. Classify Context

Determine the likely business context:

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

### 3. Select Workflow

If the route is clear:

- `Start From Scratch` -> use `$start-business`
- `Pivot Existing Business` -> use `$pivot-business`
- `Launch A New Product Or Service` -> use `$launch-product-or-service`
- `Improve Sales Or Marketing` -> use `$improve-sales-or-marketing`
- `Evaluate Expansion / New Category` -> use `$expansion-smoke-test`

Context-aware workflow preference:

- if the context is `SaaS / digital product` and no dedicated skill exists yet, prefer `business-os-workflow-saas-digital-product.md`
- if the context is `local service` and no dedicated skill exists yet, prefer `business-os-workflow-local-service.md`

If the right workflow does not yet have a dedicated skill, route using the canonical workflow and module docs directly.

### 4. Return A Compact Route Summary

Summarize:

- primary intent
- context classification
- recommended workflow
- why that workflow is the best fit
- the first questions or first artifact expected

## Question Discipline

- Start with 1-3 compact routing questions only when needed.
- Do not launch into a full workflow until the route is clear.
- If the user asks for speed, make a reasonable routing assumption and state it.

## Output Contract

When using this skill, the response should usually include:

- `Primary intent`
- `Business context`
- `Recommended workflow`
- `Reason`
- `First step`

## References

Read `/home/darko/Code/chitr/.agents/skills/business-os-router/references/doc-map.md` when you need the exact Business OS doc map.
