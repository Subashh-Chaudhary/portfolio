import * as THREE from 'three';
import { BinaryMatrix, PixelData } from '@/types/three';

/**
 * Loads an image and returns a THREE.Texture
 */
export async function loadImage(imagePath: string): Promise<THREE.Texture> {
    return new Promise((resolve, reject) => {
        const loader = new THREE.TextureLoader();
        loader.load(
            imagePath,
            (texture) => {
                resolve(texture);
            },
            undefined,
            (error) => {
                reject(error);
            }
        );
    });
}

/**
 * Converts RGB values to grayscale luminance using the standard formula
 * L = 0.2126*R + 0.7152*G + 0.0722*B
 */
export function rgbToLuminance(r: number, g: number, b: number): number {
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * Processes an image texture and extracts pixel data
 */
export function processImageData(
    texture: THREE.Texture,
    pixelStep: number = 1
): PixelData[] {
    const image = texture.image as HTMLImageElement;

    // Create off-screen canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) {
        throw new Error('Failed to get 2D context');
    }

    canvas.width = image.width;
    canvas.height = image.height;

    // Draw image to canvas
    ctx.drawImage(image, 0, 0);

    // Get pixel data
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels: PixelData[] = [];

    // Process pixels with step
    for (let y = 0; y < canvas.height; y += pixelStep) {
        for (let x = 0; x < canvas.width; x += pixelStep) {
            const index = (y * canvas.width + x) * 4;
            const r = imageData.data[index];
            const g = imageData.data[index + 1];
            const b = imageData.data[index + 2];

            const luminance = rgbToLuminance(r, g, b);
            const color = new THREE.Color(r / 255, g / 255, b / 255);

            pixels.push({
                luminance,
                color,
                x,
                y,
            });
        }
    }

    return pixels;
}

/**
 * Converts pixel data to a binary matrix based on threshold
 */
export function createBinaryMatrix(
    pixels: PixelData[],
    width: number,
    height: number,
    threshold: number,
    pixelStep: number,
    preserveColor: boolean = false
): BinaryMatrix {
    const matrixWidth = Math.ceil(width / pixelStep);
    const matrixHeight = Math.ceil(height / pixelStep);

    const data: number[][] = Array(matrixHeight)
        .fill(0)
        .map(() => Array(matrixWidth).fill(0));

    const colors: THREE.Color[][] = Array(matrixHeight)
        .fill(0)
        .map(() => Array(matrixWidth).fill(new THREE.Color(1, 1, 1)));

    pixels.forEach((pixel) => {
        const matrixX = Math.floor(pixel.x / pixelStep);
        const matrixY = Math.floor(pixel.y / pixelStep);

        if (matrixX < matrixWidth && matrixY < matrixHeight) {
            data[matrixY][matrixX] = pixel.luminance > threshold ? 1 : 0;
            if (preserveColor) {
                colors[matrixY][matrixX] = pixel.color;
            }
        }
    });

    return {
        data,
        width: matrixWidth,
        height: matrixHeight,
        colors: preserveColor ? colors : undefined,
    };
}

/**
 * Counts the number of 1s (or 0s if inverted) in a binary matrix
 */
export function countVoxels(matrix: BinaryMatrix, inverted: boolean = false): number {
    const targetValue = inverted ? 0 : 1;
    let count = 0;

    for (let y = 0; y < matrix.height; y++) {
        for (let x = 0; x < matrix.width; x++) {
            if (matrix.data[y][x] === targetValue) {
                count++;
            }
        }
    }

    return count;
}

/**
 * Calculates the optimal scale factor to fit the voxel structure in the viewport
 */
export function calculateScale(
    matrixWidth: number,
    matrixHeight: number,
    voxelSize: number,
    targetSize: number = 10
): number {
    const maxDimension = Math.max(matrixWidth, matrixHeight);
    const totalSize = maxDimension * voxelSize;
    return targetSize / totalSize;
}
