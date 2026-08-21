import RevealSection from '@/components/ui/RevealSection'
import { POSTS } from '@/lib/data'

const ACCENT = '#0c766a'

export default function Writing() {
  return (
    <section
      id="writing"
      data-section="writing"
      style={{ padding: '64px 0', borderBottom: '1px solid rgba(15,20,23,.08)' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>

        <RevealSection style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 18 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: ACCENT }}>04</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.16em', color: '#99a1a7' }}>WRITING</span>
        </RevealSection>

        <RevealSection style={{ margin: '0 0 28px' }}>
          <h2 style={{ margin: 0, fontSize: 'clamp(30px,4vw,52px)', fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.04, maxWidth: '16ch' }}>
            Notes on the craft.
          </h2>
        </RevealSection>

        <div style={{ borderTop: '1px solid rgba(15,20,23,.1)' }}>
          {POSTS.map((p, i) => (
            <RevealSection key={i}>
              <a
                href="#"
                className="hover-row writing-row"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '90px 130px 1fr 70px 26px',
                  gap: 24, alignItems: 'center',
                  padding: '26px 14px',
                  borderBottom: '1px solid rgba(15,20,23,.1)',
                  textDecoration: 'none', color: 'inherit',
                  transition: 'background .2s, padding-left .2s',
                  backgroundColor: '#fff',
                }}
              >
                <span className="writing-date" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#99a1a7' }}>{p.date}</span>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.08em',
                  color: ACCENT, border: '1px solid rgba(12,118,106,.28)',
                  padding: '4px 8px', justifySelf: 'start',
                }}>{p.cat}</span>
                <span>
                  <span style={{ display: 'block', fontSize: 18, fontWeight: 600, letterSpacing: '-.01em', color: '#0f1417' }}>{p.title}</span>
                  <span style={{ display: 'block', fontSize: 13, color: '#5b6670', marginTop: 5 }}>{p.dek}</span>
                </span>
                <span className="writing-read" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#6b757d', textAlign: 'right' }}>{p.read}</span>
                <span style={{ color: ACCENT, textAlign: 'right', fontSize: 16 }}>→</span>
              </a>
            </RevealSection>
          ))}
        </div>

      </div>
    </section>
  )
}
