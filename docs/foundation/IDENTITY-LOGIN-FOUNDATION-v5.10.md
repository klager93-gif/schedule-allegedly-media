# Signal Schedule v5.14.2 — Visibility & View Engine

This release adds the first-login and current-user foundation for future multi-user Schedule access.

## Scope

- Login page foundation
- Current user/session preview
- Role-aware app-shell links
- Identity routes in the route registry
- Identity navigation group
- Preview data for a City of Fairview setup-pending administrator

## Database Naming Contract

Identity uses the existing core tables:

- `users`
- `roles`
- `user_roles`
- `role_permissions`
- `employees`

These remain unprefixed platform identity tables. Schedule module tables remain `schedule_*`.

## Deferred

- Password hashing
- Token/session storage
- Backend auth middleware
- API route protection
- Password reset delivery
- Invite email delivery
- SSO

## Customer setup model

A customer such as City of Fairview should receive a primary administrator login. On first login, the user should enter agency setup pending mode until the setup wizard is completed.
