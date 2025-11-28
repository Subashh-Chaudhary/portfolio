import { Experience } from '@/types'

export const experiences: Experience[] = [
    {
        id: '1',
        company: 'Tech Innovations Inc.',
        position: 'Senior Full Stack Developer',
        location: 'Kathmandu, Nepal',
        locationType: 'hybrid',
        startDate: '2023-06-01',
        current: true,
        description: 'Leading development of enterprise web applications and mentoring junior developers.',
        responsibilities: [
            'Architecting and developing scalable web applications using Next.js and Node.js',
            'Leading a team of 5 developers and conducting code reviews',
            'Implementing CI/CD pipelines and DevOps practices',
            'Collaborating with product managers and designers on feature requirements',
        ],
        achievements: [
            'Reduced application load time by 40% through optimization',
            'Successfully launched 3 major product features',
            'Mentored 3 junior developers to mid-level positions',
        ],
        technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
        companyLogo: '/images/logos/tech-innovations.png',
        companyUrl: 'https://techinnovations.example.com',
    },
    {
        id: '2',
        company: 'Digital Solutions Ltd.',
        position: 'Full Stack Developer',
        location: 'Pokhara, Nepal',
        locationType: 'remote',
        startDate: '2021-08-01',
        endDate: '2023-05-31',
        current: false,
        description: 'Developed and maintained multiple client projects using modern web technologies.',
        responsibilities: [
            'Built responsive web applications using React and Next.js',
            'Developed RESTful APIs using Express.js and NestJS',
            'Integrated third-party services and payment gateways',
            'Participated in agile development processes',
        ],
        achievements: [
            'Delivered 15+ client projects on time and within budget',
            'Implemented automated testing, increasing code coverage to 85%',
            'Improved deployment process, reducing deployment time by 50%',
        ],
        technologies: ['React', 'Next.js', 'Express.js', 'MongoDB', 'MySQL', 'Stripe'],
        companyLogo: '/images/logos/digital-solutions.png',
        companyUrl: 'https://digitalsolutions.example.com',
    },
    {
        id: '3',
        company: 'StartUp Ventures',
        position: 'Frontend Developer',
        location: 'Remote',
        locationType: 'remote',
        startDate: '2020-03-01',
        endDate: '2021-07-31',
        current: false,
        description: 'Focused on building beautiful, responsive user interfaces for startup products.',
        responsibilities: [
            'Developed responsive web interfaces using React and TypeScript',
            'Collaborated with UX designers to implement pixel-perfect designs',
            'Optimized application performance and accessibility',
            'Maintained component libraries and design systems',
        ],
        achievements: [
            'Built reusable component library used across 5 products',
            'Improved accessibility score from 70 to 95',
            'Reduced bundle size by 30% through code splitting',
        ],
        technologies: ['React', 'TypeScript', 'Styled Components', 'Redux', 'Jest'],
        companyLogo: '/images/logos/startup-ventures.png',
    },
]

export const currentExperience = experiences.find((exp) => exp.current)
export const pastExperiences = experiences.filter((exp) => !exp.current)
