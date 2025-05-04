"use client"

import { useCursor } from "../context/cursor-context" 
import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function CustomCursor() {
  const { position } = useCursor()
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)

  // Create refs for the GSAP instances to avoid recreating them
  const cursorTween = useRef<gsap.core.Tween | null>(null)
  const dotTween = useRef<gsap.core.Tween | null>(null)

  useEffect(() => {
    // Kill previous animations to prevent conflicts
    if (cursorTween.current) cursorTween.current.kill()
    if (dotTween.current) dotTween.current.kill()

    // More advanced GSAP animation with better smoothing
    cursorTween.current = gsap.to(cursorRef.current, {
      x: position.x,
      y: position.y,
      duration: 0.5, // Slower for more smoothness
      ease: "power2.out",
      overwrite: "auto", // Prevents animation conflicts
    })

    dotTween.current = gsap.to(cursorDotRef.current, {
      x: position.x,
      y: position.y,
      duration: 0.2, // Faster for the smaller dot to follow more closely
      ease: "power1.out",
      overwrite: "auto",
    })
  }, [position])

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor fixed pointer-events-none z-50 w-8 h-8 rounded-full border-2 border-orange-500 transform -translate-x-1/2 -translate-y-1/2"
        style={{ opacity: 0.5 }}
      />
      <div
        ref={cursorDotRef}
        className="custom-cursor fixed pointer-events-none z-50 w-2 h-2 bg-orange-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"
      />
    </>
  )
}
