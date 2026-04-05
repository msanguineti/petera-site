# Petera Website

Static Astro site for the Petera website. The site includes four core pages:

- Home
- Privacy
- Support
- Terms

It is intentionally static and GitHub Pages compatible.

## Local development

From the project root:

```sh
npm install
npm run dev
```

The dev server runs at `http://localhost:4321` by default.

## Build and preview

```sh
npm run build
npm run preview
```

Static output is generated in `dist/`.

## Centralized site values (.env)

This project reads publish-time values from environment variables through `src/config/site.ts`.

1. Copy `.env.example` to `.env`.
2. Fill in the values once.
3. Run `npm run dev` or `npm run build`.

Variables:

- `PUBLIC_OWNER_ENTITY`
- `PUBLIC_SUPPORT_EMAIL`
- `PUBLIC_EFFECTIVE_DATE`
- `PUBLIC_COUNTRY_OR_JURISDICTION`
- `PUBLIC_JURISDICTION`
- `PUBLIC_APP_STORE_URL`
- `PUBLIC_PLAY_STORE_URL`
- `PUBLIC_COPYRIGHT_YEAR`

## GitHub Pages deployment

This project is configured for static output in `astro.config.mjs`.

1. Set `site` and `base` in `astro.config.mjs`.
2. Build with `npm run build`.
3. Publish the `dist/` contents via your GitHub Pages workflow (for example, a Pages action that uploads `dist/`).

Typical configuration examples:

- User site repo (for example, `username.github.io`):
	- `site: 'https://username.github.io'`
	- `base: '/'`
- Project site repo (for example, `petera-site`):
	- `site: 'https://username.github.io'`
	- `base: '/petera-site'`

## Project structure

```text
/
├── public/
│   └── assets/
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── privacy.astro
│   │   ├── support.astro
│   │   └── terms.astro
│   └── styles/
│       └── global.css
└── astro.config.mjs
```

## Pre-publish checklist

Before publishing:

- Verify `.env` has final values.
- Set final GitHub Pages URL in `astro.config.mjs` (`site` and `base`).

## Final factual checks before launch

Confirm these statements are still true:

- Petera is local-first
- Reminder data stays on device unless exported by the user
- Local export/import are available
- Encrypted export is the default path
- Import is replace-only
- History is optional and off by default
- Insights are optional and off by default
- There is no sync-centered public product promise yet
