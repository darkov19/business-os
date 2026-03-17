codex resume 019cf672-3bda-7510-ab30-72e28712283d

# Business OS

Business OS is a BMAD-style business workflow system for AI agents.

It packages:

- a modular business framework
- installable Codex skills
- matching Claude Code commands
- project-local docs and configuration
- a CLI installer with profile and component selection

Published package:

```bash
npx business-os@0.3.0 install
```

---

## What It Does

Business OS helps a user move from vague business intent to structured business artifacts through reusable workflows such as:

- start a new business
- pivot an existing business
- launch a product or service
- improve sales or marketing
- evaluate expansion
- run SaaS, local-service, premium D2C, and partner-channel specialist paths

The system is designed to work with:

- Codex via `.agents/skills`
- Claude Code via `.claude/commands`

---

## Quick Start

Install the full published package into the current project:

```bash
npx business-os@0.3.0 install --yes --project .
```

Preview before writing files:

```bash
npx business-os@0.3.0 install --plan --project .
```

Check an installed project:

```bash
npx business-os@0.3.0 doctor --project .
```

Update an installed project using its saved manifest:

```bash
npx business-os@0.3.0 update --project .
```

---

## Install Modes

### Full

Installs the whole workflow set.

```bash
npx business-os@0.3.0 install --yes --project . --profile full
```

### Core

Installs the main start, pivot, launch, growth, and expansion paths.

```bash
npx business-os@0.3.0 install --yes --project . --profile core
```

### Custom

Installs only the components you choose.

```bash
npx business-os@0.3.0 install --yes --project . --profile custom --components saas,premium-d2c-launch
```

---

## Installed Structure

Business OS installs into a project like this:

```text
project/
  .business-os/
    docs/
    _cfg/
    install-manifest.json
  .agents/
    skills/
  .claude/
    commands/
```

Meaning:

- `.business-os/docs` is the locked baseline document layer
- `.business-os/_cfg` is the local override and notes layer
- `.agents/skills` is the Codex execution layer
- `.claude/commands` is the Claude execution layer

---

## Components

Available component ids for `--profile custom`:

- `start-core`
- `pivot`
- `launch`
- `growth`
- `expansion`
- `saas`
- `local-service`
- `wholesale-readiness`
- `partner-rollout`
- `premium-d2c-launch`
- `premium-d2c-audit`

The installer always includes:

- `business-os-router`

so routing remains available even in custom installs.

---

## CLI

```bash
business-os install [--target codex|claude|both] [--profile core|full|custom] [--components LIST] [--project PATH] [--no-docs] [--force] [--yes] [--plan] [--dry-run]
business-os doctor [--project PATH]
business-os update [--project PATH] [--plan] [--dry-run]
```

Key options:

- `--target`: install for Codex, Claude, or both
- `--profile`: choose `core`, `full`, or `custom`
- `--components`: comma-separated component ids for custom installs
- `--plan`: show file actions without writing files
- `--no-docs`: skip `.business-os/docs`
- `--yes`: noninteractive install

---

## Interactive Installer

If you run `install` in a TTY without `--yes`, Business OS opens a guided menu flow for:

- project path
- install target
- install mode
- component selection for custom installs
- docs on/off
- confirmation

This is the current BMAD-like installer layer. It is not a full TUI, but it is now a real guided CLI rather than a flat flag-only installer.

---

## Local Overrides

Project-local overrides live in:

- `.business-os/_cfg/README.md`
- `.business-os/_cfg/local-notes.md`

These are scaffolded automatically and are intended to survive updates.

Use them for:

- project-specific routing notes
- local workflow adjustments
- experimental extensions before promoting them into the package

---

## Current Status

Current published release:

- `0.3.0`

Verified:

- interactive install
- noninteractive install
- core/full/custom profiles
- tarball packaging
- real post-publish `npx business-os@0.3.0 install`
- real post-publish `doctor`

Release references:

- [business-os-release-v0.3.0.md](/home/darko/Code/chitr/docs/business-os-release-v0.3.0.md)
- [business-os-package-validation-v0.3.0.md](/home/darko/Code/chitr/docs/business-os-package-validation-v0.3.0.md)

---

## Repo Map

Primary docs:

- [docs/business-os-framework.md](/home/darko/Code/chitr/docs/business-os-framework.md)
- [docs/business-os-module-map.md](/home/darko/Code/chitr/docs/business-os-module-map.md)
- [docs/business-os-artifact-map.md](/home/darko/Code/chitr/docs/business-os-artifact-map.md)
- [docs/business-os-installer-spec.md](/home/darko/Code/chitr/docs/business-os-installer-spec.md)
- [docs/business-os-package-architecture.md](/home/darko/Code/chitr/docs/business-os-package-architecture.md)
- [docs/business-os-publish-flow.md](/home/darko/Code/chitr/docs/business-os-publish-flow.md)

Doc index:

- [docs/README.md](/home/darko/Code/chitr/docs/README.md)

---

## Development

Run locally from the repo:

```bash
node ./bin/business-os.js install --yes --project /tmp/business-os-dev-smoke
node ./bin/business-os.js doctor --project /tmp/business-os-dev-smoke
node ./bin/business-os.js update --project /tmp/business-os-dev-smoke --plan
```

Package checks:

```bash
npm run pack:check
npm run publish:check
```
