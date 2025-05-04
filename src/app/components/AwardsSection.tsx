"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ArrowUpRight } from "lucide-react"

interface Award {
  id: string
  year: string
  logo: React.ReactNode
  title: string
  count: string
  hoverText: string
}

export default function AwardsSection() {
  useGSAP(() => {
    gsap.set(".award-row", { opacity: 1 })
  })

  const awards: Award[] = [
    {
      id: "award-1",
      year: "2014",
      logo: <InfinityLogo />,
      title: "Awards animation quality",
      count: "(02)",
      hoverText: "This Awards Provide from govt.bd",
    },
    {
      id: "award-2",
      year: "2016",
      logo: <WavyLogo />,
      title: "Site of the day",
      count: "(05)",
      hoverText: "This Awards Provide from govt.bd",
    },
    {
      id: "award-3",
      year: "2018",
      logo: <TripleLogo />,
      title: "Best Product Design",
      count: "(01)",
      hoverText: "This Awards Provide from govt.bd",
    },
    {
      id: "award-4",
      year: "2020",
      logo: <DiamondLogo />,
      title: "Best SEO of the Year",
      count: "(03)",
      hoverText: "This Awards Provide from govt.bd",
    },
  ]

  return (
    <motion.div 
      className="text-white py-20"
      style={{
        backgroundImage: "url('https://img.freepik.com/free-vector/grey-hexagons-black-background_78370-2098.jpg?t=st=1746376646~exp=1746380246~hmac=c71f8725d08c7fd51210c63da7ba1a3879fd7bc88e0142cbaf136e969d9417cd&w=1380')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <motion.h3
          className="text-2xl text-center text-orange-500 pb-6"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          . : our honorable achievement : .
        </motion.h3>
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Check Our Awards And
          <br />
          Achievement
        </motion.h1>

        <div className="border border-[#333] rounded-sm overflow-hidden bg-transparent">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            >
              <AwardRow award={award} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function AwardRow({ award }: { award: Award }) {
  const [isHovered, setIsHovered] = useState(false)

  useGSAP(() => {
    if (isHovered) {
      gsap.to(`#${award.id}`, {
        backgroundColor: "rgba(42, 42, 42, 0.7)",
        duration: 0.4,
        ease: "power2.inOut",
      })

      gsap.to(`#${award.id} .logo-container`, {
        color: "#ff5722",
        duration: 0.4,
        ease: "power2.inOut",
      })

      gsap.to(`#${award.id} .arrow-button`, {
        backgroundColor: "#ff5722",
        duration: 0.4,
        ease: "power2.inOut",
      })

      gsap.to(`#${award.id} .arrow-icon`, {
        color: "white",
        duration: 0.4,
        ease: "power2.inOut",
      })
    } else {
      gsap.to(`#${award.id}`, {
        backgroundColor: "transparent",
        duration: 0.4,
        ease: "power2.inOut",
      })

      gsap.to(`#${award.id} .logo-container`, {
        color: "white",
        duration: 0.4,
        ease: "power2.inOut",
      })

      gsap.to(`#${award.id} .arrow-button`, {
        backgroundColor: "#333",
        duration: 0.4,
        ease: "power2.inOut",
      })

      gsap.to(`#${award.id} .arrow-icon`, {
        color: "white",
        duration: 0.4,
        ease: "power2.inOut",
      })
    }
  }, [isHovered])

  return (
    <motion.div
      id={award.id}
      className="award-row grid grid-cols-4 border-b border-[#333] last:border-b-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="py-8 px-6 border-r border-[#333] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {isHovered ? (
            <motion.div
              key="hover"
              className="text-xl font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {award.hoverText.split(" ")[0]}
            </motion.div>
          ) : (
            <motion.div
              key="normal"
              className="text-xl font-medium"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {award.year}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="py-8 px-6 border-r border-[#333] flex items-center justify-center">
        <div className="logo-container text-white text-4xl">{award.logo}</div>
      </div>

      <div className="py-8 px-6 border-r border-[#333] flex items-center">
        <AnimatePresence mode="wait">
          {isHovered ? (
            <motion.div
              key="hover"
              className="text-lg font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {award.hoverText.split(" ").slice(1).join(" ")}
            </motion.div>
          ) : (
            <motion.div
              key="normal"
              className="text-lg font-medium"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {award.title}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="py-8 px-6 flex items-center justify-between">
        <span className="text-lg font-medium">{award.count}</span>
        <div className="arrow-button w-12 h-12 rounded-full bg-[#333] flex items-center justify-center">
          <ArrowUpRight className="arrow-icon w-5 h-5 text-white" />
        </div>
      </div>
    </motion.div>
  )
}

// Custom SVG logos
function InfinityLogo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M30 15C26.7 15 24.3 17.4 20 21.7C15.7 17.4 13.3 15 10 15C5.6 15 2 18.6 2 23C2 27.4 5.6 31 10 31C13.3 31 15.7 28.6 20 24.3C24.3 28.6 26.7 31 30 31C34.4 31 38 27.4 38 23C38 18.6 34.4 15 30 15ZM10 27C7.8 27 6 25.2 6 23C6 20.8 7.8 19 10 19C11.5 19 13.1 20.4 16 23.3C13.1 26.2 11.5 27 10 27ZM30 27C28.5 27 26.9 25.6 24 22.7C26.9 19.8 28.5 19 30 19C32.2 19 34 20.8 34 23C34 25.2 32.2 27 30 27Z"
        fill="currentColor"
      />
    </svg>
  )
}

function WavyLogo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M35 15.5C32.5 15.5 31.25 17 30 18.5C28.75 20 27.5 21.5 25 21.5C22.5 21.5 21.25 20 20 18.5C18.75 17 17.5 15.5 15 15.5C12.5 15.5 11.25 17 10 18.5C8.75 20 7.5 21.5 5 21.5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35 24.5C32.5 24.5 31.25 26 30 27.5C28.75 29 27.5 30.5 25 30.5C22.5 30.5 21.25 29 20 27.5C18.75 26 17.5 24.5 15 24.5C12.5 24.5 11.25 26 10 27.5C8.75 29 7.5 30.5 5 30.5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function TripleLogo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 5V35M10 10V30M30 10V30" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

function DiamondLogo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 5L5 20L20 35L35 20L20 5Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 20L20 12.5L35 20L20 27.5L5 20Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}