# Signal Schedule v5.3.0 HOWTO

## Before uploading

Back up the current live Schedule folder.

```text
2026-06-15 Signal Schedule Backup Before v5.3.0
```

## Upload/deploy

Replace the standalone repository contents with the v5.3.0 package, commit, push to `main`, and allow Coolify to redeploy.

## Coolify static settings

- Static site: enabled
- Base directory: `/`
- Publish directory: `.`
- Build command: empty
- Start command: empty

## Database

No database migration is required for v5.3.0.

## Test pages

- `/`
- `/requests.html`
- `/staffing-engine.html`
- `/data-tools.html`
- `/employee/index.html`

## Metadata validation

Confirm the footer, app toolbar, homepage release block, README, changelog, and cache-busting references show v5.3.0.
