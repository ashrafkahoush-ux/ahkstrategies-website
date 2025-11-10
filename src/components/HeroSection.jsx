'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden">
      {/* Full-width Cinematic Hero Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          src="/assets/ai_videos/home2.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-100"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/50 via-[#020617]/30 to-[#020617]/90"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center space-y-10 mt-20">
        
        {/* Main Tagline with Stagger Animation */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-6 max-w-5xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight">
            <span className="block text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">
              Where Vision Meets
            </span>
            <span className="block mt-3 bg-gradient-to-r from-[#D4AF37] via-[#F4E5B1] to-[#00D9FF] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(212,175,55,0.8)]">
              Human Intelligence
            </span>
          </h1>
          
          {/* EMMA Powered Badge */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#D4AF37]/10 to-[#00D9FF]/10 border border-[#D4AF37]/30 rounded-full backdrop-blur-md"
          >
            <div className="w-3 h-3 rounded-full bg-[#00D9FF] animate-pulse shadow-[0_0_10px_rgba(0,217,255,0.8)]"></div>
            <p className="text-lg md:text-xl text-[#F4E5B1] font-medium tracking-wide">
              Powered by <span className="text-[#D4AF37] font-bold text-2xl">EMMA</span> — Your AI Intelligence Partner
            </p>
          </motion.div>
        </motion.div>

        {/* CTA with Enhanced Interaction */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="pt-6"
        >
          <a 
            href="#pillars" 
            className="group relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#D4AF37] via-[#F4E5B1] to-[#D4AF37] bg-size-200 bg-pos-0 hover:bg-pos-100 text-[#020617] font-bold text-lg rounded-full transition-all duration-500 shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(212,175,55,0.8)] hover:scale-105"
            style={{ backgroundSize: '200% auto' }}
          >
            <span>Explore the AHK Empire</span>
            <svg 
              className="w-6 h-6 transition-transform duration-300 group-hover:translate-y-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
            </svg>
            
            {/* Button glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#00D9FF] opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
          </a>
        </motion.div>
      </div>

      {/* Enhanced Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none"></div>
    </section>
  );
}
