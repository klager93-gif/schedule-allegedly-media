/*
Signal Schedule
Area: Signal Schedule
File: schedule/repositories/CalendarViewRepository.js
Version: v5.14.3
Purpose: Repository boundary for calendar view data
*/
import { getCalendarViewPreview } from '../adapters/JsonCalendarViewAdapter.js';

export async function readCalendarViewPreview() {
  return getCalendarViewPreview();
}
