"use client"
import { useState, useRef, useEffect } from "react"
import { motion, useAnimationControls } from "framer-motion"
import { gsap } from "gsap"
import Image from "next/image"

const About = () => {
    const [isHovered, setIsHovered] = useState(false)
    const controls = useAnimationControls()
    const marqueeRef = useRef<HTMLDivElement>(null)
    const [contentWidth, setContentWidth] = useState(0)
    const textRefs = useRef<(HTMLSpanElement | null)[]>([])

    // Calculate content width for seamless looping
    useEffect(() => {
        if (marqueeRef.current) {
            setContentWidth(marqueeRef.current.scrollWidth / 1000) // Divide by number of repetitions
        }
    }, [])

    // Start animation when component mounts and contentWidth is calculated
    useEffect(() => {
        if (contentWidth > 0) {
            controls.start({
                x: -contentWidth,
                transition: {
                    x: {
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                        duration: 40 * (1000 / 3), // Scale duration to match 3-set speed
                        ease: "linear",
                    },
                },
            })
        }
    }, [contentWidth, controls])

    // Handle hover state changes
    useEffect(() => {
        if (isHovered) {
            // Pause the animation
            controls.stop()

            // Add GSAP hover effect to text elements
            textRefs.current.forEach((ref) => {
                if (ref) {
                    gsap.to(ref, {
                        scale: 1.05,
                        duration: 0.3,
                        ease: "power2.out",
                    })
                }
            })
        } else {
            // Resume the animation
            controls.start({
                x: -contentWidth,
                transition: {
                    x: {
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                        duration: 40 * (1000 / 3), // Match initial duration
                        ease: "linear",
                    },
                },
            })

            // Reset GSAP effects
            textRefs.current.forEach((ref) => {
                if (ref) {
                    gsap.to(ref, {
                        scale: 1,
                        duration: 0.3,
                        ease: "power2.out",
                    })
                }
            })
        }
    }, [isHovered, contentWidth, controls])

    return (
        <div className="bg-white pb-10">
            <div className="pt-10 mb-10 overflow-hidden w-full">
                <div
                    ref={marqueeRef}
                    className="marquee flex items-center gap-5 font-bold text-[9vw] whitespace-nowrap"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {[...Array(10)].map((_, i) => (
                        <div key={`content-${i}`} className="flex items-center gap-5" aria-hidden={i > 0 ? "true" : undefined}>
                            <h1>
                                <span
                                    ref={(el) => (textRefs.current[i * 3] = el)}
                                    className="hover:text-orange-500 text-black transition-all duration-300"
                                >
                                    Digital
                                </span>
                                <span
                                    ref={(el) => (textRefs.current[i * 3 + 1] = el)}
                                    className="hover:text-orange-500 text-black transition-all duration-300"
                                >
                                    *
                                </span>
                            </h1>
                            <h1>
                                <span
                                    ref={(el) => (textRefs.current[i * 3 + 2] = el)}
                                    className="hover:text-orange-500 text-black transition-all duration-300"
                                >
                                    Agency Creative
                                </span>
                                <span
                                    ref={(el) => (textRefs.current[i * 3 + 3] = el)}
                                    className="hover:text-orange-500 text-black transition-all duration-300"
                                >
                                    *
                                </span>
                            </h1>
                            <h1>
                                <span
                                    ref={(el) => (textRefs.current[i * 3 + 4] = el)}
                                    className="hover:text-orange-500 text-black transition-all duration-300"
                                >
                                    Smart
                                </span>
                                <span
                                    ref={(el) => (textRefs.current[i * 3 + 5] = el)}
                                    className="hover:text-orange-500 text-black transition-all duration-300"
                                >
                                    *
                                </span>
                            </h1>
                        </div>
                    ))}
                </div>
                {/* Inline CSS for Marquee Animation */}
                <style jsx>{`
                    .marquee {
                        display: flex;
                        animation: marquee 40s linear infinite;
                    }
                    .marquee:hover {
                        animation-play-state: paused;
                    }
                    @keyframes marquee {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-100%);
                        }
                    }
                `}</style>
            </div>
            <main>
                <div className="w-full min-h-screen flex">
                    <div className="leftb w-1/2 flex items-center justify-center relative">
                        <motion.div
                            className="circle w-[80vh] h-[80vh] rounded-full bg-amber-800 z-10 overflow-hidden"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <img
                                className="w-full h-full object-cover"
                                src="https://plus.unsplash.com/premium_photo-1661767929421-3d7f6c6c228d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D"
                                alt=""
                            />
                        </motion.div>
                        <motion.div
                            className="bottoming absolute bottom-10 left-0 w-[25vw] h-[30vh] bg-amber-50 z-11 border-6 border-[#dadada]"
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        >
                            <img
                                className="w-full h-full object-cover"
                                src="https://plus.unsplash.com/premium_photo-1661767929421-3d7f6c6c228d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D"
                                alt=""
                            />
                        </motion.div>
                        <motion.div
                            className="trangle absolute top-14 left-10 z-11"
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                            >
                                <img
                                    src="https://vitors.expert-themes.com/wp-content/uploads/2024/12/about-one-shape-1.png"
                                    alt=""
                                />
                            </motion.div>
                        </motion.div>
                        <motion.div
                            className="coil absolute bottom-10 right-3"
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                            >
                                <img
                                    src="https://vitors.expert-themes.com/wp-content/uploads/2024/12/about-one-shape-2.png"
                                    alt=""
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                    <div className="right w-1/2 flex flex-col justify-center">
                        <div className="flex flex-col gap-5 px-8">
                            <motion.p
                                className="text-orange-500 text-4xl"
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                . : about agency : .
                            </motion.p>
                            <motion.h1
                                className="font-bold text-5xl md:text-5xl text-black"
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            >
                                We’re sharp brands creators open for any new collabs
                            </motion.h1>
                            <motion.p
                                className="text-xl md:text-xl text-gray-600"
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                            >
                                Grow brands through bold and strategic creative, focused on searching new ways to showcase user content on digital support and envisioning the future arts.
                            </motion.p>
                        </div>
                        <motion.div
                            className="mt-8 px-8 flex"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                        >
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-3xl font-bold text-gray-900">
                                    High Standard
                                </h2>
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                    Grow brands through bold and strategic creative, focused on searching new ways to showcase user content on digital support and envisioning <span className="text-orange-500">the future</span> arts.
                                </p>
                                {/* Button */}
                                <button className="text-white font-semibold rounded-full">
                                    <p className="hover:text-orange-600 transition-colors">VIEW ALL OUR NEWS</p>
                                </button>
                            </div>
                            {/* Image Placeholder */}
                            <div className="mt-8 flex justify-start">
                                <div className="w-64 h-48 md:w-80 md:h-56 bg-gray-900 rounded-lg flex items-center justify-center">
                                    <img
                                        className="w-full h-full object-cover"
                                        src="https://plus.unsplash.com/premium_photo-1661767929421-3d7f6c6c228d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default About