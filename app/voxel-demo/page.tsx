'use client';

import { BinaryVoxelPortrait } from '@/components/three/BinaryVoxelPortrait';

/**
 * Demo page showcasing the Binary Voxel Portrait component
 * 
 * This page demonstrates the Three.js implementation that converts
 * an input image into a binary 0/1 visual structure.
 * 
 * Usage:
 * - Add this to your app/voxel-demo/page.tsx
 * - Or import BinaryVoxelPortrait into any page
 */
export default function VoxelDemoPage() {
    return (
        <main className="w-full h-screen">
            <BinaryVoxelPortrait
                imagePath="/images/profile.jpg"
                initialThreshold={128}
                initialPixelStep={4}
                initialGeometryMode="cube"
                showControls={true}
            />
        </main>
    );
}
