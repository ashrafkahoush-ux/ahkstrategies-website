'use client';
import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center h-[55vh] w-full overflow-hidden bg-[#0A0F1E]">
      {/* Background video */}
      <video
        src="/assets/ai_videos/home2.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 w-full max-w-[1920px] -translate-x-1/2 -translate-y-1/2 object-cover rounded-2xl shadow-[0_0_40px_rgba(0,255,255,0.1)]"
      ></video>

      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1E]/40 via-transparent to-[#0A0F1E]/80 pointer-events-none"></div>
    </section>
  );
}
