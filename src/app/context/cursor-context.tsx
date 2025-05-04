"use client"

import type React from "react"
import { createContext, useState, useEffect, useContext } from "react"

type CursorContextType = {
  position: { x: number; y: number }
  isHovering: boolean
  setIsHovering: (isHovering: boolean) => void
}

const CursorContext = createContext<CursorContextType>({
  position: { x: 0, y: 0 },
  isHovering: false,
  setIsHovering: () => {},
})

export const useCursor = () => useContext(CursorContext)

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    // Throttle function to limit update frequency
    let lastUpdate = 0
    const throttleAmount = 5 // ms between updates

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now()
      if (now - lastUpdate > throttleAmount) {
        setPosition({ x: e.clientX, y: e.clientY })
        lastUpdate = now
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return <CursorContext.Provider value={{ position, isHovering, setIsHovering }}>{children}</CursorContext.Provider>
}
