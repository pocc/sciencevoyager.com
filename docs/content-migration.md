# Content Migration

## Status

All text content and images have been migrated from the monolith HTML archives into React components.

### Pages

| Page | Route | Source | Status |
|------|-------|--------|--------|
| Home | `/demo` | `index.html` | Migrated — hero, bio, 6 testimonials, contact CTA |
| About | `/demo/about` | `about/index.html` | Migrated — education, books, teaching, Fulbright, personal |
| Contact | `/demo/contact` | `contact/index.html` | Migrated — form (mailto fallback), address, phone, emails |
| Destinations | `/demo/destination-topics` | `destination-topics/index.html` | Migrated — 12 regions, 100+ lecture titles |
| Ships | `/demo/ship-list` | `ship-list/index.html` | Migrated — 9 cruise lines, 21 ships |
| Special Interest | `/demo/special-interest` | `special-interest/index.html` | Migrated — 6 lecture series with descriptions |
| Videos | `/demo/videos` | `videos/index.html` | Migrated — 4 video excerpts, thank-you section |

### Images

8 unique images were extracted from the base64-encoded monolith HTML files.

| File | Description | Used On |
|------|-------------|---------|
| `logo.png` | ScienceVoyager atom/compass icon (6 KB) | Layout header |
| `hero-cruise-ship.jpg` | Cruise ship in harbor (120 KB) | Home hero |
| `jim-and-olivia.jpg` | Jim & Olivia portrait (10 KB) | About: When Not Cruising |
| `books.jpg` | Five environmental book covers (11 KB) | About: Books and Articles |
| `fulbright-india.jpg` | Fulbright workshop in India (39 KB) | About: Teaching |
| `geology-students.jpg` | Geology students group photo (32 KB) | About: Dreams of Smooth Sailing |
| `sydney-opera-house.jpg` | Sydney Opera House at dusk (27 KB) | Available for use |
| `jim-azamara-speaker.jpg` | Jim next to Azamara speaker bio (154 KB) | Videos page |

### How Images Were Extracted

The monolith HTML files embed all images as `data:image/...;base64,...` URIs (saved by monolith v2.7.0). A Python script was used to:

1. Regex-match all `<img>` tags with data URIs
2. Deduplicate by MD5 hash of the first 200 chars of base64 data
3. Skip 1x1 transparent GIF placeholders (lazy-loading stubs)
4. Decode and save as individual files

## Referencing Images in Components

Images live in `public/images/` and are referenced using Vite's base URL:

```tsx
<img
  src={`${import.meta.env.BASE_URL}images/hero-cruise-ship.jpg`}
  alt="Cruise ship in harbor"
/>
```

This resolves to `/demo/images/hero-cruise-ship.jpg` in production (matching the `base: "/demo/"` config).

## Data Patterns

Content-heavy pages store structured data as typed arrays at the top of the component file:

- **DestinationTopics.tsx** — `destinations[]` with `region` and `lectures[]`
- **ShipList.tsx** — `cruiseLines[]` with `line` and `ships[]`
- **SpecialInterest.tsx** — `series[]` with `title` and `description`
- **Home.tsx** — `testimonials[]` with `quote`, `name`, `location`
- **Videos.tsx** — `videos[]` with `title` and `description`

If the data grows, these can be extracted into `src/data/` files.

## Remaining Gaps

See [gap-analysis.md](gap-analysis.md) for a full comparison between the legacy site and /demo, including missing PDF downloads, video embeds, social links, and more.
