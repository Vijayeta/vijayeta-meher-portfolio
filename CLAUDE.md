# Portfolio Website — CLAUDE.md

Personal portfolio site for **Vijayeta Meher**, positioning her transition from Product Owner to (AI) Product Manager. Single-page marketing site with two deep-dive case study pages.

## Stack

- **Next.js 15.3.3** (App Router), **React 19**, **TypeScript 5** (strict mode)
- No CSS framework — all styling is inline `style={{}}` objects plus a handful of utility classes in `app/globals.css` (hover states, responsive breakpoints, scroll-reveal, blink/drift keyframes)
- Fonts via `next/font/google`: **Space Grotesk** (body/display, `--font-space`) and **JetBrains Mono** (labels/mono UI, `--font-mono`)
- `playwright` is a devDependency but there is no config or test suite yet — installed for future use (e.g. manual screenshot checks), not wired up
- No CMS, no database, no backend — all content lives in one TypeScript file

## File structure

```
app/
  layout.tsx              root layout, fonts, metadata
  page.tsx                composes the single-page site: Nav + Hero/About/Work/Cases/Writing + Contact
  globals.css             resets, animations, hover states, responsive rules
  cases/energysense/page.tsx   full case study — EnergySense AI (10-section long-form)
  work/gsa/page.tsx            full case study — Global Search Application (Ericsson)
components/
  Nav.tsx                 fixed header, scroll-spy active section, scroll-progress bar
  sections/               Hero, About, Work, Cases, Writing, Contact — one per homepage section
  ui/RevealSection.tsx    IntersectionObserver wrapper, adds `.in` class to fade/slide content in on scroll
  ui/useCountUpGroup.ts   hook: eases a 0→1 progress value over 1.5s once a ref enters viewport (drives number count-ups)
lib/
  data.ts                 ALL site content + types: HEROSTATS, FRAMEWORKS, CAREER, WORKS, CASES, POSTS, plus fmt() number formatter
```

Path alias `@/*` → project root (see `tsconfig.json`).

## Design system

- Accent color: `#0c766a` (teal), used everywhere as `ACCENT`/`A` constants defined per-file (not centralized — if the color changes, it must be updated in every component)
- Ink/text scale: `#0f1417` (headings) → `#2c343a` → `#4b5660` → `#5b6670` → `#6b757d` → `#99a1a7` (lightest, mono labels)
- Borders: `rgba(15,20,23,.08–.14)` hairlines throughout; grid layouts use a `1px` gap with a dark background showing through as the divider ("grid-frames" pattern)
- Mono labels (section numbers, tags, metadata) always `var(--font-mono)`, `letter-spacing .06–.2em`, uppercase
- Section rhythm: `padding: 120px 0` desktop sections, `max-width: 1200px` content, `padding: 0 40px` gutters
- Scroll-reveal: any element wrapped in `<RevealSection>` or with `data-reveal` fades/translates in via `.in` class toggle from an IntersectionObserver (see `globals.css`)
- Number count-ups: `useCountUpGroup` (homepage hero stats) and an inline copy of the same pattern in `Cases.tsx` (`CaseStudy` component) both ease 0→1 over 1.5s with a cubic ease-out and feed it through `fmt()` from `lib/data.ts`

## Content model (`lib/data.ts`)

All homepage content is typed and data-driven — to edit copy, edit this file, not the components:
- `HEROSTATS` — 3 animated hero stats
- `FRAMEWORKS` — "how I think" 4-up grid in About
- `CAREER` — career timeline table rows in About
- `WORKS` — 3 "selected work" cards (Rails, Liftoff, Global Search — GSA links to `/work/gsa`)
- `CASES` — 3 AI Lab case study summaries shown on homepage (EnergySense AI links to `/cases/energysense`; Flowstate and Cartog have no linked detail page yet)
- `POSTS` — 5 writing/blog entries, currently all link to `href="#"` (no blog exists)

The two full case study pages (`app/cases/energysense/page.tsx`, `app/work/gsa/page.tsx`) each hardcode their own long-form content as local `const` arrays at the top of the file — they do **not** pull from `lib/data.ts` beyond the summary card linking to them.

## Current status / known placeholders

- **About section photo**: `PhotoPlaceholder` in `components/sections/About.tsx` renders initials ("VM") in a bordered box with a comment marking where to swap in a real `<Image>`.
- **Contact section**: LinkedIn and Resume buttons in `components/sections/Contact.tsx` both point to `href="#"` — need real URLs.
- **Writing section**: all 5 posts in `POSTS` link to `href="#"` — no blog/CMS exists yet, this is placeholder copy only.
- **EnergySense case study**: "90-sec demo" link is `href="#"` with an inline `// FILL:` comment — needs a real Loom/YouTube URL once recorded. The "Live app →" link (`https://energysense-ai.vercel.app`) is real.
- Email used in Contact/footer links: `vijayeta.meher@gmail.com` (note: this differs from the account email `shine.vijayeta@gmail.com` used elsewhere).
- No tests, no CI config, no analytics wired up.

## Conventions worth preserving if you extend this

- Keep content edits in `lib/data.ts` where the type already exists — don't hardcode new copy directly into homepage section components.
- Match the existing accent/ink color constants at the top of whichever file you're editing rather than introducing new colors.
- New scroll-triggered content should reuse `RevealSection` (static reveal) or `useCountUpGroup` (animated numbers) rather than writing a third IntersectionObserver variant.
- Case study pages are intentionally self-contained single files (data + layout together) — that pattern is repeated on purpose, not an oversight to refactor away.
