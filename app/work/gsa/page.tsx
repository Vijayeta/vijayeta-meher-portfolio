import type { Metadata } from 'next'
import {
  CaseNav, CaseHeader, CaseMain, CaseSection, CaseCTA, GlanceCard,
  H2, Lede, Bullets, KeyCard, Callout, Metric, ProductShot, mono,
} from '@/components/case'

export const metadata: Metadata = {
  title: 'Global Search Application — Vijayeta Meher',
  description: 'UI modernisation of an internal enterprise search platform serving 75,000 visits per day at Ericsson.',
}

// ── Data ──────────────────────────────────────────────────

const GLANCE = [
  { k: 'Product type', v: 'Internal enterprise search platform' },
  { k: 'Owner',        v: 'Ericsson — Telecom' },
  { k: 'Scale',        v: '~75,000 visits per day, across business functions' },
  { k: 'Scope',        v: 'UI modernisation — search results, filters, refinement, end-to-end journey' },
  { k: 'Role',         v: 'Product Owner — discovery, roadmap, backlog, delivery' },
]

const PROBLEMS = [
  'Results were hard to scan — users clicked into irrelevant items and re-ran searches repeatedly',
  'Filters were buried and unintuitive; active filter state was invisible',
  "Snippets lacked context — users couldn't evaluate relevance before clicking",
  'The UI felt dated and inconsistent with modern enterprise tooling',
  'Repeated refinement loops increased time-to-find and user frustration',
]

const ROLE = [
  'Owned the modernisation roadmap and backlog end-to-end',
  'Ran discovery: user interviews, surveys, and heuristic analysis across business functions',
  'Translated findings into prioritised product requirements and user stories',
  'Aligned design and engineering on scope — made trade-off calls based on user value and usage frequency',
  'Partnered cross-functionally from problem framing through to delivery and release',
]

const DISCOVERY = [
  {
    n: '01',
    title: 'Heuristic review',
    body: 'Evaluated the legacy interface for result clarity, filter visibility, ease of refinement, and information hierarchy. Surfaced structural workflow breakdowns — not just cosmetic issues.',
  },
  {
    n: '02',
    title: 'User interviews & surveys',
    body: 'Gathered feedback across business functions on what they searched for, where they got stuck, and what slowed them down. Pain points converged on result context, filters, and UI consistency.',
  },
  {
    n: '03',
    title: 'Journey mapping',
    body: 'Mapped search intent → results → refinement → discovery. Friction peaked at result evaluation and filter application — not query entry. This shifted the frame from "visual refresh" to "fix the workflow."',
  },
]

const SHIPPED = [
  {
    n: '01',
    title: 'Search results redesign',
    body: 'Clearer hierarchy for result titles and metadata. Improved snippet visibility so users could evaluate relevance before clicking — reducing re-runs.',
  },
  {
    n: '02',
    title: 'Filter & refinement overhaul',
    body: 'Filters became discoverable. Active filter state was surfaced explicitly. Advanced refinement options were placed where users actually needed them.',
  },
  {
    n: '03',
    title: 'Interface modernisation',
    body: 'Cleaner layout, better spacing, more intuitive grouping of actions. Modern enterprise feel without disrupting familiar search patterns.',
  },
  {
    n: '04',
    title: 'End-to-end search journey',
    body: 'Friction reduced at every handoff: query entry → results review → filter application → content discovery. Each step made faster and more deliberate.',
  },
]

const METRICS = [
  {
    label: 'Adoption',
    points: ['Users active on the platform post-launch', 'Teams across functions relying on it daily', 'Continued engagement after redesign rollout'],
  },
  {
    label: 'Engagement',
    points: ['Usage of search and refinement capabilities', 'Repeat daily usage for discovery tasks', 'Interaction with redesigned result and filter flows'],
  },
  {
    label: 'Platform health',
    points: ['Service availability and uptime through rollout', 'Stability of the modernised experience', 'Zero disruption to existing search workflows'],
  },
  {
    label: 'User satisfaction',
    points: ['Qualitative feedback collected post-release', 'Stakeholder confidence in the redesigned product', 'Sentiment on ease of use and search clarity'],
  },
]

const IMPACT = [
  'Improved the usability of a 75,000 visits/day internal platform used daily across business functions',
  'Reduced friction in result discovery and search refinement workflows',
  'Modernised a legacy enterprise UI without disrupting existing search behaviour',
  'Strong user and stakeholder response post-launch; created a foundation for future search improvements',
]

const sub = { fontFamily: mono, fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'var(--ink-faint)', marginBottom: 14, display: 'block' }

// ── Page ──────────────────────────────────────────────────

