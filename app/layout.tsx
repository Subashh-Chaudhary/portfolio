import type { Metadata } from 'next'
import { Syne } from 'next/font/google'
import './globals.css'
import '../styles/voxel-slider.css'
import { VerticalNav } from '@/components/layout/vertical-nav'
import { Footer } from '@/components/layout/footer'
import { siteConfig } from '@/lib/config/site'

const syne = Syne({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author.name, url: siteConfig.url }],
  creator: siteConfig.author.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.author.twitter,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={syne.className}>
        {/* <Header /> */}
        <VerticalNav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
