import RevealSection from '@/components/ui/RevealSection'
import { CAREER, FRAMEWORKS } from '@/lib/data'

const ACCENT = '#0c766a'

function PhotoPlaceholder() {
  return (
    <div style={{
      position: 'relative',
      aspectRatio: '3 / 4',
      background: 'rgba(12,118,106,.04)',
      border: '1px solid rgba(12,118,106,.18)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {/* Corner accents */}
      <span style={{ position: 'absolute', top: 14, left: 14, width: 18, height: 18, borderTop: `1.5px solid ${ACCENT}`, borderLeft: `1.5px solid ${ACCENT}` }} />
      <span style={{ position: 'absolute', top: 14, right: 14, width: 18, height: 18, borderTop: `1.5px solid ${ACCENT}`, borderRight: `1.5px solid ${ACCENT}` }} />
      <span style={{ position: 'absolute', bottom: 14, left: 14, width: 18, height: 18, borderBottom: `1.5px solid ${ACCENT}`, borderLeft: `1.5px solid ${ACCENT}` }} />
      <span style={{ position: 'absolute', bottom: 14, right: 14, width: 18, height: 18, borderBottom: `1.5px solid ${ACCENT}`, borderRight: `1.5px solid ${ACCENT}` }} />

      {/* Avatar initials */}
      <div style={{
        width: 80, height: 80, borderRadius: '50%',
        background: 'rgba(12,118,106,.10)',
        border: `1.5px solid rgba(12,118,106,.3)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 20,
      }}>
        <span style={{ fontSize: 28, fontWeight: 600, color: ACCENT, letterSpacing: '-.02em' }}>VM</span>
      </div>

      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.2em', color: '#99a1a7' }}>
        YOUR PHOTO
      </span>

      {/* Replace this div with <Image src="..." fill alt="Vijayeta Meher" style={{objectFit:'cover'}} /> */}
    </div>
  )
}

export default function About() {
  return (
    <section
      id="about"
      data-section="about"
      style={{ padding: '64px 0', borderBottom: '1px solid rgba(15,20,23,.08)' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>

        {/* ── Intro row: text left · photo right ── */}
        <div className="about-intro-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 40, alignItems: 'start', marginBottom: 40 }}>

          <div>
            <RevealSection style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 18 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: ACCENT }}>01</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.16em', color: '#99a1a7' }}>ABOUT</span>
            </RevealSection>

            <RevealSection style={{ marginBottom: 22 }}>
              <h2 style={{ margin: 0, fontSize: 'clamp(30px,4vw,52px)', fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.04, maxWidth: '18ch' }}>
                From Product Owner to Product Manager.
              </h2>
            </RevealSection>

            <RevealSection>
              <p style={{ margin: 0, maxWidth: '60ch', fontSize: 17, lineHeight: 1.6, color: '#4b5660' }}>
                I&apos;ve spent five years owning backlogs, writing the specs, and shipping on a predictable cadence — the delivery side, done well. I know how software actually gets built. Now I&apos;m growing into the rest of the job: discovery, strategy, and being accountable for the outcome. Here&apos;s the path so far.
              </p>
            </RevealSection>
          </div>

          <RevealSection style={{ position: 'sticky', top: 'calc(50vh - 260px)' }}>
            <PhotoPlaceholder />
          </RevealSection>

        </div>

        {/* ── Career timeline table ── */}
        <RevealSection style={{ border: '1px solid rgba(15,20,23,.09)', background: '#ffffff' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '120px 1.25fr 1.7fr 2.3fr',
            gap: 24, padding: '14px 22px',
            borderBottom: '1px solid rgba(15,20,23,.09)',
            fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.14em', color: '#99a1a7',
          }}>
            <span>YEAR</span><span>COMPANY</span><span>ROLE</span><span>WHAT I OWNED</span>
          </div>
          {CAREER.map((row, i) => (
            <div
              key={i}
              className="hover-card"
              style={{
                display: 'grid', gridTemplateColumns: '120px 1.25fr 1.7fr 2.3fr',
                gap: 24, padding: '20px 22px',
                borderBottom: i < CAREER.length - 1 ? '1px solid rgba(15,20,23,.07)' : undefined,
                alignItems: 'start', transition: 'background .2s',
              }}
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: ACCENT }}>{row.year}</span>
              <span style={{ fontSize: 16, fontWeight: 600, color: '#0f1417' }}>{row.company}</span>
              <span style={{ fontSize: 14, color: '#2c343a' }}>{row.role}</span>
              <span style={{ fontSize: 14, color: '#5b6670', lineHeight: 1.5 }}>{row.owned}</span>
            </div>
          ))}
        </RevealSection>

        {/* ── HOW I THINK ── */}
        <RevealSection style={{ display: 'flex', alignItems: 'baseline', gap: 16, margin: '48px 0 20px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: ACCENT }}>▲</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.16em', color: '#99a1a7' }}>HOW I THINK</span>
        </RevealSection>

        <div
          className="grid-frames"
          style={{
            display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
            gap: 1, background: 'rgba(15,20,23,.09)',
            border: '1px solid rgba(15,20,23,.09)',
          }}
        >
          {FRAMEWORKS.map(f => (
            <RevealSection
              key={f.k}
              className="hover-card"
              style={{ background: '#fff', padding: '28px 24px', transition: 'background .25s' }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: ACCENT, marginBottom: 18 }}>{f.k}</div>
              <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-.01em', marginBottom: 12, lineHeight: 1.2, color: '#0f1417' }}>{f.t}</div>
              <div style={{ fontSize: 14, lineHeight: 1.55, color: '#5b6670' }}>{f.d}</div>
            </RevealSection>
          ))}
        </div>

      </div>
    </section>
  )
}
