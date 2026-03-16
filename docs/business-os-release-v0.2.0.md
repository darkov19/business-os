# Business OS Release v0.2.0

Status: Locked baseline candidate
Tag: `business-os-v0.2.0`
Package version: `0.2.0`

---

## Included

- canonical Business OS docs in [docs](/home/darko/Code/chitr/docs)
- archived drafts in [docs/deprecated](/home/darko/Code/chitr/docs/deprecated)
- Codex skills in [`.agents/skills`](/home/darko/Code/chitr/.agents/skills)
- Claude commands in [`.claude/commands`](/home/darko/Code/chitr/.claude/commands)
- install/update/doctor CLI in [src](/home/darko/Code/chitr/src) and [bin/business-os.js](/home/darko/Code/chitr/bin/business-os.js)

## Release Highlights

- installer now supports guided interactive setup
- installer supports `core` and `full` workflow profiles
- manifest now records installed profile and component lists
- package has release, pack, and publish-check scripts
- publish path is documented for future `npx business-os install`

## Intended Scope

This release is a stable baseline for:

- local project installs
- version-locked framework distribution
- Codex and Claude workflow bootstrap
- package validation and release prep

## Known Gaps

- no automatic safe-merge system for user customizations yet
- no interactive component picker beyond `core` vs `full`
- no published npm package yet
- no automated end-to-end installer test workflow yet

## Lock Policy

Treat this release as the reference baseline for:

- framework docs
- shipped skills
- shipped Claude commands
- installer manifest schema

Any structural changes after this point should be handled as:

- patch release for bug fixes and wording corrections
- minor release for installer, workflow, or packaging expansion

## Verification Targets

Before treating this as fully released:

1. run `npm pack --json`
2. run `npm publish --dry-run`
3. test install from the packed tarball into a clean sample project
4. create and push tag `business-os-v0.2.0`

Validation log:

- [business-os-package-validation-v0.2.0.md](/home/darko/Code/chitr/docs/business-os-package-validation-v0.2.0.md)
