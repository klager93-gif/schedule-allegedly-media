# Build Manifest — Signal Schedule v5.3.0

## Release

Signal Schedule v5.3.0 — Metadata Stability & Validation

## Key changes

- Added `assets/release-metadata.js` as a central client-side release metadata source.
- Updated `app-shell.js` to consume shared metadata and default to v5.3.0.
- Updated footer component default metadata to v5.3.0.
- Refreshed HTML cache-busting and data-version markers to v5.3.0.
- Added metadata validation documentation.
- Updated standards to require footer/header/version metadata checks before release.

## Validation

- No macOS metadata files included.
- No missing local HTML links found.
- No missing JavaScript imports found.
- Footer/header/homepage metadata checked.
- No database migration required.
