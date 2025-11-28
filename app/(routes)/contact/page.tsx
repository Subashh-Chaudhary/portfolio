'use client'

import { motion } from 'framer-motion'
import { PageWrapper } from '@/components/layout/page-wrapper'
import { personalInfo, socialLinks } from '@/data/personal'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations/framer/variants'
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react'

const iconMap = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
}

export default function ContactPage() {
    return (
        <PageWrapper>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="max-w-4xl mx-auto"
            >
                <motion.h1 variants={staggerItem} className="text-5xl font-bold mb-4">
                    Get in Touch
                </motion.h1>
                <motion.p variants={staggerItem} className="text-xl text-muted-foreground mb-12">
                    I'd love to hear from you. Let's create something amazing together.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div variants={staggerItem}>
                        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <Mail className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <h3 className="font-semibold mb-1">Email</h3>
                                    <a
                                        href={`mailto:${personalInfo.email}`}
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {personalInfo.email}
                                    </a>
                                </div>
                            </div>

                            {personalInfo.phone && (
                                <div className="flex items-start gap-4">
                                    <Phone className="w-6 h-6 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Phone</h3>
                                        <a
                                            href={`tel:${personalInfo.phone}`}
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            {personalInfo.phone}
                                        </a>
                                    </div>
                                </div>
                            )}

                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <h3 className="font-semibold mb-1">Location</h3>
                                    <p className="text-muted-foreground">{personalInfo.location}</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-8">
                            <h3 className="font-semibold mb-4">Connect with me</h3>
                            <div className="flex gap-4">
                                {socialLinks.slice(0, 3).map((link) => {
                                    const Icon = iconMap[link.platform as keyof typeof iconMap]
                                    return Icon ? (
                                        <a
                                            key={link.id}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                                        >
                                            <Icon className="w-6 h-6" />
                                        </a>
                                    ) : null
                                })}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form Placeholder */}
                    <motion.div variants={staggerItem}>
                        <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={6}
                                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </motion.div>
        </PageWrapper>
    )
}
