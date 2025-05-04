"use client"

import { useCursor } from "../context/cursor-context"
import { motion } from "framer-motion"
import { Twitter, Instagram, Facebook } from "lucide-react"
import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function SocialSidebar() {
  const { setIsHovering } = useCursor()
  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animate sidebar on load
    gsap.from(sidebarRef.current?.children || [], {
      x: -50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
      delay: 1.2,
    })
  }, [])

  const handleMouseEnter = () => setIsHovering(true)
  const handleMouseLeave = () => setIsHovering(false)

  return (
    <div ref={sidebarRef} className="fixed left-8 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center space-y-12">
      <div className="flex flex-col items-center">
        <div className="text-orange-500 font-bold">01</div>
        <div className="w-0.5 h-16 bg-gray-300 my-2"></div>
        <motion.div
          className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white"
          whileHover={{ scale: 1.2, backgroundColor: "#ff4500" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Twitter size={18} />
        </motion.div>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-0.5 h-16 bg-gray-300 my-2"></div>
        <motion.div
          className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white"
          whileHover={{ scale: 1.2, backgroundColor: "#e1306c" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Instagram size={18} />
        </motion.div>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-0.5 h-16 bg-gray-300 my-2"></div>
        <div className="text-orange-500 font-bold">07</div>
        <div className="w-0.5 h-16 bg-gray-300 my-2"></div>
        <motion.div
          className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white"
          whileHover={{ scale: 1.2, backgroundColor: "#1877f2" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Facebook size={18} />
        </motion.div>
      </div>
    </div>
  )
}
