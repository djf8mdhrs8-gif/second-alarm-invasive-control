# Second Alarm Invasive Control

Production-ready marketing website for **Second Alarm Invasive Control**, Southwest Florida's
specialists in green iguana removal and Muscovy duck removal.

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- `next-themes` (light/dark mode)
- `lucide-react` icons

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values you need:

```bash
cp .env.example .env.local
```

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | [Resend](https://resend.com) API key. When set, every contact form lead is emailed to `CONTACT_FORM_NOTIFY_EMAIL`. Recommended — free tier is plenty. |
| `CONTACT_FORM_WEBHOOK_URL` | Endpoint that receives JSON POST bodies for every contact form submission (Zapier, Make, a CRM webhook, etc.). Can be used alongside or instead of Resend. |
| `CONTACT_FORM_NOTIFY_EMAIL` | Email address that receives Resend lead notifications; also forwarded in the webhook payload. |
| `CONTACT_FORM_FROM_EMAIL` | Optional From address for Resend emails once your domain is verified in Resend. Defaults to `onboarding@resend.dev`. |
| `NEXT_PUBLIC_SITE_URL` | Canonical production URL, used for metadata, sitemap, and structured data. |

If neither `RESEND_API_KEY` nor `CONTACT_FORM_WEBHOOK_URL` is set, submissions are only logged
to the server console — configure at least one before launch so leads are actually delivered.

## Project Structure

```
app/                     Routes (App Router)
  layout.tsx             Root layout: fonts, theme, header/footer, global widgets
  page.tsx                Home page
  about/                  About page
  contact/                Contact page + Instant Quote Estimator
  services/               Service hub + Green Iguana / Muscovy Duck detail pages
  locations/              Local SEO landing pages (8 pages)
  api/contact/route.ts    Contact form submission handler
  sitemap.ts / robots.ts / manifest.ts / opengraph-image.tsx   SEO infrastructure

components/
  layout/                 Header, Footer, ThemeProvider, ThemeToggle
  home/                   Homepage sections (Hero, Services, Stats, FAQ, etc.)
  shared/                 Reusable UI (Button, ContactForm, PageHero, templates, etc.)
  future/                 Placeholder components for future integrations

lib/
  data.ts                 Central content (services, locations, testimonials, FAQs, nav)
  schema.ts               JSON-LD structured data builders
  metadata.ts             Shared metadata builder for consistent SEO tags
```

## SEO

- Unique `<title>`/description metadata and canonical URLs on every page
- `PestControl`, `Service`, `FAQPage`, and `BreadcrumbList` JSON-LD structured data
- Dynamic Open Graph image generation (`app/opengraph-image.tsx`)
- Auto-generated `sitemap.xml` and `robots.txt`
- 8 dedicated local-SEO landing pages targeting city + service keywords

## Future-Ready Placeholders

The `components/future/` directory contains stubbed components ready to be wired up to real
providers:

- `AIChatPlaceholder` — floating chat widget shell (mounted globally)
- `InstantQuoteEstimator` — client-side rough estimate tool (mounted on `/contact`)
- `OnlineSchedulingPlaceholder` — booking widget placeholder
- `CustomerPortalPlaceholder` — customer account/portal placeholder
- `AutomatedFollowUpPlaceholder` — typed hook marking where a drip-marketing integration should
  attach to the contact form flow

## Deploying to Vercel

1. Push this repository to GitHub (or GitLab/Bitbucket).
2. In [Vercel](https://vercel.com/new), import the repository. Framework preset is detected
   automatically as **Next.js**.
3. Add the environment variables from `.env.example` under **Project Settings → Environment
   Variables**.
4. Deploy. Vercel builds with `npm run build` and serves the app automatically — no additional
   configuration is required.

### Post-launch checklist

- Set `NEXT_PUBLIC_SITE_URL` to your live domain.
- Set `CONTACT_FORM_WEBHOOK_URL` so leads are actually delivered.
- Replace the placeholder gallery/testimonial content in `lib/data.ts` with real project photos
  and reviews once available.
- Swap `public/favicon.svg` for a permanent brand mark when ready.
