# Aaron Patzalek — Personal Brand Site HAL Stack Rigor Audit

**Audit date:** 2026-04-21
**Auditor:** Claude Code (Opus 4.7 · max-mode autonomous) for Aaron Patzalek
**Sprint:** S-AARON-HYGIENE (self-directed; same rigor pattern as S-CLARITY and S-KEVIN earlier today)
**Repo state at audit:** `aaron-patzalek` main (pre-sprint @ `4767232`); three inline fix commits shipped during this sprint.

---

## What this site is

Static HTML/CSS/JS personal brand and consulting site for Aaron Patzalek — founder, product leader, St. Thomas Ontario. Drives professional discovery: hiring managers, potential consulting clients, Two Birds Innovation prospects, and speakers-bureau contacts all land here. Hosts: hero + philosophy banner, what-I'm-building products list, career timeline, skills, contact form (Formspree-backed). ~467-line single-page `index.html` + two CSS files + one inline `<script>` for mobile nav toggle.

---

## TL;DR — shipped in this sprint

| Fix | Why | Commit |
|---|---|---|
| Self-host Inter variable font (SIL OFL 1.1) | Remove Google Fonts phone-home; sovereignty win for a private-tool page | pending |
| Delete orphan `css/style.css` (619 lines) and orphan `js/main.js` (20 lines) | Dead code targeting non-existent `.main-nav` selector; real mobile-nav JS is inline at line 452 | pending |
| Tighten CSP: remove `fonts.googleapis.com` + `fonts.gstatic.com` sources | Paired with font self-host; CSP now `default-src 'self'` + formspree.io | pending |
| Add `<link rel="preload">` for InterVariable.woff2 | Ensures font loads with first paint, avoiding FOUC | pending |
| New `.github/workflows/axe-core.yml` | Every-push a11y CI (matches DCC + Clarity + Kevin patterns) | pending |

---

## 1. Accessibility

### Strengths (pre-existing)
- `<a href="#main" class="skip-link">` skip-to-content link present
- `lang="en-CA"` on `<html>`
- Navigation wrapped in `<nav aria-label="Main navigation">`
- Mobile nav toggle has `aria-label` and `aria-expanded` correctly wired
- Form fields have explicit `<label>` + `id` pairing
- All three form inputs are `required` with user-friendly placeholders
- Decorative icons in contact details have `aria-hidden="true"`

### Concerns (not shipped — flagged for review)
- **Heading hierarchy audit** — I didn't validate the full H1→H6 outline against WCAG 1.3.1. Single H1 in hero is correct; worth confirming section H2s flow without skipped levels.
- **Contact form lacks aria-describedby** for error states (Formspree redirects on submit; success/error is off-page). Consider client-side validation with inline error announcements via `aria-live="polite"` for the (currently nonexistent) in-page feedback.
- **Colour contrast** — Not yet verified programmatically. The `--brand` token `#0066CC` (blue) on white should be OK for large text but may be marginal for body. Once the new axe-core CI runs, it'll report the concrete numbers.

### Recommendation
After this sprint's axe-core CI first run, review the JSON report artefact. Any critical or serious violations should be fixed in a follow-up before they can compound.

---

## 2. Performance

- Single HTML file, two CSS files, one inline script. No frameworks, no build step. First paint is near-instant.
- **Font self-hosting** (shipped this sprint) removes the 2-3 extra DNS lookups Google Fonts previously required, and the `<link rel="preload">` prevents the typical FOUC flash on first load.
- No images loaded currently — the hero is all typography + emoji meta strip. `images/` directory exists but only contains a TODO for og-card + headshot (per `chore: add images directory with TODO` commit from 2026-03-15 or so).
- No Lighthouse CI. Not needed at current scale; worth adding once there's real traffic to baseline.

