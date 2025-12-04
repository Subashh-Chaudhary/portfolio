import { SiOpensourceinitiative, SiAdobephotoshop, SiUnity } from 'react-icons/si'
import { Camera, Gamepad2, BookOpen, Music, Palette, Code2 } from 'lucide-react'

export interface Interest {
    id: string
    name: string
    description: string
    icon: string // Icon name from react-icons or lucide-react
    iconType: 'simple' | 'lucide' // To differentiate between icon libraries
    proficiency?: number // Optional proficiency level (0-100)
}

export interface PersonalValue {
    id: string
    title: string
    description: string
    icon: string
}

export const interests: Interest[] = [
    {
        id: '1',
        name: 'Open Source',
        description: 'Contributing to open-source projects and building tools for the developer community',
        icon: 'SiOpensourceinitiative',
        iconType: 'simple',
        proficiency: 85,
    },
    {
        id: '2',
        name: 'Web Design',
        description: 'Creating beautiful, user-centric interfaces with modern design principles',
        icon: 'Palette',
        iconType: 'lucide',
        proficiency: 90,
    },
    {
        id: '3',
        name: 'Photography',
        description: 'Capturing moments and exploring creative composition techniques',
        icon: 'Camera',
        iconType: 'lucide',
        proficiency: 75,
    },
    {
        id: '4',
        name: 'Gaming',
        description: 'Exploring game design, mechanics, and interactive storytelling',
        icon: 'Gamepad2',
        iconType: 'lucide',
        proficiency: 80,
    },
    {
        id: '5',
        name: 'Reading',
        description: 'Tech blogs, sci-fi novels, and continuous learning through books',
        icon: 'BookOpen',
        iconType: 'lucide',
        proficiency: 70,
    },
    {
        id: '6',
        name: 'Music Production',
        description: 'Experimenting with digital audio workstations and sound design',
        icon: 'Music',
        iconType: 'lucide',
        proficiency: 65,
    },
    {
        id: '7',
        name: 'Creative Coding',
        description: 'Building generative art and interactive visualizations',
        icon: 'Code2',
        iconType: 'lucide',
        proficiency: 88,
    },
    {
        id: '8',
        name: '3D Graphics',
        description: 'Learning 3D modeling, rendering, and real-time graphics',
        icon: 'SiUnity',
        iconType: 'simple',
        proficiency: 72,
    },
]

export const personalValues: PersonalValue[] = [
    {
        id: '1',
        title: 'Continuous Learning',
        description: 'Always exploring new technologies and improving skills',
        icon: 'brain',
    },
    {
        id: '2',
        title: 'User-Centric Design',
        description: 'Putting users first in every design and development decision',
        icon: 'users',
    },
    {
        id: '3',
        title: 'Clean Code',
        description: 'Writing maintainable, well-documented, and efficient code',
        icon: 'code',
    },
    {
        id: '4',
        title: 'Innovation',
        description: 'Pushing boundaries and finding creative solutions to problems',
        icon: 'lightbulb',
    },
]
