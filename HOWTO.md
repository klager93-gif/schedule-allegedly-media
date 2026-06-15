# Signal Schedule HOWTO

Deploy as a static site from repository root. Keep `index.html` at root and feature pages under `/pages/`. Use the route registry for links. Do not restore the old `/employee/` root folder; employee portal routes now live under `/pages/employee/`.

## v5.8.0 Notes

Leave bank pages are still foundation/pre-database. Use sample data in `/data/leave-banks-preview.json` and the preview SQL in `/sql/058_leave_banks_foundation.sql` for planning only.
