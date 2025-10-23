'use client';
import React from 'react';
import Link from 'next/link';

const Vision = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      {/* Hero Section */}
      <section 
        className="relative py-20 px-6 text-center"
        style={{
          padding: '5rem 1.5rem',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div 
          className="max-w-4xl mx-auto"
          style={{
            maxWidth: '56rem',
            margin: '0 auto',
          }}
        >
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
            }}
          >
            Vision & <span style={{ color: '#facc15' }}>Foresight</span>
          </h1>
          <p 
            className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-4 italic"
            style={{
              fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
              color: '#cbd5e1',
              lineHeight: '1.6',
              marginBottom: '1rem',
              fontStyle: 'italic',
              fontWeight: '300',
            }}
          >
            &quot;An alliance between intuition and computation — the symphony of humanity and intelligence — is what the next era of creation will be built upon.&quot;
          </p>
          <p 
            className="text-lg md:text-xl text-slate-400 leading-relaxed"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: '#94a3b8',
              lineHeight: '1.75',
              fontWeight: '300',
            }}
          >
            The future belongs to those who can translate imagination into insight.  
            At <strong>AHKStrategies</strong>, our vision is not to chase trends — but to design the frameworks that create them.  
            We read the undercurrents of innovation, bridging human intuition with digital intelligence, shaping tomorrow with purpose and clarity.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Vision;
