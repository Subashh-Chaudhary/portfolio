# SEO Implementation Guide

## Overview

This portfolio website has been fully configured with SEO best practices using Next.js App Router metadata API, structured data (JSON-LD), and dynamic sitemap/robots.txt generation.

## File Structure

```
portfolio/
├── app/
│   ├── layout.tsx                 # Global SEO metadata + JSON-LD
│   ├── page.tsx                   # Home page with metadata
│   ├── sitemap.ts                 # Dynamic sitemap generator
│   ├── robots.ts                  # Robots.txt configuration
│   └── (routes)/
│       ├── about/
│       │   ├── layout.tsx         # About page metadata
│       │   └── page.tsx
│       ├── work/
│       │   ├── layout.tsx         # Work page metadata
│       │   └── page.tsx
│       ├── experience/
│       │   ├── layout.tsx         # Experience page metadata
│       │   └── page.tsx
│       ├── skills/
│       │   ├── layout.tsx         # Skills page metadata
│       │   └── page.tsx
│       └── contact/
│           ├── layout.tsx         # Contact page metadata
│           └── page.tsx
├── components/
│   └── seo/
│       └── SEOJsonLd.tsx          # JSON-LD component + helpers
├── data/
│   └── seo.ts                     # Centralized SEO configuration
└── lib/
    └── utils/
        └── seo.ts                 # SEO utility functions
```

## Step-by-Step Customization

### 1. Update SEO Configuration (`/data/seo.ts`)

This is your **single source of truth** for all SEO data.

**What to customize:**

```typescript
export const seo = {
  // ✏️ Update these with your actual values
  siteName: "Your Name - Your Title",
  siteUrl: "https://yourdomain.com",  // ⚠️ MUST be your actual domain
  siteDescription: "Your portfolio description",
  
  // ✏️ Add relevant keywords for your portfolio
  defaultKeywords: [
    "Your Name",
    "Your Specialization",
    // ... add more relevant keywords
  ],
  
  // ✏️ Update author information
  author: {
    name: "Your Name",
    url: "https://yourdomain.com",
    twitter: "@yourusername",  // Include @
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername"
  },
  
  // ✏️ Update image paths (create these images!)
  ogImage: "/images/og/og-image.jpg",           // 1200x630px
  twitterImage: "/images/og/twitter-card.jpg",  // 1200x630px
  logo: "/images/logos/logo.png",
  socialBanner: "/images/og/social-banner.jpg",
  
  // ✏️ Customize each page metadata
  pages: {
    home: {
      title: "Your custom home page title",
      description: "Your home page description",
      keywords: ["keyword1", "keyword2"]
    },
    // ... repeat for other pages
  }
}
```

### 2. Create Social Media Images

Create these images in your `public/images/og/` directory:

- **og-image.jpg** (1200x630px) - Used for Facebook, LinkedIn
- **twitter-card.jpg** (1200x630px) - Used for Twitter/X
- **social-banner.jpg** (1200x630px) - General social sharing

**Tools to create OG images:**
- [Canva](https://canva.com) - Free templates
- [OG Image Generator](https://og-image.vercel.app/)
- Figma templates

### 3. Page-Level SEO Customization

Each route has its own `layout.tsx` that automatically uses the SEO config:

```typescript
// app/(routes)/about/layout.tsx
import { generatePageMetadata } from '@/lib/utils/seo';

export const metadata = generatePageMetadata('about');

export default function AboutLayout({ children }) {
  return children;
}
```

**No changes needed** unless you want to override specific metadata.

### 4. Add Structured Data to Pages

Use JSON-LD helpers in any page component:

```typescript
import { SEOJsonLd, generateBreadcrumbSchema } from '@/components/seo/SEOJsonLd';

export default function AboutPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://yourdomain.com' },
    { name: 'About', url: 'https://yourdomain.com/about' }
  ]);

  return (
    <>
      <SEOJsonLd data={breadcrumb} />
      {/* Your page content */}
    </>
  );
}
```

### 5. Update Sitemap

The sitemap is automatically generated at `/sitemap.xml`.

**To add dynamic routes** (e.g., blog posts):

```typescript
// app/sitemap.ts
export default async function sitemap() {
  // Static routes
  const staticRoutes = [...];
  
  // Dynamic routes - example with blog posts
  const posts = await getBlogPosts();
  const postRoutes = posts.map((post) => ({
    url: `${seo.siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...postRoutes];
}
```

### 6. Update Robots.txt

Configure crawling rules in `app/robots.ts`:

```typescript
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',       // Block API routes
          '/admin/',     // Block admin pages
          '/_next/',     // Block Next.js internals
          '/private/',   // Block private pages
        ],
      },
    ],
    sitemap: `${seo.siteUrl}/sitemap.xml`,
  };
}
```

## Testing Your SEO

### 1. Local Testing

```bash
npm run build
npm run start
```

Visit:
- `http://localhost:3000/sitemap.xml`
- `http://localhost:3000/robots.txt`

