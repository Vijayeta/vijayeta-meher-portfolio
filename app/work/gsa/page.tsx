import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Global Search Application — Vijayeta Meher',
  description: 'UI modernisation of an internal enterprise search platform serving 75,000 visits per day at Ericsson.',
}

const ACCENT = '#0c766a'

function SectionLabel({ children }: { children: string }) {
  return (
    <div style={{
      fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.2em',
      color: ACCENT, marginBottom: 14, display: 'flex', alignItems: 'center', gap: 8,
    }}>
      <span style={{ display: 'inline-block', width: 16, height: 1, background: ACCENT }} />
      {children}
    </div>
  )
}

function ScreenshotPlaceholder({ label }: { label: string }) {
  return (
    <div style={{
      width: '100%', aspectRatio: '16/6',
      background: 'rgba(12,118,106,.03)',
      border: '1px dashed rgba(12,118,106,.2)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      gap: 8, marginTop: 12,
    }}>
      <span style={{ fontSize: 22, opacity: .15 }}>⬚</span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '.18em', color: '#b0b8be' }}>
        {label}
      </span>
    </div>
  )
}

const SHIPPED = [
  {
    n: '01',
    title: 'Search results redesign',
    body: 'Clearer hierarchy for result titles and metadata. Improved snippet visibility so users could evaluate relevance before clicking — reducing re-runs.',
    screenshot: 'SEARCH RESULTS',
  },
  {
    n: '02',
    title: 'Filter & refinement overhaul',
    body: 'Filters became discoverable. Active filter state was surfaced explicitly. Advanced refinement options were placed where users actually needed them.',
    screenshot: 'FILTER PANEL',
  },
  {
    n: '03',
    title: 'Interface modernisation',
    body: 'Cleaner layout, better spacing, more intuitive grouping of actions. Modern enterprise feel without disrupting familiar search patterns.',
    screenshot: 'UI OVERVIEW',
  },
  {
    n: '04',
    title: 'End-to-end search journey',
    body: 'Friction reduced at every handoff: query entry → results review → filter application → content discovery. Each step made faster and more deliberate.',
    screenshot: 'SEARCH JOURNEY',
  },
]

const METRICS = [
  {
    label: 'ADOPTION',
    points: ['Users active on the platform post-launch', 'Teams across functions relying on it daily', 'Continued engagement after redesign rollout'],
  },
  {
    label: 'ENGAGEMENT',
    points: ['Usage of search and refinement capabilities', 'Repeat daily usage for discovery tasks', 'Interaction with redesigned result and filter flows'],
  },
  {
    label: 'PLATFORM HEALTH',
    points: ['Service availability and uptime through rollout', 'Stability of the modernised experience', 'Zero disruption to existing search workflows'],
  },
  {
    label: 'USER SATISFACTION',
    points: ['Qualitative feedback collected post-release', 'Stakeholder confidence in the redesigned product', 'Sentiment on ease of use and search clarity'],
  },
]

