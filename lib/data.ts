import type { IconKey } from '@/components/ui/Icons'

export interface HeroStat {
  key: string
  target: number
  dec: number
  prefix: string
  suffix: string
  label: string
}

export interface Framework {
  k: string
  t: string
  d: string
}

export interface CareerRow {
  year: string
  company: string
  role: string
  owned: string
}

export interface Work {
  idx: string
  year: string
  name: string
  blurb: string
  metric: string
  metricLabel: string
  tag: string
  cover?: string
  href?: string
}

export interface SubMetric {
  target: number
  dec: number
  prefix: string
  suffix: string
  label: string
}

export interface Case {
  idx: string
  company: string
  sector: string
  role: string
  title: string
  problem: string
  approach: string[]
  main: { target: number; dec: number; prefix: string; suffix: string }
  mainLabel: string
  sub: SubMetric[]
  tag: string
  cover?: string
  href?: string
}

export interface Post {
  date: string
  cat: string
  title: string
  dek: string
  read: string
}

export interface Skill {
  label: string
  icon: IconKey
}

export interface SkillCategory {
  category: string
  accent: 'teal' | 'warm'
  skills: Skill[]
}

// ── Profile ───────────────────────────────────────────────
// The single place for identity, links and the top/bottom copy.
// Empty link fields degrade gracefully — the button hides itself.

export const PROFILE = {
  name: 'Vijayeta Meher',
  initials: 'VM',
  eyebrow: 'PRODUCT MANAGER · AI PRODUCTS · ENTERPRISE SAAS',
  headline: 'Building AI products that solve real customer problems.',
  intro:
    'Product Manager with 12+ years of experience delivering enterprise software and digital products. Combining product strategy, AI, experimentation, and customer insights to create intelligent products that drive measurable business outcomes.',
  availability: 'Open to Product Manager roles · Bangalore / Remote',

  story: [
    "I started my career as a software engineer, where I learned to turn complex technical problems into practical solutions. Over 12+ years, I transitioned into Product Management and began focusing on the bigger questions of what to build, why it matters, and how it creates value. Today, I work at the intersection of technology, customers, and business, building enterprise SaaS products that scale. My curiosity about AI pushed me beyond theory into building hands-on with RAG, AI agents, evaluations, guardrails, and LLM applications. Now, I’m combining my engineering and product experience to build AI products that are intelligent, measurable, reliable, and genuinely useful.",
  ],

  ctaHeadline: "Looking for a PM who's lived the delivery side?",
  ctaBody:
    "Tell me what is not working — the roadmap, the discovery process, or an AI feature that is not earning its place — and I will give you an honest view on whether I am the right fit.",

  email: 'mailto:vijayeta.meher@gmail.com',
  emailLabel: 'vijayeta.meher@gmail.com',
  linkedin: 'https://www.linkedin.com/in/vijayeta-meher/',
  github: 'https://github.com/Vijayeta',     // from the repo's origin remote
  resumeUrl: '',   // FILL — e.g. '/resume.pdf'; button stays hidden while empty
  headshot: '/headshot.jpg',   // public/headshot.jpg (640px, optimised); falls back to initials if absent
}

export const HEROSTATS: HeroStat[] = [
  { key: 'years',  target: 12,   dec: 0, prefix: '',   suffix: '+', label: 'years building software products' },
  { key: 'rev',    target: 30,   dec: 0, prefix: '+',  suffix: '%', label: 'YoY revenue growth' },
  { key: 'reach',  target: 75,   dec: 0, prefix: '',   suffix: 'K', label: 'daily users served' },
]

export const FRAMEWORKS: Framework[] = [
  { k: '01', t: 'Customer First',    d: 'Solve problems worth solving.' },
  { k: '02', t: 'Experiment Early',  d: 'Validate assumptions before scaling solutions.' },
  { k: '03', t: 'AI with Purpose',   d: "Apply AI where it creates measurable value, not where it's fashionable." },
  { k: '04', t: 'Measure What Matters', d: 'Success is defined by customer outcomes, business impact, and continuous learning.' },
]

export const CAREER: CareerRow[] = [
  { year: '2022–Present', company: 'Schneider Electric',  role: 'Technical Product Owner',                                                          owned: 'Own the roadmap for EcoStruxure Energy Hub, an enterprise SaaS platform for energy management, leading two Agile teams from discovery through delivery, driving ARR growth, customer-driven prioritization, Secure SDLC adoption, and cross-functional execution across engineering, security, and business stakeholders.' },
  { year: '2019–22', company: 'Ericsson',                role: 'ICT Consultant – Product Owner',                                                    owned: "Owned the vision, roadmap, and delivery of Ericsson's enterprise search platform and executive dashboard, driving user adoption through UX improvements, launching the One Dashboard MVP, and leading platform modernization that significantly improved performance and reliability." },
  { year: '2012–19', company: 'TCS → Wipro → Capgemini', role: 'Software Engineer → Senior Software Engineer → Consultant (Engineering)', owned: 'Built and modernized enterprise web applications for global customers, partnering closely with Product Owners to translate business requirements into user stories, lead Agile delivery, modernize legacy platforms, and improve application performance, usability, and mobile experience.' },
]

