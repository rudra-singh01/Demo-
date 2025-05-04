"use client"

import { useCursor } from "../context/cursor-context"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import Image from "next/image"
// import { Twitter, Instagram, Facebook } from "lucide-react"

export default function HeroSection() {
  const { setIsHovering } = useCursor()
  const heroRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const circleRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<HTMLDivElement>(null)
  const socialRefs = useRef<(HTMLDivElement | null)[]>([])
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // GSAP animations
    const tl = gsap.timeline()

    tl.from(circleRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
      delay: 0.2,
    })

    tl.from(
      textRef.current?.children || [],
      {
        scale: 0,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4"
    )

    tl.from(
      frameRef.current,
      {
        scale: 0.9,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.3"
    )

    tl.from(socialRefs.current, {
      scale: 0,
      opacity: 0,
      stagger: 0.1,
      duration: 0.4,
      ease: "back.out(1.7)",
    })

    tl.from(
      imageRef.current,
      {
        scale: 0.9,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.3"
    )

    // Background diagonal lines animation
    const diagonals = document.querySelectorAll(".diagonal-line")
    gsap.from(diagonals, {
      drawSVG: "0%",
      stagger: 0.05,
      duration: 0.8,
      ease: "power2.inOut",
    })
  }, [])
  const handleMouseEnter = () => setIsHovering(true)
  const handleMouseLeave = () => setIsHovering(false)

  return (
    <div
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden "
      style={{
        backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661284828052-ea25d6ea94cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Add overlay to improve text readability */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Orange circle */}
      <motion.div
        ref={circleRef}
        className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-300 to-orange-500"
        animate={{
          y: [0, -10, 0],
          boxShadow: [
            "0 0 20px rgba(255, 165, 0, 0.5)",
            "0 0 30px rgba(255, 165, 0, 0.7)",
            "0 0 20px rgba(255, 165, 0, 0.5)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="absolute -right-1 -top-1 w-4 h-4 rounded-full bg-orange-600"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <div className="flex items-center justify-center h-full w-full px-8 relative z-20">
        {/* Image Div */}
        <div
          ref={imageRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="w-[400px] h-[400px] rounded-full rounded-br-full overflow-hidden border-4 border-white/30 shadow-lg"
        >
          <Image

            src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Office scene"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="z-50 flex-1 max-w-2xl ml-12">
          <div className="flex flex-col">
            {/* Main content */}
            <div
              ref={textRef}
              className="text-white text-right z-20 bg-opacity-90 py-4 px-6 bg-auto"
            >
              <motion.p
                className="text-lg mb-2"
                whileHover={{ scale: 1.05 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Welcome Digital Agency
              </motion.p>

              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-6"
                whileHover={{ scale: 1.02 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span className="block">Creative</span>
                <span className="block">Development Agency</span>
              </motion.h1>

              <motion.p
                className="text-lg mb-8 max-w-xl ml-auto"
                whileHover={{ scale: 1.05 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                From traditional PR and thought leadership campaigns to storytelling and creative social media management {"we've"} got you covered.
              </motion.p>

              <motion.button
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Order Now
              </motion.button>
            </div>

            {/* Frame */}
            {/* <div ref={frameRef} className="absolute right-[10vw] bottom-8 w-64 h-[500px] border-2 border-white/30 z-10">
          </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}