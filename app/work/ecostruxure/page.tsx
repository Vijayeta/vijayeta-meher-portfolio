import type { Metadata } from 'next'
import {
  CaseNav, CaseHeader, CaseMain, CaseSection, CaseCTA, GlanceCard,
  H2, Lede, Chips, Bullets, KeyCard, Callout, ProductShot, mono,
} from '@/components/case'

export const metadata: Metadata = {
  title: 'EcoStruxure Energy Hub — Vijayeta Meher',
  description: "Technical Product Ownership on Schneider Electric's cloud SaaS platform for enterprise energy management.",
}

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
    capabilitiesLabel: 'Key capabilities',
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
    capabilitiesLabel: 'Dashboard capabilities',
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
    capabilitiesLabel: 'Mobile features',
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
    capabilitiesLabel: 'Notification types',
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

const sub = { fontFamily: mono, fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'var(--ink-faint)', marginBottom: 14, display: 'block' }

// ── Page ──────────────────────────────────────────────────

export default function EcoStruxurePage() {
  return (
    <>
      <CaseNav label="Selected work · Schneider Electric" />

      <CaseHeader
        eyebrow="Selected work · Schneider Electric"
        title="EcoStruxure Energy Hub"
        subtitle="Technical Product Owner — Schneider Electric"
        lede="A cloud-based SaaS platform that lets commercial and industrial customers monitor, analyze, and optimize energy consumption across one or many sites — collecting data from connected electrical devices, processing it in the cloud, and surfacing actionable insight through web and mobile."
      />

      <CaseMain>
        <GlanceCard rows={GLANCE} labelWidth="160px" />

        <ProductShot
          src="/covers/ecostruxure.webp"
          width={2400}
          height={1031}
          alt="The Energy Hub Investigate view, captured from the product: the Home / Inbox / Investigate / Tenant billing / Setup navigation, Asset / Energy / Cost / Electrical view switcher, a searchable asset tree for an organisation with Australia, EU and India sites, an Alarms summary listing over-ambient-temperature and energy-consumption alarms with device IDs and elapsed time, an Alarms by location bar chart, and an Info side panel with alarm settings and tariffs tabs."
          caption="The Investigate module, captured from the product on an anonymised demo tenant. The asset tree on the left, alarms in the middle and the info panel on the right are the three surfaces a facility team moves between — which is why the roadmap work concentrated there."
        />

        {/* ── 01 BUSINESS PROBLEM ── */}
        <CaseSection n="01" label="Business problem">
          <H2 maxW="22ch" mb={14}>Energy data, siloed across buildings and devices.</H2>
          <Lede maxW="72ch">
            Large organizations typically operate multiple facilities with distributed electrical infrastructure. That
            makes it hard to see energy usage in one place, control who can act on it, and stay ahead of problems before
            they become costly.
          </Lede>

          <div className="cs-grid-2" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 16 }}>
            <div style={{ border: '1px solid var(--card-border)', borderRadius: 'var(--radius-tile)', padding: '22px 24px' }}>
              <span style={sub}>What customers needed</span>
              <Bullets items={PROBLEMS} />
            </div>

            <Callout label="Product vision">
              A unified cloud platform that simplifies energy management — secure facility monitoring, insight anytime,
              efficient user administration, and timely notifications that support operational decisions.
            </Callout>
          </div>
        </CaseSection>

        {/* ── 02 TARGET CUSTOMERS ── */}
        <CaseSection n="02" label="Target customers">
          <H2 maxW="26ch" mb={20}>Multi-site enterprises across commercial and industrial energy use.</H2>
          <Chips items={CUSTOMERS} />
        </CaseSection>

        {/* ── 03 MY ROLE ── */}
        <CaseSection n="03" label="My role">
          <H2 maxW="26ch" mb={16}>Technical Product Owner, bridging product and engineering.</H2>
          <Lede maxW="72ch">
            I translated product requirements into engineering deliverables, working closely with Product Management,
            UX, Software Engineering, QA, DevOps, Cybersecurity, and Architecture — and owned end-to-end delivery of
            five core platform capabilities.
          </Lede>
          <Bullets items={ROLE_RESPONSIBILITIES} mark="→" />
        </CaseSection>

        {/* ── 04 MODULES OWNED ── */}
        <CaseSection n="04" label="Modules owned">
          <H2 maxW="26ch" mb={14}>Five platform capabilities, owned end to end.</H2>
          <Lede maxW="72ch">
            Subscription Management, User Management, Dashboard, Mobile Application, and Notifications — each carried
            from requirement through release.
          </Lede>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {MODULES.map(m => (
              <div key={m.n} style={{ border: '1px solid var(--card-border)', borderRadius: 'var(--radius-tile)', padding: '24px 24px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 10 }}>
                  <span style={{ fontFamily: mono, fontSize: 12, fontWeight: 600, color: 'var(--accent)' }}>{m.n}</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 700, color: 'var(--ink)' }}>{m.title}</span>
                </div>

                <p style={{ margin: '0 0 22px', fontSize: 15, lineHeight: 1.65, color: 'var(--ink-soft)', maxWidth: '74ch' }}>
                  {m.objective}
                </p>

                <div
                  className={m.capabilities ? 'cs-grid-3' : 'cs-grid-2'}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: m.capabilities ? '1.3fr 1fr 1fr' : '1.4fr 1fr',
                    gap: 26,
                  }}
                >
                  <div>
                    <span style={sub}>Responsibilities</span>
                    <Bullets items={m.responsibilities} />
                  </div>

                  {m.capabilities && (
                    <div>
                      <span style={sub}>{m.capabilitiesLabel}</span>
                      <Bullets items={m.capabilities} mark="•" />
                    </div>
                  )}

                  <div>
                    <span style={{ ...sub, color: 'var(--accent)' }}>Business value</span>
                    <Bullets items={m.value} mark="✓" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CaseSection>

        {/* ── 05 AGILE OWNERSHIP ── */}
        <CaseSection n="05" label="Agile product ownership & collaboration">
          <H2 maxW="26ch" mb={20}>Backlog to release, across a cross-functional team.</H2>

          <div className="cs-grid-2" style={{ display: 'grid', gap: 16 }}>
            <div style={{ border: '1px solid var(--card-border)', borderRadius: 'var(--radius-tile)', padding: '22px 24px' }}>
              <span style={sub}>Throughout the lifecycle</span>
              <Bullets items={AGILE} />
            </div>
            <div style={{ border: '1px solid var(--card-border)', borderRadius: 'var(--radius-tile)', padding: '22px 24px' }}>
              <span style={sub}>Worked closely with</span>
              <Chips items={COLLABORATORS} />
            </div>
          </div>
        </CaseSection>

        {/* ── 06 TECHNOLOGY ── */}
        <CaseSection n="06" label="Technology & practices">
          <H2 maxW="26ch" mb={20}>Azure-native SaaS, secured by design.</H2>
          <div className="cs-grid-4" style={{ display: 'grid', gap: 16 }}>
            {STACK.map(s => <KeyCard key={s.k} k={s.k} t={s.t} d={s.d} />)}
          </div>
        </CaseSection>

        {/* ── 07 KEY SKILLS + OUTCOME ── */}
        <CaseSection n="07" label="Key skills demonstrated">
          <div style={{ marginBottom: 32 }}>
            <Chips items={SKILLS} />
          </div>

          <span style={sub}>Outcome</span>
          <Callout>
            Drove delivery of foundational platform capabilities supporting secure customer onboarding,
            subscription-based access, centralized user administration, intuitive dashboards, mobile accessibility, and
            timely notifications — essential building blocks of a consistent, scalable cloud experience for enterprise
            energy management customers.
          </Callout>
        </CaseSection>
      </CaseMain>

      <CaseCTA />
    </>
  )
}