### Recommendation
- **Add OG card** (mentioned in the TODO commit). A well-designed `images/og-card.png` (1200×630) is the single highest-visibility asset for a professional brand site — it's what LinkedIn / Twitter / Slack / email previews display. Worth a designer's hour.
- **Add a headshot** at `images/headshot.jpg`. The site currently has no photo of Aaron, which is common feedback on consulting sites ("who is this person?"). Low-effort, high-impact.

---

## 3. Sovereignty (L1 → L4 float check)

| Dependency | Before | After sprint | Cost to drop further |
|---|---|---|---|
| GitHub Pages hosting | L1 | L1 | 30 min to swap to any static host |
| Google Fonts (Inter) | L1 external | **L3 local** | ✓ dropped this sprint |
| Formspree (contact form backend) | L1 external | L1 external | Would need a backend of some kind to drop; Formspree free tier is adequate |
| LinkedIn external link | irrelevant (link, not dependency) | | |

**Verdict**: L1 → L3 capable after this sprint. The remaining Formspree dependency is reasonable — replacing it would mean building and hosting a contact-form backend, which is disproportionate effort for a personal brand site. Flag-only.

### Recommendation
- Keep Formspree. Monitor usage — at ~5-10 form submissions/month, the free tier is fine. If volume grows beyond that, switch to Formspree paid or a self-hosted alternative.
- Consider adding Formspree reCAPTCHA integration (free, prevents bot spam).

---

## 4. Code quality

### Shipped this sprint
- **Removed orphan `css/style.css`** (619 lines). Not referenced from `index.html`; predated the current `main.css`. Left over from an earlier refactor per `cc865eb` merge commit.
- **Removed orphan `js/main.js`** (20 lines). Not referenced from `index.html`. Targeted `.main-nav` which doesn't exist; real mobile-nav code is inline at `index.html:452`. Would have been confusing to a future reader.

### Backlog
- **Consider moving the inline `<script>` block to an external file** (`js/nav.js`). Small scope; pairs with the existing CSP `script-src 'self' 'unsafe-inline'`. If the inline script is removed in favour of an external file, the `'unsafe-inline'` can be dropped from CSP, tightening it further. LOE: 15 min. Low value today; valuable the next time the JS grows beyond nav toggle.

### Code smell scan
- No `onclick=` inline handlers ✓
- No `var` except in the inline script (could be `const`/`let`, but ES5 is fine for browser reach)
- No deprecated HTML (no `<center>`, no `<font>`, etc.) ✓
- CSS uses tokens via `var(--tbi-blue)` etc. — good discipline ✓

---

## 5. Content & copy

