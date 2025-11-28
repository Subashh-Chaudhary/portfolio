'use client'

import { useScrollProgress } from '@/lib/hooks/use-scroll-progress'
import { motion } from 'framer-motion'

export function ScrollProgress() {
    const scrollProgress = useScrollProgress()

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
            style={{ scaleX: scrollProgress / 100 }}
            initial={{ scaleX: 0 }}
        />
    )
}
