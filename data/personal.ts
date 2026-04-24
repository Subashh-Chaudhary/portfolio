import { PersonalInfo, SocialLink } from '@/types'
 
export const personalInfo: PersonalInfo = {
    name: 'Subash Tharu',
    title: 'Backend Engineer & Full Stack Developer',
    tagline: 'Building scalable APIs and production-grade systems that solve real-world problems',
    bio: 'Backend engineer with 2.5 years of professional experience designing REST APIs, microservices, and full stack applications — including government platforms serving 5,000+ citizens across Nepal. I started as a frontend developer and evolved into backend and systems work: database schema design, query optimization, Docker deployments, and service-oriented architecture. My stack is Node.js, NestJS, TypeScript, PostgreSQL, and Docker — with solid React.js and Next.js on the frontend side. I care about clean architecture, fast databases, and APIs that perform reliably under real load.',
    email: 'subashtharu.dev@gmail.com',
    phone: '+977 9706821175',
    location: 'Gwarko, Lalitpur, Nepal',
    avatar: '/images/avatars/profile.jpg',
    resume: '/resume.pdf',
}
 

export const socialLinks: SocialLink[] = [
    {
        id: '1',
        platform: 'github',
        url: 'https://github.com/Subashh-Chaudhary',
        username: 'subashtharu',
    },
    {
        id: '2',
        platform: 'linkedin',
        url: 'https://www.linkedin.com/in/developer-subash/',
        username: 'subashtharu',
    },
    {
        id: '3',
        platform: 'twitter',
        url: 'https://x.com/Suv_Aas',
        username: 'subashtharu',
    },
    {
        id: '4',
        platform: 'dev',
        url: 'https://subashtharu.com.np',
        username: 'subashtharu',
    },
]
