'use client'
import { useEffect, useRef, useState } from 'react'
import { PROFILE } from '@/lib/data'

const NAV_ITEMS = [
  { id: 'about',      label: 'About' },
  { id: 'work',       label: 'Work' },
  { id: 'ai-lab',     label: 'AI Lab' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills',     label: 'Skills' },
  // { id: 'writing',    label: 'Writing' },   // hidden with the Writing section
]

export default function Nav() {
  const barRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState('about')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const sectionEls = NAV_ITEMS
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    const onScroll = () => {
      const sc = window.scrollY
      const h = document.documentElement.scrollHeight - window.innerHeight || 1
      const p = Math.min(1, Math.max(0, sc / h))
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`

      let act = 'about'
      sectionEls.forEach(s => { if (s.getBoundingClientRect().top <= 140) act = s.id })
      setActive(act)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <nav
      style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(20,28,44,.92)',
        backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
      }}
    >
      <div
        className="wrap"
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 16, height: 'var(--nav-h)',
        }}
      >
        <a
          href="#about"
          style={{
            display: 'flex', alignItems: 'center', gap: 10,
            textDecoration: 'none', color: '#fff', whiteSpace: 'nowrap',
          }}
        >
          <span style={{
            width: 8, height: 8, borderRadius: '50%',
            background: 'var(--accent-light)', flexShrink: 0,
          }} />
          <span style={{
            fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 15,
            letterSpacing: '-.01em',
          }}>
            {PROFILE.name}
          </span>
        </a>

        <div
          className="nav-links"
          style={{ display: 'flex', alignItems: 'center', gap: 24, fontSize: 14, fontWeight: 600 }}
        >
          {NAV_ITEMS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              style={{
                textDecoration: 'none',
                color: active === id ? '#fff' : 'rgba(255,255,255,.66)',
                whiteSpace: 'nowrap',
              }}
            >
              {label}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <a
            href="#contact"
            className="btn"
            style={{ fontSize: 14, padding: '9px 18px', flex: 'none' }}
          >
            Let&apos;s talk
          </a>

          <button
            className="nav-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
            style={{
              width: 38, height: 38, borderRadius: 8, flex: 'none',
              alignItems: 'center', justifyContent: 'center',
              background: 'rgba(255,255,255,.08)',
              border: '1px solid rgba(255,255,255,.18)',
              color: '#fff', cursor: 'pointer', padding: 0,
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" width={18} height={18} aria-hidden="true">
              {open
                ? <><path d="M6 6l12 12" /><path d="M18 6L6 18" /></>
                : <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div
          className="nav-mobile-panel"
          style={{
            borderTop: '1px solid rgba(255,255,255,.12)',
            padding: '8px 0 14px',
          }}
        >
          <div className="wrap" style={{ display: 'flex', flexDirection: 'column' }}>
            {NAV_ITEMS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                style={{
                  textDecoration: 'none', fontSize: 16, fontWeight: 600,
                  color: active === id ? '#fff' : 'rgba(255,255,255,.7)',
                  padding: '12px 4px',
                  borderBottom: '1px solid rgba(255,255,255,.07)',
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}

      <div
        ref={barRef}
        style={{
          position: 'absolute', left: 0, bottom: 0, height: 2, width: '100%',
          background: 'var(--accent-light)',
          transform: 'scaleX(0)', transformOrigin: 'left', willChange: 'transform',
        }}
      />
    </nav>
  )
}
