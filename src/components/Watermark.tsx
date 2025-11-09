'use client';

import { useEffect, useState } from 'react';

export default function Watermark() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax effect: moves slower than scroll
  const parallaxOffset = scrollY * 0.1;

  return (
    <div
      className="watermark-ahk"
      style={{
        transform: `translate(-50%, calc(-50% + ${parallaxOffset}px))`,
        transition: 'transform 0.1s linear',
      }}
    >
      AHK
    </div>
  );
}
