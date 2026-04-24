import { Education, Certification } from '@/types'
 
export const education: Education[] = [
    {
        id: '1',
        institution: 'Swoyambhu International College',
        degree: 'Bachelor of Computer Application',
        field: 'Computer Application (BCA)',
        startDate: '2020-08-01',
        endDate: '2026-06-30',
        current: false,
        grade: '3.15 GPA',
        location: 'Lagankhel, Lalitpur, Nepal',
        description:
            'Pursuing a four-year undergraduate program covering software engineering, algorithms, database systems, web development, and computer networks. Complemented coursework with professional internship and full-time work experience during studies.',
        achievements: [
            'Maintained 3.15 / 4.00 CGPA while working full-time as a developer',
            'Built AgriVision AI and Nepal GeoSearch as independent capstone-grade projects',
            'Secured internship at Ninja Infosys before completing first year of study',
        ],
        logo: '/images/logos/swoyambhu.png',
    },
]
 
export const certifications: Certification[] = [
    {
        id: '1',
        name: 'Meta Front-End Developer Professional Certificate',
        issuer: 'Meta (via Coursera)',
        issueDate: '2023-01-01',
        credentialUrl: 'https://coursera.org/share/8bf40d53bbf968d8438134fcadd670df',
        logo: '/images/logos/meta.png',
    },
    {
        id: '2',
        name: 'Meta Version Control Certificate',
        issuer: 'Meta (via Coursera)',
        issueDate: '2022-09-01',
        credentialUrl: 'https://coursera.org/share/bf769ade669c5053f20de3b0fef3f495',
        logo: '/images/logos/meta.png',
    }, 
    {
        id: '3',
        name: 'Responsive Web Design Certification',
        issuer: 'freeCodeCamp',
        issueDate: '2022-06-01',
        credentialUrl: 'https://www.freecodecamp.org/certification/subashtharu/responsive-web-design',
        logo: '/images/logos/freecodecamp.png',
    },
    {
        id: '4',
        name: 'JavaScript Algorithms and Data Structures (Beta)',
        issuer: 'freeCodeCamp',
        issueDate: '2022-08-01',
        credentialUrl: 'https://www.freecodecamp.org/certification/subashtharu/javascript-algorithms-and-data-structures-v8',
        logo: '/images/logos/freecodecamp.png',
    },
]