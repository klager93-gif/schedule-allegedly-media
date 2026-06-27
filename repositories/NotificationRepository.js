/*
Signal Schedule
Area: Signal Schedule
File: schedule/repositories/NotificationRepository.js
Version: v5.15.3
Purpose: Repository boundary for notification foundation data
*/
import { fetchNotificationPreview } from '../adapters/JsonNotificationAdapter.js';
export async function listNotificationPreview() { return fetchNotificationPreview(); }
