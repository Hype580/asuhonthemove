# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Run production build locally
npm run lint     # ESLint (next/core-web-vitals + next/typescript)
```

No test suite is configured.

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```
RESEND_API_KEY=      # Required for contact form email delivery
GOOGLE_ANALYTICS_ID= # Optional GA4 measurement ID
```

## Architecture

**Next.js 14 App Router** — static marketing site for ASUH (a Brunei-based nanny/childcare agency).

### Routing

All routes live under `src/app/`. Each page is a React Server Component. The only API route is `POST /api/contact`, which sends form submissions via [Resend](https://resend.com) to `contact@asuhonthemove.com` with in-memory IP-based rate limiting (1 request per 10 min).

### Data Layer

`src/data/` holds all site content as typed TypeScript constants (no CMS, no database):
- `siteDetails.ts` — site name, URL, metadata, GA ID
- `navigation.ts` — nav links
- `services.ts` — service offerings
- `heroContent.ts` — hero section copy
- `footer.ts` — footer links/content

Edit these files to update site content without touching components.

### Styling

TailwindCSS with a custom theme defined via CSS variables in `globals.css`. The theme tokens (`--primary`, `--secondary`, `--primary-accent`, etc.) are mapped in `tailwind.config.ts`, so use the semantic Tailwind classes (`text-primary`, `bg-secondary`) rather than raw color values. Font is Poppins loaded via `next/font/google`.

### Path Alias

`@/*` resolves to `src/*` — use this for all internal imports.

### Key Architectural Notes

- The `Navbar` is not in `layout.tsx` — each page renders it directly, which means per-page nav customization is possible.
- `src/app/metadata.ts` centralizes the base `Metadata` object exported from `layout.tsx`. SEO files (`robots.ts`, `sitemap.ts`) are co-located in `src/app/`.
- `src/utils.tsx` and `src/lib/` contain shared utilities. `clsx` + `tailwind-merge` are available via these utilities for conditional class merging.
- Partner logos are static files under `public/partners/`.
