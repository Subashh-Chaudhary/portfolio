import { Metadata } from 'next'
import { seo } from '@/data/seo'
import { HeroSection } from '@/components/sections/home/hero-section'
import { SEOJsonLd, generateBreadcrumbSchema } from '@/components/seo/SEOJsonLd'

export const metadata: Metadata = {
  title: seo.pages.home.title,
  description: seo.pages.home.description,
  keywords: [...seo.defaultKeywords, ...seo.pages.home.keywords],
  alternates: {
    canonical: `${seo.siteUrl}/`
  },
  openGraph: {
    title: seo.pages.home.title,
    description: seo.pages.home.description,
    url: `${seo.siteUrl}/`,
    siteName: seo.siteName,
    images: [
      {
        url: `${seo.siteUrl}${seo.ogImage}`,
        width: 1200,
        height: 630,
        alt: seo.pages.home.title,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.pages.home.title,
    description: seo.pages.home.description,
    images: [`${seo.siteUrl}${seo.twitterImage}`],
    creator: seo.author.twitter,
  }
}

export default function HomePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: seo.siteUrl },
  ]);

  return (
    <>
      <SEOJsonLd data={breadcrumbSchema} />
      <HeroSection />
    </>
  )
}