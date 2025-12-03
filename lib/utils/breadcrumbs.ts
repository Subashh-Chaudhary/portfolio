import { seo } from '@/data/seo';

export const breadcrumbs = {
  home: [
    { name: 'Home', url: seo.siteUrl }
  ],
  about: [
    { name: 'Home', url: seo.siteUrl },
    { name: 'About', url: `${seo.siteUrl}/about` }
  ],
  work: [
    { name: 'Home', url: seo.siteUrl },
    { name: 'Work', url: `${seo.siteUrl}/work` }
  ],
  experience: [
    { name: 'Home', url: seo.siteUrl },
    { name: 'Experience', url: `${seo.siteUrl}/experience` }
  ],
  skills: [
    { name: 'Home', url: seo.siteUrl },
    { name: 'Skills', url: `${seo.siteUrl}/skills` }
  ],
  contact: [
    { name: 'Home', url: seo.siteUrl },
    { name: 'Contact', url: `${seo.siteUrl}/contact` }
  ]
};

export type BreadcrumbKey = keyof typeof breadcrumbs;
