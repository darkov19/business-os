# Business OS Package Validation v0.2.0

Status: Verified locally
Package version: `0.2.0`

---

## Checks Run

1. CLI help output
2. noninteractive install with `--yes`
3. interactive install in a PTY
4. install with docs enabled
5. install with docs disabled
6. `doctor` against local source installs
7. `update --dry-run` against an existing install
8. `npm pack --json --pack-destination /tmp/business-os-pack`
9. `npm publish --dry-run`
10. install from the packed tarball into a clean sample project
11. `npx business-os install` from the installed tarball package
12. `npx business-os doctor` after tarball-based install

## Results

- interactive installer flow works end-to-end
- `core` and `full` profiles both work
- manifest writes correctly even when docs are not installed
- packaged tarball contains active docs, skills, and commands
- `docs/deprecated/` is excluded from the published tarball
- package bin entry is valid for npm publish
- tarball install works through `npx business-os`

## Notes

- local `npm` commands required a temp cache because the default user cache had stale permissions
- publish dry-run still warns that login is required, which is expected without npm auth
- actual `npm publish` was not attempted
