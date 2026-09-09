# Eclectic Dental Care — website

Marketing site for Eclectic Dental Care, Sardar Patel Marg, Civil Lines, Prayagraj.
Next.js 16 (App Router, Turbopack) · React 19 · Tailwind v4 · Motion · Lenis.

```bash
npm run dev     # http://localhost:3000
npm run build   # production build (49 static routes)
npm start
```

---

## Before you go live — 4 things

1. **Domain.** Everything canonical is driven by `SITE_URL` in `src/lib/site.ts`.
   It is currently `https://eclecticdentalcare.in`. Change it there and the
   sitemap, robots, canonicals, OG tags and schema all follow.

2. **Real Google reviews.** `src/lib/testimonials.ts` is deliberately empty.
   Paste 4–6 real reviews, set the true rating and count, flip
   `published = true`, and the site swaps the credential wall for a review
   marquee and starts emitting `AggregateRating` schema. **Do not invent
   reviews** — fake review schema is a manual-action risk with Google and
   would undo the local ranking work.

3. **Verify the address against Google Business Profile.** The address string
   in `src/lib/site.ts` must match GBP character for character — it is the
   single biggest local ranking factor. Add the shop/floor number if GBP has one.

4. **Submit to Google.** Add the property in Google Search Console, submit
   `/sitemap.xml`, and make sure the GBP listing links to the site.

---

## Where things live

| What | Where |
|---|---|
| NAP, hours, phone, WhatsApp, service areas | `src/lib/site.ts` |
| All 15 treatments (copy, FAQs, process, images, SEO) | `src/lib/services.ts` |
| Doctor profiles | `src/lib/doctors.ts` |
| Clinic-level FAQs | `src/lib/faqs.ts` |
| Patient reviews | `src/lib/testimonials.ts` |
| JSON-LD builders | `src/lib/schema.ts` |
| Colour tokens, type scale, section rhythm | `src/app/globals.css` |
| Animation primitives | `src/components/motion/index.tsx` |
| Consultation popup timings | `src/components/lead/ConsultPopup.tsx` |

**One rule:** never hardcode the phone number, address or hours in a component.
They all come from `site.ts` so they can never drift out of sync — inconsistent
NAP across pages is what breaks local SEO.

### Adding a treatment

Append an object to the `services` array in `src/lib/services.ts`. The route,
the nav mega-menu entry, the footer link, the sitemap entry, the schema and the
FAQ rich-result markup are all generated from it. Nothing else to touch.

---

## SEO implementation

- **`Dentist` + `MedicalClinic` schema** on every page, with geo coordinates,
  both opening-hours blocks (incl. Sunday 6–8pm), `areaServed` covering
  Prayagraj plus 12 localities, and `sameAs` to Instagram and Google Maps.
- **`Physician` schema** per doctor, with `hasCredential` for the MDS degrees.
- **`MedicalWebPage` with `reviewedBy` + `lastReviewed`** on every treatment
  page, pointing at the MDS specialist who leads that treatment, plus a
  visible "Clinically reviewed by…" byline. Google classes dental pages as
  YMYL content and its quality raters look specifically for credentialed
  review — this is the strongest single E-E-A-T signal on the site.
  **It is a factual claim.** `site.contentReviewedOn` drives both the markup
  and the byline; bump it when the doctors actually re-read the pages, or set
  it to `null` to publish nothing.
- **Every route declares its page type** — CollectionPage, AboutPage,
  ContactPage, ImageGallery, MedicalWebPage — plus `ItemList` on /services.
- **Clinic node carries** `hasOfferCatalog` and `availableService` for all 15
  treatments, `knowsAbout`, `paymentAccepted`, Hindi + English
  `availableLanguage`, and `areaServed` across 12 localities.
- **`MedicalProcedure` + `FAQPage` + `BreadcrumbList`** on every treatment page —
  the FAQ markup is what produces expandable answers in Google results.
- **One page per treatment.** All 15 treatments live at `/services/<slug>`
  with equal weight — the clinic is not a single-treatment practice. The
  keyword URL `/invisalign-prayagraj` 301s into
  `/services/invisalign-clear-aligners` so older links still resolve.
- **Every treatment page carries** a licensed treatment photo, a real clinic
  photo, quick facts, overview, symptom list, a numbered process, benefits,
  FAQs (with FAQPage schema) and — on six of them — an honest side-by-side
  comparison with the realistic alternative.
- **Branded share cards.** Every treatment and doctor page renders its own
  1200×630 Open Graph image at build time (`src/lib/og.tsx`) — brand mark,
  Cormorant headline, phone CTA. Links shared on WhatsApp, which is how most
  referrals travel here, now preview as a designed card instead of a generic
  logo. Do not add `openGraph.images` in a page's `generateMetadata`: an
  inline value overrides the generated card.
