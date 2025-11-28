'use client'

import { motion } from 'framer-motion'
import { skillGroups } from '@/data/skills'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations/framer/variants'

export function SkillsShowcaseSection() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Technologies I work with to build modern web applications
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillGroups.slice(0, 3).map((group, groupIndex) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: groupIndex * 0.1 }}
                            className="bg-card border border-border rounded-lg p-6"
                        >
                            <h3 className="text-xl font-semibold mb-4">{group.title}</h3>
                            <ul className="space-y-3">
                                {group.skills.slice(0, 5).map((skill) => (
                                    <li key={skill.id} className="flex items-center justify-between">
                                        <span className="text-sm font-medium">{skill.name}</span>
                                        <div className="flex items-center gap-2">
                                            <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.proficiency}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: groupIndex * 0.1 + 0.3, duration: 0.8 }}
                                                    className="h-full bg-primary"
                                                />
                                            </div>
                                            <span className="text-xs text-muted-foreground w-8 text-right">
                                                {skill.proficiency}%
                                            </span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
