import RevealSection from '@/components/ui/RevealSection'

const ACCENT = '#0c766a'

export default function Contact() {
  return (
    <footer
      id="contact"
      data-section="contact"
      style={{ padding: '64px 0 40px', position: 'relative', overflow: 'hidden' }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute', bottom: '-30%', left: '-10%',
        width: '55vw', height: '55vw',
        background: 'radial-gradient(circle,rgba(12,118,106,.09),transparent 60%)',
        filter: 'blur(10px)', pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>

        <RevealSection style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.16em', color: '#99a1a7', marginBottom: 26 }}>
          ↓ LET&apos;S TALK
        </RevealSection>

        <RevealSection>
          <h2 style={{ margin: 0, fontSize: 'clamp(28px,4.2vw,56px)', fontWeight: 600, letterSpacing: '-.035em', lineHeight: 1.05, maxWidth: '16ch', color: '#0f1417' }}>
            Looking for a PM who&apos;s lived the delivery side?
          </h2>
        </RevealSection>

        <RevealSection style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 44 }}>
          <a
            href="mailto:vijayeta.meher@gmail.com"
            className="hover-btn-primary"
            style={{
              fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '.04em',
              textDecoration: 'none', color: '#fff', background: ACCENT,
              padding: '14px 24px', fontWeight: 500, transition: 'background .2s',
            }}
          >
            vijayeta.meher@gmail.com →
          </a>
          <a
            href="#"
            className="hover-btn-outline"
            style={{
              fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '.04em',
              textDecoration: 'none', color: '#2c343a',
              border: '1px solid rgba(15,20,23,.16)', padding: '14px 24px',
              transition: 'border-color .2s, color .2s',
            }}
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="hover-btn-outline"
            style={{
              fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '.04em',
              textDecoration: 'none', color: '#2c343a',
              border: '1px solid rgba(15,20,23,.16)', padding: '14px 24px',
              transition: 'border-color .2s, color .2s',
            }}
          >
            Resume
          </a>
        </RevealSection>

        {/* Footer bar */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 16,
          marginTop: 90, paddingTop: 26,
          borderTop: '1px solid rgba(15,20,23,.1)',
        }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#99a1a7', letterSpacing: '.06em' }}>
            © 2026 VIJAYETA MEHER
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontFamily: 'var(--font-mono)', fontSize: 11, color: '#6b757d', letterSpacing: '.06em' }}>
            <span className="blink" style={{ width: 6, height: 6, borderRadius: '50%', background: ACCENT }} />
            AVAILABLE FOR PRODUCT MANAGER ROLES
          </span>
        </div>

      </div>
    </footer>
  )
}