export default function GSAPage() {
  return (
    <>
      {/* Top bar */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        height: 52, display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', padding: '0 36px',
        background: 'rgba(255,255,255,.92)',
        backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(15,20,23,.08)',
      }}>
        <Link href="/#work" style={{
          fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.08em',
          textDecoration: 'none', color: '#6b757d',
        }}>
          ← WORK
        </Link>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 7, textDecoration: 'none', color: '#0f1417' }}>
          <span style={{ width: 7, height: 7, background: ACCENT, borderRadius: '50%', flexShrink: 0 }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, letterSpacing: '.06em' }}>VIJAYETA MEHER</span>
        </Link>
      </div>

      <main style={{ paddingTop: 52 }}>
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '48px 36px 72px' }}>

          {/* ── Header ── */}
          <div style={{ marginBottom: 36 }}>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.18em',
              color: '#99a1a7', marginBottom: 14,
            }}>
              03 / ENTERPRISE
            </div>
            <h1 style={{
              margin: '0 0 20px', fontSize: 'clamp(30px,5vw,56px)',
              fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.02, color: ACCENT,
            }}>
              Global Search Application
            </h1>
            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: '8px 24px',
              fontFamily: 'var(--font-mono)', fontSize: 11, color: '#6b757d',
            }}>
              {['Ericsson', 'Telecom', '~75,000 visits / day', 'Product Owner · UI Modernisation'].map(m => (
                <span key={m} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: ACCENT, flexShrink: 0 }} />
                  {m}
                </span>
              ))}
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(15,20,23,.1)', marginBottom: 40 }} />

          {/* ── The Problem ── */}
          <div style={{ marginBottom: 40 }}>
            <SectionLabel>THE PROBLEM</SectionLabel>
            <p style={{ margin: '0 0 16px', fontSize: 15, lineHeight: 1.6, color: '#4b5660' }}>
              The GSA handled ~75,000 visits per day but the legacy UI created compounding friction. Users weren&apos;t failing to search — they were failing to <em>find</em>.
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Results were hard to scan — users clicked into irrelevant items and re-ran searches repeatedly',
                "Filters were buried and unintuitive; active filter state was invisible",
                'Snippets lacked context — users couldn\'t evaluate relevance before clicking',
                'The UI felt dated and inconsistent with modern enterprise tooling',
                'Repeated refinement loops increased time-to-find and user frustration',
              ].map((p, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, fontSize: 14, lineHeight: 1.55, color: '#2c343a' }}>
                  <span style={{ color: ACCENT, fontFamily: 'var(--font-mono)', fontSize: 10, paddingTop: 4, flexShrink: 0 }}>▲</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── My Role ── */}
          <div style={{ marginBottom: 40 }}>
            <SectionLabel>MY ROLE</SectionLabel>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Owned the modernisation roadmap and backlog end-to-end',
                'Ran discovery: user interviews, surveys, and heuristic analysis across business functions',
                'Translated findings into prioritised product requirements and user stories',
                'Aligned design and engineering on scope — made trade-off calls based on user value and usage frequency',
                'Partnered cross-functionally from problem framing through to delivery and release',
              ].map((r, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, fontSize: 14, lineHeight: 1.5, color: '#2c343a' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: ACCENT, paddingTop: 4, flexShrink: 0 }}>→</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Discovery ── */}
          <div style={{ marginBottom: 40 }}>
            <SectionLabel>DISCOVERY</SectionLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
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
              ].map(d => (
                <div key={d.n} style={{ display: 'grid', gridTemplateColumns: '28px 1fr', gap: 16, alignItems: 'start' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: ACCENT, paddingTop: 2 }}>{d.n}</span>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: '#0f1417', marginBottom: 6 }}>{d.title}</div>
                    <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: '#5b6670' }}>{d.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── What Shipped ── */}
          <div style={{ marginBottom: 40 }}>
            <SectionLabel>WHAT SHIPPED</SectionLabel>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1,
              background: 'rgba(15,20,23,.08)', border: '1px solid rgba(15,20,23,.08)',
            }}>
              {SHIPPED.map(s => (
                <div key={s.n} style={{ background: '#fff', padding: '20px 22px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: ACCENT, letterSpacing: '.1em', marginBottom: 8 }}>{s.n}</div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#0f1417', marginBottom: 8 }}>{s.title}</div>
                  <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: '#5b6670' }}>{s.body}</p>
                  <ScreenshotPlaceholder label={s.screenshot} />
                </div>
              ))}
            </div>
          </div>

          {/* ── Metrics ── */}
          <div style={{ marginBottom: 40 }}>
            <SectionLabel>METRICS</SectionLabel>
            <p style={{ margin: '0 0 16px', fontSize: 14, lineHeight: 1.6, color: '#6b757d' }}>
              As an internal enterprise tool, success wasn&apos;t measured like a consumer product. We tracked four dimensions post-launch.
            </p>

            {/* Scale callout */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 20, padding: '16px 20px',
              background: 'rgba(12,118,106,.05)', border: '1px solid rgba(12,118,106,.16)',
              marginBottom: 16,
            }}>
              <div>
                <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: '-.02em', color: ACCENT, lineHeight: 1 }}>75,000</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#6b757d', letterSpacing: '.08em', marginTop: 4 }}>VISITS / DAY — PLATFORM SCALE</div>
              </div>
              <div style={{ width: 1, height: 36, background: 'rgba(12,118,106,.2)', flexShrink: 0 }} />
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5, color: '#5b6670' }}>
                High-traffic internal platform where even small usability improvements had compounding impact across the employee base.
              </p>
            </div>

            {/* 4-dimension grid */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1,
              background: 'rgba(15,20,23,.08)', border: '1px solid rgba(15,20,23,.08)',
            }}>
              {METRICS.map(m => (
                <div key={m.label} style={{ background: '#fff', padding: '18px 20px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: ACCENT, letterSpacing: '.14em', marginBottom: 12 }}>{m.label}</div>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {m.points.map((pt, i) => (
                      <li key={i} style={{ display: 'flex', gap: 10, fontSize: 13, lineHeight: 1.5, color: '#4b5660' }}>
                        <span style={{ color: ACCENT, fontFamily: 'var(--font-mono)', fontSize: 9, paddingTop: 3, flexShrink: 0 }}>▲</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ── Impact ── */}
          <div style={{ marginBottom: 48 }}>
            <SectionLabel>IMPACT</SectionLabel>
            <ul style={{ margin: '0 0 20px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Improved the usability of a 75,000 visits/day internal platform used daily across business functions',
                'Reduced friction in result discovery and search refinement workflows',
                'Modernised a legacy enterprise UI without disrupting existing search behaviour',
                'Strong user and stakeholder response post-launch; created a foundation for future search improvements',
              ].map((imp, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, fontSize: 14, lineHeight: 1.55, color: '#2c343a' }}>
                  <span style={{ color: ACCENT, fontFamily: 'var(--font-mono)', fontSize: 10, paddingTop: 3, flexShrink: 0 }}>✓</span>
                  <span>{imp}</span>
                </li>
              ))}
            </ul>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 14px', background: 'rgba(12,118,106,.07)', border: '1px solid rgba(12,118,106,.18)' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: ACCENT }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.08em', color: '#2c343a' }}>STATUS: SHIPPED</span>
            </div>
          </div>

          {/* ── Footer nav ── */}
          <div style={{ borderTop: '1px solid rgba(15,20,23,.1)', paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link href="/#work" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.08em', textDecoration: 'none', color: '#6b757d' }}>
              ← BACK TO WORK
            </Link>
            <Link href="/#contact" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.08em', textDecoration: 'none', color: ACCENT }}>
              GET IN TOUCH →
            </Link>
          </div>

        </div>
      </main>
    </>
  )
}
