import type { CSSProperties } from 'react'
import Link from 'next/link'
import RevealSection from '@/components/ui/RevealSection'
import { WORKS } from '@/lib/data'

const ACCENT = '#0c766a'

const cardBase: CSSProperties = {
  display: 'flex', flexDirection: 'column',
  background: '#fff', padding: '30px 26px', minHeight: 230,
  transition: 'background .25s',
}

function CardInner({ w }: { w: typeof WORKS[0] }) {
  return (
    <>
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        fontFamily: 'var(--font-mono)', fontSize: 11, color: '#99a1a7', letterSpacing: '.06em',
      }}>
        <span>{w.idx}</span><span>{w.year}</span>
      </div>
      <div style={{ fontSize: 26, fontWeight: 600, letterSpacing: '-.02em', marginTop: 22, color: '#0f1417' }}>
        {w.name}
      </div>
      <p style={{ fontSize: 14, lineHeight: 1.55, color: '#5b6670', margin: '12px 0 0' }}>
        {w.blurb}
      </p>
      <div style={{ marginTop: 'auto', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 18, fontWeight: 600, color: ACCENT, fontVariantNumeric: 'tabular-nums' }}>
          {w.metric}
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.08em',
            color: '#6b757d', border: '1px solid rgba(15,20,23,.14)', padding: '5px 9px',
          }}>
            {w.tag}
          </span>
          {w.href && (
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.08em', color: ACCENT }}>
              CASE STUDY →
            </span>
          )}
        </div>
      </div>
    </>
  )
}

export default function Work() {
  return (
    <section
      id="work"
      data-section="work"
      style={{ padding: '64px 0', borderBottom: '1px solid rgba(15,20,23,.08)' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>

        <RevealSection style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 18 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: ACCENT }}>02</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.16em', color: '#99a1a7' }}>SELECTED WORK</span>
        </RevealSection>

        <RevealSection style={{ margin: '0 0 32px' }}>
          <h2 style={{ margin: 0, fontSize: 'clamp(30px,4vw,52px)', fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.04, maxWidth: '20ch' }}>
            Products I owned, with the number that mattered.
          </h2>
        </RevealSection>

        <div
          className="grid-works"
          style={{
            display: 'grid', gridTemplateColumns: 'repeat(2,1fr)',
            gap: 1, background: 'rgba(15,20,23,.09)',
            border: '1px solid rgba(15,20,23,.09)',
          }}
        >
          {WORKS.map(w => w.href ? (
            <RevealSection key={w.idx} style={{ height: '100%' }}>
              <Link href={w.href} className="hover-card" style={{ ...cardBase, height: '100%', textDecoration: 'none', color: 'inherit' }}>
                <CardInner w={w} />
              </Link>
            </RevealSection>
          ) : (
            <RevealSection key={w.idx} className="hover-card" style={cardBase}>
              <CardInner w={w} />
            </RevealSection>
          ))}
        </div>

      </div>
    </section>
  )
}
