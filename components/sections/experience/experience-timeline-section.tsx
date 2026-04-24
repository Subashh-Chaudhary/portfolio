'use client'

import { motion } from 'framer-motion'
import { experiences } from '@/data/experience'
import { Briefcase, MapPin, Calendar, Award, TrendingUp, Building2 } from 'lucide-react'
import { useState } from 'react'

// Helper function to calculate duration
const calculateDuration = (startDate: string, endDate?: string) => {
    const start = new Date(startDate)
    const end = endDate ? new Date(endDate) : new Date()

    const years = end.getFullYear() - start.getFullYear()
    const months = end.getMonth() - start.getMonth()

    const totalMonths = years * 12 + months
    const displayYears = Math.floor(totalMonths / 12)
    const displayMonths = totalMonths % 12

    if (displayYears === 0) {
        return `${displayMonths} ${displayMonths === 1 ? 'month' : 'months'}`
    } else if (displayMonths === 0) {
        return `${displayYears} ${displayYears === 1 ? 'year' : 'years'}`
    } else {
        return `${displayYears}y ${displayMonths}m`
    }
}

// Helper function to format date
const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

export function ExperienceTimelineSection() {
    const [hoveredExperience, setHoveredExperience] = useState<string | null>(null)

    return (
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-black overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-teal-500/10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
            </div>

            {/* Background Grid & Data Lines */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                <div className="absolute left-1/3 top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent" />
                <div className="absolute right-1/3 top-0 w-px h-full bg-gradient-to-b from-transparent via-teal-500/30 to-transparent" />
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
                            className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-r from-blue-500 to-cyan-500"
                            animate={{ scaleX: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="font-mono text-cyan-400 text-[10px] sm:text-xs md:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase flex items-center gap-2">
                            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
                            CAREER_TIMELINE
                        </span>
                    </div>

                    {/* Main Title */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tighter text-white mb-4 sm:mb-5 md:mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-gray-500">
                            PROFESSIONAL
                        </span>
                        <br />
                        <span className="relative inline-block hover:text-cyan-500 transition-colors duration-300">
                            HISTORY
                            <motion.span
                                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            />
                        </span>
                    </h2>

                    <div className="relative pl-4">
                        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 via-cyan-500 to-teal-500 rounded-full" />
                        <p className="text-gray-300 max-w-2xl font-light text-sm sm:text-base md:text-lg">
                            A chronological journey through my professional career, highlighting key roles, achievements, and technologies.
                        </p>
                    </div>
                </motion.div>

                {/* Experience Timeline */}
                <div className="relative space-y-6 sm:space-y-8">
                    {/* Timeline Line */}
                    <div className="absolute left-4 sm:left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-cyan-500 to-teal-500 hidden md:block" />

                    {experiences.map((exp, index) => {
                        const isHovered = hoveredExperience === exp.id

                        return (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                className="relative"
                            >
                                {/* Timeline Dot */}
                                <motion.div
                                    className="absolute left-4 sm:left-6 md:left-8 top-8 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 border-4 border-black hidden md:block z-10"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 + 0.3 }}
                                    whileHover={{ scale: 1.5 }}
                                />

                                <motion.div
                                    onMouseEnter={() => setHoveredExperience(exp.id)}
                                    onMouseLeave={() => setHoveredExperience(null)}
                                    whileHover={{ x: 10, scale: 1.01 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="group relative bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-transparent transition-all duration-300 md:ml-16 overflow-hidden"
                                >
                                    {/* Gradient Border on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Animated Corner Accents */}
                                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                                    <div className="relative z-10 p-5 sm:p-6 md:p-8">
                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-4 sm:mb-5 md:mb-6 pb-4 border-b border-white/10">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                                                    <div className="p-2 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all">
                                                        <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                                                    </div>
                                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all">
                                                        {exp.position}
                                                    </h3>
                                                </div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <Building2 className="w-4 h-4 text-cyan-400" />
                                                    <p className="text-base sm:text-lg text-cyan-400 font-medium">
                                                        {exp.company}
                                                    </p>
                                                </div>
                                                <p className="text-sm sm:text-base text-gray-400">
                                                    {exp.description}
                                                </p>
                                            </div>
                                            {exp.current && (
                                                <motion.div
                                                    className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 px-3 py-1.5 rounded-lg group-hover:from-green-500/20 group-hover:to-emerald-500/20 transition-all"
                                                    animate={{ opacity: [1, 0.7, 1] }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                >
                                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                                    <span className="font-mono text-xs text-green-400 uppercase">Current</span>
                                                </motion.div>
                                            )}
                                        </div>

                                        {/* Details */}
                                        <div className="space-y-3 sm:space-y-4">
                                            {/* Date & Location */}
                                            <div className="flex flex-wrap gap-4">
                                                <div className="flex items-center gap-2 text-sm sm:text-base text-gray-400">
                                                    <Calendar className="w-4 h-4 text-gray-500" />
                                                    <span className="font-mono">
                                                        {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate!)}
                                                    </span>
                                                    <span className="px-2 py-0.5 bg-white/5 rounded text-xs text-gray-500 font-mono">
                                                        {calculateDuration(exp.startDate, exp.endDate)}
                                                    </span>
                                                </div>
                                                {exp.location && (
                                                    <div className="flex items-center gap-2 text-sm sm:text-base text-gray-400">
                                                        <MapPin className="w-4 h-4 text-gray-500" />
                                                        <span>{exp.location}</span>
                                                        <span className="text-gray-600">•</span>
                                                        <span className="capitalize text-gray-500">{exp.locationType}</span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Current badge for mobile */}
                                            {exp.current && (
                                                <div className="flex sm:hidden items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                                    <span className="font-mono text-sm text-green-400">Current Position</span>
                                                </div>
                                            )}

                                            {/* Technologies */}
                                            {exp.technologies && exp.technologies.length > 0 && (
                                                <div className="pt-3 border-t border-white/10">
                                                    <div className="font-mono text-xs text-cyan-400 uppercase mb-3 flex items-center gap-2">
                                                        <Award className="w-3 h-3" />
                                                        Technologies
                                                    </div>
                                                    <div className="flex flex-wrap gap-2">
                                                        {exp.technologies.map((tech, idx) => (
                                                            <motion.span
                                                                key={tech}
                                                                initial={{ opacity: 0, scale: 0.8 }}
                                                                whileInView={{ opacity: 1, scale: 1 }}
                                                                viewport={{ once: true }}
                                                                transition={{ delay: index * 0.15 + idx * 0.05 }}
                                                                whileHover={{ scale: 1.1, y: -2 }}
                                                                className="px-3 py-1.5 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-cyan-500/30 rounded-lg text-xs text-cyan-300 font-mono hover:border-cyan-500/50 hover:from-blue-500/20 hover:to-cyan-500/20 transition-all"
                                                            >
                                                                {tech}
                                                            </motion.span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Achievements */}
                                            {exp.achievements && exp.achievements.length > 0 && (
                                                <div className="pt-3 border-t border-white/10">
                                                    <div className="font-mono text-xs text-cyan-400 uppercase mb-3 flex items-center gap-2">
                                                        <TrendingUp className="w-3 h-3" />
                                                        Key Achievements
                                                    </div>
                                                    <ul className="space-y-2">
                                                        {exp.achievements.map((achievement, idx) => (
                                                            <motion.li
                                                                key={idx}
                                                                initial={{ opacity: 0, x: -20 }}
                                                                whileInView={{ opacity: 1, x: 0 }}
                                                                viewport={{ once: true }}
                                                                transition={{ delay: index * 0.15 + idx * 0.1 }}
                                                                className="flex items-start gap-2 text-sm text-gray-400 group/achievement hover:text-gray-300 transition-colors"
                                                            >
                                                                <span className="text-cyan-400 mt-1 group-hover/achievement:text-blue-400 transition-colors">▹</span>
                                                                <span>{achievement}</span>
                                                            </motion.li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Bottom Status Bar */}
                                    <div className="relative z-10 px-5 sm:px-6 md:px-8 py-2 border-t border-white/10 bg-black/50">
                                        <div className="flex items-center justify-between">
                                            <span className="font-mono text-[9px] sm:text-[10px] text-gray-600 uppercase">
                                                Position #{String(index + 1).padStart(2, '0')}
                                            </span>
                                            <div className="flex items-center gap-1">
                                                <motion.div
                                                    className="w-1 h-1 rounded-full bg-cyan-500"
                                                    animate={{ opacity: [1, 0.3, 1] }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                />
                                                <span className="font-mono text-[9px] sm:text-[10px] text-gray-600">
                                                    VERIFIED
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Shine effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-shine" />
                                    </div>
                                </motion.div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Terminal Command Line */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 pt-4 sm:pt-6 md:pt-8 border-t border-white/10"
                >
                    <div className="font-mono text-[10px] sm:text-xs text-gray-600 flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <span className="text-green-500">$</span>
                        <span className="text-cyan-400">./display_experience.sh</span>
                        <span className="hidden sm:inline">--format=timeline</span>
                        <span className="hidden sm:inline text-gray-700">|</span>
                        <span className="hidden sm:inline text-blue-400">sort</span>
                        <span className="hidden sm:inline">-by date</span>
                        <span className="hidden md:inline text-gray-700">|</span>
                        <span className="hidden md:inline text-teal-400">render</span>
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
                @keyframes shine {
                    0% { transform: translateX(-100%) skewX(-12deg); }
                    100% { transform: translateX(200%) skewX(-12deg); }
                }
            `}</style>
        </section>
    )
}
