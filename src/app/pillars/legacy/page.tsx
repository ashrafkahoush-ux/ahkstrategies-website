'use client';
import React from 'react';
import BackButton from '@/components/BackButton';

const Legacy = () => {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white relative">
      {/* Back Button */}
      <div className="fixed bottom-10 right-10 z-50">
        <BackButton />
      </div>

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
          <source src="/assets/backgrounds/legacy.mp4" type="video/mp4" />
        </video>
        
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0A0F1E]"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4), #0A0F1E)',
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
            Legacy & <span style={{ color: '#facc15' }}>Continuity</span>
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
            Building enduring systems that thrive across generations.
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
            &quot;Legacy is not what we leave behind — it&apos;s what continues to grow because of what we&apos;ve built.&quot;
          </p>
          
          <p style={{ fontSize: '1.125rem', lineHeight: '1.75', color: '#cbd5e1', marginBottom: '1.5rem' }}>
            At <strong>AHKStrategies</strong>, legacy means more than reputation — it&apos;s endurance through evolution.  
            It&apos;s about designing systems and cultures that outlast individuals, thriving across generations of thinkers, dreamers, and builders.  
            Continuity isn&apos;t repetition — it&apos;s adaptation, guided by the wisdom of experience and the courage to begin again.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Legacy;
