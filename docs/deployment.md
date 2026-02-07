# Deployment

ScienceVoyager is hosted on **Cloudflare Pages** from the GitHub repo `pocc/sciencevoyager.com`.

## Cloudflare Pages Settings

| Setting | Value |
|---------|-------|
| Git repository | `pocc/sciencevoyager.com` |
| Branch | `master` |
| Build command | `npm run build` |
| Build output directory | `dist` |

## Build Process

The build script in `package.json` does the following in order:

1. **TypeScript check** — `tsc -b`
2. **Vite build** — `vite build` outputs to `dist/`
3. **Restructure for `/demo/` base path** — Vite outputs assets to `dist/assets/` but the HTML references them at `/demo/assets/...` (due to `base: "/demo/"`). The script:
   - Creates `dist/demo/`
   - Moves `dist/assets/` → `dist/demo/assets/`
   - Moves `dist/images/` → `dist/demo/images/`
   - Renames `dist/demo.html` → `dist/demo/index.html`
4. **Copy monolith archives** — Copies the legacy HTML files (`index.html`, `about/`, `contact/`, etc.) into `dist/` root so the original site URLs continue to work.

### Why the restructuring?

Vite's `base: "/demo/"` config prefixes all asset URLs in the built HTML with `/demo/`. However, Vite still writes files to the root of `outDir` (e.g. `dist/assets/`). Cloudflare Pages serves files based on their actual path in the output directory, so `/demo/assets/foo.js` must map to `dist/demo/assets/foo.js`.

Without restructuring, requests to `/demo/assets/...` would 404 (or hit the `_redirects` SPA fallback).

## SPA Routing

The file `public/_redirects` contains:

```
/demo/* /demo/index.html 200
```

This is a Cloudflare Pages rewrite rule. Any request under `/demo/` that doesn't match a static file is served the SPA entry point (`dist/demo/index.html`), allowing React Router to handle client-side routing.

### Important: Avoid `.html` rewrite targets

Using `/demo.html` as a rewrite target causes Cloudflare Pages to issue a **308 redirect** to `/demo` (due to its "pretty URLs" feature). Always use the `/demo/index.html` form for rewrite targets.

## URL Structure

After deployment, the `dist/` directory serves:

| URL | File | Content |
|-----|------|---------|
| `/` | `dist/index.html` | Monolith homepage (legacy) |
| `/about` | `dist/about/index.html` | Monolith about page (legacy) |
| `/contact` | `dist/contact/index.html` | Monolith contact page (legacy) |
| `/demo` | `dist/demo/index.html` | React SPA |
| `/demo/about` | `dist/demo/index.html` | React SPA (client-side route) |
| `/demo/assets/*` | `dist/demo/assets/*` | Vite-built JS/CSS bundles |
| `/demo/images/*` | `dist/demo/images/*` | Extracted site images |
