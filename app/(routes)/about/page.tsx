'use client'

import { AboutHeroSection } from '@/components/sections/about/about-hero-section'
import { EducationSection } from '@/components/sections/about/education-section'
import { InterestsSection } from '@/components/sections/about/interests-section'
import { PageWrapper } from '@/components/layout/page-wrapper'

export default function AboutPage() {
    return (
        <PageWrapper>
            <AboutHeroSection />
            <EducationSection />
            <InterestsSection />
        </PageWrapper>
    )
}
