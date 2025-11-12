'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function DvmPage() {
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
          className="absolute inset-0 bg-gradient-to-b from-purple-400/20 via-[#0A192F] to-[#020617]"
          style={{
            background: 'linear-gradient(to bottom, rgba(192, 132, 252, 0.2), #0A192F, #020617)',
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          {/* Logo Icon */}
          <div 
            className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center shadow-2xl"
            style={{
              width: '6rem',
              height: '6rem',
              margin: '0 auto 1.5rem',
              borderRadius: '1rem',
              background: 'linear-gradient(135deg, #c084fc, #9333ea)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 25px 50px -12px rgba(192, 132, 252, 0.5)',
            }}
          >
            <span style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>DVM</span>
          </div>

          <h1 
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{
              fontSize: 'clamp(3rem, 6vw, 4rem)',
              fontWeight: 'bold',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #c084fc, #9333ea)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Dual Vector Mobility
          </h1>
          <p 
            className="text-xl md:text-2xl text-[#94a3b8] font-medium"
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
              color: '#94a3b8',
              fontWeight: 500,
            }}
          >
            Strategic Mobility Framework
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        {/* Section 1: What is DVM? */}
        <div 
          className="bg-gradient-to-br from-[#0A192F]/60 to-[#1a2744]/40 rounded-2xl p-8 md:p-12 border border-purple-400/20 backdrop-blur-sm"
          style={{
            background: 'linear-gradient(135deg, rgba(10, 25, 47, 0.6), rgba(26, 39, 68, 0.4))',
            borderRadius: '1rem',
            padding: 'clamp(2rem, 4vw, 3rem)',
            border: '1px solid rgba(192, 132, 252, 0.2)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{
              fontSize: 'clamp(1.875rem, 4vw, 2.25rem)',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: '#c084fc',
            }}
          >
            What is DVM?
          </h2>
          
          <div className="space-y-4 text-[#cbd5e1] leading-relaxed" style={{ fontSize: '1.125rem', lineHeight: '1.75' }}>
            <p>
              <strong className="text-purple-300">Dual Vector Mobility (DVM)</strong> is not a single product — it&apos;s 
              a comprehensive strategic framework for transforming regional transportation ecosystems through the parallel 
              deployment of commercial and personal electric mobility solutions.
            </p>
            
            <p>
              The &quot;dual vector&quot; approach recognizes that sustainable mobility transformation requires simultaneous 
              advancement across two critical dimensions:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div 
                className="p-6 rounded-xl bg-[#0A192F]/80 border border-purple-400/20 backdrop-blur-sm"
                style={{
                  padding: '1.5rem',
                  borderRadius: '0.75rem',
                  background: 'rgba(10, 25, 47, 0.8)',
                  border: '1px solid rgba(192, 132, 252, 0.2)',
                  backdropFilter: 'blur(4px)',
                }}
              >
                <h3 className="text-xl font-bold text-purple-300 mb-3">Vector 1: Commercial Fleet</h3>
                <p className="text-[#cbd5e1]">
                  <strong className="text-purple-200">Q-VAN</strong> — Electric commercial vehicles for logistics, delivery, 
                  and fleet operations. Focusing on B2B adoption, infrastructure deployment, and operational efficiency.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl bg-[#0A192F]/80 border border-purple-400/20 backdrop-blur-sm"
                style={{
                  padding: '1.5rem',
                  borderRadius: '0.75rem',
                  background: 'rgba(10, 25, 47, 0.8)',
                  border: '1px solid rgba(192, 132, 252, 0.2)',
                  backdropFilter: 'blur(4px)',
                }}
              >
                <h3 className="text-xl font-bold text-purple-300 mb-3">Vector 2: Urban Mobility</h3>
                <p className="text-[#cbd5e1]">
                  <strong className="text-purple-200">WOW</strong> — Electric scooters for personal urban transportation. 
                  Targeting consumer adoption, lifestyle integration, and last-mile connectivity.
                </p>
              </div>
            </div>
            
            <p>
              By orchestrating these vectors in parallel, DVM creates network effects: commercial charging infrastructure 
              supports personal EV adoption, consumer awareness accelerates fleet electrification, and combined market 
              presence drives regulatory frameworks and investment ecosystems.
            </p>
          </div>
        </div>

        {/* Section 2: MENA Strategic Framework */}
        <div 
          className="bg-gradient-to-br from-[#0A192F]/60 to-[#1a2744]/40 rounded-2xl p-8 md:p-12 border border-purple-400/20 backdrop-blur-sm"
          style={{
            background: 'linear-gradient(135deg, rgba(10, 25, 47, 0.6), rgba(26, 39, 68, 0.4))',
            borderRadius: '1rem',
            padding: 'clamp(2rem, 4vw, 3rem)',
            border: '1px solid rgba(192, 132, 252, 0.2)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{
              fontSize: 'clamp(1.875rem, 4vw, 2.25rem)',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: '#c084fc',
            }}
          >
            MENA Strategic Framework
          </h2>
          
          <div className="space-y-6">
            <p className="text-[#cbd5e1] leading-relaxed" style={{ fontSize: '1.125rem', lineHeight: '1.75' }}>
              The MENA region presents unique opportunities for DVM implementation due to converging market forces, 
              regulatory initiatives, and infrastructure investment priorities.
            </p>

            <div className="space-y-4">
              <div 
                className="p-6 rounded-xl bg-gradient-to-r from-purple-900/30 to-purple-800/20 border border-purple-400/20"
                style={{
                  padding: '1.5rem',
                  borderRadius: '0.75rem',
                  background: 'linear-gradient(90deg, rgba(88, 28, 135, 0.3), rgba(107, 33, 168, 0.2))',
                  border: '1px solid rgba(192, 132, 252, 0.2)',
                }}
              >
                <h3 className="text-xl font-bold text-purple-300 mb-3">🎯 Market Readiness</h3>
                <p className="text-[#cbd5e1]">
                  Government Vision 2030 initiatives across GCC states prioritize clean transportation, creating policy 
                  environments favorable to EV adoption with subsidies, tax incentives, and infrastructure mandates.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl bg-gradient-to-r from-purple-900/30 to-purple-800/20 border border-purple-400/20"
                style={{
                  padding: '1.5rem',
                  borderRadius: '0.75rem',
                  background: 'linear-gradient(90deg, rgba(88, 28, 135, 0.3), rgba(107, 33, 168, 0.2))',
                  border: '1px solid rgba(192, 132, 252, 0.2)',
                }}
              >
                <h3 className="text-xl font-bold text-purple-300 mb-3">⚡ Energy Transition</h3>
                <p className="text-[#cbd5e1]">
                  Massive renewable energy investments in solar and wind create abundant clean electricity for EV charging, 
                  with several MENA countries targeting 50%+ renewable energy by 2030.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl bg-gradient-to-r from-purple-900/30 to-purple-800/20 border border-purple-400/20"
                style={{
                  padding: '1.5rem',
                  borderRadius: '0.75rem',
                  background: 'linear-gradient(90deg, rgba(88, 28, 135, 0.3), rgba(107, 33, 168, 0.2))',
                  border: '1px solid rgba(192, 132, 252, 0.2)',
                }}
              >
                <h3 className="text-xl font-bold text-purple-300 mb-3">🏙️ Urbanization Dynamics</h3>
                <p className="text-[#cbd5e1]">
                  Rapid urban population growth and smart city development create demand for innovative mobility solutions 
                  that reduce congestion and emissions while improving quality of life.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl bg-gradient-to-r from-purple-900/30 to-purple-800/20 border border-purple-400/20"
                style={{
                  padding: '1.5rem',
                  borderRadius: '0.75rem',
                  background: 'linear-gradient(90deg, rgba(88, 28, 135, 0.3), rgba(107, 33, 168, 0.2))',
                  border: '1px solid rgba(192, 132, 252, 0.2)',
                }}
              >
                <h3 className="text-xl font-bold text-purple-300 mb-3">💼 Economic Diversification</h3>
                <p className="text-[#cbd5e1]">
                  Regional strategies to reduce oil dependency drive investment in clean technology sectors, positioning 
                  EVs as strategic industries for local manufacturing and technology development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Vision 2035 Timeline */}
        <div 
          className="bg-gradient-to-br from-[#0A192F]/60 to-[#1a2744]/40 rounded-2xl p-8 md:p-12 border border-purple-400/20 backdrop-blur-sm"
          style={{
            background: 'linear-gradient(135deg, rgba(10, 25, 47, 0.6), rgba(26, 39, 68, 0.4))',
            borderRadius: '1rem',
            padding: 'clamp(2rem, 4vw, 3rem)',
            border: '1px solid rgba(192, 132, 252, 0.2)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{
              fontSize: 'clamp(1.875rem, 4vw, 2.25rem)',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: '#c084fc',
            }}
          >
            Vision 2035
          </h2>
          
          <div className="space-y-6">
            <p className="text-[#cbd5e1] leading-relaxed mb-8" style={{ fontSize: '1.125rem', lineHeight: '1.75' }}>
              The DVM framework unfolds across three strategic phases, each building on the success and infrastructure 
              of the previous stage:
            </p>

            {/* Timeline Visualization */}
            <div className="space-y-8">
              {/* Phase 1 */}
              <div className="relative pl-8 border-l-4 border-purple-400">
                <div 
                  className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-purple-400"
                  style={{
                    position: 'absolute',
                    left: '-0.75rem',
                    top: 0,
                    width: '1.5rem',
                    height: '1.5rem',
                    borderRadius: '9999px',
                    background: '#c084fc',
                  }}
                />
                <div className="pb-8">
                  <div className="text-sm text-purple-300 font-bold mb-2">2025-2027</div>
                  <h3 className="text-2xl font-bold text-white mb-3">Phase 1: Foundation & Pilot</h3>
                  <ul className="space-y-2 text-[#cbd5e1]">
                    <li>• Q-VAN pilot deployments with logistics partners in Cairo and Dubai</li>
                    <li>• WOW flagship retail launches and initial consumer adoption</li>
                    <li>• Charging infrastructure partnerships and pilot station network</li>
                    <li>• Regulatory engagement and incentive framework establishment</li>
                  </ul>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="relative pl-8 border-l-4 border-purple-400">
                <div 
                  className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-purple-400"
                  style={{
                    position: 'absolute',
                    left: '-0.75rem',
                    top: 0,
                    width: '1.5rem',
                    height: '1.5rem',
                    borderRadius: '9999px',
                    background: '#c084fc',
                  }}
                />
                <div className="pb-8">
                  <div className="text-sm text-purple-300 font-bold mb-2">2028-2031</div>
                  <h3 className="text-2xl font-bold text-white mb-3">Phase 2: Scale & Integration</h3>
                  <ul className="space-y-2 text-[#cbd5e1]">
                    <li>• Regional manufacturing facilities establishment</li>
                    <li>• Expansion to 15+ cities across MENA markets</li>
                    <li>• Integration with public transportation and smart city platforms</li>
                    <li>• Launch of DVM-branded charging and service network</li>
                  </ul>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="relative pl-8 border-l-4 border-purple-400">
                <div 
                  className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-purple-400"
                  style={{
                    position: 'absolute',
                    left: '-0.75rem',
                    top: 0,
                    width: '1.5rem',
                    height: '1.5rem',
                    borderRadius: '9999px',
                    background: '#c084fc',
                  }}
                />
                <div>
                  <div className="text-sm text-purple-300 font-bold mb-2">2032-2035</div>
                  <h3 className="text-2xl font-bold text-white mb-3">Phase 3: Ecosystem Maturity</h3>
                  <ul className="space-y-2 text-[#cbd5e1]">
                    <li>• DVM as regional mobility standard with 100,000+ vehicles deployed</li>
                    <li>• Advanced autonomous and connected vehicle features</li>
                    <li>• Full integration with renewable energy microgrids</li>
                    <li>• Export of DVM framework to emerging markets beyond MENA</li>
                  </ul>
                </div>
              </div>
            </div>

            <div 
              className="mt-8 p-6 rounded-xl bg-gradient-to-r from-purple-600/20 to-purple-500/10 border border-purple-400/30"
              style={{
                marginTop: '2rem',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                background: 'linear-gradient(90deg, rgba(147, 51, 234, 0.2), rgba(168, 85, 247, 0.1))',
                border: '1px solid rgba(192, 132, 252, 0.3)',
              }}
            >
              <p className="text-[#cbd5e1] leading-relaxed italic">
                <strong className="text-purple-300">By 2035</strong>, DVM transforms from a mobility framework into 
                a regional infrastructure platform — the foundation upon which MENA&apos;s sustainable transportation 
                future is built.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div 
          className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 md:p-12 text-center"
          style={{
            background: 'linear-gradient(90deg, #9333ea, #7e22ce)',
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
            Join the Movement
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Partner with AHKStrategies to bring the Dual Vector Mobility framework to your market. Together, we&apos;ll 
            build the clean transportation infrastructure of tomorrow.
          </p>
          
          <Link
            href="/opportunities"
            className="inline-block px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-white/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              background: 'white',
              color: '#9333ea',
              fontWeight: 'bold',
              borderRadius: '0.75rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
          >
            Explore Partnership Opportunities
          </Link>
        </div>
      </section>
    </div>
  );
}
