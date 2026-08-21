import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'EcoStruxure Energy Hub — Vijayeta Meher',
  description: "Technical Product Ownership on Schneider Electric's cloud SaaS platform for enterprise energy management.",
}

const A = '#0c766a'
const SEC = '1px solid rgba(15,20,23,.09)'
const ROW = '1px solid rgba(15,20,23,.07)'
const mono = 'var(--font-mono)'

// ── Data ──────────────────────────────────────────────────

const GLANCE = [
  { k: 'Product type',  v: 'Cloud-based SaaS platform for enterprise energy management' },
  { k: 'Owner',         v: 'Schneider Electric — EcoStruxure portfolio' },
  { k: 'Target market', v: 'Multi-site commercial & industrial enterprises' },
  { k: 'Modules owned', v: 'Subscription Management, User Management, Dashboard, Mobile App, Notifications' },
  { k: 'Practices',     v: 'Agile Scrum, Secure Development Lifecycle, Threat Modeling, OWASP reviews, Coverity static analysis' },
  { k: 'Role',          v: 'Technical Product Owner — backlog ownership, sprint planning, release planning' },
]

const PROBLEMS = [
  'Monitor energy consumption in real time',
  'Manage multiple facilities from a single platform',
  'Identify abnormal energy usage',
  'Provide controlled access to different users',
  'Keep users informed about critical electrical events',
  'Scale customer onboarding through subscription-based licensing',
]

const CUSTOMERS = [
  'Commercial Buildings', 'Industrial Facilities', 'Manufacturing Plants', 'Hospitals',
  'Educational Institutions', 'Retail Chains', 'Multi-site Enterprises',
  'Facility Managers', 'Energy Managers', 'Operations Teams',
]

const ROLE_RESPONSIBILITIES = [
  'Translated product requirements into engineering deliverables, working closely with Product Management, UX, Software Engineering, QA, DevOps, Cybersecurity, and Architecture',
  'Owned end-to-end delivery of Subscription Management, User Management, Dashboard, Mobile Application, and Notifications',
  'Backlog ownership, requirement clarification, and sprint planning',
  'Feature prioritization and acceptance criteria definition',
  'Release planning and stakeholder collaboration throughout the product lifecycle',
]

interface Module {
  n: string
  title: string
  objective: string
  responsibilities: string[]
  capabilitiesLabel?: string
  capabilities?: string[]
  value: string[]
}

