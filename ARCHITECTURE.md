# Portfolio Website Architecture

> **Production-level folder structure for a highly animated Next.js portfolio**
> 
> Tech Stack: Next.js 14 (App Router), Tailwind CSS, GSAP, Framer Motion, Locomotive Scroll, shadcn/ui, 21st.dev

---

## 📁 Complete Folder Structure

```
portfolio/
├── app/                                    # Next.js App Router
│   ├── (routes)/                          # Route groups
│   │   ├── (home)/                        # Home route group
│   │   │   ├── page.tsx                   # Home page
│   │   │   └── loading.tsx                # Loading state
│   │   ├── about/                         # About page
│   │   │   ├── page.tsx
│   │   │   └── loading.tsx
│   │   ├── work/                          # Projects/Work page
│   │   │   ├── page.tsx
│   │   │   ├── loading.tsx
│   │   │   └── [slug]/                    # Individual project
│   │   │       └── page.tsx
│   │   ├── experience/                    # Experience page
│   │   │   ├── page.tsx
│   │   │   └── loading.tsx
│   │   ├── skills/                        # Skills page
│   │   │   ├── page.tsx
│   │   │   └── loading.tsx
│   │   └── contact/                       # Contact page
│   │       ├── page.tsx
│   │       └── loading.tsx
│   ├── api/                               # API routes
│   │   ├── contact/                       # Contact form endpoint
│   │   │   └── route.ts
│   │   └── revalidate/                    # On-demand revalidation
│   │       └── route.ts
│   ├── layout.tsx                         # Root layout
│   ├── page.tsx                           # Root page (redirects or landing)
│   ├── loading.tsx                        # Global loading
│   ├── error.tsx                          # Global error boundary
│   ├── not-found.tsx                      # 404 page
│   ├── template.tsx                       # Page transition wrapper
│   └── globals.css                        # Global styles + Tailwind imports
│
├── components/                            # All components
│   ├── ui/                                # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── separator.tsx
│   │   ├── tabs.tsx
│   │   ├── tooltip.tsx
│   │   └── ...                            # Other shadcn components
│   │
│   ├── twentyfirst/                       # 21st.dev components
│   │   ├── animated-beam.tsx
│   │   ├── bento-grid.tsx
│   │   ├── dock.tsx
│   │   ├── globe.tsx
│   │   ├── marquee.tsx
│   │   ├── particles.tsx
│   │   ├── typewriter.tsx
│   │   └── ...                            # Other 21st.dev components
│   │
│   ├── layout/                            # Layout components
│   │   ├── header.tsx                     # Site header/navbar
│   │   ├── footer.tsx                     # Site footer
│   │   ├── sidebar.tsx                    # Sidebar (if needed)
│   │   ├── navigation.tsx                 # Navigation component
│   │   ├── page-wrapper.tsx               # Page container wrapper
│   │   └── grid-background.tsx            # Animated grid background
│   │
│   ├── sections/                          # Page sections (modular)
│   │   ├── home/                          # Home page sections
│   │   │   ├── hero-section.tsx
│   │   │   ├── about-preview-section.tsx
│   │   │   ├── featured-work-section.tsx
│   │   │   ├── skills-showcase-section.tsx
│   │   │   └── cta-section.tsx
│   │   ├── about/                         # About page sections
│   │   │   ├── bio-section.tsx
│   │   │   ├── journey-section.tsx
│   │   │   └── values-section.tsx
│   │   ├── work/                          # Work page sections
│   │   │   ├── projects-grid-section.tsx
│   │   │   ├── project-filters-section.tsx
│   │   │   └── project-detail-section.tsx
│   │   ├── experience/                    # Experience page sections
│   │   │   ├── timeline-section.tsx
│   │   │   └── companies-section.tsx
│   │   ├── skills/                        # Skills page sections
│   │   │   ├── tech-stack-section.tsx
│   │   │   └── certifications-section.tsx
│   │   └── contact/                       # Contact page sections
│   │       ├── contact-form-section.tsx
│   │       └── social-links-section.tsx
│   │
│   ├── animated/                          # Animated components
│   │   ├── reveal-text.tsx                # Text reveal animations
│   │   ├── magnetic-button.tsx            # Magnetic hover effect
│   │   ├── smooth-scroll-wrapper.tsx      # Locomotive scroll wrapper
│   │   ├── parallax-image.tsx             # Parallax image component
│   │   ├── scroll-progress.tsx            # Scroll progress indicator
│   │   ├── cursor-follower.tsx            # Custom cursor
│   │   ├── page-transition.tsx            # Page transition overlay
│   │   ├── stagger-container.tsx          # Stagger animation container
│   │   ├── float-animation.tsx            # Floating animation
│   │   ├── morph-shape.tsx                # SVG morphing shapes
│   │   └── glitch-text.tsx                # Glitch effect text
│   │
│   ├── cards/                             # Card components
│   │   ├── project-card.tsx               # Project showcase card
│   │   ├── skill-card.tsx                 # Skill card
│   │   ├── experience-card.tsx            # Experience timeline card
│   │   └── testimonial-card.tsx           # Testimonial card
│   │
│   ├── interactive/                       # Interactive elements
│   │   ├── 3d-model-viewer.tsx            # 3D model display (Three.js)
│   │   ├── canvas-animation.tsx           # Canvas-based animations
│   │   ├── interactive-globe.tsx          # Interactive globe
│   │   └── tech-orbit.tsx                 # Orbiting tech stack
│   │
│   ├── effects/                           # Visual effects
│   │   ├── grain-overlay.tsx              # Film grain effect
│   │   ├── vignette.tsx                   # Vignette overlay
│   │   ├── gradient-blur.tsx              # Gradient blur backgrounds
│   │   └── spotlight.tsx                  # Spotlight effect
│   │
│   └── common/                            # Common/shared components
│       ├── loader.tsx                     # Loading spinner
│       ├── logo.tsx                       # Brand logo
│       ├── social-icons.tsx               # Social media icons
│       ├── back-to-top.tsx                # Scroll to top button
│       └── seo.tsx                        # SEO meta tags component
│
├── lib/                                   # Utilities and libraries
│   ├── animations/                        # Animation utilities
│   │   ├── gsap/                          # GSAP utilities
│   │   │   ├── gsap-config.ts             # GSAP plugins & setup
│   │   │   ├── timelines.ts               # Reusable GSAP timelines
│   │   │   ├── scroll-triggers.ts         # ScrollTrigger helpers
│   │   │   └── animations.ts              # Common GSAP animations
│   │   ├── framer/                        # Framer Motion utilities
│   │   │   ├── variants.ts                # Motion variants library
│   │   │   ├── transitions.ts             # Transition presets
│   │   │   ├── gestures.ts                # Gesture handlers
│   │   │   └── hooks.ts                   # Framer Motion hooks
│   │   └── locomotive/                    # Locomotive Scroll
│   │       ├── locomotive-config.ts       # Locomotive setup
│   │       └── scroll-utils.ts            # Scroll utilities
│   │
│   ├── hooks/                             # Custom React hooks
│   │   ├── use-media-query.ts             # Media query hook
│   │   ├── use-scroll-progress.ts         # Scroll progress tracker
│   │   ├── use-mouse-position.ts          # Mouse position tracker
│   │   ├── use-window-size.ts             # Window size tracker
│   │   ├── use-intersection-observer.ts   # Intersection observer
│   │   ├── use-prefers-reduced-motion.ts  # A11y: reduced motion
│   │   ├── use-cursor.ts                  # Custom cursor hook
│   │   ├── use-lenis.ts                   # Lenis smooth scroll hook
│   │   └── use-theme.ts                   # Theme management
│   │
│   ├── utils/                             # General utilities
│   │   ├── cn.ts                          # className utility (clsx + tw-merge)
│   │   ├── format-date.ts                 # Date formatting
│   │   ├── seo.ts                         # SEO utilities
│   │   ├── validators.ts                  # Form validators
│   │   └── constants.ts                   # App constants
│   │
│   └── config/                            # Configuration files
│       ├── site.ts                        # Site metadata
│       ├── navigation.ts                  # Navigation config
│       ├── social-links.ts                # Social media links
│       └── theme.ts                       # Theme configuration
│
├── hooks/                                 # Additional custom hooks (alias)
│   └── index.ts                           # Re-export all hooks
│
├── styles/                                # Styles
│   ├── globals.css                        # Global CSS (Tailwind base)
│   ├── animations.css                     # CSS animations
│   ├── typography.css                     # Typography styles
│   └── utilities.css                      # Custom utility classes
│
├── data/                                  # Static data
│   ├── projects.ts                        # Projects data
│   ├── experience.ts                      # Work experience data
│   ├── skills.ts                          # Skills & technologies
│   ├── testimonials.ts                    # Client testimonials
│   └── certifications.ts                  # Certifications
│
├── public/                                # Public assets
│   ├── images/                            # Images
│   │   ├── projects/                      # Project screenshots
│   │   ├── logos/                         # Company/tech logos
│   │   ├── avatars/                       # Profile pictures
│   │   └── og/                            # Open Graph images
│   ├── models/                            # 3D models
│   │   └── scene.glb                      # 3D scene files
│   ├── videos/                            # Video assets
│   │   └── hero-bg.mp4                    # Background videos
│   ├── fonts/                             # Custom fonts
│   │   └── custom-font.woff2              # Web fonts
│   ├── icons/                             # Icons and favicons
│   │   ├── favicon.ico
│   │   ├── icon.svg
│   │   └── apple-touch-icon.png
│   └── resume.pdf                         # Downloadable resume
│
├── types/                                 # TypeScript types
│   ├── index.ts                           # Main types export
│   ├── project.ts                         # Project types
│   ├── experience.ts                      # Experience types
│   ├── skill.ts                           # Skill types
│   ├── animation.ts                       # Animation types
│   └── locomotive.d.ts                    # Locomotive type definitions
│
├── providers/                             # Context providers
│   ├── theme-provider.tsx                 # Theme context
│   ├── smooth-scroll-provider.tsx         # Locomotive scroll context
│   ├── cursor-provider.tsx                # Custom cursor context
│   └── animation-provider.tsx             # Animation settings context
│
├── config/                                # App configuration (root level)
│   ├── env.ts                             # Environment variables
│   └── metadata.ts                        # Next.js metadata config
│
├── .github/                               # GitHub specific
│   └── workflows/                         # CI/CD workflows
│       └── deploy.yml                     # Deployment workflow
│
├── .vscode/                               # VS Code settings
│   ├── settings.json                      # Editor settings
│   └── extensions.json                    # Recommended extensions
│
├── scripts/                               # Build/dev scripts
│   └── generate-sitemap.ts                # Sitemap generation
│
├── .env.local                             # Environment variables (local)
├── .env.example                           # Environment template
├── .eslintrc.json                         # ESLint configuration
├── .prettierrc                            # Prettier configuration
├── components.json                        # shadcn/ui configuration
├── next.config.js                         # Next.js configuration
├── package.json                           # Dependencies
├── postcss.config.js                      # PostCSS configuration
├── tailwind.config.ts                     # Tailwind configuration
├── tsconfig.json                          # TypeScript configuration
└── README.md                              # Project documentation
```

