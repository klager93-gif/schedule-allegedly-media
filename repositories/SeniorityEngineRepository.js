/*
Signal Schedule File: schedule/repositories/SeniorityEngineRepository.js
Version: v6.0.1
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
