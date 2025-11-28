export interface Skill {
    id: string
    name: string
    category: SkillCategory
    proficiency: number // 0-100
    icon?: string
    yearsOfExperience?: number
}

export type SkillCategory =
    | 'frontend'
    | 'backend'
    | 'database'
    | 'devops'
    | 'tools'
    | 'design'
    | 'other'

export interface SkillGroup {
    category: SkillCategory
    title: string
    skills: Skill[]
}
