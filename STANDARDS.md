# Signal Labs Standards v2.1

**Philosophy:** Useful tools without the noise.  
**Operating rule:** Files do not lie.

This file is the authoritative standards copy for the standalone Signal Schedule repository.

## 1. Development Standards

- Foundation before features.
- Build complete systems, not demos.
- Preserve existing behavior unless the release explicitly changes it.
- Do not change calculator math, scheduling rules, or business logic during documentation or integrity releases.
- When a bug check is requested, continue checking the rest of the project after finding the first issue.

## 2. Repository Standards

### Monorepo Boundary Rule

Signal Schedule now deploys from a standalone repository. The repository root owns Schedule pages, app shell assets, documentation, API contracts, adapters, repositories, services, data, and SQL migrations.

Standalone Schedule-owned areas include:

```text
/
/assets/
/components/
/pages/
/api/
/adapters/
/repositories/
/services/
/data/
/sql/
/standards/
```

Root files are expected in this repository because Schedule is no longer embedded under `/schedule/` in the tools monorepo.

### Repo-Ready Module Rule

Each major tool should be maintained as if it could become a separate repository later. Schedule-specific infrastructure, docs, data, APIs, adapters, mocks, and migration files belong inside this standalone repository.

### Root Clutter Rule

New Schedule folders, backend components, APIs, functions, and infrastructure files may live in this repository when they belong to Signal Schedule and are documented in release notes.

## 3. Release Standards

- Always provide a backup reminder before upload.
- Always provide a copy-paste backup folder name.
- Always provide a GitHub-ready release title and description.
- Include complete files, not fragments.
- Avoid burning a new version number if the package was not uploaded or released.
- Multi-tool releases must clearly list which tool versions are included.

## 4. Documentation Standards

Every major tool should eventually maintain:

```text
README.md
ROADMAP.md
CHANGELOG.md
HOWTO.md
```

Documentation must have one clear current version and one clear next version. Do not duplicate release entries or conflicting current-version blocks.

## 5. Component Standards

### Global Change Rule

Changes to shared files are system-wide dependency changes:

```text
assets/global.css
assets/global.js
assets/components/header.js
assets/components/footer.js
assets/icons/*
```

When any shared asset changes, identify affected pages, update references consistently, and include all affected files in the release.

## 6. Backend Portability Standard

No UI or business logic may depend directly on D1, Workers, MySQL, PHP, Postgres, or any single backend. Persistence must go through service/repository/adapter boundaries so the backend can be replaced later with minimal changes.

Required architecture boundary:

```text
UI
  ↓
Services
  ↓
Repositories
  ↓
Adapters
  ↓
Backend
```

## 7. Rule 26 — Asset Validation

Before packaging any whole-site or multi-tool release, validate that every referenced asset exists. Check that HTML references resolve to actual CSS, JS, image, icon, manifest, and component files. Fail the build if any referenced asset is missing.

## 8. Repository Integrity Audit

Before a full fresh install, coordinated recovery release, or multi-tool package, run these checks:

1. Tool folders exist and no tool files are misplaced in root.
2. Shared asset references resolve consistently.
3. Cross-tool references are intentional.
4. Every major tool has or is moving toward README, ROADMAP, CHANGELOG, and HOWTO.
5. Navigation links and static page links resolve.
6. Junk files such as `.git/`, `__MACOSX/`, and `._*` are excluded from upload packages.

## 9. Nuclear Option

After two failed hotfixes for the same release path, stop patching and rebuild from the last known good package with a full audit before release.


## Database Migration Discipline

Schedule database migrations must be tracked in `schema_migrations`. Migration numbers should remain sequential whenever practical. Every migration should end with an idempotent insert into `schema_migrations` using `ON CONFLICT DO NOTHING`.


## Release File Standard — No Persistent Per-Version Release Files

Do not accumulate `RELEASE-vX.X.X*.md` files in the repository. Historical release details belong in changelogs and GitHub release/commit history. The repository should keep one current release summary at `schedule/docs/releases/LATEST_RELEASE.md`, overwritten each release.

## Release File Standard

Persistent per-version `RELEASE-v*.md` files should not accumulate in the repository. Use `schedule/docs/releases/LATEST_RELEASE.md` for the current Schedule release summary and keep historical release details in changelogs and GitHub releases.

### Footer and Metadata Validation Rule

Before every release, validate footer version, header version, homepage metadata, release status, cache-busting values, `LATEST_RELEASE.md` when present, README version references, CHANGELOG top entry, PUBLIC_CHANGELOG, ADMIN_CHANGELOG, app-shell metadata, and any shared footer/header components.

Every release validation pass must include:

```text
Version validation
Footer validation
Header validation
Manifest regeneration
Link validation
JavaScript import validation
macOS metadata validation
Route validation
```

Cosmetic metadata drift does not require an emergency hotfix, but it must be corrected in the next natural release.


## Registry First Rule

When changing shared release metadata, navigation, route paths, feature flags, roles, status labels, or default configuration, update the relevant registry file first.

Registry files currently include:

- `assets/release-metadata.js`
- `assets/routes.js`
- `assets/navigation.js`
- `assets/config.js`
- `assets/features.js`
- `assets/roles.js`
- `assets/status.js`

Do not hardcode new shared navigation or metadata in individual pages unless there is a documented reason.
