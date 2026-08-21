'use client'
import { useEffect, useRef, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
}

export default function RevealSection({ children, className, style }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in')
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -7% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} data-reveal="" className={className} style={style}>
      {children}
    </div>
  )
}
