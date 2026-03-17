# Business OS Question Bank

Status: Implementation document
Purpose: Provide a reusable bank of business questions that the Business OS can use across routing, discovery, module execution, validation, and artifact generation.

Related:

- [business-os-intent-map.md](./business-os-intent-map.md)
- [business-os-context-classifier.md](./business-os-context-classifier.md)
- [business-os-module-spec-template.md](./business-os-module-spec-template.md)
- [business-os-evidence-rubric.md](./business-os-evidence-rubric.md)

---

## 1. Why This Exists

The Business OS should ask good questions, but it should not ask:

- everything
- the same questions every time
- generic filler questions

This question bank exists to help the system:

- ask higher-quality discovery questions
- stay consistent across workflows
- route faster
- reduce redundant questioning
- gather decision-useful information

The question bank is not a script.

It is a structured pool of reusable questions.

---

## 2. Design Principles

Questions should be:

- short
- decision-relevant
- easy for users to answer
- grouped by intent and module
- staged from essential to deeper

The system should prefer:

- a few high-value questions first
- then deeper questions only if needed

---

## 3. Question Types

The Business OS should use four question types.

### 3.1 Routing Questions

Used to determine:

- user intent
- business context
- stage

### 3.2 Discovery Questions

Used to understand the business situation before analysis.

### 3.3 Diagnostic Questions

Used when something is unclear, broken, or risky.

### 3.4 Validation Questions

Used to determine whether assumptions are backed by evidence.

---

## 4. Routing Question Set

These questions help the system understand where the user is and what they need.

### 4.1 Intent Routing

- Are you starting from scratch, changing an existing business, or improving one part of a business?
- Are you trying to validate an idea, launch something, fix a problem, or evaluate an expansion?
- Is your main need strategy, documentation, diagnosis, or planning?

### 4.2 Context Routing

- Is this mainly a product business, service business, software business, education business, or some mix?
- Who primarily buys from you: end customers, businesses, intermediaries, or learners?
- How is the offer delivered: shipped, done-for-you, in-person, digital, project-based, or through partners?

### 4.3 Stage Routing

- Are you still exploring, validating, launching, operating, pivoting, or expanding?
- Do you already have customers, revenue, or proof of demand?

---

## 5. Founder And Context Questions

Use for:

- M01 Founder Context And Intent
- start-from-scratch workflows
- pivot workflows

### Essential

- Why do you want to build this business?
- Why now?
- What does success look like for you in practical terms?
- What constraints do you already know you have?
- How much time, money, and attention can you realistically commit?

### Deeper

- What strengths do you or the team already have that matter here?
- What parts of the business are you most confident about?
- What parts of the business feel weakest or most uncertain?
- What kind of business do you want to avoid building?

---

## 6. Business Definition Questions

Use for:

- M03 Business Definition

### Essential

- What exactly are you selling, or planning to sell?
- Is it a product, a service, a subscription, a project, or a mix?
- Who is the buyer?
- How do you think the business will make money?
- Where will the business operate geographically?

### Deeper

- Is the offer standardized, custom, or hybrid?
- Is the business online, offline, or both?
- Is the revenue one-time, recurring, project-based, or mixed?

---

## 7. Problem / Opportunity Questions

Use for:

- M04 Problem / Opportunity Definition
- idea validation

### Essential

- What problem, need, or opportunity do you believe exists?
- Who has this problem or need?
- Why does this matter enough for someone to pay?
- Why do you think this is a business worth building now?

### Deeper

- What is broken about the current alternatives?
- Is this solving a pain, fulfilling a desire, or creating a convenience?
- Is the need urgent, ongoing, occasional, or aspirational?

---

## 8. Customer Research Questions

Use for:

- M05 Customer Research

### Essential

- Who do you think the main customer is?
- What are they trying to achieve?
- What frustrations or barriers do they face?
- How do they currently solve this problem?
- Why would they choose your offer?

### Segment Questions

