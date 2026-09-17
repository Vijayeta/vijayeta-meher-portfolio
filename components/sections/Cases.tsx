'use client'
import Link from 'next/link'
import RevealSection from '@/components/ui/RevealSection'
import CoverBand from '@/components/ui/CoverBand'
import { useCountUpGroup } from '@/components/ui/useCountUpGroup'
import { CASES, fmt, type Case } from '@/lib/data'

function CaseCard({ c }: { c: Case }) {
  const { ref, progress } = useCountUpGroup()

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className="card hover-lift"
      style={{ width: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
    >
      <CoverBand cover={c.cover} label="product shot" />

      <div style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <span className="chip">{c.tag}</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-faint)' }}>
            {c.role}
          </span>
        </div>

        <div>
          <h3 style={{
            margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 19, lineHeight: 1.3, color: 'var(--ink)',
          }}>
            {c.title}
          </h3>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.04em',
            color: 'var(--ink-faint)', marginTop: 6,
          }}>
            {c.company} · {c.sector}
          </div>
        </div>

        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--ink-soft)' }}>
          {c.problem}
        </p>

        {/* Only the lead approach point — the full list lives on the case study
            page. Reorder `approach` in lib/data.ts to change which one shows. */}
        <ul style={{ listStyle: 'none', margin: '2px 0 0', padding: 0 }}>
          <li style={{ display: 'flex', gap: 10, fontSize: 13.5, lineHeight: 1.55, color: 'var(--ink-soft)' }}>
            <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 1 }} aria-hidden="true">▸</span>
            <span>{c.approach[0]}</span>
          </li>
        </ul>

        {/* Metrics strip */}
        <div style={{
          marginTop: 'auto', paddingTop: 18,
          borderTop: '1px solid var(--card-border)',
          display: 'flex', flexWrap: 'wrap', gap: 28, alignItems: 'flex-end',
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 30,
              color: 'var(--accent)', lineHeight: 1, fontVariantNumeric: 'tabular-nums',
            }}>
              {fmt(c.main.target, c.main.dec, c.main.prefix, c.main.suffix, progress)}
            </div>
            <div style={{ fontSize: 12, color: 'var(--ink-faint)', marginTop: 6 }}>
              {c.mainLabel}
            </div>
          </div>

          {c.sub.map((m, i) => (
            <div key={i}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 18,
                color: 'var(--ink)', lineHeight: 1, fontVariantNumeric: 'tabular-nums',
              }}>
                {fmt(m.target, m.dec, m.prefix, m.suffix, progress)}
              </div>
              <div style={{ fontSize: 12, color: 'var(--ink-faint)', marginTop: 6 }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {c.href && (
          <Link
            href={c.href}
            style={{
              marginTop: 4, fontSize: 14, fontWeight: 700,
              color: 'var(--accent)', textDecoration: 'none',
            }}
          >
            Read full case study →
          </Link>
        )}
      </div>
    </article>
  )
}

export default function Cases() {
  return (
    <div id="ai-lab" className="section">
      <div className="section-heading">
        <p className="eyebrow">AI Lab · Case studies</p>
        <h2>A few problems I liked solving</h2>
      </div>

      <div className="cards-2" style={{ display: 'grid', gap: 20, alignItems: 'stretch' }}>
        {CASES.map(c => (
          <RevealSection key={c.idx} style={{ display: 'flex' }}>
            <CaseCard c={c} />
          </RevealSection>
        ))}
      </div>
    </div>
  )
}
