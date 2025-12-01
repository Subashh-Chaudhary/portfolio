'use client';

import { useState, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { VoxelScene } from './VoxelScene';
import { BinaryVoxelPortraitProps, VoxelConfig } from '@/types/three';

export function BinaryVoxelPortrait({
    imagePath = '/images/profile.jpg',
    initialThreshold = 128,
    initialPixelStep = 4,
    initialGeometryMode = 'cube',
    showControls = true,
    className = '',
}: BinaryVoxelPortraitProps) {
    const [config, setConfig] = useState<VoxelConfig>({
        threshold: initialThreshold,
        pixelStep: initialPixelStep,
        geometryMode: initialGeometryMode,
        voxelSize: 0.1,
        invertBinary: false,
        useTextMode: false,
        preserveColor: false,
        zDepth: 0.2,
    });

    const [imageInfo, setImageInfo] = useState<{ width: number; height: number } | null>(null);
    const [voxelCount, setVoxelCount] = useState<number>(0);

    const handleImageLoaded = useCallback((width: number, height: number) => {
        setImageInfo({ width, height });
    }, []);

    const handleProcessingComplete = useCallback((count: number) => {
        setVoxelCount(count);
    }, []);

    const updateConfig = (updates: Partial<VoxelConfig>) => {
        setConfig((prev) => ({ ...prev, ...updates }));
    };

    return (
        <div className={`relative w-full h-full ${className}`}>
            {/* Three.js Canvas */}
            <Canvas
                camera={{ position: [15, 10, 15], fov: 50 }}
                className="bg-gradient-to-br from-gray-950 via-gray-900 to-black"
            >
                <VoxelScene
                    imagePath={imagePath}
                    config={config}
                    onImageLoaded={handleImageLoaded}
                    onProcessingComplete={handleProcessingComplete}
                />
            </Canvas>

            {/* UI Controls */}
            {showControls && (
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md rounded-lg p-6 text-white shadow-2xl border border-white/10 max-w-sm">
                    <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Binary Voxel Controls
                    </h3>

                    {/* Image Info */}
                    {imageInfo && (
                        <div className="mb-4 text-xs text-gray-400 space-y-1">
                            <p>Image: {imageInfo.width} × {imageInfo.height}px</p>
                            <p>Voxels: {voxelCount.toLocaleString()}</p>
                        </div>
                    )}

                    {/* Threshold Slider */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">
                            Threshold: <span className="text-blue-400">{config.threshold}</span>
                        </label>
                        <input
                            type="range"
                            min="0"
                            max="255"
                            value={config.threshold}
                            onChange={(e) => updateConfig({ threshold: parseInt(e.target.value) })}
                            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>0</span>
                            <span>255</span>
                        </div>
                    </div>

                    {/* Pixel Step Slider */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">
                            Density: <span className="text-purple-400">{config.pixelStep}px</span>
                        </label>
                        <input
                            type="range"
                            min="1"
                            max="20"
                            value={config.pixelStep}
                            onChange={(e) => updateConfig({ pixelStep: parseInt(e.target.value) })}
                            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>Dense</span>
                            <span>Sparse</span>
                        </div>
                    </div>

                    {/* Geometry Mode Toggle */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Geometry Mode</label>
                        <div className="flex gap-2">
                            <button
                                onClick={() => updateConfig({ geometryMode: 'cube' })}
                                className={`flex-1 py-2 px-4 rounded-md transition-all ${config.geometryMode === 'cube'
                                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                    }`}
                            >
                                Cube
                            </button>
                            <button
                                onClick={() => updateConfig({ geometryMode: 'plane' })}
                                className={`flex-1 py-2 px-4 rounded-md transition-all ${config.geometryMode === 'plane'
                                    ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/50'
                                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                    }`}
                            >
                                Plane
                            </button>
                        </div>
                    </div>

                    {/* Advanced Options */}
                    <div className="space-y-2 pt-4 border-t border-gray-700">
                        <label className="flex items-center justify-between cursor-pointer group">
                            <span className="text-sm group-hover:text-blue-400 transition-colors">
                                Invert Binary
                            </span>
                            <input
                                type="checkbox"
                                checked={config.invertBinary}
                                onChange={(e) => updateConfig({ invertBinary: e.target.checked })}
                                className="w-4 h-4 rounded bg-gray-700 border-gray-600 text-blue-500 focus:ring-blue-500 focus:ring-offset-gray-900"
                            />
                        </label>

                        <label className="flex items-center justify-between cursor-pointer group">
                            <span className="text-sm group-hover:text-purple-400 transition-colors">
                                Preserve Colors
                            </span>
                            <input
                                type="checkbox"
                                checked={config.preserveColor}
                                onChange={(e) => updateConfig({ preserveColor: e.target.checked })}
                                className="w-4 h-4 rounded bg-gray-700 border-gray-600 text-purple-500 focus:ring-purple-500 focus:ring-offset-gray-900"
                            />
                        </label>
                    </div>
                </div>
            )}

            {/* Instructions */}
            {showControls && (
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg px-4 py-2 text-xs text-gray-400">
                    <p>🖱️ Drag to rotate • Scroll to zoom</p>
                </div>
            )}
        </div>
    );
}
