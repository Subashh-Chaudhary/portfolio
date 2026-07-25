'use client';

import { useState, useEffect } from 'react';
import { PerformanceTier } from '../three/performance-config';

export interface DeviceCapabilities {
  isMobile: boolean;
  hasWebGL: boolean;
  prefersReducedMotion: boolean;
  suggestedTier: PerformanceTier;
}

export function useDeviceCapabilities(): DeviceCapabilities {
  const [capabilities, setCapabilities] = useState<DeviceCapabilities>({
    isMobile: false,
    hasWebGL: true,
    prefersReducedMotion: false,
    suggestedTier: 'high',
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // 1. Mobile Check
    const isMobile = window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent);

    // 2. Reduced Motion Check
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 3. WebGL Support Check
    let hasWebGL = false;
    try {
      const canvas = document.createElement('canvas');
      hasWebGL = !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch {
      hasWebGL = false;
    }

    // 4. Hardware Concurrency & Memory Check
    const cores = navigator.hardwareConcurrency || 4;
    const memory = (navigator as unknown as { deviceMemory?: number }).deviceMemory || 4;

    let suggestedTier: PerformanceTier = 'high';
    if (!hasWebGL || prefersReducedMotion) {
      suggestedTier = 'low';
    } else if (isMobile || cores < 4 || memory < 4) {
      suggestedTier = 'medium';
    }

    setCapabilities({
      isMobile,
      hasWebGL,
      prefersReducedMotion,
      suggestedTier,
    });
  }, []);

  return capabilities;
}