export const WORKS: Work[] = [
  { idx: '01', year: '2023', name: 'Global Search', blurb: 'UI modernisation of an internal enterprise search platform serving 75,000 visits per day — owned from discovery through delivery at Ericsson.', metric: '75K/day', metricLabel: 'searches served', tag: 'Enterprise', cover: '/covers/gsa.svg', href: '/work/gsa' },
  { idx: '02', year: '2022–Present', name: 'EcoStruxure Energy Hub', blurb: 'Enterprise SaaS platform for energy management — own the roadmap across two Agile teams, driving ARR growth through customer-driven prioritization and Secure SDLC adoption.', metric: '5 modules', metricLabel: 'owned end to end', tag: 'Energy', cover: '/covers/ecostruxure.webp', href: '/work/ecostruxure' },
]

export const CASES: Case[] = [
  {
    idx: '01', company: 'EnergySense AI', sector: 'AI ENERGY SAAS · INDIA', role: "SOLO PM + BUILDER",
    tag: 'AI Product Strategy',
    title: "An AI energy consultant for India's underserved SMEs",
    problem: "Facility managers know their bills are high but lack tools to understand why — energy audits cost ₹50,000–₹2,00,000, pricing out 95% of the market.",
    approach: [
      "Reframed energy waste as a translation problem, not a data problem — zero hardware, upload-and-go CSV analysis",
      "Built a hybrid RAG architecture (Claude Sonnet 4.6 + Voyage AI) grounded in Indian tariff and BEE standards",
      "Shipped a self-enforced quality contract — an evalAndFix retry loop plus a 15-point regression suite",
    ],
    main: { target: 20, dec: 0, prefix: '', suffix: '%' },
    mainLabel: 'energy savings opportunity (10–20%)',
    cover: '/covers/energysense.webp',
    sub: [
      { target: 0.01, dec: 2, prefix: '$',  suffix: '',  label: 'est. cost per chat turn' },
    ],
    href: '/cases/energysense',
  },
  {
    idx: '02', company: 'Telecom RAG Assistant', sector: 'AI CUSTOMER SUPPORT · RAG', role: "SOLO PM + BUILDER",
    tag: 'RAG Architecture',
    title: 'A support assistant that answers only what it can cite',
    problem: "A mobile operator's Tier-1 answers already exist — split across a public FAQ, a resolved-ticket database and a PDF user guide. Customers can't search them together, and a confidently wrong answer about a price or a policy is worse than no answer at all.",
    approach: [
      'Fanned every question across three separately indexed sources in parallel, rather than one blended index where a verbose source crowds out the others',
      'Grounded generation in up to nine source-labelled passages, so each claim traces back to a document a support operator owns',
      'Made refusal a shipped feature — account-specific and off-topic questions are handed to a human instead of guessed at',
    ],
    main: { target: 0.8, dec: 1, prefix: '', suffix: 's' },
    mainLabel: 'median response time',
    cover: '/covers/novacell.webp',
    sub: [
      { target: 81, dec: 0, prefix: '', suffix: '', label: 'documents indexed' },
      { target: 9,  dec: 0, prefix: '', suffix: '', label: 'max passages / answer' },
    ],
    href: '/cases/novacell',
  },
]

export const SKILLS: SkillCategory[] = [
  {
    category: 'Product & Strategy',
    accent: 'teal',
    skills: [
      { label: 'Roadmapping',           icon: 'ganttChart' },
      { label: 'PRD Authoring',         icon: 'fileText' },
      { label: 'RICE Prioritization',   icon: 'target' },
      { label: 'Product Strategy',      icon: 'compass' },
    ],
  },
  {
    category: 'Research & Discovery',
    accent: 'warm',
    skills: [
      { label: 'Customer Interviews',   icon: 'users' },
      { label: 'Jobs To Be Done',       icon: 'workflow' },
      { label: 'Competitive Analysis',  icon: 'search' },
      { label: 'Metrics & Analytics',   icon: 'lineChart' },
    ],
  },
  {
    category: 'AI & Delivery',
    accent: 'teal',
    skills: [
      { label: 'RAG Architecture',      icon: 'database' },
      { label: 'LLM Evaluations',       icon: 'checkList' },
      { label: 'Agile & Scrum',         icon: 'kanban' },
      { label: 'Secure SDLC',           icon: 'shield' },
    ],
  },
]

export const POSTS: Post[] = [
  { date: '2026.05', cat: 'CAREER',    title: 'Owner to manager: owning the why',        dek: 'The muscles a PO has to build to grow into a PM.',                    read: '6 min' },
  { date: '2026.03', cat: 'DISCOVERY', title: 'Outcomes over output',                    dek: 'Why I stopped measuring myself by tickets closed.',                   read: '7 min' },
  { date: '2025.12', cat: 'SPECS',     title: 'The spec is the contract',                dek: 'Acceptance criteria before estimates — a habit I keep.',               read: '6 min' },
  { date: '2025.10', cat: 'PLATFORM',  title: 'Contract-first APIs, explained simply',   dek: 'Designing the interface before a line of code exists.',                read: '8 min' },
  { date: '2025.08', cat: 'PROCESS',   title: 'Slicing epics until they ship weekly',    dek: 'Vertical slices over horizontal layers, with real examples.',          read: '5 min' },
]

export function fmt(target: number, dec: number, prefix: string, suffix: string, p: number): string {
  const v = target * p
  const s = dec ? v.toFixed(dec) : String(Math.round(v))
  return (prefix || '') + s + (suffix || '')
}
