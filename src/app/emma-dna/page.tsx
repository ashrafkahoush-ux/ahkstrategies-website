'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function EmmaDNAGalleryPage() {
  const [loadedVideos, setLoadedVideos] = useState<Record<string, boolean>>({});

  const videos = [
    {
      id: 'genesis',
      src: '/assets/emma_dna/videos/emma_dna_genesis.mp4',
      poster: '/assets/emma_dna/images/emma_dna_dual_core.png',
      title: 'Genesis',
      subtitle: 'The Birth of Human × AI Symbiosis',
      description: 'Witness the moment where human vision and artificial intelligence merge into EMMA—a living command center that breathes with your empire.',
    },
    {
      id: 'command-symphony',
      src: '/assets/emma_dna/videos/emma_dna_command_symphony.mp4',
      poster: '/assets/emma_dna/images/emma_dna_command_symphony.png',
      title: 'Command Symphony',
      subtitle: 'Orchestrating Enterprise Intelligence',
      description: 'EMMA conducts the symphony of your operations—synchronizing data, strategy, and execution into one seamless flow of power.',
    },
    {
      id: 'beyond-vision',
      src: '/assets/emma_dna/videos/emma_dna_beyond_vision.mp4',
      poster: '/assets/emma_dna/images/emma_dna_strand.png',
      title: 'Beyond Vision',
      subtitle: 'Where Strategy Meets Foresight',
      description: 'EMMA transcends traditional AI—she doesn\'t just analyze data, she orchestrates destiny. Watch as strategic intelligence unfolds in real-time.',
    },
  ];

  const handleVideoLoad = (videoId: string) => {
    setLoadedVideos(prev => ({ ...prev, [videoId]: true }));
  };

  return (
    <div className="relative min-h-screen bg-[#0A192F] text-white overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] via-[#112240] to-[#0A192F]" />
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 20% 30%, rgba(212,175,55,0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 70%, rgba(8,217,255,0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 80%, rgba(154,124,249,0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 30%, rgba(212,175,55,0.15) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-montserrat font-black mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ahk-gold via-emma-electric to-emma-violet">
              EMMA DNA
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-ahk-light/80 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Experience the visual symphony of Human Intelligence × Artificial Intelligence—
            where every frame pulses with strategic power.
          </motion.p>

          {/* Accent line */}
          <motion.div
            className="mt-8 h-1 bg-gradient-to-r from-transparent via-ahk-gold to-transparent mx-auto"
            initial={{ width: 0 }}
            animate={{ width: '50%' }}
            transition={{ delay: 0.6, duration: 1.2 }}
          />
        </motion.div>

        {/* Video Gallery */}
        <div className="space-y-24">
          {videos.map((video, index) => (
            <motion.article
              key={video.id}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              {/* Video Container */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden border-2 border-ahk-gold/30 shadow-[0_0_40px_rgba(212,175,55,0.15)] group-hover:border-ahk-gold/60 group-hover:shadow-[0_0_60px_rgba(212,175,55,0.3)] transition-all duration-500">
                {/* Loading overlay */}
                {!loadedVideos[video.id] && (
                  <div className="absolute inset-0 bg-[#0A192F] flex items-center justify-center z-10">
                    <motion.div
                      className="w-16 h-16 border-4 border-ahk-gold/30 border-t-ahk-gold rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                )}

                <video
                  src={video.src}
                  poster={video.poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  onLoadedData={() => handleVideoLoad(video.id)}
                  className="w-full h-full object-cover"
                />

                {/* Video overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/60 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Caption */}
              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-3">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-ahk-gold to-emma-electric">
                    {video.title}
                  </span>
                </h2>
                <p className="text-xl md:text-2xl text-emma-violet font-semibold mb-4">
                  {video.subtitle}
                </p>
                <p className="text-lg text-ahk-light/80 max-w-2xl mx-auto leading-relaxed">
                  {video.description}
                </p>
              </motion.div>
            </motion.article>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-32 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xl md:text-2xl text-ahk-light/80 mb-8">
            Ready to experience EMMA&apos;s full power?
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/emma"
              className="inline-block px-12 py-5 bg-gradient-to-r from-ahk-gold via-emma-electric to-ahk-gold bg-[length:200%] text-[#0A192F] font-montserrat font-bold text-lg rounded-full shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] transition-all duration-300"
            >
              Explore EMMA Command Center →
            </Link>
          </motion.div>

          <motion.p
            className="mt-12 text-sm text-ahk-light/60 font-mono"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Powered by the EMMA–AHK Symbiont | Where Human Intelligence and AI move as one
          </motion.p>
        </motion.div>
      </main>
    </div>
  );
}
