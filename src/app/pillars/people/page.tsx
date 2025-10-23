'use client';
import React from 'react';
import Link from 'next/link';

const People = () => {
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
            People & <span style={{ color: '#facc15' }}>Culture</span>
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
            &quot;Great visions are built by great people — those who see beyond their own reflection and shape the collective horizon.&quot;
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
            Our people are our living architecture — the foundation of progress and creativity.  
            <strong>AHKStrategies</strong> celebrates diversity, integrity, and collective wisdom,  
            empowering every individual to contribute to the design of a sustainable, intelligent future.
          </p>
        </div>
      </section>
    </div>
  );
};

export default People;
