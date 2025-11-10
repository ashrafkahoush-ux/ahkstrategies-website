'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import AnimatedBackground from '@/components/AnimatedBackground';
import Watermark from '@/components/Watermark';

const Innovation = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white relative overflow-hidden">
      {/* Letterhead Background Effects */}
      <AnimatedBackground intensity="high" colorSet="purple-green" />
      <Watermark />
      
      {/* Back Button */}
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
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectFit: 'cover' }}
        >
          <source src="/assets/ai_videos/innovation.mp4" type="video/mp4" />
        </video>
        
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0A0F1E]"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4), #0A0F1E)',
          }}
        />
        
        <div className="relative z-10 text-center px-6 max-w-4xl fade-in-down">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            Innovation & <span className="text-[#00d4ff]">Design Thinking</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-semibold text-[#d9e4ec]">
            Merging human curiosity with digital precision to reimagine the future.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 relative z-10 fade-in-up">
        <div 
          className="prose prose-invert max-w-none"
          style={{
            background: 'rgba(0, 212, 255, 0.05)',
            padding: '3rem 2.5rem',
            borderRadius: '1rem',
            border: '1px solid rgba(0, 212, 255, 0.2)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          }}
        >
          <p className="text-xl md:text-2xl text-[#d9e4ec] leading-relaxed mb-8 italic text-center font-light">
            &quot;Innovation is not invention — it&apos;s evolution by design.&quot;
          </p>
          
          <p className="text-lg leading-relaxed text-[#d9e4ec] mb-6">
            At <strong>AHKStrategies</strong>, innovation is an ecosystem — not a moment.  
            We merge human curiosity with digital precision to reimagine mobility, sustainability, and energy.  
            Each breakthrough is a bridge between imagination and impact.
          </p>
        </div>
      </section>

      {/* Letterhead CSS Animations */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }

        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          animation-delay: 0.3s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Innovation;
