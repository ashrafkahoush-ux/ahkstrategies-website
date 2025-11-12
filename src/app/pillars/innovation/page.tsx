'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const Innovation = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white relative">
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
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0A0F1E]"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4), #0A0F1E)',
          }}
        />
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            Innovation & <span className="text-[#00d4ff]">Design Thinking</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-semibold text-[#d9e4ec]">
            Merging human curiosity with digital precision to reimagine the future.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="prose prose-invert max-w-none">
          <p className="text-xl md:text-2xl text-[#d9e4ec] leading-relaxed mb-8 italic text-center font-light">
            &quot;Innovation is not invention — it&apos;s evolution by design.&quot;
          </p>
          
          <p className="text-lg leading-relaxed text-[#d9e4ec] mb-6">
            At <strong>AHKStrategies</strong>, innovation is an ecosystem — not a moment.  
            We merge human curiosity with digital precision to reimagine mobility, sustainability, and energy.  
            Each breakthrough is a bridge between imagination and impact.
          </p>
        </div>

        {/* Back to Home Page Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-[#00d4ff] text-[#0b132b] rounded-xl font-semibold hover:bg-[#00b8e6] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Back to Home Page
          </button>
        </div>
      </section>
    </div>
  );
};

export default Innovation;
