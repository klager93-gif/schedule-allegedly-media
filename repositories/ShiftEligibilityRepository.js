/*
Signal Schedule
Area: Signal Schedule
File: schedule/repositories/ShiftEligibilityRepository.js
Version: v5.15.1
Purpose: Repository facade for Qualification & Eligibility Engine data
*/
import { getShiftEligibilityPreview } from '../adapters/JsonShiftEligibilityAdapter.js';

export async function getPreview() {
  return getShiftEligibilityPreview();
}
