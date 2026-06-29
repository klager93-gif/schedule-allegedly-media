# Signal Schedule v6.1.1 Validation Checklist

## Clean root

- Confirm physical top-level alias folders were removed: `/schedule/`, `/employees/`, `/agency/`, `/users/`, `/roles/`, etc.
- Confirm root keeps only infrastructure and long-lived app folders.

## Clean URLs

Validate these routes after deployment:

- `/dashboard/`
- `/schedule/`
- `/employees/`
- `/leave/`
- `/requests/`
- `/agency/`
- `/users/`
- `/roles/`
- `/developer/ui-catalog/`

## Legacy paths

- Confirm old physical paths redirect to clean URLs.

## Server

- No Coolify/PHP/MySQL change should be needed for this build.
