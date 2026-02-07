# Contributing to ScienceVoyager.com

## Project Context

This project is being migrated from a static HTML archive (GoDaddy Website
Builder) to a modern React SPA. The archived HTML files in the repo root are
read-only reference material. All new work happens in `src/`.

The new app is served at `/demo/` so it coexists with the legacy archives
during development.

## Prerequisites

| Tool | Version | Install |
| ---- | ------- | ------- |
| **Node.js** | 20 LTS or later | [nodejs.org](https://nodejs.org) or `nvm install 20` |
| **npm** | 10+ (bundled with Node) | Comes with Node.js |
| **Git** | 2.x+ | [git-scm.com](https://git-scm.com) |

## Setup

```bash
git clone <repo-url>
cd sciencevoyager.com
npm install
```

## Development

```bash
npm run dev
```

This starts the Vite dev server with hot module replacement. It will open
`/demo.html` in your browser automatically. Navigate to:

- `http://localhost:5173/demo.html` — the React app entry point

From there, React Router handles client-side navigation to `/demo/about`,
`/demo/contact`, etc.

The monolith archives are also accessible during dev since Vite serves all
static files in the project root:

- `http://localhost:5173/index.html` — original homepage archive
- `http://localhost:5173/about/` — original about page archive

## Available Scripts

| Command | What it does |
| ------- | ------------ |
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | TypeScript type-check + Vite production build to `dist/` |
| `npm run preview` | Serve the production build locally for verification |
| `npm run lint` | Run ESLint on `src/` |
| `npm run format` | Run Prettier on `src/**/*.{ts,tsx,css}` |

## Project Structure

```
sciencevoyager.com/
├── demo.html                     # Vite entry point
├── src/
│   ├── main.tsx                  # React root (BrowserRouter basename="/demo")
│   ├── App.tsx                   # Route definitions
│   ├── index.css                 # Tailwind directives
│   ├── vite-env.d.ts             # Vite type declarations
│   ├── components/
│   │   └── Layout.tsx            # Shared nav bar + footer
│   └── pages/
│       ├── Home.tsx
│       ├── About.tsx
│       ├── Contact.tsx
│       ├── DestinationTopics.tsx
│       ├── ShipList.tsx
│       ├── SpecialInterest.tsx
│       └── Videos.tsx
├── context/                      # Documentation for developers and AI
│   ├── ARCHITECTURE.md
│   └── TECH_STACK.md
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── CLAUDE.md                     # AI session guidelines
├── CONTRIBUTING.md               # This file
│
│   # Legacy archives (read-only, do not edit)
├── index.html                    # Monolith: homepage
├── about/index.html
├── contact/index.html
├── destination-topics/index.html
├── ship-list/index.html
├── special-interest/index.html
└── videos/index.html
```

## Conventions

### Branching

Trunk-based development on `master`:

- Create short-lived feature branches: `feat/add-about-content`,
  `fix/nav-link-active-state`
- Merge via pull request
- Delete branches after merge

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add hero section to home page
fix: correct nav link active state on about page
chore: install vitest and testing-library
docs: update architecture diagram with R2 bucket
```

### Code Style

- **TypeScript strict mode** — no `any` types, no implicit returns
- **Named exports** for all components and utilities
- **Tailwind utility classes** — no inline styles, no CSS modules
- **Functional components** with hooks — no class components
- Components in `PascalCase.tsx`, utilities in `kebab-case.ts`

### Formatting and Linting

Prettier handles formatting, ESLint handles code patterns. Run both before
committing:

```bash
npm run format
npm run lint
```

<!-- TODO: Set up husky + lint-staged for automatic pre-commit checks. -->

## Migrating a Page

To migrate content from a monolith archive to the new React app:

1. Open the monolith archive (e.g., `about/index.html`) in a browser to see
   the rendered content
2. Extract the text, image URLs, and page structure
3. Build the React component in `src/pages/` using Tailwind for styling
4. Verify the new page at `/demo/about` matches the original content
5. Commit with a message like `feat: migrate about page content`

## Deployment

<!-- TODO: Configure Cloudflare Pages. The build command will be `npm run build`
and the output directory will be `dist/`. -->

```bash
npm run build     # Produces dist/
npm run preview   # Verify locally before deploying
```
