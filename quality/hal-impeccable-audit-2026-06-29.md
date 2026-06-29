# Impeccable Audit — hal.html
**Date:** 2026-06-29  
**Auditor:** Claude Code (S-IMPECCABLE-HAL-AUDIT)  
**Register:** Brand (portfolio/personal brand surface)  
**Target:** `C:\twobirds\aaron-patzalek\hal.html`  
**Skill:** impeccable audit

---

## Anti-Patterns Verdict

**Three absolute bans violated. Must be fixed before audit score can rise.**

| Ban | Location | Verdict |
|---|---|---|
| Tiny uppercase tracked eyebrow on every section | `.eyebrow` on 7 sections | **VIOLATED** |
| Reveal animations gate content on JS class injection | `.reveal { opacity: 0 }` + `.stagger > * { opacity: 0 }` | **VIOLATED** |
| Bounce / elastic easing | `.lm-r, .lm-l cubic-bezier(0.34,1.56,0.64,1)` | **VIOLATED** |
| Hero-metric template | `.stat` grid (big number, small label) in stats-bar | **VIOLATED** |
| Identical card grids | `.gate-grid` (6 emoji-icon + name + when + body cards) | **VIOLATED** |

Additional brand.md violations (reflex-reject):
- `Inter` (body font) — on reflex-reject list
- `DM Serif Display` (serif font, `--serif`) — on reflex-reject list
- `var(--mono)` pervasive as "technical shorthand" — `.eyebrow`, `.arch-label`, `.callout-eye`, `.wordmark`, `.loop-time`, `.stat-label`, `.step-n`, `.chip` all use JetBrains Mono — ban: "monospace as lazy technical shorthand"
- `.stat-label { text-transform: uppercase }` — all-caps body copy, banned

---

## Executive Summary

**Score: 12 / 20** — Acceptable. Significant rework required.

| Dimension | Score | Notes |
|---|---|---|
| Accessibility | 2 / 4 | Reveal gates content; no skip nav; role via JS not HTML |
| Performance | 3 / 4 | Two infinite animations; no will-change; otherwise clean |
| Responsive Design | 3 / 4 | Single breakpoint 620px; tablet gap |
| Theming | 3 / 4 | Good token system; one hard-coded color in popover |
| Anti-Patterns | 1 / 4 | 5 absolute bans + 4 brand reflex-reject violations |
| **Total** | **12 / 20** | **Acceptable** |

The core aesthetic POV is coherent and intentional: dark terminal-ops with amber accent, system-architecture framing, earned sovereignty messaging. The page has real differentiation in _content_ and _concept_. The defects are structural: they make it read as AI-scaffolded regardless of content quality.

---

## Detailed Findings

### P0 — Blocking

**[A-001] Content gated on JS class injection**  
File: `hal.html`, lines 44–66 (CSS), lines 1073–1090 (JS)

`.reveal { opacity: 0; transform: translateY(28px); }` and `.stagger > * { opacity: 0; }` make all page sections and stats bar invisible by default. The JS adds `.visible` after a 100ms delay. If JS does not execute, or while it is loading, every section below the hero is blank. This is an absolute ban violation: "Reveal animations must enhance an already-visible default. Don't gate content visibility on a class-triggered transition."

The `@media (prefers-reduced-motion)` block at line 62 rescues reduced-motion users (`opacity: 1 !important`) — but does nothing for JS-off or delayed-JS scenarios.

**Fix:** Set `opacity: 1` and `transform: none` as the default. Let JS ADD the initial animated-out state just before it adds `.visible` — i.e., JS opts elements IN to animation, not JS opts them out of invisibility.

---

**[AP-001] Eyebrow on every section (absolute ban)**  
File: `hal.html`, lines 564, 573, 638, 693, 788, 834 (and more)

