/**
 * Framer Motion Performance Configuration
 * Optimized animation settings for better performance
 */

import { Transition } from 'framer-motion';

/**
 * Detect if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Detect if device is low-end based on hardware concurrency
 */
export function isLowEndDevice(): boolean {
    if (typeof navigator === 'undefined') return false;
    // Devices with 2 or fewer cores are considered low-end
    return (navigator.hardwareConcurrency || 4) <= 2;
}

/**
 * Performance-optimized transition defaults
 * Uses GPU-accelerated properties and optimized easing
 */
export const performanceTransition: Transition = {
    type: 'tween',
    ease: [0.25, 0.1, 0.25, 1], // Custom ease curve for smooth animation
    duration: 0.4,
};

export const fastTransition: Transition = {
    type: 'tween',
    ease: 'easeOut',
    duration: 0.2,
};

export const springTransition: Transition = {
    type: 'spring',
    stiffness: 300,
    damping: 30,
    mass: 0.8,
};

/**
 * Get appropriate transition based on device capabilities
 */
export function getOptimizedTransition(
    preferSpring: boolean = false
): Transition {
    if (prefersReducedMotion()) {
        return { duration: 0.01 }; // Near-instant for reduced motion
    }

    if (isLowEndDevice()) {
        return fastTransition; // Faster animations for low-end devices
    }

    return preferSpring ? springTransition : performanceTransition;
}

/**
 * Stagger configuration optimized for performance
 */
export const optimizedStagger = {
    staggerChildren: 0.05, // Reduced from 0.1s for faster perceived load
    delayChildren: 0.1,
};

/**
 * Animation configuration that respects user preferences
 */
export function getAnimationConfig() {
    const shouldAnimate = !prefersReducedMotion();
    const isLowEnd = isLowEndDevice();

    return {
        shouldAnimate,
        isLowEnd,
        transition: getOptimizedTransition(),
        stagger: optimizedStagger,
    };
}

/**
 * GPU-accelerated properties only
 * Using these properties ensures animations run on the GPU
 */
export const gpuProperties = {
    transform: true,
    opacity: true,
    filter: true, // Use sparingly, can be expensive
} as const;

/**
 * Will-change utility
 * Only apply will-change during active animations
 */
export function getWillChange(isAnimating: boolean, properties: string[] = ['transform', 'opacity']): string | undefined {
    return isAnimating ? properties.join(', ') : undefined;
}
