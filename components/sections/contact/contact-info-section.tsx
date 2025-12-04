'use client'

import { motion } from 'framer-motion'
import { personalInfo, socialLinks } from '@/data/personal'
import { Mail, MapPin, Copy, Check, ExternalLink, Github, Linkedin, Twitter, Globe } from 'lucide-react'
import { useState } from 'react'

const iconMap = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    dev: Globe,
}

export function ContactInfoSection() {
    const [copiedEmail, setCopiedEmail] = useState(false)

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(personalInfo.email)
            setCopiedEmail(true)
            setTimeout(() => setCopiedEmail(false), 2000)
        } catch (err) {
            console.error('Failed to copy email:', err)
        }
    }

    return (
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-black overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-green-500/10 to-lime-500/10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
            </div>

            {/* Background Grid & Data Lines */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime-500 to-transparent" />
            </div>

            <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 sm:mb-10 md:mb-12 lg:mb-16"
                >
                    {/* Title Tag */}
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                        <motion.div
                            className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-r from-emerald-500 to-green-500"
                            animate={{ scaleX: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="font-mono text-emerald-400 text-[10px] sm:text-xs md:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase flex items-center gap-2">
                            <Mail className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
                            CONTACT_METHODS
                        </span>
                    </div>

                    {/* Main Title */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tighter text-white mb-4 sm:mb-5 md:mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-200 to-gray-500">
                            REACH
                        </span>
                        <br />
                        <span className="relative inline-block hover:text-emerald-500 transition-colors duration-300">
                            OUT
                            <motion.span
                                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-emerald-500 to-green-500"
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            />
                        </span>
                    </h2>

                    <div className="relative pl-4">
                        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-emerald-500 via-green-500 to-lime-500 rounded-full" />
                        <p className="text-gray-300 max-w-2xl font-light text-sm sm:text-base md:text-lg">
                            Choose your preferred method to connect. I'm available via email, social media, or direct message.
                        </p>
                    </div>
                </motion.div>

                {/* Contact Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-10 md:mb-12">
                    {/* Email Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ y: -5, scale: 1.01 }}
                        className="group relative bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-transparent transition-all duration-300 overflow-hidden"
                    >
                        {/* Gradient Border on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-green-500/20 to-lime-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Animated Corner Accents */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-lime-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="relative z-10 p-6 sm:p-8 md:p-10">
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-3 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-lg group-hover:from-emerald-500/30 group-hover:to-green-500/30 transition-all">
                                    <Mail className="w-8 h-8 text-emerald-400" />
                                </div>
                                <div className="px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-lg">
                                    <span className="font-mono text-xs text-green-400 uppercase">Primary</span>
                                </div>
                            </div>

                            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-green-400 transition-all mb-2">
                                Email Address
                            </h3>
                            <p className="text-sm text-gray-400 mb-6">
                                Best way to reach me for professional inquiries
                            </p>

                            <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
                                <p className="font-mono text-emerald-400 text-sm sm:text-base break-all">
                                    {personalInfo.email}
                                </p>
                            </div>

                            <div className="flex gap-3">
                                <motion.button
                                    onClick={handleCopyEmail}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-lg font-medium text-sm hover:from-emerald-600 hover:to-green-600 transition-all shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40"
                                >
                                    {copiedEmail ? (
                                        <>
                                            <Check className="w-4 h-4" />
                                            <span>Copied!</span>
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="w-4 h-4" />
                                            <span>Copy Email</span>
                                        </>
                                    )}
                                </motion.button>
                                <motion.a
                                    href={`mailto:${personalInfo.email}`}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-white/20 text-gray-300 rounded-lg font-medium text-sm hover:border-emerald-500/50 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    <span>Send Mail</span>
                                </motion.a>
                            </div>
                        </div>

                        {/* Shine effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-shine" />
                        </div>
                    </motion.div>

                    {/* Location Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        whileHover={{ y: -5, scale: 1.01 }}
                        className="group relative bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-transparent transition-all duration-300 overflow-hidden"
                    >
                        {/* Gradient Border on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-green-500/20 to-lime-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Animated Corner Accents */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-lime-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="relative z-10 p-6 sm:p-8 md:p-10">
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-3 bg-gradient-to-br from-green-500/20 to-lime-500/20 rounded-lg group-hover:from-green-500/30 group-hover:to-lime-500/30 transition-all">
                                    <MapPin className="w-8 h-8 text-green-400" />
                                </div>
                            </div>

                            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-lime-400 transition-all mb-2">
                                Location
                            </h3>
                            <p className="text-sm text-gray-400 mb-6">
                                Based in beautiful Nepal, working globally
                            </p>

                            <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
                                <p className="font-mono text-green-400 text-sm sm:text-base">
                                    {personalInfo.location}
                                </p>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm text-gray-400">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span>Available for remote work</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-400">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                    <span>Open to relocation</span>
                                </div>
                            </div>
                        </div>

                        {/* Shine effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-shine" />
                        </div>
                    </motion.div>
                </div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="border-t border-white/10 pt-8 sm:pt-10 md:pt-12"
                >
                    <div className="mb-6">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Connect on Social Media</h3>
                        <p className="text-sm text-gray-400">Follow me on these platforms for updates and insights</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {socialLinks.map((link, idx) => {
                            const Icon = iconMap[link.platform as keyof typeof iconMap]
                            if (!Icon) return null

                            return (
                                <motion.a
                                    key={link.id}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ y: -5, scale: 1.05 }}
                                    className="group relative bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-transparent p-6 transition-all duration-300 overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="relative z-10 flex flex-col items-center gap-3">
                                        <Icon className="w-8 h-8 text-gray-400 group-hover:text-emerald-400 transition-colors" />
                                        <span className="font-mono text-xs text-gray-500 group-hover:text-emerald-400 uppercase transition-colors">
                                            {link.platform}
                                        </span>
                                    </div>

                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-shine" />
                                    </div>
                                </motion.a>
                            )
                        })}
                    </div>
                </motion.div>

                {/* Terminal Command Line */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 pt-4 sm:pt-6 md:pt-8 border-t border-white/10"
                >
                    <div className="font-mono text-[10px] sm:text-xs text-gray-600 flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <span className="text-green-500">$</span>
                        <span className="text-emerald-400">./send_message.sh</span>
                        <span className="hidden sm:inline">--to=subash</span>
                        <span className="hidden sm:inline text-gray-700">|</span>
                        <span className="hidden sm:inline text-green-400">await</span>
                        <span className="hidden sm:inline">response</span>
                        <motion.span
                            className="text-emerald-400"
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            _
                        </motion.span>
                    </div>
                </motion.div>
            </div>

            <style jsx>{`
                @keyframes shine {
                    0% { transform: translateX(-100%) skewX(-12deg); }
                    100% { transform: translateX(200%) skewX(-12deg); }
                }
            `}</style>
        </section>
    )
}
