# Tech Stack

## Core

| Technology | Version | Why |
| ---------- | ------- | --- |
| **Vite** | ^5.4.11 | Fastest dev server for React. Native ES modules, instant HMR, optimized production builds with Rollup. |
| **React** | ^18.3.1 | Component-based UI library. Concurrent features, large ecosystem, strong TypeScript support. |
| **React DOM** | ^18.3.1 | React renderer for the browser. Paired with React core. |
| **TypeScript** | ^5.6.3 | Static type safety. Catches bugs at compile time, enables confident refactoring, provides editor intellisense. Strict mode is enabled. |
| **@vitejs/plugin-react** | ^4.3.4 | Vite plugin providing React Fast Refresh and JSX transform via esbuild in dev, Babel in production. |

## Routing

| Technology | Version | Why |
| ---------- | ------- | --- |
| **React Router DOM** | ^6.28.0 | Standard client-side routing for React SPAs. Supports nested routes, layouts via `<Outlet>`, and a `basename` prop for mounting the app under `/demo/`. |

## Styling

| Technology | Version | Why |
| ---------- | ------- | --- |
| **Tailwind CSS** | ^3.4.16 | Utility-first CSS framework. Rapid prototyping with consistent design tokens. Production builds purge unused classes for small CSS bundles. |
| **PostCSS** | ^8.4.49 | CSS transformation pipeline. Required by Tailwind for processing `@tailwind` directives. |
| **Autoprefixer** | ^10.4.20 | Adds vendor prefixes automatically based on browser support targets. Eliminates manual cross-browser CSS work. |

## State Management

No dedicated state library is installed. Current approach:

| Approach | When to Use |
| -------- | ----------- |
| **React `useState` / `useReducer`** | Local component state. Sufficient for most UI interactions. |
| **React Context** | Shared state across a subtree (e.g., theme, auth). Avoid for high-frequency updates. |
| **Lift state up** | When siblings need the same data. Pass props down rather than introducing global state prematurely. |

<!-- TODO: If server state (API fetching, caching) becomes needed, evaluate
TanStack Query. If client state grows complex, evaluate Zustand. -->

## Testing

No test infrastructure is installed yet.

| Technology | Purpose | Notes |
| ---------- | ------- | ----- |
| **Vitest** | Unit and component tests | <!-- TODO: Install when ready. Vite-native, Jest-compatible API. --> |
| **Testing Library** | DOM testing utilities | <!-- TODO: Install @testing-library/react for user-centric component tests. --> |
| **Playwright** | End-to-end browser tests | <!-- TODO: Install when core pages are migrated and worth testing end-to-end. --> |

## Code Quality

| Technology | Purpose | Notes |
| ---------- | ------- | ----- |
| **ESLint** | Linting | <!-- TODO: Install and configure. Use eslint-plugin-react, @typescript-eslint. --> |
| **Prettier** | Formatting | <!-- TODO: Install and add .prettierrc config. --> |

Scripts are already defined in `package.json` (`npm run lint`, `npm run format`)
and will work once the packages are installed.

## Type Definitions

| Package | Version | Why |
| ------- | ------- | --- |
| **@types/react** | ^18.3.12 | TypeScript definitions for React. Enables type-checked JSX and hooks. |
| **@types/react-dom** | ^18.3.1 | TypeScript definitions for ReactDOM. Required for `createRoot` and DOM-specific APIs. |
| **@types/node** | ^25.2.1 | TypeScript definitions for Node.js APIs. Used only in `vite.config.ts` (build-time), not in app code. |

## TypeScript Configuration

| Setting | Value | Why |
| ------- | ----- | --- |
| `strict` | `true` | Enables all strict type-checking options. Non-negotiable for new projects. |
| `noUncheckedIndexedAccess` | `true` | Array and object index access returns `T \| undefined`. Prevents uncaught runtime errors. |
| `noUnusedLocals` | `true` | Dead code detection at compile time. |
| `noUnusedParameters` | `true` | Flags unused function parameters. |
| `jsx` | `react-jsx` | Uses the automatic JSX runtime — no need to `import React` in every file. |

## Legacy / Archive Tools

| Technology | Version | Purpose |
| ---------- | ------- | ------- |
| **monolith** | v2.7.0 | CLI tool that saved the original GoDaddy site as self-contained HTML files with all assets inlined. Used once for archival; not part of the active development workflow. |
