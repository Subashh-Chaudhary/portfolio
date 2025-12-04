'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/data/personal'
import { staggerContainer, staggerItem } from '@/lib/animations/framer/variants'
import { useState, useEffect } from 'react'
import { Mail, MessageSquare, Clock, Zap } from 'lucide-react'

// Glitch text effect component
const GlitchText = ({ text }: { text: string }) => {
    return (
        <span className="relative inline-block group/glitch">
            <span className="relative z-10">{text}</span>
            <span className="absolute top-0 left-0 -z-10 text-emerald-500 opacity-0 group-hover/glitch:opacity-70 group-hover/glitch:animate-glitch-1">
                {text}
            </span>
            <span className="absolute top-0 left-0 -z-10 text-lime-500 opacity-0 group-hover/glitch:opacity-70 group-hover/glitch:animate-glitch-2">
                {text}
            </span>
        </span>
    )
}

export function ContactHeroSection() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: (e.clientY / window.innerHeight) * 2 - 1,
            })
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <motion.section
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-black overflow-hidden"
        >
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 z-0 opacity-30">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-green-500/10 to-lime-500/10 animate-gradient-shift" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
                        initial={{
                            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                        }}
                        animate={{
                            y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)],
                            x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            {/* Background Grid & Data Lines */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent animate-pulse" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime-500 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-emerald-500 to-transparent" />
                <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-lime-500 to-transparent" />

                {/* Animated Crosshairs */}
                <motion.div
                    className="absolute top-10 left-10 w-4 h-4 border-t border-l border-emerald-400"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                    className="absolute top-10 right-10 w-4 h-4 border-t border-r border-green-400"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div
                    className="absolute bottom-10 left-10 w-4 h-4 border-b border-l border-green-400"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                <motion.div
                    className="absolute bottom-10 right-10 w-4 h-4 border-b border-r border-lime-400"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                />
            </div>

            {/* HUD Elements */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-20 font-mono text-[10px] md:text-xs text-emerald-400/60 hidden md:block">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span>MODULE: CONTACT_INTERFACE</span>
                </div>
                <div>STATUS: AVAILABLE</div>
                <div>RESPONSE: 24H</div>
            </div>

            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-20 font-mono text-[10px] md:text-xs text-lime-400/60 hidden md:block text-right">
                <div>COORD: {mousePosition.x.toFixed(2)}, {mousePosition.y.toFixed(2)}</div>
                <div>RENDER: CONTACT_ENGINE_V1</div>
                <div className="flex items-center justify-end gap-2">
                    <span>MODE: INTERACTIVE</span>
                    <MessageSquare className="w-3 h-3 animate-pulse" />
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
                <motion.div variants={staggerItem}>
                    {/* Role Tag */}
                    <motion.div
                        className="flex items-center gap-3 mb-6 sm:mb-8"
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <motion.div
                            className="h-px w-12 sm:w-16 md:w-20 bg-gradient-to-r from-emerald-500 to-green-500"
                            animate={{ scaleX: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="font-mono text-emerald-400 text-[10px] sm:text-xs md:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase flex items-center gap-2">
                            <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                            LET'S_CONNECT
                        </span>
                    </motion.div>

                    {/* Main Title with Glitch Effect */}
                    <motion.h1
                        variants={staggerItem}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black tracking-tighter text-white mb-6 sm:mb-8 md:mb-10"
                    >
                        <span className="text-gray-400 bg-clip-text bg-gradient-to-r from-white via-emerald-200 to-gray-500">
                            <GlitchText text="GET IN" />
                        </span>
                        <br />
                        <span className="relative inline-block hover:text-emerald-500 transition-colors duration-300">
                            <GlitchText text="TOUCH" />
                            <motion.span
                                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-emerald-500 to-green-500"
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            />
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.div
                        variants={staggerItem}
                        className="mb-8 sm:mb-10 md:mb-12 relative"
                    >
                        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-emerald-500 via-green-500 to-lime-500 rounded-full" />
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 font-light pl-4 sm:pl-6 md:pl-8 leading-relaxed max-w-3xl">
                            Have a project in mind or just want to chat? I'm always open to discussing new opportunities, creative ideas, or potential collaborations.
                        </p>
                    </motion.div>

                    {/* Stats Cards */}
                    <motion.div
                        variants={staggerItem}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
                    >
                        {[
                            { icon: Clock, label: 'Response Time', value: '24', gradient: 'from-emerald-500 to-green-500', suffix: 'hrs' },
                            { icon: MessageSquare, label: 'Availability', value: '100', gradient: 'from-green-500 to-lime-500', suffix: '%' },
                            { icon: Mail, label: 'Open to', value: 'All', gradient: 'from-lime-500 to-emerald-500', suffix: '' }
                        ].map((stat, idx) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="group relative bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-transparent transition-all duration-300 p-4 sm:p-5 md:p-6 overflow-hidden"
                            >
                                {/* Gradient Border on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />

                                {/* Animated Corner Accents */}
                                <div className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                                <div className={`absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                                <div className={`absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                                <div className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />

                                <div className="relative z-10">
                                    <stat.icon className={`w-5 h-5 sm:w-6 sm:h-6 mb-3 text-gray-400 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${stat.gradient} transition-all duration-300`} />
                                    <div className="font-mono text-[10px] sm:text-xs text-gray-500 uppercase mb-1">{stat.label}</div>
                                    <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
                                        {stat.value}{stat.suffix && <span className="text-lg sm:text-xl md:text-2xl ml-1">{stat.suffix}</span>}
                                    </div>
                                </div>

                                {/* Shine effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-shine" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            <style jsx>{`
                @keyframes gradient-shift {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(10%, 10%); }
                }
                @keyframes glitch-1 {
                    0%, 100% { transform: translate(0); }
                    33% { transform: translate(-2px, 2px); }
                    66% { transform: translate(2px, -2px); }
                }
                @keyframes glitch-2 {
                    0%, 100% { transform: translate(0); }
                    33% { transform: translate(2px, -2px); }
                    66% { transform: translate(-2px, 2px); }
                }
                @keyframes shine {
                    0% { transform: translateX(-100%) skewX(-12deg); }
                    100% { transform: translateX(200%) skewX(-12deg); }
                }
            `}</style>
        </motion.section>
    )
}
