/*
Signal Labs
Area: Signal Schedule
File: assets/data-loader.js
Version: v5.7.0
Purpose: Root-safe JSON loading helpers with clear HTML/404 drift errors.
*/
(function () {
  function rootSafeUrl(url) {
    if (!url) return url;
    if (/^(https?:)?\/\//.test(url) || url.startsWith('/api/')) return url;
    return '/' + url.replace(/^\.\//, '').replace(/^(\.\.\/)+/, '');
  }
  async function loadJson(url, options = {}) {
    const safeUrl = rootSafeUrl(url);
    const response = await fetch(safeUrl, { cache: 'no-store', ...options });
    if (!response.ok) throw new Error(`Unable to load ${safeUrl}: HTTP ${response.status}`);
    const contentType = response.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      const sample = (await response.text()).slice(0, 60).replace(/\s+/g, ' ');
      throw new Error(`Expected JSON from ${safeUrl} but received ${contentType || 'unknown content'}: ${sample}`);
    }
    return response.json();
  }
  window.SignalScheduleData = Object.freeze({ rootSafeUrl, loadJson });
})();
