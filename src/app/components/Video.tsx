import React from 'react'
import { motion } from 'framer-motion'

const Video = () => {
    return (
        <div className='pb-10 bg-white'>
            <div className="flex items-center justify-center flex-col">
                <div className="videoDiv w-[90%] h-[95vh] relative">
                    <motion.div
                        className="absolute top-0 left-0 w-full"
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="p-10 text-center border-t-1 border-[#666666] w-full bg-white">
                            <p className='text-[#666666]'>
                                <span className='text-[#666666] underline'>Contact Us</span> or Send An Email to info@agency.com
                            </p>
                        </div>
                    </motion.div>
                    <motion.img
                        className='w-full h-full object-cover'
                        src="https://vitors.expert-themes.com/wp-content/uploads/2025/01/gallery-2.jpg"
                        alt=""
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                    <motion.div
                        className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center text-center"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    >
                        <motion.h1
                            className='text-8xl font-bold text-zinc-300'
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                        >
                            PLAY INTRO
                        </motion.h1>
                        <motion.h1
                            className='text-orange-500 text-6xl font-bold'
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                        >
                            VIDEO
                        </motion.h1>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Video