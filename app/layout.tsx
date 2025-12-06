import type { Metadata } from 'next'
import { Syne } from 'next/font/google'
import './globals.css'
import '../styles/voxel-slider.css'
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
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
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

  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon - critical for initial load */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />

        {/* JSON-LD structured data - non-blocking */}
        <SEOJsonLd data={webSiteSchema} />
        <SEOJsonLd data={personSchema} />
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
