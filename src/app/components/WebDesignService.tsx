"use client"

import { ArrowDownRight } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

const WebDesignService = () => {
  const services = [
    {
      id: "01",
      title: "SEO Marketing",
      description:
        "Grow brands through bold and strategic creative, focused on searching new ways to showcase user content on digital support. The Challenge Temporibus autem quibusdam et...",
      hasImage: true,
      imageSrc: "https://img.freepik.com/free-photo/seo-concept-with-magnifying-glass_23-2147784536.jpg",
    },
    {
      id: "02", 
      title: "Digital Marketing",
      description:
        "Grow brands through bold Crowley and strategic creative, focused on searching new ways to showcase user content on digital support. The Challenge Temporibus autem quibusdam et...",
      hasImage: true,
      imageSrc: "https://img.freepik.com/free-photo/digital-marketing-with-icons-laptop_23-2147666640.jpg",
    },
    {
      id: "03",
      title: "Content Marketing", 
      description:
        "Grow brands through bold and strategic creative, focused on searching new ways to showcase user content on digital support. The Challenge Temporibus autem quibusdam et...",
      hasImage: true,
      imageSrc: "https://img.freepik.com/free-photo/content-marketing-concept_23-2148281234.jpg",
    },
    {
      id: "04",
      title: "Social Marketing",
      description:
        "The Challenge Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum...",
      hasImage: true,
      imageSrc: "https://img.freepik.com/free-photo/social-media-concept_23-2147848133.jpg",
    },
  ]

  return (
    <div className="relative w-full py-16 px-4 md:px-8 lg:px-16 overflow-hidden bg-white">
      {/* Background pattern */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("https://img.freepik.com/premium-vector/background-geometry-abstract-line-circle_204950-356.jpg?w=740")`,
          backgroundSize: "400px",
          backgroundRepeat: "repeat",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1, ease: "easeOut" }}
      ></motion.div>

      {/* Header */}
      <motion.div
        className="text-center mb-12 relative z-10"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h3
          className="text-orange-500 font-medium mb-4"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          .: TRUSTED WEB DESIGN SERVICE :.
        </motion.h3>
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 max-w-4xl mx-auto"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Modern And Intuitive
          <br />
          Web Solution
        </motion.h1>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
          >
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Service Card Component
const ServiceCard = ({ service }) => {
  const imageRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const image = imageRef.current
    gsap.set(image, { opacity: 0, scale: 0.8, rotate: -12 })

    return () => {
      gsap.killTweensOf(image)
    }
  }, [])

  const handleHoverStart = () => {
    setIsHovered(true)
    gsap.to(imageRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "power3.out",
    })
  }

  const handleHoverEnd = () => {
    setIsHovered(false)
    gsap.to(imageRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      ease: "power3.in",
    })
  }

  return (
    <motion.div
      className="bg-transparent rounded-lg p-8 relative overflow-hidden border-b-2 border-[#6666] transition-shadow duration-300"
      whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      {/* Image section */}
      {service.hasImage && (
        <div
          ref={imageRef}
          className="absolute top-8 left-[50%] bg-amber-500 w-[10vw] h-[10vh] rounded-md overflow-hidden"
        >
         <img src={service.imageSrc}
            alt={service.title} className="w-full h-full object-cover" />
        </div>
      )}

      {/* Service number */}
      <span className={`text-gray-200 text-5xl font-bold absolute top-6 left-8 ${isHovered ? "text-orange-500" : "text-gray-300 "} transition-all   `}>{service.id}</span>

      {/* Service content */}
      <div className={`relative ${service.hasImage ? "flex gap-6" : ""}`}>
        {service.hasImage && (
          <div className="w-40 h-40 relative rounded-md overflow-hidden flex-shrink-0"></div>
        )}
        <div>
          <h2 
            className={`text-2xl font-bold mt-8 mb-4 transition-colors duration-300 ${
              isHovered ? "text-orange-500" : "text-gray-900"
            }`}
          >
            <span className="text-orange-500 mr-2">{service.hasImage ? "" : service.id}</span>
            {service.title}
          </h2>
          <p className="text-gray-600 leading-relaxed">{service.description}</p>
        </div>
      </div>

      {/* Arrow button */}
      <div
        className={`absolute top-8 right-8 transition-colors duration-300 ${
          isHovered ? "bg-orange-500" : "bg-gray-300"
        }`}
      >
        <button className="w-12 h-12 rounded-full flex items-center justify-center text-white">
          <ArrowDownRight size={20} />
        </button>
      </div>
    </motion.div>
  )
}

export default WebDesignService