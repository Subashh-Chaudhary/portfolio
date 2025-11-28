import { Education, Certification } from '@/types'

export const education: Education[] = [
    {
        id: '1',
        institution: 'Tribhuvan University',
        degree: 'Bachelor of Science',
        field: 'Computer Science and Information Technology',
        startDate: '2016-08-01',
        endDate: '2020-06-30',
        current: false,
        grade: '3.8 GPA',
        location: 'Kathmandu, Nepal',
        description: 'Focused on software engineering, algorithms, and web development. Completed capstone project on e-commerce platform development.',
        achievements: [
            "Dean's List for 6 semesters",
            'Best Capstone Project Award 2020',
            'President of Computer Science Club',
        ],
        logo: '/images/logos/tu.png',
    },
    {
        id: '2',
        institution: 'Online Courses & Bootcamps',
        degree: 'Various Certifications',
        field: 'Web Development & Cloud Computing',
        startDate: '2020-07-01',
        current: true,
        location: 'Online',
        description: 'Continuous learning through platforms like Udemy, Coursera, and Frontend Masters.',
    },
]

export const certifications: Certification[] = [
    {
        id: '1',
        name: 'AWS Certified Developer - Associate',
        issuer: 'Amazon Web Services',
        issueDate: '2023-08-15',
        expiryDate: '2026-08-15',
        credentialId: 'AWS-DEV-2023-12345',
        credentialUrl: 'https://aws.amazon.com/verification',
        logo: '/images/logos/aws.png',
    },
    {
        id: '2',
        name: 'Next.js Certified Developer',
        issuer: 'Vercel',
        issueDate: '2023-05-20',
        credentialId: 'NEXT-2023-67890',
        logo: '/images/logos/vercel.png',
    },
    {
        id: '3',
        name: 'Advanced React and Redux',
        issuer: 'Udemy',
        issueDate: '2021-12-10',
        credentialUrl: 'https://udemy.com/certificate/example',
        logo: '/images/logos/udemy.png',
    },
]
