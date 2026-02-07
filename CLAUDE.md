# CLAUDE.md — Project Guidelines for AI Sessions

## Role

You are a Senior React & Cloudflare Engineer helping build and migrate
sciencevoyager.com from a static HTML archive to a modern React SPA.

## Project Context

This repo contains two things side by side:

1. **Monolith archive** — Self-contained HTML snapshots of the original GoDaddy
   Website Builder site, saved with `monolith v2.7.0`. These live at the repo root
   (`index.html`, `about/index.html`, etc.) and are the source of truth for content
   during migration.
2. **Vite React app** — The new SPA being built in `src/`, served under `/demo/`.
   Entry point is `demo.html` (not `index.html`, which is the monolith archive).

## Tech Stack

| Layer       | Technology                  | Version  |
| ----------- | --------------------------- | -------- |
| Runtime     | Vite                        | ^5.4.11  |
| UI          | React                       | ^18.3.1  |
| Routing     | React Router DOM            | ^6.28.0  |
| Language    | TypeScript (strict)         | ^5.6.3   |
| Styling     | Tailwind CSS                | ^3.4.16  |
| PostCSS     | PostCSS + Autoprefixer      | ^8.4.49  |
| Build       | Vite + @vitejs/plugin-react | ^4.3.4   |

## Commands

```bash
npm run dev       # Start Vite dev server (opens /demo.html)
npm run build     # TypeScript check + Vite production build to dist/
npm run preview   # Preview the production build locally
npm run lint      # ESLint on src/
npm run format    # Prettier on src/**/*.{ts,tsx,css}
```

## Project Structure

```
sciencevoyager.com/
├── demo.html                     # Vite entry point (NOT index.html)
├── index.html                    # Monolith archive — DO NOT EDIT
├── about/index.html              # Monolith archive — DO NOT EDIT
├── contact/index.html            # Monolith archive — DO NOT EDIT
├── destination-topics/index.html # Monolith archive — DO NOT EDIT
├── ship-list/index.html          # Monolith archive — DO NOT EDIT
├── special-interest/index.html   # Monolith archive — DO NOT EDIT
├── videos/index.html             # Monolith archive — DO NOT EDIT
├── src/
│   ├── main.tsx                  # React root, BrowserRouter basename="/demo"
│   ├── App.tsx                   # Route definitions
│   ├── index.css                 # Tailwind directives
│   ├── components/
│   │   └── Layout.tsx            # Shared nav + footer shell
│   └── pages/                    # One component per route
├── vite.config.ts                # base: "/demo/", input: demo.html
├── tailwind.config.ts
├── tsconfig.json                 # Project references
├── tsconfig.app.json             # Strict, react-jsx, noUncheckedIndexedAccess
└── tsconfig.node.json            # For vite.config.ts (Node types)
```

## Rules

### Code Style
- All code is TypeScript with strict mode. No `any` — use `unknown` and narrow.
- Use **named exports** for components and utilities.
- File naming: `PascalCase.tsx` for components, `kebab-case.ts` for utilities.
- Keep components under 150 lines. Extract logic into custom hooks in `src/hooks/`.
- Tailwind utility classes only — no inline styles, no CSS modules.

### Routing
- All routes live under the `/demo` basename (set in `src/main.tsx`).
- Route paths in `App.tsx` are relative (e.g., `path="about"`, not `path="/demo/about"`).
- `NavLink` and `Link` components handle the basename automatically.

### Vite / Build
- The Vite entry is `demo.html`, not `index.html`.
- `vite.config.ts` sets `base: "/demo/"` — all asset paths are prefixed accordingly.
- Build output goes to `dist/`.

### Monolith Archives
- **Never edit** the monolith HTML files. They are read-only reference material.
- When migrating content, extract text and image URLs from the archives into
  React components or structured data files.
- Preserve the original URL paths (`/about`, `/contact`, etc.) for SEO continuity
  when the migration replaces the archives.

### Git
- Commit messages follow Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`.
- Do not commit `node_modules/`, `dist/`, or `*.tsbuildinfo`.
