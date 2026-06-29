/*
Signal Schedule
Area: Signal Schedule
File: schedule/repositories/ShiftTradeRepository.js
Version: v5.16.2
Purpose: Repository layer for Shift Trades & Swap Requests
*/
import { readShiftTrades } from '../adapters/JsonShiftTradeAdapter.js';

export async function getShiftTradePreview() {
  return readShiftTrades();
}
