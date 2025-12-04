'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import { imageConfigs } from '@/lib/utils/image-optimizer';

interface OptimizedImageProps extends Omit<ImageProps, 'src' | 'alt'> {
    src: string;
    alt: string;
    preset?: keyof typeof imageConfigs;
    aspectRatio?: number;
    containerClassName?: string;
}

/**
 * Optimized Image Component
 * Wrapper around Next.js Image with automatic format selection,
 * proper sizing to prevent CLS, and performance optimizations
 */
export function OptimizedImage({
    src,
    alt,
    preset = 'thumbnail',
    aspectRatio,
    containerClassName = '',
    priority,
    quality,
    sizes,
    className = '',
    ...props
}: OptimizedImageProps) {
    const [isLoading, setIsLoading] = useState(true);
    const config = imageConfigs[preset];

    // Use preset values as defaults, allow overrides
    const finalPriority = priority !== undefined ? priority : config.priority;
    const finalQuality = quality || config.quality;
    const finalSizes = sizes || config.sizes;

    return (
        <div
            className={`relative overflow-hidden ${containerClassName}`}
            style={aspectRatio ? { aspectRatio: aspectRatio.toString() } : undefined}
        >
            <Image
                src={src}
                alt={alt}
                fill={!props.width && !props.height}
                sizes={finalSizes}
                quality={finalQuality}
                priority={finalPriority}
                className={`${className} ${isLoading ? 'scale-110 blur-sm' : 'scale-100 blur-0'
                    } transition-all duration-500`}
                onLoad={() => setIsLoading(false)}
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMTAxMDEwIi8+PC9zdmc+"
                {...props}
            />
        </div>
    );
}

/**
 * Hero Image Component
 * Optimized for above-the-fold hero images with priority loading
 */
export function HeroImage(props: Omit<OptimizedImageProps, 'preset'>) {
    return <OptimizedImage {...props} preset="hero" priority />;
}

/**
 * Thumbnail Image Component
 * Optimized for project thumbnails and gallery images
 */
export function ThumbnailImage(props: Omit<OptimizedImageProps, 'preset'>) {
    return <OptimizedImage {...props} preset="thumbnail" />;
}

/**
 * Avatar Image Component
 * Optimized for small profile images
 */
export function AvatarImage(props: Omit<OptimizedImageProps, 'preset'>) {
    return <OptimizedImage {...props} preset="avatar" />;
}
