# Centri Auto Towing & Mechanical — Website

Static site (no build step) for [centriauto.com](https://centriauto.com), hosted on GitHub Pages.

## Structure
- `index.html` — the whole one-page site
- `css/styles.css` — design tokens + all styles
- `js/main.js` — mobile nav, lightbox gallery, form UX
- `assets/images/` — logo, fleet photos, jobs-done photos, owner photo (JPEG + WebP pairs)
- `CNAME` — tells GitHub Pages to serve this repo at the custom domain (do not delete)

## Editing
Open `index.html` in any editor. There are two `TODO` markers in the HTML worth knowing about:
- The **testimonials** section — replace/add real reviews only, never invented ones
- The **owner bio** on the "Meet the Owner" section — currently generic placeholder copy

## Deploying changes
This repo *is* the live site. Any push to `main` redeploys automatically via GitHub Pages
(usually live within a minute or two):

```bash
git add -A
git commit -m "Update site"
git push
```

## Local preview
No build step needed — just open `index.html` directly in a browser, or serve the folder:

```bash
python -m http.server 8000
```
