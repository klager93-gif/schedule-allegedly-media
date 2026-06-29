/*
Signal Schedule File: schedule/adapters/JsonVisibilityPrivacyAdapter.js
Version: v5.15.6
Purpose: JSON adapter for Schedule Visibility & Privacy Controls preview data.
*/
export class JsonVisibilityPrivacyAdapter {
  constructor(path = '/data/visibility-privacy-preview.json') {
    this.path = path;
  }

  async read() {
    const response = await fetch(this.path, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`Unable to load visibility and privacy preview (${response.status})`);
    }
    return response.json();
  }
}
