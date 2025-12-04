'use client'

import { motion } from 'framer-motion'
import { featuredProjects } from '@/data/projects'
import { ExternalLink, Github, Calendar, Tag, Sparkles, Code2, Award } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export function FeaturedWorkSection() {
    const [hoveredProject, setHoveredProject] = useState<string | null>(null)

    return (
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-black overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(168,85,247,0.1),transparent_50%)]" />
            </div>

            {/* Background Grid & Data Lines */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
                <div className="absolute left-1/3 top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent" />
                <div className="absolute right-1/3 top-0 w-px h-full bg-gradient-to-b from-transparent via-pink-500/30 to-transparent" />
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
                            className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-r from-purple-500 to-pink-500"
                            animate={{ scaleX: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="font-mono text-purple-400 text-[10px] sm:text-xs md:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase flex items-center gap-2">
                            <Award className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
                            FEATURED_PROJECTS
                        </span>
                    </div>

                    {/* Main Title */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tighter text-white mb-4 sm:mb-5 md:mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-gray-500">
                            SELECTED
                        </span>
                        <br />
                        <span className="relative inline-block hover:text-purple-500 transition-colors duration-300">
                            WORKS
                            <motion.span
                                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500"
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            />
                        </span>
                    </h2>

                    <div className="relative pl-4">
                        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-orange-500 rounded-full" />
                        <p className="text-gray-300 max-w-2xl font-light text-sm sm:text-base md:text-lg">
                            Handpicked projects that showcase my expertise in modern web development and creative problem-solving.
                        </p>
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                    {featuredProjects.map((project, index) => {
                        const isHovered = hoveredProject === project.id

                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                onMouseEnter={() => setHoveredProject(project.id)}
                                onMouseLeave={() => setHoveredProject(null)}
                                className="group relative bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-transparent transition-all duration-300 overflow-hidden"
                            >
                                {/* Gradient Border on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Animated Corner Accents */}
                                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity z-20" />
                                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-pink-500 opacity-0 group-hover:opacity-100 transition-opacity z-20" />
                                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-pink-500 opacity-0 group-hover:opacity-100 transition-opacity z-20" />
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity z-20" />

                                {/* Image Section */}
                                <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-purple-900/20 to-pink-900/20 overflow-hidden">
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />

                                    {/* Placeholder or Image */}
                                    {project.thumbnail ? (
                                        <Image
                                            src={project.thumbnail}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Code2 className="w-16 h-16 text-purple-500/30" />
                                        </div>
                                    )}

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4 z-20">
                                        <motion.div
                                            className="px-3 py-1.5 bg-gradient-to-r from-purple-500/90 to-pink-500/90 backdrop-blur-sm rounded-lg border border-white/20"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <span className="font-mono text-xs text-white uppercase tracking-wider">
                                                {project.category?.replace('-', ' ') || 'Project'}
                                            </span>
                                        </motion.div>
                                    </div>

                                    {/* Status Indicator */}
                                    <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
                                        <motion.div
                                            className="w-2 h-2 rounded-full bg-green-500"
                                            animate={{ opacity: [1, 0.3, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                        <span className="font-mono text-xs text-green-400 uppercase">Active</span>
                                    </div>

                                    {/* Project Number */}
                                    <div className="absolute bottom-4 left-4 z-20">
                                        <div className="font-mono text-6xl sm:text-7xl font-black text-white/5 group-hover:text-purple-500/10 transition-colors">
                                            {String(index + 1).padStart(2, '0')}
                                        </div>
                                    </div>
                                </div>

                                <div className="relative z-10 p-5 sm:p-6 md:p-8">
                                    {/* Title & Description */}
                                    <div className="mb-4 sm:mb-5">
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all mb-3">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 leading-relaxed transition-colors">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Technologies */}
                                    {project.tags && project.tags.length > 0 && (
                                        <div className="mb-5 sm:mb-6">
                                            <div className="font-mono text-xs text-purple-400 uppercase mb-3 flex items-center gap-2">
                                                <Tag className="w-3 h-3" />
                                                Tech Stack
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.slice(0, 6).map((tech, idx) => (
                                                    <motion.span
                                                        key={tech}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: index * 0.15 + idx * 0.05 }}
                                                        whileHover={{ scale: 1.1, y: -2 }}
                                                        className="px-3 py-1.5 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg text-xs text-purple-300 font-mono hover:border-purple-500/50 hover:from-purple-500/20 hover:to-pink-500/20 transition-all"
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                                {project.tags.length > 6 && (
                                                    <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-500 font-mono">
                                                        +{project.tags.length - 6}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {/* Metadata Row */}
                                    <div className="flex items-center justify-between mb-5 pb-5 border-b border-white/10">
                                        {project.completedAt && (
                                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                                <Calendar className="w-4 h-4 text-gray-600" />
                                                <span className="font-mono text-xs">
                                                    {new Date(project.completedAt).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'short'
                                                    })}
                                                </span>
                                            </div>
                                        )}
                                        {project.role && (
                                            <div className="px-2 py-1 bg-white/5 rounded text-xs text-gray-500 font-mono">
                                                {project.role}
                                            </div>
                                        )}
                                    </div>

                                    {/* Action Links */}
                                    <div className="flex items-center gap-3">
                                        {project.demoUrl && (
                                            <motion.a
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium text-sm hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                <span>Live Demo</span>
                                            </motion.a>
                                        )}
                                        {project.githubUrl && (
                                            <motion.a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-white/20 text-gray-300 rounded-lg font-medium text-sm hover:border-purple-500/50 hover:text-purple-400 hover:bg-purple-500/10 transition-all"
                                            >
                                                <Github className="w-4 h-4" />
                                                <span>Source</span>
                                            </motion.a>
                                        )}
                                    </div>
                                </div>

                                {/* Bottom Status Bar */}
                                <div className="relative z-10 px-5 sm:px-6 md:px-8 py-2.5 border-t border-white/10 bg-black/50">
                                    <div className="flex items-center justify-between">
                                        <span className="font-mono text-[9px] sm:text-[10px] text-gray-600 uppercase tracking-wider">
                                            Project #{String(index + 1).padStart(2, '0')}
                                        </span>
                                        <div className="flex items-center gap-1.5">
                                            <motion.div
                                                className="w-1 h-1 rounded-full bg-purple-500"
                                                animate={{ opacity: [1, 0.3, 1] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            />
                                            <span className="font-mono text-[9px] sm:text-[10px] text-gray-600 uppercase">
                                                Featured
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Shine effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-shine" />
                                </div>
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
                        <span className="text-purple-400">./view_all_projects.sh</span>
                        <span className="hidden sm:inline">--filter=featured</span>
                        <span className="hidden sm:inline text-gray-700">|</span>
                        <span className="hidden sm:inline text-pink-400">sort</span>
                        <span className="hidden sm:inline">-by date</span>
                        <span className="hidden md:inline text-gray-700">|</span>
                        <span className="hidden md:inline text-orange-400">display</span>
                        <motion.span
                            className="text-purple-400"
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