export default function GSAPage() {
  return (
    <>
      <CaseNav label="Selected work · Ericsson" />

      <CaseHeader
        eyebrow="Selected work · Ericsson"
        title="Global Search Application"
        subtitle="Product Owner — UI modernisation, Ericsson"
        lede="An internal enterprise search platform handling roughly 75,000 visits per day. The search worked; finding did not. This was a modernisation of the result, filter and refinement experience — reframed mid-discovery from a visual refresh into a workflow fix."
        tags={['Ericsson', 'Telecom', '~75,000 visits / day', 'Shipped']}
      />

      <CaseMain>
        <GlanceCard rows={GLANCE} labelWidth="160px" />

        <ProductShot
          src="/covers/gsa.svg"
          width={1200}
          height={420}
          alt="The Global Search Tool interface: a full-width search field over a dark header, category tabs, a filter row, and grids of recently viewed result cards."
          caption="The modernised interface — search, category tabs, filter row and result cards. Redrawn from the shipped product; labels and URLs are genericised."
        />

        {/* ── 01 THE PROBLEM ── */}
        <CaseSection n="01" label="The problem">
          <H2 maxW="24ch" mb={14}>Users weren&apos;t failing to search. They were failing to find.</H2>
          <Lede maxW="72ch">
            The GSA handled ~75,000 visits per day, but the legacy UI created compounding friction. Every unclear result
            cost a click, and every unclear filter cost a re-run.
          </Lede>
          <Bullets items={PROBLEMS} />
        </CaseSection>

        {/* ── 02 MY ROLE ── */}
        <CaseSection n="02" label="My role">
          <H2 maxW="24ch" mb={20}>Owned the modernisation from problem framing to release.</H2>
          <Bullets items={ROLE} mark="→" />
        </CaseSection>

        {/* ── 03 DISCOVERY ── */}
        <CaseSection n="03" label="Discovery">
          <H2 maxW="26ch" mb={20}>Three methods that moved the brief from &quot;refresh&quot; to &quot;rework&quot;.</H2>
          <div className="cs-grid-3" style={{ display: 'grid', gap: 16 }}>
            {DISCOVERY.map(d => <KeyCard key={d.n} k={d.n} t={d.title} d={d.body} />)}
          </div>
        </CaseSection>

        {/* ── 04 WHAT SHIPPED ── */}
        <CaseSection n="04" label="What shipped">
          <H2 maxW="24ch" mb={20}>Four changes, each aimed at a measured friction point.</H2>
          <div className="cs-grid-2" style={{ display: 'grid', gap: 16 }}>
            {SHIPPED.map(s => (
              <div key={s.n} style={{ border: '1px solid var(--card-border)', borderRadius: 'var(--radius-tile)', padding: '20px 20px' }}>
                <span style={{ fontFamily: mono, fontSize: 11, fontWeight: 600, color: 'var(--accent)' }}>{s.n}</span>
                <div style={{
                  fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16,
                  color: 'var(--ink)', margin: '8px 0',
                }}>
                  {s.title}
                </div>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--ink-soft)' }}>{s.body}</p>
              </div>
            ))}
          </div>
        </CaseSection>

        {/* ── 05 METRICS ── */}
        <CaseSection n="05" label="Metrics">
          <H2 maxW="26ch" mb={14}>An internal tool isn&apos;t measured like a consumer product.</H2>
          <Lede maxW="72ch">
            Success was tracked across four dimensions post-launch rather than a single conversion number.
          </Lede>

          <div style={{ marginBottom: 24 }}>
            <Callout>
              <div style={{ display: 'flex', alignItems: 'center', gap: 22, flexWrap: 'wrap' }}>
                <Metric value="75,000" label="visits / day — platform scale" accent size="28px" />
                <p style={{ margin: 0, flex: 1, minWidth: 260, fontSize: 14, lineHeight: 1.6, color: 'var(--ink-soft)' }}>
                  A high-traffic internal platform, where even small usability improvements had compounding impact
                  across the employee base.
                </p>
              </div>
            </Callout>
          </div>

          <div className="cs-grid-2" style={{ display: 'grid', gap: 16 }}>
            {METRICS.map(m => (
              <div key={m.label} style={{ border: '1px solid var(--card-border)', borderRadius: 'var(--radius-tile)', padding: '18px 20px' }}>
                <span style={{ ...sub, color: 'var(--accent)' }}>{m.label}</span>
                <Bullets items={m.points} />
              </div>
            ))}
          </div>
        </CaseSection>

        {/* ── 06 IMPACT ── */}
        <CaseSection n="06" label="Impact">
          <H2 maxW="24ch" mb={20}>What changed for the people using it every day.</H2>
          <div style={{ marginBottom: 24 }}>
            <Bullets items={IMPACT} mark="✓" />
          </div>

          <div className="chip" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 14px' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
            <span style={{ letterSpacing: '.08em' }}>STATUS: SHIPPED</span>
          </div>
        </CaseSection>
      </CaseMain>

      <CaseCTA />
    </>
  )
}
