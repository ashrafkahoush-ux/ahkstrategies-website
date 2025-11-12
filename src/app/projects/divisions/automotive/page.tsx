'use client';
import { useRouter } from 'next/navigation';

export default function AutomotiveDivision() {
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

      {/* Hero Section with Video Background */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectFit: 'cover' }}
        >
          <source src="/assets/backgrounds/automotive-division.mp4" type="video/mp4" />
        </video>
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
            Automotive Division
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
            Leading innovation in automotive technology and sustainable transportation solutions.
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
            Our Automotive Division is at the forefront of transforming the automotive industry through cutting-edge technology, 
            sustainable practices, and innovative solutions that drive the future of mobility.
          </p>
          
          <p style={{ fontSize: '1.125rem', lineHeight: '1.75', color: '#cbd5e1', marginBottom: '2rem' }}>
            We are dedicated to creating sustainable, efficient, and innovative automotive solutions that meet the evolving 
            needs of modern transportation while prioritizing environmental responsibility and technological excellence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-16">
          <h2 
            className="text-3xl font-bold mb-10 text-center"
            style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2.5rem', textAlign: 'center', color: '#facc15' }}
          >
            Our Flagship Projects
          </h2>
          
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem',
            }}
          >
            {/* Q-VAN Card */}
            <div 
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0A192F]/90 to-[#1a2744]/90 backdrop-blur-sm border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#D4AF37]/20"
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '0.75rem',
                background: 'linear-gradient(135deg, rgba(10, 25, 47, 0.9), rgba(26, 39, 68, 0.9))',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                transition: 'all 0.5s ease',
                cursor: 'pointer',
              }}
              onClick={() => router.push('/projects/divisions/automotive/qvan')}
            >
              {/* Card Content */}
              <div className="p-6 relative z-10">
                {/* Project Logo/Icon Area */}
                <div 
                  className="w-16 h-16 mb-4 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#F4E5B1] flex items-center justify-center"
                  style={{
                    width: '4rem',
                    height: '4rem',
                    marginBottom: '1rem',
                    borderRadius: '0.5rem',
                    background: 'linear-gradient(135deg, #D4AF37, #F4E5B1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0A192F' }}>Q</span>
                </div>

                <h3 
                  className="text-2xl font-bold mb-2 text-white group-hover:text-[#D4AF37] transition-colors duration-300"
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem',
                    color: 'white',
                    transition: 'color 0.3s ease',
                  }}
                >
                  Q-VAN
                </h3>
                
                <p 
                  className="text-sm text-[#94a3b8] mb-4 font-medium"
                  style={{
                    fontSize: '0.875rem',
                    color: '#94a3b8',
                    marginBottom: '1rem',
                    fontWeight: 500,
                  }}
                >
                  Smart Commercial EVs
                </p>

                <p 
                  className="text-base text-[#cbd5e1] leading-relaxed mb-6 italic"
                  style={{
                    fontSize: '1rem',
                    color: '#cbd5e1',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem',
                    fontStyle: 'italic',
                  }}
                >
                  &quot;Powering the next frontier of green logistics.&quot;
                </p>

                <button
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F4E5B1] rounded-lg text-[#0A192F] font-bold hover:shadow-lg hover:shadow-[#D4AF37]/40 transition-all duration-300"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1.5rem',
                    background: 'linear-gradient(90deg, #D4AF37, #F4E5B1)',
                    borderRadius: '0.5rem',
                    color: '#0A192F',
                    fontWeight: 'bold',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                >
                  Learn More
                </button>
              </div>

              {/* Animated background accent */}
              <div 
                className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-3xl group-hover:bg-[#D4AF37]/20 transition-all duration-500"
                style={{
                  position: 'absolute',
                  bottom: '-2.5rem',
                  right: '-2.5rem',
                  width: '8rem',
                  height: '8rem',
                  background: 'rgba(212, 175, 55, 0.1)',
                  borderRadius: '9999px',
                  filter: 'blur(60px)',
                  transition: 'all 0.5s ease',
                }}
              />
            </div>

            {/* WOW Card */}
            <div 
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0A192F]/90 to-[#1a2744]/90 backdrop-blur-sm border border-[#00D9FF]/20 hover:border-[#00D9FF] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#00D9FF]/20"
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '0.75rem',
                background: 'linear-gradient(135deg, rgba(10, 25, 47, 0.9), rgba(26, 39, 68, 0.9))',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(0, 217, 255, 0.2)',
                transition: 'all 0.5s ease',
                cursor: 'pointer',
              }}
              onClick={() => router.push('/projects/divisions/automotive/wow')}
            >
              {/* Card Content */}
              <div className="p-6 relative z-10">
                {/* Project Logo/Icon Area */}
                <div 
                  className="w-16 h-16 mb-4 rounded-lg bg-gradient-to-br from-[#00D9FF] to-[#0099CC] flex items-center justify-center"
                  style={{
                    width: '4rem',
                    height: '4rem',
                    marginBottom: '1rem',
                    borderRadius: '0.5rem',
                    background: 'linear-gradient(135deg, #00D9FF, #0099CC)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>WOW</span>
                </div>

                <h3 
                  className="text-2xl font-bold mb-2 text-white group-hover:text-[#00D9FF] transition-colors duration-300"
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem',
                    color: 'white',
                    transition: 'color 0.3s ease',
                  }}
                >
                  WOW
                </h3>
                
                <p 
                  className="text-sm text-[#94a3b8] mb-4 font-medium"
                  style={{
                    fontSize: '0.875rem',
                    color: '#94a3b8',
                    marginBottom: '1rem',
                    fontWeight: 500,
                  }}
                >
                  Urban E-Mobility
                </p>

                <p 
                  className="text-base text-[#cbd5e1] leading-relaxed mb-6 italic"
                  style={{
                    fontSize: '1rem',
                    color: '#cbd5e1',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem',
                    fontStyle: 'italic',
                  }}
                >
                  &quot;Italian design meets Cairo streets.&quot;
                </p>

                <button
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#00D9FF] to-[#0099CC] rounded-lg text-white font-bold hover:shadow-lg hover:shadow-[#00D9FF]/40 transition-all duration-300"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1.5rem',
                    background: 'linear-gradient(90deg, #00D9FF, #0099CC)',
                    borderRadius: '0.5rem',
                    color: 'white',
                    fontWeight: 'bold',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                >
                  Learn More
                </button>
              </div>

              {/* Animated background accent */}
              <div 
                className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#00D9FF]/10 rounded-full blur-3xl group-hover:bg-[#00D9FF]/20 transition-all duration-500"
                style={{
                  position: 'absolute',
                  bottom: '-2.5rem',
                  right: '-2.5rem',
                  width: '8rem',
                  height: '8rem',
                  background: 'rgba(0, 217, 255, 0.1)',
                  borderRadius: '9999px',
                  filter: 'blur(60px)',
                  transition: 'all 0.5s ease',
                }}
              />
            </div>

            {/* DVM Card */}
            <div 
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0A192F]/90 to-[#1a2744]/90 backdrop-blur-sm border border-purple-400/20 hover:border-purple-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-400/20"
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '0.75rem',
                background: 'linear-gradient(135deg, rgba(10, 25, 47, 0.9), rgba(26, 39, 68, 0.9))',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(192, 132, 252, 0.2)',
                transition: 'all 0.5s ease',
                cursor: 'pointer',
              }}
              onClick={() => router.push('/projects/divisions/automotive/dvm')}
            >
              {/* Card Content */}
              <div className="p-6 relative z-10">
                {/* Project Logo/Icon Area */}
                <div 
                  className="w-16 h-16 mb-4 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center"
                  style={{
                    width: '4rem',
                    height: '4rem',
                    marginBottom: '1rem',
                    borderRadius: '0.5rem',
                    background: 'linear-gradient(135deg, #c084fc, #9333ea)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white' }}>DVM</span>
                </div>

                <h3 
                  className="text-2xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors duration-300"
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem',
                    color: 'white',
                    transition: 'color 0.3s ease',
                  }}
                >
                  DVM
                </h3>
                
                <p 
                  className="text-sm text-[#94a3b8] mb-4 font-medium"
                  style={{
                    fontSize: '0.875rem',
                    color: '#94a3b8',
                    marginBottom: '1rem',
                    fontWeight: 500,
                  }}
                >
                  Strategic Mobility Framework
                </p>

                <p 
                  className="text-base text-[#cbd5e1] leading-relaxed mb-6 italic"
                  style={{
                    fontSize: '1rem',
                    color: '#cbd5e1',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem',
                    fontStyle: 'italic',
                  }}
                >
                  &quot;The blueprint of MENA&apos;s clean-transport future.&quot;
                </p>

                <button
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg text-white font-bold hover:shadow-lg hover:shadow-purple-400/40 transition-all duration-300"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1.5rem',
                    background: 'linear-gradient(90deg, #c084fc, #9333ea)',
                    borderRadius: '0.5rem',
                    color: 'white',
                    fontWeight: 'bold',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                >
                  Learn More
                </button>
              </div>

              {/* Animated background accent */}
              <div 
                className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-400/10 rounded-full blur-3xl group-hover:bg-purple-400/20 transition-all duration-500"
                style={{
                  position: 'absolute',
                  bottom: '-2.5rem',
                  right: '-2.5rem',
                  width: '8rem',
                  height: '8rem',
                  background: 'rgba(192, 132, 252, 0.1)',
                  borderRadius: '9999px',
                  filter: 'blur(60px)',
                  transition: 'all 0.5s ease',
                }}
              />
            </div>
          </div>

          {/* Responsive CSS */}
          <style jsx>{`
            @media (max-width: 768px) {
              div[style*="gridTemplateColumns: repeat(3, 1fr)"] {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>
        </div>
      </section>
    </div>
  );
}
