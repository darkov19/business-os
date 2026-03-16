# Business OS Publish Flow

Status: Active
Purpose: Define the release path for making `npx business-os install` available.

---

## 1. Preconditions

Before publishing:

- package version is updated in [package.json](/home/darko/Code/chitr/package.json)
- release note exists, such as [business-os-release-v0.2.0.md](/home/darko/Code/chitr/docs/business-os-release-v0.2.0.md)
- `npm pack --json` succeeds
- `npm publish --dry-run` succeeds
- install from the generated tarball succeeds in a clean sample project
- git tag exists for the release version

## 2. Package Name Check

The current package name is `business-os`.

Before public publish, confirm the npm name is actually available. If it is not:

- switch to a scoped package such as `@chitr/business-os`
- update examples accordingly
- repack and revalidate before publish

## 3. Local Validation Flow

Run:

```bash
npm pack --json --pack-destination /tmp/business-os-pack
npm publish --dry-run
tar -tf /tmp/business-os-pack/business-os-0.2.0.tgz | head -n 50
```

Then test install from tarball:

```bash
mkdir -p /tmp/business-os-install-test
cd /tmp/business-os-install-test
npm init -y
npm install /tmp/business-os-pack/business-os-0.2.0.tgz
npx business-os install --yes --project /tmp/business-os-install-test
```

## 4. Release Tag Flow

Recommended sequence:

```bash
git status
git tag business-os-v0.2.0
git push origin main
git push origin business-os-v0.2.0
```

If you publish from GitHub Actions, tag push should be the release trigger.

## 5. Manual Publish Flow

If publishing manually:

```bash
npm login
npm publish
```

After publish, verify:

```bash
npx business-os@0.2.0 --help
npx business-os@0.2.0 install --yes --project /tmp/business-os-postpublish
```

## 6. CI Publish Flow

Use a tag-triggered workflow with:

- `NODE_AUTH_TOKEN` from `NPM_TOKEN`
- `npm publish`
- optional pack validation before publish

The workflow template lives in [npm-publish.yml](/home/darko/Code/chitr/.github/workflows/npm-publish.yml).

## 7. Post-Publish Checks

After a successful publish:

- verify `npx business-os install` resolves correctly
- verify Codex skills land in `.agents/skills`
- verify Claude commands land in `.claude/commands`
- verify `.business-os/install-manifest.json` has the expected version and profile
- update the next release note target
