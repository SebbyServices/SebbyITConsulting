# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Static HTML/CSS/JS marketing site for **Sebby IT Consulting, Corp.** — async-first tech support (chat/email/WhatsApp escalating to phone/screen-share) for individuals, families, and small businesses in Miami + the Dominican Republic, remote-first. Front door is two plan tiers: **Sebby IT Shield** (business) and **Sebby IT Care** (individual/family), plus one-time fixes across the same 4 service categories as before.

No build step, no framework, no package manager. Edit a file, reload the browser.

## Critical Constraint (updated — resolved 2026-09)

**Cybersecurity credentials (MS in Cybersecurity, certifications) may appear as a supporting trust signal, not the headline.** A brief mention (e.g. "Backed by a Master's in Cybersecurity") is fine in hero copy or an About section. Still avoid: naming IAM/Identity and Access Management as a service offering, DevOps or cloud-architecture consulting, enterprise-scale security consulting, or any direct reference to Ryder or Sebastian's employer. This site sells tech support plans and one-time help, not enterprise security services — the line is "credential as proof point," not "enterprise service on the menu."

The 4 service categories (anchors on `/services/`): Computer Repair (`#repair`), Network & Connectivity (`#network`), Software & Setup (`#software`), IT Training & Coaching (`#training`). Pricing plans live at `/services/#pricing` (Shield tiers: Starter $250/mo, Growth $450/mo, Priority $750/mo; Care tiers: Basic $39/mo, Family $69/mo, one-time fix $95–125).

## Content Rules (Non-Negotiable)

**No em dashes.** Never write `—` (U+2014) or `&mdash;` anywhere in HTML, CSS, or JS files. Use a colon, comma, or period instead. En dash (`–`) is fine in numeric ranges (e.g. "$95–125").

**No emojis.** Never write emoji characters (e.g. 💬 📋 🛠️) in any website file. Use inline SVG icons or plain text instead. This includes section headers, card icon placeholders, button labels, and floating CTAs.

These rules exist because emoji/em-dash inconsistencies have caused build check failures and look unprofessional in production. SVG icons render consistently across devices; emojis do not.

## Deploy Model

GitHub Pages from `github.com/SebbyServices/SebbyITConsulting`. Every push to `main` runs `.github/workflows/deploy.yml`, which copies only the site files (not `CLAUDE.md` or `scripts/`) and publishes them. **There is no staging: pushing to `main` publishes to production.** Verify locally before pushing. New top-level site folders must be added to the workflow's `cp` line.

DNS runs through Cloudflare (proxied), so GitHub cannot issue a certificate and its "Enforce HTTPS" box stays off. Cloudflare handles HTTPS: SSL mode **Full** (not Full strict, which returns error 526) and "Always Use HTTPS" on. The React/Vite rebuild that main replaced on 2026-10-04 is kept on the `react-main-backup` branch.

## Dev Commands

```bash
# Local server — MUST run from the repo root. All asset paths and the
# header/footer fetch() calls are root-relative, so file:// and
# subdirectory servers both break the page.
python3 -m http.server 8770

# Smoke-test the active pages
for p in / /services/ /services/shield/ /services/care/ /services/ai-phone-agent/ /websites/ /contact/; do curl -s -o /dev/null -w "%{http_code} $p\n" "http://localhost:8770$p"; done

# Enterprise-language check, scoped to ACTIVE pages only.
# (An unscoped repo-wide grep hits the dead pages below and always returns matches.)
grep -rin "enterprise\|IAM\|cybersecurity\|DevOps\|cloud architecture\|ryder" \
  index.html services/ websites/ contact/ 404.html components/ assets/css assets/js
# Note: "cybersecurity" matches are expected (Master's credential is an allowed proof point).
```

## Architecture

Active pages: `index.html`, `services/index.html`, `services/shield/`, `services/care/`, `services/ai-phone-agent/` (secondary, non-headline: $5,000 setup + $500/mo, 6-month minimum), `websites/` ("Website IT Help": one-time domain/email/SSL/site fixes only), `contact/index.html`, plus `404.html`. Nav: Home / Services / Pricing (`/services/#pricing`) / Contact. Each is a standalone HTML file that loads the same `assets/css/main.css` and `assets/js/main.js`, and contains two empty divs — `#header-slot` and `#footer-slot` — that `main.js` fills.

**`assets/js/main.js` is the whole runtime** (rewritten 2026-09 for the Harbor redesign). One `DOMContentLoaded` handler:

- `loadComponents()` fetches `/components/header.html` and `/components/footer.html` into `#header-slot` / `#footer-slot`. Because this is async, **nothing outside this function may query header/footer DOM at load time.** Header-dependent setup (`initNavLinks`, `setupHeaderScroll`) and the footer year run inside it after injection.
- `setupMobileMenuDelegation()` uses document-level click/keydown delegation for `.hamburger-btn` / `.nav-menu.open`, so it works whenever the header lands. Never query `.hamburger-btn` directly at init (the bug fixed three times in git history).
- `setupContactForm()` submits `#contact-form` to Formspree with `fetch` (form `meaodnbq`) and shows `#form-status`. Without JS the browser posts to Formspree directly.
- Removed: page transitions, scroll reveals, parallax, stat counters. Content is visible at rest; do not add opacity-0 reveal animations back.

**`assets/css/main.css` is the entire design system**, in `/* ===== SECTION ===== */` banners: tokens, reset, typography, layout, components, header, footer, sections, responsive. Add styles under the matching banner. Colors only through the tokens at the top.

Pages are plain HTML sharing one `<head>` pattern (Google Fonts link, favicon set in `/assets/brand/`, OG image `/assets/brand/og-image.png`). Every page has `<main id="main">` for the skip link. The floating WhatsApp button (`.float-wa`) is on every page except Contact.

