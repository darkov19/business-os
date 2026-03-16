# Business OS Package Architecture

Status: Draft
Purpose: Define how Business OS should be packaged and distributed as an installable system, similar in spirit to BMAD's install flow, while preserving a locked baseline and safe project-level customization.

---

## 1. Goal

Business OS should be installable with a single command such as:

```bash
npx business-os install
```

The install should:

- place a locked baseline of canonical docs in the target project
- install Codex skills into `.agents/skills`
- install Claude commands into `.claude/commands`
- record an install manifest so updates are controlled
- avoid forcing users to clone the source repo manually

---

## 2. Packaging Model

The source repo remains the system-of-record for:

- canonical docs
- skills
- Claude commands
- installer code

The published package should include:

- `bin/`
- `src/`
- `docs/`
- `.agents/skills/`
- `.claude/commands/`

---

## 3. Install Layout

Recommended installed structure inside a user project:

```text
project/
  .business-os/
    docs/
    install-manifest.json
    _cfg/
  .agents/
    skills/
  .claude/
    commands/
```

The `.business-os/docs` folder acts as the locked baseline reference.

The `.business-os/_cfg` folder acts as the local customization layer.

The live execution layers remain:

- `.agents/skills`
- `.claude/commands`

---

## 4. Version Locking

To lock a version down:

- tag the source repo
- publish the npm package at that tag's version
- treat the installed manifest as the local proof of what was installed

Suggested manifest fields:

- package name
- version
- installed timestamp
- target IDE mode
- profile
- selected component ids
- docs installed yes/no
- installed skill list
- installed command list

---

## 5. Update Philosophy

`update` should:

- read the install manifest
- reinstall the same target set
- overwrite shipped files only when explicitly allowed or when running update

Longer-term, updates should eventually support:

- safe diff preview
- user override folders
- update-safe custom extensions

---

## 6. Installer Commands

Minimum v1 CLI:

```bash
business-os install
business-os doctor
business-os update
```

Recommended first options:

- `--target codex|claude|both`
- `--profile core|full|custom`
- `--components comma,separated,ids`
- `--project PATH`
- `--no-docs`
- `--force`
- `--yes`
- `--plan`
- `--dry-run`

---

## 7. Current Implementation Status

Current scaffold now exists in this repo:

- [package.json](/home/darko/Code/chitr/package.json)
- [bin/business-os.js](/home/darko/Code/chitr/bin/business-os.js)
- [src/cli.js](/home/darko/Code/chitr/src/cli.js)
- [src/commands/install.js](/home/darko/Code/chitr/src/commands/install.js)
- [src/commands/doctor.js](/home/darko/Code/chitr/src/commands/doctor.js)
- [src/commands/update.js](/home/darko/Code/chitr/src/commands/update.js)

This is an installer scaffold, not a fully hardened release system yet.

---

## 8. Next Hardening Steps

Current hardening now covers:

1. release note and package-release workflow
2. clean sample-project installs
3. richer install planning output
4. override-safe customization scaffolding
5. local tarball install validation

Next hardening steps:

1. add a richer visual installer if needed
2. add diff-merge support for changed shipped files
3. publish the package and test live `npx business-os install`
