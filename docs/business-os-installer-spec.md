# Business OS Installer Spec

Status: Draft
Purpose: Define the behavior of the initial Business OS installer CLI.

---

## 1. Commands

### `business-os install`

Purpose:

- install the locked Business OS baseline into a target project

Behavior:

- optionally copy active docs into `.business-os/docs`
- copy selected Codex skills into `.agents/skills`
- copy selected Claude commands into `.claude/commands`
- write `.business-os/install-manifest.json`

Supported options:

- `--target codex|claude|both`
- `--project PATH`
- `--no-docs`
- `--force`
- `--dry-run`

### `business-os doctor`

Purpose:

- inspect a project and report whether Business OS looks installed correctly

Behavior:

- check manifest presence
- print installed version if present
- count expected Codex skills and Claude commands found

### `business-os update`

Purpose:

- reapply the package using the stored manifest settings

Behavior:

- require an existing install manifest
- reuse prior target and docs settings
- run install with `force=true`

---

## 2. Install Rules

### Docs

Install from:

- package `docs/`

Into:

- `.business-os/docs`

Exclude:

- `docs/deprecated/`

### Codex Skills

Install from:

- package `.agents/skills/`

Into:

- project `.agents/skills/`

### Claude Commands

Install from:

- package `.claude/commands/`

Into:

- project `.claude/commands/`

---

## 3. Manifest Schema

Initial fields:

```json
{
  "package": "business-os",
  "version": "0.1.0",
  "installedAt": "ISO_TIMESTAMP",
  "project": "/abs/path",
  "target": "both",
  "docsInstalled": true,
  "codexSkills": [],
  "claudeCommands": []
}
```

---

## 4. Safety Rules

Installer should:

- never silently overwrite installed files unless `--force` or `update` is used
- validate target mode before install
- fail clearly if no manifest exists for `update`
- remain dependency-light and use Node built-ins where possible

---

## 5. Release Readiness Checklist

Before publishing the package:

1. install into a clean temp project
2. verify `.agents/skills` install correctly
3. verify `.claude/commands` install correctly
4. verify `.business-os/install-manifest.json` is written
5. verify `doctor` output is correct
6. verify `update` works after a first install
