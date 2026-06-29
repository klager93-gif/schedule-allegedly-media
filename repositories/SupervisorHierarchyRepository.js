/*
Signal Schedule
Area: Signal Schedule
File: schedule/repositories/SupervisorHierarchyRepository.js
Version: v6.2.0
Purpose: Repository boundary for supervisor hierarchy data
*/
import { fetchSupervisorHierarchyPreview } from '../adapters/JsonSupervisorHierarchyAdapter.js';
export async function listSupervisorHierarchyPreview() { return fetchSupervisorHierarchyPreview(); }
