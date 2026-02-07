# Content Migration

## Status

All text content and images have been migrated from the monolith HTML archives into React components.

### Pages

| Page | Route | Source | Status |
|------|-------|--------|--------|
| Home | `/demo` | `index.html` | Migrated — hero, bio, 6 testimonials, PDF downloads, mailing list, contact CTA |
| About | `/demo/about` | `about/index.html` | Migrated — education, books, teaching, Fulbright, personal |
| Contact | `/demo/contact` | `contact/index.html` | Migrated — form (mailto fallback), address, phone, emails |
| Destinations | `/demo/destination-topics` | `destination-topics/index.html` | Migrated — 12 regions with images, 100+ lecture titles |
| Ships | `/demo/ship-list` | `ship-list/index.html` | Migrated — 9 cruise lines, 21 ships |
| Special Interest | `/demo/special-interest` | `special-interest/index.html` | Migrated — 6 lecture series with descriptions |
| Videos | `/demo/videos` | `videos/index.html` | Migrated — 4 video cards with thumbnails, thank-you section |

### Images

#### Main Site Images (from monolith base64 extraction)

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

#### Destination Images (from monolith + Unsplash)

12 destination region banner images in `public/images/destinations/`:

| File | Description | Source |
|------|-------------|--------|
| `norway-fjord.jpg` | Norwegian fjord with waterfalls (22 KB) | Monolith |
| `baltic.jpg` | St. Basil's Cathedral, Moscow (19 KB) | Monolith |
| `transatlantic.jpg` | Cruise ship at sea (16 KB) | Monolith |
| `mediterranean.jpg` | The Colosseum, Rome (22 KB) | Monolith |
| `new-zealand-australia.jpg` | Sydney Opera House (27 KB) | Monolith |
| `hawaii-south-pacific.jpg` | Surfer riding a wave (15 KB) | Monolith |
| `caribbean.jpg` | Cruise ships in turquoise port (63 KB) | Unsplash |
| `iceland-greenland.jpg` | Icelandic mountain, black sand (35 KB) | Unsplash |
| `panama-canal.jpg` | Ship in canal locks (91 KB) | Unsplash |
| `south-america.jpg` | Machu Picchu in clouds (47 KB) | Unsplash |
| `alaska.jpg` | Glacier Bay, snow-capped mountains (63 KB) | Unsplash |
| `east-asia.jpg` | Mt. Fuji with Japanese pagoda (40 KB) | Unsplash |

#### Video Thumbnails

| File | Description | Source |
|------|-------------|--------|
| `video-karoo-sea.jpg` | Jim lecturing about the Karoo Sea (44 KB) | Vimeo CDN |
| `video-glacial-flour.jpg` | Jim lecturing about glacial flour (44 KB) | Vimeo CDN |

### How Images Were Extracted

The monolith HTML files embed all images as `data:image/...;base64,...` URIs (saved by monolith v2.7.0). A Python script was used to:

1. Regex-match all `<img>` tags with data URIs
2. Deduplicate by full MD5 hash of decoded bytes
3. Skip 1x1 transparent GIF placeholders (lazy-loading stubs)
4. Decode and save as individual files

**Note:** Initial extraction used MD5 of the first 200 chars of base64 data, which incorrectly merged different-resolution copies of images. Using the full decoded bytes for MD5 hashing correctly identifies unique images.

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

- **DestinationTopics.tsx** — `destinations[]` with `region`, `image?`, `alt?`, and `lectures[]`
- **ShipList.tsx** — `cruiseLines[]` with `line` and `ships[]`
- **SpecialInterest.tsx** — `series[]` with `title` and `description`
- **Home.tsx** — `testimonials[]` and `downloads[]` with `title` and `url`
- **Videos.tsx** — `videos[]` with `title`, `description`, `thumbnail?`, and `alt?`

If the data grows, these can be extracted into `src/data/` files.

## Remaining Gaps

See [gap-analysis.md](gap-analysis.md) for a full comparison between the legacy site and /demo, including missing video embeds, contact form backend, and more.
