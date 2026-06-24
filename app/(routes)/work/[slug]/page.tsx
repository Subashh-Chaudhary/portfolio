'use client'

import React from 'react'
import { getProjectBySlug } from '@/data/projects'
import { PageWrapper } from '@/components/layout/page-wrapper'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github, Calendar, ShieldCheck, Tag, Zap, Cpu, Award } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'

interface PageProps {
    params: {
        slug: string
    }
}

export default function ProjectDetailsPage({ params }: PageProps) {
    const project = getProjectBySlug(params.slug)

    if (!project) {
        notFound()
    }

    return (
        <PageWrapper>
            <div className="relative min-h-screen bg-black text-white overflow-hidden py-24 sm:py-28 md:py-32">
                {/* Background Grid & Data Lines */}
                <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
                    <div className="absolute left-1/3 top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent" />
                    <div className="absolute right-1/3 top-0 w-px h-full bg-gradient-to-b from-transparent via-pink-500/30 to-transparent" />

                    {/* Corner Crosshairs */}
                    <div className="absolute top-10 left-10 w-4 h-4 border-t border-l border-white/30" />
                    <div className="absolute top-10 right-10 w-4 h-4 border-t border-r border-white/30" />
                    <div className="absolute bottom-10 left-10 w-4 h-4 border-b border-l border-white/30" />
                    <div className="absolute bottom-10 right-10 w-4 h-4 border-b border-r border-white/30" />
                </div>

                {/* HUD Elements */}
                <div className="absolute top-8 left-8 z-20 font-mono text-[10px] text-purple-400/60 hidden md:block">
                    <div>PROJECT.ID: {project.id}</div>
                    <div>CLASS: {project.category.toUpperCase()}</div>
                </div>

                <div className="absolute top-8 right-8 z-20 font-mono text-[10px] text-pink-400/60 hidden md:block text-right">
                    <div>STATUS: COMPLETED</div>
                    <div>ROLE: {project.role.toUpperCase()}</div>
                </div>

                <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-7xl mx-auto">
                    {/* Back Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mb-8"
                    >
                        <Link
                            href="/work"
                            className="inline-flex items-center gap-2 font-mono text-xs text-gray-400 hover:text-white transition-colors group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span>./back_to_projects.sh</span>
                        </Link>
                    </motion.div>

                    {/* Project Header Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-12"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <Cpu className="w-4 h-4 text-purple-400 animate-pulse" />
                            <span className="font-mono text-xs text-purple-400 uppercase tracking-widest">
                                {project.category} PROJECT
                            </span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-gray-500">
                                {project.title}
                            </span>
                        </h1>
                        <p className="text-gray-400 text-lg sm:text-xl font-light max-w-4xl border-l-2 border-purple-500/30 pl-6 leading-relaxed">
                            {project.description}
                        </p>
                    </motion.div>

                    {/* Banner Image */}
                    {project.thumbnail && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative h-64 sm:h-80 md:h-96 lg:h-[450px] w-full rounded-lg overflow-hidden border border-white/10 mb-12 bg-gradient-to-br from-purple-900/20 to-black"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                            <Image
                                src={project.thumbnail}
                                alt={project.title}
                                fill
                                className="object-cover opacity-80"
                                priority
                            />
                        </motion.div>
                    )}

                    {/* Metadata & Actions grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 mb-12">
                        {/* Summary & Tags */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="lg:col-span-2 space-y-6"
                        >
                            <div className="bg-white/[0.02] border border-white/10 rounded-lg p-6 sm:p-8">
                                <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-tight flex items-center gap-2">
                                    <Award className="w-5 h-5 text-purple-400" />
                                    Project Overview
                                </h3>
                                <p className="text-gray-300 font-light text-sm sm:text-base leading-relaxed whitespace-pre-line">
                                    {project.longDescription}
                                </p>
                            </div>

                            <div className="bg-white/[0.02] border border-white/10 rounded-lg p-6 sm:p-8">
                                <div className="font-mono text-xs text-purple-400 uppercase mb-4 flex items-center gap-2">
                                    <Tag className="w-4 h-4" />
                                    Technology Stack
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-lg text-xs font-mono text-purple-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Metas Column */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="space-y-6"
                        >
                            <div className="bg-white/[0.02] border border-white/10 rounded-lg p-6 space-y-6">
                                <h4 className="font-mono text-xs text-gray-400 uppercase border-b border-white/10 pb-3 flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-pink-400 animate-pulse" />
                                    Specifications
                                </h4>

                                <div className="space-y-4">
                                    <div>
                                        <span className="block font-mono text-[10px] text-gray-500 uppercase">Role</span>
                                        <span className="text-sm font-semibold text-gray-200">{project.role}</span>
                                    </div>

                                    {project.completedAt && (
                                        <div className="flex items-center gap-3">
                                            <Calendar className="w-4 h-4 text-gray-500" />
                                            <div>
                                                <span className="block font-mono text-[10px] text-gray-500 uppercase">Completed</span>
                                                <span className="text-sm font-semibold text-gray-200">
                                                    {new Date(project.completedAt).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'long'
                                                    })}
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                    <div>
                                        <span className="block font-mono text-[10px] text-gray-500 uppercase">Deployment status</span>
                                        <div className="flex items-center gap-2 mt-1">
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                            <span className="text-xs text-green-400 font-mono">ONLINE</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3 pt-4 border-t border-white/10">
                                    {project.demoUrl && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium text-sm hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg shadow-purple-500/20"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            <span>Initialize Live Demo</span>
                                        </a>
                                    )}

                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-white/20 text-gray-300 rounded-lg font-medium text-sm hover:border-purple-500/50 hover:text-purple-400 hover:bg-purple-500/10 transition-all"
                                        >
                                            <Github className="w-4 h-4" />
                                            <span>Check Source Code</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Challenges and Outcomes Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
                        {/* Challenges */}
                        {project.challenges && project.challenges.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-white/[0.02] border border-white/10 rounded-lg p-6 sm:p-8"
                            >
                                <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2.5">
                                    <ShieldCheck className="w-5 h-5 text-red-400" />
                                    Core Challenges
                                </h3>
                                <ul className="space-y-4">
                                    {project.challenges.map((challenge, idx) => (
                                        <li key={idx} className="flex gap-3 text-sm text-gray-300 leading-relaxed font-light">
                                            <span className="font-mono text-red-400 mt-0.5">[{idx + 1}]</span>
                                            <span>{challenge}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}

                        {/* Outcomes */}
                        {project.outcomes && project.outcomes.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="bg-white/[0.02] border border-white/10 rounded-lg p-6 sm:p-8"
                            >
                                <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2.5">
                                    <ShieldCheck className="w-5 h-5 text-green-400" />
                                    Key Outcomes & Outcomes
                                </h3>
                                <ul className="space-y-4">
                                    {project.outcomes.map((outcome, idx) => (
                                        <li key={idx} className="flex gap-3 text-sm text-gray-300 leading-relaxed font-light">
                                            <span className="font-mono text-green-400 mt-0.5">✓</span>
                                            <span>{outcome}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}
