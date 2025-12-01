'use client';

import { useEffect, useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';
import {
    loadImage,
    processImageData,
    createBinaryMatrix,
    countVoxels,
    calculateScale,
} from '@/lib/three/imageProcessor';
import { VoxelSceneProps, BinaryMatrix } from '@/types/three';

/**
 * Enhanced VoxelScene with optional features:
 * - 3D text mode (renders "0" and "1" as 3D text)
 * - Color preservation
 * - Z-depth displacement
 */
export function VoxelSceneEnhanced({
    imagePath,
    config,
    onImageLoaded,
    onProcessingComplete,
}: VoxelSceneProps) {
    const meshRef = useRef<THREE.InstancedMesh>(null);
    const textGroupRef = useRef<THREE.Group>(null);
    const matrixRef = useRef<BinaryMatrix | null>(null);
    const { camera } = useThree();

    // Create geometry based on mode
    const geometry = useMemo(() => {
        if (config.useTextMode) {
            // For text mode, we'll use individual Text3D components
            return null;
        } else if (config.geometryMode === 'cube') {
            return new THREE.BoxGeometry(config.voxelSize, config.voxelSize, config.voxelSize);
        } else {
            return new THREE.PlaneGeometry(config.voxelSize, config.voxelSize);
        }
    }, [config.geometryMode, config.voxelSize, config.useTextMode]);

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
                const texture = await loadImage(imagePath);
                const image = texture.image as HTMLImageElement;

                if (!mounted) return;

                onImageLoaded?.(image.width, image.height);

                const pixels = processImageData(texture, config.pixelStep);
                const matrix = createBinaryMatrix(
                    pixels,
                    image.width,
                    image.height,
                    config.threshold,
                    config.pixelStep,
                    config.preserveColor
                );

                matrixRef.current = matrix;

                const voxelCount = countVoxels(matrix, config.invertBinary);
                onProcessingComplete?.(voxelCount);

                if (!config.useTextMode) {
                    updateInstancedMesh(matrix);
                }
            } catch (error) {
                console.error('Error processing image:', error);
            }
        }

        processImage();

        return () => {
            mounted = false;
        };
    }, [
        imagePath,
        config.threshold,
        config.pixelStep,
        config.invertBinary,
        config.preserveColor,
        config.useTextMode,
    ]);

    // Update instanced mesh
    const updateInstancedMesh = (matrix: BinaryMatrix) => {
        if (!meshRef.current) return;

        const targetValue = config.invertBinary ? 0 : 1;
        let instanceIndex = 0;

        const centerX = (matrix.width * config.voxelSize) / 2;
        const centerY = (matrix.height * config.voxelSize) / 2;

        const tempObject = new THREE.Object3D();
        const tempColor = new THREE.Color();

        for (let y = 0; y < matrix.height; y++) {
            for (let x = 0; x < matrix.width; x++) {
                if (matrix.data[y][x] === targetValue) {
                    const posX = x * config.voxelSize - centerX;
                    const posY = -(y * config.voxelSize - centerY);

                    // Apply Z-depth based on luminance or binary value
                    let posZ = 0;
                    if (config.zDepth > 0) {
                        posZ = matrix.data[y][x] * config.zDepth;
                    }

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
        const distance = Math.max(matrix.width, matrix.height) * config.voxelSize * 1.5;
        camera.position.set(distance * 0.5, distance * 0.3, distance);
        camera.lookAt(0, 0, 0);
    };

    // Calculate max instances
    const maxInstances = useMemo(() => {
        return Math.ceil((1000 / config.pixelStep) * (1000 / config.pixelStep));
    }, [config.pixelStep]);

    // Render text mode voxels
    const renderTextVoxels = () => {
        if (!matrixRef.current || !config.useTextMode) return null;

        const matrix = matrixRef.current;
        const targetValue = config.invertBinary ? 0 : 1;
        const voxels: JSX.Element[] = [];

        const centerX = (matrix.width * config.voxelSize) / 2;
        const centerY = (matrix.height * config.voxelSize) / 2;

        for (let y = 0; y < matrix.height; y++) {
            for (let x = 0; x < matrix.width; x++) {
                if (matrix.data[y][x] === targetValue) {
                    const posX = x * config.voxelSize - centerX;
                    const posY = -(y * config.voxelSize - centerY);
                    const posZ = config.zDepth > 0 ? matrix.data[y][x] * config.zDepth : 0;

                    const color =
                        config.preserveColor && matrix.colors
                            ? matrix.colors[y][x]
                            : new THREE.Color(0xffffff);

                    voxels.push(
                        <Center key={`${x}-${y}`} position={[posX, posY, posZ]}>
                            <Text3D
                                font="/fonts/helvetiker_regular.typeface.json"
                                size={config.voxelSize * 0.8}
                                height={config.voxelSize * 0.2}
                            >
                                {matrix.data[y][x].toString()}
                                <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
                            </Text3D>
                        </Center>
                    );
                }
            }
        }

        return voxels;
    };

    // Subtle rotation animation
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
        }
        if (textGroupRef.current) {
            textGroupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
        }
    });

    return (
        <>
            {/* Lighting */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
            <directionalLight position={[-10, -10, -5]} intensity={0.3} />

            {/* Render based on mode */}
            {config.useTextMode ? (
                <group ref={textGroupRef}>{renderTextVoxels()}</group>
            ) : (
                geometry && (
                    <instancedMesh
                        ref={meshRef}
                        args={[geometry, material, maxInstances]}
                        frustumCulled={false}
                    >
                        <meshStandardMaterial />
                    </instancedMesh>
                )
            )}

            {/* Controls */}
            <OrbitControls
                enableDamping
                dampingFactor={0.05}
                rotateSpeed={0.5}
                zoomSpeed={0.8}
                minDistance={5}
                maxDistance={100}
            />
        </>
    );
}
