/*
Signal Schedule
Area: Signal Schedule
File: schedule/components/table.js
Version: v5.17.0
Purpose: Reusable dense table metadata helpers.
*/
export const tableComponentVersion = "v5.17.0";
export function tableColumn(key, label, options = {}) { return { key, label, ...options }; }
