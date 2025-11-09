'use client';

import { useMemo } from 'react';

interface AnimatedBackgroundProps {
  intensity?: 'low' | 'medium' | 'high';
  colorSet?: 'gold-blue' | 'purple-green' | 'full-spectrum';
  animationDelay?: number;
}

export default function AnimatedBackground({
  intensity = 'medium',
  colorSet = 'gold-blue',
  animationDelay = 0,
}: AnimatedBackgroundProps) {
  // Derive orb count directly from intensity prop
  const orbCount = intensity === 'low' ? 2 : intensity === 'medium' ? 3 : 5;

  const orbColors = useMemo(() => {
    if (colorSet === 'gold-blue') return ['gradient-orb-gold', 'gradient-orb-blue'];
    if (colorSet === 'purple-green') return ['gradient-orb-purple', 'gradient-orb-blue'];
    return ['gradient-orb-gold', 'gradient-orb-blue', 'gradient-orb-purple'];
  }, [colorSet]);

  // Generate stable random values using a seeded approach
  const orbs = useMemo(() => {
    const generatePseudoRandom = (seed: number) => {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };

    return Array.from({ length: orbCount }).map((_, i) => {
      const color = orbColors[i % orbColors.length];
      const sizeSeed = i * 17 + animationDelay;
      const topSeed = i * 31 + animationDelay + 100;
      const leftSeed = i * 47 + animationDelay + 200;
      
      const size = 200 + generatePseudoRandom(sizeSeed) * 200;
      const top = generatePseudoRandom(topSeed) * 100;
      const left = generatePseudoRandom(leftSeed) * 100;
      const delay = (i * 3 + animationDelay) % 20;

      return {
        id: i,
        color,
        size,
        top,
        left,
        delay,
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
      {/* Gradient Orbs */}
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

      {/* Floating Geometric Shapes */}
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
