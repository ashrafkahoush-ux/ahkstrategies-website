'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Innovation = () => {
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
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectFit: 'cover' }}
        >
          <source src="/assets/backgrounds/innovation.mp4" type="video/mp4" />
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
            className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
              fontWeight: 'bold',
              marginBottom: '1rem',
              textShadow: '0 4px 12px rgba(0,0,0,0.8)',
            }}
          >
            Innovation & <span style={{ color: '#facc15' }}>Design Thinking</span>
          </h1>
          <p 
            className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: '#e2e8f0',
              maxWidth: '42rem',
              margin: '0 auto',
            }}
          >
            Merging human curiosity with digital precision to reimagine the future.
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
          <p 
            className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8 italic text-center"
            style={{
              fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
              color: '#cbd5e1',
              lineHeight: '1.6',
              marginBottom: '2rem',
              fontStyle: 'italic',
              fontWeight: '300',
              textAlign: 'center',
            }}
          >
            &quot;Innovation is not invention — it&apos;s evolution by design.&quot;
          </p>
          
          <p style={{ fontSize: '1.125rem', lineHeight: '1.75', color: '#cbd5e1', marginBottom: '1.5rem' }}>
            At <strong>AHKStrategies</strong>, innovation is an ecosystem — not a moment.  
            We merge human curiosity with digital precision to reimagine mobility, sustainability, and energy.  
            Each breakthrough is a bridge between imagination and impact.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Innovation;
