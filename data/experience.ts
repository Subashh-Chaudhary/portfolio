
import { Experience } from '@/types'
 
export const experiences: Experience[] = [
    {
        id: '1',
        company: 'Ninja Infosys Pvt. Ltd.',
        position: 'Junior Full Stack Developer',
        location: 'Anamnagar, Kathmandu, Nepal',
        locationType: 'onsite',
        startDate: '2024-02-01',
        endDate: '2026-03-31',
        current: false,
        description:
            'Led backend development of enterprise-grade platforms for government clients, building scalable REST APIs, microservices, and full stack applications using Node.js (NestJS), Go, React.js, Next.js, and React Native.',
        responsibilities: [
            'Spearheaded backend development of an Integrated Content Management System (ICMS) using NestJS and Next.js, reducing manual content update cycles by ~60% for government agencies',
            'Designed and delivered a Citizen Charter platform with Go and React.js, exposing 20+ RESTful API endpoints across 15+ government service workflows',
            'Architected multi-tenant REST APIs with JWT authentication, role-based access control (RBAC), and request validation pipelines across 3 distinct user roles',
            'Designed PostgreSQL and MySQL database schemas from scratch for 3 production applications, writing optimized queries and indexing strategies',
            'Contributed to React.js frontend development and shipped a React Native (Expo) mobile app for government services within a single 3-month sprint',
            'Containerized 4 multi-service Node.js applications with Docker and Docker Compose; maintained Ubuntu server deployments with Nginx reverse proxy',
        ],
        achievements: [
            'Reduced average API response times by 30% on high-traffic endpoints through query and index optimization',
            'Platform served 5,000+ citizen users with zero reported security incidents post-deployment',
            'Cut average citizen inquiry resolution time by ~40% through streamlined government service workflows',
            'Sustained 99%+ uptime across all hosted services on production Ubuntu servers',
            'Delivered React Native government services app within a single 3-month sprint cycle',
        ],
        technologies: ['Node.js', 'NestJS', 'Express.js', 'TypeScript', 'Go', 'React.js', 'Next.js', 'React Native', 'PostgreSQL', 'MySQL', 'Redis', 'Docker', 'Nginx', 'Linux'],
        companyLogo: '/images/logos/ninja-infosys.png',
        companyUrl: 'https://ninjainfosys.com.np',
    },
    {
        id: '2',
        company: 'Ninja Infosys Pvt. Ltd.',
        position: 'Full Stack Developer Intern',
        location: 'Anamnagar, Kathmandu, Nepal',
        locationType: 'onsite',
        startDate: '2023-11-01',
        endDate: '2024-02-29',
        current: false,
        description:
            'Supported senior engineers in building RESTful APIs and frontend features, taking ownership of backend modules and contributing across the full stack within an agile team.',
        responsibilities: [
            'Supported senior engineers in building 10+ RESTful API endpoints using NestJS and Express.js',
            'Took sole ownership of 3 backend feature modules, accelerating sprint delivery',
            'Converted Figma design mockups into responsive React.js UI components',
            'Assisted in configuring Docker containers and staging deployments on Linux servers',
            'Adopted Git and GitHub best practices including feature branching, PR reviews, and merge conflict resolution',
        ],
        achievements: [
            'Shipped 5 frontend features within the 3-month internship period',
            'Resolved 20+ bugs across Node.js backend and React.js frontend codebases',
            'Completed 30+ PR reviews with zero breaking merges to the main branch',
            'Converted internship into a full-time Junior Developer role at the same company',
        ],
        technologies: ['Node.js', 'NestJS', 'Express.js', 'React.js', 'TypeScript', 'Docker', 'Linux', 'Git', 'GitHub', 'Figma'],
        companyLogo: '/images/logos/ninja-infosys.png',
        companyUrl: 'https://ninjainfosys.com.np',
    },
]
 
export const currentExperience = experiences.find((exp) => exp.current)
export const pastExperiences = experiences.filter((exp) => !exp.current)