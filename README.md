# Sunbites Landing — Next.js project

A real Next.js 16 + React 19 + Tailwind v4 project, **matching the stack of `sunbites-portal` and `sunbites-pos`** so the marketing site can ship alongside the rest of the platform.

This was ported 1:1 from the standalone HTML build at `../Sunbites Landing Page.html` — same components, same visual vocabulary, same brand DNA. Just real React + Next.js instead of in-browser Babel.

## Getting started

```bash
cd landing-page
npm install
npm run dev
```

Open http://localhost:3000.

## Stack

| | |
|---|---|
| Framework | **Next.js 16** (App Router) |
| React | **19.2** |
| Styling | **Tailwind v4** (`@theme inline` tokens in `app/globals.css`) + inline-style components |
| Type | **TypeScript strict** |
| Fonts | `Bagel Fat One`, `Nunito`, `Caveat`, `Poppins` (Google Fonts via `@import`) |
| Icons | inline SVG (no runtime cost) — swap to `lucide-react` if desired |

Brand colors, radii, shadows, and the legacy `--sb-*` CSS variables are all declared in `app/globals.css` so existing inline-style components keep working unchanged.

## Structure

```
landing-page/
  app/
    layout.tsx          ← root layout + metadata + globals.css
    page.tsx            ← assembles all sections with scroll-reveal
    globals.css         ← Tailwind v4 + Sunbites tokens + base styles
  components/
    primitives.tsx      ← SbButton, SbBadge, SbEyebrow, SbHighlight, SbHeart, SbNoise
    sections/
      Nav.tsx           ← sticky top nav with anchor links + primary CTA
      Hero.tsx          ← bubble headline + photo collage
      Problem.tsx       ← 74% stat + junk-food + CKD news clipping
      Solution.tsx      ← before/after + 3-step "how it works"
      Menu.tsx          ← weekly menu strip (5 day cards)
      Products.tsx      ← Sunbites Portal + POS mockups + Card coming-soon
      Testimonials.tsx  ← featured parent quote + 3 Messenger cards
      Cta.tsx           ← red CTA band + dark Footer
  public/               ← logo + all photography (served at /…)
```

## Conventions

- **Section components** are exported as named exports (`export const Hero = …`) **and** default exports, so they can be imported either way.
- **`"use client"`** on components that use hooks (Nav, Products mockups, the primitives that track hover/press state). Hero/Problem/Solution/etc. are static and can server-render.
- **Inline styles** are used heavily — that's intentional. The Sunbites visual language ("sticker pop-shadow + cartoon outline") is easier to read inline than via Tailwind classes. Tailwind handles base reset, theming, and any future utility additions.
- **Images** live in `public/` and are referenced as `/foo.webp` (no `next/image` yet — swap in `<Image>` for production if you want LQIP + responsive sizes).

## Brand sync with the other apps

`app/globals.css` declares the same primary red (`#E5322A` ≈ `oklch(0.577 0.245 27.325)`) as `sunbites-portal` / `sunbites-pos`. If those repos change their token, mirror it here so the marketing site stays in lockstep.

## What this does NOT include

- No CRM/form wiring on the "Bring Sunbites to your school" CTA — hook it to your Tally/Notion/Sheets endpoint in `Cta.tsx`.
- No analytics, no auth, no API — this is a pure marketing surface.
- Mobile responsive is basic. Grid templates assume ~1024px+. Add `@media` queries before publishing if you expect heavy mobile traffic.
