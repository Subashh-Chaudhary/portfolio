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
        name: 'Backend Architecture',
        description: 'Designing scalable, service-oriented systems — microservices, API design patterns, and distributed backends that perform under pressure',
        icon: 'Server',
        iconType: 'lucide',
        proficiency: 90,
    },
    {
        id: '2',
        name: 'Open Source',
        description: 'Building tools for the developer community and contributing to projects that solve real problems at scale',
        icon: 'SiOpensourceinitiative',
        iconType: 'simple',
        proficiency: 65,
    },
    {
        id: '3',
        name: 'AI & Machine Learning',
        description: 'Integrating ML inference services into production apps — from FastAPI orchestration to model serving pipelines',
        icon: 'Brain',
        iconType: 'lucide',
        proficiency: 60,
    },
    {
        id: '4',
        name: 'Database Engineering',
        description: 'Deep-diving into query optimization, indexing strategies, and schema design — especially PostGIS spatial databases',
        icon: 'Database',
        iconType: 'lucide',
        proficiency: 75,
    },
    {
        id: '5',
        name: 'DevOps & Deployment',
        description: 'Containerizing applications with Docker, configuring Nginx reverse proxies, and maintaining production Linux servers',
        icon: 'Container',
        iconType: 'lucide',
        proficiency: 85,
    },
    {
        id: '6',
        name: 'Geospatial Tech',
        description: 'Working with OpenStreetMap data, PostGIS spatial queries, and location-based infrastructure for Nepal and beyond',
        icon: 'Map',
        iconType: 'lucide',
        proficiency: 70,
    },
    {
        id: '7',
        name: 'UI Engineering',
        description: 'Translating Figma designs into pixel-perfect React components — with a love for clean, accessible interfaces',
        icon: 'Palette',
        iconType: 'lucide',
        proficiency: 82,
    },
    {
        id: '8',
        name: 'Creative Coding',
        description: 'Building side projects that combine engineering curiosity with real-world impact — like AgriVision AI and Nepal GeoSearch',
        icon: 'Code2',
        iconType: 'lucide',
        proficiency: 88,
    },
]
 
export const personalValues: PersonalValue[] = [
    {
        id: '1',
        title: 'Continuous Learning',
        description: 'From frontend to backend to DevOps — always expanding the stack and pushing the boundary of what I can build',
        icon: 'brain',
    },
    {
        id: '2',
        title: 'Real-World Impact',
        description: 'Every line of code should solve a genuine problem — like reducing citizen inquiry times by 40% or diagnosing crop disease in 60 seconds',
        icon: 'target',
    },
    {
        id: '3',
        title: 'Clean Architecture',
        description: 'Layered services, decoupled modules, and maintainable codebases — because good systems outlive their builders',
        icon: 'code',
    },
    {
        id: '4',
        title: 'Performance-First',
        description: 'Obsessed with fast APIs and optimized queries — reducing p95 response times by 30–70% is a craft, not just a metric',
        icon: 'zap',
    },
]