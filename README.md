# Petera Site

Static marketing site for the Petera app, built with [Astro](https://astro.build).

## Requirements

- Node.js ≥ 22.12.0
- npm

## Getting started

```sh
npm install
npm run dev       # start local dev server at http://localhost:4321
```

## Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the local development server   |
| `npm run build`   | Build the static site into `dist/`   |
| `npm run preview` | Preview the production build locally |
| `npm run check`   | Run Astro's TypeScript type checker  |

## Project structure

```
src/
  data/site.ts        # All page copy and structured content
  layouts/
    SiteLayout.astro  # Shared HTML shell (head, nav, footer)
  pages/
    index.astro       # Landing page
    privacy.astro     # Privacy policy page
    404.astro         # Not found page
  styles/
    global.css        # Global styles
public/               # Static assets served as-is
astro.config.mjs      # Astro configuration
```

Most content edits only require changes to `src/data/site.ts`.

## Deployment

Pushes to `main` trigger the GitHub Actions workflow at `.github/workflows/deploy.yml`, which:

1. Runs `astro check` (type check — blocks deploy on failure)
2. Builds the static site with `withastro/action`
3. Deploys to GitHub Pages

The live site is at [petera.app](https://petera.app).

### Site URL

`site` is hardcoded to `https://petera.app` in `astro.config.mjs`. No `base` is needed when using a custom domain, per the [Astro GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/). To change the domain, update `site` in `astro.config.mjs`.
