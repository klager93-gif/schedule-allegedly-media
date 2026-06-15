# Signal Schedule HOWTO

Deploy as a static site from repository root. Keep `index.html` at root and feature pages under `/pages/`. Use the route registry for links. Do not restore the old `/employee/` root folder; employee portal routes now live under `/pages/employee/`.


## v5.7.0 Notes

- Navigation cleanup: Me is now My Schedule and duplicate nav entries were removed.
- Data path cleanup: moved pages use root-safe `/data/` JSON paths.
- Request foundation: request types, statuses, reasons, increments, hours, overrides, and history are documented for the v6 Request Engine.
