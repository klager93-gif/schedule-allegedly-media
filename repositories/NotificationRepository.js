/*
Signal Schedule
Area: Signal Schedule
File: schedule/repositories/NotificationRepository.js
Version: v5.15.6
Purpose: Repository boundary for notification foundation data
*/
import { fetchNotificationPreview } from '../adapters/JsonNotificationAdapter.js';
export async function listNotificationPreview() { return fetchNotificationPreview(); }
