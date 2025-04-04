'use client'

import React from 'react'
import { motion } from "framer-motion";
import { FaPlay, FaPlus } from "react-icons/fa";

export default function HeroSection() {
    return (
        <div className="relative w-full h-screen text-white">
            <div className="absolute inset-0 bg-black/50"></div>
            <img
                src="https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/yFuKvT4Vm3sKHdFY4eG6I4ldAnn.jpg"
                alt="Black Widow"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="relative z-10 flex flex-col justify-center h-full max-w-4xl mx-auto px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl font-bold"
                >
                    Black Widow
                </motion.h1>

                <div className="flex items-center gap-4 mt-4 text-lg">
                    <span className="flex items-center gap-2"><strong>⭐ IMDB:</strong> 7.4</span>
                    <span className="flex items-center gap-2"><strong>⏳ Duration:</strong> 1H 58M</span>
                    <span className="flex items-center gap-2"><strong>📅 Year:</strong> 2020</span>
                </div>

                <p className="mt-4 text-gray-300 max-w-2xl">
                    Seorang mantan agen rahasia Natasha Romanoff menghadapi bagian gelap dari masa lalunya saat ia dikejar oleh kekuatan yang tidak kenal ampun.
                </p>

                <div className="mt-6 flex gap-4">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center gap-2 bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold"
                    >
                        <FaPlay /> Watch Trailer
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold"
                    >
                        <FaPlus /> Add List
                    </motion.button>
                </div>

            </div>
        </div>
    )
}
