import { seo } from '@/data/seo';

/**
 * Common styles and utilities for OpenGraph image generation
 */

export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

// Brand colors matching your portfolio theme
export const colors = {
    background: '#0a0a0a',
    backgroundGradientStart: 'rgba(10, 10, 30, 1)',
    backgroundGradientEnd: 'rgba(5, 5, 15, 1)',
    primary: '#3b82f6', // blue-500
    secondary: '#8b5cf6', // violet-500
    accent: '#06b6d4', // cyan-500
    text: '#f8fafc', // slate-50
    textMuted: '#cbd5e1', // slate-300
    border: 'rgba(59, 130, 246, 0.3)',
};

/**
 * Base styles for OG images
 */
export const baseStyles = {
    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        background: `linear-gradient(135deg, ${colors.backgroundGradientStart} 0%, ${colors.backgroundGradientEnd} 100%)`,
        position: 'relative' as const,
    },

    overlay: {
        position: 'absolute' as const,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)`,
    },

    content: {
        display: 'flex',
        flexDirection: 'column' as const,
        justifyContent: 'space-between',
        padding: '80px',
        width: '100%',
        height: '100%',
        position: 'relative' as const,
        zIndex: 10,
    },

    title: {
        fontSize: 72,
        fontWeight: 700,
        color: colors.text,
        lineHeight: 1.1,
        marginBottom: 20,
        maxWidth: '900px',
    },

    subtitle: {
        fontSize: 36,
        fontWeight: 400,
        color: colors.textMuted,
        lineHeight: 1.3,
        maxWidth: '800px',
    },

    footer: {
        display: 'flex',
        flexDirection: 'row' as const,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },

    brandName: {
        fontSize: 28,
        fontWeight: 600,
        color: colors.text,
    },

    url: {
        fontSize: 24,
        fontWeight: 400,
        color: colors.textMuted,
    },

    badge: {
        display: 'flex',
        alignItems: 'center',
        padding: '12px 24px',
        background: `rgba(59, 130, 246, 0.2)`,
        border: `2px solid ${colors.border}`,
        borderRadius: 12,
        fontSize: 20,
        fontWeight: 500,
        color: colors.primary,
    },

    decorativeCorner: {
        position: 'absolute' as const,
        width: 200,
        height: 200,
        border: `2px solid ${colors.border}`,
        borderRadius: 20,
    },
};

/**
 * Page-specific configurations
 */
export const pageConfigs = {
    home: {
        title: 'Full Stack Developer & AI/ML Enthusiast',
        subtitle: 'Building scalable applications with React, Next.js, and modern web technologies',
        badge: 'Portfolio',
        gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
    },
    about: {
        title: 'About Me',
        subtitle: 'Passionate developer crafting digital experiences and solving real-world problems',
        badge: 'About',
        gradient: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(59, 130, 246, 0.15) 100%)',
    },
    work: {
        title: 'Projects & Work',
        subtitle: 'Selected projects showcasing full-stack development and creative problem solving',
        badge: 'Projects',
        gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(236, 72, 153, 0.15) 100%)',
    },
    experience: {
        title: 'Experience',
        subtitle: 'Professional journey and technologies mastered over time',
        badge: 'Experience',
        gradient: 'linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(6, 182, 212, 0.15) 100%)',
    },
    skills: {
        title: 'Skills & Technologies',
        subtitle: 'Modern tech stack for building exceptional web applications',
        badge: 'Skills',
        gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(239, 68, 68, 0.15) 100%)',
    },
    contact: {
        title: "Let's Work Together",
        subtitle: 'Available for freelance projects and full-time opportunities',
        badge: 'Contact',
        gradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
    },
};

/**
 * Generate base OG image layout
 */
export function generateOGLayout(
    title: string,
    subtitle: string,
    badge: string,
    gradient?: string
) {
    return {
        ...baseStyles.container,
        background: gradient || baseStyles.container.background,
    };
}

/**
 * Extract domain name from URL for display
 */
export function getDomainName(url: string): string {
    try {
        const urlObj = new URL(url);
        return urlObj.hostname.replace('www.', '');
    } catch {
        return url;
    }
}

/**
 * Load the pre-rendered voxel base image
 * In Edge runtime, we use fetch with a URL relative to import.meta.url
 */
export async function getVoxelBaseImage(): Promise<ArrayBuffer | null> {
    try {
        // Navigate up from lib/utils/og-image-utils.ts to public/images/og/voxel-base.png
        const imageUrl = new URL('../../public/images/og/voxel-base.png', import.meta.url);
        const res = await fetch(imageUrl);

        if (res.ok) {
            return await res.arrayBuffer();
        }
        return null;
    } catch (e) {
        console.warn('Could not load voxel base image', e);
        return null;
    }
}
