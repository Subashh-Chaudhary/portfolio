'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/data/personal'
import { Github, Linkedin, Twitter, ArrowDown } from 'lucide-react'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations/framer/variants'
import dynamic from 'next/dynamic'

// Dynamically import the voxel portrait to avoid SSR issues
const HeroVoxelPortrait = dynamic(
    () => import('@/components/three/HeroVoxelPortrait').then(mod => mod.HeroVoxelPortrait),
    { ssr: false }
)

export function HeroSection() {
    return (
        <motion.section
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="h-screen flex items-center justify-center relative overflow-hidden"
        >
            {/* Voxel Portrait - Full Screen Background (positioned slightly left) */}
            <motion.div
                variants={staggerItem}
                className="absolute inset-0 z-0 pointer-events-auto ml-[25%]"
            >
                {/* Glow effect behind voxel portrait */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl pl-32" />

                {/* Voxel Portrait - Interactive */}
                <div className="relative w-full h-full">
                    <HeroVoxelPortrait />
                </div>

                {/* Interactive hint - Bottom of portrait */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md rounded-full px-5 py-2.5 text-sm text-gray-300 font-medium border border-white/10"
                >
                    🖱️ Drag to rotate
                </motion.div>
            </motion.div>

            {/* Text Content - Left Side Foreground */}
            <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 flex items-center pointer-events-none">
                <div className="text-center lg:text-left w-full lg:w-1/2 pointer-events-auto">
                    <motion.div variants={staggerItem} className="mb-4">
                        <span className="text-sm font-medium text-primary uppercase tracking-wider">
                            Welcome to my portfolio
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={staggerItem}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent"
                    >
                        {personalInfo.name}
                    </motion.h1>

                    <motion.h2 variants={staggerItem} className="text-xl md:text-3xl font-semibold mb-6">
                        {personalInfo.title}
                    </motion.h2>

                    <motion.p
                        variants={staggerItem}
                        className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
                    >
                        {personalInfo.tagline}
                    </motion.p>

                    <motion.div variants={staggerItem} className="flex gap-4 justify-center lg:justify-start mb-8">
                        <a
                            href="#projects"
                            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                        >
                            View My Work
                        </a>
                        <a
                            href="/contact"
                            className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-colors"
                        >
                            Get in Touch
                        </a>
                    </motion.div>

                    <motion.div variants={staggerItem} className="flex gap-4 justify-center lg:justify-start">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Github className="w-6 h-6" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Twitter className="w-6 h-6" />
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            >
                <ArrowDown className="w-6 h-6 text-muted-foreground" />
            </motion.div>
        </motion.section>
    )
}
