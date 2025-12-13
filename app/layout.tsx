import type { Metadata } from 'next'
import { Syne } from 'next/font/google'
import './globals.css'
import { ConditionalNav } from '@/components/layout/conditional-nav'
import { Footer } from '@/components/layout/footer'
import { WelcomeScreen } from '@/components/ui/welcome-screen'
import { seo } from '@/data/seo'
import { SEOJsonLd, generateWebSiteSchema, generatePersonSchema } from '@/components/seo/SEOJsonLd'

const syne = Syne({
  subsets: ['latin'],
  display: 'swap', // Prevent FOIT (Flash of Invisible Text)
  preload: true,
  variable: '--font-syne',
})

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: {
    default: seo.siteName,
    template: `%s | ${seo.siteName}`
  },
  description: seo.siteDescription,
  keywords: seo.defaultKeywords,
  authors: [
    {
      name: seo.author.name,
      url: seo.author.url
    }
  ],
  creator: seo.author.name,
  publisher: seo.author.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: seo.siteUrl,
    title: seo.siteName,
    description: seo.siteDescription,
    siteName: seo.siteName,
    images: [
      {
        url: `${seo.siteUrl}${seo.ogImage}`,
        width: 1200,
        height: 630,
        alt: seo.siteName,
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.siteName,
    description: seo.siteDescription,
    creator: seo.author.twitter,
    images: [`${seo.siteUrl}${seo.twitterImage}`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const webSiteSchema = generateWebSiteSchema({
    name: seo.siteName,
    url: seo.siteUrl,
    description: seo.siteDescription,
    author: seo.author.name,
  });

  const personSchema = generatePersonSchema({
    name: seo.author.name,
    url: seo.author.url,
    image: `${seo.siteUrl}${seo.logo}`,
    jobTitle: 'Full Stack Software Developer',
    description: seo.siteDescription,
    sameAs: [
      seo.author.github,
      seo.author.linkedin,
      `https://twitter.com/${seo.author.twitter.replace('@', '')}`,
    ],
  });

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: seo.siteName,
    url: seo.siteUrl,
    logo: `${seo.siteUrl}${seo.logo}`,
    description: seo.siteDescription,
    sameAs: [
      seo.author.github,
      seo.author.linkedin,
      seo.author.twitter,
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon - multi-format support */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* JSON-LD structured data - non-blocking */}
        <SEOJsonLd data={webSiteSchema} />
        <SEOJsonLd data={personSchema} />
        <SEOJsonLd data={organizationSchema} />
      </head>
      <body className={syne.className}>
        <WelcomeScreen />
        {/* <Header /> */}
        <ConditionalNav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
