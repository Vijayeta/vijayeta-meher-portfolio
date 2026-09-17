import type { CSSProperties, ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PROFILE } from '@/lib/data'

/* ──────────────────────────────────────────────────────────
   Shared building blocks for the four long-form case study
   pages. Previously each page declared its own near-identical
   copies of these (SL / H2 / THead / W / S) plus its own
   responsive namespace (es- / ec- / nc-).
   ────────────────────────────────────────────────────────── */

export const mono = 'var(--font-mono)'

/** Numbered section label — "01 / THE PROBLEM" */
export function SL({ n, label }: { n: string; label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 14 }}>
      <span style={{ fontFamily: mono, fontSize: 12, fontWeight: 600, color: 'var(--accent)' }}>{n}</span>
      <span style={{
        fontFamily: mono, fontSize: 11, fontWeight: 600, letterSpacing: '.1em',
        textTransform: 'uppercase', color: 'var(--ink-faint)',
      }}>
        {label}
      </span>
    </div>
  )
}

export function H2({
  children,
  maxW = '28ch',
  mb = 24,
}: {
  children: ReactNode
  maxW?: string
  mb?: number
}) {
  return (
    <h2 style={{
      margin: `0 0 ${mb}px`,
      fontFamily: 'var(--font-display)', fontWeight: 800,
      fontSize: 'clamp(21px,2.6vw,27px)', lineHeight: 1.25,
      letterSpacing: '-.015em', color: 'var(--ink)', maxWidth: maxW,
    }}>
      {children}
    </h2>
  )
}

export function H3({ children, mb = 12 }: { children: ReactNode; mb?: number }) {
  return (
    <h3 style={{
      margin: `0 0 ${mb}px`,
      fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17,
      color: 'var(--ink)',
    }}>
      {children}
    </h3>
  )
}

export function Lede({ children, maxW = '70ch' }: { children: ReactNode; maxW?: string }) {
  return (
    <p style={{ margin: '0 0 22px', fontSize: 16, lineHeight: 1.7, color: 'var(--ink-soft)', maxWidth: maxW }}>
      {children}
    </p>
  )
}

/** One numbered section, rendered as a white panel on the page ground. */
export function CaseSection({
  id,
  n,
  label,
  children,
}: {
  id?: string
  n: string
  label: string
  children: ReactNode
}) {
  return (
    <section
      id={id}
      className="panel"
      style={{ padding: '34px 36px', scrollMarginTop: 'calc(var(--nav-h) + 24px)' }}
    >
      <SL n={n} label={label} />
      {children}
    </section>
  )
}

/* ── Chips & bullets ─────────────────────────────────────── */

export function Chips({ items, warm = false }: { items: string[]; warm?: boolean }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {items.map(t => (
        <span key={t} className={warm ? 'chip chip-warm' : 'chip'}>{t}</span>
      ))}
    </div>
  )
}

export function Bullets({ items, mark = '▸' }: { items: string[]; mark?: string }) {
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
      {items.map((b, i) => (
        <li key={i} style={{ display: 'flex', gap: 10, fontSize: 15, lineHeight: 1.6, color: 'var(--ink-soft)' }}>
          <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 1 }} aria-hidden="true">{mark}</span>
          <span>{b}</span>
        </li>
      ))}
    </ul>
  )
}

/* ── Tables ──────────────────────────────────────────────── */

/**
 * Bordered data table built on CSS grid. `rows` cells are ReactNodes, so a
 * cell can carry its own emphasis; `colStyles` applies per-column defaults.
 */
