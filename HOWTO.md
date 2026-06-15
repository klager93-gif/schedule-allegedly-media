# Signal Schedule v5.1.0 HOWTO

## Before uploading

Back up the current live Schedule folder.

```text
2026-06-14 Schedule Backup Before v5.1.0
```

## Upload

Upload the full replacement package.

## Apply migration 045

From `psql`, run the SQL file:

```sql
\i /app/api/coolify/sql/045_employee_experience_data_tools_schema.sql
```

If the migration tracker does not update automatically, add the row manually:

```sql
INSERT INTO schema_migrations (version, name)
VALUES ('045', 'employee_experience_data_tools_schema')
ON CONFLICT DO NOTHING;
```

Verify:

```sql
SELECT *
FROM schema_migrations
ORDER BY version DESC
LIMIT 10;
```

Expected top row:

```text
045 | employee_experience_data_tools_schema
```

## Test pages

- `/data-tools.html`
- `/employee/index.html`
- `/employee/calendar.html`
- `/employee/requests.html`
- `/employee/profile.html`
- `/history.html`

## Postgres pager

If Postgres shows `--More--`, run:

```sql
\pset pager off
```
