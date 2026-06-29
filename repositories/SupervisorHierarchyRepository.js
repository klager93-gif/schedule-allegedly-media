/*
Signal Schedule
Area: Signal Schedule
File: schedule/repositories/SupervisorHierarchyRepository.js
Version: v5.15.6
Purpose: Repository boundary for supervisor hierarchy data
*/
import { fetchSupervisorHierarchyPreview } from '../adapters/JsonSupervisorHierarchyAdapter.js';
export async function listSupervisorHierarchyPreview() { return fetchSupervisorHierarchyPreview(); }
