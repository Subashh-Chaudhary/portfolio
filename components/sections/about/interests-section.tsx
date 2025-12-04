'use client'

import { motion } from 'framer-motion'
import { interests } from '@/data/about'
import { useState } from 'react'
import * as SimpleIcons from 'react-icons/si'
import * as LucideIcons from 'lucide-react'
import { Sparkles, Star } from 'lucide-react'

// Helper function to get icon component
const getIconComponent = (iconName: string, iconType: 'simple' | 'lucide') => {
    if (iconType === 'simple') {
        const IconComponent = (SimpleIcons as any)[iconName]
        return IconComponent || null
    } else {
        const IconComponent = (LucideIcons as any)[iconName]
        return IconComponent || null
    }
}

export function InterestsSection() {
    const [hoveredInterest, setHoveredInterest] = useState<string | null>(null)

    return (
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-black overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
            </div>

            {/* Background Grid & Data Lines */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                <div className="absolute left-1/3 top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent" />
                <div className="absolute right-1/3 top-0 w-px h-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />

                {/* Animated Corner Crosshairs */}
                <motion.div
                    className="absolute top-10 left-10 w-4 h-4 border-t border-l border-cyan-400"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                    className="absolute top-10 right-10 w-4 h-4 border-t border-r border-blue-400"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div
                    className="absolute bottom-10 left-10 w-4 h-4 border-b border-l border-blue-400"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                <motion.div
                    className="absolute bottom-10 right-10 w-4 h-4 border-b border-r border-purple-400"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                />
            </div>

            <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 sm:mb-10 md:mb-12 lg:mb-16"
                >
                    {/* Title Tag */}
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                        <motion.div
                            className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-r from-cyan-500 to-blue-500"
                            animate={{ scaleX: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="font-mono text-cyan-400 text-[10px] sm:text-xs md:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase flex items-center gap-2">
                            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
                            PERSONAL_INTERESTS
                        </span>
                    </div>

                    {/* Main Title */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tighter text-white mb-4 sm:mb-5 md:mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-gray-500">
                            INTERESTS &
                        </span>
                        <br />
                        <span className="relative inline-block hover:text-cyan-500 transition-colors duration-300">
                            HOBBIES
                            <motion.span
                                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500"
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            />
                        </span>
                    </h2>

                    <div className="relative pl-4">
                        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full" />
                        <p className="text-gray-300 max-w-2xl font-light text-sm sm:text-base md:text-lg">
                            Beyond coding, I explore various creative and technical pursuits that fuel my passion for innovation.
                        </p>
                    </div>
                </motion.div>

                {/* Interests Grid - Bento Style */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                    {interests.map((interest, index) => {
                        const Icon = getIconComponent(interest.icon, interest.iconType)
                        const isHovered = hoveredInterest === interest.id

                        return (
                            <motion.div
                                key={interest.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                onMouseEnter={() => setHoveredInterest(interest.id)}
                                onMouseLeave={() => setHoveredInterest(null)}
                                className="group relative bg-black border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                            >
                                {/* Corner Accents */}
                                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="p-5 sm:p-6">
                                    {/* Icon */}
                                    <div className="mb-4 sm:mb-5">
                                        {Icon && (
                                            <div className={`transition-all duration-300 ${hoveredInterest === interest.id
                                                    ? 'text-blue-400 scale-110'
                                                        : 'text-gray-400'
                                                }`}>
                                                <Icon className="w-8 h-8 sm:w-10 sm:h-10" />
                                            </div>
                                        )}
                                    </div>

                                    {/* Name */}
                                    <h3 className="font-mono text-sm sm:text-base text-white uppercase mb-2 group-hover:text-blue-400 transition-colors">
                                        {interest.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4">
                                        {interest.description}
                                    </p>

                                    {/* Proficiency Bar */}
                                    {interest.proficiency && (
                                        <div className="space-y-1.5">
                                            <div className="flex items-center justify-between">
                                                <span className="font-mono text-[10px] text-gray-500 uppercase">
                                                    Proficiency
                                                </span>
                                                <span className={`font-mono text-xs transition-colors ${hoveredInterest === interest.id
                                                        ? 'text-blue-400'
                                                        : 'text-gray-500'
                                                    }`}>
                                                    {interest.proficiency}%
                                                </span>
                                            </div>
                                            <div className="relative h-1 bg-white/5 overflow-hidden">
                                                {/* Background glow */}
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${interest.proficiency}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        delay: index * 0.1 + 0.2,
                                                        duration: 1,
                                                        ease: "easeOut"
                                                    }}
                                                    className="absolute h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-50 blur-sm"
                                                />
                                                {/* Solid bar */}
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${interest.proficiency}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        delay: index * 0.1 + 0.2,
                                                        duration: 1,
                                                        ease: "easeOut"
                                                    }}
                                                    className="relative h-full bg-gradient-to-r from-blue-500 to-purple-500"
                                                >
                                                    {/* Animated shimmer */}
                                                    <div
                                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]"
                                                        style={{
                                                            backgroundSize: '200% 100%',
                                                        }}
                                                    />
                                                </motion.div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Bottom Status Bar */}
                                <div className="px-5 sm:px-6 py-1.5 sm:py-2 border-t border-white/10 bg-white/[0.02]">
                                    <div className="flex items-center justify-between">
                                        <span className="font-mono text-[9px] sm:text-[10px] text-gray-600 uppercase">
                                            {interest.iconType}
                                        </span>
                                        <div className="flex items-center gap-1">
                                            <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                                            <span className="font-mono text-[9px] sm:text-[10px] text-gray-600">
                                                ACTIVE
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Bottom Terminal Line */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 pt-4 sm:pt-6 md:pt-8 border-t border-white/10"
                >
                    <div className="font-mono text-[10px] sm:text-xs text-gray-600 flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <span className="text-green-500">$</span>
                        <span className="text-cyan-400">./display_interests.sh</span>
                        <span className="hidden sm:inline">--mode=interactive</span>
                        <span className="hidden sm:inline text-gray-700">|</span>
                        <span className="hidden sm:inline text-blue-400">grep</span>
                        <span className="hidden sm:inline">"proficiency &gt; 70"</span>
                        <motion.span
                            className="text-cyan-400"
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            _
                        </motion.span>
                    </div>
                </motion.div>
            </div>

            <style jsx>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                @keyframes shine {
                    0% { transform: translateX(-100%) skewX(-12deg); }
                    100% { transform: translateX(200%) skewX(-12deg); }
                }
            `}</style>
        </section>
    )
}
