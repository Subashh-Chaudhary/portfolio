'use client'

import { motion } from 'framer-motion'
import { Project } from '@/types'
import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
    project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="group relative bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
        >
            {/* Thumbnail */}
            <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center">
                    <span className="text-4xl font-bold text-muted-foreground/20">
                        {project.title[0]}
                    </span>
                </div>
                {project.featured && (
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                    <div className="flex gap-2">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                        )}
                        {project.demoUrl && (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <ExternalLink className="w-5 h-5" />
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* View Details Link */}
                <Link
                    href={`/work/${project.slug}`}
                    className="text-sm font-medium text-primary hover:underline"
                >
                    View Details →
                </Link>
            </div>
        </motion.div>
    )
}
