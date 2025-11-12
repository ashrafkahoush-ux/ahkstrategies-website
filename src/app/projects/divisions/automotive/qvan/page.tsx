'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

export default function QVanPage() {
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
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(212, 175, 55, 0.15), rgba(10, 25, 47, 0.95), #020617)',
          }}
        >
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(212, 175, 55, 0.3) 0%, transparent 50%)',
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
              background: 'linear-gradient(135deg, #D4AF37, #F4E5B1)',
              boxShadow: '0 25px 50px -12px rgba(212, 175, 55, 0.6), 0 0 80px rgba(212, 175, 55, 0.3)',
            }}
          >
            <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0A192F', fontFamily: 'Montserrat, sans-serif' }}>Q</span>
          </motion.div>

          <h1 
            className="font-bold mb-4"
            style={{
              fontSize: 'clamp(3.5rem, 8vw, 5rem)',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              fontFamily: 'Montserrat, sans-serif',
              background: 'linear-gradient(135deg, #D4AF37 0%, #F4E5B1 50%, #D4AF37 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.02em',
            }}
          >
            Urban Micro-Logistics Platform
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
            Smart Commercial EV Systems
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
        {/* Section 1: The Vision */}
        <motion.div 
          variants={fadeInUp}
          className="rounded-2xl p-8 md:p-12 border backdrop-blur-sm relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(10, 25, 47, 0.7), rgba(26, 39, 68, 0.5))',
            borderRadius: '1.5rem',
            padding: 'clamp(2rem, 4vw, 3rem)',
            border: '1px solid rgba(212, 175, 55, 0.25)',
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
              background: 'linear-gradient(90deg, #D4AF37, #F4E5B1)',
              boxShadow: '0 0 20px rgba(212, 175, 55, 0.6)',
            }}
          />

          <h2 
            className="font-bold mb-6"
            style={{
              fontSize: 'clamp(2rem, 5vw, 2.5rem)',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: '#D4AF37',
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            The Vision
          </h2>
          
          <div className="space-y-4 leading-relaxed" style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#cbd5e1', fontFamily: 'Inter, sans-serif' }}>
            <p>
              Q-VAN represents a paradigm shift in commercial transportation — a purpose-built electric vehicle designed 
              specifically for the MENA region&apos;s unique logistical challenges. In an era where sustainability meets 
              efficiency, Q-VAN emerges as the cornerstone of green logistics infrastructure.
            </p>
            
            <p>
              The project addresses the critical gap in electrified last-mile delivery, urban freight distribution, and 
              commercial fleet operations. By combining cutting-edge battery technology, intelligent route optimization, 
              and climate-adapted engineering, Q-VAN delivers not just a vehicle, but a complete ecosystem for clean 
              commercial transport.
            </p>
            
            <p>
              Our vision extends beyond vehicle manufacturing — we&apos;re building the foundation for a zero-emission 
              commercial transport network that integrates seamlessly with smart city infrastructure, renewable energy 
              grids, and digital fleet management platforms. Q-VAN is where environmental responsibility meets 
              operational excellence.
            </p>
          </div>
        </motion.div>

        {/* Section 2: The Opportunity */}
        <motion.div 
          variants={fadeInUp}
          className="rounded-2xl p-8 md:p-12 border backdrop-blur-sm relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(10, 25, 47, 0.7), rgba(26, 39, 68, 0.5))',
            borderRadius: '1.5rem',
            padding: 'clamp(2rem, 4vw, 3rem)',
            border: '1px solid rgba(212, 175, 55, 0.25)',
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
              background: 'linear-gradient(90deg, #D4AF37, #F4E5B1)',
              boxShadow: '0 0 20px rgba(212, 175, 55, 0.6)',
            }}
          />

          <h2 
            className="font-bold mb-6"
            style={{
              fontSize: 'clamp(2rem, 5vw, 2.5rem)',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: '#D4AF37',
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            The Opportunity
          </h2>
          
          <div className="space-y-6">
            <p className="leading-relaxed" style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#cbd5e1', fontFamily: 'Inter, sans-serif' }}>
              The MENA region stands at the threshold of a commercial vehicle revolution. With rapid urbanization, 
              e-commerce growth, and increasing environmental regulations, the demand for electric commercial vehicles 
              is accelerating exponentially.
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
                whileHover={{ scale: 1.02, borderColor: 'rgba(212, 175, 55, 0.4)' }}
                className="p-6 rounded-xl border transition-all duration-300"
                style={{
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  background: 'rgba(10, 25, 47, 0.9)',
                  border: '1px solid rgba(212, 175, 55, 0.15)',
                }}
              >
                <h3 className="text-xl font-bold mb-3" style={{ color: '#F4E5B1', fontFamily: 'Montserrat, sans-serif', fontSize: '1.25rem' }}>
                  📈 Market Readiness
                </h3>
                <p style={{ color: '#cbd5e1', fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}>
                  Government incentives, carbon reduction mandates, and fleet electrification targets create an 
                  unprecedented market opportunity for first-movers in the commercial EV space.
                </p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.02, borderColor: 'rgba(212, 175, 55, 0.4)' }}
                className="p-6 rounded-xl border transition-all duration-300"
                style={{
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  background: 'rgba(10, 25, 47, 0.9)',
                  border: '1px solid rgba(212, 175, 55, 0.15)',
                }}
              >
                <h3 className="text-xl font-bold mb-3" style={{ color: '#F4E5B1', fontFamily: 'Montserrat, sans-serif', fontSize: '1.25rem' }}>
                  🔌 Infrastructure Growth
                </h3>
                <p style={{ color: '#cbd5e1', fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}>
                  Rapid expansion of charging networks, renewable energy integration, and smart grid systems position 
                  the region for large-scale EV adoption in commercial sectors.
                </p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.02, borderColor: 'rgba(212, 175, 55, 0.4)' }}
                className="p-6 rounded-xl border transition-all duration-300"
                style={{
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  background: 'rgba(10, 25, 47, 0.9)',
                  border: '1px solid rgba(212, 175, 55, 0.15)',
                }}
              >
                <h3 className="text-xl font-bold mb-3" style={{ color: '#F4E5B1', fontFamily: 'Montserrat, sans-serif', fontSize: '1.25rem' }}>
                  💰 Cost Advantages
                </h3>
                <p style={{ color: '#cbd5e1', fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}>
                  Lower total cost of ownership through reduced fuel expenses, minimal maintenance requirements, and 
                  extended vehicle lifespan deliver compelling ROI for fleet operators.
                </p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.02, borderColor: 'rgba(212, 175, 55, 0.4)' }}
                className="p-6 rounded-xl border transition-all duration-300"
                style={{
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  background: 'rgba(10, 25, 47, 0.9)',
                  border: '1px solid rgba(212, 175, 55, 0.15)',
                }}
              >
                <h3 className="text-xl font-bold mb-3" style={{ color: '#F4E5B1', fontFamily: 'Montserrat, sans-serif', fontSize: '1.25rem' }}>
                  🌍 Regional Localization
                </h3>
                <p style={{ color: '#cbd5e1', fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}>
                  Climate-adapted design, local manufacturing capabilities, and regional service networks ensure 
                  Q-VAN meets the specific needs of MENA markets.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Section 3: Our Role */}
        <motion.div 
          variants={fadeInUp}
          className="rounded-2xl p-8 md:p-12 border backdrop-blur-sm relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(10, 25, 47, 0.7), rgba(26, 39, 68, 0.5))',
            borderRadius: '1.5rem',
            padding: 'clamp(2rem, 4vw, 3rem)',
            border: '1px solid rgba(212, 175, 55, 0.25)',
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
              background: 'linear-gradient(90deg, #D4AF37, #F4E5B1)',
              boxShadow: '0 0 20px rgba(212, 175, 55, 0.6)',
            }}
          />

          <h2 
            className="font-bold mb-6"
            style={{
              fontSize: 'clamp(2rem, 5vw, 2.5rem)',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: '#D4AF37',
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            Our Role
          </h2>
          
          <div className="space-y-4 leading-relaxed" style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#cbd5e1', fontFamily: 'Inter, sans-serif' }}>
            <p>
              <strong style={{ color: '#F4E5B1' }}>AHKStrategies</strong> serves as the strategic orchestrator of the 
              Q-VAN ecosystem, bringing together automotive engineering excellence, regional market intelligence, and 
              investment structuring expertise.
            </p>
            
            <div className="my-6 pl-6" style={{ borderLeft: '4px solid #D4AF37' }}>
              <ul className="space-y-3" style={{ color: '#cbd5e1' }}>
                <li><strong style={{ color: '#F4E5B1' }}>Vehicle Design & Localization:</strong> Adapting EV architecture for extreme climate conditions, local usage patterns, and regional regulatory requirements</li>
                <li><strong style={{ color: '#F4E5B1' }}>Joint Venture Formation:</strong> Structuring partnerships between international OEMs, local manufacturers, and technology providers</li>
                <li><strong style={{ color: '#F4E5B1' }}>Market Entry Strategy:</strong> Developing go-to-market frameworks, fleet adoption programs, and government engagement strategies</li>
                <li><strong style={{ color: '#F4E5B1' }}>Financial Structuring:</strong> Coordinating investment syndication, project financing, and revenue model optimization</li>
              </ul>
            </div>
            
            <p>
              Through AHK LaunchPad, we facilitate the full commercialization journey — from feasibility studies and 
              prototype development to manufacturing partnerships and fleet deployment programs.
            </p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          variants={fadeInUp}
          className="rounded-2xl p-8 md:p-12 text-center"
          style={{
            background: 'linear-gradient(90deg, #D4AF37, #F4E5B1)',
            borderRadius: '1.5rem',
            padding: 'clamp(2rem, 4vw, 3rem)',
            textAlign: 'center',
            boxShadow: '0 20px 40px -10px rgba(212, 175, 55, 0.5)',
          }}
        >
          <h2 
            className="font-bold mb-4"
            style={{
              fontSize: 'clamp(2rem, 5vw, 2.5rem)',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#0A192F',
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            Request Full Feasibility Study
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(10, 25, 47, 0.85)', fontFamily: 'Inter, sans-serif' }}>
            Access comprehensive market analysis, technical specifications, financial projections, and implementation 
            roadmaps for the Q-VAN project.
          </p>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/services/boutique"
              className="inline-block px-8 py-4 font-bold rounded-xl transition-all duration-300 shadow-xl"
              style={{
                display: 'inline-block',
                padding: '1rem 2rem',
                background: '#0A192F',
                color: 'white',
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
