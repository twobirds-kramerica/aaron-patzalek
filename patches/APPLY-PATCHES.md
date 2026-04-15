# Apply Pending Changes

The `C:\twobirds` directory is read-only for non-admin users. These modified files need to be copied into their repos with elevated permissions.

## Career Coach — career-coach-index.html → career-coach/index.html

Changes made:
1. **Job Search Stats Card** — shows total jobs, avg fit score, recommended count, skipped count, days since first job
2. **Print My Jobs button** — opens clean printable table of all jobs with status, scores, recommendations
3. **Mission-Driven Organisation cover letter** — replaced Internal Promotion template with mission-driven org template
4. **AI disruption risk note** — added to all industry insights cards
5. **Government & Clean Energy sectors** — added to industry insights data

### Apply command (run as Administrator):
```powershell
Copy-Item "C:\twobirds\aaron-patzalek\patches\career-coach-index.html" "C:\twobirds\career-coach\index.html" -Force
```

## Kevin's Apartment — kevins-apartment-index.html → kevins-apartment-search/index.html

Changes made:
1. **Decision Ready badge** — green "Decision Ready ✓" when 6+ checklist items ticked AND favourited AND has notes
2. **Print My Shortlist button** — generates printable table of favourited listings with notes and checklist progress
3. **8th checklist item** — added "Confirmed internet/cable availability"

### Apply command (run as Administrator):
```powershell
Copy-Item "C:\twobirds\aaron-patzalek\patches\kevins-apartment-index.html" "C:\twobirds\kevins-apartment-search\index.html" -Force
```

## Then commit each repo:

### Career Coach:
```bash
cd C:\twobirds\career-coach
git add index.html
git commit -m "feat: career coach final — stats card, print style, industry insights, cover letter templates confirmed"
git push origin main
```

### Kevin's Apartment:
```bash
cd C:\twobirds\kevins-apartment-search
git add index.html
git commit -m "feat: Kevin's apartment final — decision ready, print shortlist, share, commute, checklist, expiry"
git push origin main
```
