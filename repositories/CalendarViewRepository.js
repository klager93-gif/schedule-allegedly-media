/*
Signal Schedule
Area: Signal Schedule
File: schedule/repositories/CalendarViewRepository.js
Version: v5.15.5
Purpose: Repository boundary for calendar view data
*/
import { getCalendarViewPreview } from '../adapters/JsonCalendarViewAdapter.js';

export async function readCalendarViewPreview() {
  return getCalendarViewPreview();
}
