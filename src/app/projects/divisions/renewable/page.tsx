'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import IconRenewable from '@/../public/assets/images/divisions/renewable.jpg';

export default function RenewableDivision() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#020617] text-white relative">
      {/* Back Button - Fixed at bottom left of page */}
      <button
        onClick={() => router.back()}
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
        <span className="text-sm font-bold text-white">Back</span>
      </button>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src={IconRenewable}
          alt="Renewable Energy Division - Driving sustainable energy through green technology"
          fill
          className="object-cover"
          style={{ objectFit: 'cover' }}
          priority
        />
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#020617]"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4), #020617)',
          }}
        />

        <div 
          className="relative z-10 text-center px-6 max-w-4xl"
          style={{
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            padding: '0 1.5rem',
            maxWidth: '56rem',
          }}
        >
          <h1 
            className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#facc15',
              textShadow: '0 4px 12px rgba(0,0,0,0.8)',
            }}
          >
            Renewable Energy Division
          </h1>
          <p 
            className="text-lg md:text-xl max-w-2xl mx-auto font-bold"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: '#FFFFFF',
              fontWeight: '700',
              maxWidth: '42rem',
              margin: '0 auto',
              textShadow: '0 2px 8px rgba(0,0,0,0.9)',
            }}
          >
            Driving the future of sustainable energy through innovative renewable solutions and green technology.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section 
        className="max-w-6xl mx-auto px-6 py-16"
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          padding: '4rem 1.5rem',
        }}
      >
        <div className="prose prose-invert max-w-none">
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#facc15' }}>
            Overview
          </h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.75', color: '#cbd5e1', marginBottom: '1.5rem' }}>
            Our Renewable Energy Division is committed to advancing clean energy solutions and sustainable practices 
            that power a greener future while addressing global climate challenges.
          </p>
          
          <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginTop: '2rem', marginBottom: '1.5rem', color: '#fde047' }}>
            Key Focus Areas
          </h3>
          
          {/* Clickable Focus Area Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            {/* Card 1: Solar & Wind Energy */}
            <div 
              onClick={() => router.push('/opportunities')}
              className="group cursor-pointer bg-gradient-to-br from-[#1e1b4b]/40 to-[#0f172a]/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-amber-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/20 hover:scale-[1.02]"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">☀️</div>
                <div>
                  <h4 className="text-lg font-bold text-amber-400 mb-2 group-hover:text-yellow-300">
                    Solar & Wind Energy Solutions
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed mb-3">
                    Large-scale solar farms, wind power development, and hybrid renewable systems.
                  </p>
                  <span className="text-amber-400 text-sm font-semibold group-hover:gap-2 inline-flex items-center gap-1">
                    Explore Opportunity →
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: Energy Storage */}
            <div 
              onClick={() => router.push('/opportunities')}
              className="group cursor-pointer bg-gradient-to-br from-[#1e1b4b]/40 to-[#0f172a]/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-amber-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/20 hover:scale-[1.02]"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">🔋</div>
                <div>
                  <h4 className="text-lg font-bold text-amber-400 mb-2 group-hover:text-yellow-300">
                    Advanced Energy Storage Systems
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed mb-3">
                    Battery storage, grid integration, and energy management solutions.
                  </p>
                  <span className="text-amber-400 text-sm font-semibold group-hover:gap-2 inline-flex items-center gap-1">
                    Explore Opportunity →
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3: Green Hydrogen */}
            <div 
              onClick={() => router.push('/opportunities')}
              className="group cursor-pointer bg-gradient-to-br from-[#1e1b4b]/40 to-[#0f172a]/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-amber-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/20 hover:scale-[1.02]"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">💧</div>
                <div>
                  <h4 className="text-lg font-bold text-amber-400 mb-2 group-hover:text-yellow-300">
                    Green Hydrogen Technology
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed mb-3">
                    Hydrogen production, storage, and distribution for clean energy future.
                  </p>
                  <span className="text-amber-400 text-sm font-semibold group-hover:gap-2 inline-flex items-center gap-1">
                    Explore Opportunity →
                  </span>
                </div>
              </div>
            </div>

            {/* Card 4: Sustainable Infrastructure */}
            <div 
              onClick={() => router.push('/opportunities')}
              className="group cursor-pointer bg-gradient-to-br from-[#1e1b4b]/40 to-[#0f172a]/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-amber-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/20 hover:scale-[1.02]"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">🌱</div>
                <div>
                  <h4 className="text-lg font-bold text-amber-400 mb-2 group-hover:text-yellow-300">
                    Sustainable Infrastructure Planning
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed mb-3">
                    Smart grids, microgrid solutions, and green building technologies.
                  </p>
                  <span className="text-amber-400 text-sm font-semibold group-hover:gap-2 inline-flex items-center gap-1">
                    Explore Opportunity →
                  </span>
                </div>
              </div>
            </div>
          </div>

          <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginTop: '2rem', marginBottom: '1rem', color: '#fde047' }}>
            Our Commitment
          </h3>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.75', color: '#cbd5e1' }}>
            We are dedicated to accelerating the global transition to renewable energy through innovative technologies, 
            strategic partnerships, and comprehensive solutions that create lasting environmental and economic value.
          </p>
        </div>
      </section>
    </div>
  );
}
