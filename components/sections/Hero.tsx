'use client'
import { useCountUpGroup } from '@/components/ui/useCountUpGroup'
import { HEROSTATS, fmt } from '@/lib/data'

const ACCENT = '#0c766a'

export default function Hero() {
  const { ref, progress } = useCountUpGroup()

  return (
    <section
      id="home"
      data-section="home"
      style={{
        position: 'relative', minHeight: '100vh',
        display: 'flex', alignItems: 'center',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(15,20,23,.08)',
      }}
    >
      {/* Grid background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(15,20,23,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(15,20,23,.045) 1px,transparent 1px)',
        backgroundSize: '62px 62px',
        WebkitMaskImage: 'radial-gradient(ellipse 75% 70% at 28% 32%,#000 30%,transparent 76%)',
        maskImage: 'radial-gradient(ellipse 75% 70% at 28% 32%,#000 30%,transparent 76%)',
      }} />

      {/* Drift blob */}
      <div className="drift" style={{
        position: 'absolute', top: '-25%', right: '-12%',
        width: '62vw', height: '62vw',
        background: 'radial-gradient(circle,rgba(12,118,106,.10),transparent 60%)',
        filter: 'blur(10px)', pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative', maxWidth: 1200, margin: '0 auto',
        padding: '80px 40px 56px', width: '100%',
      }}>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 18,
          letterSpacing: '.2em', color: ACCENT,
          marginBottom: 34, display: 'flex', alignItems: 'center', gap: 14,
        }}>
          PRODUCT MANAGER
        </div>

        <h1 style={{
          margin: 0,
          fontSize: 'clamp(32px,5.5vw,74px)',
          fontWeight: 600, lineHeight: .94,
          letterSpacing: '-.035em', maxWidth: '15ch',
        }}>
          Building AI products{' '}
          <span style={{ color: ACCENT }}>that solve real customer problems.</span>
        </h1>

        <p style={{
          margin: '34px 0 0', maxWidth: '62ch',
          fontSize: 'clamp(16px,1.5vw,20px)', lineHeight: 1.55, color: '#4b5660',
        }}>
          Product Manager with 14 years of experience delivering enterprise software and digital products. Combining product strategy, AI, experimentation, and customer insights to create intelligent products that drive measurable business outcomes.
        </p>

        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          marginTop: 30, padding: '9px 16px',
          border: '1px solid rgba(12,118,106,.28)',
          background: 'rgba(12,118,106,.06)',
        }}>
          <span className="blink" style={{ width: 7, height: 7, borderRadius: '50%', background: ACCENT, flexShrink: 0 }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.08em', color: '#2c343a' }}>
            OPEN TO PRODUCT MANAGER ROLES · BANGALORE / REMOTE
          </span>
        </div>

        {/* Hero stats */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="hero-stats"
          style={{ display: 'flex', gap: 48, marginTop: 40, flexWrap: 'wrap' }}
        >
          {HEROSTATS.map(s => (
            <div key={s.key}>
              <div style={{
                fontSize: 'clamp(30px,3.4vw,46px)', fontWeight: 600,
                letterSpacing: '-.02em', fontVariantNumeric: 'tabular-nums', lineHeight: 1,
                color: '#0f1417',
              }}>
                {fmt(s.target, s.dec, s.prefix, s.suffix, progress)}
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 11,
                letterSpacing: '.06em', color: '#6b757d', marginTop: 8,
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 30, left: 40,
        fontFamily: 'var(--font-mono)', fontSize: 11,
        letterSpacing: '.18em', color: '#99a1a7',
      }}>
        SCROLL <span className="blink">↓</span>
      </div>
    </section>
  )
}
