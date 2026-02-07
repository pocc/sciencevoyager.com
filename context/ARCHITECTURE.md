# Architecture Overview

## System at a Glance

```
┌──────────────────────────────────────────────────────────────┐
│                        Repository                            │
│                                                              │
│  ┌─────────────────────┐    ┌──────────────────────────────┐ │
│  │  Monolith Archives  │    │  Vite React App (src/)       │ │
│  │  (read-only)        │    │  Served at /demo/            │ │
│  │                     │    │                              │ │
│  │  /index.html        │    │  demo.html → src/main.tsx    │ │
│  │  /about/            │    │  ├── App.tsx (routes)        │ │
│  │  /contact/          │    │  ├── components/Layout.tsx   │ │
│  │  /destination-topics│    │  └── pages/*.tsx (7 pages)   │ │
│  │  /ship-list/        │    │                              │ │
│  │  /special-interest/ │    │  Build output: dist/         │ │
│  │  /videos/           │    │                              │ │
│  └─────────────────────┘    └──────────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘
```

## Two Coexisting Systems

### 1. Monolith Archives (Legacy)

Self-contained HTML files saved from the original GoDaddy Website Builder site
using `monolith v2.7.0` (Feb 2024). Each file has all CSS, JavaScript, images,
and fonts inlined as base64 — making them large (1–20 MB each) but fully
self-contained.

These serve as the **source of truth for content** during migration. They are
not edited or served by Vite.

| File                            | Page              | Size  |
| ------------------------------- | ----------------- | ----- |
| `/index.html`                   | Homepage          | 20 MB |
| `/about/index.html`             | About             | 2.4 MB |
| `/contact/index.html`           | Contact           | 1.1 MB |
| `/destination-topics/index.html`| Destination Topics| 2.8 MB |
| `/ship-list/index.html`         | Ship List         | 1.1 MB |
| `/special-interest/index.html`  | Special Interest  | 2.0 MB |
| `/videos/index.html`            | Videos            | 7.9 MB |

### 2. Vite React App (New)

A single-page application built with React 18, TypeScript, and Tailwind CSS.
During development it coexists at `/demo/` so the original site remains
accessible at `/` for reference.

**Entry flow:**

```
demo.html
  └── <script src="/src/main.tsx">
        └── createRoot() → BrowserRouter basename="/demo"
              └── <App />
                    └── <Routes>
                          └── <Layout>  (nav + footer)
                                └── <Outlet />  (page component)
```

## Routing

React Router v6 with a `/demo` basename. All internal navigation uses relative
paths — the basename is applied automatically.

| Route Path           | Component            | Mirrors Archive         |
| -------------------- | -------------------- | ----------------------- |
| `/demo/`             | `Home.tsx`           | `/index.html`           |
| `/demo/about`        | `About.tsx`          | `/about/index.html`     |
| `/demo/contact`      | `Contact.tsx`        | `/contact/index.html`   |
| `/demo/destination-topics` | `DestinationTopics.tsx` | `/destination-topics/index.html` |
| `/demo/ship-list`    | `ShipList.tsx`       | `/ship-list/index.html` |
| `/demo/special-interest` | `SpecialInterest.tsx` | `/special-interest/index.html` |
| `/demo/videos`       | `Videos.tsx`         | `/videos/index.html`    |

## Styling

Tailwind CSS 3 with utility classes. Custom brand colors are defined in
`tailwind.config.ts`. No CSS modules, no inline styles, no external
stylesheets.

The shared `Layout` component provides a responsive nav bar and footer that
wraps all pages via React Router's `<Outlet />`.

## Build Pipeline

```
src/**/*.tsx  ──┐
                ├──  tsc -b (type check)  ──  vite build  ──  dist/
demo.html   ──┘
```

- TypeScript compilation uses project references (`tsconfig.json` →
  `tsconfig.app.json` + `tsconfig.node.json`).
- Vite bundles the app with `base: "/demo/"`, so all asset paths in the output
  are prefixed with `/demo/`.
- Build output lands in `dist/` (git-ignored).

## Infrastructure

<!-- TODO: No Cloudflare resources are configured yet. When wrangler.toml is
created, document KV namespaces, D1 databases, R2 buckets, and other bindings
here. -->

**Current hosting:** Not yet configured. The monolith archives were originally
served from GoDaddy. The Vite app is local-only during development.

**Planned hosting:** Cloudflare Pages — static assets on the CDN with optional
Pages Functions for server-side logic (e.g., contact form handling).

## Migration Path

1. Extract content (text, images, metadata) from each monolith archive
2. Build the corresponding React page component with that content
3. Store extracted images in `public/` or an R2 bucket
4. Once all pages are migrated, remove the `/demo` basename and replace the
   monolith archives with the Vite build output
5. Configure Cloudflare Pages deployment
