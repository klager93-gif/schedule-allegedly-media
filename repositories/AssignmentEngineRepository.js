/*
Signal Schedule
Area: Signal Schedule
File: schedule/repositories/AssignmentEngineRepository.js
Version: v5.17.2
Purpose: Repository boundary for Assignment Engine preview data
*/
import { fetchAssignmentEnginePreview } from '../adapters/JsonAssignmentEngineAdapter.js';

export async function listAssignmentEnginePreview() {
  return fetchAssignmentEnginePreview();
}
