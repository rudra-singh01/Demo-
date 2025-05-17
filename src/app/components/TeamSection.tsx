"use client"

import { useState } from "react"
import { Facebook, Twitter, Github, PinIcon as Pinterest, Share2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const TeamMember = ({ image, name, position, isEven, tag }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative overflow-hidden rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img src={image || "/placeholder.svg"} alt={name} className="w-full h-[400px] object-cover" />

        {/* Tag */}
        {tag && <div className="absolute top-4 left-4 bg-white text-xs py-1 px-2 rounded">{tag}</div>}

        {/* Social media sidebar - only visible on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute top-0 left-0 h-full flex flex-col justify-center items-center px-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col gap-6">
                <Facebook size={18} className="text-gray-800 cursor-pointer" />
                <Twitter size={18} className="text-gray-800 cursor-pointer" />
                <Github size={18} className="text-gray-800 cursor-pointer" />
                <Pinterest size={18} className="text-gray-800 cursor-pointer" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Share button */}
        <div className="absolute bottom-4 right-4">
          <motion.div
            className="w-10 h-10 bg-orange-500 rounded-sm flex items-center justify-center text-white cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            <Share2 size={18} />
          </motion.div>
        </div>
      </div>

      {/* Info box */}
      <motion.div
        className={`absolute bottom-0 ${isEven ? "right-0 bg-white" : "left-0 bg-gray-900 text-white"} p-6 rounded-tr-lg ${isEven ? "rounded-tl-lg" : "rounded-tr-lg"}`}
        initial={{ y: 100 }}
        animate={{ y: isHovered ? 0 : 100 }}
        transition={{ duration: 0.3 }}
        style={{ width: isEven ? "100%" : "75%" }}
      >
        <h3 className="text-xl font-bold uppercase">{name}</h3>
        <p className={`text-sm ${isEven ? "text-gray-600" : "text-gray-300"}`}>{position}</p>
      </motion.div>
    </div>
  )
}

export default function TeamSection() {
  const teamMembers = [
    {
      image: "/placeholder.svg?height=400&width=300",
      name: "Leslie Alexander",
      position: "Web Designer",
      isEven: false,
      tag: "team-1-6",
    },
    {
      image: "/placeholder.svg?height=400&width=300",
      name: "Theresa Webb",
      position: "Sr. Marketer",
      isEven: false,
      tag: null,
    },
    {
      image: "/placeholder.svg?height=400&width=300",
      name: "Dianne Russell",
      position: "Area Manager",
      isEven: false,
      tag: null,
    },
  ]

  return (
    <div
      className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 z-20"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-vector/seamless-white-interlaced-rounded-arc-patterned-background_53876-97975.jpg?t=st=1746604741~exp=1746608341~hmac=680f4db4984aa442aeea78c59f875c6ae60224150aa755705e126ca07c87220f&w=996)"}}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-12 text-black"> 
          <div>
            <p className="text-orange-500 font-bold text-sm tracking-wider uppercase">.: OUR TEAM MEMBERS :.</p>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6 leading-tight">
              We Bring A Core Team
              <br />
              Of Experts World.
            </h2>
          </div>

          {/* <motion.div
            className="hidden md:flex items-center justify-center w-32 h-32 bg-orange-500 rounded-full text-white cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-center font-medium">View More Members</p>
          </motion.div> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  )
}
