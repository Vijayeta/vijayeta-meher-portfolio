import { PROFILE } from '@/lib/data'
import { SOCIAL_ICONS, type SocialIconKey } from '@/components/ui/Icons'

/** Footer links. Entries with an empty href are dropped, so unset profile
 *  fields simply don't render rather than pointing nowhere. */
const LINKS: {
  label: string
  href: string
  icon: SocialIconKey
  external?: boolean
  download?: boolean
}[] = [
  { label: 'LinkedIn', href: PROFILE.linkedin,  icon: 'linkedin', external: true },
  { label: 'GitHub',   href: PROFILE.github,    icon: 'github',   external: true },
  { label: 'Email',    href: PROFILE.email,     icon: 'mail' },
  { label: 'Résumé',   href: PROFILE.resumeUrl, icon: 'file', download: true },
]

export default function Contact() {
  return (
    <>
      <section id="contact" className="navy-band section" style={{ padding: '56px 0' }}>
        <div
          className="wrap"
          style={{
            maxWidth: 704,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', textAlign: 'center', gap: 16,
          }}
        >
          <h2 style={{
            margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(22px,3.4vw,28px)', lineHeight: 1.25, color: '#fff',
          }}>
            {PROFILE.ctaHeadline}
          </h2>

          <p style={{
            margin: 0, maxWidth: 480, fontSize: 15, lineHeight: 1.6,
            color: 'rgba(255,255,255,.6)',
          }}>
            {PROFILE.ctaBody}
          </p>

          <div style={{
            display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center',
            marginTop: 6,
          }}>
            <a href={PROFILE.email} className="btn" style={{ fontSize: 16, padding: '14px 30px' }}>
              Let&apos;s talk →
            </a>
            {PROFILE.linkedin && (
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-outline btn-ghost-light"
                style={{ fontSize: 16, padding: '14px 30px' }}
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </section>

      <footer
        className="wrap"
        style={{
          paddingBlock: 30,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 20,
        }}
      >
        <p style={{ margin: 0, fontSize: 14, color: 'var(--ink-faint)' }}>
          © {new Date().getFullYear()} {PROFILE.name}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {LINKS.filter(l => l.href).map(l => (
            <a
              key={l.label}
              href={l.href}
              {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              {...(l.download ? { download: true } : {})}
              className="footer-link"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 9,
                // 44px min tap target — these are the main outbound links
                minHeight: 44, padding: '10px 16px',
                fontSize: 16, fontWeight: 700,
                color: 'var(--accent)', textDecoration: 'none',
                border: '1px solid var(--accent-tint-border)',
                background: 'var(--accent-tint)',
                borderRadius: 999,
              }}
            >
              <span style={{ display: 'flex', lineHeight: 0 }}>{SOCIAL_ICONS[l.icon]}</span>
              {l.label}
            </a>
          ))}
        </div>
      </footer>
    </>
  )
}
