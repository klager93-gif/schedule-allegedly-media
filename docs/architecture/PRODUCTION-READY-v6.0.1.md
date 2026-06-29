# Signal Schedule v6.1.0 — Production Ready Foundation

This release establishes the production-readiness surface for authentication, users, roles, agency setup, imports, exports, and persistence planning.

## Server / database status

This build remains static and does not require Coolify, PHP, MySQL, or container configuration changes.

Real login, sessions, user management, agency persistence, role enforcement, audit retention, imports, exports, and schedule persistence will require server-side work. The recommended next infrastructure step is to decide the backend stack and provision a database-backed API.

## Included in this release

- Login foundation
- Agency setup route
- Users and roles navigation
- Production readiness data contract
- Import/export planning
- Persistent data migration notes
- v6.0 validation checklist

## Next server milestone

Before true production use, add:

- MySQL/PostgreSQL database
- Backend API layer
- Session storage
- Password hashing
- Role and permission enforcement
- Audit log persistence
- Backup strategy


## v6.1.0 stabilization addendum

This release keeps Signal Schedule static-deployable while tightening the production foundation. Clean aliases for Agency Setup, Users, and Roles & Permissions now exist as physical alias folders, and the shared route/navigation registries were updated so production administration pages are reachable without legacy `/pages/...` paths.
