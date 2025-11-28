import { personalInfo } from '@/data/personal'

interface SiteConfig {
    name: string
    title: string
    description: string
    url: string
    ogImage: string
    keywords: string[]
    author: {
        name: string
        email: string
        twitter: string
    }
    links: {
        github: string
        linkedin: string
        twitter: string
    }
}

export const siteConfig: SiteConfig = {
    name: personalInfo.name,
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.tagline,
    url: 'https://subashtharu.dev',
    ogImage: 'https://subashtharu.dev/og-image.jpg',
    keywords: [
        'Full Stack Developer',
        'Web Developer',
        'React Developer',
        'Next.js Developer',
        'TypeScript',
        'Node.js',
        'Portfolio',
        'Nepal Developer',
    ],
    author: {
        name: personalInfo.name,
        email: personalInfo.email,
        twitter: '@subashtharu',
    },
    links: {
        github: 'https://github.com/subashtharu',
        linkedin: 'https://linkedin.com/in/subashtharu',
        twitter: 'https://twitter.com/subashtharu',
    },
}

export const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Work', href: '/work' },
    { name: 'Experience', href: '/experience' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact', href: '/contact' },
]
