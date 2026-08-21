'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import RevealSection from '@/components/ui/RevealSection'
import { CASES, fmt, type Case } from '@/lib/data'

const ACCENT = '#0c766a'

function CaseStudy({ c }: { c: Case }) {
  const ref = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let counted = false

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        el.classList.add('in')
        if (!counted) {
          counted = true
          const dur = 1500, t0 = performance.now()
          const tick = (now: number) => {
            const p = Math.min(1, (now - t0) / dur)
            setProgress(1 - Math.pow(1 - p, 3))
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
        io.disconnect()
      },
      { threshold: 0.12, rootMargin: '0px 0px -7% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <article
      ref={ref}
      data-reveal=""
      className="case-grid"
      style={{
        background: '#fff',
        display: 'grid', gridTemplateColumns: '2.6fr 5fr 3fr',
        gap: 36, padding: '40px 30px',
      }}
    >
      {/* Left: meta */}
      <div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: ACCENT }}>{c.idx}</div>
        <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: '-.02em', marginTop: 16, color: '#0f1417' }}>{c.company}</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#6b757d', marginTop: 10, letterSpacing: '.04em' }}>{c.sector}</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#99a1a7', marginTop: 6, letterSpacing: '.04em' }}>{c.role}</div>
      </div>

      {/* Centre: problem + approach */}
      <div>
        <h3 style={{ margin: '0 0 16px', fontSize: 21, fontWeight: 600, letterSpacing: '-.01em', lineHeight: 1.25, color: '#0f1417' }}>
          {c.title}
        </h3>
        <p style={{ margin: '0 0 22px', fontSize: 15, lineHeight: 1.6, color: '#4b5660' }}>{c.problem}</p>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
          {c.approach.map((b, i) => (
            <li key={i} style={{ display: 'flex', gap: 11, fontSize: 14, lineHeight: 1.5, color: '#2c343a' }}>
              <span style={{ color: ACCENT, fontFamily: 'var(--font-mono)', flexShrink: 0 }}>▲</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        {c.href && (
          <div style={{ marginTop: 22 }}>
            <Link href={c.href} style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.1em',
              color: ACCENT, textDecoration: 'none',
              borderBottom: '1px solid rgba(12,118,106,.3)', paddingBottom: 2,
            }}>
              READ FULL CASE STUDY →
            </Link>
          </div>
        )}
      </div>

      {/* Right: metrics */}
      <div style={{ borderLeft: '1px solid rgba(15,20,23,.1)', paddingLeft: 30 }}>
        <div style={{
          fontSize: 'clamp(40px,4.4vw,60px)', fontWeight: 600,
          letterSpacing: '-.03em', color: ACCENT, lineHeight: 1,
          fontVariantNumeric: 'tabular-nums',
        }}>
          {fmt(c.main.target, c.main.dec, c.main.prefix, c.main.suffix, progress)}
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#6b757d', marginTop: 10, letterSpacing: '.04em' }}>
          {c.mainLabel}
        </div>
        <div style={{ display: 'flex', gap: 28, marginTop: 30 }}>
          {c.sub.map((m, i) => (
            <div key={i}>
              <div style={{ fontSize: 22, fontWeight: 600, fontVariantNumeric: 'tabular-nums', color: '#0f1417' }}>
                {fmt(m.target, m.dec, m.prefix, m.suffix, progress)}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#6b757d', marginTop: 6, letterSpacing: '.04em' }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function Cases() {
  return (
    <section
      id="cases"
      data-section="cases"
      style={{ padding: '64px 0', borderBottom: '1px solid rgba(15,20,23,.08)' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>

        <RevealSection style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 18 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: ACCENT }}>03</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.16em', color: '#99a1a7' }}>AI LAB · CASE STUDIES</span>
        </RevealSection>

        <RevealSection style={{ margin: '0 0 32px' }}>
          <h2 style={{ margin: 0, fontSize: 'clamp(30px,4vw,52px)', fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.04, maxWidth: '18ch' }}>
            Three product problems, start to outcome.
          </h2>
        </RevealSection>

        <div style={{
          display: 'flex', flexDirection: 'column', gap: 1,
          background: 'rgba(15,20,23,.09)', border: '1px solid rgba(15,20,23,.09)',
        }}>
          {CASES.map(c => <CaseStudy key={c.idx} c={c} />)}
        </div>

      </div>
    </section>
  )
}
