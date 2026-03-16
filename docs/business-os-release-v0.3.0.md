# Business OS Release v0.3.0

Status: Published
Tag: `business-os-v0.3.0`
Package version: `0.3.0`

---

## Included

- canonical Business OS docs in [docs](/home/darko/Code/chitr/docs)
- Codex skills in [`.agents/skills`](/home/darko/Code/chitr/.agents/skills)
- Claude commands in [`.claude/commands`](/home/darko/Code/chitr/.claude/commands)
- installer CLI in [src](/home/darko/Code/chitr/src) and [bin/business-os.js](/home/darko/Code/chitr/bin/business-os.js)

## Release Highlights

- richer interactive install flow with menu-driven setup
- `core`, `full`, and `custom` install profiles
- explicit component selection through `--components`
- protected local override folder in `.business-os/_cfg`
- file-action planning via `--plan`
- local tarball install path validated for `npx business-os`
- real post-publish `npx business-os@0.3.0 install` verified

## Intended Scope

This release is the active published BMAD-style installer baseline for:

- adaptive project setup
- selective workflow installs
- update-safe local notes and override scaffolding
- publish-ready package validation

## Known Gaps

- no true curses-style interactive UI
- no diff-merge engine for user-modified shipped files
- no richer visual TUI yet

## Lock Policy

Treat this release as the active published installer baseline for:

- package manifest schema
- install profile model
- component selection model
- override folder model
- local publish/test flow

## Validation Log

- [business-os-package-validation-v0.3.0.md](/home/darko/Code/chitr/docs/business-os-package-validation-v0.3.0.md)

## Publish State

Published package:

- `business-os@0.3.0`

Verified after publish:

- clean-folder `npx business-os@0.3.0 install`
- clean-folder `npx business-os@0.3.0 doctor`
