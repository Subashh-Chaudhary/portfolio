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
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageData.title,
      description: pageData.description,
      creator: seo.author.twitter,
    }
  };
}
