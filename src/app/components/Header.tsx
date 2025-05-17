"use client"

import { useCursor } from "../context/cursor-context" 
import { motion } from "framer-motion"
import Link from "next/link"
import { Phone, Mail, Clock, Facebook, Twitter, Youtube, Search, Grid3X3, ShoppingCart } from "lucide-react"
import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function Header() {
  const { setIsHovering } = useCursor()
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Animate header on load
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
  }, [])

  const handleMouseEnter = () => setIsHovering(true)
  const handleMouseLeave = () => setIsHovering(false)

  return (
    <header ref={headerRef} className="w-full relative z-40">
      {/* Top bar */}
      <div className="bg-black/80 text-white py-2">
        <div className="container mx-auto flex justify-between relative items-center px-4">
          <div className="flex space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={16} className="text-orange-500" />
              <span className="text-sm">1-800-555-1234</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} className="text-orange-500" />
              <span className="text-sm">info@example.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={16} className="text-orange-500" />
              <span className="text-sm">Open Hours 09:00 am - 06:00 pm</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Facebook size={18} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Twitter size={18} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Youtube size={18} />
            </motion.a>
            <div className="relative">
              <ShoppingCart size={18} />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                9
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="sticky top-0 left-0 right-0 bg-[#f2f0f01a] backdrop-blur-sm py-4 border-b">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              className="text-2xl font-bold"
              whileHover={{ scale: 1.05 }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className="text-orange-500">t</span>ors
              <div className="text-xs uppercase tracking-wider">Digital Agency</div>
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {["home", "pages", "project", "shop", "blog", "contact Us"].map((item) => (
              <motion.a
                key={item}
                href={item}
                className="relative font-medium"
                whileHover={{ scale: 1.05 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {item}
                {item === "Home" && (
                  <motion.span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500" layoutId="underline" />
                )}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <motion.button whileHover={{ scale: 1.1 }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Search size={20} />
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Grid3X3 size={20} />
            </motion.button>
          </div>
        </div>
      </nav>
    </header>
  )
}
