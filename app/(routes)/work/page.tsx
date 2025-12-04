import { WorkHeroSection } from '@/components/sections/work/work-hero-section'
import { FeaturedWorkSection } from '@/components/sections/work/featured-work-section'
import { PageWrapper } from '@/components/layout/page-wrapper'

export default function WorkPage() {
    return (
        <PageWrapper>
            <WorkHeroSection />
            <FeaturedWorkSection />
        </PageWrapper>
    )
}
