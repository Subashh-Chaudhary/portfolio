'use client';

import { Canvas } from '@react-three/fiber';
import { VoxelScene } from './VoxelScene';
import { VoxelConfig } from '@/types/three';

interface HeroVoxelPortraitProps {
    className?: string;
}

/**
 * Optimized Binary Voxel Portrait for Hero Section
 * Pre-configured with optimal settings for performance and aesthetics
 */
export function HeroVoxelPortrait({ className = '' }: HeroVoxelPortraitProps) {
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
        <div className={`w-full h-full ${className}`}>
            <Canvas
                camera={{ position: [20, 15, 20], fov: 45 }}
                className="bg-transparent"
                gl={{ alpha: true, antialias: true }}
            >
                <VoxelScene
                    imagePath="/images/profile.jpg"
                    config={config}
                />
            </Canvas>
        </div>
    );
}