---

## 📖 Folder Explanations

### **`app/`** - Next.js App Router
The core of your Next.js application using the App Router paradigm.

- **`(routes)/`**: Route groups for organizing pages without affecting URL structure
  - Each route has its own `page.tsx` and `loading.tsx` for optimal UX
  - **`work/[slug]/`**: Dynamic routes for individual project pages
- **`api/`**: Server-side API endpoints
  - **`contact/route.ts`**: Handle contact form submissions
  - **`revalidate/route.ts`**: On-demand ISR revalidation
- **`layout.tsx`**: Root layout with providers, fonts, and global components
- **`template.tsx`**: Page transition wrapper for smooth route changes
- **`loading.tsx`**, **`error.tsx`**, **`not-found.tsx`**: Special files for states

### **`components/`** - All Components

#### **`ui/`** - shadcn/ui Components
Pre-built, accessible components from shadcn/ui. Customizable and theme-aware.

#### **`twentyfirst/`** - 21st.dev Components
Premium animated components from 21st.dev for modern, eye-catching effects.

#### **`layout/`** - Layout Components
Structural components that define the page layout:
- **`header.tsx`**: Animated navigation bar with scroll effects
- **`footer.tsx`**: Site footer with links and info
- **`page-wrapper.tsx`**: Consistent page container with padding/max-width
- **`grid-background.tsx`**: Animated background grid for futuristic feel

