# Signal Schedule v5.11.0 — Database Naming Contract

## Purpose

Signal Schedule now treats database naming as a formal contract so code, docs, and migration planning use the tables that actually exist.

## Core identity tables are unprefixed

These tables are platform identity objects and should not be assumed to use a `schedule_` prefix:

- `employees`
- `users`
- `roles`
- `user_roles`
- `role_permissions`

Do not reference `schedule_employees`, `schedule_users`, or `schedule_roles` unless a future migration explicitly creates them.

## Schedule module tables are prefixed

Schedule-specific functional tables should use the `schedule_` prefix, for example:

- `schedule_request_cases`
- `schedule_request_decisions`
- `schedule_leave_bank_balances`
- `schedule_posts`
- `schedule_published_versions`
- `schedule_ot_opportunities`

## Tenant rule

Agency-owned data should carry an agency/tenant identifier where applicable. For the future hosted product, City of Fairview is an agency/tenant row, not a separate database by default.

## Validation rule

Before a backend-dependent release, search code and docs for stale assumptions such as `schedule_employees` and verify against the live table list.
