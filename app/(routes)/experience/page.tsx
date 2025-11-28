'use client'

import { motion } from 'framer-motion'
import { PageWrapper } from '@/components/layout/page-wrapper'
import { experiences } from '@/data/experience'
import { ExperienceCard } from '@/components/cards/experience-card'
import { fadeInUp } from '@/lib/animations/framer/variants'

export default function ExperiencePage() {
    return (
        <PageWrapper>
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                <h1 className="text-5xl font-bold mb-4">Work Experience</h1>
                <p className="text-xl text-muted-foreground mb-12">
                    My professional journey and the companies I've worked with.
                </p>

                <div className="max-w-3xl">
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={experience.id} experience={experience} index={index} />
                    ))}
                </div>
            </motion.div>
        </PageWrapper>
    )
}
