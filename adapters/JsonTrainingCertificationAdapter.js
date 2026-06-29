/*
Signal Schedule
Area: Signal Schedule
File: schedule/adapters/JsonTrainingCertificationAdapter.js
Version: v6.1.1
Purpose: JSON adapter for Training & Certifications preview data
*/
export async function getTrainingCertificationPreview() {
  const response = await fetch('/data/training-certifications-preview.json', { cache: 'no-store' });
  if (!response.ok) {
    throw new Error(`Unable to load training certification preview data: ${response.status}`);
  }
  return response.json();
}
