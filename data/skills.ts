import { Skill, SkillGroup } from '@/types'

export const skills: Skill[] = [
    // Frontend
    { id: '1', name: 'React', category: 'frontend', proficiency: 95, yearsOfExperience: 4 },
    { id: '2', name: 'Next.js', category: 'frontend', proficiency: 90, yearsOfExperience: 3 },
    { id: '3', name: 'TypeScript', category: 'frontend', proficiency: 90, yearsOfExperience: 3 },
    { id: '4', name: 'Tailwind CSS', category: 'frontend', proficiency: 95, yearsOfExperience: 3 },
    { id: '5', name: 'GSAP', category: 'frontend', proficiency: 80, yearsOfExperience: 2 },
    { id: '6', name: 'Framer Motion', category: 'frontend', proficiency: 85, yearsOfExperience: 2 },
    { id: '7', name: 'HTML/CSS', category: 'frontend', proficiency: 95, yearsOfExperience: 5 },
    { id: '8', name: 'JavaScript', category: 'frontend', proficiency: 95, yearsOfExperience: 5 },

    // Backend
    { id: '9', name: 'Node.js', category: 'backend', proficiency: 90, yearsOfExperience: 4 },
    { id: '10', name: 'Express.js', category: 'backend', proficiency: 90, yearsOfExperience: 4 },
    { id: '11', name: 'NestJS', category: 'backend', proficiency: 85, yearsOfExperience: 2 },
    { id: '12', name: 'GraphQL', category: 'backend', proficiency: 80, yearsOfExperience: 2 },
    { id: '13', name: 'REST API', category: 'backend', proficiency: 95, yearsOfExperience: 4 },

    // Database
    { id: '14', name: 'PostgreSQL', category: 'database', proficiency: 85, yearsOfExperience: 3 },
    { id: '15', name: 'MongoDB', category: 'database', proficiency: 90, yearsOfExperience: 3 },
    { id: '16', name: 'MySQL', category: 'database', proficiency: 80, yearsOfExperience: 3 },
    { id: '17', name: 'Prisma', category: 'database', proficiency: 85, yearsOfExperience: 2 },
    { id: '18', name: 'Redis', category: 'database', proficiency: 75, yearsOfExperience: 2 },

    // DevOps
    { id: '19', name: 'Docker', category: 'devops', proficiency: 80, yearsOfExperience: 2 },
    { id: '20', name: 'AWS', category: 'devops', proficiency: 75, yearsOfExperience: 2 },
    { id: '21', name: 'CI/CD', category: 'devops', proficiency: 80, yearsOfExperience: 2 },
    { id: '22', name: 'Vercel', category: 'devops', proficiency: 90, yearsOfExperience: 3 },

    // Tools
    { id: '23', name: 'Git', category: 'tools', proficiency: 95, yearsOfExperience: 5 },
    { id: '24', name: 'VS Code', category: 'tools', proficiency: 95, yearsOfExperience: 5 },
    { id: '25', name: 'Figma', category: 'tools', proficiency: 80, yearsOfExperience: 3 },
    { id: '26', name: 'Postman', category: 'tools', proficiency: 90, yearsOfExperience: 4 },
]

export const skillGroups: SkillGroup[] = [
    {
        category: 'frontend',
        title: 'Frontend Development',
        skills: skills.filter((s) => s.category === 'frontend'),
    },
    {
        category: 'backend',
        title: 'Backend Development',
        skills: skills.filter((s) => s.category === 'backend'),
    },
    {
        category: 'database',
        title: 'Database & Storage',
        skills: skills.filter((s) => s.category === 'database'),
    },
    {
        category: 'devops',
        title: 'DevOps & Cloud',
        skills: skills.filter((s) => s.category === 'devops'),
    },
    {
        category: 'tools',
        title: 'Tools & Software',
        skills: skills.filter((s) => s.category === 'tools'),
    },
]
