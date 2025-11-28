'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { fadeInUp } from '@/lib/animations/framer/variants'

export function CTASection() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-12 md:p-16 text-center text-white"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
                    <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                        Have a project in mind? I'm always open to discussing new opportunities and ideas.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-white text-primary rounded-lg font-medium hover:bg-opacity-90 transition-opacity"
                        >
                            Get in Touch
                        </Link>
                        <a
                            href="/resume.pdf"
                            download
                            className="px-8 py-4 border-2 border-white rounded-lg font-medium hover:bg-white hover:text-primary transition-colors"
                        >
                            Download Resume
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
