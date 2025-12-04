/**
 * Image Optimization Utilities
 * Provides functions for responsive image sizing and format selection
 */

export interface ImageDimensions {
    width: number;
    height: number;
}

export interface ResponsiveImageConfig {
    src: string;
    sizes: string;
    quality?: number;
    priority?: boolean;
}

/**
 * Calculate optimal image dimensions based on viewport and container
 */
export function getOptimalImageSize(
    containerWidth: number,
    devicePixelRatio: number = 1
): number {
    // Round up to nearest standard size for better caching
    const standardSizes = [640, 750, 828, 1080, 1200, 1920, 2048];
    const targetWidth = containerWidth * devicePixelRatio;

    return standardSizes.find(size => size >= targetWidth) || standardSizes[standardSizes.length - 1];
}

/**
 * Generate srcset string for responsive images
 */
export function generateSrcSet(
    basePath: string,
    widths: number[]
): string {
    return widths
        .map(width => `${basePath}?w=${width} ${width}w`)
        .join(', ');
}

/**
 * Get sizes attribute for responsive images
 */
export function getImageSizes(breakpoints: { [key: string]: string }): string {
    return Object.entries(breakpoints)
        .map(([breakpoint, size]) => `(max-width: ${breakpoint}) ${size}`)
        .join(', ');
}

/**
 * Determine if image should be prioritized (above-the-fold)
 */
export function shouldPrioritizeImage(elementTop: number, viewportHeight: number): boolean {
    return elementTop < viewportHeight * 1.5; // Load images within 1.5 viewports
}

/**
 * Get blur data URL for placeholder
 */
export function getBlurDataURL(width: number = 10, height: number = 10): string {
    // Generate a simple gray blur placeholder
    const canvas = typeof document !== 'undefined' ? document.createElement('canvas') : null;
    if (!canvas) {
        // Server-side fallback
        return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMjAyMDIwIi8+PC9zdmc+';
    }

    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (ctx) {
        ctx.fillStyle = '#202020';
        ctx.fillRect(0, 0, width, height);
    }

    return canvas.toDataURL();
}

/**
 * Responsive image configurations for common use cases
 */
export const imageConfigs = {
    hero: {
        sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw',
        quality: 85,
        priority: true,
    },
    thumbnail: {
        sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
        quality: 80,
        priority: false,
    },
    avatar: {
        sizes: '(max-width: 640px) 96px, 128px',
        quality: 90,
        priority: true,
    },
    fullWidth: {
        sizes: '100vw',
        quality: 85,
        priority: false,
    },
} as const;
