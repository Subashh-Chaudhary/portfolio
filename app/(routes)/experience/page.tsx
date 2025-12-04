import { ExperienceHeroSection } from '@/components/sections/experience/experience-hero-section'
import { ExperienceTimelineSection } from '@/components/sections/experience/experience-timeline-section'
import { PageWrapper } from '@/components/layout/page-wrapper'

export default function ExperiencePage() {
    return (
        <PageWrapper>
            <ExperienceHeroSection />
            <ExperienceTimelineSection />
        </PageWrapper>
    )
}
