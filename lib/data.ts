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
  tag: string
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
  href?: string
}

export interface Post {
  date: string
  cat: string
  title: string
  dek: string
  read: string
}

export const HEROSTATS: HeroStat[] = [
  { key: 'pred',   target: 94,   dec: 0, prefix: '',   suffix: '%', label: 'release predictability' },
  { key: 'lift',   target: 34,   dec: 0, prefix: '+',  suffix: '%', label: 'peak conversion lift' },
  { key: 'defect', target: 38,   dec: 0, prefix: '−',  suffix: '%', label: 'defect escape rate' },
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
  { idx: '01', year: '2023', name: 'Global Search',          blurb: 'UI modernisation of an internal enterprise search platform serving 75,000 visits per day — owned from discovery through delivery at Ericsson.', metric: '75K/day', tag: 'Enterprise', href: '/work/gsa' },
  { idx: '02', year: '2022–Present', name: 'EcoStruxure Energy Hub', blurb: "Enterprise SaaS platform for energy management — own the roadmap across two Agile teams, driving ARR growth through customer-driven prioritization and Secure SDLC adoption.", metric: '5 modules', tag: 'Energy', href: '/work/ecostruxure' },
]

export const CASES: Case[] = [
  {
    idx: '01', company: 'EnergySense AI', sector: 'AI ENERGY SAAS · INDIA', role: "SOLO PM + BUILDER · '25–NOW",
    title: "An AI energy consultant for India's underserved SMEs",
    problem: "Facility managers know their bills are high but lack tools to understand why — energy audits cost ₹50,000–₹2,00,000, pricing out 95% of the market.",
    approach: [
      "Reframed energy waste as a translation problem, not a data problem — zero hardware, upload-and-go CSV analysis",
      "Built a hybrid RAG architecture (Claude Sonnet 4.6 + Voyage AI) grounded in Indian tariff and BEE standards",
      "Shipped a self-enforced quality contract — an evalAndFix retry loop plus a 15-point regression suite",
    ],
    main: { target: 20, dec: 0, prefix: '', suffix: '%' },
    mainLabel: 'energy savings identified',
    sub: [
      { target: 80,    dec: 0, prefix: '−',  suffix: '%', label: 'token cost, vs. naive' },
      { target: 0.005, dec: 3, prefix: '$',  suffix: '',  label: 'cost per chat turn' },
    ],
    href: '/cases/energysense',
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
