'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

interface EmmaVideoCardProps {
  variant?: 'about' | 'splash'
}

export default function EmmaVideoCard({ variant = 'about' }: EmmaVideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(variant === 'splash')
  const [isMuted, setIsMuted] = useState(true)
  const [showControls, setShowControls] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current && variant === 'splash') {
      videoRef.current.play()
    }
  }, [variant])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  if (variant === 'splash') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#020617]"
      >
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover opacity-40"
            onEnded={() => setIsPlaying(false)}
          >
            <source src="/assets/EMMA-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/60 via-[#020617]/40 to-[#020617]/80" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#D4AF37] via-[#F4E5B1] to-[#D4AF37] bg-clip-text text-transparent">
              EMMA
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 mb-4">
              Executive Market & Management Advisor
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              AI-powered strategic intelligence for AHK Strategies
            </p>
          </motion.div>

          {/* Controls */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex gap-4 justify-center"
          >
            <button
              onClick={togglePlay}
              className="bg-[#D4AF37]/20 hover:bg-[#D4AF37]/30 border border-[#D4AF37] text-[#D4AF37] p-4 rounded-full transition-all"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </button>
            <button
              onClick={toggleMute}
              className="bg-[#D4AF37]/20 hover:bg-[#D4AF37]/30 border border-[#D4AF37] text-[#D4AF37] p-4 rounded-full transition-all"
            >
              {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
            </button>
          </motion.div>
        </div>
      </motion.div>
    )
  }

  // About page variant
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative group"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Card Container */}
      <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] border-2 border-[#D4AF37]/30 rounded-xl overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300">
        {/* Video */}
        <div className="relative aspect-video">
          <video
            ref={videoRef}
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover"
            onEnded={() => setIsPlaying(false)}
          >
            <source src="/assets/EMMA-video.mp4" type="video/mp4" />
          </video>

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />

          {/* Controls Overlay */}
          <AnimatePresence>
            {showControls && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4"
              >
                <button
                  onClick={togglePlay}
                  className="bg-[#D4AF37] hover:bg-[#F4E5B1] text-[#020617] p-4 rounded-full transition-all transform hover:scale-110"
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6" />
                  ) : (
                    <Play className="w-6 h-6 ml-1" />
                  )}
                </button>
                <button
                  onClick={toggleMute}
                  className="bg-[#D4AF37] hover:bg-[#F4E5B1] text-[#020617] p-4 rounded-full transition-all transform hover:scale-110"
                >
                  {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Card Content */}
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 bg-[#10b981] rounded-full animate-pulse" />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#F4E5B1] bg-clip-text text-transparent">
              Meet EMMA
            </h3>
          </div>
          <p className="text-slate-400 leading-relaxed mb-4">
            <strong className="text-[#D4AF37]">Executive Market & Management Advisor</strong>
            {' '}— Our AI-powered strategic intelligence system that provides real-time insights, 
            investor analytics, and market intelligence to drive informed decision-making.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Real-time Analytics', 'Market Intelligence', 'Investor Insights'].map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] via-[#F4E5B1] to-[#D4AF37] rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10" />
    </motion.div>
  )
}