- Are there multiple customer types?
- Which segment looks easiest to reach?
- Which segment looks most profitable?
- Which segment feels most urgent?

### Buying Questions

- What triggers them to look for a solution?
- What objections might stop them?
- What kind of proof would make them trust you?
- Who actually makes the purchase decision?

---

## 9. Market And Competitor Questions

Use for:

- M06 Market, Competitor, And Alternatives Research

### Essential

- Who else is already serving this customer or need?
- What alternatives already exist?
- What part of the market feels crowded?
- Where might there be whitespace?

### Deeper

- What do competitors do well?
- Where do competitors appear weak?
- Are customers overserved, underserved, or just confused?
- Are there trend or timing signals that matter here?

---

## 10. Positioning Questions

Use for:

- M07 Positioning And Value Proposition

### Essential

- What should the business be known for?
- What makes it meaningfully different?
- Why should the chosen customer trust it?
- What promise is realistic and valuable?

### Deeper

- What positioning options exist?
- Which position is strongest for the current stage?
- What proof can support this positioning?
- What language should the business avoid?

---

## 11. Offer Architecture Questions

Use for:

- M08 Offer Architecture

### Essential

- What is the core offer?
- Are there secondary offers?
- Is the offer too broad right now?
- What should be standardized versus custom?
- What is the entry offer versus the premium offer?

### Deeper

- Which offer is meant to attract attention?
- Which offer is meant to generate margin?
- Which offer is meant to deepen the relationship?
- What offer complexity should be avoided?

---

## 12. Pricing And Economics Questions

Use for:

- M09 Costing, Pricing, And Unit Economics
- M17 Financial Planning And Capital Allocation

### Essential

- What does it cost to deliver this offer?
- How are you currently thinking about price?
- What margin do you believe is possible?
- What channels will affect pricing?
- What costs are most uncertain?

### Financial Questions

- How much cash would this business or launch require?
- Where does cash get tied up?
- Are you carrying inventory, receivables, or long payment cycles?
- What could create working-capital strain?
- What would happen if sales arrive slower than expected?

---

## 13. Operations Questions

Use for:

- M10 Operations, Delivery, And Supply System

### Essential

- How is the offer produced, delivered, or fulfilled?
- What are the main dependencies?
- What could go wrong in delivery?
- What is the current or expected capacity?
- What quality standard must be maintained?

### Deeper

- Which step is most fragile?
- What happens if demand doubles?
- What vendor, supplier, or staffing risks exist?
- What needs to be documented for repeatability?

---

## 14. Route-To-Market And Sales Questions

Use for:

- M12 Route-To-Market And Sales Architecture

### Essential

- How does the customer prefer to buy?
- Should this be sold direct, through partners, through distributors, or through a sales pipeline?
- Which channels look most realistic first?
- What sales process does this require?
- Which channel architecture fits this business best right now?
- If hybrid is right, which channel should come first?

### Deeper

- Does this require assisted selling?
- Would marketplaces help or hurt?
- Would distributors reduce margin too much?
- Does the same channel work for all offers?
- Why is the recommended first channel better now than the alternatives?
- Which channels look attractive but are premature?
- What must be proven before the second channel starts?

---

## 15. Marketing And Growth Questions

Use for:

- M13 Marketing And Growth System

### Essential

- How will people discover the business?
- What message is most likely to convert the right customer?
- What proof or content is needed?
- What growth channels are realistic for this stage?

### Deeper

- What should be organic versus paid?
- What partnerships or collaborations could help?
- What retention or repeat-purchase marketing is needed?
- What growth channel looks attractive but may be premature?

---

## 16. Retention And Support Questions

Use for:

- M18 Customer Success And Retention System

### Essential

- What happens immediately after purchase or signup?
- What support does the customer need?
- What causes drop-off, dissatisfaction, or churn?
- What would make the customer come back or refer others?

### Deeper

- Where is the first post-sale failure most likely?
- Is onboarding weak?
- Are complaints being handled consistently?
- What repeat behavior matters most?

