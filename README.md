# Pham Van Anh — Dossier

A pixel-perfect rebuild of the **Pham Thi Van Anh** dossier as a modern
[Next.js](https://nextjs.org) (App Router) application — fully componentized,
with every animation from the original faithfully reproduced.

## Highlights

- **Next.js 15 + React 19 + TypeScript**, App Router, statically prerendered.
- **Geist + Geist Mono** via `next/font` (self-hosted, zero layout shift).
- **Dark / light theme** toggle with a smooth, page-wide colour transition.
- All original motion, rebuilt as clean React hooks:
  - Scroll-reveal (`useReveal`)
  - Cursor-trailing accent glow (`useCursorGlow`)
  - Per-card spotlight + 3D tilt (`SpotlightCard`)
  - Count-up stats (`CountUp`)
  - Magnetic buttons (`useMagnetic`)
  - Scroll-progress bar (`useScrollProgress`)
- Animated gradient headlines, infinite marquee, floating gradient blobs,
  and a faint dot-grid backdrop.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm start        # serve the production build
```

## Project structure

```
src/
├── app/                      # App Router entry, layout, global CSS
│   ├── globals.css           # design tokens, themes, keyframes, reset
│   ├── layout.tsx            # fonts + metadata
│   └── page.tsx
├── components/dossier/       # all UI, one file per section
│   ├── Dossier.tsx           # root: theme state + animation wiring
│   ├── Nav, Hero, Marquee, Work, About, Career,
│   │   Campaigns, Recognition, Capabilities, Contact, Footer …
│   ├── dossier.module.css    # feature stylesheet (pixel-matched)
│   └── primitives/           # Sheen, SectionHeader, SectionIntro,
│                             # CountUp, SpotlightCard, Highlights
├── hooks/                    # animation hooks
└── lib/
    ├── config.ts             # accent / availability / grid toggles
    └── content.tsx           # all copy & data, fully typed
```

The original single-file source lives in [`docs/`](docs/) for reference.
