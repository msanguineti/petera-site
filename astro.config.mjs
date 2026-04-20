// @ts-check
import { defineConfig } from 'astro/config'

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1]
const owner = process.env.GITHUB_REPOSITORY_OWNER
const defaultSite = owner ? `https://${owner}.github.io` : 'https://example.github.io'
const defaultBase =
  repository && owner && repository !== `${owner}.github.io`
    ? `/${repository}`
    : '/'

export default defineConfig({
  output: 'static',
  site: process.env.SITE_URL ?? defaultSite,
  base: process.env.BASE_PATH ?? defaultBase,
})
