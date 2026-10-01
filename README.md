# sebbyservices.com

Website for **Sebby IT Consulting, Corp.** Vite + React + TypeScript + Tailwind, deployed to GitHub Pages on push to `main`.

## Positioning

- **Headline:** remote tech support, async-first (chat/email/text/WhatsApp, escalating to phone/video/screen-share).
  - **Sebby IT Shield** (`/business`): small business plans, $250 / $450 / $750 per month.
  - **Sebby IT Care** (`/home-and-family`): individuals and families, $39 / $69 per month, plus $95–$125 one-time fixes.
- **Proof points, not the headline:** MS in Cybersecurity, bilingual EN/ES, Miami (DR opportunistic), small client list.
- **Secondary pages** (nav "Other Services" + footer, not on the homepage):
  - `/services/ai-phone-agents`: $5,000 setup + $500/mo, 6-month minimum.
  - `/services/consulting`: custom-scoped retainers.
  - `/services/web-design`: refers to madebysebby.com.

## Editing copy

All site copy lives in `src/content/en.ts`. House rule: no em dashes.

## Scripts

```bash
npm ci
npm run dev      # local dev server
npm run build    # typecheck + production build to dist/
```

The previous static site is kept in `archive/` for reference.
