# Headshot TODO

**Current state:** SVG circle placeholder with initials "AP" in Two Birds Blue.
**Class:** `.hero-image-placeholder` — swap with `<img>` when real image available.

---

## Recommended Shot Types

1. **Professional headshot** — shoulders up, neutral background, natural light. The standard for LinkedIn and portfolio sites.
2. **Environmental shot** — Aaron at a desk or with a laptop, showing the working environment. More personality than a standard headshot.

---

## AI Image Generation Options

| Tool | Quality | Cost | Notes |
|------|---------|------|-------|
| ChatGPT Pro image gen | High | Included with Pro | Upload reference photos, generate variations |
| Midjourney | Very high | $10/month | Best for stylised/artistic portraits |
| Flux Kontext on Vercel | High | Pay-per-use | Open source, can self-host |
| DALL-E 3 (via API) | Good | ~$0.04/image | Programmatic, can batch |

**Recommendation:** ChatGPT Pro (already available to Aaron) for quick iterations. Upload 2-3 selfies as reference, ask for a professional portrait in Two Birds Blue (#0066CC) brand tones.

**Caution:** AI-generated headshots can look artificial. For a portfolio site targeting real business contacts, a real photo is always stronger. Consider AI as a bridge until a real photo is ready.

---

## Manual Photographer Options (St. Thomas / London ON)

Aaron to research local options. Budget: CA$100-300 for a basic professional headshot session.

- Search: "professional headshot photographer London Ontario"
- Check Fanshawe College photography program (student photographers, lower cost)
- Local studios on Google Maps near St. Thomas

---

## Implementation

When ready, replace in `index.html`:
```html
<!-- Replace this: -->
<div class="hero-image-placeholder" aria-label="Aaron Patzalek photo placeholder">
  <span aria-hidden="true">AP</span>
</div>

<!-- With this: -->
<img src="images/aaron-headshot.jpg" alt="Aaron Patzalek" class="hero-image" width="200" height="200" loading="eager">
```

Add to `css/main.css`:
```css
.hero-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
}
```
