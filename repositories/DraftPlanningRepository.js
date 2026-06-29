/*
Signal Schedule
Area: Signal Schedule
File: schedule/repositories/DraftPlanningRepository.js
Version: v5.15.5
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
