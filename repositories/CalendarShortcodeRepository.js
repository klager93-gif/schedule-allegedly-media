/*
Signal Schedule
Area: Signal Schedule
File: schedule/repositories/CalendarShortcodeRepository.js
Version: v5.15.5
Purpose: Repository boundary for Calendar Shortcode Admin Controls
*/
import { getCalendarShortcodesPreview } from '../adapters/JsonCalendarShortcodeAdapter.js';

export async function getCalendarShortcodesDashboard() {
  return getCalendarShortcodesPreview();
}
