import RevealSection from '@/components/ui/RevealSection'
import { POSTS } from '@/lib/data'

export default function Writing() {
  return (
    <div id="writing" className="section">
      <div className="section-heading">
        <p className="eyebrow">Writing</p>
        <h2>Notes on the craft</h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {POSTS.map((p, i) => (
          <RevealSection key={i} style={{ display: 'flex' }}>
            <a
              href="#"
              className="card hover-lift writing-row"
              style={{
                width: '100%',
                display: 'grid', gap: 20, alignItems: 'center',
                padding: '20px 22px',
                textDecoration: 'none', color: 'inherit',
              }}
            >
              <span
                className="writing-date"
                style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-faint)' }}
              >
                {p.date}
              </span>

              <span className="chip">{p.cat}</span>

              <span>
                <span style={{
                  display: 'block', fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: 17, color: 'var(--ink)',
                }}>
                  {p.title}
                </span>
                <span style={{ display: 'block', fontSize: 13.5, color: 'var(--ink-soft)', marginTop: 4 }}>
                  {p.dek}
                </span>
              </span>

              <span
                className="writing-read"
                style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-faint)', textAlign: 'right' }}
              >
                {p.read}
              </span>

              <span style={{ color: 'var(--accent)', textAlign: 'right', fontSize: 16 }} aria-hidden="true">→</span>
            </a>
          </RevealSection>
        ))}
      </div>
    </div>
  )
}
