/*
Signal Schedule
Area: Signal Schedule
File: assets/config.js
Version: v6.1.0
Purpose: Default standalone configuration registry before live agency settings are wired to persistence.
*/
window.SIGNAL_SCHEDULE_CONFIG = Object.freeze({
  agencyDefaults: Object.freeze({
    timezone: 'America/Chicago',
    weekStartsOn: 'Sunday',
    timeFormat: '24-hour',
    payPeriodLengthDays: 14,
    requestIncrementMinutes: 15,
    calendarDayStartTime: '05:00',
    calendarDayEndTime: '04:59',
    defaultCalendarView: 'Week',
    defaultCalendarLayers: ['employees', 'requests', 'training', 'overtime', 'coverage', 'posts', 'vacancies', 'annotations']
  }),
  deployment: Object.freeze({
    mode: 'standalone-static',
    domain: 'https://schedule.allegedly-media.com',
    databaseMode: 'not-connected'
  })
});
