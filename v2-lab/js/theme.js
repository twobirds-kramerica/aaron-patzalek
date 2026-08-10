/* Aaron Patzalek v2 -- theme toggle + scroll reveal.
   Inline head script sets the initial theme before paint; this wires the rest. */
(function () {
  document.documentElement.classList.add('js');

  // --- Theme toggle -------------------------------------------------------
  var toggle = document.getElementById('theme-toggle');
  function currentTheme() {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }
  function setTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    try { localStorage.setItem('ap-theme', theme); } catch (e) { /* private mode */ }
    if (toggle) {
      toggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
      toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    }
  }
  if (toggle) {
    toggle.setAttribute('aria-pressed', currentTheme() === 'dark' ? 'true' : 'false');
    toggle.addEventListener('click', function () {
      setTheme(currentTheme() === 'dark' ? 'light' : 'dark');
    });
  }

  // --- External-link framing -------------------------------------------------
  // Every off-site link opens in a new tab; no visible "(opens in a new tab)"
  // label (dropped 2026-08-09 per Aaron feedback, kept only on DCC-for-adults).
  var extLinks = document.querySelectorAll('a[href^="http"]');
  for (var li = 0; li < extLinks.length; li++) {
    var extA = extLinks[li];
    if (extA.hostname === window.location.hostname) { continue; }
    extA.setAttribute('target', '_blank');
    var relParts = (extA.getAttribute('rel') || '').split(/\s+/).filter(Boolean);
    if (relParts.indexOf('noopener') === -1) { relParts.push('noopener'); }
    if (relParts.indexOf('noreferrer') === -1) { relParts.push('noreferrer'); }
    extA.setAttribute('rel', relParts.join(' '));
  }

  // --- Scroll reveal (skipped for reduced motion) --------------------------
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els = document.querySelectorAll('.reveal');
  if (reduced || !('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('visible'); });
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(function (el) { observer.observe(el); });
})();
