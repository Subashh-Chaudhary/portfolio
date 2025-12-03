'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Terminal, AlertTriangle, Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
            {/* Background Grid & Data Lines */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />

                {/* Corner Crosshairs */}
                <div className="absolute top-10 left-10 w-4 h-4 border-t border-l border-white/30" />
                <div className="absolute top-10 right-10 w-4 h-4 border-t border-r border-white/30" />
                <div className="absolute bottom-10 left-10 w-4 h-4 border-b border-l border-white/30" />
                <div className="absolute bottom-10 right-10 w-4 h-4 border-b border-r border-white/30" />
            </div>

            {/* HUD Elements */}
            <div className="absolute top-8 left-8 z-20 font-mono text-xs text-blue-400/60 hidden md:block">
                <div>STATUS: ERROR_404</div>
                <div>LOCATION: UNKNOWN</div>
                <div>ACTION: REDIRECT</div>
            </div>

            <div className="absolute top-8 right-8 z-20 font-mono text-xs text-purple-400/60 hidden md:block text-right">
                <div>CODE: NOT_FOUND</div>
                <div>TYPE: CLIENT_ERROR</div>
                <div>SEVERITY: LOW</div>
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
                            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
                            <div className="relative w-24 h-24 border-2 border-blue-500/50 rounded-full flex items-center justify-center">
                                <AlertTriangle className="w-12 h-12 text-blue-400" />
                            </div>
                        </div>
                    </div>

                    {/* Error Code */}
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="h-px w-16 bg-blue-500" />
                        <span className="font-mono text-blue-400 text-sm tracking-[0.2em] uppercase">
                            ERROR_404
                        </span>
                        <div className="h-px w-16 bg-blue-500" />
                    </div>

                    {/* Main Title */}
                    <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                            404
                        </span>
                    </h1>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                        PAGE NOT FOUND
                    </h2>

                    <p className="text-gray-400 max-w-2xl mx-auto font-light border-l-2 border-white/10 pl-6 text-base sm:text-lg mb-12">
                        The page you're looking for doesn't exist or has been moved. The system cannot locate the requested resource.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/"
                            className="group relative px-8 py-3 bg-white text-black font-bold text-sm tracking-wider uppercase overflow-hidden hover:bg-blue-500 hover:text-white transition-colors duration-300 flex items-center gap-2"
                        >
                            <Home className="w-4 h-4" />
                            <span>Return Home</span>
                        </Link>

                        <button
                            onClick={() => window.history.back()}
                            className="px-8 py-3 border border-white/20 text-white font-mono text-sm hover:bg-white/5 transition-colors flex items-center gap-2"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span>Go Back</span>
                        </button>
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
                        <Terminal className="w-3 h-3 text-blue-400" />
                        <span className="text-green-500">$</span>
                        <span className="text-blue-400">./navigate.sh</span>
                        <span>--destination=home</span>
                        <span className="animate-pulse">_</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
