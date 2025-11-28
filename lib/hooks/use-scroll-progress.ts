'use client'

import { useState, useEffect } from 'react'

/**
 * Hook to get scroll progress (0-100)
 * @returns Current scroll progress percentage
 */
export function useScrollProgress(): number {
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const updateScrollProgress = () => {
            const scrollPx = document.documentElement.scrollTop
            const winHeightPx =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight
            const scrolled = (scrollPx / winHeightPx) * 100

            setScrollProgress(scrolled)
        }

        window.addEventListener('scroll', updateScrollProgress)
        updateScrollProgress() // Initial call

        return () => window.removeEventListener('scroll', updateScrollProgress)
    }, [])

    return scrollProgress
}
