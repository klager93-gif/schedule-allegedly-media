/*
Signal Schedule File: schedule/repositories/SeniorityEngineRepository.js
Version: v5.15.4
Purpose: Repository boundary for Seniority Engine preview data.
*/
export class SeniorityEngineRepository {
  constructor(adapter) {
    this.adapter = adapter;
  }

  async getPreview() {
    return this.adapter.read();
  }
}
