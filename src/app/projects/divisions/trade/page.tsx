'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import IconTrade from '@/../public/assets/images/divisions/trade.jpg';

export default function TradeDivision() {
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
          src={IconTrade}
          alt="International Trade Division - Connecting global markets through strategic trade solutions"
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
            className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
              fontWeight: 'bold',
              marginBottom: '1rem',
              textShadow: '0 4px 12px rgba(0,0,0,0.8)',
            }}
          >
            International Trade Division
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
            Connecting global markets through strategic trade solutions and comprehensive international commerce services.
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
            Our International Trade Division specializes in facilitating seamless global commerce through expert 
            trade services, regulatory compliance, and strategic market access solutions.
          </p>
          
          <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginTop: '2rem', marginBottom: '1rem', color: '#fde047' }}>
            Key Focus Areas
          </h3>
          <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: '#cbd5e1', lineHeight: '1.75' }}>
            <li>Import & Export Management</li>
            <li>Trade Finance Solutions</li>
            <li>Customs & Regulatory Compliance</li>
            <li>Global Supply Chain Optimization</li>
            <li>Market Access & Entry Strategies</li>
          </ul>

          <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginTop: '2rem', marginBottom: '1rem', color: '#fde047' }}>
            Our Commitment
          </h3>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.75', color: '#cbd5e1' }}>
            We are dedicated to empowering businesses with comprehensive trade solutions that navigate complex 
            international regulations, optimize logistics, and unlock new market opportunities worldwide.
          </p>
        </div>
      </section>
    </div>
  );
}
