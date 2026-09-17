import RevealSection from '@/components/ui/RevealSection'
import { CAREER } from '@/lib/data'

export default function Experience() {
  return (
    <div id="experience" className="section">
      <div className="section-heading">
        <p className="eyebrow">Experience</p>
        <h2>Fourteen years, engineering to product</h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {CAREER.map((row, i) => (
          <RevealSection
            key={i}
            className="card hover-lift exp-row"
            style={{ display: 'grid', gap: 24, padding: '26px 28px', alignItems: 'start' }}
          >
            <span className="chip" style={{ marginTop: 2 }}>{row.year}</span>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19,
                color: 'var(--ink)',
              }}>
                {row.company}
              </span>
              <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--accent)' }}>
                {row.role}
              </span>
              <p style={{
                margin: '4px 0 0', fontSize: 15, lineHeight: 1.65,
                color: 'var(--ink-soft)', maxWidth: '72ch',
              }}>
                {row.owned}
              </p>
            </div>
          </RevealSection>
        ))}
      </div>
    </div>
  )
}