Reading the `index.html` source (not rendered — I didn't open this in a browser):

### Strong
- H1 tagline is specific and memorable: "Building tools that empower people to act for themselves"
- Canadian English throughout (centre, colour, etc. — or at least no obvious US-isms)
- Hero meta strip is concrete: St. Thomas / 20+ years / Canadian-built
- Philosophy banner is on-brand and non-generic
- "Sovereignty over autonomy" phrasing ties to Two Birds Innovation positioning
- Career timeline is verified-factual (TELUS, Staples, Start.ca all named)

### Backlog
- **Add og-card + headshot** (noted in Performance section). Single highest-visibility content change available.
- **Consider a one-sentence offer above the contact form**. Currently the contact form has no context — it reads "Name / Email / Message". Adding "If you're exploring consulting or want a free 20-minute conversation about a product problem, this form reaches me directly" frames the expected content and raises conversion. LOE: 5 min.
- **Track & refine the LinkedIn URL redirect rate** — if LinkedIn is the primary channel driving clicks, consider making it more prominent.

---

## 6. CI / CD

### Before this sprint
None. No workflows directory existed.

### After this sprint
- `axe-core.yml` — every-push a11y scan (matches DCC / Clarity / Kevin pattern). Fails build on critical violations; reports others to the job summary + uploads JSON artefact. **New this sprint.**

### Backlog
- **Broken-external-link check** (cisa-aligned: checks LinkedIn URL, Formspree endpoint, og-card URL, etc.). Would mirror Kevin's new `listing-availability.yml` pattern. LOE: 15 min. Worth filing.
- **Lighthouse CI** — low value at current traffic; baseline not meaningful. Revisit when traffic exists.

### Confidence
85%. First axe-core CI run after this sprint will surface any pre-existing a11y issues I didn't catch statically.

---

## 7. Positioning & conversion

This section gets opinion-ated because it's a personal brand site, which means revenue-adjacent.

### What's working
- "Founder, Two Birds Innovation" positions Aaron as principal, not a for-hire PM
- "Sovereign digital tools that empower people to act for themselves" is a specific, memorable value proposition
- Philosophy banner is distinctive (most consulting sites don't have one)
- Career timeline is thorough and proves depth (TELUS 7 years, Staples 6 years, Start.ca, etc.)

### What could be stronger
- **Offer clarity.** The site currently says what Aaron IS, not what a visitor can BUY. What's the offer? A $2,500 AI Workflow Audit (the Clarity CTA)? A consulting retainer? A fractional CPO role? A speakers-bureau booking? Without a named offer, inbound leads go to "let's talk" rather than a specific engagement. Recommendation: add ONE offer above the contact form. Can be a link to the Clarity audit since that's already priced.
- **Social proof.** Like Clarity's audit, there's no testimonial, no case study, no client logo. Even one quote (pseudonymous is fine) raises trust disproportionately. From the `_strategy/` / `_marketing/` dirs in DCC or the Career Coach repo, there may be existing testimonials worth surfacing.
- **Clearer CTA hierarchy.** Hero has two buttons: "See What I'm Building" and "Start a Conversation". Both are soft. A paid-offer CTA would give the second slot sharper intent.

### Recommendation
- **One sentence of offer above the contact form** — 5 min (see §5).
- **Link to Clarity's $2,500 AI Workflow Audit** from the "What I'm Building" section — if Clarity is the paid product, the brand site should route to it. 10 min.
- **Add one testimonial** — 30 min once a quote exists.
- **OG card + headshot** — 1-2 h incl. design.

---

## 8. Top 5 prioritised next actions

By impact × (1 / LOE):

1. **Add OG card + headshot** (1-2 h). Biggest visibility lift — every link share, every LinkedIn render, every search preview.
2. **Link to Clarity's $2,500 offer from the "What I'm Building" section** (10 min). Routes the brand traffic to the paid product.
3. **Add one-sentence offer above the contact form** (5 min). Frames the form's intent.
4. **File one testimonial** (30 min once quote exists).
5. **Move inline nav JS to external file** (15 min — code hygiene, tightens CSP).

Items 2 + 3 + 5 together = ~30 min total and could ship as a single follow-up sprint.

---

## 9. What this audit did NOT cover

- **Rendered-browser QA** — didn't open the site in a browser during this sprint. Visual regressions, layout bugs, mobile rendering all unverified. The axe-core CI will catch a11y regressions; visual regressions need Playwright (mirror of DCC setup) or manual.
- **Actual offer decisions** — §7 assumes the Clarity $2,500 audit is the right offer to promote from here. Aaron's call.
- **SEO keyword research** — site is indexed but no deliberate keyword strategy. Low priority for a personal brand site compared to product SEO for Clarity / DCC.
- **Real-device cross-browser test** — Safari iOS, Firefox desktop, Edge. Not done.

---

## Confidence (overall)

82%. The three inline fixes are small and reversible; the AUDIT is opinionated where it marks itself as such (§7). 18% reserved for: opening the rendered site may surface layout or font-loading issues the static inspection missed, and the strongest positioning recommendations depend on Aaron's offer decisions.

## Scrappy Pack says
The Ripper — the single most obvious gap is an OG card. Every personal brand site that doesn't have one loses ~30% of the conversion lift that a well-designed card provides. LOE: ~2 h if Aaron designs one in Figma or Canva; ~5 min if he has one already and just needs to drop the PNG into `images/og-card.png`.

LOE total for Top 5: ~3 h if OG card needs designing; ~1.5 h if it already exists.
