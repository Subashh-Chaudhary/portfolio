import { Project } from '@/types'

export const projects: Project[] = [
    {
        id: '1',
        title: 'E-Commerce Platform',
        slug: 'ecommerce-platform',
        description: 'A modern, full-featured e-commerce platform with real-time inventory management',
        longDescription: 'Built a comprehensive e-commerce solution using Next.js, featuring product management, shopping cart, checkout flow, payment integration with Stripe, and an admin dashboard. Implemented real-time inventory updates using WebSockets and optimized for performance with image optimization and lazy loading.',
        category: 'web-app',
        tags: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL'],
        images: ['/images/projects/ecommerce-1.jpg', '/images/projects/ecommerce-2.jpg'],
        thumbnail: '/images/projects/ecommerce-thumb.jpg',
        demoUrl: 'https://example.com',
        githubUrl: 'https://github.com/subashtharu/ecommerce',
        featured: true,
        completedAt: '2024-11-15',
        technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Stripe', 'NextAuth'],
        role: 'Full Stack Developer',
        challenges: [
            'Implementing real-time inventory synchronization across multiple sessions',
            'Optimizing image loading for product galleries with 1000+ products',
            'Handling payment webhook failures gracefully',
        ],
        outcomes: [
            'Achieved 95+ Lighthouse performance score',
            'Reduced page load time by 60% through optimization',
            'Successfully processed 10,000+ test transactions',
        ],
    },
    {
        id: '2',
        title: 'Task Management App',
        slug: 'task-management-app',
        description: 'Collaborative task management application with real-time updates',
        longDescription: 'Developed a Trello-like task management system with drag-and-drop functionality, real-time collaboration, and team management features. Utilized Firebase for real-time database and authentication.',
        category: 'web-app',
        tags: ['React', 'Firebase', 'TypeScript', 'DnD Kit'],
        images: ['/images/projects/taskmanager-1.jpg'],
        thumbnail: '/images/projects/taskmanager-thumb.jpg',
        demoUrl: 'https://example.com',
        githubUrl: 'https://github.com/subashtharu/taskmanager',
        featured: true,
        completedAt: '2024-09-20',
        technologies: ['React', 'TypeScript', 'Firebase', 'TailwindCSS', 'DnD Kit', 'Zustand'],
        role: 'Frontend Developer',
        challenges: [
            'Implementing smooth drag-and-drop with optimistic updates',
            'Managing complex state for nested task hierarchies',
        ],
        outcomes: [
            'Handled 100+ concurrent users in testing',
            'Achieved sub-100ms update latency',
        ],
    },
    {
        id: '3',
        title: 'Weather Dashboard',
        slug: 'weather-dashboard',
        description: 'Beautiful weather dashboard with animations and forecasts',
        longDescription: 'Created an interactive weather dashboard that displays current weather, 7-day forecasts, and historical data with beautiful visualizations using Chart.js and custom GSAP animations.',
        category: 'web-app',
        tags: ['Next.js', 'OpenWeather API', 'GSAP', 'Chart.js'],
        images: ['/images/projects/weather-1.jpg'],
        thumbnail: '/images/projects/weather-thumb.jpg',
        demoUrl: 'https://example.com',
        featured: false,
        completedAt: '2024-07-10',
        technologies: ['Next.js', 'TypeScript', 'GSAP', 'Chart.js', 'OpenWeather API'],
        role: 'Full Stack Developer',
    },
    {
        id: '4',
        title: 'Portfolio CMS',
        slug: 'portfolio-cms',
        description: 'Headless CMS for managing portfolio content',
        longDescription: 'Built a custom headless CMS using NestJS for the backend API and React admin panel. Features include content versioning, media management, and role-based access control.',
        category: 'api',
        tags: ['NestJS', 'React', 'MongoDB', 'GraphQL'],
        images: ['/images/projects/cms-1.jpg'],
        thumbnail: '/images/projects/cms-thumb.jpg',
        githubUrl: 'https://github.com/subashtharu/portfolio-cms',
        featured: false,
        completedAt: '2024-05-15',
        technologies: ['NestJS', 'GraphQL', 'MongoDB', 'React', 'Apollo'],
        role: 'Backend Developer',
    },
]

export const featuredProjects = projects.filter((project) => project.featured)

export const getProjectBySlug = (slug: string): Project | undefined => {
    return projects.find((project) => project.slug === slug)
}

export const getProjectsByCategory = (category: string): Project[] => {
    return projects.filter((project) => project.category === category)
}
