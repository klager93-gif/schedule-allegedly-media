# Schedule File Organization

As of the standalone v5.1.0 migration, public Schedule HTML pages live at the repository root so the product can deploy directly at `schedule.allegedly-media.com`. Page-specific CSS and JS support files are grouped under `/pages/` by module.

## Page support folders

- `/pages/calendar/`
- `/pages/coverage/`
- `/pages/people/`
- `/pages/requests/`
- `/pages/rules/`
- `/pages/settings/`
- `/pages/workspace/`

## Files intentionally kept at repository root

- Public HTML pages
- `app-shell.css`
- `app-shell.js`
- project documentation

## Removed legacy files

- `style.css`
- `script.js`
- `footer.css`
- `schedule-nav.css`

These were removed because the Schedule desktop UI is now controlled by `app-shell.css` and `app-shell.js`.
