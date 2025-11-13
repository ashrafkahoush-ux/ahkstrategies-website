'use client';

/**
 * FloatingBackground Component
 * Inspired by AHKStrategies Official Letterhead
 * Provides animated gradient orbs and floating geometric shapes
 */
export default function FloatingBackground() {
  return (
    <>
      {/* Gradient Orbs */}
      <div className="gradient-orb orb-1" />
      <div className="gradient-orb orb-2" />
      <div className="gradient-orb orb-3" />

      {/* Floating Geometric Shapes */}
      <div className="floating-shapes">
        <div className="shape circle" />
        <div className="shape diamond" />
        <div className="shape circle" />
        <div className="shape hexagon" />
        <div className="shape diamond" />
      </div>

      {/* Watermark */}
      <div className="watermark-effect">AHK</div>
    </>
  );
}
