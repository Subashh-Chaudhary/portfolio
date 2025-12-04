import { Variants } from 'framer-motion'

/**
 * Common Framer Motion animation variants
 * Optimized for performance with GPU-accelerated properties
 */

// Performance-optimized transition
const transition = {
    type: 'tween' as const,
    ease: [0.25, 0.1, 0.25, 1],
    duration: 0.4,
};

const fastTransition = {
    type: 'tween' as const,
    ease: 'easeOut' as const,
    duration: 0.2,
};

// Fade animations
export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition },
}

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition },
}

export const fadeInDown: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition },
}

export const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition },
}

export const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition },
}

// Scale animations
export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition },
}

export const scaleUp: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: fastTransition },
}

// Stagger container - optimized for faster perceived load
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05, // Reduced from 0.1s
            delayChildren: 0.1, // Reduced from 0.2s
        },
    },
}

export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: fastTransition },
}

// Slide animations
export const slideInLeft: Variants = {
    hidden: { x: '-100%' },
    visible: { x: 0, transition },
}

export const slideInRight: Variants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition },
}

export const slideInUp: Variants = {
    hidden: { y: '100%' },
    visible: { y: 0, transition },
}

export const slideInDown: Variants = {
    hidden: { y: '-100%' },
    visible: { y: 0, transition },
}

// Page transition variants
export const pageTransition: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: fastTransition },
    exit: { opacity: 0, y: -20, transition: fastTransition },
}

// Rotation variants
export const rotateIn: Variants = {
    hidden: { opacity: 0, rotate: -180 },
    visible: { opacity: 1, rotate: 0, transition },
}

// Blur variants - use sparingly as filter can be expensive
export const blurIn: Variants = {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    visible: { opacity: 1, filter: 'blur(0px)', transition },
}