export function DataTable({
  cols,
  widths,
  rows,
  colStyles,
  wide = false,
}: {
  cols: string[]
  widths: string
  rows: ReactNode[][]
  colStyles?: (CSSProperties | undefined)[]
  wide?: boolean
}) {
  const grid: CSSProperties = { display: 'grid', gridTemplateColumns: widths, gap: 20 }

  return (
    <div className="cs-table-scroll">
      <div
        className={wide ? 'cs-table-wide' : 'cs-table'}
        style={{
          border: '1px solid var(--card-border)',
          borderRadius: 'var(--radius-tile)',
          overflow: 'hidden',
        }}
      >
        <div style={{
          ...grid,
          padding: '12px 18px',
          background: '#fafbfc',
          borderBottom: '1px solid var(--card-border)',
          fontFamily: mono, fontSize: 10, fontWeight: 600,
          letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--ink-faint)',
        }}>
          {cols.map(c => <span key={c}>{c}</span>)}
        </div>

        {rows.map((cells, i) => (
          <div
            key={i}
            style={{
              ...grid,
              padding: '16px 18px',
              alignItems: 'start',
              borderBottom: i < rows.length - 1 ? '1px solid var(--card-border)' : undefined,
              fontSize: 14, lineHeight: 1.55, color: 'var(--ink-soft)',
            }}
          >
            {cells.map((cell, j) => (
              <span key={j} style={colStyles?.[j]}>{cell}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

/** Small numbered/keyed card used in 2-, 3- and 4-up grids. */
export function KeyCard({
  k,
  t,
  d,
}: {
  k?: string
  t: string
  d: ReactNode
}) {
  return (
    <div style={{
      border: '1px solid var(--card-border)',
      borderRadius: 'var(--radius-tile)',
      padding: '20px 18px',
      display: 'flex', flexDirection: 'column', gap: 8,
      height: '100%',
    }}>
      {k && (
        <span style={{ fontFamily: mono, fontSize: 11, fontWeight: 600, color: 'var(--accent)' }}>{k}</span>
      )}
      <span style={{
        fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16,
        color: 'var(--ink)', lineHeight: 1.3,
      }}>
        {t}
      </span>
      <span style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-soft)' }}>{d}</span>
    </div>
  )
}

/**
 * Horizontal pipeline of chips joined by arrows. A node whose `accent` flag is
 * set is tinted — used to mark the model call in a data flow.
 */
export function Flow({
  label,
  nodes,
  caption,
}: {
  label?: string
  nodes: { text: string; accent?: boolean }[]
  caption?: string
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {label && (
        <span style={{
          fontFamily: mono, fontSize: 11, fontWeight: 600, letterSpacing: '.1em',
          textTransform: 'uppercase', color: 'var(--accent)',
        }}>
          {label}
        </span>
      )}

      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8 }}>
        {nodes.map((n, i) => (
          <span key={n.text} style={{ display: 'contents' }}>
            {i > 0 && <span style={{ color: 'var(--ink-faint)' }} aria-hidden="true">→</span>}
            <span
              className={n.accent ? 'chip' : 'chip chip-plain'}
              style={{ padding: '7px 12px', fontSize: 12 }}
            >
              {n.text}
            </span>
          </span>
        ))}
      </div>

      {caption && (
        <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: 'var(--ink-soft)', maxWidth: '72ch' }}>
          {caption}
        </p>
      )}
    </div>
  )
}

/** Big number + label, for metric strips. */
export function Metric({
  value,
  label,
  accent = false,
  strike = false,
  size = 'clamp(26px,3vw,38px)',
}: {
  value: string
  label: string
  accent?: boolean
  strike?: boolean
  size?: string
}) {
  return (
    <div>
      <div style={{
        fontFamily: mono, fontWeight: 600, fontSize: size, lineHeight: 1,
        letterSpacing: '-.02em',
        color: accent ? 'var(--accent)' : strike ? 'var(--ink-faint)' : 'var(--ink)',
        textDecoration: strike ? 'line-through' : undefined,
        fontVariantNumeric: 'tabular-nums',
      }}>
        {value}
      </div>
      <div style={{ fontSize: 12, color: 'var(--ink-faint)', marginTop: 8 }}>{label}</div>
    </div>
  )
}

/** Tinted callout box. */
export function Callout({
  label,
  children,
  warm = false,
}: {
  label?: string
  children: ReactNode
  warm?: boolean
}) {
  return (
    <div style={{
      background: warm ? 'var(--warm-tint)' : 'var(--accent-tint)',
      border: `1px solid ${warm ? 'var(--warm-border)' : 'var(--accent-tint-border)'}`,
      borderRadius: 'var(--radius-tile)',
      padding: '20px 22px',
      display: 'flex', flexDirection: 'column', gap: 8,
    }}>
      {label && (
        <span style={{
          fontFamily: mono, fontSize: 11, fontWeight: 600, letterSpacing: '.08em',
          textTransform: 'uppercase', color: warm ? 'var(--warm)' : 'var(--accent)',
        }}>
          {label}
        </span>
      )}
      <span style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--ink)' }}>{children}</span>
    </div>
  )
}

/* ── Page chrome ─────────────────────────────────────────── */

export function CaseNav({ label }: { label: string }) {
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(20,28,44,.92)',
      backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
    }}>
      <div
        className="wrap-wide"
        style={{
          height: 'var(--nav-h)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
        }}
      >
        <Link
          href="/"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            color: '#fff', textDecoration: 'none', fontSize: 14, fontWeight: 600,
          }}
        >
          ← Back to portfolio
        </Link>
        <span
          className="cs-hide-sm"
          style={{
            fontFamily: mono, fontSize: 11, fontWeight: 600, letterSpacing: '.1em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,.55)',
          }}
        >
          {label}
        </span>
      </div>
    </nav>
  )
}

