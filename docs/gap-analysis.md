# Gap Analysis: Legacy Site vs /demo

Detailed comparison of `sciencevoyager.com` (GoDaddy monolith) and `sciencevoyager.com/demo` (React SPA).

## Summary

| Feature | Legacy | /demo | Priority |
|---------|--------|-------|----------|
| PDF Downloads (7 trip lectures) | Yes | **Missing** | High |
| Video embeds (Vimeo) | Yes | Text placeholders only | High |
| Social media links | Facebook + Twitter | **Missing** | Medium |
| Mailing list signup | Email signup form | **Missing** | Medium |
| Home page video | Jill Darby Zuiderdam video | **Missing** | Medium |
| Contact form backend | GoDaddy form handler | Mailto fallback | Medium |
| SEO meta tags | Full OG + Twitter cards | Basic title only | Medium |
| Photo gallery | "Glacier Lecture before Milford Sound" | **Missing** | Low |
| Analytics/tracking | GoDaddy tracking | None | Low |

## What /demo Does Better

- Responsive mobile navigation (hamburger menu)
- Cleaner, faster layout (no 20MB inline base64 images)
- Modern typography and spacing with Tailwind CSS
- Structured data (easy to update content)
- Proper semantic HTML

---

## Missing Features in Detail

### 1. PDF Download Links (High Priority)

The legacy home page has a "Selected Trip Downloads" section with 7 PDFs hosted on GoDaddy:

| Download | URL |
|----------|-----|
| 2019 Australia-NZ | `https://img1.wsimg.com/blobby/go/4d715a20-.../downloads/2019%20Australia-NZ.pdf` |
| 2018 Iceland-Greenland | `https://img1.wsimg.com/blobby/go/4d715a20-.../downloads/2018%20Iceland-Greenland.pdf` |
| 2019 Eastern Caribbean | `https://img1.wsimg.com/blobby/go/4d715a20-.../downloads/2019%20Eastern%20Caribbean.pdf` |
| 2021 Geology and Beer | `https://img1.wsimg.com/blobby/go/4d715a20-.../downloads/2021%20Geology%20and%20Beer%20072821.pdf` |
| 2022 Beer Venice to Athens | `https://img1.wsimg.com/blobby/go/4d715a20-.../downloads/2022%20Beer%20Venice%20to%20Athens.pdf` |
| 2022 Santorini annotated photos | `https://img1.wsimg.com/blobby/go/4d715a20-.../downloads/2022%20Santorini%20annotated%20photos.pdf` |
| 2023 Journey to Iceland and Greenland | `https://img1.wsimg.com/blobby/go/4d715a20-.../downloads/2023%20%20-%20Journey%20to%20Iceland%20a...` |

**Note:** These PDFs are hosted on GoDaddy's CDN (`img1.wsimg.com`). They should be downloaded and served locally from `public/downloads/` before the GoDaddy hosting expires.

### 2. Video Embeds (High Priority)

The legacy videos page has Vimeo video thumbnails from the Vimeo CDN:
- `vimeocdn.com/video/1800308805-...` (thumbnail 1)
- `vimeocdn.com/video/1800309005-...` (thumbnail 2)

The monolith tool did not capture the actual Vimeo player embed IDs (the GoDaddy builder likely loaded them via JavaScript). The actual Vimeo video IDs need to be obtained from the site owner.

The legacy home page also references a video by Jill Darby taken on the Holland America Zuiderdam on July 13, 2023 (en route from Qaqortoq to Nanortalik, Greenland).

**Current /demo state:** Videos page shows text-only cards with titles and descriptions — no actual video players.

### 3. Social Media Links (Medium Priority)

Legacy site has links to:
- **Facebook:** `https://www.facebook.com/101244661287586`
- **Twitter:** `https://www.twitter.com/@sciencevoyager`

Not present anywhere in the React SPA footer or header.

### 4. Mailing List Signup (Medium Priority)

Legacy home page has a "Join Our Mailing List" section with:
- Email address input field
- "Sign up" button

Not implemented in /demo.

### 5. Contact Form Backend (Medium Priority)

- **Legacy:** GoDaddy-hosted form handler processes submissions server-side
- **/demo:** Form opens the user's email client via `mailto:` link — not a real form submission

Options to implement:
- Cloudflare Pages Functions (serverless)
- Third-party form service (Formspree, Formspark, etc.)
- Cloudflare Workers with email routing

### 6. SEO Meta Tags (Medium Priority)

Legacy site has full Open Graph and Twitter Card metadata. The /demo SPA has only a basic `<title>` in `demo.html`.

Needed:
- `og:title`, `og:description`, `og:image`, `og:url`
- `twitter:card`, `twitter:site` (@sciencevoyager)
- Per-page `<title>` updates (via `document.title` or react-helmet)

### 7. Photo Gallery (Low Priority)

Legacy home page has a "Photo Gallery" section with at least one captioned photo: "Glacier Lecture before Milford Sound, New Zealand." Not implemented in /demo.

---

## Page-by-Page Content Accuracy

### Home Page
- Hero section: Complete
- Jim Jacobs bio: Complete
- Testimonials: All 6 present and accurate
- **Missing:** PDF downloads section, video embed, mailing list signup, photo gallery

### About Page
- All 6 sections present with correct text
- All 4 images placed correctly (books, Fulbright, Jim & Olivia, geology students)
- Content appears complete

### Contact Page
- Address, phone, emails: Complete
- Form fields (name, email, message): Present
- **Missing:** Server-side form handler

### Destination Topics
- All 12 regions present
- 100+ lecture titles transcribed
- Content appears complete

### Ship List
- All 9 cruise lines present
- 21 ships listed
- Content appears complete (monolith HTML is 3066 lines, mostly due to GoDaddy builder boilerplate)

### Special Interest
- All 6 lecture series with full descriptions
- Content appears complete

### Videos
- All 4 video titles and descriptions present
- Thank-you section present
- Jim Azamara speaker image present
- **Missing:** Actual video embeds/players
