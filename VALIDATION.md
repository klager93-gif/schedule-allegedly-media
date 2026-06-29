# Validation — v6.2.0

## Static routes to validate before backend cutover

- `/dashboard/`
- `/calendar/`
- `/schedule/`
- `/employees/`
- `/leave/`
- `/users/`
- `/roles/`
- `/developer/ui-catalog/`

## Backend validation after Node/Postgres setup

- `GET /api/health` returns status and database status.
- Prisma can connect to Postgres using `DATABASE_URL`.
- Initial schema migration can run.
- Demo seed can run in non-production/test environment.
- `POST /api/auth/login` responds with user data for seeded user.
- `GET /api/agencies`, `/api/users`, and `/api/roles` return JSON.
