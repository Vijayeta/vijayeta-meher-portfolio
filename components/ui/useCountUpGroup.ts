'use client'
import { useEffect, useRef, useState } from 'react'

export function useCountUpGroup() {
  const [progress, setProgress] = useState(0)
  const ref = useRef<HTMLElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        io.disconnect()

        const dur = 1500
        const t0 = performance.now()
        const tick = (now: number) => {
          const p = Math.min(1, (now - t0) / dur)
          const ease = 1 - Math.pow(1 - p, 3)
          setProgress(ease)
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.3 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return { ref, progress }
}
