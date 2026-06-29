/*
Signal Schedule
Area: Signal Schedule
File: schedule/repositories/ShiftTradeRepository.js
Version: v5.17.0
Purpose: Repository layer for Shift Trades & Swap Requests
*/
import { readShiftTrades } from '../adapters/JsonShiftTradeAdapter.js';

export async function getShiftTradePreview() {
  return readShiftTrades();
}
