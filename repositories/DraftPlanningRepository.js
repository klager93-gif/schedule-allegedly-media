/*
Signal Schedule
Area: Signal Schedule
File: schedule/repositories/DraftPlanningRepository.js
Version: v6.2.0
Purpose: Repository boundary for draft planning data.
*/
export class DraftPlanningRepository {
  constructor(adapter) {
    this.adapter = adapter;
  }

  listDraftPlanning() {
    return this.adapter.list();
  }
}
