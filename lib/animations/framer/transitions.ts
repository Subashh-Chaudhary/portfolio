import { Transition } from 'framer-motion'

/**
 * Common Framer Motion transition presets
 */

// Spring transitions
export const springTransition: Transition = {
    type: 'spring',
    stiffness: 260,
    damping: 20,
}

export const softSpring: Transition = {
    type: 'spring',
    stiffness: 100,
    damping: 15,
}

export const bouncySpring: Transition = {
    type: 'spring',
    stiffness: 400,
    damping: 10,
}

// Tween transitions
export const smoothTransition: Transition = {
    type: 'tween',
    duration: 0.3,
    ease: 'easeInOut',
}

export const fastTransition: Transition = {
    type: 'tween',
    duration: 0.2,
    ease: 'easeOut',
}

export const slowTransition: Transition = {
    type: 'tween',
    duration: 0.5,
    ease: 'easeInOut',
}

// Custom easing
export const customEase: Transition = {
    type: 'tween',
    duration: 0.4,
    ease: [0.43, 0.13, 0.23, 0.96],
}

// Stagger transition
export const staggerTransition: Transition = {
    type: 'spring',
    stiffness: 100,
    damping: 15,
    staggerChildren: 0.1,
}
