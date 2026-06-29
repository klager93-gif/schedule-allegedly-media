/*
Signal Schedule
Area: Signal Schedule
File: schedule/repositories/OtVolunteerBoardRepository.js
Version: v5.15.6
Purpose: Repository boundary for OT Volunteer Board Foundation
*/
import { fetchOtVolunteerBoardPreview } from '../adapters/JsonOtVolunteerBoardAdapter.js';

export async function getOtVolunteerBoardPreview() {
  return fetchOtVolunteerBoardPreview();
}
