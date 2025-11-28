import { Variants, Transition } from 'framer-motion'

export interface AnimationConfig {
    initial?: any
    animate?: any
    exit?: any
    transition?: Transition
    variants?: Variants
}

export interface ScrollTriggerConfig {
    trigger: string | HTMLElement
    start?: string
    end?: string
    scrub?: boolean | number
    pin?: boolean
    markers?: boolean
}

export interface LocomotiveScrollOptions {
    smooth: boolean
    smoothMobile?: boolean
    lerp?: number
    multiplier?: number
    class?: string
    reloadOnContextChange?: boolean
}
