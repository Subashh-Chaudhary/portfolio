export interface PersonalInfo {
    name: string
    title: string
    tagline: string
    bio: string
    email: string
    phone?: string
    location: string
    avatar: string
    resume?: string
}

export interface SocialLink {
    id: string
    platform: SocialPlatform
    url: string
    username?: string
}

export type SocialPlatform =
    | 'github'
    | 'linkedin'
    | 'twitter'
    | 'instagram'
    | 'dribbble'
    | 'behance'
    | 'youtube'
    | 'medium'
    | 'dev'
    | 'other'
