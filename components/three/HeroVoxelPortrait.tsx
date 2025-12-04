'use client';

import { Canvas } from '@react-three/fiber';
import { VoxelScene } from './VoxelScene';
import { VoxelConfig } from '@/types/three';
import { useState, useEffect } from 'react';

interface HeroVoxelPortraitProps {
    className?: string;
}

/**
 * Optimized Binary Voxel Portrait for Hero Section
 * Pre-configured with optimal settings for performance and aesthetics
 */
export function HeroVoxelPortrait({ className = '' }: HeroVoxelPortraitProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Detect mobile devices for performance optimization
        setIsMobile(window.innerWidth < 768);

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Optimized configuration for hero section
    const config: VoxelConfig = {
        threshold: 129,
        pixelStep: 1,
        geometryMode: 'cube',
        voxelSize: 0.08, // Smaller voxels for higher density
        invertBinary: false,
        useTextMode: false,
        preserveColor: false,
        zDepth: 0.15,
    };

    return (
        <div className={`w-full h-full ${className}`} style={{ minHeight: '100vh' }}>
            {/* Loading placeholder to prevent CLS */}
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent via-blue-900/5 to-black">
                    <div className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
                </div>
            )}

            <Canvas
                camera={{ position: [20, 15, 20], fov: 45 }}
                className="bg-transparent"
                gl={{
                    alpha: true,
                    antialias: !isMobile, // Disable antialiasing on mobile for better performance
                    powerPreference: 'high-performance',
                }}
                dpr={isMobile ? 1 : Math.min(window.devicePixelRatio, 2)} // Limit DPR for performance
                onCreated={() => setIsLoading(false)}
            >
                <VoxelScene
                    imagePath="/images/profile.jpg"
                    config={config}
                />
            </Canvas>
        </div>
    );
}