### 2. Metadata Preview

Install [Meta SEO Inspector](https://chrome.google.com/webstore/detail/meta-seo-inspector/) Chrome extension.

### 3. Structured Data Testing

Use [Google Rich Results Test](https://search.google.com/test/rich-results):
1. Build and deploy your site
2. Enter your URL
3. Verify JSON-LD appears correctly

### 4. OpenGraph Preview

Use these tools to preview social cards:
- [OpenGraph.xyz](https://www.opengraph.xyz/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

### 5. Lighthouse SEO Audit

```bash
# Install Lighthouse CLI
npm install -g @lhci/cli

# Run audit
lhci autorun --collect.url=http://localhost:3000
```

Or use Chrome DevTools > Lighthouse tab.

## Common Issues & Solutions

### Issue: OG Images Not Showing

**Solution:**
- Ensure images are in `public/images/og/`
- Use absolute URLs: `${seo.siteUrl}/images/og/og-image.jpg`
- Check image dimensions: 1200x630px
- Use `.jpg` or `.png` format

### Issue: Metadata Not Updating

**Solution:**
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Issue: Sitemap Not Generating

**Solution:**
- Check `app/sitemap.ts` has no errors
- Build the project: `npm run build`
- Sitemap generates at build time

### Issue: Dynamic Routes Not in Sitemap

**Solution:**
- Make sure to fetch data in `sitemap.ts`
- Use `async function` for sitemap generator
- Check data fetching is working

## SEO Checklist

Before deploying:

- [ ] Update `seo.siteUrl` to production domain
- [ ] Create and upload OG images (1200x630px)
- [ ] Customize all page titles and descriptions
- [ ] Update keywords for your niche
- [ ] Test sitemap.xml is generating
- [ ] Test robots.txt is accessible
- [ ] Verify JSON-LD in Rich Results Test
- [ ] Preview social cards in OG debuggers
- [ ] Run Lighthouse SEO audit (aim for 90+)
- [ ] Add Google Search Console verification
- [ ] Submit sitemap to Google Search Console

## Performance Tips

### 1. Image Optimization

Use Next.js Image component:
```typescript
import Image from 'next/image';

<Image 
  src="/images/og/og-image.jpg"
  alt="Description"
  width={1200}
  height={630}
  priority // For above-the-fold images
/>
```

### 2. Lazy Loading

For JSON-LD on client components:
```typescript
'use client';
import dynamic from 'next/dynamic';

const SEOJsonLd = dynamic(() => import('@/components/seo/SEOJsonLd'), {
  ssr: true
});
```

### 3. Minimize Metadata Size

Keep descriptions under:
- Title: 60 characters
- Description: 155 characters
- Keywords: 10-15 relevant terms

## Advanced: Dynamic Metadata

For dynamic routes (e.g., blog posts):

```typescript
// app/blog/[slug]/page.tsx
import { generateMetadata } from 'next';

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    }
  };
}
```

## Resources

- [Next.js Metadata Docs](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Schema.org Documentation](https://schema.org/)
- [Google Search Central](https://developers.google.com/search)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Card Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)

## Support

For issues or questions:
1. Check Next.js documentation
2. Review console for errors
3. Test with SEO tools mentioned above
4. Verify configuration in `/data/seo.ts`
