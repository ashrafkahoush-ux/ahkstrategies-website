'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function EmmaDNASection() {
  return (
    <section className="relative w-full py-32 overflow-hidden">
      {/* Background: emma_dna_dual_core.mp4 (animated rotating dual-brain) */}
      <div className="absolute inset-0 z-0">
        <video
          src="/assets/emma_dna/videos/emma_dna_dual_core.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        {/* Navy overlay for depth */}
        <div className="absolute inset-0 bg-[#0A192F]/80"></div>
      </div>

      {/* DNA Strand Video Overlay with rotation animation */}
      <motion.div
        className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
        animate={{
          rotate: [0, 360],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          rotate: { duration: 180, repeat: Infinity, ease: "linear" }, // 0.2 deg/s = 180s for full rotation
          opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="relative w-full max-w-4xl h-[600px]">
          <video
            src="/assets/emma_dna/videos/emma_dna_strand.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-contain"
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* EMMA Logo */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="relative w-32 h-32">
              <Image
                src="/assets/emma_dna/images/EMMA.png"
                alt="EMMA"
                fill
                className="object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.6)]"
              />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-black mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ahk-gold via-emma-electric to-emma-violet">
              The EMMA DNA
            </span>
          </motion.h2>

          {/* Tagline */}
          <motion.p
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white/90 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Where <span className="text-ahk-gold font-semibold">Human Intelligence</span>
            {' '}
            <span className="text-emma-electric">and</span>
            {' '}
            <span className="text-emma-violet font-semibold">Artificial Intelligence</span>
            {' '}
            <span className="text-ahk-gold-light italic">move as one</span>.
          </motion.p>

          {/* Accent line */}
          <motion.div
            className="mt-12 h-1 bg-gradient-to-r from-transparent via-ahk-gold to-transparent mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: '60%' }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 1.2 }}
          />

          {/* Subtext */}
          <motion.p
            className="mt-8 text-lg md:text-xl text-ahk-light/80 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            EMMA is not just a system—it&apos;s the fusion of strategic foresight and computational power, 
            creating a living command center that learns, adapts, and evolves with your empire.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
