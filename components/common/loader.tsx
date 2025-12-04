'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Terminal, Cpu, Zap } from 'lucide-react'

// Glitch text effect
const GlitchText = ({ text }: { text: string }) => {
    const [display, setDisplay] = useState(text)
    const chars = '01'

    useEffect(() => {
        const interval = setInterval(() => {
            setDisplay(
                text
                    .split('')
                    .map((letter, index) => {
                        if (Math.random() > 0.9) {
                            return chars[Math.floor(Math.random() * chars.length)]
                        }
                        return letter
                    })
                    .join('')
            )
        }, 100)
        return () => clearInterval(interval)
    }, [text])

    return <span className="font-mono">{display}</span>
}

export function Loader() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) return 100
                return prev + Math.random() * 15
            })
        }, 200)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flex items-center justify-center min-h-screen bg-black overflow-hidden relative">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 z-0 opacity-30">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 animate-gradient-shift" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]" />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
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

            {/* Background Grid Lines */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
                <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-pink-500 to-transparent" />

                {/* Animated Crosshairs */}
                <motion.div
                    className="absolute top-10 left-10 w-4 h-4 border-t border-l border-purple-400"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                    className="absolute top-10 right-10 w-4 h-4 border-t border-r border-pink-400"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div
                    className="absolute bottom-10 left-10 w-4 h-4 border-b border-l border-pink-400"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                <motion.div
                    className="absolute bottom-10 right-10 w-4 h-4 border-b border-r border-blue-400"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                />
            </div>

            {/* HUD Elements */}
            <div className="absolute top-8 left-8 z-20 font-mono text-xs text-purple-400/60 hidden md:block">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span>SYS.STATUS: <GlitchText text="INITIALIZING" /></span>
                </div>
                <div>BOOT.SEQ: ACTIVE</div>
                <div>LOAD.PROGRESS: {Math.round(progress)}%</div>
            </div>

            <div className="absolute top-8 right-8 z-20 font-mono text-xs text-pink-400/60 hidden md:block text-right">
                <div>RENDER: CYBER_ENGINE_V1</div>
                <div>MODE: LOADING</div>
                <div className="flex items-center justify-end gap-2">
                    <span>CORE: ONLINE</span>
                    <Zap className="w-3 h-3 animate-pulse" />
                </div>
            </div>

            {/* Main Loader */}
            <div className="relative z-10">
                {/* Outer Rotating Rings */}
                <motion.div
                    className="absolute inset-0 w-48 h-48 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                    <div className="absolute inset-0 border-2 border-purple-500/30 rounded-full" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-purple-500 rounded-full" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-pink-500 rounded-full" />
                </motion.div>

                <motion.div
                    className="absolute inset-0 w-40 h-40 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                >
                    <div className="absolute inset-0 border-2 border-pink-500/30 rounded-full border-dashed" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full" />
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-purple-500 rounded-full" />
                </motion.div>

                {/* Central Hexagon */}
                <motion.div
                    className="relative w-32 h-32"
                    animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    {/* Hexagon Shape */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                            <motion.polygon
                                points="50 1 95 25 95 75 50 99 5 75 5 25"
                                fill="none"
                                stroke="url(#gradient)"
                                strokeWidth="2"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#a855f7" />
                                    <stop offset="50%" stopColor="#ec4899" />
                                    <stop offset="100%" stopColor="#3b82f6" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    {/* Inner Spinning Core */}
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                        <div className="w-16 h-16 border-4 border-transparent border-t-purple-500 border-r-pink-500 rounded-full" />
                    </motion.div>

                    {/* Center Icons */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 1, 0.5]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Cpu className="w-8 h-8 text-purple-400" />
                        </motion.div>
                    </div>

                    {/* Corner Accents */}
                    <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-purple-500" />
                    <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-pink-500" />
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-pink-500" />
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-blue-500" />
                </motion.div>

                {/* Orbiting Particles */}
                {[0, 120, 240].map((angle, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        style={{
                            left: '50%',
                            top: '50%',
                        }}
                        animate={{
                            x: [
                                Math.cos((angle * Math.PI) / 180) * 60,
                                Math.cos(((angle + 360) * Math.PI) / 180) * 60,
                            ],
                            y: [
                                Math.sin((angle * Math.PI) / 180) * 60,
                                Math.sin(((angle + 360) * Math.PI) / 180) * 60,
                            ],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 0.3,
                        }}
                    />
                ))}
            </div>

            {/* Loading Text */}
            <motion.div
                className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                <div className="font-mono text-sm text-purple-400 tracking-widest uppercase flex items-center gap-3">
                    <Terminal className="w-4 h-4 animate-pulse" />
                    <GlitchText text="LOADING PORTFOLIO" />
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        ...
                    </motion.span>
                </div>
            </motion.div>

            {/* Progress Bar */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-64 z-20">
                <div className="relative h-1 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.div
                        className="absolute inset-y-0 left-0 bg-white/30"
                        style={{ width: `${progress}%` }}
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    />
                </div>
                <div className="flex justify-between mt-2 font-mono text-xs text-gray-500">
                    <span>0%</span>
                    <span className="text-purple-400">{Math.round(progress)}%</span>
                    <span>100%</span>
                </div>
            </div>

            <style jsx>{`
                @keyframes gradient-shift {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(10%, 10%); }
                }
            `}</style>
        </div>
    )
}
