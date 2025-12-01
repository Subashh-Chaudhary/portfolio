'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/data/personal'
import { ArrowRight, Terminal, Cpu, Network, Code2 } from 'lucide-react'
import { staggerContainer, staggerItem } from '@/lib/animations/framer/variants'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'

// Dynamically import the voxel portrait to avoid SSR issues
const HeroVoxelPortrait = dynamic(
    () => import('@/components/three/HeroVoxelPortrait').then(mod => mod.HeroVoxelPortrait),
    { ssr: false }
)

// Scramble text effect component
const ScrambleText = ({ text }: { text: string }) => {
    const [display, setDisplay] = useState(text)
    const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?'

    const scramble = () => {
        let iterations = 0
        const interval = setInterval(() => {
            setDisplay(
                text
                    .split('')
                    .map((letter, index) => {
                        if (index < iterations) return text[index]
                        return chars[Math.floor(Math.random() * chars.length)]
                    })
                    .join('')
            )
            if (iterations >= text.length) clearInterval(interval)
            iterations += 1 / 3
        }, 30)
    }

    return (
        <span onMouseEnter={scramble} className="cursor-default">
            {display}
        </span>
    )
}

export function HeroSection() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0, pixelX: 0, pixelY: 0 })
    const [isHoveringVoxels, setIsHoveringVoxels] = useState(false)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: (e.clientY / window.innerHeight) * 2 - 1,
                pixelX: e.clientX,
                pixelY: e.clientY,
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
            className="h-screen flex items-center justify-center relative overflow-hidden bg-black"
        >
            {/* Custom Tech Cursor */}
            {isHoveringVoxels && (
                <div
                    className="fixed pointer-events-none z-50 mix-blend-difference"
                    style={{
                        left: mousePosition.pixelX,
                        top: mousePosition.pixelY,
                        transform: 'translate(-50%, -50%)'
                    }}
                >
                    <div className="relative flex items-center justify-center w-12 h-12">
                        <div className="absolute w-full h-full border border-white/50 rounded-full animate-[spin_3s_linear_infinite]" />
                        <div className="absolute w-8 h-8 border border-blue-500/50 rounded-full animate-[spin_2s_linear_infinite_reverse]" />
                        <div className="w-1 h-1 bg-white rounded-full" />
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-0.5 h-2 bg-white/50" />
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 w-0.5 h-2 bg-white/50" />
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-2 h-0.5 bg-white/50" />
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-2 h-0.5 bg-white/50" />
                    </div>
                </div>
            )}

            {/* Background Grid & Data Lines */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
                <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent" />

                {/* Crosshairs */}
                <div className="absolute top-10 left-10 w-4 h-4 border-t border-l border-white/30" />
                <div className="absolute top-10 right-10 w-4 h-4 border-t border-r border-white/30" />
                <div className="absolute bottom-10 left-10 w-4 h-4 border-b border-l border-white/30" />
                <div className="absolute bottom-10 right-10 w-4 h-4 border-b border-r border-white/30" />
            </div>

            {/* Voxel Portrait - Full Screen Background */}
            <motion.div
                variants={staggerItem}
                className="absolute inset-0 z-0 pointer-events-auto ml-[15%] cursor-none"
                onMouseEnter={() => setIsHoveringVoxels(true)}
                onMouseLeave={() => setIsHoveringVoxels(false)}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-black z-10 pointer-events-none" />
                <div className="relative w-full h-full">
                    <HeroVoxelPortrait />
                </div>

            </motion.div>

            {/* HUD Elements */}
            <div className="absolute top-8 left-8 z-20 font-mono text-xs text-blue-400/60 hidden md:block">
                <div>SYS.STATUS: ONLINE</div>
                <div>SEC.LEVEL: UNRESTRICTED</div>
                <div>LOC: {personalInfo.location.toUpperCase()}</div>
            </div>

            <div className="absolute top-8 right-8 z-20 font-mono text-xs text-purple-400/60 hidden md:block text-right">
                <div>COORD: {mousePosition.x.toFixed(2)}, {mousePosition.y.toFixed(2)}</div>
                <div>RENDER: VOXEL_ENGINE_V1</div>
                <div>FPS: 60</div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full h-full mx-auto px-6 lg:px-8 flex flex-col justify-center pointer-events-none select-none">
                <div className="w-full pointer-events-auto">

                    {/* Role Tag */}
                    <motion.div
                        variants={staggerItem}
                        className="flex items-center gap-3 mb-6"
                    >
                        <div className="h-px w-12 bg-blue-500" />
                        <span className="font-mono text-blue-400 text-sm tracking-[0.2em]">
                            FULL_STACK_DEVELOPER
                        </span>
                    </motion.div>

                    {/* Massive Typography */}
                    <motion.div variants={staggerItem} className="relative">
                        <h1 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mix-blend-difference leading-[0.9]">
                            <div className="flex flex-col">
                                <span className="hover:text-blue-500 transition-colors duration-300">
                                    <ScrambleText text="SUBASH" />
                                </span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white hover:from-blue-400 hover:to-purple-400 transition-all duration-500">
                                    THARU
                                </span>
                            </div>
                        </h1>

                        {/* Floating Tech Icons */}
                        <div className="absolute right-72 top-0 flex flex-col gap-4 text-white/40 hidden lg:flex">
                            <Code2 className="w-6 h-6" />
                            <Terminal className="w-6 h-6" />
                            <Network className="w-6 h-6" />
                            <Cpu className="w-6 h-6" />
                        </div>
                    </motion.div>

                    {/* Bio / Description */}
                    <motion.p
                        variants={staggerItem}
                        className="mt-8 text-lg text-gray-400 max-w-xl font-light border-l-2 border-white/10 pl-6"
                    >
                        {personalInfo.tagline}
                    </motion.p>

                    {/* Interactive Controls */}
                    <motion.div
                        variants={staggerItem}
                        className="mt-12 flex flex-wrap gap-6 items-center"
                    >
                        <a
                            href="#projects"
                            className="group relative px-8 py-3 bg-white text-black font-bold text-sm tracking-widest uppercase overflow-hidden hover:bg-blue-500 hover:text-white transition-colors duration-300"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Initialize_Projects
                                <ArrowRight className="w-4 h-4" />
                            </span>
                        </a>

                        <a
                            href="/contact"
                            className="px-8 py-3 border border-white/20 text-white font-mono text-sm hover:bg-white/5 transition-colors"
                        >
                            ./contact_me.sh
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Drag Label - Bottom Center */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
                className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
            >
                <div className="bg-black/80 backdrop-blur-md rounded-full px-5 py-2.5 border border-white/10 flex items-center gap-2">
                    <span className="animate-pulse text-blue-400">🖱️</span>
                    <span className="text-xs font-mono text-gray-300 tracking-widest uppercase">
                        Drag to rotate • Scroll to zoom
                    </span>
                </div>
            </motion.div>

            {/* Bottom Bar */}
            <div className="absolute bottom-0 left-0 w-full p-6 border-t border-white/5 flex justify-between items-end z-20 pointer-events-none select-none">
                <div className="font-mono text-xs text-gray-500 pointer-events-auto">
                    <span className="text-blue-500">●</span> AVAILABLE FOR HIRE
                </div>

                <div className="flex gap-6 pointer-events-auto">
                    {['GITHUB', 'LINKEDIN', 'TWITTER'].map((social) => (
                        <a
                            key={social}
                            href="#"
                            className="text-xs font-mono text-gray-500 hover:text-white transition-colors"
                        >
                            {social}
                        </a>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}
