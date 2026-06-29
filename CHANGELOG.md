# v6.1.0 — Repository Architecture & Data Contracts

- Restored clean-root architecture by removing physical top-level alias folders.
- Preserved public clean URLs with `_redirects` rewrite rules.
- Added data contracts, API contract draft, and database schema draft.
- Added server/database readiness note for v6.2.0.

# Changelog

## v6.1.0 — Production Foundation Audit & Setup Polish

- Added physical clean URL alias folders for `/agency/`, `/users/`, and `/roles/`.
- Updated the central route registry to use clean production administration routes.
- Updated the grouped navigation registry to include Agency Setup, Users, and Roles & Permissions.
- Added production foundation audit documentation.
- Updated version/cache markers to `v6.1.0`.
- Confirmed no Coolify, PHP, MySQL, or server changes are required for this static release.

## v6.0.0 — Production Ready Foundation

- Added production readiness foundation, identity, agency, users, roles, and server/database planning surfaces.