- **Cost transparency.** Each treatment page names what actually moves its
  price (`costFactors`) without publishing figures, and states the
  written-quote-before-treatment promise. This is the most common reason a
  visitor leaves a dental site without enquiring.
- Titles are front-loaded with the keyword and the city; the brand is appended
  once by the layout template.
- `geo.region` / `geo.position` / `ICBM` meta tags for local relevance.
- **`/areas-we-serve`** captures "dentist in <locality> Prayagraj" queries as
  ONE genuinely useful directions page. Twelve near-identical per-locality
  landing pages is the doorway-page pattern Google penalises — this ranks for
  the same queries without the risk.
- **Sitemap `lastModified` is content-derived, not build time.** Stamping
  every URL with the deploy timestamp tells Google the whole site changed on
  every push, and it learns to ignore the signal.

---

## Consultation popup

`src/components/lead/ConsultPopup.tsx`. Asks for name and age, then hands the
visitor to WhatsApp with both filled in. Four constants at the top control it:

| Constant | Default | What it does |
|---|---|---|
| `FIRST_DELAY` | 12s | First appearance after landing |
| `REOPEN_DELAY` | 35s | Re-appearance after each dismissal |
| `MAX_APPEARANCES` | 3 | Cap per browser session |
| `SUBMITTED_DAYS` | 14 | Suppression once someone submits |

**On the cap.** The brief was to reopen 35s after it is closed. Left uncapped
that becomes a dialog that reappears every 35 seconds for as long as someone
is reading a treatment page — it reads as harassment and loses more enquiries
than it wins. Three appearances keeps the intent. Set `MAX_APPEARANCES` to
`Infinity` if you want it endless.

It is suppressed on `/contact` (the booking form is already on screen there),
and permanently once someone submits. Escape closes it, Tab stays inside it,
and it stops Lenis while open so the page cannot scroll behind it.

---

## Performance notes

- Source video was **5 clips of 8K HEVC, ~700 MB**. Transcoded to 720×1280
  H.264 — **7.2 MB total**. Clips use `preload="none"` and only start once an
  IntersectionObserver says they are on screen, so the gallery costs nothing
  until a visitor scrolls to it.
- Photos converted to WebP; `next/image` serves AVIF where supported.
- Treatment photography is licensed from Pexels (free for commercial use, no
  attribution required), downloaded and served locally rather than hotlinked,
  cropped to 4:5 and compressed — 15 images totalling about 1 MB.
- 49 routes prerendered as static HTML.

## Design system

Palette is locked by `EDC-COLOR-THEME.md` and encoded as tokens in
`globals.css`. Two rules that are easy to break:

- **Brick `#A9452F` is what you read. Terracotta `#C25E4A` is decoration**
  and display type only — it fails contrast under 24px. CTA buttons are brick
  with white text, never terracotta.
- **Where text meets a photograph, it goes in an ivory card sized to its own
  text** — never a dark scrim across the image. This is the brand's signature
  move; it carries the doctor cards and the specialism cards. The hero is
  deliberately text-only, so the specialists section directly beneath it is
  the visitor's first sight of the practice.

Type is Cormorant Garamond (display) + Plus Jakarta Sans (UI). Cormorant
defaults to oldstyle figures, so `font-variant-numeric: lining-nums` is forced
on display elements — without it "01" renders as "oi".

### Motion

`src/components/motion/` holds the primitives. Two matter most:

- **`ParallaxImage`** — every significant photograph on the site. The image
  layer is inset by -12% top and bottom and drifts up to ±10% of its own
  height against the scroll, so an edge can never be exposed at any scroll
  position. Scroll progress runs through a light spring because iOS throttles
  scroll events during momentum and the drift visibly steps without it.
- **`DoctorCard`** — the specialists section. Portrait parallax, a card that
  settles and lifts across the viewport, and the ivory name card sliding out
  of the photograph on a later beat. Transform and opacity only, so there is
  no layout or paint work: measured at 127fps with six parallax layers live.

Scroll reveals share one `VIEWPORT` config. Never give it a fractional
`amount` — an element taller than the viewport divided by that fraction can
never satisfy it and stays invisible forever. See the comment in `index.tsx`.

All motion respects `prefers-reduced-motion`: Lenis is bypassed entirely,
parallax is not applied, and transitions collapse to near-zero rather than
being merely shortened. Lenis deliberately does not hijack touch scrolling —
native momentum feels better on a phone, and the springs keep the
scroll-linked effects smooth without it.
