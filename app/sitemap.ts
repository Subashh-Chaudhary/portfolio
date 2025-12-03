import { MetadataRoute } from 'next';
import { seo } from '@/data/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', 'about', 'work', 'experience', 'skills', 'contact'];

  const staticRoutes = routes.map((route) => ({
    url: `${seo.siteUrl}${route ? `/${route}` : ''}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Add dynamic routes here if you have blog posts or projects with individual pages
  // Example:
  // const projects = await getProjects();
  // const projectRoutes = projects.map((project) => ({
  //   url: `${seo.siteUrl}/work/${project.slug}`,
  //   lastModified: new Date(project.updatedAt),
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.7,
  // }));

  return [...staticRoutes];
}
