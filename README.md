# Vijayeta Meher — Portfolio

Personal portfolio site for **Vijayeta Meher**, positioning her transition from Product Owner to (AI) Product Manager. A single-page marketing site with two in-depth case study pages.

**Live:** [vijayeta-meher-portfolio.vercel.app](https://vijayeta-meher-portfolio.vercel.app/)

## Stack

- [Next.js 15](https://nextjs.org/) (App Router) + [React 19](https://react.dev/) + TypeScript (strict mode)
- Inline `style={{}}` styling — no CSS framework
- Fonts: Space Grotesk (body/display) and JetBrains Mono (labels/UI) via `next/font/google`
- Deployed on [Vercel](https://vercel.com/)

## Structure

```
app/
  page.tsx                     homepage: Hero, About, Work, Cases, Writing, Contact
  cases/energysense/           case study — EnergySense AI
  work/gsa/                    case study — Global Search Application (Ericsson)
  work/ecostruxure/            case study — EcoStruxure Energy Hub (Schneider Electric)
components/
  Nav.tsx                      fixed header with scroll-spy + progress bar
  sections/                    one component per homepage section
  ui/                          shared UI primitives (scroll-reveal, count-up hook)
lib/
  data.ts                      all site content and types
```

## Development

```bash
npm install
npm run dev      # start local dev server
npm run build    # production build
```
