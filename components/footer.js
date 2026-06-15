/*
Signal Labs
Area: Signal Schedule
File: components/footer.js
Version: v5.9.0
Purpose: Render lightweight Schedule-specific footer across standalone Signal Schedule pages using release metadata.
*/
(function () {
  const mount = document.getElementById('schedule-footer');
  if (!mount) return;

  const release = window.SIGNAL_SCHEDULE_RELEASE || {};
  const version = release.version || document.body?.dataset?.signalVersion || 'v5.9.0';
  const releaseName = release.releaseName || 'Configuration & Registry Foundation';

  mount.innerHTML = `
    <footer class="schedule-footer" aria-label="Signal Schedule footer">
      <div class="schedule-footer__inner">
        <div class="schedule-footer__brand">
          <span class="schedule-footer__title">Signal Schedule · ${version}</span>
          <span class="schedule-footer__meta">${releaseName} · Built by Signal Labs</span>
        </div>
        <nav class="schedule-footer__links" aria-label="Schedule documentation links">
          <a href="README.md">Docs</a>
          <span class="schedule-footer__dot" aria-hidden="true">•</span>
          <a href="ROADMAP.md">Roadmap</a>
          <span class="schedule-footer__dot" aria-hidden="true">•</span>
          <a href="CHANGELOG.md">Changelog</a>
        </nav>
      </div>
    </footer>
  `;
})();
