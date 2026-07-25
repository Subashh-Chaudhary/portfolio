'use client';

import { useState, useEffect, useRef } from 'react';
import { PerformanceTier } from '../three/performance-config';
import { useDeviceCapabilities } from './use-device-capabilities';

export interface PerformanceStats {
  fps: number;
  tier: PerformanceTier;
}

export function usePerformanceMonitor(): PerformanceStats {
  const capabilities = useDeviceCapabilities();
  const [tier, setTier] = useState<PerformanceTier>('high');
  const [fps, setFps] = useState<number>(60);
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const fpsHistoryRef = useRef<number[]>([]);

  useEffect(() => {
    if (capabilities?.suggestedTier) {
      setTier(capabilities.suggestedTier);
    }
  }, [capabilities?.suggestedTier]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let animationFrameId: number;
    lastTimeRef.current = performance.now();

    const tick = () => {
      const now = performance.now();
      frameCountRef.current++;

      if (lastTimeRef.current && now - lastTimeRef.current >= 1000) {
        const currentFps = Math.round((frameCountRef.current * 1000) / (now - lastTimeRef.current));
        setFps(currentFps);

        fpsHistoryRef.current.push(currentFps);
        if (fpsHistoryRef.current.length > 5) {
          fpsHistoryRef.current.shift();
        }

        const avgFps = fpsHistoryRef.current.reduce((a, b) => a + b, 0) / fpsHistoryRef.current.length;

        if (avgFps < 30) {
          setTier((prev) => (prev !== 'low' ? 'low' : prev));
        } else if (avgFps < 45) {
          setTier((prev) => (prev === 'high' ? 'medium' : prev));
        }

        frameCountRef.current = 0;
        lastTimeRef.current = now;
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return { fps: fps ?? 60, tier: tier ?? 'high' };
}
