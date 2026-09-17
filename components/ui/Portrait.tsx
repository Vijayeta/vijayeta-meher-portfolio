'use client'
import { useState } from 'react'
import Image from 'next/image'
import { PROFILE } from '@/lib/data'

function Initials() {
  return (
    <span style={{
      fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 800,
      color: 'rgba(255,255,255,.55)', letterSpacing: '-.02em',
    }}>
      {PROFILE.initials}
    </span>
  )
}

/**
 * Hero portrait.
 *
 * Uses next/image so the browser is served a WebP/AVIF sized to the frame
 * (180px desktop, 120px mobile) rather than the full source file.
 *
 * Falls back to the initials disc when `PROFILE.headshot` is unset or the file
 * is missing, so a bad path never renders as a broken-image icon.
 *
 * The frame is a circle with `overflow: hidden`, so the corners of a square
 * photo are clipped — which is why a corner watermark never shows here.
 */
export default function Portrait() {
  const [failed, setFailed] = useState(false)

  if (!PROFILE.headshot || failed) return <Initials />

  return (
    <Image
      src={PROFILE.headshot}
      alt={`${PROFILE.name}, Product Manager`}
      fill
      priority
      sizes="(max-width: 720px) 120px, 180px"
      onError={() => setFailed(true)}
      style={{ objectFit: 'cover', objectPosition: 'center top' }}
    />
  )
}
