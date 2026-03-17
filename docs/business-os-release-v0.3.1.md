# Business OS Release v0.3.1

Status: Ready to publish
Tag: `business-os-v0.3.1`
Package version: `0.3.1`

---

## Included

- canonical Business OS docs in [docs](/home/darko/Code/chitr/docs)
- Codex skills in [`.agents/skills`](/home/darko/Code/chitr/.agents/skills)
- Claude commands in [`.claude/commands`](/home/darko/Code/chitr/.claude/commands)
- installer CLI in [src](/home/darko/Code/chitr/src) and [bin/business-os.js](/home/darko/Code/chitr/bin/business-os.js)
- route-to-market decision standard and execution-activation planning updates across the Business OS

## Release Highlights

- fixed `update` for normal `core` and `full` installs
- improved `doctor` so it does not report misleading fallback counts when no manifest exists
- cleaned the package-facing [README.md](/home/darko/Code/chitr/README.md) so the npm page does not include stray local text
- bumped package and internal CLI versioning to `0.3.1`
- updated the npm publish workflow to current GitHub Actions versions and Node 24
- aligned the main and specialist workflow layers with route-to-market and execution-activation outputs

## Intended Scope

This release is the next publishable installer baseline for:

- stable install / doctor / update behavior
- cleaner npm-facing package presentation
- route-to-market decision discipline
- execution activation planning for recommended paths
- specialist workflow consistency

## Known Gaps

- no true curses-style interactive UI
- no diff-merge engine for user-modified shipped files
- no richer visual TUI yet
- release docs for `0.3.1` are prepared, but actual npm publish must still be run

## Lock Policy

Treat this release as the next publish candidate for:

- package manifest schema
- install profile model
- component selection model
- override folder model
- route-to-market decision standard
- execution activation planning standard

## Validation Log

- [business-os-package-validation-v0.3.1.md](/home/darko/Code/chitr/docs/business-os-package-validation-v0.3.1.md)

## Publish State

Ready for publish:

- local `npm pack` validation passed for `business-os@0.3.1`
- local install / doctor / update smoke checks passed for `0.3.1`
- GitHub Actions workflow updated for Node 24

Next publish steps:

- `git push origin main`
- `git tag business-os-v0.3.1`
- `git push origin business-os-v0.3.1`

