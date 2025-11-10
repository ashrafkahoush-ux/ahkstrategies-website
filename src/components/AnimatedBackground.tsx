'use client';

import { useMemo } from 'react';

interface AnimatedBackgroundProps {
  intensity?: 'low' | 'medium' | 'high';
  colorSet?: 'gold-blue' | 'purple-green' | 'full-spectrum';
  animationDelay?: number;
}

// Pre-calculated stable values to prevent hydration mismatch
// These EXACT values match the server render to prevent hydration errors
const STABLE_ORB_CONFIGS = [
  { size: 205.01624088647077, top: 96.61286329956056, left: 7.185502688298584, delay: 0 },
  { size: 280.44253569306135, top: 15.287430845200968, left: 85.63441947102547, delay: 3 },
  { size: 312.75874162092805, top: 45.89134696871042, left: 42.11747813224792, delay: 6 },
  { size: 267.92342376708984, top: 72.44506835937500, left: 68.22917938232422, delay: 9 },
  { size: 234.15608215332031, top: 28.77140808105469, left: 12.93407917022705, delay: 12 },
];

export default function AnimatedBackground({
  intensity = 'medium',
  colorSet = 'gold-blue',
  animationDelay = 0,
}: AnimatedBackgroundProps) {
  const orbCount = intensity === 'low' ? 2 : intensity === 'medium' ? 3 : 5;

  const orbColors = useMemo(() => {
    if (colorSet === 'gold-blue') return ['gradient-orb-gold', 'gradient-orb-blue'];
    if (colorSet === 'purple-green') return ['gradient-orb-purple', 'gradient-orb-blue'];
    return ['gradient-orb-gold', 'gradient-orb-blue', 'gradient-orb-purple'];
  }, [colorSet]);

  const orbs = useMemo(() => {
    return Array.from({ length: orbCount }).map((_, i) => {
      const color = orbColors[i % orbColors.length];
      const config = STABLE_ORB_CONFIGS[i % STABLE_ORB_CONFIGS.length];
      
      return {
        id: i,
        color,
        size: config.size,
        top: config.top,
        left: config.left,
        delay: (config.delay + animationDelay) % 20,
      };
    });
  }, [orbCount, orbColors, animationDelay]);

  const shapes = [
    { type: 'triangle', top: 10, left: 15, delay: 0 },
    { type: 'circle', top: 60, left: 80, delay: 5 },
    { type: 'square', top: 30, left: 70, delay: 10 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className={`gradient-orb ${orb.color}`}
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            top: `${orb.top}%`,
            left: `${orb.left}%`,
            animationDelay: `${orb.delay}s`,
          }}
        />
      ))}

      {shapes.map((shape, i) => (
        <div
          key={i}
          className={`floating-shape floating-shape-${shape.type}`}
          style={{
            top: `${shape.top}%`,
            left: `${shape.left}%`,
            animationDelay: `${shape.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
