'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AnimatedBackground from '@/components/AnimatedBackground';
import Watermark from '@/components/Watermark';

const Vision = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white relative">
      {/* Animated Background */}
      <AnimatedBackground intensity="medium" colorSet="gold-blue" />
      
      {/* Watermark */}
      <Watermark />
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
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          style={{ objectFit: 'cover', zIndex: 1 }}
        >
          <source src="/assets/ai_videos/vision.mp4" type="video/mp4" />
        </video>
        
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0A0F1E]"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4), #0A0F1E)',
            zIndex: 1,
          }}
        />
        
        <div 
          className="relative z-10 text-center px-6 max-w-4xl pt-24"
          style={{
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            padding: '6rem 1.5rem 0',
            maxWidth: '56rem',
          }}
        >
          <h1 
            className="text-5xl font-heading font-bold mb-4 text-white drop-shadow-lg animate-fade-in-down"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
              fontWeight: 'bold',
              marginBottom: '1rem',
              textShadow: '0 4px 12px rgba(0,0,0,0.8)',
            }}
          >
            Vision & <span style={{ color: 'var(--gold)' }}>Foresight</span>
          </h1>
          <div className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-[var(--gold)] to-[var(--blue)] animate-gradient-shift mb-6"></div>
          <p 
            className="text-xl max-w-2xl mx-auto font-bold leading-relaxed animate-fade-in-up"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: '#FFFFFF',
              fontWeight: '700',
              maxWidth: '42rem',
              margin: '0 auto',
              textShadow: '0 2px 8px rgba(0,0,0,0.9)',
              animationDelay: '0.15s',
            }}
          >
            Translating imagination into insight, shaping tomorrow with purpose and clarity.
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
            className="text-xl text-slate-300 leading-relaxed mb-8 italic text-center animate-fade-in-up"
            style={{
              fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
              color: '#cbd5e1',
              lineHeight: '1.75',
              marginBottom: '2rem',
              fontStyle: 'italic',
              fontWeight: '300',
              textAlign: 'center',
              animationDelay: '0.3s',
            }}
          >
            &quot;An alliance between intuition and computation — the symphony of humanity and intelligence — is what the next era of creation will be built upon.&quot;
          </p>
          
          <p 
            className="text-base leading-relaxed text-slate-300 mb-6 animate-fade-in-up"
            style={{ 
              fontSize: '1.125rem', 
              lineHeight: '1.75', 
              color: '#cbd5e1', 
              marginBottom: '1.5rem',
              animationDelay: '0.45s',
            }}
          >
            The future belongs to those who can translate imagination into insight.  
            At <strong>AHKStrategies</strong>, our vision is not to chase trends — but to design the frameworks that create them.  
            We read the undercurrents of innovation, bridging human intuition with digital intelligence, shaping tomorrow with purpose and clarity.
          </p>
        </div>
        
        {/* Back to Home Link */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Link 
            href="/" 
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--blue)] text-white font-semibold shadow-lg hover:opacity-90 transition-all duration-300"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Vision;
