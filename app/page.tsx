import { HeroSection } from '@/components/sections/home/hero-section'
import { FeaturedWorkSection } from '@/components/sections/home/featured-work-section'
import { SkillsShowcaseSection } from '@/components/sections/home/skills-showcase-section'
import { CTASection } from '@/components/sections/home/cta-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedWorkSection />
      <SkillsShowcaseSection />
      <CTASection />
    </>
  )
}