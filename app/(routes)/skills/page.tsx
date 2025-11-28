'use client'

import { motion } from 'framer-motion'
import { PageWrapper } from '@/components/layout/page-wrapper'
import { skillGroups } from '@/data/skills'
import { certifications } from '@/data/education'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations/framer/variants'
import { Award } from 'lucide-react'

export default function SkillsPage() {
    return (
        <PageWrapper>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="max-w-6xl mx-auto"
            >
                <motion.h1 variants={staggerItem} className="text-5xl font-bold mb-4">
                    Skills & Certifications
                </motion.h1>
                <motion.p variants={staggerItem} className="text-xl text-muted-foreground mb-12">
                    My technical skillset and professional certifications.
                </motion.p>

                {/* Skills by Category */}
                <motion.section variants={staggerItem} className="mb-16">
                    <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {skillGroups.map((group, groupIndex) => (
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
                                    {group.skills.map((skill) => (
                                        <li key={skill.id} className="flex items-center justify-between">
                                            <span className="text-sm font-medium">{skill.name}</span>
                                            <div className="flex items-center gap-2">
                                                <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
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
                </motion.section>

                {/* Certifications */}
                <motion.section variants={staggerItem}>
                    <h2 className="text-3xl font-bold mb-8">Certifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certifications.map((cert, idx) => (
                            <motion.div
                                key={cert.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-card border border-border rounded-lg p-6"
                            >
                                <Award className="w-10 h-10 text-primary mb-4" />
                                <h3 className="font-semibold mb-2">{cert.name}</h3>
                                <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                                <p className="text-xs text-muted-foreground">
                                    Issued: {new Date(cert.issueDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                                </p>
                                {cert.credentialUrl && (
                                    <a
                                        href={cert.credentialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-primary hover:underline mt-2 inline-block"
                                    >
                                        View Credential →
                                    </a>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            </motion.div>
        </PageWrapper>
    )
}
