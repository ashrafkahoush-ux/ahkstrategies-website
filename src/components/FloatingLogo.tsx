'use client';
import { motion } from 'framer-motion';

export default function FloatingLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: [0, -8, 0],
      }}
      transition={{
        opacity: { duration: 0.6 },
        scale: { duration: 0.6 },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 md:w-20 md:h-20 pointer-events-none select-none"
    >
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D4AF37]/20 to-[#00D9FF]/20 blur-lg animate-pulse"></div>
      
      {/* Video container */}
      <div className="relative w-full h-full rounded-full overflow-hidden border border-[#D4AF37]/30 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
        <video
          src="/assets/ai_images/3D-animated-logo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
}
