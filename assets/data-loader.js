/*
Signal Labs
Area: Signal Schedule
File: assets/data-loader.js
Version: v5.11.0
Purpose: Root-safe JSON loading helpers with graceful fallback support for foundation pages.
*/
(function () {
  function rootSafeUrl(url) {
    if (!url) return url;
    if (/^(https?:)?\/\//.test(url) || url.startsWith('/api/')) return url;
    return '/' + String(url).replace(/^\.\//, '').replace(/^(\.\.\/)+/, '').replace(/^\//, '');
  }

  async function loadJson(url, options = {}) {
    const safeUrl = rootSafeUrl(url);
    const response = await fetch(safeUrl, { cache: 'no-store', ...options });
    if (!response.ok) throw new Error(`Unable to load ${safeUrl}: HTTP ${response.status}`);
    const contentType = response.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      const sample = (await response.text()).slice(0, 80).replace(/\s+/g, ' ');
      throw new Error(`Expected JSON from ${safeUrl} but received ${contentType || 'unknown content'}: ${sample}`);
    }
    return response.json();
  }

  async function loadJsonOrFallback(url, fallback = null, options = {}) {
    try {
      return await loadJson(url, options);
    } catch (error) {
      console.warn('[Signal Schedule] Data fallback used:', error.message);
      if (typeof fallback === 'function') return fallback(error, rootSafeUrl(url));
      return fallback;
    }
  }

  function renderDataNotice(container, options = {}) {
    const node = typeof container === 'string' ? document.querySelector(container) : container;
    if (!node) return;
    const title = options.title || 'Demo data not loaded';
    const message = options.message || 'This foundation page is ready, but no preview data was available.';
    const detail = options.detail ? `<p class="schedule-muted">${String(options.detail).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]))}</p>` : '';
    node.insertAdjacentHTML('beforeend', `<section class="schedule-card"><h2>${title}</h2><p>${message}</p>${detail}</section>`);
  }

  window.SignalScheduleData = Object.freeze({ rootSafeUrl, loadJson, loadJsonOrFallback, renderDataNotice });
})();
