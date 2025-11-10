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
          aria-hidden="true"
          className="w-full h-full object-cover scale-100"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-ahk-navy-dark/50 via-ahk-navy-dark/30 to-ahk-navy-dark/90"></div>
      </div>

      {/* Floating Orb Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-ahk-electric rounded-full blur-3xl opacity-20 animate-pulse-soft"></div>
        <div className="absolute top-1/3 right-1/4 w-[250px] h-[250px] bg-ahk-gold rounded-full blur-3xl opacity-15 animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-[200px] h-[200px] bg-ahk-purple rounded-full blur-3xl opacity-10 animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* 3D Animated Logo - Bottom Right Corner */}
      <div className="absolute bottom-8 right-8 z-20 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
        <div className="relative w-full h-full animate-pulse-soft">
          <video
            src="/assets/ai_images/3D-animated-logo.mp4"
            autoPlay
            loop
            muted
            playsInline
            aria-label="AHK Strategies animated logo"
            className="w-full h-full object-contain scale-110 rounded-full shadow-xl ring-4 ring-ahk-gold"
          />
          {/* Logo glow effect */}
          <div className="absolute inset-0 rounded-full bg-ahk-gold blur-2xl opacity-30 -z-10"></div>
        </div>
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
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight font-display">
            <span className="block text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">
              Where Vision Meets
            </span>
            <span className="block mt-3 bg-gradient-to-r from-ahk-gold via-ahk-gold-light to-ahk-electric bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(212,175,55,0.8)]">
              Human Intelligence
            </span>
          </h1>
          
          {/* EMMA Powered Badge */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-ahk-gold/10 to-ahk-electric/10 border border-ahk-gold/30 rounded-full backdrop-blur-md shadow-glow"
          >
            <div className="w-3 h-3 rounded-full bg-ahk-electric animate-pulse shadow-glow-electric"></div>
            <p className="text-lg md:text-xl text-ahk-gold-light font-medium tracking-wide">
              Powered by <span className="text-ahk-gold font-bold text-2xl">EMMA</span> — Your AI Intelligence Partner
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
            className="group relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-ahk-gold via-ahk-gold-light to-ahk-gold bg-size-200 bg-pos-0 hover:bg-pos-100 text-ahk-navy-dark font-bold text-lg rounded-full transition-all duration-500 shadow-glow hover:shadow-[0_0_50px_rgba(212,175,55,0.8)] hover:scale-105"
            style={{ backgroundSize: '200% auto' }}
          >
            <span>Explore the AHK Empire</span>
            <svg 
              className="w-6 h-6 transition-transform duration-300 group-hover:translate-y-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
            </svg>
            
            {/* Button glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-ahk-gold to-ahk-electric opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
          </a>
        </motion.div>
      </div>

      {/* Enhanced Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-ahk-navy-dark to-transparent pointer-events-none"></div>
    </section>
  );
}
