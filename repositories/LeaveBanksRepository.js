/*
Signal Schedule
Area: Signal Schedule
File: schedule/repositories/LeaveBanksRepository.js
Version: v5.17.2
Purpose: Repository boundary for Leave Banks Foundation
*/
import { fetchLeaveBanksPreview } from '../adapters/JsonLeaveBanksAdapter.js';

export async function getLeaveBanksPreview() {
  return fetchLeaveBanksPreview();
}
