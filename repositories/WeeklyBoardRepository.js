/*
Signal Schedule
Area: Signal Schedule
File: schedule/repositories/WeeklyBoardRepository.js
Version: v5.17.2
Purpose: Repository boundary for Weekly Schedule View data
*/
import { fetchWeeklyBoardPreview } from '../adapters/JsonWeeklyBoardAdapter.js';
export async function listWeeklyBoardPreview() { return fetchWeeklyBoardPreview(); }
