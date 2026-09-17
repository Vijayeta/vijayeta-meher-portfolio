import RevealSection from '@/components/ui/RevealSection'
import { PROFILE, FRAMEWORKS } from '@/lib/data'

export default function Story() {
  return (
    <>
      <RevealSection
        className="panel story-panel"
        style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
      >
        <p className="eyebrow">My story</p>
        <div className="prose" style={{ maxWidth: 830, width: '100%' }}>
          {PROFILE.story.map((para, i) => <p key={i}>{para}</p>)}
        </div>
      </RevealSection>

      <div>
        <div className="section-heading">
          <p className="eyebrow">How I think</p>
          <h2>Four things I keep coming back to</h2>
        </div>

        <div className="frameworks-grid" style={{ display: 'grid', gap: 16 }}>
          {FRAMEWORKS.map(f => (
            <RevealSection
              key={f.k}
              className="card hover-lift"
              style={{ padding: '24px 22px', display: 'flex', flexDirection: 'column', gap: 8 }}
            >
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600,
                color: 'var(--accent)',
              }}>
                {f.k}
              </span>
              <span style={{
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18,
                color: 'var(--ink)', lineHeight: 1.25,
              }}>
                {f.t}
              </span>
              <span style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--ink-soft)' }}>
                {f.d}
              </span>
            </RevealSection>
          ))}
        </div>
      </div>
    </>
  )
}
