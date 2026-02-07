# Gap Analysis: Legacy Site vs /demo

Detailed comparison of `sciencevoyager.com` (GoDaddy monolith) and `sciencevoyager.com/demo` (React SPA).

## Summary

| Feature | Legacy | /demo | Status |
|---------|--------|-------|--------|
| PDF Downloads (7 trip lectures) | Yes | Yes (linked to GoDaddy CDN) | Done — PDFs should be hosted locally |
| Video embeds (Vimeo) | Yes (4 videos) | Thumbnails + placeholders | Partial — need Vimeo IDs from owner |
| Destination images | Some regions | All 12 regions | Done |
| Social media links | Facebook + Twitter | Facebook + Twitter in footer | Done |
| Mailing list signup | Email signup form | Email form (mailto fallback) | Done |
| SEO meta tags | Full OG + Twitter cards | Full OG + Twitter cards | Done |
| Home page video | Jill Darby Zuiderdam video | **Missing** | Not started |
| Contact form backend | GoDaddy form handler | Mailto fallback | Not started |
| Photo gallery | "Glacier Lecture before Milford Sound" | **Missing** | Not started |
| Analytics/tracking | GoDaddy tracking | None | Not started |

## What /demo Does Better

- Responsive mobile navigation (hamburger menu)
- Cleaner, faster layout (no 20MB inline base64 images)
- Modern typography and spacing with Tailwind CSS
- Structured data (easy to update content)
- Proper semantic HTML

---

## Completed Features

### 1. PDF Download Links (Done)

7 trip lecture PDFs are now linked on the Home page in a "Selected Trip Downloads" section with download icons and a responsive 2-column grid.

**Important:** The PDFs are still hosted on GoDaddy's CDN (`img1.wsimg.com`). They should be downloaded and served locally from `public/downloads/` before the GoDaddy hosting expires.

| Download | Year |
|----------|------|
| Journey to Iceland and Greenland | 2023 |
| Santorini Annotated Photos | 2022 |
| Beer Venice to Athens | 2022 |
| Geology and Beer | 2021 |
| Australia–New Zealand | 2019 |
| Eastern Caribbean | 2019 |
| Iceland–Greenland | 2018 |

### 2. Destination Images (Done)

All 12 destination regions now have banner images. 6 were extracted from the monolith base64 data, 6 were sourced from Unsplash (free license).

| Region | Image Source |
|--------|-------------|
| Northern Europe: Norway & Scotland | Monolith (Norwegian fjord) |
| Baltic & British Isles | Monolith (St. Basil's Cathedral) |
| Transatlantic | Monolith (cruise ship) |
| Mediterranean | Monolith (Colosseum) |
| New Zealand to Australia | Monolith (Sydney Opera House) |
| Hawai'i and South Pacific | Monolith (surfer wave) |
| Caribbean | Unsplash (cruise ships in port) |
| Iceland, Greenland & Maritimes | Unsplash (Icelandic mountain) |
| Panama Canal to Western Mexico | Unsplash (ship in canal locks) |
| South America | Unsplash (Machu Picchu) |
| Alaska & British Columbia | Unsplash (Glacier Bay) |
| East Asia & Far East | Unsplash (Mt. Fuji with pagoda) |

### 3. Social Media Links (Done)

Facebook and Twitter SVG icons added to the footer in `Layout.tsx`.

### 4. Mailing List Signup (Done)

"Join Our Mailing List" section added to Home page with email input and sign-up button. Uses `mailto:` fallback to `jim@sciencevoyager.com`.

### 5. SEO Meta Tags (Done)

Full Open Graph and Twitter Card metadata added to `demo.html`:
- `og:title`, `og:description`, `og:image`, `og:url`, `og:site_name`
- `twitter:card`, `twitter:site`, `twitter:title`, `twitter:description`, `twitter:image`

### 6. Video Thumbnails (Partial)

2 Vimeo CDN thumbnails downloaded for "Karoo Sea" and "Glacial Flour" lectures (showing Jim lecturing on a cruise ship stage). Video cards now display thumbnails with play button overlays. 2 remaining videos have placeholder cards.

---

## Remaining Gaps in Detail

### 1. Video Embeds (Need Vimeo IDs)

The legacy videos page had 4 Vimeo video players. The monolith tool captured only 2 CDN thumbnail URLs — the actual Vimeo embed IDs were loaded dynamically by GoDaddy's JavaScript and are not in the HTML.

Vimeo CDN thumbnail IDs found:
- `1800308805` → "The Karoo Sea in South Africa"
- `1800309005` → "Glacial Flour in South Africa"

These are **not** the public Vimeo video IDs. The videos could not be found via web search (likely private/unlisted). The site owner needs to provide the Vimeo video IDs from their account dashboard.

**Current /demo state:** Video cards with thumbnails (2) and placeholders (2), play button overlays, "video playback coming soon" note.

### 2. Contact Form Backend (Not Started)

- **Legacy:** GoDaddy-hosted form handler processes submissions server-side
- **/demo:** Form opens the user's email client via `mailto:` link

Options to implement:
- Cloudflare Pages Functions (serverless)
- Third-party form service (Formspree, Formspark, etc.)
- Cloudflare Workers with email routing

### 3. Home Page Jill Darby Video (Not Started)

Legacy home page references a video by Jill Darby taken on the Holland America Zuiderdam on July 13, 2023 (en route from Qaqortoq to Nanortalik, Greenland).

### 4. Photo Gallery (Not Started)

Legacy home page has a "Photo Gallery" section with at least one captioned photo: "Glacier Lecture before Milford Sound, New Zealand."

### 5. Analytics/Tracking (Not Started)

Legacy site had GoDaddy tracking. No analytics configured for /demo.

---

## Page-by-Page Content Accuracy

### Home Page
- Hero section: Complete
- Jim Jacobs bio: Complete
- Testimonials: All 6 present and accurate
- PDF downloads: 7 links present
- Mailing list signup: Present (mailto fallback)
- Contact CTA: Present

### About Page
- All 6 sections present with correct text
- All 4 images placed correctly (books, Fulbright, Jim & Olivia, geology students)
- Content appears complete

### Contact Page
- Address, phone, emails: Complete
- Form fields (name, email, message): Present
- **Missing:** Server-side form handler

### Destination Topics
- All 12 regions present with banner images
- 100+ lecture titles transcribed
- Content appears complete

### Ship List
- All 9 cruise lines present
- 21 ships listed
- Content appears complete

### Special Interest
- All 6 lecture series with full descriptions
- Content appears complete

### Videos
- All 4 video titles and descriptions present
- 2 Vimeo thumbnails displayed with play overlays
- 2 placeholder cards for videos without thumbnails
- Thank-you section present
- Jim Azamara speaker image present
- **Missing:** Actual video embeds/players (need Vimeo IDs)