#### **`sections/`** - Page Sections (Modular)
Each page is broken into reusable, modular sections. This makes pages maintainable and allows for easy A/B testing or reordering.

**Structure by page:**
- **`home/`**: Hero, about preview, featured work, skills showcase, CTA
- **`about/`**: Bio, journey timeline, values
- **`work/`**: Projects grid, filters, project details
- **`experience/`**: Timeline, companies worked with
- **`skills/`**: Tech stack visualization, certifications
- **`contact/`**: Contact form, social links

#### **`animated/`** - Animated Components
Reusable animation primitives that can be used throughout the site:
- **`reveal-text.tsx`**: Text reveal on scroll (GSAP SplitText)
- **`magnetic-button.tsx`**: Magnetic hover effect using GSAP
- **`smooth-scroll-wrapper.tsx`**: Locomotive Scroll integration
- **`parallax-image.tsx`**: Parallax scrolling images
- **`scroll-progress.tsx`**: Scroll progress bar
- **`cursor-follower.tsx`**: Custom animated cursor
- **`page-transition.tsx`**: Page transition overlay (Framer Motion)
- **`stagger-container.tsx`**: Stagger children animations
- **`float-animation.tsx`**: Floating/hovering effect
- **`morph-shape.tsx`**: SVG shape morphing
- **`glitch-text.tsx`**: Glitch text effect

