/*
Signal Labs
Area: Signal Schedule
File: assets/status.js
Version: v5.13.0
Purpose: Shared status labels for pages, modules, and roadmap surfaces.
*/
window.SIGNAL_SCHEDULE_STATUSES = Object.freeze({
  foundation: Object.freeze({ label: 'Foundation', description: 'Architecture or UI foundation is present but not production-complete.' }),
  alpha: Object.freeze({ label: 'Alpha', description: 'Feature is connected enough for internal testing.' }),
  beta: Object.freeze({ label: 'Beta', description: 'Feature is testable with realistic workflows.' }),
  complete: Object.freeze({ label: 'Complete', description: 'Feature is production-ready for supported scope.' }),
  planned: Object.freeze({ label: 'Planned', description: 'Feature is intentionally staged for a future release.' })
});
