# Business OS

Business OS is a modular business-planning and execution system packaged for:

- Codex skills in `.agents/skills`
- Claude Code commands in `.claude/commands`
- project-local reference docs in `.business-os/docs`

## Install

Preferred future install flow:

```bash
npx business-os install
```

Current local development flow:

```bash
node ./bin/business-os.js install
```

## Commands

```bash
business-os install [--target codex|claude|both] [--profile core|full|custom] [--components LIST] [--project PATH] [--no-docs] [--force] [--yes] [--plan] [--dry-run]
business-os doctor [--project PATH]
business-os update [--project PATH] [--plan] [--dry-run]
```

## Profiles

- `core`: router plus the main start, pivot, launch, growth, and expansion workflows
- `full`: core plus specialist SaaS, local-service, partner-channel, and premium-D2C workflows
- `custom`: choose exactly which Business OS components to install

## Overrides

Project-local override files live in `.business-os/_cfg`.

- installer scaffolds this folder automatically
- update should preserve files you edit there
- use it for project-specific notes and future override experiments

## Planning

Use `--plan` to preview file actions before writing anything.

- install preview: `business-os install --plan`
- update preview: `business-os update --plan`

## Package Notes

- active framework docs live in [docs](/home/darko/Code/chitr/docs)
- deprecated drafts live in [docs/deprecated](/home/darko/Code/chitr/docs/deprecated)
- installer architecture is documented in [docs/business-os-package-architecture.md](/home/darko/Code/chitr/docs/business-os-package-architecture.md)
- release and publish steps are documented in [docs/business-os-publish-flow.md](/home/darko/Code/chitr/docs/business-os-publish-flow.md)
