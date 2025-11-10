'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[85vh] w-full overflow-hidden">
      {/* Animated Gradient Frame Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-70 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00D9FF] to-transparent opacity-70 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent opacity-60 animate-pulse" style={{ animationDelay: '0.25s' }}></div>
        <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#00D9FF] to-transparent opacity-60 animate-pulse" style={{ animationDelay: '0.75s' }}></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center space-y-10">
        
        {/* Animated Logo Sphere with Enhanced Glow */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center"
        >
          {/* Outer glow rings */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D4AF37]/20 to-[#00D9FF]/20 blur-3xl animate-pulse"></div>
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#00D9FF]/30 to-[#D4AF37]/30 blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          
          {/* Video Container */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#D4AF37]/40 shadow-[0_0_80px_rgba(212,175,55,0.5)]">
            <video
              src="/assets/ai_videos/home.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain scale-110"
            ></video>
          </div>
        </motion.div>

        {/* Main Tagline with Stagger Animation */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-5 max-w-5xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight">
            <span className="block text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Where Vision Meets
            </span>
            <span className="block mt-2 bg-gradient-to-r from-[#D4AF37] via-[#F4E5B1] to-[#00D9FF] bg-clip-text text-transparent animate-gradient-shift drop-shadow-[0_0_30px_rgba(212,175,55,0.6)]">
              Human Intelligence
            </span>
          </h1>
          
          {/* EMMA Powered Badge */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#D4AF37]/10 to-[#00D9FF]/10 border border-[#D4AF37]/30 rounded-full backdrop-blur-sm"
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
          className="pt-4"
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
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent pointer-events-none"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => {
          const positions = [
            { left: '5%', top: '10%', delay: '0s', duration: '8s' },
            { left: '15%', top: '25%', delay: '0.5s', duration: '12s' },
            { left: '25%', top: '40%', delay: '1s', duration: '10s' },
            { left: '35%', top: '15%', delay: '1.5s', duration: '9s' },
            { left: '45%', top: '60%', delay: '2s', duration: '11s' },
            { left: '55%', top: '30%', delay: '2.5s', duration: '13s' },
            { left: '65%', top: '50%', delay: '3s', duration: '10s' },
            { left: '75%', top: '20%', delay: '3.5s', duration: '12s' },
            { left: '85%', top: '70%', delay: '4s', duration: '9s' },
            { left: '95%', top: '35%', delay: '4.5s', duration: '11s' },
            { left: '10%', top: '80%', delay: '0.2s', duration: '14s' },
            { left: '20%', top: '55%', delay: '0.7s', duration: '10s' },
            { left: '30%', top: '75%', delay: '1.2s', duration: '12s' },
            { left: '40%', top: '45%', delay: '1.7s', duration: '11s' },
            { left: '50%', top: '85%', delay: '2.2s', duration: '13s' },
            { left: '60%', top: '65%', delay: '2.7s', duration: '9s' },
            { left: '70%', top: '90%', delay: '3.2s', duration: '10s' },
            { left: '80%', top: '5%', delay: '3.7s', duration: '12s' },
            { left: '90%', top: '95%', delay: '4.2s', duration: '11s' },
            { left: '12%', top: '48%', delay: '4.7s', duration: '14s' },
          ];
          const pos = positions[i % 20];
          return (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#D4AF37] rounded-full opacity-30 animate-float"
              style={{
                left: pos.left,
                top: pos.top,
                animationDelay: pos.delay,
                animationDuration: pos.duration
              }}
            ></div>
          );
        })}
      </div>
    </section>
  );
}
