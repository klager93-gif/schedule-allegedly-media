/*
Signal Schedule
Area: Signal Schedule
File: schedule/repositories/BenefitLedgerRepository.js
Version: v5.15.4
Purpose: Repository boundary for benefit balances, impacts, adjustments, and shortcodes
*/
import { getBenefitLedgerPreview } from '../adapters/JsonBenefitLedgerAdapter.js';

export async function getLedger() {
  return getBenefitLedgerPreview();
}
