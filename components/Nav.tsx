'use client'
import { useEffect, useRef, useState } from 'react'

const ACCENT = '#0c766a'
const MUTED  = '#6b757d'

const NAV_ITEMS = [
  { id: 'about',   label: '01 ABOUT' },
  { id: 'work',    label: '02 WORK' },
  { id: 'cases',   label: '03 AI LAB' },
  { id: 'writing', label: '04 WRITING' },
]

export default function Nav() {
  const barRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const sectionEls = ['home', 'about', 'work', 'cases', 'writing']
      .map(id => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    const onScroll = () => {
      const sc = window.scrollY
      const h  = document.documentElement.scrollHeight - window.innerHeight || 1
      const p  = Math.min(1, Math.max(0, sc / h))
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`

      let act = 'home'
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
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      height: 64, display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', padding: '0 40px',
      background: 'rgba(255,255,255,.82)',
      backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
      borderBottom: '1px solid rgba(15,20,23,.08)',
    }}>
      <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: '#0f1417' }}>
        <span style={{ width: 8, height: 8, background: ACCENT, borderRadius: '50%', flexShrink: 0 }} />
        <span style={{ fontWeight: 600, letterSpacing: '.06em', fontSize: 14 }}>VIJAYETA MEHER</span>
      </a>

      <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
        {NAV_ITEMS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className="nav-link"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11, letterSpacing: '.08em',
              textDecoration: 'none',
              color: active === id ? ACCENT : MUTED,
              transition: 'color .25s',
            }}
          >
            {label}
          </a>
        ))}
      </div>

      <a
        href="#contact"
        className="hover-btn-primary"
        style={{
          fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.06em',
          textDecoration: 'none', color: '#fff', background: ACCENT,
          padding: '9px 16px', fontWeight: 500, transition: 'background .2s',
          whiteSpace: 'nowrap',
        }}
      >
        GET IN TOUCH →
      </a>

      <div
        ref={barRef}
        style={{
          position: 'absolute', left: 0, bottom: -1, height: 2,
          width: '100%', background: ACCENT,
          transform: 'scaleX(0)', transformOrigin: 'left', willChange: 'transform',
        }}
      />
    </nav>
  )
}
