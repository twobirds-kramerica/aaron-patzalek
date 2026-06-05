# CLAUDE.md — Aaron Patzalek Personal Site

## Project Identity
- Owner: Aaron Patzalek · Two Birds Innovation
- Product: Aaron Patzalek personal brand site — consultant profile and Two Birds gateway
- Audience: Potential consulting clients, grant contacts, collaborators
- Stack: Static HTML/CSS/JavaScript only. No frameworks, no backend, no build tools.
- Deployment: GitHub Pages (`twobirds-kramerica.github.io/aaron-patzalek`)
- HAL Stack global context: `C:\twobirds\two-birds-portfolio\CLAUDE.md`

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
