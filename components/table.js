/*
Signal Labs
Area: Signal Schedule
File: schedule/components/table.js
Version: v5.14.2
Purpose: Reusable dense table metadata helpers.
*/
export const tableComponentVersion = "v5.14.2";
export function tableColumn(key, label, options = {}) { return { key, label, ...options }; }
