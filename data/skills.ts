import { Skill, SkillGroup } from '@/types'

export const skills: Skill[] = [
    // Frontend
    { id: '1', name: 'React', category: 'frontend', proficiency: 95, yearsOfExperience: 4, icon: 'SiReact' },
    { id: '2', name: 'Next.js', category: 'frontend', proficiency: 90, yearsOfExperience: 3, icon: 'SiNextdotjs' },
    { id: '3', name: 'TypeScript', category: 'frontend', proficiency: 90, yearsOfExperience: 3, icon: 'SiTypescript' },
    { id: '4', name: 'Tailwind CSS', category: 'frontend', proficiency: 95, yearsOfExperience: 3, icon: 'SiTailwindcss' },
    { id: '5', name: 'GSAP', category: 'frontend', proficiency: 80, yearsOfExperience: 2, icon: 'SiGreensock' },
    { id: '6', name: 'Framer Motion', category: 'frontend', proficiency: 85, yearsOfExperience: 2, icon: 'SiFramer' },
    { id: '7', name: 'HTML/CSS', category: 'frontend', proficiency: 95, yearsOfExperience: 5, icon: 'SiHtml5' },
    { id: '8', name: 'JavaScript', category: 'frontend', proficiency: 95, yearsOfExperience: 5, icon: 'SiJavascript' },

    // Backend
    { id: '9', name: 'Node.js', category: 'backend', proficiency: 90, yearsOfExperience: 4, icon: 'SiNodedotjs' },
    { id: '10', name: 'Express.js', category: 'backend', proficiency: 90, yearsOfExperience: 4, icon: 'SiExpress' },
    { id: '11', name: 'NestJS', category: 'backend', proficiency: 85, yearsOfExperience: 2, icon: 'SiNestjs' },
    { id: '12', name: 'GraphQL', category: 'backend', proficiency: 80, yearsOfExperience: 2, icon: 'SiGraphql' },
    { id: '13', name: 'REST API', category: 'backend', proficiency: 95, yearsOfExperience: 4, icon: 'SiPostman' },

    // Database
    { id: '14', name: 'PostgreSQL', category: 'database', proficiency: 85, yearsOfExperience: 3, icon: 'SiPostgresql' },
    { id: '15', name: 'MongoDB', category: 'database', proficiency: 90, yearsOfExperience: 3, icon: 'SiMongodb' },
    { id: '16', name: 'MySQL', category: 'database', proficiency: 80, yearsOfExperience: 3, icon: 'SiMysql' },
    { id: '17', name: 'Prisma', category: 'database', proficiency: 85, yearsOfExperience: 2, icon: 'SiPrisma' },
    { id: '18', name: 'Redis', category: 'database', proficiency: 75, yearsOfExperience: 2, icon: 'SiRedis' },

    // DevOps
    { id: '19', name: 'Docker', category: 'devops', proficiency: 80, yearsOfExperience: 2, icon: 'SiDocker' },
    { id: '20', name: 'AWS', category: 'devops', proficiency: 75, yearsOfExperience: 2, icon: 'SiAmazonaws' },
    { id: '21', name: 'CI/CD', category: 'devops', proficiency: 80, yearsOfExperience: 2, icon: 'SiGithubactions' },
    { id: '22', name: 'Vercel', category: 'devops', proficiency: 90, yearsOfExperience: 3, icon: 'SiVercel' },

    // Tools
    { id: '23', name: 'Git', category: 'tools', proficiency: 95, yearsOfExperience: 5, icon: 'SiGit' },
    { id: '24', name: 'VS Code', category: 'tools', proficiency: 95, yearsOfExperience: 5, icon: 'SiVisualstudiocode' },
    { id: '25', name: 'Figma', category: 'tools', proficiency: 80, yearsOfExperience: 3, icon: 'SiFigma' },
    { id: '26', name: 'Postman', category: 'tools', proficiency: 90, yearsOfExperience: 4, icon: 'SiPostman' },

    // AI / Ml
    { id: '27', name: 'Python', category: 'ai_ml', proficiency: 85, yearsOfExperience: 2, icon: 'SiPython' },
    { id: '28', name: 'TensorFlow', category: 'ai_ml', proficiency: 80, yearsOfExperience: 2, icon: 'SiTensorflow' },
    { id: '29', name: 'PyTorch', category: 'ai_ml', proficiency: 80, yearsOfExperience: 2, icon: 'SiPytorch' },
    { id: '30', name: 'Scikit-learn', category: 'ai_ml', proficiency: 80, yearsOfExperience: 2, icon: 'SiScikitlearn' },
    { id: '31', name: 'NumPy', category: 'ai_ml', proficiency: 80, yearsOfExperience: 2, icon: 'SiNumpy' },
    { id: '32', name: 'Pandas', category: 'ai_ml', proficiency: 80, yearsOfExperience: 2, icon: 'SiPandas' },
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
    {
        category: 'ai_ml',
        title: 'AI & Machine Learning',
        skills: skills.filter((s) => s.category === 'ai_ml'),
    }
]
