export const APP_NAME = 'Subash Tharu Portfolio'
export const APP_DESCRIPTION = 'Full Stack Developer Portfolio'

// Animation durations (in seconds)
export const ANIMATION_DURATION = {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
    verySlow: 0.8,
} as const

// Breakpoints (matching Tailwind)
export const BREAKPOINTS = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
} as const

// z-index layers
export const Z_INDEX = {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
} as const

// API endpoints (if needed in the future)
export const API_ENDPOINTS = {
    contact: '/api/contact',
    newsletter: '/api/newsletter',
} as const

// External links
export const EXTERNAL_LINKS = {
    resume: '/resume.pdf',
    github: 'https://github.com/subashtharu',
    linkedin: 'https://linkedin.com/in/subashtharu',
} as const
