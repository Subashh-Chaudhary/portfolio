import * as THREE from 'three';

/**
 * Configuration for voxel rendering
 */
export interface VoxelConfig {
    /** Threshold value for binary conversion (0-255) */
    threshold: number;
    /** Step size for pixel sampling (higher = lower density) */
    pixelStep: number;
    /** Geometry type for voxels */
    geometryMode: 'cube' | 'plane';
    /** Size of each voxel */
    voxelSize: number;
    /** Whether to invert the binary output (show 0s instead of 1s) */
    invertBinary: boolean;
    /** Whether to use 3D text instead of cubes */
    useTextMode: boolean;
    /** Whether to preserve original pixel colors */
    preserveColor: boolean;
    /** Z-depth displacement amount */
    zDepth: number;
}

/**
 * Binary matrix data structure
 */
export interface BinaryMatrix {
    /** 2D array of binary values (0 or 1) */
    data: number[][];
    /** Width of the matrix */
    width: number;
    /** Height of the matrix */
    height: number;
    /** Optional color data for each pixel */
    colors?: THREE.Color[][];
}

/**
 * Pixel data from image processing
 */
export interface PixelData {
    /** Luminance value (0-255) */
    luminance: number;
    /** Original RGB color */
    color: THREE.Color;
    /** X position in image */
    x: number;
    /** Y position in image */
    y: number;
}

/**
 * Props for VoxelScene component
 */
export interface VoxelSceneProps {
    /** Path to the image file */
    imagePath: string;
    /** Voxel configuration */
    config: VoxelConfig;
    /** Callback when image is loaded */
    onImageLoaded?: (width: number, height: number) => void;
    /** Callback when processing is complete */
    onProcessingComplete?: (voxelCount: number) => void;
}

/**
 * Props for BinaryVoxelPortrait component
 */
export interface BinaryVoxelPortraitProps {
    /** Path to the image file */
    imagePath?: string;
    /** Initial threshold value */
    initialThreshold?: number;
    /** Initial pixel step */
    initialPixelStep?: number;
    /** Initial geometry mode */
    initialGeometryMode?: 'cube' | 'plane';
    /** Whether to show UI controls */
    showControls?: boolean;
    /** Custom CSS class name */
    className?: string;
}
