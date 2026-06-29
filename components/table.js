/*
Signal Schedule
Area: Signal Schedule
File: schedule/components/table.js
Version: v6.1.0
Purpose: Reusable dense table metadata helpers.
*/
export const tableComponentVersion = "v6.1.0";
export function tableColumn(key, label, options = {}) { return { key, label, ...options }; }
