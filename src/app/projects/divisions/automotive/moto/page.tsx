'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

export default function MotoPage() {
  const router = useRouter();

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white relative">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => router.push('/projects/divisions/automotive')}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-6 py-3 rounded-lg shadow-lg transition-all duration-300"
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          zIndex: 50,
          background: 'linear-gradient(135deg, #facc15 0%, #eab308 100%)',
          boxShadow: '0 4px 14px 0 rgba(250, 204, 21, 0.4)',
        }}
      >
        <span style={{ fontSize: '1.25rem', color: 'white' }}>←</span>
        <span className="text-sm font-bold text-white">Back to Automotive</span>
      </motion.button>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Video Background Placeholder */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 217, 255, 0.15), rgba(10, 25, 47, 0.95), #020617)',
          }}
        >
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(0, 217, 255, 0.3) 0%, transparent 50%)',
            }}
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          {/* Logo Icon with Rotation on Hover */}
          <motion.div 
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="mx-auto mb-6 flex items-center justify-center"
            style={{
              width: '7rem',
              height: '7rem',
              marginBottom: '2rem',
              borderRadius: '1.5rem',
              background: 'linear-gradient(135deg, #00D9FF, #0099CC)',
              boxShadow: '0 25px 50px -12px rgba(0, 217, 255, 0.6), 0 0 80px rgba(0, 217, 255, 0.3)',
            }}
          >
            <span style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', fontFamily: 'Montserrat, sans-serif' }}>MOTO</span>
          </motion.div>

          <h1 
            className="font-bold mb-4"
            style={{
              fontSize: 'clamp(3.5rem, 8vw, 5rem)',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              fontFamily: 'Montserrat, sans-serif',
              background: 'linear-gradient(135deg, #00D9FF 0%, #0099CC 50%, #006699 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.02em',
            }}
          >
            European Electric Motorbike Series
          </h1>
          <p 
            style={{
              fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
              color: '#94a3b8',
              fontWeight: 500,
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '0.05em',
            }}
          >
            Urban E-Mobility, Designed in Italy
          </p>
        </motion.div>
      </section>

      {/* Content Sections */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto px-6 py-16 space-y-16"
      >
        {/* Section 1: Design & Heritage */}
        <motion.div 
          variants={fadeInUp}
          className="rounded-2xl p-8 md:p-12 border backdrop-blur-sm relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(10, 25, 47, 0.7), rgba(26, 39, 68, 0.5))',
            borderRadius: '1.5rem',
            padding: 'clamp(2rem, 4vw, 3rem)',
            border: '1px solid rgba(0, 217, 255, 0.25)',
            backdropFilter: 'blur(12px)',
          }}
        >
          {/* Animated accent bar */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #00D9FF, #0099CC)',
              boxShadow: '0 0 20px rgba(0, 217, 255, 0.6)',
            }}
          />

          <h2 
            className="font-bold mb-6"
            style={{
              fontSize: 'clamp(2rem, 5vw, 2.5rem)',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: '#00D9FF',
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            Ride the Revolution
          </h2>
          
          <div className="space-y-4 leading-relaxed" style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#cbd5e1', fontFamily: 'Inter, sans-serif' }}>
            <p>
              Moto Electric Motorbikes embody the fusion of Italian elegance and urban mobility innovation. In the heart of 
              Cairo&apos;s bustling streets, where tradition meets modernity, Moto emerges as more than transportation — 
              it&apos;s a lifestyle statement, an environmental commitment, and a glimpse into the future of urban movement.
            </p>
            
            <p>
              Every curve, every component, every innovation is designed with the urban rider in mind. From the morning 
              commute through historic districts to evening rides along the Nile, Moto motorbikes deliver a seamless blend 
              of performance, sustainability, and unmistakable Italian design philosophy.
            </p>
            
            <p>
              This isn&apos;t just about replacing combustion engines — it&apos;s about reimagining urban mobility for a generation 
              that values sustainability without compromising style, efficiency without sacrificing emotion, and innovation 
              that honors craftsmanship.
            </p>
          </div>
        </motion.div>

        {/* Section 2: Italian Partnership */}
        <motion.div 
          variants={fadeInUp}
          className="rounded-2xl p-8 md:p-12 border backdrop-blur-sm relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(10, 25, 47, 0.7), rgba(26, 39, 68, 0.5))',
            borderRadius: '1.5rem',
            padding: 'clamp(2rem, 4vw, 3rem)',
            border: '1px solid rgba(0, 217, 255, 0.25)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #00D9FF, #0099CC)',
              boxShadow: '0 0 20px rgba(0, 217, 255, 0.6)',
            }}
          />

          <h2 
            className="font-bold mb-6"
            style={{
              fontSize: 'clamp(2rem, 5vw, 2.5rem)',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: '#00D9FF',
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            Italian Partnership
          </h2>
          
          <div className="space-y-6">
            <p className="leading-relaxed" style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#cbd5e1', fontFamily: 'Inter, sans-serif' }}>
              Moto represents a strategic collaboration with Italy&apos;s premier motorbike design houses and manufacturing 
              excellence. This partnership brings together centuries of Italian craftsmanship with cutting-edge electric 
              vehicle technology.
            </p>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6"
            >
              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.02, borderColor: 'rgba(0, 217, 255, 0.4)' }}
                className="p-6 rounded-xl border transition-all duration-300"
                style={{
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  background: 'rgba(10, 25, 47, 0.9)',
                  border: '1px solid rgba(0, 217, 255, 0.15)',
                }}
              >
                <h3 className="text-xl font-bold mb-3" style={{ color: '#00D9FF', fontFamily: 'Montserrat, sans-serif', fontSize: '1.25rem' }}>
                  🎨 Design Excellence
                </h3>
                <p style={{ color: '#cbd5e1', fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}>
                  Italian design studios renowned for their work with premium automotive and motorcycle brands bring 
                  aesthetic perfection to every Moto model.
                </p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.02, borderColor: 'rgba(0, 217, 255, 0.4)' }}
                className="p-6 rounded-xl border transition-all duration-300"
                style={{
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  background: 'rgba(10, 25, 47, 0.9)',
                  border: '1px solid rgba(0, 217, 255, 0.15)',
                }}
              >
                <h3 className="text-xl font-bold mb-3" style={{ color: '#00D9FF', fontFamily: 'Montserrat, sans-serif', fontSize: '1.25rem' }}>
                  🔧 Assembly Expertise
                </h3>
                <p style={{ color: '#cbd5e1', fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}>
                  Manufacturing partnerships leverage Italian precision engineering and quality control standards 
                  perfected over decades of motorbike production.
                </p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.02, borderColor: 'rgba(0, 217, 255, 0.4)' }}
                className="p-6 rounded-xl border transition-all duration-300"
                style={{
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  background: 'rgba(10, 25, 47, 0.9)',
                  border: '1px solid rgba(0, 217, 255, 0.15)',
                }}
              >
                <h3 className="text-xl font-bold mb-3" style={{ color: '#00D9FF', fontFamily: 'Montserrat, sans-serif', fontSize: '1.25rem' }}>
                  ⚡ Technology Integration
                </h3>
                <p style={{ color: '#cbd5e1', fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}>
                  Advanced battery management systems, regenerative braking, and smart connectivity features developed 
                  by European technology leaders.
                </p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.02, borderColor: 'rgba(0, 217, 255, 0.4)' }}
                className="p-6 rounded-xl border transition-all duration-300"
                style={{
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  background: 'rgba(10, 25, 47, 0.9)',
                  border: '1px solid rgba(0, 217, 255, 0.15)',
                }}
              >
                <h3 className="text-xl font-bold mb-3" style={{ color: '#00D9FF', fontFamily: 'Montserrat, sans-serif', fontSize: '1.25rem' }}>
                  🌍 Market Localization
                </h3>
                <p style={{ color: '#cbd5e1', fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}>
                  MENA-specific adaptations ensure performance in high-temperature environments while maintaining 
                  Italian design integrity and riding dynamics.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Section 3: Market Entry Plan */}
        <motion.div 
          variants={fadeInUp}
          className="rounded-2xl p-8 md:p-12 border backdrop-blur-sm relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(10, 25, 47, 0.7), rgba(26, 39, 68, 0.5))',
            borderRadius: '1.5rem',
            padding: 'clamp(2rem, 4vw, 3rem)',
            border: '1px solid rgba(0, 217, 255, 0.25)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #00D9FF, #0099CC)',
              boxShadow: '0 0 20px rgba(0, 217, 255, 0.6)',
            }}
          />

          <h2 
            className="font-bold mb-6"
            style={{
              fontSize: 'clamp(2rem, 5vw, 2.5rem)',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: '#00D9FF',
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            Market Entry Plan
          </h2>
          
          <div className="space-y-4 leading-relaxed" style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#cbd5e1', fontFamily: 'Inter, sans-serif' }}>
            <p>
              The Moto MENA strategy targets a phased market entry beginning with Egypt&apos;s metropolitan centers, 
              followed by expansion across Gulf Cooperation Council states and North African urban markets.
            </p>
            
            <div className="my-6 pl-6" style={{ borderLeft: '4px solid #00D9FF' }}>
              <ul className="space-y-3" style={{ color: '#cbd5e1' }}>
                <li><strong style={{ color: '#00D9FF' }}>Phase 1 — Cairo Launch:</strong> Flagship retail locations, test ride centers, and initial fleet deployment for delivery partnerships</li>
                <li><strong style={{ color: '#00D9FF' }}>Phase 2 — Regional Expansion:</strong> Dealership network across Alexandria, Dubai, Riyadh, and Casablanca</li>
                <li><strong style={{ color: '#00D9FF' }}>Phase 3 — Ecosystem Development:</strong> Charging infrastructure, service networks, and battery swap stations</li>
                <li><strong style={{ color: '#00D9FF' }}>Phase 4 — B2B Penetration:</strong> Corporate fleet programs, delivery service partnerships, and shared mobility integration</li>
              </ul>
            </div>
            
            <p>
              Strategic partnerships with urban mobility platforms, last-mile delivery services, and smart city initiatives 
              accelerate market penetration while building brand recognition among early adopters.
            </p>
          </div>
        </motion.div>

        {/* Infographic Section */}
        <motion.div 
          variants={fadeInUp}
          className="bg-white rounded-2xl p-4 shadow-2xl"
          style={{
            background: 'white',
            borderRadius: '1.5rem',
            padding: '1.5rem',
            boxShadow: '0 25px 50px -12px rgba(0, 217, 255, 0.4)',
          }}
        >
          <h2 
            className="font-bold mb-6 text-center"
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: '#0A192F',
              textAlign: 'center',
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            Moto MENA 5-Year Infographic Summary
          </h2>
          <Image
            src="/assets/moto/infographic.png"
            alt="Moto MENA 5-Year Infographic Summary"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-lg"
            priority
          />
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          variants={fadeInUp}
          className="rounded-2xl p-8 md:p-12 text-center"
          style={{
            background: 'linear-gradient(90deg, #00D9FF, #0099CC)',
            borderRadius: '1.5rem',
            padding: 'clamp(2rem, 4vw, 3rem)',
            textAlign: 'center',
            boxShadow: '0 20px 40px -10px rgba(0, 217, 255, 0.5)',
          }}
        >
          <h2 
            className="font-bold mb-4 text-white"
            style={{
              fontSize: 'clamp(2rem, 5vw, 2.5rem)',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: 'white',
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            Download Investor Summary
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.9)', fontFamily: 'Inter, sans-serif' }}>
            Access comprehensive market analysis, financial projections, and strategic roadmaps for the Moto Electric 
            Motorbikes MENA expansion.
          </p>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/services/boutique"
              className="inline-block px-8 py-4 bg-white font-bold rounded-xl transition-all duration-300 shadow-xl"
              style={{
                display: 'inline-block',
                padding: '1rem 2rem',
                background: 'white',
                color: '#00D9FF',
                fontWeight: 'bold',
                borderRadius: '0.75rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              Contact AHK Boutique
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