const MODULES: Module[] = [
  {
    n: '01', title: 'Subscription Management',
    objective: 'Provide a scalable licensing model that enables customers to access platform capabilities based on their subscribed plan.',
    responsibilities: [
      'Defined product requirements for subscription workflows',
      'Worked with engineering teams to implement subscription-based feature enablement',
      'Managed user stories for subscription lifecycle enhancements',
      'Collaborated with business teams to ensure licensing aligned with commercial offerings',
      'Participated in feature validation before release',
    ],
    value: ['Simplified customer onboarding', 'Enabled scalable SaaS licensing', 'Reduced manual subscription management activities'],
  },
  {
    n: '02', title: 'User Management',
    objective: 'Provide secure and flexible user administration across customer organizations.',
    responsibilities: [
      'Owned user administration features',
      'Defined workflows for user creation, modification, and access management',
      'Collaborated on role-based access implementation',
      'Prioritized backlog based on customer feedback',
      'Worked with QA to validate user management scenarios',
    ],
    capabilitiesLabel: 'KEY CAPABILITIES',
    capabilities: ['User creation', 'User updates', 'User deactivation', 'Role assignment', 'Access control', 'Organization-level user administration'],
    value: ['Improved platform security', 'Simplified administration for enterprise customers', 'Supported scalable customer deployments'],
  },
  {
    n: '03', title: 'Dashboard',
    objective: 'Provide customers with a centralized view of their energy data and operational insights.',
    responsibilities: [
      'Gathered requirements from Product Managers and stakeholders',
      'Defined dashboard user stories and acceptance criteria',
      'Collaborated with UX designers on dashboard usability',
      'Worked with engineering teams during implementation',
      'Prioritized enhancements based on customer feedback',
    ],
    capabilitiesLabel: 'DASHBOARD CAPABILITIES',
    capabilities: ['Energy overview', 'Site-level visibility', 'Device status', 'Energy trends', 'KPI visualization', 'Quick access to alerts'],
    value: ['Improved visibility into facility performance', 'Enabled faster operational decision-making', 'Reduced effort required to monitor multiple sites'],
  },
  {
    n: '04', title: 'Mobile Application',
    objective: 'Extend Energy Hub capabilities to mobile users for monitoring energy systems from anywhere.',
    responsibilities: [
      'Owned mobile feature backlog',
      'Coordinated feature delivery across web and mobile teams',
      'Ensured consistency between mobile and web experiences',
      'Worked with QA on mobile release validation',
      'Prioritized usability improvements',
    ],
    capabilitiesLabel: 'MOBILE FEATURES',
    capabilities: ['Dashboard access', 'Site monitoring', 'Alert viewing', 'Notification support', 'Secure user authentication'],
    value: ['Increased accessibility', 'Improved customer engagement', 'Enabled monitoring outside office environments'],
  },
  {
    n: '05', title: 'Notifications',
    objective: 'Notify users about important events requiring attention.',
    responsibilities: [
      'Defined notification requirements',
      'Prioritized notification enhancements',
      'Collaborated with engineering on event-driven notification workflows',
      'Defined acceptance criteria for notification scenarios',
      'Worked with QA during feature validation',
    ],
    capabilitiesLabel: 'NOTIFICATION TYPES',
    capabilities: ['Critical alarms', 'System events', 'Operational updates', 'Mobile notifications', 'In-app notifications'],
    value: ['Reduced response time', 'Improved operational awareness', 'Enabled proactive issue resolution'],
  },
]

const AGILE = [
  'Product backlog ownership', 'Story decomposition', 'Sprint planning', 'Backlog refinement',
  'Acceptance criteria definition', 'Feature prioritization', 'Stakeholder demonstrations',
  'Sprint reviews', 'Release planning', 'Production issue prioritization',
]

const COLLABORATORS = [
  'Product Managers', 'UX Designers', 'Software Engineers', 'Mobile Developers', 'QA Engineers',
  'DevOps Engineers', 'Cybersecurity Teams', 'Cloud Architects', 'Solution Architects', 'Customer Success Teams',
]

const STACK = [
  { k: '01', t: 'Cloud Platform',         d: 'Microsoft Azure' },
  { k: '02', t: 'Product Management',     d: 'Azure DevOps, Jira, Confluence' },
  { k: '03', t: 'Development Practices',  d: 'Agile Scrum, CI/CD, Secure Development Lifecycle (SDL), Threat Modeling, Application FMEA, OWASP Security Reviews, Coverity Static Analysis' },
  { k: '04', t: 'Platform',               d: 'Cloud-native SaaS, REST APIs, Mobile Applications, IoT-enabled Energy Management' },
]

const SKILLS = [
  'Technical Product Ownership', 'SaaS Product Management', 'Subscription Management', 'User Management',
  'Mobile Product Delivery', 'Dashboard Product Development', 'Notification Systems', 'Agile Delivery',
  'Backlog Management', 'Feature Prioritization', 'Requirement Analysis', 'Cross-functional Leadership',
  'Release Planning', 'Stakeholder Management',
]

// ── Shared primitives ─────────────────────────────────────

function SL({ n, label }: { n: string; label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 12 }}>
      <span style={{ fontFamily: mono, fontSize: 13, color: A }}>{n}</span>
      <span style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.16em', color: '#99a1a7' }}>{label}</span>
    </div>
  )
}

function H2({ children, maxW = '26ch', mb = 28 }: { children: React.ReactNode; maxW?: string; mb?: number }) {
  return (
    <h2 style={{ margin: `0 0 ${mb}px`, fontSize: 'clamp(24px,3.2vw,40px)', fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.1, maxWidth: maxW }}>
      {children}
    </h2>
  )
}

