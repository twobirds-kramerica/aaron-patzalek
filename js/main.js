/* Aaron Patzalek — personal brand site JS.
   Single responsibility: mobile nav toggle + aria-expanded sync.
   Extracted from index.html inline <script> 2026-04-21
   (S-AARON-NAV-EXTRACT). Behaviour unchanged. */

'use strict';

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
});