### Dead pages (on disk, unlinked, old enterprise brand)

`portfolio/`, `case-studies/thepatientchase.html`, plus their images and `assets/js/counter.js` were deleted 2026-09 (off-brand case studies: cancelled client Tom's Cuban, unconfirmed client Riera Law). `Tools/index.html` had its "Web, IAM, DevOps, Video" proposal-template line scrubbed to remove the IAM/DevOps reference; the page itself (internal, noindexed) stays. `iglesias/` (Spanish-language church vertical landing page) was deleted 2026-09 — that project was retired in favor of Made by Sebby.

## Brand & Design System ("Harbor", 2026-09 full rebrand)

Source of truth for agents: the **Sebby IT Brand Kit** Design System artifact (claude.ai), README + tokens + components. Files in the repo: `assets/brand/`.

- **Logo:** the Bubble Shield (shield silhouette with a chat tail and three typing dots) + "Sebby IT" wordmark in Bricolage Grotesque Bold, outlined to paths. `sebby-it-logo.svg` (light grounds), `sebby-it-logo-reversed.svg` (dark), `sebby-it-logo-mono-ink.svg`, `sebby-it-mark*.svg`, favicons, `og-image.png` (1200x630; source `og-image.svg`). The old `assets/images/logo-*.png`, `logo-animation.gif`, `hero-bg.png` and `assets/images/og-image.png` are no longer referenced.
- **Tagline:** "Tech help that texts back."
- **Color tokens:** `--ink #0C2330`, `--ink-muted #4A6570`, `--harbor #0F5C63` (primary, Shield), `--lagoon #57C4B5` (accent on dark), `--marigold #F5B544` (warm accent, Care; never text on white), `--marigold-tint #FFF4DC`, `--surface-mist #EEF4F3`, `--surface-deep #0C2330`, `--line #D6E2E3`.
- **Type:** Bricolage Grotesque (display 700/800), Atkinson Hyperlegible (body 400/700, 17px default, chosen for low-vision readers), JetBrains Mono 500 (uppercase labels and chips).
- **Shape:** the bubble = `--radius-lg` 22px with one `--radius-tail` 6px corner (bubbles, icon tiles, path cards, contact pills). Buttons and chips are pills.
- **Key components:** `.btn` (`-primary`, `-secondary`, `-warm`, `-ghost-light`), `.chip`, `.bubble` / `.bubble-out` / `.typing`, `.plan` (`-featured`, `-care`), `.path-card`, `.card`, `.faq`, `.referral`, `.credit`.
- **Footer credit:** bottom bar ends with "Website by Made by Sebby" (`.credit`) linking to madebysebby.com, same as elitecarerecovery.net.
- Example chat threads must stay labelled as examples. No invented testimonials.

## Language & Theme

All pages are authored in English (`lang="en"`). **Spanish is a runtime swap, not a page tree**: there is no `/es/`, and search engines only index the English.

- `assets/i18n/es.json` maps English text to Spanish. Keys are the exact text of each text node or `aria-label`/`placeholder`/`alt`/`title` (whitespace collapsed, curly quotes as real characters). `<title>` is included.
- `main.js` (LANGUAGE section) swaps them when `html[data-lang="es"]`; strings with no entry stay English. Mark anything that must never be translated with `translate="no"`. JS-generated messages go through `t('English text')`.
- **After changing any copy, run `python3 scripts/i18n-check.py`** and add the missing keys (it exits 1 when something is untranslated). Brand names are listed in its `SAME` set.
- Every page has an inline `<head>` script (before `main.css`) that sets `data-lang` (saved choice, else browser language) and `data-theme` before first paint. New pages must copy it.

Dark mode: tokens are redefined in two identical blocks at the top of `main.css` (`prefers-color-scheme: dark` unless `data-theme="light"`, and `data-theme="dark"`). Default is auto (follows the device); the header button cycles auto/light/dark and saves the choice to `localStorage`. Use tokens only, never hardcoded light colors, or dark mode breaks. Logos on light grounds need a `.logo-light` / `.logo-dark` pair.

## Deploy Blockers (uncommitted redesign on `main`)

Home, Services, Contact, and the footer were updated 2026-09 for the tech-support-first / Shield-Care pivot. Still open before publishing:

- [x] New OG image at `assets/brand/og-image.png` (2026-09 rebrand); all pages point to it.
- [x] Site email switched to `hello@sebbyservices.com` (footer + contact).
- [x] Unverified testimonials removed (homepage section, Care page quote headline). Only add real, attributable client quotes.
- [x] Formspree form ID set (2026-10): `contact/index.html` posts to `formspree.io/f/meaodnbq`.
- [x] Real contact numbers in place (2026-09): phone/call `+1 (786) 543-1417` (US), WhatsApp `+1 (849) 856-1504` (DR, `wa.me/18498561504`). Footer, contact page, floating buttons on `index.html` and `websites/index.html`.
- [x] `#privacy` / `#terms` links removed from the footer; `setupPageTransitions()` now skips same-page hash links.
- [x] **Cross-site referral to Made by Sebby** built (2026-09): homepage partner section, Services "More ways we can help" card, `/websites/#partner`, footer column + partner bar, contact form note. All point to `https://www.madebysebby.com/book.html` (free 15-min call). Rule: new website, redesign, or ongoing website care goes to Made by Sebby; Sebby IT keeps only one-time technical website fixes.

Also open: `robots.txt` advertises a `sitemap.xml` that does not exist; there is no `.gitignore`, so the tracked `.DS_Store` shows as modified in every session.

## Image Backlog

1. Four service photos or illustrations (optional), in the Harbor palette.
2. A real, attributable client quote or two once clients exist (no invented testimonials).
