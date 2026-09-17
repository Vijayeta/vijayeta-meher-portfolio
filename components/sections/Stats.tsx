'use client'
import { useCountUpGroup } from '@/components/ui/useCountUpGroup'
import { HEROSTATS, fmt } from '@/lib/data'

export default function Stats() {
  const { ref, progress } = useCountUpGroup()

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="stats-grid"
      style={{ display: 'grid', gap: 20, marginTop: -88 }}
    >
      {HEROSTATS.map(s => (
        <div
          key={s.key}
          className="card"
          style={{ padding: '26px 22px', display: 'flex', flexDirection: 'column', gap: 6 }}
        >
          <div style={{
            fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 28,
            color: 'var(--accent)', fontVariantNumeric: 'tabular-nums', lineHeight: 1.1,
          }}>
            {fmt(s.target, s.dec, s.prefix, s.suffix, progress)}
          </div>
          <div style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.4 }}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  )
}
