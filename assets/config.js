/*
Signal Labs
Area: Signal Schedule
File: assets/config.js
Version: v5.11.0
Purpose: Default standalone configuration registry before live agency settings are wired to persistence.
*/
window.SIGNAL_SCHEDULE_CONFIG = Object.freeze({
  agencyDefaults: Object.freeze({
    timezone: 'America/Chicago',
    weekStartsOn: 'Sunday',
    timeFormat: '24-hour',
    payPeriodLengthDays: 14,
    requestIncrementMinutes: 15
  }),
  deployment: Object.freeze({
    mode: 'standalone-static',
    domain: 'https://schedule.allegedly-media.com',
    databaseMode: 'not-connected'
  })
});
