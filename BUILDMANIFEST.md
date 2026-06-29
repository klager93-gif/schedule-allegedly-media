# Build Manifest — Signal Schedule v5.15.4

Generated: 2026-06-29

## Release Focus

Dashboard UI Catalog rebuild. The internal UI Catalog now matches the preserved dashboard reference design and becomes the implementation source for future page migrations.

## Key Changes

- Rebuilt `pages/admin/ui-catalog.html` from the dashboard-reference shell.
- Catalog now loads `/assets/dashboard.css?v=5.15.4` instead of the legacy app shell/foundation-admin CSS pair.
- Added dashboard-native catalog sections for foundations, metric cards, buttons, command bars, cards, alerts, empty states, forms, tables, badges, modal preview, and usage rules.
- Added catalog-specific classes to `assets/dashboard.css`.
- Updated release metadata and cache markers to v5.15.4.

## Key Validation

- Root dashboard remains working app entry.
- Dashboard reference remains preserved separately.
- UI Catalog uses the new dashboard shell and styling.
- Internal HTML asset/link scan passed with zero missing local references.
- No remaining v5.15.3 markers found.

## Coolify / Server

No server, environment, volume, or Coolify configuration changes are required.