export function CaseHeader({
  eyebrow,
  title,
  subtitle,
  lede,
  tags,
  callout,
  links,
}: {
  eyebrow: string
  title: string
  subtitle?: string
  lede?: string
  tags?: string[]
  callout?: { label: string; text: string }
  links?: ReactNode
}) {
  return (
    <header className="navy-band" style={{ padding: '56px 0 96px' }}>
      <div className="wrap-wide" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <p className="eyebrow" style={{ fontSize: 13 }}>{eyebrow}</p>

        <h1 style={{
          margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 'clamp(28px,4.6vw,44px)', lineHeight: 1.12,
          letterSpacing: '-.02em', color: '#fff', maxWidth: '20ch',
        }}>
          {title}
        </h1>

        {subtitle && (
          <p style={{
            margin: 0, fontSize: 18, fontWeight: 600, lineHeight: 1.45,
            color: 'rgba(255,255,255,.82)', maxWidth: '46ch',
          }}>
            {subtitle}
          </p>
        )}

        {lede && (
          <p style={{
            margin: 0, fontSize: 16, lineHeight: 1.7,
            color: 'rgba(255,255,255,.62)', maxWidth: '72ch',
          }}>
            {lede}
          </p>
        )}

        {tags && tags.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 2 }}>
            {tags.map(t => (
              <span
                key={t}
                style={{
                  fontFamily: mono, fontSize: 11, fontWeight: 600, letterSpacing: '.04em',
                  color: 'rgba(255,255,255,.75)',
                  background: 'rgba(255,255,255,.08)',
                  border: '1px solid rgba(255,255,255,.18)',
                  padding: '4px 10px', borderRadius: 'var(--radius-chip)',
                }}
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {callout && (
          <div style={{
            marginTop: 6,
            background: 'rgba(95,179,166,.1)',
            border: '1px solid rgba(95,179,166,.3)',
            borderRadius: 'var(--radius-tile)',
            padding: '18px 22px', maxWidth: '78ch',
            display: 'flex', flexDirection: 'column', gap: 8,
          }}>
            <span style={{
              fontFamily: mono, fontSize: 11, fontWeight: 600, letterSpacing: '.1em',
              textTransform: 'uppercase', color: 'var(--accent-light)',
            }}>
              {callout.label}
            </span>
            <span style={{ fontSize: 15, lineHeight: 1.65, color: 'rgba(255,255,255,.88)' }}>
              {callout.text}
            </span>
          </div>
        )}

        {links && (
          <div className="cs-links" style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center', marginTop: 8 }}>
            {links}
          </div>
        )}
      </div>
    </header>
  )
}

/**
 * Full-width product shot. `src` is an SVG recreation of the shipped interface
 * rather than a raw screenshot — it stays crisp at any width and keeps internal
 * hostnames and customer data off a public page.
 */
export function ProductShot({
  src,
  alt,
  caption,
  width,
  height,
}: {
  src: string
  alt: string
  caption: string
  /** Intrinsic size of the asset — reserves space so the panel doesn't reflow. */
  width: number
  height: number
}) {
  return (
    <figure className="panel" style={{ margin: 0, padding: 16, overflow: 'hidden' }}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        unoptimized={src.endsWith('.svg')}
        sizes="(max-width: 640px) 100vw, 1064px"
        style={{
          width: '100%', height: 'auto', display: 'block',
          borderRadius: 'var(--radius-chip)',
        }}
      />
      <figcaption style={{
        marginTop: 14, fontFamily: mono, fontSize: 12.5, lineHeight: 1.6,
        color: 'var(--ink-faint)',
      }}>
        {caption}
      </figcaption>
    </figure>
  )
}

/** "At a glance" key/value card, pulled up over the header band. */
export function GlanceCard({
  rows,
  labelWidth = '200px',
}: {
  rows: { k: string; v: ReactNode }[]
  labelWidth?: string
}) {
  return (
    <div className="panel" style={{ padding: '26px 30px', marginTop: -64 }}>
      <p className="eyebrow" style={{ marginBottom: 16 }}>At a glance</p>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {rows.map((r, i) => (
          <div
            key={r.k}
            className="cs-glance"
            style={{
              display: 'grid', gridTemplateColumns: `${labelWidth} 1fr`, gap: 20,
              padding: '12px 0',
              borderBottom: i < rows.length - 1 ? '1px solid var(--card-border)' : undefined,
              alignItems: 'start',
            }}
          >
            <span style={{
              fontFamily: mono, fontSize: 11, fontWeight: 600, letterSpacing: '.06em',
              textTransform: 'uppercase', color: 'var(--ink-faint)', paddingTop: 2,
            }}>
              {r.k}
            </span>
            <span style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink)' }}>{r.v}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function CaseCTA({
  headline = 'Want the thinking behind another one of these?',
  body = 'Happy to walk through the decisions, the tradeoffs, and the parts that did not work.',
}: {
  headline?: string
  body?: string
}) {
  return (
    <section className="navy-band" style={{ padding: '64px 0' }}>
      <div
        className="wrap-wide"
        style={{
          maxWidth: 704,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', textAlign: 'center', gap: 14,
        }}
      >
        <h2 style={{
          margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 'clamp(21px,3.2vw,26px)', lineHeight: 1.25, color: '#fff',
        }}>
          {headline}
        </h2>
        <p style={{ margin: 0, maxWidth: 460, fontSize: 15, lineHeight: 1.65, color: 'rgba(255,255,255,.6)' }}>
          {body}
        </p>
        <div className="cs-links" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center', marginTop: 8 }}>
          <a href={PROFILE.email} className="btn" style={{ fontSize: 16, padding: '14px 30px' }}>
            Let&apos;s talk →
          </a>
          <Link href="/" className="btn-outline btn-ghost-light" style={{ fontSize: 16, padding: '14px 30px' }}>
            Back to portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}

/** Standard page shell: the stack of section panels between header and CTA. */
export function CaseMain({ children }: { children: ReactNode }) {
  return (
    <main
      className="wrap-wide"
      style={{ padding: '0 32px 64px', display: 'flex', flexDirection: 'column', gap: 24 }}
    >
      {children}
    </main>
  )
}
