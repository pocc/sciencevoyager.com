# Architecture

## Overview

The repository contains two things side by side:

1. **Monolith archive** — Self-contained HTML snapshots of the original GoDaddy Website Builder site, saved with `monolith v2.7.0`. These are read-only reference material and are served at the root URLs (`/`, `/about`, etc.).
2. **Vite React SPA** — The new app being built in `src/`, served under `/demo/`.

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Runtime | Vite | ^5.4.11 |
| UI | React | ^18.3.1 |
| Routing | React Router DOM | ^6.28.0 |
| Language | TypeScript (strict) | ^5.6.3 |
| Styling | Tailwind CSS | ^3.4.16 |
| Hosting | Cloudflare Pages | — |

## Directory Structure

```
sciencevoyager.com/
├── demo.html                          # Vite entry point (NOT index.html)
├── index.html                         # Monolith archive — DO NOT EDIT
├── about/index.html                   # Monolith archive — DO NOT EDIT
├── contact/index.html                 # Monolith archive — DO NOT EDIT
├── destination-topics/index.html      # Monolith archive — DO NOT EDIT
├── ship-list/index.html               # Monolith archive — DO NOT EDIT
├── special-interest/index.html        # Monolith archive — DO NOT EDIT
├── videos/index.html                  # Monolith archive — DO NOT EDIT
├── public/
│   ├── _redirects                     # CF Pages SPA routing rules
│   └── images/                        # Extracted site images
│       ├── logo.png                   # ScienceVoyager atom logo
│       ├── hero-cruise-ship.jpg       # Home page hero banner
│       ├── jim-and-olivia.jpg         # Jim & Olivia portrait
│       ├── books.jpg                  # Five book covers
│       ├── fulbright-india.jpg        # Teaching workshop in India
│       ├── geology-students.jpg       # Geology students group
│       ├── sydney-opera-house.jpg     # Sydney Opera House
│       └── jim-azamara-speaker.jpg    # Jim with Azamara speaker bio
├── src/
│   ├── main.tsx                       # React root, BrowserRouter basename="/demo"
│   ├── App.tsx                        # Route definitions
│   ├── index.css                      # Tailwind directives
│   ├── components/
│   │   └── Layout.tsx                 # Shared nav + footer shell
│   └── pages/                         # One component per route
│       ├── Home.tsx
│       ├── About.tsx
│       ├── Contact.tsx
│       ├── DestinationTopics.tsx
│       ├── ShipList.tsx
│       ├── SpecialInterest.tsx
│       └── Videos.tsx
├── docs/                              # Project documentation
├── vite.config.ts                     # base: "/demo/", input: demo.html
├── tailwind.config.ts                 # Brand colors, content paths
├── tsconfig.json                      # Project references
├── tsconfig.app.json                  # Strict, react-jsx
└── tsconfig.node.json                 # For vite.config.ts
```

## Routing

- All routes live under the `/demo` basename (set in `src/main.tsx`).
- Route paths in `App.tsx` are relative (e.g., `path="about"`, not `path="/demo/about"`).
- `NavLink` and `Link` components handle the basename automatically.

## Vite Configuration

- Entry point: `demo.html` (not `index.html`, which is the monolith archive)
- `base: "/demo/"` — all asset paths are prefixed accordingly
- Build output: `dist/` (then restructured by the build script)

## Tailwind Theme

Custom brand colors defined in `tailwind.config.ts`:

```
brand-50:  #eff6ff
brand-600: #2563eb
brand-700: #1d4ed8
```
