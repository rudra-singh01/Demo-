"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const FeaturedWorks = () => {
    const ref = useRef(null);
    const [shouldAnimate, setShouldAnimate] = useState(false);
    const isInView = useInView(ref, { margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            setShouldAnimate(true);
        }
    }, [isInView]);

    return (
        <div ref={ref} className="relative w-full py-16 px-4 md:px-8 lg:px-16 bg-white flex items-center justify-between">
            {/* Header */}
            <motion.div 
                className="left w-1/2 h-full flex items-center justify-center flex-col gap-4"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.div 
                    className="mb-8"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <h3 className="text-orange-500 font-medium mb-4 text-sm tracking-widest">
                        .: POPULAR PROJECTS :.
                    </h3>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                        Featured New Works
                    </h1>
                </motion.div>
                <motion.div 
                    className="w-[90%] h-[70vh] overflow-hidden"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <img className="w-full h-full object-cover" src="https://vitors.expert-themes.com/wp-content/uploads/2025/01/gallery-2.jpg" alt="" />
                </motion.div>
                <motion.div 
                    className="w-[90%] h-[70vh] overflow-hidden"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                    <img className="w-full h-full object-cover" src="https://vitors.expert-themes.com/wp-content/uploads/2025/01/gallery-2.jpg" alt="" />
                </motion.div>
            </motion.div>
            <motion.div 
                className="right w-1/2 h-full flex justify-center flex-col gap-4"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.div 
                    className="w-[90%] h-[70vh] overflow-hidden"
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <img className="w-full h-full object-cover" src="https://vitors.expert-themes.com/wp-content/uploads/2025/01/gallery-2.jpg" alt="" />
                </motion.div>
                <motion.div 
                    className="w-[90%] h-[70vh] overflow-hidden"
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                    <img className="w-full h-full object-cover" src="https://vitors.expert-themes.com/wp-content/uploads/2025/01/gallery-2.jpg" alt="" />
                </motion.div>
                <motion.div 
                    className="flex items-end justify-end text-end px-15 pt-4 text-[#000] z-11"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                >
                    <a href="#">View More Project</a>
                </motion.div>
                <motion.div 
                    className="circleDiv w-[5vw] h-[5vw] bg-orange-500 rounded-full absolute bottom-20 right-[14%]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                >
                </motion.div>
            </motion.div>
        </div>
    );
};

export default FeaturedWorks;