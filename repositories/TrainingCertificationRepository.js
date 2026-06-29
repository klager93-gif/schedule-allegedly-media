/*
Signal Schedule
Area: Signal Schedule
File: schedule/repositories/TrainingCertificationRepository.js
Version: v6.1.0
Purpose: Repository facade for Training & Certifications data
*/
import { getTrainingCertificationPreview } from '../adapters/JsonTrainingCertificationAdapter.js';

export async function getPreview() {
  return getTrainingCertificationPreview();
}
