# Petera App Site

Static companion site for Petera.

## What it is

- Static output only.
- Suitable for GitHub Pages.
- No dependency on the main app's source files or assets at runtime.
- Product copy and palette cues are copied into this project so it can stand alone.

## Commands

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`

## GitHub Pages

This project is configured for static hosting.

- `astro.config.mjs` sets `output: 'static'`.
- When built on GitHub Actions, `site` and `base` are inferred from `GITHUB_REPOSITORY_OWNER` and `GITHUB_REPOSITORY`.
- Override them with `SITE_URL` and `BASE_PATH` if you use a custom domain or a different subpath.

This folder includes a `.github/workflows/deploy.yml` that works when `app-site` is its own repository.

If you keep this project nested inside another repository instead of splitting it out:

- move the workflow file to the host repo root
- set the Astro action `with.path` value to `app-site`

## Source alignment

The site content is based on the current Petera specs and app copy:

- calm, persistent reminder behaviour
- meaningful time windows instead of exact-time alarms
- local-first privacy stance
- mobile-first presentation
