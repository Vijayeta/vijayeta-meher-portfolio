import Image from 'next/image'

/**
 * The tinted band at the top of a project card.
 *
 * Renders the real cover through next/image when one exists, and a
 * diagonal-stripe placeholder with a mono caption when it doesn't — so cards
 * look intentional before any art is sourced.
 *
 * This used to be a CSS `background-image`, which bypassed the image optimizer
 * entirely and shipped the full-resolution file for a ~500x150 card. SVG covers
 * are passed through `unoptimized` — they're a few KB, scale losslessly, and
 * next/image otherwise refuses SVG without `dangerouslyAllowSVG`.
 */
export default function CoverBand({
  cover,
  label,
  height = 150,
}: {
  cover?: string
  label: string
  height?: number
}) {
  if (!cover) {
    return (
      <div
        style={{
          height, flex: 'none',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.06em',
          color: 'var(--accent)',
          background: 'repeating-linear-gradient(135deg,var(--accent-tint),var(--accent-tint) 10px,var(--accent-tint-border) 10px,var(--accent-tint-border) 20px)',
        }}
      >
        {label}
      </div>
    )
  }

  return (
    <div
      style={{
        height, flex: 'none', position: 'relative', overflow: 'hidden',
        borderBottom: '1px solid var(--card-border)',
        background: 'var(--accent-tint)',
      }}
    >
      <Image
        src={cover}
        alt=""
        fill
        unoptimized={cover.endsWith('.svg')}
        sizes="(max-width: 640px) 100vw, 520px"
        // anchor at the top so each shot shows its app header/nav — a centred
        // crop of a tall screenshot takes an unrecognisable middle slice
        style={{ objectFit: 'cover', objectPosition: 'top center' }}
      />
    </div>
  )
}
