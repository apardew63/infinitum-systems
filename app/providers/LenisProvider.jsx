'use client'

import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'

export default function LenisProvider({ children }) {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    lenisRef.current = lenis

    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