`<div class="eyebrow">The Model</div>`, `<div class="eyebrow">What's Connected</div>`, `<div class="eyebrow">The Workflow</div>`, `<div class="eyebrow">Architecture</div>`, `<div class="eyebrow">Governance</div>`, `<div class="eyebrow">The Overnight Loop</div>` — every single `<section>` begins with an eyebrow in mono uppercase.

Absolute ban: "Repeated tiny uppercase tracked eyebrow above every section heading... eyebrow on every section is AI grammar."

**Fix:** Remove the eyebrow class entirely, or replace with a single deliberately-placed device. The sections are already differentiated by background treatment and content structure; they do not need kicker labels.

---

**[AP-002] Spring/bounce easing on logo animation (absolute ban)**  
File: `hal.html`, lines 175–185

```css
.lm-r { animation: logo-r 0.6s cubic-bezier(0.34,1.56,0.64,1) both; }
.lm-l { animation: logo-l 0.6s cubic-bezier(0.34,1.56,0.64,1) both; }
```

`cubic-bezier(0.34, 1.56, 0.64, 1)` is a spring/bounce curve — the Y-value exceeds 1.0 causing overshoot. Absolute ban: "No bounce, no elastic."

**Fix:** Replace with `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo) or `cubic-bezier(0.33, 1, 0.68, 1)` (ease-out-cubic). Same snappy feel, no spring.

---

### P1 — Major

**[AP-003] Hero-metric template (absolute ban)**  
File: `hal.html`, lines 534–559

`.stats-bar` is the SaaS hero-metric template: large number, small label, multiple stats in a row. "Big number, small label, supporting stats" — absolute ban.

Individual stats (9 products, 41 MCPs, $0 hosting, 17 builds, 51 personas) carry genuine information value. The issue is the _format_, not the data.

**Fix:** Integrate the metrics into the prose or architecture diagram rather than isolating them as a stats-bar widget. The arch diagram already shows many of these.

---

**[AP-004] Identical card grid — gate-grid (absolute ban)**  
File: `hal.html`, lines 793–831

Six `.gate` cards, each with identical structure: emoji icon above, gate name, fires-when label, body text. No visual differentiation between cards. Absolute ban: "Identical card grids. Same-sized cards with icon + heading + text, repeated endlessly."

**Fix:** Present governance gates as a list, timeline, or decision-tree. The numbered `.steps` pattern used in The Workflow section is more appropriate and already present on the page.

---

**[T-001] Reflex-reject fonts: Inter + DM Serif Display**  
File: `hal.html`, lines 10, 16, 19–20

`font-family: 'Inter'` on body — brand.md reflex-reject. `--serif: 'DM Serif Display'` on `.build-num` large counter — brand.md reflex-reject.

Both are the 2023–2024 training-data defaults and immediately signal AI-generated design.

**Fix:** Replace Inter with a humanist or grotesque that reads technical without being generic: IBM Plex Sans (already technically adjacent but flagged), or consider Geist (Vercel), Departure Mono (distinctive mono-influenced), or a system stack. For the serif accent (build counter), consider Instrument Serif or GT Planar — neither is on the reflex-reject list.

---

**[T-002] Pervasive monospace as "technical shorthand" (brand ban)**  
File: `hal.html`, lines 221, 228, many more

JetBrains Mono / Fira Code appears on: `.eyebrow`, `.arch-label`, `.callout-eye`, `.wordmark`, `.loop-time`, `.stat-label`, `.chip`, `.step-n`, `.tag`. Every section uses mono for metadata. Brand ban: "monospace as lazy 'technical' shorthand."

The terminal aesthetic has a clear POV, but the mono is applied to decorative and metadata elements without restraint. When every label, tag, eyebrow, and callout is mono, the font loses its signal value.

**Fix:** Reserve mono for truly code/terminal-adjacent elements (`.tag`, `.chip`). Use a sans-serif for section labels and structural metadata.

---

**[A-002] Missing skip navigation link**  
File: `hal.html`, no skip link found

No `<a class="skip-link" href="#main">Skip to main content</a>` at the top of the document. WCAG 2.4.1 (Level A) violation. Keyboard users must tab through the nav before reaching content.

**Fix:** Add `<a href="#main" class="skip-link">Skip to content</a>` as first child of `<body>` with standard visually-hidden-until-focus CSS.

---

### P2 — Minor

**[TH-001] Hard-coded background in `.pill-popover`**  
File: `hal.html`, line ~368

```css
.pill-popover { background: #1d2130; }
```

The value `#1d2130` is the `--bg-lift` token value but written as a literal. A theme change would require finding and updating this separately.

**Fix:** Replace with `background: var(--bg-lift);`

---

**[A-003] Pill popovers use JS-injected `role="button"` on `<span>` elements**  
File: `hal.html`, lines ~1048–1070

`.pill` elements are `<span>` tags with `tabindex="0"` and `role="button"` set via CSS+JS. Functional but non-ideal — native `<button>` elements receive keyboard and focus handling automatically and don't require JS to be accessible.

**Fix:** Change `.pill` from `<span>` to `<button type="button">` and remove the `tabindex` and `role` attributes. Adjust CSS `display` as needed.

---

**[R-001] Single breakpoint at 620px; no tablet range**  
File: `hal.html`, lines 448–490

One media query `@media (max-width: 620px)` governs all responsive behaviour. The page has no tablet breakpoint (768px–1024px range). At tablet widths, the `.arch-row` grid (`grid-template-columns: 34px 88px 1fr`) may produce crowded middle columns, and `.callout-row` doesn't reflow until below 620px.

**Fix:** Add a `@media (max-width: 860px)` intermediate breakpoint for the arch diagram and callout row.

---

**[P-001] Infinite animations without `will-change`**  
File: `hal.html`, lines 203 (`ai-glow`), 186 (`pulse`)

```css
.arch-row.ai-layer { animation: ai-glow 3s ease-in-out infinite; }
.wordmark-dot { animation: pulse 2.4s ease-in-out infinite; }
```

Two infinite animations targeting `box-shadow` (ai-glow) and `opacity` (pulse). Neither declares `will-change`. `box-shadow` animates on the CPU paint layer — on lower-end devices this can cause jank when combined with background-color and border transitions.

**Fix:** Add `will-change: box-shadow` to `.arch-row.ai-layer` and `will-change: opacity` to `.wordmark-dot`. Or replace the `box-shadow` animation with a `filter: drop-shadow()` animation (GPU-composited).

---

**[C-001] Stat-builds semantic mismatch — flash of wrong value**  
File: `hal.html`, lines 1063–1085 (inline JS) + fetch snippet (end of script)

The inline JS calculates `stat-builds` as days since `2026-01-15` and displays `"165+"`. The `fetch()` added by S-HAL-LIVE-STATS then overwrites with the actual log count (`17`). Users briefly see `"165+"` before it switches to `17`. These two numbers represent different things (estimated days vs actual committed log files).

**Fix:** Remove the `stat-builds` assignment from the date-calculation JS block (lines 1082–1084), keeping `build-count` (hero metric) on the days estimate. The stat bar will show `"—"` until the fetch resolves (< 1s on a warm connection). Alternatively, remove the hero build-count and unify on the JSON fetch value.

---

### P3 — Polish

**[A-004] No `aria-live` on dynamically updating `#stat-builds`**  
File: `hal.html`, line 548

`<span class="stat-num" id="stat-builds">—</span>` updates after fetch but has no `aria-live` announcement. Screen reader users who navigate to the element before the fetch completes will read `"—"` without any notification that it updated.

**Fix:** Add `aria-live="polite"` to `#stat-builds`.

---

**[P-002] Counter animation uses `Math.round` not easing**  
File: `hal.html`, lines 1096–1118

The counter animation increments linearly (`elapsed / duration * target`). At high numbers (200+), this looks mechanical. Ease-out interpolation would feel more natural.

**Fix:** `const progress = elapsed / duration; const eased = 1 - Math.pow(1 - progress, 3); const current = Math.round(eased * target);`

---

## Patterns and Systemic Issues

1. **AI scaffold reflex** — The page was built with a coherent POV (sovereign terminal-ops aesthetic, real engineering content) but layered with the structural conventions of AI-generated landing pages: eyebrow-heading-text for every section, stats bar hero metrics, emoji icon + title + body card grid for governance. Removing these scaffolds and letting the architecture diagram and prose carry the page would significantly increase perceived craft.

2. **Mono overuse** — JetBrains Mono is applied as a default to every "technical-adjacent" element. This is the opposite of a deliberate type decision. Pick two roles for mono (code snippets and chip/tag labels) and use Inter (or its replacement) for all metadata and structural labels.

3. **Token system is solid** — `--bg`, `--bg-lift`, `--ink`, `--muted`, `--accent`, `--teal`, `--border` are defined and used consistently. The hard-coded `#1d2130` is an anomaly, not a pattern.

4. **Accessibility baseline is present** — `aria-label` on the nav, `tabindex` and `role` on pills, keyboard handling on popovers, reduced-motion block. These are correct intentions. The gaps (skip nav, JS-gated opacity, button semantics) are fixable without rearchitecting.

---

## Positive Findings

- Dark theme with amber accent is a defensible, intentional color choice — not the default cream/tinted-neutral reflex.
- `@media (prefers-reduced-motion)` block is comprehensive (`animation: none; transition: none; opacity: 1 !important` on all animated elements). Reduced-motion users receive a fully readable page.
- CSS custom property system is thorough and consistent. Variables are used for all color, spacing, and type roles except the one hard-coded popover value.
- Pill popover keyboard interaction is complete: `tabindex="0"`, `role="button"`, `keydown` handler for Enter/Space, `position: fixed` to escape stacking context correctly.
- Content quality is strong — specific claims, real system architecture, no marketing buzzwords.
- `text-wrap: balance` applied to headings at the correct level (h2).
- No inline images; SVG logo is inline, no alt-text required, no loading performance cost.
- The arch diagram (`.arch`) is a distinctive interactive component that is _not_ a card grid — this is the most differentiated element on the page.

---

## Recommended Actions (priority order)

| # | Action | Severity | Effort |
|---|---|---|---|
| 1 | Fix reveal CSS: default visible, JS opts in to animation | P0 | 30 min |
| 2 | Remove eyebrow from all sections or replace with single deliberate device | P0 | 30 min |
| 3 | Replace logo spring easing with ease-out-expo | P0 | 5 min |
| 4 | Replace stats-bar hero-metric with integrated copy or arch-diagram data | P1 | 2 hrs |
| 5 | Replace gate-grid with list or numbered flow (reuse `.steps` pattern) | P1 | 1 hr |
| 6 | Swap Inter for non-reflex-reject body font | P1 | 1 hr |
| 7 | Restrict mono usage to chip/tag + code elements only | P1 | 1 hr |
| 8 | Add skip navigation link | P1 | 10 min |
| 9 | Fix `#1d2130` → `var(--bg-lift)` in `.pill-popover` | P2 | 2 min |
| 10 | Convert `.pill` spans to `<button>` elements | P2 | 45 min |
| 11 | Add tablet breakpoint at 860px | P2 | 30 min |
| 12 | Add `will-change` to two infinite animations | P2 | 5 min |
| 13 | Fix stat-builds semantic conflict (remove date-fallback from stat bar) | P2 | 10 min |
| 14 | Add `aria-live="polite"` to `#stat-builds` | P3 | 2 min |
| 15 | Ease-out the counter animation interpolation | P3 | 10 min |

**Estimated rework to reach 16/20 (Good):** Items 1–8 resolved. ~6 hours of focused work.  
**Estimated rework to reach 18/20 (Excellent):** All items resolved. ~9 hours.
