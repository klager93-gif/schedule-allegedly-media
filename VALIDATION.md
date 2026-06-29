# Validation — Signal Schedule v5.15.4

Date: 2026-06-29

## Automated Checks Completed

- Replaced v5.15.3 cache/version markers with v5.15.4.
- Rebuilt `pages/admin/ui-catalog.html` using the dashboard-reference shell.
- Confirmed `pages/admin/ui-catalog.html` no longer references `app-shell.css` or `foundation-admin.css`.
- Ran local HTML asset/link scan against absolute local `href` and `src` references: **0 missing files**.
- Searched repository for remaining `5.15.3` markers: **0 found**.
- Regenerated `FILEMANIFEST.md`, `FILEMANIFEST.generated.txt`, and `SHA256SUMS.txt`.

## Manual Browser Checks To Run After Deploy

- Open `/index.html` and confirm the working dashboard still loads.
- Open `/pages/admin/dashboard-reference.html` and confirm the preserved reference still loads.
- Open `/pages/admin/ui-catalog.html` and confirm it now visually matches the dashboard-reference shell.
- Check responsive behavior at desktop, laptop, and mobile widths.
- Confirm sidebar anchors in the UI Catalog scroll to catalog sections.
- Confirm footer/release text displays v5.15.4.

## Coolify / Server

No Coolify/server action required beyond normal deployment.
