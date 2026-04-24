import { Skill, SkillGroup } from '@/types'
 
export const skills: Skill[] = [
    // Frontend — real skills from CV + work experience
    { id: '1',  name: 'React.js',       category: 'frontend', proficiency: 85, yearsOfExperience: 2, icon: 'SiReact' },
    { id: '2',  name: 'Next.js',        category: 'frontend', proficiency: 80, yearsOfExperience: 2, icon: 'SiNextdotjs' },
    { id: '3',  name: 'TypeScript',     category: 'frontend', proficiency: 85, yearsOfExperience: 2, icon: 'SiTypescript' },
    { id: '4',  name: 'JavaScript',     category: 'frontend', proficiency: 90, yearsOfExperience: 3, icon: 'SiJavascript' },
    { id: '5',  name: 'React Native',   category: 'frontend', proficiency: 70, yearsOfExperience: 1, icon: 'SiReact' },
    { id: '6',  name: 'HTML5 / CSS3',   category: 'frontend', proficiency: 90, yearsOfExperience: 3, icon: 'SiHtml5' },
    { id: '7',  name: 'Tailwind CSS',   category: 'frontend', proficiency: 85, yearsOfExperience: 2, icon: 'SiTailwindcss' },
 
    // Backend — primary strength from CV
    { id: '8',  name: 'Node.js',        category: 'backend', proficiency: 80, yearsOfExperience: 2, icon: 'SiNodedotjs' },
    { id: '9',  name: 'NestJS',         category: 'backend', proficiency: 88, yearsOfExperience: 2, icon: 'SiNestjs' },
    { id: '10', name: 'Express.js',     category: 'backend', proficiency: 85, yearsOfExperience: 2, icon: 'SiExpress' },
    { id: '11', name: 'Go',             category: 'backend', proficiency: 65, yearsOfExperience: 1, icon: 'SiGo' },
    { id: '12', name: 'FastAPI',        category: 'backend', proficiency: 64, yearsOfExperience: 1, icon: 'SiFastapi' },
    { id: '13', name: 'REST API Design',category: 'backend', proficiency: 92, yearsOfExperience: 2, icon: 'SiPostman' },
    { id: '14', name: 'JWT / Passport', category: 'backend', proficiency: 85, yearsOfExperience: 2, icon: 'SiJsonwebtokens' },
    { id: '15', name: 'Python',         category: 'backend', proficiency: 70, yearsOfExperience: 1, icon: 'SiPython' },
 
    // Database — strong real-world usage from CV
    { id: '16', name: 'PostgreSQL',     category: 'database', proficiency: 88, yearsOfExperience: 2, icon: 'SiPostgresql' },
    { id: '17', name: 'MySQL',          category: 'database', proficiency: 80, yearsOfExperience: 2, icon: 'SiMysql' },
    { id: '18', name: 'Redis',          category: 'database', proficiency: 70, yearsOfExperience: 1, icon: 'SiRedis' },
    { id: '19', name: 'PostGIS',        category: 'database', proficiency: 73, yearsOfExperience: 1, icon: 'SiPostgresql' },
    { id: '20', name: 'Elasticsearch',  category: 'database', proficiency: 65, yearsOfExperience: 1, icon: 'SiElasticsearch' },
    { id: '21', name: 'MongoDB',        category: 'database', proficiency: 68, yearsOfExperience: 1, icon: 'SiMongodb' },
 
    // DevOps — real from CV
    { id: '22', name: 'Docker',         category: 'devops', proficiency: 82, yearsOfExperience: 2, icon: 'SiDocker' },
    { id: '23', name: 'Docker Compose', category: 'devops', proficiency: 80, yearsOfExperience: 2, icon: 'SiDocker' },
    { id: '24', name: 'Nginx',          category: 'devops', proficiency: 75, yearsOfExperience: 2, icon: 'SiNginx' },
    { id: '25', name: 'Linux (Ubuntu)', category: 'devops', proficiency: 78, yearsOfExperience: 2, icon: 'SiLinux' },
    { id: '26', name: 'Traefik',        category: 'devops', proficiency: 65, yearsOfExperience: 1, icon: 'SiTraefikproxy' },
    {id: '27', name: 'Git / GitHub',   category: 'devops', proficiency: 92, yearsOfExperience: 3, icon: 'SiGit' },
    {id: '28', name: 'GitHub Actions', category: 'devops', proficiency: 70, yearsOfExperience: 1, icon: 'SiGithubactions' },
 
    // Tools
    { id: '29', name: 'Postman',        category: 'tools', proficiency: 95, yearsOfExperience: 2, icon: 'SiPostman' },
    { id: '30', name: 'Figma',          category: 'tools', proficiency: 75, yearsOfExperience: 2, icon: 'SiFigma' },
    { id: '31', name: 'Cloudinary',     category: 'tools', proficiency: 72, yearsOfExperience: 1, icon: 'SiCloudinary' },
    { id: '32', name: 'VS Code',        category: 'tools', proficiency: 95, yearsOfExperience: 3, icon: 'SiVuetify' },
    { id: '33', name: 'osm2pgsql',      category: 'tools', proficiency: 68, yearsOfExperience: 1, icon: 'SiOpenstreetmap' },
]
 
export const skillGroups: SkillGroup[] = [
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
        category: 'frontend',
        title: 'Frontend Development',
        skills: skills.filter((s) => s.category === 'frontend'),
    },
    {
        category: 'devops',
        title: 'DevOps & Infrastructure',
        skills: skills.filter((s) => s.category === 'devops'),
    },
    {
        category: 'tools',
        title: 'Tools & Software',
        skills: skills.filter((s) => s.category === 'tools'),
    },
]