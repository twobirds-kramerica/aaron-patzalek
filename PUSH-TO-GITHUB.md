# Push to GitHub — Aaron Patzalek Consulting Site

## Step 1: Create the remote repository
Go to https://github.com/new and create a new repo:
- Name: `aaron-patzalek`
- Visibility: Private (until ready to share)
- Do NOT initialise with README, .gitignore, or licence

## Step 2: Push from local

```bash
cd C:\twobirds\aaron-patzalek
git remote add origin https://github.com/twobirds-kramerica/aaron-patzalek.git
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages
1. Go to Settings → Pages
2. Source: Deploy from a branch
3. Branch: main, / (root)
4. Save

Site will be live at: https://twobirds-kramerica.github.io/aaron-patzalek/

## Step 4: Remove noindex when ready
When Aaron is ready to share the site publicly, remove this line from `index.html`:
```html
<meta name="robots" content="noindex, nofollow">
```

## Notes
- Currently set to noindex — search engines will not index until the meta tag is removed
- Contact form uses mailto: link — no backend required
- Fully static — no build step, no dependencies
