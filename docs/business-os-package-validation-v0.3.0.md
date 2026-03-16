# Business OS Package Validation v0.3.0

Status: Verified locally
Package version: `0.3.0`

---

## Checks Run

1. CLI help output
2. `--plan` preview for core install
3. custom install with `--components`
4. install with docs enabled
5. install with docs disabled
6. `doctor` against core and custom installs
7. `update --plan` against an existing custom install
8. override folder scaffold verification
9. `npm pack --json`
10. `npm publish --dry-run`
11. install from the packed tarball into a clean sample project
12. `npx business-os install` from the tarball package
13. `npx business-os doctor` after tarball-based install

## Results

- interactive and noninteractive install paths work
- `core`, `full`, and `custom` profiles resolve correctly
- `business-os-router` is always included in installed skill/command sets
- `.business-os/_cfg` is scaffolded and preserved
- `--plan` shows file-action summaries before writes
- `docs/.npmignore` and `docs/deprecated/` stay out of the published package
- tarball install works through `npx business-os`

## Notes

- local npm commands used a temp cache under `/tmp` because the default npm cache had stale permissions
- `npm publish --dry-run` still requires npm login state, which is expected
- actual `npm publish` and real post-publish internet validation were not run here
