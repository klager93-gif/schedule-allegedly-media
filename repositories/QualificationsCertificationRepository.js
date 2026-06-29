/*
Signal Schedule File: schedule/repositories/QualificationsCertificationRepository.js
Version: v5.16.2
Purpose: Repository boundary for Qualifications & Certification Engine preview data.
*/
export class QualificationsCertificationRepository {
  constructor(adapter) {
    this.adapter = adapter;
  }

  async getPreview() {
    return this.adapter.read();
  }
}
