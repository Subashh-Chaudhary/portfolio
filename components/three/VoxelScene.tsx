'use client';

import { useEffect, useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import {
    loadImage,
    processImageData,
    createBinaryMatrix,
    countVoxels,
    calculateScale,
} from '@/lib/three/imageProcessor';
import { VoxelSceneProps, BinaryMatrix } from '@/types/three';

export function VoxelScene({
    imagePath,
    config,
    onImageLoaded,
    onProcessingComplete,
}: VoxelSceneProps) {
    const meshRef = useRef<THREE.InstancedMesh>(null);
    const matrixRef = useRef<BinaryMatrix | null>(null);
    const { camera } = useThree();

    // Create geometry based on mode
    const geometry = useMemo(() => {
        if (config.geometryMode === 'cube') {
            return new THREE.BoxGeometry(config.voxelSize, config.voxelSize, config.voxelSize);
        } else {
            return new THREE.PlaneGeometry(config.voxelSize, config.voxelSize);
        }
    }, [config.geometryMode, config.voxelSize]);

    // Create material
    const material = useMemo(() => {
        return new THREE.MeshStandardMaterial({
            color: 0xffffff,
            metalness: 0.3,
            roughness: 0.4,
        });
    }, []);

    // Load and process image
    useEffect(() => {
        let mounted = true;

        async function processImage() {
            try {
                // Load image
                const texture = await loadImage(imagePath);
                const image = texture.image as HTMLImageElement;

                if (!mounted) return;

                onImageLoaded?.(image.width, image.height);

                // Process pixels
                const pixels = processImageData(texture, config.pixelStep);

                // Create binary matrix
                const matrix = createBinaryMatrix(
                    pixels,
                    image.width,
                    image.height,
                    config.threshold,
                    config.pixelStep,
                    config.preserveColor
                );

                matrixRef.current = matrix;

                // Count voxels
                const voxelCount = countVoxels(matrix, config.invertBinary);
                onProcessingComplete?.(voxelCount);

                // Update instanced mesh
                updateInstancedMesh(matrix);
            } catch (error) {
                console.error('Error processing image:', error);
            }
        }

        processImage();

        return () => {
            mounted = false;
        };
    }, [imagePath, config.threshold, config.pixelStep, config.invertBinary, config.preserveColor]);

    // Update instanced mesh when matrix changes
    const updateInstancedMesh = (matrix: BinaryMatrix) => {
        if (!meshRef.current) return;

        const targetValue = config.invertBinary ? 0 : 1;
        let instanceIndex = 0;

        // Calculate center offset
        const centerX = (matrix.width * config.voxelSize) / 2;
        const centerY = (matrix.height * config.voxelSize) / 2;

        const tempObject = new THREE.Object3D();
        const tempColor = new THREE.Color();

        for (let y = 0; y < matrix.height; y++) {
            for (let x = 0; x < matrix.width; x++) {
                if (matrix.data[y][x] === targetValue) {
                    // Position voxel
                    const posX = x * config.voxelSize - centerX;
                    const posY = -(y * config.voxelSize - centerY); // Flip Y to match image orientation
                    const posZ = config.preserveColor ? 0 : (matrix.data[y][x] * config.zDepth);

                    tempObject.position.set(posX, posY, posZ);
                    tempObject.updateMatrix();

                    meshRef.current.setMatrixAt(instanceIndex, tempObject.matrix);

                    // Set color
                    if (config.preserveColor && matrix.colors) {
                        tempColor.copy(matrix.colors[y][x]);
                    } else {
                        tempColor.setHex(0xffffff);
                    }
                    meshRef.current.setColorAt(instanceIndex, tempColor);

                    instanceIndex++;
                }
            }
        }

        meshRef.current.instanceMatrix.needsUpdate = true;
        if (meshRef.current.instanceColor) {
            meshRef.current.instanceColor.needsUpdate = true;
        }

        // Position camera
        const scale = calculateScale(matrix.width, matrix.height, config.voxelSize);
        const distance = Math.max(matrix.width, matrix.height) * config.voxelSize * 1.5;
        camera.position.set(distance * 0.5, distance * 0.3, distance);
        camera.lookAt(0, 0, 0);
    };

    // Calculate max instances
    const maxInstances = useMemo(() => {
        // Estimate based on typical image size and pixel step
        return Math.ceil((1000 / config.pixelStep) * (1000 / config.pixelStep));
    }, [config.pixelStep]);

    // Subtle rotation animation
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
        }
    });

    return (
        <>
            {/* Lighting */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
            <directionalLight position={[-10, -10, -5]} intensity={0.3} />

            {/* Instanced Mesh */}
            <instancedMesh
                ref={meshRef}
                args={[geometry, material, maxInstances]}
                frustumCulled={false}
            >
                <meshStandardMaterial />
            </instancedMesh>

            {/* Controls */}
            <OrbitControls
                makeDefault
                enableDamping
                dampingFactor={0.05}
                rotateSpeed={0.5}
                zoomSpeed={0.8}
                enableZoom={true}
                minDistance={2}
                maxDistance={100}
            />
        </>
    );
}
