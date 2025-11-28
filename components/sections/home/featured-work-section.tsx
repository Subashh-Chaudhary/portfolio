'use client'

import { motion } from 'framer-motion'
import { featuredProjects } from '@/data/projects'
import { ProjectCard } from '@/components/cards/project-card'
import Link from 'next/link'
import { fadeInUp } from '@/lib/animations/framer/variants'

export function FeaturedWorkSection() {
    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A selection of my recent work showcasing my skills in full-stack development
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <Link
                        href="/work"
                        className="inline-block px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                        View All Projects →
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
