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

// Scramble text effect component - optimized with requestAnimationFrame
const ScrambleText = ({ text }: { text: string }) => {
    const [display, setDisplay] = useState(text)
    const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?'

    const scramble = () => {
        let iterations = 0
        let animationFrameId: number

        const animate = () => {
            setDisplay(
                text
                    .split('')
                    .map((letter, index) => {
                        if (index < iterations) return text[index]
                        return chars[Math.floor(Math.random() * chars.length)]
                    })
                    .join('')
            )

            if (iterations < text.length) {
                iterations += 1 / 3
                animationFrameId = requestAnimationFrame(animate)
            }
        }

        animationFrameId = requestAnimationFrame(animate)

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId)
            }
        }
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
        let rafId: number
        let lastTime = 0
        const throttleDelay = 16 // ~60fps

        const handleMouseMove = (e: MouseEvent) => {
            const currentTime = Date.now()
            if (currentTime - lastTime < throttleDelay) return

            lastTime = currentTime

            if (rafId) cancelAnimationFrame(rafId)
            rafId = requestAnimationFrame(() => {
                setMousePosition({
                    x: (e.clientX / window.innerWidth) * 2 - 1,
                    y: (e.clientY / window.innerHeight) * 2 - 1,
                    pixelX: e.clientX,
                    pixelY: e.clientY,
                })
            })
        }

        window.addEventListener('mousemove', handleMouseMove, { passive: true })
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            if (rafId) cancelAnimationFrame(rafId)
        }
    }, [])

    return (
        <motion.section
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="h-screen max-h-screen flex items-center justify-center relative overflow-hidden bg-black"
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

            {/* Background Grid & Data Lines - use content-visibility for better performance */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ contentVisibility: 'auto' }}>
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
                className="absolute inset-0 z-0 pointer-events-auto ml-0 sm:ml-[5%] md:ml-[10%] lg:ml-[15%] xl:ml-[15%] 2xl:ml-[12%] cursor-none"
                onMouseEnter={() => setIsHoveringVoxels(true)}
                onMouseLeave={() => setIsHoveringVoxels(false)}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-black z-10 pointer-events-none" />
                <div className="relative w-full h-full">
                    <HeroVoxelPortrait />
                </div>

            </motion.div>

            {/* HUD Elements */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 lg:top-8 lg:left-8 xl:top-8 xl:left-8 2xl:top-10 2xl:left-10 z-20 font-mono text-[5px] sm:text-[7px] md:text-xs lg:text-xs xl:text-xs 2xl:text-xs text-blue-400/60 hidden md:block">
                <div>SYS.STATUS: ONLINE</div>
                <div>SEC.LEVEL: UNRESTRICTED</div>
                <div>LOC: {personalInfo.location.toUpperCase()}</div>
            </div>

            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 lg:top-8 lg:right-8 xl:top-8 xl:right-8 2xl:top-10 2xl:right-10 z-20 font-mono text-[5px] sm:text-[7px] md:text-xs lg:text-xs xl:text-xs 2xl:text-xs text-purple-400/60 hidden md:block text-right">
                <div>COORD: {mousePosition.x.toFixed(2)}, {mousePosition.y.toFixed(2)}</div>
                <div>RENDER: VOXEL_ENGINE_V1</div>
                <div>FPS: 60</div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full h-full mx-auto px-4 sm:px-5 md:px-6 lg:px-8 xl:px-8 2xl:px-12 flex flex-col justify-center pointer-events-none select-none">
                <div className="w-full pointer-events-auto">


                    {/* Role Tag */}
                    <motion.div
                        variants={staggerItem}
                        className="flex items-center gap-3 mb-6 backdrop-blur-sm md:backdrop-blur-none bg-black/20 md:bg-transparent p-3 md:p-0 rounded-md md:rounded-none w-fit"
                    >
                        <div className="h-px w-8 sm:w-10 md:w-12 lg:w-12 xl:w-12 2xl:w-16 bg-blue-500" />
                        <span className="font-mono text-blue-400 text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-sm 2xl:text-base tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em]">
                            FULL_STACK_DEVELOPER
                        </span>
                    </motion.div>

                    {/* Massive Typography */}
                    <motion.div variants={staggerItem} className="backdrop-blur-sm md:backdrop-blur-none bg-black/20 md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none w-fit">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black tracking-tighter text-white mix-blend-difference leading-[0.9]">
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
                        <div className="absolute right-48 lg:right-56 xl:right-72 2xl:right-96 top-22 flex flex-col gap-3 lg:gap-4 xl:gap-4 2xl:gap-5 text-white/40 hidden lg:flex">
                            <Code2 className="w-5 h-5 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8" />
                            <Terminal className="w-5 h-5 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8" />
                            <Network className="w-5 h-5 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8" />
                            <Cpu className="w-5 h-5 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8" />
                        </div>
                    </motion.div>

                    {/* Bio / Description */}
                    <motion.p
                        variants={staggerItem}
                        className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 xl:mt-8 2xl:mt-10 text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl text-gray-400 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-xl 2xl:max-w-2xl font-light border-l border-l-2 sm:border-l-2 md:border-l-2 border-white/10 pl-3 sm:pl-4 md:pl-5 lg:pl-6 xl:pl-6 2xl:pl-8 backdrop-blur-sm md:backdrop-blur-none bg-black/20 md:bg-transparent p-3 md:p-0 rounded-md md:rounded-none"
                    >
                        {personalInfo.tagline}
                    </motion.p>

                    {/* Interactive Controls */}
                    <motion.div
                        variants={staggerItem}
                        className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-12 2xl:mt-16 flex flex-wrap gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-6 2xl:gap-8 items-center"
                    >
                        <a
                            href="#projects"
                            className="group relative px-4 sm:px-5 md:px-6 lg:px-8 xl:px-8 2xl:px-10 py-2 sm:py-2.5 md:py-2.5 lg:py-3 xl:py-3 2xl:py-4 bg-white text-black font-bold text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-sm 2xl:text-base tracking-wider sm:tracking-wide md:tracking-widest uppercase overflow-hidden hover:bg-blue-500 hover:text-white transition-colors duration-300"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Initialize_Projects
                                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-4 lg:h-4 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5" />
                            </span>
                        </a>

                        <a
                            href="/contact"
                            className="px-4 sm:px-5 md:px-6 lg:px-8 xl:px-8 2xl:px-10 py-2 sm:py-2.5 md:py-2.5 lg:py-3 xl:py-3 2xl:py-4 border border-white/20 text-white font-mono text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-sm 2xl:text-base hover:bg-white/5 transition-colors"
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
                className="absolute bottom-16 sm:bottom-18 md:bottom-20 lg:bottom-24 xl:bottom-24 2xl:bottom-28 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
            >
                <div className="bg-black/80 backdrop-blur-md rounded-full px-3 sm:px-4 md:px-4 lg:px-5 xl:px-5 2xl:px-6 py-1.5 sm:py-2 md:py-2 lg:py-2.5 xl:py-2.5 2xl:py-3 border border-white/10 flex items-center gap-1.5 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-3">
                    <span className="animate-pulse text-blue-400">🖱️</span>
                    <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-xs 2xl:text-sm font-mono text-gray-300 tracking-wide sm:tracking-wider md:tracking-widest uppercase">
                        Drag to rotate • Scroll to zoom
                    </span>
                </div>
            </motion.div>
        </motion.section>
    )
}
