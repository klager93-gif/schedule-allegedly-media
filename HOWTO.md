# Signal Schedule HOWTO

## Deploying v5.4.0

1. Back up the current live repo folder.
2. Copy the package contents into the root of `schedule-allegedly-media`.
3. Do not copy or replace `.git/`.
4. Commit and push to `main`.
5. Coolify deploys the static site.

## Release validation

Before pushing, verify:

- footer/header/homepage version metadata
- cache-busting values
- `LATEST_RELEASE.md`
- changelog top entries
- no macOS metadata files
- no missing local links or imports
