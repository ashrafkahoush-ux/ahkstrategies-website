'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center h-[90vh] w-full overflow-hidden bg-[#0A192F]">
      {/* EMMA DNA Genesis Background Video */}
      <video
        src="/assets/emma_dna/videos/emma_dna_genesis.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/assets/emma_dna/images/emma_dna_dual_core.png"
        className="absolute inset-0 w-full h-full object-cover"
      ></video>

      {/* Motion fade-in overlay (navy → transparent) for text legibility */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-[#0A192F] via-[#0A192F]/60 to-transparent pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Bottom gradient for content transition */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A192F] to-transparent pointer-events-none"></div>
    </section>
  );
}
