import { Metadata } from 'next';
import { seo } from '@/data/seo';

type PageKey = keyof typeof seo.pages;

export function generatePageMetadata(pageKey: PageKey): Metadata {
  const pageData = seo.pages[pageKey];
  const pageUrl = pageKey === 'home' ? '/' : `/${pageKey}`;

  return {
    title: pageData.title,
    description: pageData.description,
    keywords: [...seo.defaultKeywords, ...pageData.keywords],
    alternates: {
      canonical: `${seo.siteUrl}${pageUrl}`
    },
    openGraph: {
      title: pageData.title,
      description: pageData.description,
      url: `${seo.siteUrl}${pageUrl}`,
      siteName: seo.siteName,
      images: [
        {
          url: `${seo.siteUrl}${seo.ogImage}`,
          width: 1200,
          height: 630,
          alt: pageData.title,
        }
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageData.title,
      description: pageData.description,
      images: [`${seo.siteUrl}${seo.twitterImage}`],
      creator: seo.author.twitter,
    }
  };
}
