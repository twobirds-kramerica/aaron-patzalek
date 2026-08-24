# CLAUDE.md — Aaron Patzalek Personal Site

## Project Identity
- Owner: Aaron Patzalek · Two Birds Innovation
- Product: Aaron Patzalek personal brand site — consultant profile and Two Birds gateway
- Audience: Potential consulting clients, grant contacts, collaborators
- Stack: Static HTML/CSS/JavaScript only. No frameworks, no backend, no build tools.
- Deployment: GitHub Pages (`twobirds-kramerica.github.io/aaron-patzalek`)
- HAL Stack global context: `C:\twobirds\two-birds-portfolio\CLAUDE.md`

## CNAME / custom domain — ABANDONED, do not propose or re-add (2026-08-23)
A live incident tonight (2026-08-23, see `S-DOMAIN-INCIDENT-POSTMORTEM-001` in `two-birds-portfolio/hal-stack/sprint-system/sprint-queue.md`) took the site down twice while migrating to `aaron.twobirdsinnovation.com`, including in front of an active sales lead, from a stale wildcard DNS record and then a slow GitHub HTTPS certificate provision. After the second outage Aaron decided, live, to drop the custom domain entirely: *"this whole dot com thing is not worth anything to me at this point."* This is a settled decision, not a pause.
- **`twobirds-kramerica.github.io/aaron-patzalek` is the permanent canonical URL.** There is no `CNAME` file in this repo and there should not be one. Aaron has sent this exact link to leads expecting it to keep working indefinitely, including if forwarded on.
- **Do not add a `CNAME` file, and do not proactively suggest reviving the custom-domain migration** — Aaron explicitly decided against it, this isn't an open item waiting on a good moment. If Aaron himself brings up wanting a custom domain again in some future session, treat it as a brand-new decision to make from scratch (fresh cost/benefit, not a resumption), not this one.
- The related Notion Aaron-action item about widening Cloudflare DNS-edit permission (filed 2026-08-23, id `3c6a09cf...`) is now moot — it existed only to finish this migration. Fine to leave it or delete it; not worth acting on.

## Hard Constraints (Never Violate)
- STATIC ONLY: No Node.js, no npm, no build steps. Flat files on GitHub Pages.
- VOICE INTEGRITY: This is a personal brand site. All copy must be authentic to Aaron's voice — not polished corporate, not AI-generic. Apply the voice-check protocol (see global CLAUDE.md) before any copy ships externally.
- CANADIAN ENGLISH: Spelling, idiom, and references throughout. No US-only spelling variants.
- SELF-HOSTED FONTS: No Google Fonts CDN. Any fonts must be self-hosted with SIL OFL or equivalent licence. Verify font files exist before referencing them.

## Known Audit Issues (June 4, 2026 — 13/20 score)
Fix before shipping any sprint touching the relevant area:
- **P0 Philosophy banner:** The philosophy/tagline banner section has a layout or contrast issue. Audit and fix before any hero-section sprint.
- **P0 Em dashes:** Body copy uses em dashes that fail screen reader pause behaviour. Replace with `&mdash;` or restructure before any copy sprint.
- **P0 Identical card grid:** Two or more card grid sections are visually identical — no differentiation between the cards. Resolve before any card/grid sprint.
- **P1 Section reorder:** Aaron has approved a structural section reorder. Do not reorder sections without confirming the approved order from Aaron or the shape brief.

## Accessibility Standards
- WCAG 2.1 AA — contrast ≥ 4.5:1 body text
- No autoplay media
- Dark mode: test on Android Chrome before marking any visual sprint done. File Aaron action P1 if this test cannot be done locally.

## Voice-Check Rule
Any written content on this site that Aaron will share externally: apply voice-check protocol, append compliance tag. Protocol: `C:\twobirds\two-birds-portfolio\hal-stack\protocols\voice-check.md`.

## Commit Convention
- `feat(ap):` new feature or page
- `fix(ap):` bug fix
- `chore(ap):` maintenance, config, docs

## ADR Rule
Any sprint introducing a significant architectural change must file an ADR in `C:\twobirds\two-birds-portfolio\hal-stack\architecture\decisions\` before pushing.
