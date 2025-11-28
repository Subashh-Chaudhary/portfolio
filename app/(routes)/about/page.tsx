'use client'

import { motion } from 'framer-motion'
import { PageWrapper } from '@/components/layout/page-wrapper'
import { personalInfo } from '@/data/personal'
import { education } from '@/data/education'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations/framer/variants'

export default function AboutPage() {
    return (
        <PageWrapper>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="max-w-4xl mx-auto"
            >
                <motion.h1 variants={staggerItem} className="text-5xl font-bold mb-6">
                    About Me
                </motion.h1>

                <motion.div variants={staggerItem} className="prose prose-lg dark:prose-invert mb-12">
                    <p className="text-xl text-muted-foreground leading-relaxed">{personalInfo.bio}</p>
                </motion.div>

                {/* Education */}
                <motion.section variants={staggerItem} className="mb-16">
                    <h2 className="text-3xl font-bold mb-8">Education</h2>
                    <div className="space-y-6">
                        {education.map((edu) => (
                            <motion.div
                                key={edu.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-card border border-border rounded-lg p-6"
                            >
                                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                                <p className="text-lg text-primary font-medium">{edu.institution}</p>
                                <p className="text-sm text-muted-foreground mt-2">
                                    {edu.field} • {edu.startDate.split('-')[0]} -{' '}
                                    {edu.current ? 'Present' : edu.endDate?.split('-')[0]}
                                </p>
                                {edu.grade && (
                                    <p className="text-sm font-medium mt-2">Grade: {edu.grade}</p>
                                )}
                                {edu.description && (
                                    <p className="text-sm text-muted-foreground mt-4">{edu.description}</p>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Interests */}
                <motion.section variants={staggerItem}>
                    <h2 className="text-3xl font-bold mb-8">Interests & Hobbies</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['Open Source', 'Web Design', 'Photography', 'Gaming'].map((interest, idx) => (
                            <motion.div
                                key={interest}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-secondary rounded-lg p-4 text-center"
                            >
                                <span className="font-medium">{interest}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            </motion.div>
        </PageWrapper>
    )
}
