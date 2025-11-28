'use client'

import { motion } from 'framer-motion'
import { Experience } from '@/types'
import { formatDate, calculateDuration } from '@/lib/utils/format-date'
import { MapPin, Briefcase } from 'lucide-react'

interface ExperienceCardProps {
    experience: Experience
    index: number
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 pb-12 last:pb-0 border-l-2 border-border"
        >
            {/* Timeline dot */}
            <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary border-4 border-background" />

            {/* Content */}
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-2">
                    <div>
                        <h3 className="text-xl font-semibold">{experience.position}</h3>
                        <p className="text-lg text-primary font-medium">{experience.company}</p>
                    </div>
                    {experience.current && (
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                            Current
                        </span>
                    )}
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        <span>
                            {formatDate(experience.startDate)} -{' '}
                            {experience.current ? 'Present' : formatDate(experience.endDate!)}
                        </span>
                    </div>
                    <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>
                            {experience.location} • {experience.locationType}
                        </span>
                    </div>
                    <span className="text-primary font-medium">
                        {calculateDuration(experience.startDate, experience.endDate)}
                    </span>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{experience.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Achievements */}
                {experience.achievements.length > 0 && (
                    <div className="mt-4">
                        <h4 className="text-sm font-semibold mb-2">Key Achievements:</h4>
                        <ul className="list-disc list-inside space-y-1">
                            {experience.achievements.slice(0, 3).map((achievement, idx) => (
                                <li key={idx} className="text-sm text-muted-foreground">
                                    {achievement}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </motion.div>
    )
}
