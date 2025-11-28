export interface Education {
    id: string
    institution: string
    degree: string
    field: string
    startDate: string
    endDate?: string
    current: boolean
    grade?: string
    location: string
    description?: string
    achievements?: string[]
    logo?: string
}

export interface Certification {
    id: string
    name: string
    issuer: string
    issueDate: string
    expiryDate?: string
    credentialId?: string
    credentialUrl?: string
    logo?: string
}
