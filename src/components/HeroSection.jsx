'use client';
import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] w-full overflow-hidden">
      {/* Animated Background (already in layout.tsx globally) */}
      
      {/* Gradient Frame Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--blue)] to-transparent opacity-60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center space-y-8 animate-fade-in-up">
        
        {/* Animated Logo Capsule */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
          <video
            src="/assets/ai_videos/home1.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain rounded-full shadow-[0_0_60px_rgba(212,175,55,0.3)] animate-logo-pulse"
          ></video>
        </div>

        {/* Main Tagline */}
        <div className="space-y-3">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide gradient-text-gold-blue">
            Where Vision Meets Artificial Intelligence
          </h1>
          
          {/* Sub-tagline */}
          <p className="text-xl md:text-2xl text-slate-300 font-light tracking-wide animate-fade-in-down" style={{ animationDelay: '0.3s' }}>
            Powered by <span className="text-[var(--gold)] font-semibold">EMMA</span> — The Executive Meta-Mind of AHKStrategies
          </p>
        </div>

        {/* Optional CTA */}
        <div className="pt-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <a 
            href="#pillars" 
            className="btn-letterhead inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[var(--gold)] to-[var(--blue)] text-[var(--navy-dark)] font-semibold rounded-full hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300"
          >
            Explore the Empire
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--navy-dark)] to-transparent pointer-events-none"></div>
    </section>
  );
}