#### **`cards/`** - Card Components
Specific card designs for different content types:
- **`project-card.tsx`**: Showcase individual projects
- **`skill-card.tsx`**: Display skills with icons/animations
- **`experience-card.tsx`**: Timeline cards for work history
- **`testimonial-card.tsx`**: Client testimonials

#### **`interactive/`** - Interactive Elements
Complex interactive components:
- **`3d-model-viewer.tsx`**: Three.js 3D model integration
- **`canvas-animation.tsx`**: Custom canvas animations
- **`interactive-globe.tsx`**: Interactive 3D globe
- **`tech-orbit.tsx`**: Orbiting tech stack visualization

#### **`effects/`** - Visual Effects
Pure visual enhancement components:
- **`grain-overlay.tsx`**: Film grain texture
- **`vignette.tsx`**: Vignette darkening
- **`gradient-blur.tsx`**: Animated gradient backgrounds
- **`spotlight.tsx`**: Mouse-following spotlight effect

#### **`common/`** - Common Components
Frequently reused simple components:
- **`loader.tsx`**: Loading animations
- **`logo.tsx`**: Brand logo with animations
- **`social-icons.tsx`**: Social media icon links
- **`back-to-top.tsx`**: Scroll to top button
- **`seo.tsx`**: SEO meta tags wrapper

### **`lib/`** - Utilities and Libraries

#### **`animations/`** - Animation Utilities

**`gsap/`**:
- **`gsap-config.ts`**: GSAP plugin registration (ScrollTrigger, SplitText, etc.)
- **`timelines.ts`**: Reusable GSAP timeline factories
- **`scroll-triggers.ts`**: ScrollTrigger helper functions
- **`animations.ts`**: Common GSAP animation presets

**`framer/`**:
- **`variants.ts`**: Library of Framer Motion variants (fade, slide, scale, etc.)
- **`transitions.ts`**: Transition timing presets (spring, tween, etc.)
- **`gestures.ts`**: Gesture handling utilities
- **`hooks.ts`**: Custom Framer Motion hooks

**`locomotive/`**:
- **`locomotive-config.ts`**: Locomotive Scroll configuration
- **`scroll-utils.ts`**: Scroll position utilities

#### **`hooks/`** - Custom React Hooks
Reusable logic extracted into hooks:
- **`use-media-query.ts`**: Responsive breakpoint detection
- **`use-scroll-progress.ts`**: Track scroll percentage
- **`use-mouse-position.ts`**: Track mouse coordinates
- **`use-window-size.ts`**: Window dimensions
- **`use-intersection-observer.ts`**: Detect element visibility
- **`use-prefers-reduced-motion.ts`**: Respect user motion preferences
- **`use-cursor.ts`**: Custom cursor state management
- **`use-lenis.ts`**: Lenis smooth scroll integration
- **`use-theme.ts`**: Theme switching logic

#### **`utils/`** - General Utilities
Helper functions:
- **`cn.ts`**: Combine Tailwind classes (clsx + tailwind-merge)
- **`format-date.ts`**: Date formatting utilities
- **`seo.ts`**: Generate SEO metadata
- **`validators.ts`**: Form validation functions
- **`constants.ts`**: App-wide constants

#### **`config/`** - Configuration
Centralized configuration:
- **`site.ts`**: Site metadata (name, description, URL, author)
- **`navigation.ts`**: Navigation menu structure
- **`social-links.ts`**: Social media links
- **`theme.ts`**: Theme color schemes and presets

### **`styles/`** - Styles
- **`globals.css`**: Tailwind directives, CSS variables, global resets
- **`animations.css`**: Custom CSS keyframe animations
- **`typography.css`**: Typography styles (headings, body text)
- **`utilities.css`**: Custom Tailwind utility classes

