import type { ReactNode } from 'react'

/**
 * Inline 24×24 stroke icons. `stroke="currentColor"` so each tile inherits
 * whatever colour its category tint gives it — no icon package needed.
 */
function svg(paths: ReactNode, size = 18) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      aria-hidden="true"
    >
      {paths}
    </svg>
  )
}

/** Brand glyphs are solid paths, not strokes — so they need their own wrapper. */
function brand(paths: ReactNode, size = 19) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} aria-hidden="true">
      {paths}
    </svg>
  )
}

export const SOCIAL_ICONS = {
  linkedin: brand(
    <path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM3.2 21.5h3.5V9.2H3.2v12.3zM9.3 9.2h3.35v1.68h.05c.47-.88 1.6-1.8 3.3-1.8 3.53 0 4.18 2.32 4.18 5.35v6.07h-3.5v-5.38c0-1.28-.02-2.93-1.79-2.93-1.79 0-2.06 1.4-2.06 2.84v5.47H9.3V9.2z" />
  ),
  github: brand(
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z" />
  ),
  mail: brand(
    <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 7.2L4.5 7.1v.9L12 13.2l7.5-5.2v-.9L12 12.2z" />
  ),
  file: brand(
    <path d="M6 2h8l5 5v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm7.5 1.8V8h4.2l-4.2-4.2zM12 11l-3.2 3.2h2.2v3.3h2v-3.3h2.2L12 11z" />
  ),
} satisfies Record<string, ReactNode>

export type SocialIconKey = keyof typeof SOCIAL_ICONS

export const ICONS = {
  // Roadmapping
  ganttChart: svg(
    <>
      <rect x="3" y="4" width="10" height="3" rx="1" />
      <rect x="7" y="10.5" width="14" height="3" rx="1" />
      <rect x="3" y="17" width="8" height="3" rx="1" />
    </>
  ),

  // PRD authoring
  fileText: svg(
    <>
      <path d="M6 2h9l5 5v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
      <path d="M15 2v5h5" />
      <path d="M8.5 13h7" />
      <path d="M8.5 17h7" />
    </>
  ),

  // Prioritization
  target: svg(
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),

  // Product strategy
  compass: svg(
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15 9l-2 6-6 2 2-6 6-2z" />
    </>
  ),

  // Customer interviews
  users: svg(
    <>
      <path d="M2 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="8" cy="8" r="3.5" />
      <path d="M15 8.5c1.8.4 3 2 3 3.9" />
      <path d="M16.5 14.3c2.1.6 3.5 2.6 3.5 5.2" />
    </>
  ),

  // Jobs to be done
  workflow: svg(
    <>
      <rect x="3" y="4" width="6" height="5" rx="1" />
      <rect x="15" y="4" width="6" height="5" rx="1" />
      <rect x="9" y="15" width="6" height="5" rx="1" />
      <path d="M6 9v3a2 2 0 0 0 2 2h1" />
      <path d="M18 9v3a2 2 0 0 1-2 2h-1" />
    </>
  ),

  // Competitive analysis
  search: svg(
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),

  // Metrics & analytics
  lineChart: svg(
    <>
      <path d="M3 3v18h18" />
      <path d="M7 15l4-5 3 3 5-7" />
    </>
  ),

  // RAG architecture
  database: svg(
    <>
      <ellipse cx="12" cy="5.5" rx="8" ry="3.2" />
      <path d="M4 5.5v13c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2v-13" />
      <path d="M4 12c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2" />
    </>
  ),

  // LLM evaluations
  checkList: svg(
    <>
      <path d="M3.5 6.5l2 2 3.5-3.5" />
      <path d="M3.5 17.5l2 2 3.5-3.5" />
      <path d="M13 7h8" />
      <path d="M13 18h8" />
    </>
  ),

  // Agile / Scrum
  kanban: svg(
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 3v18" />
      <path d="M15 3v11" />
    </>
  ),

  // Design & tracking tools
  penTool: svg(
    <>
      <path d="M12 3l7 7-9 9-4 1 1-4 9-9" />
      <path d="M15 6l3 3" />
    </>
  ),

  // Experimentation
  trendingUp: svg(
    <>
      <path d="M3 17l6-6 4 4 8-9" />
      <path d="M15 6h6v6" />
    </>
  ),

  // Security / SDLC
  shield: svg(
    <>
      <path d="M12 2.5l8 3v6c0 5-3.4 8.9-8 10-4.6-1.1-8-5-8-10v-6l8-3z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
} satisfies Record<string, ReactNode>

export type IconKey = keyof typeof ICONS
