# Signal Schedule v6.1.0 API Contract Draft

## Auth
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET /api/auth/session`

## Agency
- `GET /api/agencies/current`
- `PATCH /api/agencies/current`

## Users / Roles
- `GET /api/users`
- `POST /api/users`
- `PATCH /api/users/{id}`
- `GET /api/roles`
- `PATCH /api/users/{id}/roles`

## Employees
- `GET /api/employees`
- `POST /api/employees`
- `GET /api/employees/{id}`
- `PATCH /api/employees/{id}`

## Scheduling
- `GET /api/schedules`
- `POST /api/schedules`
- `GET /api/schedules/{id}`
- `POST /api/schedules/{id}/assignments`
- `PATCH /api/assignments/{id}`
- `POST /api/schedules/{id}/validate`

## Leave / Requests
- `GET /api/leave/requests`
- `POST /api/leave/requests`
- `POST /api/leave/requests/{id}/approve`
- `POST /api/leave/requests/{id}/deny`

## Trades / Mandation
- `GET /api/trades`
- `POST /api/trades`
- `POST /api/trades/{id}/approve`
- `GET /api/mandation/actions`
- `POST /api/mandation/actions`

## Publishing / Audit
- `POST /api/schedules/{id}/publish`
- `POST /api/schedules/{id}/rollback`
- `GET /api/audit`

## v6.2 Implementation Note

These are contracts only in v6.1.0. Real endpoints begin in v6.2 and will require server/database work.
