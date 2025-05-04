"use client"
import React, { useEffect } from 'react'
import gsap from "gsap"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"
import Home from './pages/Home'

const page = () => {
  useEffect(() => {
    // Register GSAP plugins
    if (typeof window !== "undefined") {
      gsap.registerPlugin(DrawSVGPlugin)
    }
  }, [])
  return (
    <div className='relative'>
      <Home/>
    </div>
  )
}

export default page