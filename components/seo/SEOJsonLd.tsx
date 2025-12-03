import React from 'react';

interface SEOJsonLdProps {
  data: Record<string, any>;
}

export function SEOJsonLd({ data }: SEOJsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Helper functions to generate common structured data

export function generateWebSiteSchema(config: {
  name: string;
  url: string;
  description: string;
  author: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: config.name,
    url: config.url,
    description: config.description,
    author: {
      '@type': 'Person',
      name: config.author,
    },
    inLanguage: 'en-US',
  };
}

export function generatePersonSchema(config: {
  name: string;
  url: string;
  image?: string;
  jobTitle: string;
  description: string;
  email?: string;
  sameAs: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: config.name,
    url: config.url,
    image: config.image,
    jobTitle: config.jobTitle,
    description: config.description,
    email: config.email,
    sameAs: config.sameAs,
    knowsAbout: [
      'Web Development',
      'Full Stack Development',
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Node.js',
    ],
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateProfilePageSchema(config: {
  name: string;
  url: string;
  image?: string;
  description: string;
  sameAs: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: config.name,
      url: config.url,
      image: config.image,
      description: config.description,
      sameAs: config.sameAs,
    },
  };
}

export function generateOrganizationSchema(config: {
  name: string;
  url: string;
  logo?: string;
  description: string;
  sameAs: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: config.name,
    url: config.url,
    logo: config.logo,
    description: config.description,
    sameAs: config.sameAs,
  };
}

export function generateCreativeWorkSchema(config: {
  name: string;
  url: string;
  description: string;
  image?: string;
  author: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: config.name,
    url: config.url,
    description: config.description,
    image: config.image,
    author: {
      '@type': 'Person',
      name: config.author,
    },
    datePublished: config.datePublished,
    dateModified: config.dateModified,
  };
}
