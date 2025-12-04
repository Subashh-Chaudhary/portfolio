'use client'

import { motion } from 'framer-motion'
import { education } from '@/data/education'
import { GraduationCap, Calendar, Award, MapPin, TrendingUp } from 'lucide-react'

export function EducationSection() {
    return (
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-black overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
            </div>

            {/* Background Grid & Data Lines */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                <div className="absolute left-1/3 top-0 w-px h-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />
                <div className="absolute right-1/3 top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent" />
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
                            className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-r from-purple-500 to-blue-500"
                            animate={{ scaleX: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="font-mono text-purple-400 text-[10px] sm:text-xs md:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase flex items-center gap-2">
                            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                            ACADEMIC_BACKGROUND
                        </span>
                    </div>

                    {/* Main Title */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tighter text-white mb-4 sm:mb-5 md:mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-gray-500">
                            EDUCATION &
                        </span>
                        <br />
                        <span className="relative inline-block hover:text-purple-500 transition-colors duration-300">
                            CERTIFICATIONS
                            <motion.span
                                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            />
                        </span>
                    </h2>
                </motion.div>

                {/* Education Timeline */}
                <div className="relative space-y-6 sm:space-y-8">
                    {/* Timeline Line */}
                    <div className="absolute left-4 sm:left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 hidden md:block" />

                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className="relative"
                        >
                            {/* Timeline Dot */}
                            <motion.div
                                className="absolute left-4 sm:left-6 md:left-8 top-8 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 border-4 border-black hidden md:block z-10"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 + 0.3 }}
                                whileHover={{ scale: 1.5 }}
                            />

                            <motion.div
                                whileHover={{ x: 10, scale: 1.01 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="group relative bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-transparent transition-all duration-300 md:ml-16 overflow-hidden"
                            >
                                {/* Gradient Border on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Animated Corner Accents */}
                                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="relative z-10 p-5 sm:p-6 md:p-8">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-4 sm:mb-5 md:mb-6 pb-4 border-b border-white/10">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 sm:gap-3 mb-2">
                                                <div className="p-2 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all">
                                                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                                                </div>
                                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all">
                                                    {edu.degree}
                                                </h3>
                                            </div>
                                            <p className="text-base sm:text-lg text-purple-400 font-medium mb-1">
                                                {edu.institution}
                                            </p>
                                            <p className="text-sm sm:text-base text-gray-400">
                                                {edu.field}
                                            </p>
                                        </div>
                                        {edu.grade && (
                                            <motion.div
                                                className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 px-3 py-1.5 rounded-lg group-hover:from-purple-500/20 group-hover:to-blue-500/20 transition-all"
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                <Award className="w-4 h-4 text-purple-400" />
                                                <span className="font-mono text-xs text-purple-400">{edu.grade}</span>
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
                                                    {edu.startDate.split('-')[0]} - {edu.current ? 'Present' : edu.endDate?.split('-')[0]}
                                                </span>
                                                {edu.current && (
                                                    <motion.span
                                                        className="ml-2 px-2 py-0.5 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded text-xs text-green-400 font-mono"
                                                        animate={{ opacity: [1, 0.5, 1] }}
                                                        transition={{ duration: 2, repeat: Infinity }}
                                                    >
                                                        ONGOING
                                                    </motion.span>
                                                )}
                                            </div>
                                            {edu.location && (
                                                <div className="flex items-center gap-2 text-sm sm:text-base text-gray-400">
                                                    <MapPin className="w-4 h-4 text-gray-500" />
                                                    <span>{edu.location}</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Grade for mobile */}
                                        {edu.grade && (
                                            <div className="flex sm:hidden items-center gap-2">
                                                <Award className="w-4 h-4 text-purple-400" />
                                                <span className="font-mono text-sm text-purple-400">{edu.grade}</span>
                                            </div>
                                        )}

                                        {/* Description */}
                                        {edu.description && (
                                            <div className="relative pl-4">
                                                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
                                                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                                                    {edu.description}
                                                </p>
                                            </div>
                                        )}

                                        {/* Achievements */}
                                        {edu.achievements && edu.achievements.length > 0 && (
                                            <div className="pt-3 border-t border-white/10">
                                                <div className="font-mono text-xs text-purple-400 uppercase mb-3 flex items-center gap-2">
                                                    <TrendingUp className="w-3 h-3" />
                                                    Key Achievements
                                                </div>
                                                <ul className="space-y-2">
                                                    {edu.achievements.map((achievement, idx) => (
                                                        <motion.li
                                                            key={idx}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ delay: index * 0.15 + idx * 0.1 }}
                                                            className="flex items-start gap-2 text-sm text-gray-400 group/achievement hover:text-gray-300 transition-colors"
                                                        >
                                                            <span className="text-purple-400 mt-1 group-hover/achievement:text-blue-400 transition-colors">▹</span>
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
                                            {edu.location || 'Remote'}
                                        </span>
                                        <div className="flex items-center gap-1">
                                            <motion.div
                                                className="w-1 h-1 rounded-full bg-green-500"
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
                    ))}
                </div>
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
