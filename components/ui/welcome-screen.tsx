'use client'

import { useEffect, useState } from 'react'
import { SpiralAnimation } from './spiral-animation'
import { gsap } from 'gsap'

export function WelcomeScreen() {
    const [mounted, setMounted] = useState(false)
    const [shouldRender, setShouldRender] = useState(true)
    const [isVisible, setIsVisible] = useState(true)
    const [startVisible, setStartVisible] = useState(false)

    useEffect(() => {
        setMounted(true)

        // Check if user has visited before
        const hasVisited = localStorage.getItem('hasVisitedBefore')

        if (hasVisited) {
            // User has visited before, don't show welcome screen
            setShouldRender(false)
            setIsVisible(false)
            return
        }

        // Fade in the start button after animation loads
        const buttonTimer = setTimeout(() => {
            setStartVisible(true)
        }, 2000)

        // Auto-hide the welcome screen after animation completes (9 seconds for one full cycle)
        const autoHideTimer = setTimeout(() => {
            handleExit()
        }, 8500) // 9 seconds - one full animation cycle

        return () => {
            clearTimeout(buttonTimer)
            clearTimeout(autoHideTimer)
        }
    }, [])

    const handleExit = () => {
        // Fade out animation
        gsap.to('.welcome-screen-container', {
            opacity: 0,
            duration: 1,
            ease: 'power2.inOut',
            onComplete: () => {
                setIsVisible(false)
                setShouldRender(false)
                // Mark that user has visited
                localStorage.setItem('hasVisitedBefore', 'true')
            }
        })
    }

    // Don't render if user has visited before
    if (!shouldRender) {
        return null
    }

    return (
        <div
            className={`welcome-screen-container fixed inset-0 z-[9999] bg-black transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}
            style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
        >
            {/* Spiral Animation */}
            <div className="absolute inset-0">
                <SpiralAnimation loop={false} />
            </div>

            {/* Simple Elegant Text Button with Pulsing Effect */}
            <div
                className={`
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0
          transition-all duration-1500 ease-out
          ${startVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}
            >
                <button
                    onClick={handleExit}
                    className="
            text-gray-400 text-2xl sm:text-3xl tracking-[0.2em] uppercase font-extrabold
            transition-all duration-700
            hover:tracking-[0.3em] animate-pulse
          "
                >
                    WELCOME
                </button>
            </div>
        </div>
    )
}
