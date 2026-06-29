# Signal Schedule v6.2.0 Database Schema Draft

This is a planning document only. Do not apply it to production until the v6.2 backend/database migration is started.

## Platform Choice Pending

The app can use either:

- PHP + MySQL/MariaDB
- Node + Postgres/MySQL

For Signal Schedule, MySQL/MariaDB is likely sufficient and simpler to operate in Coolify.

## Migration Principle

1. Keep frontend static until v6.2.
2. Add database and backend only when authentication and persistence begin.
3. Preserve clean URL aliases.
4. Keep public routes separate from API routes.
