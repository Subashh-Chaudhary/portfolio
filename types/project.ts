export interface Project {
    id: string
    title: string
    slug: string
    description: string
    longDescription: string
    category: ProjectCategory
    tags: string[]
    images: string[]
    thumbnail: string
    demoUrl?: string
    githubUrl?: string
    featured: boolean
    completedAt: string
    technologies: string[]
    role: string
    challenges?: string[]
    outcomes?: string[]
}

export type ProjectCategory =
    | 'web-app'
    | 'mobile-app'
    | 'api'
    | 'tool'
    | 'library'
    | 'other'
