/*
Signal Schedule
Area: Signal Schedule
File: schedule/adapters/JsonShiftTradeAdapter.js
Version: v6.1.0
Purpose: JSON preview adapter for Shift Trades & Swap Requests
*/
export async function readShiftTrades() {
  const response = await fetch('/data/shift-trades-preview.json?v=6.1.0', { cache: 'no-store' });
  if (!response.ok) {
    throw new Error(`Unable to load shift trade preview data: ${response.status}`);
  }
  return response.json();
}
