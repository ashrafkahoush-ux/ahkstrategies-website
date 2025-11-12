'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function WowPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#020617] text-white relative">
      {/* Back Button */}
      <button
        onClick={() => router.push('/projects/divisions/automotive')}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg shadow-lg hover:shadow-xl hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
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
      </button>

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-[#00D9FF]/20 via-[#0A192F] to-[#020617]"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 217, 255, 0.2), #0A192F, #020617)',
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          {/* Logo Icon */}
          <div 
            className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#00D9FF] to-[#0099CC] flex items-center justify-center shadow-2xl"
            style={{
              width: '6rem',
              height: '6rem',
              margin: '0 auto 1.5rem',
              borderRadius: '1rem',
              background: 'linear-gradient(135deg, #00D9FF, #0099CC)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 25px 50px -12px rgba(0, 217, 255, 0.5)',
            }}
          >
            <span style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>WOW</span>
          </div>

          <h1 
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{
              fontSize: 'clamp(3rem, 6vw, 4rem)',
              fontWeight: 'bold',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #00D9FF, #0099CC)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            WOW
          </h1>
          <p 
            className="text-xl md:text-2xl text-[#94a3b8] font-medium"
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
              color: '#94a3b8',
              fontWeight: 500,
            }}
          >
            Urban E-Mobility
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        {/* Section 1: Ride the Revolution */}
        <div 
          className="bg-gradient-to-br from-[#0A192F]/60 to-[#1a2744]/40 rounded-2xl p-8 md:p-12 border border-[#00D9FF]/20 backdrop-blur-sm"
          style={{
            background: 'linear-gradient(135deg, rgba(10, 25, 47, 0.6), rgba(26, 39, 68, 0.4))',
            borderRadius: '1rem',
            padding: 'clamp(2rem, 4vw, 3rem)',
            border: '1px solid rgba(0, 217, 255, 0.2)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{
              fontSize: 'clamp(1.875rem, 4vw, 2.25rem)',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: '#00D9FF',
            }}
          >
            Ride the Revolution
          </h2>
          
          <div className="space-y-4 text-[#cbd5e1] leading-relaxed" style={{ fontSize: '1.125rem', lineHeight: '1.75' }}>
            <p>
              WOW Electric Scooters embody the fusion of Italian elegance and urban mobility innovation. In the heart of 
              Cairo&apos;s bustling streets, where tradition meets modernity, WOW emerges as more than transportation — 
              it&apos;s a lifestyle statement, an environmental commitment, and a glimpse into the future of urban movement.
            </p>
            
            <p>
              Every curve, every component, every innovation is designed with the urban rider in mind. From the morning 
              commute through historic districts to evening rides along the Nile, WOW scooters deliver a seamless blend 
              of performance, sustainability, and unmistakable Italian design philosophy.
            </p>
            
            <p>
              This isn&apos;t just about replacing combustion engines — it&apos;s about reimagining urban mobility for a generation 
              that values sustainability without compromising style, efficiency without sacrificing emotion, and innovation 
              that honors craftsmanship.
            </p>
          </div>
        </div>

        {/* Section 2: Italian Partnership */}
        <div 
          className="bg-gradient-to-br from-[#0A192F]/60 to-[#1a2744]/40 rounded-2xl p-8 md:p-12 border border-[#00D9FF]/20 backdrop-blur-sm"
          style={{
            background: 'linear-gradient(135deg, rgba(10, 25, 47, 0.6), rgba(26, 39, 68, 0.4))',
            borderRadius: '1rem',
            padding: 'clamp(2rem, 4vw, 3rem)',
            border: '1px solid rgba(0, 217, 255, 0.2)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{
              fontSize: 'clamp(1.875rem, 4vw, 2.25rem)',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: '#00D9FF',
            }}
          >
            Italian Partnership
          </h2>
          
          <div className="space-y-6">
            <p className="text-[#cbd5e1] leading-relaxed" style={{ fontSize: '1.125rem', lineHeight: '1.75' }}>
              WOW represents a strategic collaboration with Italy&apos;s premier scooter design houses and manufacturing 
              excellence. This partnership brings together centuries of Italian craftsmanship with cutting-edge electric 
              vehicle technology.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div 
                className="p-6 rounded-xl bg-[#0A192F]/80 border border-[#00D9FF]/10"
                style={{
                  padding: '1.5rem',
                  borderRadius: '0.75rem',
                  background: 'rgba(10, 25, 47, 0.8)',
                  border: '1px solid rgba(0, 217, 255, 0.1)',
                }}
              >
                <h3 className="text-xl font-bold text-[#00D9FF] mb-3">Design Excellence</h3>
                <p className="text-[#cbd5e1]">
                  Italian design studios renowned for their work with premium automotive and motorcycle brands bring 
                  aesthetic perfection to every WOW model.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl bg-[#0A192F]/80 border border-[#00D9FF]/10"
                style={{
                  padding: '1.5rem',
                  borderRadius: '0.75rem',
                  background: 'rgba(10, 25, 47, 0.8)',
                  border: '1px solid rgba(0, 217, 255, 0.1)',
                }}
              >
                <h3 className="text-xl font-bold text-[#00D9FF] mb-3">Assembly Expertise</h3>
                <p className="text-[#cbd5e1]">
                  Manufacturing partnerships leverage Italian precision engineering and quality control standards 
                  perfected over decades of scooter production.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl bg-[#0A192F]/80 border border-[#00D9FF]/10"
                style={{
                  padding: '1.5rem',
                  borderRadius: '0.75rem',
                  background: 'rgba(10, 25, 47, 0.8)',
                  border: '1px solid rgba(0, 217, 255, 0.1)',
                }}
              >
                <h3 className="text-xl font-bold text-[#00D9FF] mb-3">Technology Integration</h3>
                <p className="text-[#cbd5e1]">
                  Advanced battery management systems, regenerative braking, and smart connectivity features developed 
                  by European technology leaders.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl bg-[#0A192F]/80 border border-[#00D9FF]/10"
                style={{
                  padding: '1.5rem',
                  borderRadius: '0.75rem',
                  background: 'rgba(10, 25, 47, 0.8)',
                  border: '1px solid rgba(0, 217, 255, 0.1)',
                }}
              >
                <h3 className="text-xl font-bold text-[#00D9FF] mb-3">Market Localization</h3>
                <p className="text-[#cbd5e1]">
                  MENA-specific adaptations ensure performance in high-temperature environments while maintaining 
                  Italian design integrity and riding dynamics.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Market Entry Plan */}
        <div 
          className="bg-gradient-to-br from-[#0A192F]/60 to-[#1a2744]/40 rounded-2xl p-8 md:p-12 border border-[#00D9FF]/20 backdrop-blur-sm"
          style={{
            background: 'linear-gradient(135deg, rgba(10, 25, 47, 0.6), rgba(26, 39, 68, 0.4))',
            borderRadius: '1rem',
            padding: 'clamp(2rem, 4vw, 3rem)',
            border: '1px solid rgba(0, 217, 255, 0.2)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{
              fontSize: 'clamp(1.875rem, 4vw, 2.25rem)',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: '#00D9FF',
            }}
          >
            Market Entry Plan
          </h2>
          
          <div className="space-y-4 text-[#cbd5e1] leading-relaxed" style={{ fontSize: '1.125rem', lineHeight: '1.75' }}>
            <p>
              The WOW MENA strategy targets a phased market entry beginning with Egypt&apos;s metropolitan centers, 
              followed by expansion across Gulf Cooperation Council states and North African urban markets.
            </p>
            
            <div className="my-6 pl-6 border-l-4 border-[#00D9FF]">
              <ul className="space-y-3 text-[#cbd5e1]">
                <li><strong className="text-[#00D9FF]">Phase 1 — Cairo Launch:</strong> Flagship retail locations, test ride centers, and initial fleet deployment for delivery partnerships</li>
                <li><strong className="text-[#00D9FF]">Phase 2 — Regional Expansion:</strong> Dealership network across Alexandria, Dubai, Riyadh, and Casablanca</li>
                <li><strong className="text-[#00D9FF]">Phase 3 — Ecosystem Development:</strong> Charging infrastructure, service networks, and battery swap stations</li>
                <li><strong className="text-[#00D9FF]">Phase 4 — B2B Penetration:</strong> Corporate fleet programs, delivery service partnerships, and shared mobility integration</li>
              </ul>
            </div>
            
            <p>
              Strategic partnerships with urban mobility platforms, last-mile delivery services, and smart city initiatives 
              accelerate market penetration while building brand recognition among early adopters.
            </p>
          </div>
        </div>

        {/* Infographic Section */}
        <div 
          className="bg-white rounded-2xl p-4 shadow-2xl"
          style={{
            background: 'white',
            borderRadius: '1rem',
            padding: '1rem',
            boxShadow: '0 25px 50px -12px rgba(0, 217, 255, 0.3)',
          }}
        >
          <h2 
            className="text-3xl font-bold text-[#0A192F] mb-6 text-center"
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: '#0A192F',
              textAlign: 'center',
            }}
          >
            WOW MENA 5-Year Infographic Summary
          </h2>
          <Image
            src="/assets/wow/infographic.png"
            alt="WOW MENA 5-Year Infographic Summary"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-lg"
            priority
          />
        </div>

        {/* CTA Section */}
        <div 
          className="bg-gradient-to-r from-[#00D9FF] to-[#0099CC] rounded-2xl p-8 md:p-12 text-center"
          style={{
            background: 'linear-gradient(90deg, #00D9FF, #0099CC)',
            borderRadius: '1rem',
            padding: 'clamp(2rem, 4vw, 3rem)',
            textAlign: 'center',
          }}
        >
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            style={{
              fontSize: 'clamp(1.875rem, 4vw, 2.25rem)',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: 'white',
            }}
          >
            Download Investor Summary
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Access comprehensive market analysis, financial projections, and strategic roadmaps for the WOW Electric 
            Scooters MENA expansion.
          </p>
          
          <Link
            href="/services/boutique"
            className="inline-block px-8 py-4 bg-white text-[#00D9FF] font-bold rounded-xl hover:bg-white/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              background: 'white',
              color: '#00D9FF',
              fontWeight: 'bold',
              borderRadius: '0.75rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
          >
            Contact AHK Boutique
          </Link>
        </div>
      </section>
    </div>
  );
}
