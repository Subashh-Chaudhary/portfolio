'use client'

import { motion } from 'framer-motion'
import { skillGroups } from '@/data/skills'
import { Terminal, Database, Cloud, Code2, Wrench, Brain } from 'lucide-react'
import { useState } from 'react'
import * as SimpleIcons from 'react-icons/si'

const categoryIcons = {
    frontend: Code2,
    backend: Terminal,
    database: Database,
    devops: Cloud,
    tools: Wrench,
    ai_ml: Brain,
}

// Helper function to get icon component from string
const getIconComponent = (iconName: string) => {
    const IconComponent = (SimpleIcons as any)[iconName]
    return IconComponent || null
}

export function SkillsShowcaseSection() {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

    return (
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-black overflow-hidden">
            {/* Subtle Background Grid */}
            <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
                <div className="absolute left-1/3 top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent" />
                <div className="absolute right-1/3 top-0 w-px h-full bg-gradient-to-b from-transparent via-pink-500/30 to-transparent" />
            </div>

            <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                    {skillGroups.map((group, groupIndex) => {
                        const Icon = categoryIcons[group.category as keyof typeof categoryIcons]

                        return (
                            <motion.div
                                key={group.category}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: groupIndex * 0.1, duration: 0.5 }}
                                className="group relative bg-black border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                            >
                                {/* Corner Accents */}
                                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="p-4 sm:p-5 md:p-6">
                                    {/* Category Header */}
                                    <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6 pb-3 sm:pb-4 border-b border-white/10">
                                        <div className="flex items-center gap-2 sm:gap-3">
                                            {Icon && <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />}
                                            <h3 className="font-mono text-xs sm:text-sm tracking-wider text-white uppercase">
                                                {group.title}
                                            </h3>
                                        </div>
                                        <div className="font-mono text-[10px] sm:text-xs text-gray-500">
                                            [{group.skills.length}]
                                        </div>
                                    </div>

                                    {/* Skills List */}
                                    <div className="space-y-3 sm:space-y-4 md:space-y-5">
                                        {group.skills.map((skill, skillIndex) => {
                                            const SkillIcon = skill.icon ? getIconComponent(skill.icon) : null

                                            return (
                                                <motion.div
                                                    key={skill.id}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: groupIndex * 0.1 + skillIndex * 0.05 }}
                                                    onMouseEnter={() => setHoveredSkill(skill.id)}
                                                    onMouseLeave={() => setHoveredSkill(null)}
                                                    className="group/skill"
                                                >
                                                    {/* Skill Name & Icon */}
                                                    <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                                                        <div className="flex items-center gap-2 sm:gap-2.5">
                                                            {SkillIcon && (
                                                                <div className={`transition-all duration-300 ${hoveredSkill === skill.id
                                                                    ? 'text-blue-400 scale-110'
                                                                    : 'text-gray-400'
                                                                    }`}>
                                                                    <SkillIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                                                </div>
                                                            )}
                                                            <span className="font-mono text-[11px] sm:text-xs text-gray-300 group-hover/skill:text-white transition-colors">
                                                                {skill.name}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-1.5 sm:gap-2">
                                                            <span className="font-mono text-[9px] sm:text-[10px] text-gray-500">
                                                                {skill.yearsOfExperience}y
                                                            </span>
                                                            <span className={`font-mono text-[10px] sm:text-xs transition-colors ${hoveredSkill === skill.id
                                                                ? 'text-blue-400'
                                                                : 'text-gray-500'
                                                                }`}>
                                                                {skill.proficiency}%
                                                            </span>
                                                        </div>
                                                    </div>

                                                    {/* Progress Bar */}
                                                    <div className="relative h-1 bg-white/5 overflow-hidden">
                                                        {/* Background glow */}
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: `${skill.proficiency}%` }}
                                                            viewport={{ once: true }}
                                                            transition={{
                                                                delay: groupIndex * 0.1 + skillIndex * 0.05 + 0.2,
                                                                duration: 1,
                                                                ease: "easeOut"
                                                            }}
                                                            className="absolute h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-50 blur-sm"
                                                        />
                                                        {/* Solid bar */}
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: `${skill.proficiency}%` }}
                                                            viewport={{ once: true }}
                                                            transition={{
                                                                delay: groupIndex * 0.1 + skillIndex * 0.05 + 0.2,
                                                                duration: 1,
                                                                ease: "easeOut"
                                                            }}
                                                            className="relative h-full bg-gradient-to-r from-blue-500 to-purple-500"
                                                        >
                                                            {/* Animated shimmer */}
                                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]"
                                                                style={{
                                                                    backgroundSize: '200% 100%',
                                                                }}
                                                            />
                                                        </motion.div>
                                                    </div>
                                                </motion.div>
                                            )
                                        })}
                                    </div>
                                </div>

                                {/* Bottom Status Bar */}
                                <div className="px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 border-t border-white/10 bg-white/[0.02]">
                                    <div className="flex items-center justify-between">
                                        <span className="font-mono text-[9px] sm:text-[10px] text-gray-600 uppercase">
                                            {group.category}
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
                        <span className="text-blue-400">./display_skills.sh</span>
                        <span className="hidden sm:inline">--mode=interactive</span>
                        <span className="hidden sm:inline text-gray-700">|</span>
                        <span className="hidden sm:inline text-purple-400">grep</span>
                        <span className="hidden sm:inline">"proficiency &gt; 80"</span>
                        <span className="animate-pulse">_</span>
                    </div>
                </motion.div>
            </div>

            <style jsx>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
            `}</style>
        </section>
    )
}
