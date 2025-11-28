'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/data/personal'
import { Github, Linkedin, Twitter, ArrowDown } from 'lucide-react'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations/framer/variants'

export function HeroSection() {
    return (
        <motion.section
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="min-h-screen flex items-center justify-center relative"
        >
            <div className="text-center max-w-4xl mx-auto px-4">
                <motion.div variants={staggerItem} className="mb-4">
                    <span className="text-sm font-medium text-primary uppercase tracking-wider">
                        Welcome to my portfolio
                    </span>
                </motion.div>

                <motion.h1
                    variants={staggerItem}
                    className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent"
                >
                    {personalInfo.name}
                </motion.h1>

                <motion.h2 variants={staggerItem} className="text-2xl md:text-4xl font-semibold mb-6">
                    {personalInfo.title}
                </motion.h2>

                <motion.p
                    variants={staggerItem}
                    className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
                >
                    {personalInfo.tagline}
                </motion.p>

                <motion.div variants={staggerItem} className="flex gap-4 justify-center mb-12">
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

                <motion.div variants={staggerItem} className="flex gap-4 justify-center">
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

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 1.5 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <ArrowDown className="w-6 h-6 text-muted-foreground" />
                </motion.div>
            </div>
        </motion.section>
    )
}
