import { PROFILE } from '@/lib/data'
import Portrait from '@/components/ui/Portrait'

export default function Hero() {
  return (
    <section id="about" className="navy-band section" style={{ padding: '64px 0 72px' }}>
      <div
        className="wrap hero-inner"
        style={{ display: 'flex', gap: 44, alignItems: 'center' }}
      >
        <div
          className="hero-portrait"
          style={{
            width: 180, height: 180, borderRadius: '50%', flex: 'none',
            overflow: 'hidden', position: 'relative',   // anchors the fill Image
            background: 'repeating-linear-gradient(135deg,rgba(255,255,255,.06),rgba(255,255,255,.06) 10px,rgba(255,255,255,.12) 10px,rgba(255,255,255,.12) 20px)',
            border: '1px solid rgba(255,255,255,.18)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <Portrait />
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <p className="eyebrow" style={{ fontSize: 13 }}>{PROFILE.eyebrow}</p>

          <h1 style={{
            margin: 0,
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(28px,4.4vw,40px)', lineHeight: 1.15,
            letterSpacing: '-.02em', color: '#fff',
          }}>
            {PROFILE.headline}
          </h1>

          <p style={{
            margin: 0, maxWidth: 580,
            fontSize: 16, lineHeight: 1.65, color: 'rgba(255,255,255,.65)',
          }}>
            {PROFILE.intro}
          </p>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 9,
            width: 'fit-content', marginTop: 2,
            padding: '7px 14px', borderRadius: 999,
            border: '1px solid rgba(95,179,166,.35)',
            background: 'rgba(95,179,166,.1)',
          }}>
            <span className="blink" style={{
              width: 7, height: 7, borderRadius: '50%',
              background: 'var(--accent-light)', flexShrink: 0,
            }} />
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 11,
              letterSpacing: '.04em', color: 'rgba(255,255,255,.8)',
            }}>
              {PROFILE.availability}
            </span>
          </div>

          <div style={{
            display: 'flex', alignItems: 'center', gap: 20,
            marginTop: 6, flexWrap: 'wrap',
          }}>
            <a href="#work" className="btn">See how I work</a>
            {PROFILE.resumeUrl && (
              <a href={PROFILE.resumeUrl} className="link-btn" download>
                Download résumé ↓
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
