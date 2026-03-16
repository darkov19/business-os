# Business OS Specialist Skill Smoke Tests

Status: Draft review
Purpose: Record a practical first-pass smoke test on the new specialist Business OS skills using realistic prompts and checking whether the skill contract, workflow, and expected outputs are coherent.

Related:

- [business-os-workflow-saas-digital-product.md](./business-os-workflow-saas-digital-product.md)
- [business-os-workflow-local-service.md](./business-os-workflow-local-service.md)
- [business-os-workflow-partner-channel-rollout.md](./business-os-workflow-partner-channel-rollout.md)
- [business-os-module-spec-o05-distributor-wholesale-readiness.md](./business-os-module-spec-o05-distributor-wholesale-readiness.md)
- [business-os-module-spec-o16-premium-d2c-launch-commerce.md](./business-os-module-spec-o16-premium-d2c-launch-commerce.md)

---

## 1. Test Method

These were run as specialist skill smoke tests, not live user conversations.

Each test checks:

- whether the prompt fits the skill cleanly
- whether the skill points to the right docs
- whether the default output set is decision-useful
- where the skill still feels thin or too documentation-heavy

---

## 2. Coverage Summary

| Skill | Scenario | Result |
| --- | --- | --- |
| `saas-digital-product` | New B2B AI SaaS idea | Strong |
| `local-service-business` | New city-based home service | Strong |
| `distributor-wholesale-readiness` | Premium decor brand considering dealers | Strong |
| `partner-channel-rollout` | Early partner rollout needing governance | Strong |
| `premium-d2c-launch-commerce` | Premium visual brand preparing ecommerce launch | Strong |

---

## 3. SaaS Digital Product

### Prompt

`I want to build an AI tool for small clinics to automate patient follow-up. I have a prototype idea but I do not know whether I should validate it first or prepare for launch.`

### Expected Route

- Skill: [saas-digital-product](/home/darko/Code/chitr/.agents/skills/saas-digital-product/SKILL.md)
- Workflow: [business-os-workflow-saas-digital-product.md](./business-os-workflow-saas-digital-product.md)

### What Feels Strong

- the skill has a clear SaaS-only scope
- it forces activation, retention, and trust into the decision
- the end states are useful and non-generic

### What Still Feels Thin

- regulated sectors like healthcare still need stronger compliance boundary language
- there is still no dedicated SaaS launch-readiness artifact beyond the general launch and growth outputs

### Result

- Strong

---

## 4. Local Service Business

### Prompt

`I want to start a premium home cleaning service in Bangalore and build a reliable system before I scale to more neighborhoods.`

### Expected Route

- Skill: [local-service-business](/home/darko/Code/chitr/.agents/skills/local-service-business/SKILL.md)
- Workflow: [business-os-workflow-local-service.md](./business-os-workflow-local-service.md)

### What Feels Strong

- the skill correctly centers territory, scheduling, dispatch, and recovery
- the workflow pushes narrower launch rather than premature local sprawl
- reputation is treated as an operational issue, not only a marketing issue

### What Still Feels Thin

- local-service acquisition patterns such as maps, search, and neighborhood referrals could still use deeper execution templates
- staffing-quality and field-supervision details are still mostly handled through broader operations logic

### Result

- Strong

---

## 5. Distributor Wholesale Readiness

### Prompt

`We have a premium decor brand selling direct today. Some dealer partners are interested, but I do not know if wholesale will destroy margin or create channel conflict.`

### Expected Route

- Skill: [distributor-wholesale-readiness](/home/darko/Code/chitr/.agents/skills/distributor-wholesale-readiness/SKILL.md)
- Module: [business-os-module-spec-o05-distributor-wholesale-readiness.md](./business-os-module-spec-o05-distributor-wholesale-readiness.md)

### What Feels Strong

- the skill keeps the question grounded in economics and payment cycles
- it explicitly checks channel conflict and support burden
- it pushes bounded partner pilots instead of broad rollout

### What Still Feels Thin

- contract, exclusivity, and field-execution details can still go deeper for later-stage channel operations

### Result

- Strong

---

## 6. Partner Channel Rollout

### Prompt

`We have decided to test dealer partners for our decor brand. I need a rollout system for onboarding, territory, reorder discipline, payment follow-up, and direct-versus-partner conflict.`

### Expected Route

- Skill: [partner-channel-rollout](/home/darko/Code/chitr/.agents/skills/partner-channel-rollout/SKILL.md)
- Workflow: [business-os-workflow-partner-channel-rollout.md](./business-os-workflow-partner-channel-rollout.md)

### What Feels Strong

- the skill directly covers the missing post-entry execution layer
- it forces onboarding, support, conflict rules, reorder health, and collections into the rollout
- it gives the wholesale path a real operating system instead of only a go/no-go memo

### What Still Feels Thin

- legal agreement details are still outside the current scope
- later-stage multi-region partner governance could still use deeper templates

### Result

- Strong

---

## 7. Premium D2C Launch Commerce

### Prompt

`We are launching a premium wall art brand online. I am worried the site may look good but still not convert because people cannot judge texture, scale, and trust.`

### Expected Route

- Skill: [premium-d2c-launch-commerce](/home/darko/Code/chitr/.agents/skills/premium-d2c-launch-commerce/SKILL.md)
- Module: [business-os-module-spec-o16-premium-d2c-launch-commerce.md](./business-os-module-spec-o16-premium-d2c-launch-commerce.md)

### What Feels Strong

- the skill is directly relevant to Chitr-like brands
- it separates brand aesthetics from conversion readiness
- it forces PDP clarity, trust systems, and post-purchase confidence into the launch decision

### What Still Feels Thin

- there is still no dedicated workflow or skill for the full premium D2C launch from offer to content to conversion to support
- visual-asset standards could later become a more explicit checklist or template pack

### Result

- Strong

---

## 8. Main Findings

The new specialist skill layer is materially better than the previous state because:

- SaaS now has a dedicated workflow and skill
- local service now has a dedicated workflow and skill
- distributor readiness is no longer buried as a note
- partner-channel rollout now covers post-entry execution instead of only readiness
- premium D2C launch-commerce is now a first-class evaluation path

The main remaining gap is not coverage. It is execution depth after diagnosis:

- more detailed asset and checklist depth for premium D2C launch-commerce
- more field-ops detail for local service execution
- stronger compliance boundaries for regulated SaaS contexts

---

## 9. Recommendation

The next best move is not more broad architecture.

The next best move is to test these skills on live Chitr and non-Chitr prompts and then add:

1. one execution-depth skill for premium D2C launch assets or conversion audit
2. stronger regulated-SaaS boundary guidance
3. one real end-to-end router test pass across mixed prompts
