import { ContactHeroSection } from '@/components/sections/contact/contact-hero-section'
import { ContactInfoSection } from '@/components/sections/contact/contact-info-section'
import { ContactFormSection } from '@/components/sections/contact/contact-form-section'
import { PageWrapper } from '@/components/layout/page-wrapper'

export default function ContactPage() {
    return (
        <PageWrapper>
            <ContactHeroSection />
            <ContactInfoSection />
            <ContactFormSection />
        </PageWrapper>
    )
}
