'use client'

import { motion } from 'framer-motion'
import { PageWrapper } from '@/components/layout/page-wrapper'
import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/cards/project-card'
import { fadeInUp } from '@/lib/animations/framer/variants'

export default function WorkPage() {
    return (
        <PageWrapper>
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                <h1 className="text-5xl font-bold mb-4">My Projects</h1>
                <p className="text-xl text-muted-foreground mb-12">
                    A collection of projects I've worked on, showcasing my skills and experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </motion.div>
        </PageWrapper>
    )
}
