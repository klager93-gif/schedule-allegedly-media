/*
Signal Schedule File: schedule/repositories/ConflictDetectionRepository.js
Version: v5.18.0
Purpose: Repository boundary for Conflict Detection preview data.
*/
export class ConflictDetectionRepository {
  constructor(adapter) {
    this.adapter = adapter;
  }

  async getPreview() {
    return this.adapter.read();
  }
}
