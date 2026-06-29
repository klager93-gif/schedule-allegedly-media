/*
Signal Schedule
Area: Signal Schedule
File: schedule/repositories/EmployeeProfileRepository.js
Version: v5.17.1
Purpose: Repository boundary for employee profile self-service data
*/
import { fetchEmployeeProfilePreview } from '../adapters/JsonEmployeeProfileAdapter.js';
export async function listEmployeeProfilePreview() { return fetchEmployeeProfilePreview(); }
