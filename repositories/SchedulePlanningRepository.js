/*
Signal Schedule
Area: Signal Schedule
File: schedule/repositories/SchedulePlanningRepository.js
Version: v6.0.1
Purpose: Repository boundary for schedule planning and forecast horizon data.
*/
export class SchedulePlanningRepository {
  constructor(adapter) {
    this.adapter = adapter;
  }

  listPlanningForecast() {
    return this.adapter.list();
  }
}
