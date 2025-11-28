export interface Experience {
    id: string
    company: string
    position: string
    location: string
    locationType: 'remote' | 'hybrid' | 'onsite'
    startDate: string
    endDate?: string
    current: boolean
    description: string
    responsibilities: string[]
    achievements: string[]
    technologies: string[]
    companyLogo?: string
    companyUrl?: string
}