### **`data/`** - Static Data
Typed data exports for content:
- **`projects.ts`**: Array of project objects
- **`experience.ts`**: Work history timeline
- **`skills.ts`**: Tech stack with categories
- **`testimonials.ts`**: Client testimonials
- **`certifications.ts`**: Certifications and achievements

### **`public/`** - Public Assets
Static files served directly:
- **`images/`**: Organized by type (projects, logos, avatars, og)
- **`models/`**: 3D model files (.glb, .gltf)
- **`videos/`**: Video backgrounds and demos
- **`fonts/`**: Self-hosted custom fonts
- **`icons/`**: Favicons and app icons
- **`resume.pdf`**: Downloadable resume

### **`types/`** - TypeScript Types
Centralized type definitions:
- **`index.ts`**: Main types export
- **`project.ts`**: Project interface
- **`experience.ts`**: Experience interface
- **`skill.ts`**: Skill interface
- **`animation.ts`**: Animation config types
- **`locomotive.d.ts`**: Third-party type declarations

### **`providers/`** - Context Providers
React Context providers for global state:
- **`theme-provider.tsx`**: Dark/light theme management
- **`smooth-scroll-provider.tsx`**: Locomotive Scroll context
- **`cursor-provider.tsx`**: Custom cursor state
- **`animation-provider.tsx`**: Global animation settings

### **`config/`** (root) - App Configuration
- **`env.ts`**: Type-safe environment variable access
- **`metadata.ts`**: Next.js metadata configuration helper

---

## 🎯 Key Architecture Benefits

### **1. Scalability**
- Modular sections can be added/removed easily
- Components are isolated and reusable
- Clear separation of concerns

### **2. Maintainability**
- Logical folder structure
- Co-located related files
- Easy to find and update code

### **3. Performance**
- Code splitting by route
- Lazy loading for heavy animations
- Optimized asset organization

### **4. Developer Experience**
- Autocomplete-friendly structure
- Clear naming conventions
- TypeScript support throughout

### **5. Collaboration Ready**
- Self-documenting structure
- Consistent patterns
- Easy onboarding for new developers

### **6. Animation-First**
- Dedicated animation utilities
- Reusable animation components
- Multiple animation library support (GSAP + Framer)

---

## 🚀 Getting Started

### Install Dependencies
```bash
npm install
# or
pnpm install
```

### Configure shadcn/ui
```bash
npx shadcn-ui@latest init
```

### Add Initial Components
```bash
npx shadcn-ui@latest add button card
```

### Environment Setup
Create `.env.local` from `.env.example` and configure your variables.

### Run Development Server
```bash
npm run dev
```

---

## 📦 Recommended Package Structure

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.4",
    "gsap": "^3.12.2",
    "locomotive-scroll": "^4.1.4",
    "@radix-ui/react-*": "latest",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0",
    "three": "^0.158.0",
    "@react-three/fiber": "^8.15.0",
    "@react-three/drei": "^9.88.0",
    "lenis": "^1.0.29"
  },
  "devDependencies": {
    "typescript": "^5.2.2",
    "tailwindcss": "^3.3.5",
    "eslint": "^8.52.0",
    "prettier": "^3.0.3",
    "@types/react": "^18.2.33",
    "@types/node": "^20.8.10",
    "@types/locomotive-scroll": "^4.1.0"
  }
}
```

---

## 🎨 Best Practices

1. **Component Composition**: Build complex UIs from small, reusable components
2. **Animation Performance**: Use `will-change`, `transform`, and `opacity` for smooth animations
3. **Accessibility**: Include `prefers-reduced-motion` support
4. **Type Safety**: Define types for all data structures
5. **Code Splitting**: Lazy load heavy animation libraries
6. **SEO Optimization**: Use Next.js metadata API for dynamic SEO
7. **Asset Optimization**: Use Next.js Image component for automatic optimization

---

## 📚 Additional Resources

- [Next.js App Router Docs](https://nextjs.org/docs/app)
- [GSAP Documentation](https://greensock.com/docs/)
- [Framer Motion API](https://www.framer.com/motion/)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [21st.dev Components](https://21st.dev/)
- [Locomotive Scroll](https://locomotivemtl.github.io/locomotive-scroll/)

---

**This architecture is designed to grow with your portfolio while maintaining clean, organized, and performant code.** 🚀
