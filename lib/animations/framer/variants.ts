import { Variants } from 'framer-motion'

/**
 * Common Framer Motion animation variants
 */

// Fade animations
export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
}

export const fadeInDown: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
}

export const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
}

export const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
}

// Scale animations
export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
}

export const scaleUp: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
}

// Stagger container
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
}

export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
}

// Slide animations
export const slideInLeft: Variants = {
    hidden: { x: '-100%' },
    visible: { x: 0 },
}

export const slideInRight: Variants = {
    hidden: { x: '100%' },
    visible: { x: 0 },
}

export const slideInUp: Variants = {
    hidden: { y: '100%' },
    visible: { y: 0 },
}

export const slideInDown: Variants = {
    hidden: { y: '-100%' },
    visible: { y: 0 },
}

// Page transition variants
export const pageTransition: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
}

// Rotation variants
export const rotateIn: Variants = {
    hidden: { opacity: 0, rotate: -180 },
    visible: { opacity: 1, rotate: 0 },
}

// Blur variants
export const blurIn: Variants = {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    visible: { opacity: 1, filter: 'blur(0px)' },
}
