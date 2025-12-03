'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Terminal, AlertCircle, Home, RotateCcw } from 'lucide-react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
            {/* Background Grid & Data Lines */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-red-500/30 to-transparent" />

                {/* Corner Crosshairs */}
                <div className="absolute top-10 left-10 w-4 h-4 border-t border-l border-red-500/30" />
                <div className="absolute top-10 right-10 w-4 h-4 border-t border-r border-red-500/30" />
                <div className="absolute bottom-10 left-10 w-4 h-4 border-b border-l border-red-500/30" />
                <div className="absolute bottom-10 right-10 w-4 h-4 border-b border-r border-red-500/30" />
            </div>

            {/* HUD Elements */}
            <div className="absolute top-8 left-8 z-20 font-mono text-xs text-red-400/60 hidden md:block">
                <div>STATUS: CRITICAL_ERROR</div>
                <div>SYSTEM: UNSTABLE</div>
                <div>ACTION: RECOVERY</div>
            </div>

            <div className="absolute top-8 right-8 z-20 font-mono text-xs text-purple-400/60 hidden md:block text-right">
                <div>CODE: RUNTIME_ERROR</div>
                <div>TYPE: EXCEPTION</div>
                <div>SEVERITY: HIGH</div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Error Icon */}
                    <div className="flex justify-center mb-8">
                        <div className="relative">
                            <div className="absolute inset-0 bg-red-500/20 blur-3xl rounded-full animate-pulse" />
                            <div className="relative w-24 h-24 border-2 border-red-500/50 rounded-full flex items-center justify-center">
                                <AlertCircle className="w-12 h-12 text-red-400" />
                            </div>
                        </div>
                    </div>

                    {/* Error Code */}
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="h-px w-16 bg-red-500" />
                        <span className="font-mono text-red-400 text-sm tracking-[0.2em] uppercase">
                            SYSTEM_ERROR
                        </span>
                        <div className="h-px w-16 bg-red-500" />
                    </div>

                    {/* Main Title */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400">
                            OOPS!
                        </span>
                    </h1>

                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
                        SOMETHING WENT WRONG
                    </h2>

                    <p className="text-gray-400 max-w-2xl mx-auto font-light border-l-2 border-red-500/20 pl-6 text-base sm:text-lg mb-8">
                        An unexpected error occurred. The system encountered a critical exception and needs to recover.
                    </p>

                    {/* Error Details (Optional) */}
                    {error.digest && (
                        <div className="mb-8 p-4 border border-red-500/20 bg-red-500/5 rounded max-w-2xl mx-auto">
                            <div className="font-mono text-xs text-red-400/80 text-left">
                                <div className="flex items-center gap-2 mb-2">
                                    <Terminal className="w-3 h-3" />
                                    <span>Error Digest:</span>
                                </div>
                                <div className="text-gray-500 pl-5">{error.digest}</div>
                            </div>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={() => reset()}
                            className="group relative px-8 py-3 bg-white text-black font-bold text-sm tracking-wider uppercase overflow-hidden hover:bg-red-500 hover:text-white transition-colors duration-300 flex items-center gap-2"
                        >
                            <RotateCcw className="w-4 h-4" />
                            <span>Try Again</span>
                        </button>

                        <Link
                            href="/"
                            className="px-8 py-3 border border-white/20 text-white font-mono text-sm hover:bg-white/5 transition-colors flex items-center gap-2"
                        >
                            <Home className="w-4 h-4" />
                            <span>Go Home</span>
                        </Link>
                    </div>
                </motion.div>

                {/* Terminal Line */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 pt-8 border-t border-white/10"
                >
                    <div className="font-mono text-xs text-gray-600 flex items-center justify-center gap-2">
                        <Terminal className="w-3 h-3 text-red-400" />
                        <span className="text-green-500">$</span>
                        <span className="text-red-400">./recover.sh</span>
                        <span>--mode=safe</span>
                        <span className="text-gray-700">|</span>
                        <span className="text-purple-400">restart</span>
                        <span className="animate-pulse">_</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
