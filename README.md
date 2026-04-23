# Aaron Patzalek — Solopreneur Brand Site

Personal brand + portfolio site for Aaron Patzalek, founder of Two Birds Innovation (St. Thomas, Ontario).

## What this repo is

Static single-page site introducing Aaron's work, products built under Two Birds Innovation (Digital Confidence Centre, Clarity, Career Coach, Kevin's Apartment Search), and routing visitors to contact / consulting entry points.

## How to run it

Vanilla HTML/CSS/JS — no build step, no npm.

- Clone the repo
- Open `index.html` in a browser (or serve via any static host for proper CI / PWA features)
- Live URL: `https://twobirds-kramerica.github.io/aaron-patzalek/`

## Stack

- Static HTML/CSS/JS per the Two Birds no-npm standing rule
- Self-hosted Inter font (SIL-OFL) under `fonts/inter/` — no Google Fonts CDN
- axe-core every-push a11y CI via GitHub Actions
- Weekly broken-external-link check

## Related repos

This site is part of the Two Birds Innovation portfolio. See the master portfolio repo for cross-cutting governance: `two-birds-portfolio`.

## Model lock note

Claude Code sessions on this repo should not pin a retired model ID. The current Claude model family is 4.X (Opus 4.7, Sonnet 4.6, Haiku 4.5). The canonical ID for Sonnet is `claude-sonnet-4-6`, not any earlier `claude-sonnet-4-*` variant.

## AUDIT

See `AUDIT.md` for the last HAL Stack rigor audit + progress update header. Top-5 next-actions are tracked there with closure commit hashes.

## License

See LICENSE file if present; otherwise all content is owned by Aaron Patzalek / Two Birds Innovation.
