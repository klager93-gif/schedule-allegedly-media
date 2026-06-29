/*
Signal Schedule
Area: Signal Schedule
File: schedule/adapters/JsonDailyBoardAdapter.js
Version: v5.17.2
Purpose: JSON adapter for Daily Schedule Board preview data
*/
export async function fetchDailyBoardPreview() {
  const response = await fetch('/data/daily-board-preview.json', { cache: 'no-store' });
  if (!response.ok) throw new Error(`Unable to load daily board preview: ${response.status}`);
  return response.json();
}
