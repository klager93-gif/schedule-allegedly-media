/*
Signal Schedule
Area: Signal Schedule
File: schedule/repositories/EmployeeAvailabilityPreferencesRepository.js
Version: v5.18.0
Purpose: Repository boundary for employee availability, preferences, restrictions, and reusable view group filters.
*/
export class EmployeeAvailabilityPreferencesRepository {
  constructor(adapter) {
    this.adapter = adapter;
  }

  listAvailabilityPreferences() {
    return this.adapter.list();
  }
}