---

## 17. Expansion Questions

Use for:

- O07 Expansion / New Category Smoke Test

### Essential

- What exactly is the proposed expansion?
- Why do you want to add it now?
- Who would buy it?
- What evidence exists that they want it?
- What new complexity would this add?
- What would this distract from?

### Deeper

- Is this a core extension or a different business line?
- Does it strengthen or dilute the brand?
- Does it require different channels, ops, or support?
- Should it be tested as a pilot first?

---

## 18. Experiment And Pilot Questions

Use for:

- O14 Experimentation And Pilot Design

### Essential

- What exactly are we trying to learn?
- What is the hypothesis?
- What would count as success?
- What would count as failure?
- What is the smallest useful test?

### Deeper

- How long should the test run?
- What data should be captured?
- What happens if the signal is mixed?
- What decision will this test unlock?

---

## 19. Local Service Questions

Use for:

- O11 Local Service Operations Overlay

### Essential

- What geography are you serving?
- How are leads booked and scheduled?
- How is service delivery assigned or dispatched?
- What happens if a job goes wrong?
- How do local customers usually find providers like this?

### Deeper

- What territory boundaries matter?
- How will you manage travel time and utilization?
- How will reviews and reputation be managed?
- What local SEO or referral system is needed?

---

## 20. SaaS / Digital Product Questions

Use for:

- O10 SaaS / Digital Product Overlay

### Essential

- What is the core product outcome?
- What is the activation moment?
- What makes a user stay or churn?
- What pricing model are you considering?
- What product dependencies or risks exist?

### Deeper

- What is the onboarding flow?
- Which metrics matter most?
- What usage behavior predicts retention?
- What reliability or privacy concerns matter?

---

## 21. Education / Coaching Questions

Use for:

- O12 Education / Coaching Overlay

### Essential

- What transformation or outcome is promised?
- Who is the learner or client?
- How is the learning or coaching delivered?
- What makes completion or success more likely?
- What proof of outcomes exists or is needed?

### Deeper

- Is this cohort-based, self-paced, or live?
- What community element matters?
- What causes drop-off?
- What follow-on offer or retention path exists?

---

## 22. Diagnostic Questions

Use for:

- Diagnose What Is Broken
- pivot diagnosis
- growth diagnosis

### Essential

- What feels broken right now?
- What symptoms are you seeing?
- When did this start?
- Where do you think the bottleneck is?
- What evidence do you have for that belief?

### Deeper

- Is the issue demand, conversion, delivery, margin, retention, or focus?
- What changed recently?
- Which part of the business looks strongest despite the problem?
- What do you suspect but cannot prove yet?

---

## 23. Validation Questions

Use when the OS must check whether a belief is evidence-backed.

### Generic Validation Questions

- How do you know this is true?
- What evidence supports this?
- Is this based on customer behavior or founder belief?
- How recent is this evidence?
- What would disprove this assumption?

---

## 24. Question Selection Rules

The OS should not ask everything.

Use these rules:

1. start with routing questions
2. ask only the minimum needed to classify intent and context
3. ask module-essential questions before deeper ones
4. use deeper questions only when they affect the decision
5. stop asking once the module has enough information to do credible work

---

## 25. Chitr Example

For Chitr by Aalekh, useful questions from this bank would include:

- Is Chitr for end consumers, interior designers, or both?
- What makes a buyer choose Chitr instead of generic decor or a custom art commission?
- Which categories are easiest to standardize?
- What channel should Chitr use first: D2C, assisted selling, or B2B designer pipeline?
- What evidence exists for future expansion ideas like wallpapers?

This shows how the question bank supports both foundational and expansion-stage work.

---

## 26. Recommended Next Step

After the question bank, the next best implementation step is:

- workflow specs

The first workflow spec should likely be:

- `Start From Scratch`

That would turn the architecture, modules, artifacts, evidence, and questions into a real end-to-end Business OS workflow.
