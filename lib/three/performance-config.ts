export type PerformanceTier = 'high' | 'medium' | 'low';

export interface PerformanceBudget {
  maxVoxels: number;
  pixelStep: number;
  enablePostProcessing: boolean;
  enableDisplacement: boolean;
  enableParticles: boolean;
  dpr: number;
  targetFPS: number;
}

export const PERFORMANCE_BUDGETS: Record<PerformanceTier, PerformanceBudget> = {
  high: {
    maxVoxels: 12000,
    pixelStep: 1,
    enablePostProcessing: true,
    enableDisplacement: true,
    enableParticles: true,
    dpr: 2,
    targetFPS: 60,
  },
  medium: {
    maxVoxels: 6000,
    pixelStep: 2,
    enablePostProcessing: false,
    enableDisplacement: true,
    enableParticles: false,
    dpr: 1.5,
    targetFPS: 45,
  },
  low: {
    maxVoxels: 2500,
    pixelStep: 3,
    enablePostProcessing: false,
    enableDisplacement: false,
    enableParticles: false,
    dpr: 1,
    targetFPS: 30,
  },
};
