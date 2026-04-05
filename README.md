# Petera Public Website

Static Astro site for the public Petera website. The site includes four core pages:

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

## Pre-publish placeholders

Replace the following values before publishing:

- `YOUR_NAME_OR_ENTITY`
- `YOUR_CONTACT_EMAIL`
- `EFFECTIVE_DATE`
- `YOUR_COUNTRY_OR_JURISDICTION`
- `YOUR_JURISDICTION`
- `APP_STORE_URL`
- `PLAY_STORE_URL`
- Final GitHub Pages URL
- Final copyright line

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
