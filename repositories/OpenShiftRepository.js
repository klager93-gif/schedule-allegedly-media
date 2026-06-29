/*
Signal Schedule File: schedule/repositories/OpenShiftRepository.js
Version: v6.1.1
Purpose: Repository boundary for Open Shifts / VOT Foundation preview data.
*/
export class OpenShiftRepository {
  constructor(adapter) {
    this.adapter = adapter;
  }

  async listOpenShiftPreview() {
    return this.adapter.readOpenShiftPreview();
  }
}
