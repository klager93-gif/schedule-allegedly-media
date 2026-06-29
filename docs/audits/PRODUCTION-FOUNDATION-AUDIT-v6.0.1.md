# Signal Schedule v6.1.0 — Production Foundation Audit

## Scope

v6.1.0 is a static/frontend-only stabilization release for the v6 production foundation.

## Fixes verified

- `/agency/`, `/users/`, and `/roles/` now exist as clean URL alias folders with `index.html` files.
- Administration navigation includes Agency Setup, Users, and Roles & Permissions in the shared navigation registry.
- Route registry now resolves production admin routes to clean aliases instead of only legacy physical paths.
- Version/cache markers are updated to `v6.1.0`.
- No PHP, MySQL, session storage, or Coolify configuration changes are required for this release.

## Deferred server work

Real authentication, persistent users, agency records, role enforcement, and audit log storage remain backend/database work for the later v6.2+ integration phase.
