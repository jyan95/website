# Personal Website Redesign — Brutalist Split Layout

## Summary

Replace the current dark terminal-emulator UI with a minimal brutalist layout: a blurred, dark-blue-tinted climbing photo on the left that fades along its own diagonal into a flat dark-blue field on the right, holding four raw-text links. Name overlays the photo, top-left.

## Content

- **Name**: "Joshua Yan" — Helvetica, bold, large, white. Overlaid top-left directly on the photo.
- **Links** — right-aligned, stacked, Times New Roman, raw addresses (no icons, no aliasing except the resume, which gets a clean hosted path):
  1. `linkedin.com/in/joshua-yan` → `https://www.linkedin.com/in/joshua-yan/`
  2. `jyan0602@gmail.com` → `mailto:jyan0602@gmail.com`
  3. `joshuayan.com/resume.pdf` → `/resume.pdf` (PDF copied into `public/`, not the old Google Drive link)
  4. `hyperbolic.nyc` → `https://hyperbolic.nyc/`
- No other copy: no bio, no tagline, no nav, no project list. This is the entire page.

## Link states

Real anchor pseudo-classes, not JS-driven state:

- `:link` (default) — white, no underline
- `:hover` — underline + shift to blue
- `:visited` — purple
- `:active` — browser default is fine unless it looks wrong in testing

## Photo treatment

Source: `WhatsApp Image 2026-08-01 at 22.41.35.jpeg` (1080×1920, phone/portrait ratio), the clean unmarked photo of the climber.

- **Crop**: exclude the brick wall, support beam, and floor strip (the regions marked in red in the annotated version) using the climbing wall's diagonal edge as the cut line. Keep the ceiling/pipes area at the top for headroom.
- **Blur**: CSS `filter: blur(var(--photo-blur))`, default something like `6px` — must be a single CSS custom property so it's a one-line tweak.
- **Tint**: dark blue overlay, approx `#080D1C`, applied as a semi-transparent wash over the blurred photo.
- **Fade**: the image fades to the flat tint field continuing along the *same diagonal angle* as the crop line — not a hard vertical seam. Achieved via `clip-path` + a gradient `mask-image` (or equivalent), not a pre-baked transparent PNG, so it stays adjustable and responsive.

## Layout

- **Desktop**: split screen. Photo sits left, following its natural diagonal-cropped shape (not a fixed vertical %). Right side is the flat tinted field with the links stack, roughly aligned to where the diagonal crosses. Name overlays the photo's top-left corner.
- **Mobile**: photo is already phone-ratio, so it becomes a full-bleed background with the same blur/tint/fade treatment; name and links overlay directly on top of it (no separate panel). Links stay right-aligned.

## SEO / meta

- `hyperbolic.nyc` is a real, working link (`rel="noopener noreferrer"`, opens normally) but must not appear in `<title>`, `<meta description>`, Open Graph tags, JSON-LD, or any sitemap. It simply isn't referenced anywhere crawlers or link-preview bots read — only in the rendered link itself.
- Site meta (title/description/OG) describes Joshua Yan generally; no mention of Hyperbolic.

## Removed

The entire existing terminal-emulator UI: dark/light mode toggle + localStorage theme logic, `TerminalScreen`/`TerminalHeader`/`PromptLine`/`SectionTitle`/`ListItem`/`TerminalFooter` components, the icon SVGs, the areas-of-work / recent-projects / management-philosophy content blocks. None of it carries over.

## Out of scope

- No CMS, no additional pages/routes — single static page.
- No analytics/tracking changes.
- No changes to the deploy pipeline (`gh-pages` → `joshuayan.com` stays as-is).
