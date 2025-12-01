# Binary Voxel Portrait Integration Guide

This guide explains how to integrate and use the Binary Voxel Portrait component in your Next.js portfolio.

## Quick Start

### Basic Usage

```tsx
import { BinaryVoxelPortrait } from '@/components/three/BinaryVoxelPortrait';

export default function Page() {
  return (
    <div className="w-full h-screen">
      <BinaryVoxelPortrait />
    </div>
  );
}
```

### Custom Configuration

```tsx
<BinaryVoxelPortrait
  imagePath="/images/profile.jpg"
  initialThreshold={128}
  initialPixelStep={4}
  initialGeometryMode="cube"
  showControls={true}
  className="custom-class"
/>
```

## Component Props

### BinaryVoxelPortrait

| Prop                  | Type                | Default                 | Description                     |
| --------------------- | ------------------- | ----------------------- | ------------------------------- |
| `imagePath`           | `string`            | `'/images/profile.jpg'` | Path to the image file          |
| `initialThreshold`    | `number`            | `128`                   | Initial threshold value (0-255) |
| `initialPixelStep`    | `number`            | `4`                     | Initial pixel sampling step     |
| `initialGeometryMode` | `'cube' \| 'plane'` | `'cube'`                | Initial geometry type           |
| `showControls`        | `boolean`           | `true`                  | Whether to show UI controls     |
| `className`           | `string`            | `''`                    | Custom CSS class                |

## Configuration Options

### Threshold (0-255)
Controls the brightness cutoff for binary conversion:
- **Lower values** (0-100): More voxels, darker areas included
- **Medium values** (100-150): Balanced representation
- **Higher values** (150-255): Fewer voxels, only brightest areas

### Pixel Step (1-20)
Controls the density of voxels:
- **Lower values** (1-5): High density, more detail, more voxels
- **Higher values** (10-20): Low density, abstract look, better performance

### Geometry Mode
- **Cube**: 3D cubic voxels (more depth)
- **Plane**: Flat 2D planes (cleaner look)

### Advanced Options
- **Invert Binary**: Show 0s instead of 1s
- **Preserve Colors**: Use original pixel colors instead of white

## Using the Enhanced Version

For advanced features like 3D text mode:

```tsx
'use client';

import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { VoxelSceneEnhanced } from '@/components/three/VoxelSceneEnhanced';
import { VoxelConfig } from '@/types/three';

export default function EnhancedPortrait() {
  const [config, setConfig] = useState<VoxelConfig>({
    threshold: 128,
    pixelStep: 4,
    geometryMode: 'cube',
    voxelSize: 0.1,
    invertBinary: false,
    useTextMode: true, // Enable 3D text
    preserveColor: true, // Use original colors
    zDepth: 0.5, // Add depth variation
  });

  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [15, 10, 15], fov: 50 }}>
        <VoxelSceneEnhanced
          imagePath="/images/profile.jpg"
          config={config}
        />
      </Canvas>
    </div>
  );
}
```

## Performance Considerations

### Optimization Tips

1. **Pixel Step**: Use higher values (6-10) for better performance
2. **Image Size**: Resize large images to 500-800px before processing
3. **InstancedMesh**: Already optimized for thousands of voxels
4. **Text Mode**: Avoid on low-end devices (use cube/plane instead)

### Expected Performance

| Pixel Step | Voxels  | FPS (Desktop) | FPS (Mobile) |
| ---------- | ------- | ------------- | ------------ |
| 2          | ~60,000 | 30-45         | 15-25        |
| 4          | ~15,000 | 55-60         | 40-55        |
| 8          | ~4,000  | 60            | 55-60        |

## Customization Examples

### Dark Theme with Purple Accent

```tsx
<div className="w-full h-screen bg-gradient-to-br from-purple-950 via-gray-900 to-black">
  <BinaryVoxelPortrait
    initialThreshold={140}
    initialPixelStep={5}
  />
</div>
```

### Minimal Controls

```tsx
<BinaryVoxelPortrait
  showControls={false}
  initialThreshold={128}
  initialPixelStep={6}
/>
```

### Programmatic Control

```tsx
'use client';

import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { VoxelScene } from '@/components/three/VoxelScene';

export default function CustomControl() {
  const [threshold, setThreshold] = useState(128);

  return (
    <div className="w-full h-screen">
      <Canvas>
        <VoxelScene
          imagePath="/images/profile.jpg"
          config={{
            threshold,
            pixelStep: 4,
            geometryMode: 'cube',
            voxelSize: 0.1,
            invertBinary: false,
            useTextMode: false,
            preserveColor: false,
            zDepth: 0.2,
          }}
        />
      </Canvas>
      
      <button onClick={() => setThreshold(prev => prev + 10)}>
        Increase Threshold
      </button>
    </div>
  );
}
```

## Troubleshooting

### Image Not Loading
- Ensure image path is correct and accessible
- Check that image is in the `public` directory
- Verify image format (JPG, PNG supported)

### Poor Performance
- Increase `pixelStep` value
- Reduce image resolution
- Disable `preserveColor` and `useTextMode`
- Use `plane` geometry instead of `cube`

### TypeScript Errors
- Ensure all dependencies are installed: `pnpm install`
- Check that `@types/three` is in devDependencies
- Verify import paths match your project structure

## Browser Compatibility

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ⚠️ Mobile browsers (reduced performance)

## Next Steps

1. Replace `public/images/profile.jpg` with your actual photo
2. Experiment with threshold and pixel step values
3. Try different geometry modes
4. Test on various devices for performance
5. Customize colors and styling to match your portfolio theme
