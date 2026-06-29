/*
Signal Schedule
Area: Signal Schedule
File: assets/roles.js
Version: v6.2.0
Purpose: Role registry for future employee, supervisor, scheduler, and admin access surfaces.
*/
window.SIGNAL_SCHEDULE_ROLES = Object.freeze({
  employee: Object.freeze({ label: 'Employee', inherits: [] }),
  supervisor: Object.freeze({ label: 'Supervisor', inherits: ['employee'] }),
  scheduler: Object.freeze({ label: 'Scheduler', inherits: ['employee', 'supervisor'] }),
  admin: Object.freeze({ label: 'Administrator', inherits: ['employee', 'supervisor', 'scheduler'] })
});
