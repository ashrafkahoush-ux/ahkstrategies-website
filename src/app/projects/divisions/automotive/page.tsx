'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function AutomotiveDivision() {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white relative overflow-x-hidden font-['Inter']">
      {/* Back Button - Fixed at bottom right */}
      <motion.button
        onClick={() => router.back()}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-6 py-3 rounded-lg shadow-lg transition-all duration-300"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(250, 204, 21, 0.5)' }}
        style={{
          background: 'linear-gradient(135deg, #facc15 0%, #eab308 100%)',
          boxShadow: '0 4px 14px 0 rgba(250, 204, 21, 0.4)',
        }}
      >
        <span className="text-xl text-white">←</span>
        <span className="text-sm font-bold text-white">Back</span>
      </motion.button>

      {/* Hero Section with Video Background */}
      <section className="relative flex items-center justify-center overflow-hidden h-[60vh]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="/assets/backgrounds/automotive-division.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#0A192F]/60 to-[#020617]" />

        <div className="relative z-10 text-center px-6 max-w-7xl">
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            style={{
              fontFamily: 'Montserrat, sans-serif',
              background: 'linear-gradient(135deg, #D4AF37 0%, #F4E5B1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Automotive Division
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-white font-semibold mx-auto leading-relaxed max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            Leading innovation in automotive technology and sustainable transportation solutions.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              background: 'linear-gradient(90deg, #D4AF37, #F4E5B1, #D4AF37)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Our Flagship Mobility Projects
          </h2>
          <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full" />
          <p className="text-[#a8b2d1] text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto font-light italic">
            Where innovation, design, and strategic foresight converge to shape sustainable transport across MENA.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Q-VAN Card */}
          <motion.div 
            variants={cardVariants}
            className="group relative overflow-hidden cursor-pointer"
            onClick={() => router.push('/projects/divisions/automotive/qvan')}
            whileHover={{ 
              y: -12,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            style={{
              borderRadius: '1rem',
              background: 'linear-gradient(135deg, rgba(10, 25, 47, 0.95), rgba(26, 39, 68, 0.95))',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              transition: 'all 0.3s ease',
            }}
          >
            {/* Animated Accent Bar */}
            <motion.div 
              className="absolute top-0 left-0 right-0"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                height: '4px',
                background: 'linear-gradient(90deg, #D4AF37, #F4E5B1)',
                transformOrigin: 'left',
              }}
            />
            
            <div className="p-8 relative z-10 text-center">
              {/* Logo Icon */}
              <motion.div 
                className="mb-6 flex items-center justify-center mx-auto"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ 
                  rotate: [0, -8, 8, 0],
                  scale: 1.1,
                  transition: { duration: 0.5 }
                }}
                style={{
                  width: '5rem',
                  height: '5rem',
                  borderRadius: '1rem',
                  background: 'linear-gradient(135deg, #D4AF37, #F4E5B1)',
                  boxShadow: '0 8px 24px rgba(212, 175, 55, 0.4)',
                }}
              >
                <span style={{ 
                  fontSize: '2rem', 
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 900,
                  color: '#0A192F'
                }}>
                  Q
                </span>
              </motion.div>

              <h3 
                className="mb-2 transition-colors duration-300"
                style={{
                  fontSize: '1.5rem',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  color: '#ffffff',
                }}
              >
                AHK Q-VAN Fleet Platform
              </h3>
              
              <p 
                className="mb-4 font-semibold uppercase tracking-wider"
                style={{
                  fontSize: '0.875rem',
                  color: '#94a3b8',
                  letterSpacing: '0.1em',
                }}
              >
                Smart Commercial EV Systems
              </p>

              <p 
                className="mb-8 italic leading-relaxed"
                style={{
                  fontSize: '1rem',
                  color: '#cbd5e1',
                }}
              >
                &quot;Powering the next frontier of green logistics.&quot;
              </p>

              <motion.button
                className="w-full px-6 font-bold"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: '0 16px 40px rgba(212, 175, 55, 0.5)',
                  transition: { duration: 0.2 }
                }}
                style={{
                  padding: '0.875rem 1.5rem',
                  borderRadius: '0.75rem',
                  background: 'linear-gradient(135deg, #D4AF37, #F4E5B1)',
                  color: '#0A192F',
                  boxShadow: '0 8px 20px rgba(212, 175, 55, 0.3)',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Learn More
              </motion.button>
            </div>

            {/* Glow Effect */}
            <motion.div 
              className="absolute pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                bottom: '-4rem',
                right: '-4rem',
                width: '10rem',
                height: '10rem',
                background: 'radial-gradient(circle, rgba(212, 175, 55, 0.3), transparent)',
                filter: 'blur(40px)',
              }}
            />
          </motion.div>

          {/* WOW Card */}
          <motion.div 
            variants={cardVariants}
            className="relative overflow-hidden cursor-pointer"
            onClick={() => router.push('/projects/divisions/automotive/moto')}
            whileHover={{ 
              y: -12,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            style={{
              borderRadius: '1rem',
              background: 'linear-gradient(135deg, rgba(10, 25, 47, 0.95), rgba(26, 39, 68, 0.95))',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(0, 217, 255, 0.3)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              transition: 'all 0.3s ease',
            }}
          >
            {/* Animated Accent Bar */}
            <motion.div 
              className="absolute top-0 left-0 right-0"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                height: '4px',
                background: 'linear-gradient(90deg, #00D9FF, #0099CC)',
                transformOrigin: 'left',
              }}
            />
            
            <div className="p-8 relative z-10 text-center">
              {/* Logo Icon */}
              <motion.div 
                className="mb-6 flex items-center justify-center mx-auto"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3
                }}
                whileHover={{ 
                  rotate: [0, -8, 8, 0],
                  scale: 1.1,
                  transition: { duration: 0.5 }
                }}
                style={{
                  width: '5rem',
                  height: '5rem',
                  borderRadius: '1rem',
                  background: 'linear-gradient(135deg, #00D9FF, #0099CC)',
                  boxShadow: '0 8px 24px rgba(0, 217, 255, 0.4)',
                }}
              >
                <span style={{ 
                  fontSize: '1.25rem', 
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 900,
                  color: '#ffffff'
                }}>
                  WOW
                </span>
              </motion.div>

              <h3 
                className="mb-2 transition-colors duration-300"
                style={{
                  fontSize: '1.5rem',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  color: '#ffffff',
                }}
              >
                WOW E-Motion Series
              </h3>
              
              <p 
                className="mb-4 font-semibold uppercase tracking-wider"
                style={{
                  fontSize: '0.875rem',
                  color: '#94a3b8',
                  letterSpacing: '0.1em',
                }}
              >
                European Electric Mobility Experience
              </p>

              <p 
                className="mb-8 italic leading-relaxed"
                style={{
                  fontSize: '1rem',
                  color: '#cbd5e1',
                }}
              >
                &quot;Italian design meets Cairo streets — powered by AI insight.&quot;
              </p>

              <motion.button
                className="w-full px-6 font-bold"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: '0 16px 40px rgba(0, 217, 255, 0.5)',
                  transition: { duration: 0.2 }
                }}
                style={{
                  padding: '0.875rem 1.5rem',
                  borderRadius: '0.75rem',
                  background: 'linear-gradient(135deg, #00D9FF, #0099CC)',
                  color: '#ffffff',
                  boxShadow: '0 8px 20px rgba(0, 217, 255, 0.3)',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Learn More
              </motion.button>
            </div>

            {/* Glow Effect */}
            <motion.div 
              className="absolute pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                bottom: '-4rem',
                right: '-4rem',
                width: '10rem',
                height: '10rem',
                background: 'radial-gradient(circle, rgba(0, 217, 255, 0.3), transparent)',
                filter: 'blur(40px)',
              }}
            />
          </motion.div>

          {/* DVM Card */}
          <motion.div 
            variants={cardVariants}
            className="relative overflow-hidden cursor-pointer"
            onClick={() => router.push('/projects/divisions/automotive/dvm')}
            whileHover={{ 
              y: -12,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            style={{
              borderRadius: '1rem',
              background: 'linear-gradient(135deg, rgba(10, 25, 47, 0.95), rgba(26, 39, 68, 0.95))',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(167, 139, 250, 0.3)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              transition: 'all 0.3s ease',
            }}
          >
            {/* Animated Accent Bar */}
            <motion.div 
              className="absolute top-0 left-0 right-0"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{
                height: '4px',
                background: 'linear-gradient(90deg, #A78BFA, #9333ea)',
                transformOrigin: 'left',
              }}
            />
            
            <div className="p-8 relative z-10 text-center">
              {/* Logo Icon */}
              <motion.div 
                className="mb-6 flex items-center justify-center mx-auto"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6
                }}
                whileHover={{ 
                  rotate: [0, -8, 8, 0],
                  scale: 1.1,
                  transition: { duration: 0.5 }
                }}
                style={{
                  width: '5rem',
                  height: '5rem',
                  borderRadius: '1rem',
                  background: 'linear-gradient(135deg, #A78BFA, #9333ea)',
                  boxShadow: '0 8px 24px rgba(167, 139, 250, 0.4)',
                }}
              >
                <span style={{ 
                  fontSize: '1.25rem', 
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 900,
                  color: '#ffffff'
                }}>
                  DVM
                </span>
              </motion.div>

              <h3 
                className="mb-2 transition-colors duration-300"
                style={{
                  fontSize: '1.5rem',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  color: '#ffffff',
                }}
              >
                Dual Vector Mobility Program
              </h3>
              
              <p 
                className="mb-4 font-semibold uppercase tracking-wider"
                style={{
                  fontSize: '0.875rem',
                  color: '#94a3b8',
                  letterSpacing: '0.1em',
                }}
              >
                Strategic Mobility Framework 2025-2035
              </p>

              <p 
                className="mb-8 italic leading-relaxed"
                style={{
                  fontSize: '1rem',
                  color: '#cbd5e1',
                }}
              >
                &quot;The blueprint of MENA&apos;s clean-transport future.&quot;
              </p>

              <motion.button
                className="w-full px-6 font-bold"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: '0 16px 40px rgba(167, 139, 250, 0.5)',
                  transition: { duration: 0.2 }
                }}
                style={{
                  padding: '0.875rem 1.5rem',
                  borderRadius: '0.75rem',
                  background: 'linear-gradient(135deg, #A78BFA, #9333ea)',
                  color: '#ffffff',
                  boxShadow: '0 8px 20px rgba(167, 139, 250, 0.3)',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Learn More
              </motion.button>
            </div>

            {/* Glow Effect */}
            <motion.div 
              className="absolute pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                bottom: '-4rem',
                right: '-4rem',
                width: '10rem',
                height: '10rem',
                background: 'radial-gradient(circle, rgba(167, 139, 250, 0.3), transparent)',
                filter: 'blur(40px)',
              }}
            />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