function Chips({ items }: { items: string[] }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {items.map(it => (
        <span key={it} style={{
          fontFamily: mono, fontSize: 11, letterSpacing: '.04em',
          color: '#2c343a', border: '1px solid rgba(15,20,23,.14)', padding: '7px 12px',
        }}>
          {it}
        </span>
      ))}
    </div>
  )
}

function Bullets({ items, mark = '▲' }: { items: string[]; mark?: string }) {
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
      {items.map((it, i) => (
        <li key={i} style={{ display: 'flex', gap: 10, fontSize: 13.5, lineHeight: 1.55, color: '#2c343a' }}>
          <span style={{ color: A, fontFamily: mono, fontSize: 10, paddingTop: 4, flexShrink: 0 }}>{mark}</span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  )
}

const W = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' }
const S = { padding: '64px 0', borderBottom: '1px solid rgba(15,20,23,.08)' }

// ── Page ──────────────────────────────────────────────────

export default function EcoStruxurePage() {
  return (
    <>
      <nav className="ec-nav" style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        height: 52, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 40px',
        background: 'rgba(255,255,255,.86)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(15,20,23,.08)',
      }}>
        <Link href="/#work" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: '#0f1417' }}>
          <span style={{ fontFamily: mono, fontSize: 13, color: A }}>←</span>
          <span style={{ fontWeight: 600, letterSpacing: '.04em', fontSize: 14 }}>VIJAYETA MEHER</span>
        </Link>
        <span className="ec-hide-sm" style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.1em', color: '#99a1a7' }}>SELECTED WORK · SCHNEIDER ELECTRIC</span>
      </nav>

      <main style={{ paddingTop: 52 }}>

        {/* ── HEADER ── */}
        <header className="ec-header" style={{ position: 'relative', padding: '80px 40px 48px', borderBottom: '1px solid rgba(15,20,23,.08)' }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(15,20,23,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(15,20,23,.045) 1px,transparent 1px)',
            backgroundSize: '62px 62px',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 65% at 20% 20%,#000 30%,transparent 76%)',
            maskImage: 'radial-gradient(ellipse 70% 65% at 20% 20%,#000 30%,transparent 76%)',
          }} />
          <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: '.18em', color: A, marginBottom: 18 }}>SELECTED WORK · SCHNEIDER ELECTRIC</div>
            <h1 style={{ margin: 0, fontSize: 'clamp(30px,5vw,60px)', fontWeight: 600, lineHeight: .98, letterSpacing: '-.03em', maxWidth: '18ch' }}>EcoStruxure Energy Hub</h1>
            <p style={{ margin: '14px 0 0', fontSize: 'clamp(15px,1.6vw,19px)', fontWeight: 500, color: '#2c343a', maxWidth: '30ch' }}>
              Technical Product Owner — Schneider Electric
            </p>
            <p style={{ margin: '16px 0 0', maxWidth: '68ch', fontSize: 15, lineHeight: 1.6, color: '#4b5660' }}>
              A cloud-based SaaS platform that lets commercial and industrial customers monitor, analyze, and optimize energy consumption across one or many sites — collecting data from connected electrical devices, processing it in the cloud, and surfacing actionable insight through web and mobile.
            </p>
            <div style={{ border: SEC, background: '#fff', maxWidth: 820, marginTop: 32 }}>
              <div style={{ padding: '8px 18px', borderBottom: SEC, fontFamily: mono, fontSize: 10, letterSpacing: '.14em', color: '#99a1a7' }}>AT A GLANCE</div>
              {GLANCE.map((g, i) => (
                <div key={g.k} className="ec-glance" style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 16, padding: '10px 18px', borderBottom: i < GLANCE.length - 1 ? '1px solid rgba(15,20,23,.06)' : undefined }}>
                  <span style={{ fontFamily: mono, fontSize: 11, color: A }}>{g.k}</span>
                  <span style={{ fontSize: 13, lineHeight: 1.5, color: '#2c343a' }}>{g.v}</span>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* ── 01 PRODUCT OVERVIEW / BUSINESS PROBLEM ── */}
        <section style={S}>
          <div className="ec-w" style={W}>
            <SL n="01" label="BUSINESS PROBLEM" />
            <H2 maxW="22ch" mb={14}>Energy data, siloed across buildings and devices.</H2>
            <p style={{ margin: '0 0 24px', maxWidth: '68ch', fontSize: 15, lineHeight: 1.6, color: '#4b5660' }}>
              Large organizations typically operate multiple facilities with distributed electrical infrastructure. That makes it hard to see energy usage in one place, control who can act on it, and stay ahead of problems before they become costly.
            </p>
            <div className="ec-grid-2" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 1, background: 'rgba(15,20,23,.09)', border: SEC }}>
              <div style={{ background: '#fff', padding: '24px 26px' }}>
                <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.1em', color: '#99a1a7', marginBottom: 16 }}>WHAT CUSTOMERS NEEDED</div>
                <Bullets items={PROBLEMS} />
              </div>
              <div style={{ background: '#fff', padding: '24px 26px', borderLeft: SEC }}>
                <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.1em', color: A, marginBottom: 14 }}>PRODUCT VISION</div>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: '#0f1417', fontWeight: 500 }}>
                  A unified cloud platform that simplifies energy management — secure facility monitoring, insight anytime, efficient user administration, and timely notifications that support operational decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 02 TARGET CUSTOMERS ── */}
        <section style={S}>
          <div className="ec-w" style={W}>
            <SL n="02" label="TARGET CUSTOMERS" />
            <H2 maxW="26ch" mb={20}>Multi-site enterprises across commercial and industrial energy use.</H2>
            <Chips items={CUSTOMERS} />
          </div>
        </section>

        {/* ── 03 MY ROLE ── */}
        <section style={S}>
          <div className="ec-w" style={W}>
            <SL n="03" label="MY ROLE" />
            <H2 maxW="26ch" mb={20}>Technical Product Owner, bridging product and engineering.</H2>
            <p style={{ margin: '0 0 20px', maxWidth: '68ch', fontSize: 15, lineHeight: 1.6, color: '#4b5660' }}>
              I translated product requirements into engineering deliverables, working closely with Product Management, UX, Software Engineering, QA, DevOps, Cybersecurity, and Architecture — and owned end-to-end delivery of five core platform capabilities.
            </p>
            <Bullets items={ROLE_RESPONSIBILITIES} mark="→" />
          </div>
        </section>

        {/* ── 04 MODULES OWNED ── */}
        <section style={S}>
          <div className="ec-w" style={W}>
            <SL n="04" label="MODULES OWNED" />
            <H2 maxW="26ch" mb={14}>Five platform capabilities, owned end to end.</H2>
            <p style={{ margin: '0 0 28px', maxWidth: '68ch', fontSize: 15, lineHeight: 1.6, color: '#4b5660' }}>
              Subscription Management, User Management, Dashboard, Mobile Application, and Notifications — each carried from requirement through release.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'rgba(15,20,23,.09)', border: SEC }}>
              {MODULES.map(m => (
                <div key={m.n} className="ec-module" style={{ background: '#fff', padding: '28px 26px' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 10 }}>
                    <span style={{ fontFamily: mono, fontSize: 12, color: A }}>{m.n}</span>
                    <span style={{ fontSize: 19, fontWeight: 600, letterSpacing: '-.01em', color: '#0f1417' }}>{m.title}</span>
                  </div>
                  <p style={{ margin: '0 0 20px', fontSize: 14, lineHeight: 1.6, color: '#4b5660', maxWidth: '70ch' }}>{m.objective}</p>
                  <div
                    className="ec-module-grid"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: m.capabilities ? '1.3fr 1fr 1fr' : '1.4fr 1fr',
                      gap: 28,
                    }}
                  >
                    <div>
                      <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '.1em', color: '#99a1a7', marginBottom: 12 }}>RESPONSIBILITIES</div>
                      <Bullets items={m.responsibilities} />
                    </div>
                    {m.capabilities && (
                      <div>
                        <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '.1em', color: '#99a1a7', marginBottom: 12 }}>{m.capabilitiesLabel}</div>
                        <Bullets items={m.capabilities} mark="•" />
                      </div>
                    )}
                    <div>
                      <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '.1em', color: A, marginBottom: 12 }}>BUSINESS VALUE</div>
                      <Bullets items={m.value} mark="✓" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 05 AGILE PRODUCT OWNERSHIP / COLLABORATION ── */}
        <section style={S}>
          <div className="ec-w" style={W}>
            <SL n="05" label="AGILE PRODUCT OWNERSHIP & COLLABORATION" />
            <H2 maxW="26ch" mb={20}>Backlog to release, across a cross-functional team.</H2>
            <div className="ec-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'rgba(15,20,23,.09)', border: SEC }}>
              <div style={{ background: '#fff', padding: '24px 26px' }}>
                <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.1em', color: '#99a1a7', marginBottom: 16 }}>THROUGHOUT THE LIFECYCLE</div>
                <Bullets items={AGILE} />
              </div>
              <div style={{ background: '#fff', padding: '24px 26px', borderLeft: SEC }}>
                <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.1em', color: '#99a1a7', marginBottom: 16 }}>WORKED CLOSELY WITH</div>
                <Chips items={COLLABORATORS} />
              </div>
            </div>
          </div>
        </section>

        {/* ── 06 TECHNOLOGY STACK ── */}
        <section style={S}>
          <div className="ec-w" style={W}>
            <SL n="06" label="TECHNOLOGY & PRACTICES" />
            <H2 maxW="26ch" mb={20}>Azure-native SaaS, secured by design.</H2>
            <div className="ec-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: 'rgba(15,20,23,.09)', border: SEC }}>
              {STACK.map(s => (
                <div key={s.k} style={{ background: '#fff', padding: '20px 18px' }}>
                  <div style={{ fontFamily: mono, fontSize: 12, color: A, marginBottom: 14 }}>{s.k}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: '-.01em', marginBottom: 10, lineHeight: 1.25, color: '#0f1417' }}>{s.t}</div>
                  <div style={{ fontSize: 13, lineHeight: 1.55, color: '#5b6670' }}>{s.d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 07 KEY SKILLS + OUTCOME ── */}
        <section style={{ padding: '64px 0 80px', borderBottom: 'none' }}>
          <div className="ec-w" style={W}>
            <SL n="07" label="KEY SKILLS DEMONSTRATED" />
            <div style={{ marginBottom: 40 }}>
              <Chips items={SKILLS} />
            </div>
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.1em', color: '#99a1a7', marginBottom: 14 }}>OUTCOME</div>
            <div style={{ border: SEC, padding: '22px 26px' }}>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: '#0f1417', fontWeight: 500 }}>
                Drove delivery of foundational platform capabilities supporting secure customer onboarding, subscription-based access, centralized user administration, intuitive dashboards, mobile accessibility, and timely notifications — essential building blocks of a consistent, scalable cloud experience for enterprise energy management customers.
              </p>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer style={{ padding: '40px 0 28px' }}>
          <div className="ec-w" style={{ ...W, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, borderTop: '1px solid rgba(15,20,23,.1)', paddingTop: 18 }}>
            <Link href="/#work" style={{ fontFamily: mono, fontSize: 12, letterSpacing: '.04em', textDecoration: 'none', color: '#2c343a', border: '1px solid rgba(15,20,23,.16)', padding: '10px 18px' }}>
              ← Back to portfolio
            </Link>
            <a href="mailto:vijayeta.meher@gmail.com" style={{ fontFamily: mono, fontSize: 12, letterSpacing: '.04em', textDecoration: 'none', color: '#fff', background: A, padding: '10px 18px', fontWeight: 500 }}>
              vijayeta.meher@gmail.com →
            </a>
          </div>
        </footer>

      </main>
    </>
  )
}
