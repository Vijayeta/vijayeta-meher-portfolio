import Link from 'next/link'
import RevealSection from '@/components/ui/RevealSection'
import CoverBand from '@/components/ui/CoverBand'
import { WORKS, type Work as WorkItem } from '@/lib/data'

function CardBody({ w }: { w: WorkItem }) {
  return (
    <>
      <CoverBand cover={w.cover} label="product shot" />

      <div style={{
        padding: 22, display: 'flex', flexDirection: 'column', gap: 8,
        flex: 1,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <span className="chip">{w.tag}</span>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-faint)',
          }}>
            {w.year}
          </span>
        </div>

        <h3 style={{
          margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 19, color: 'var(--ink)',
        }}>
          {w.name}
        </h3>

        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: 'var(--ink-soft)' }}>
          {w.blurb}
        </p>

        <div style={{
          marginTop: 'auto', paddingTop: 16,
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          gap: 16, borderTop: '1px solid var(--card-border)',
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 20,
              color: 'var(--accent)', fontVariantNumeric: 'tabular-nums',
            }}>
              {w.metric}
            </div>
            <div style={{ fontSize: 12, color: 'var(--ink-faint)', marginTop: 2 }}>
              {w.metricLabel}
            </div>
          </div>
          {w.href && (
            <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--accent)' }}>
              Read case study →
            </span>
          )}
        </div>
      </div>
    </>
  )
}

const cardStyle = {
  overflow: 'hidden' as const,
  display: 'flex' as const,
  flexDirection: 'column' as const,
  textDecoration: 'none' as const,
  color: 'inherit',
  height: '100%',
}

export default function Work() {
  return (
    <div id="work" className="section">
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h2>Products I owned, with the number that mattered</h2>
      </div>

      <div className="cards-2" style={{ display: 'grid', gap: 20 }}>
        {WORKS.map(w => (
          <RevealSection key={w.idx} style={{ display: 'flex' }}>
            {w.href ? (
              <Link href={w.href} className="card hover-lift" style={{ ...cardStyle, width: '100%' }}>
                <CardBody w={w} />
              </Link>
            ) : (
              <div className="card" style={{ ...cardStyle, width: '100%' }}>
                <CardBody w={w} />
              </div>
            )}
          </RevealSection>
        ))}
      </div>
    </div>
  )
}
