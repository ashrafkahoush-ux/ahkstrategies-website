'use client';
import React from 'react';
import Link from 'next/link';
import AnimatedBackground from '@/components/AnimatedBackground';
import Watermark from '@/components/Watermark';

const Projects = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden text-center text-white flex flex-col justify-center items-center">
      {/* Animated Background */}
      <AnimatedBackground intensity="medium" colorSet="gold-blue" />
      
      {/* Watermark */}
      <Watermark />

      {/* Hero Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        style={{ objectFit: 'cover', zIndex: 1 }}
      >
        <source src="/assets/ai_videos/projects.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay for depth */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0A0F1E]"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4), #0A0F1E)',
          zIndex: 1,
        }}
      />

      <div className="relative z-10 px-6 pt-24 pb-16">
        {/* Title with gradient border */}
        <div className="mb-8">
          <h1 className="text-5xl font-heading font-bold mb-4 animate-fade-in-down">
            Projects & Partnerships
          </h1>
          <div className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-[var(--gold)] to-[var(--blue)] animate-gradient-shift"></div>
        </div>
        
        <h2 className="text-[#00d4ff] text-xl italic mb-6 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          &ldquo;Projects are the bridges between vision and reality — where thought takes physical form.&rdquo;
        </h2>
        
        <p className="max-w-3xl mx-auto text-base leading-relaxed text-[#d9e4ec] animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <strong>AHKStrategies</strong> transforms foresight into frameworks and partnerships into progress.  
          Each project is a manifestation of collaboration, designed to bring sustainable innovation and measurable growth to life.
        </p>
        
        {/* Investor Projects Link */}
        <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
          <Link 
            href="/pillars/projects/investor" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-[var(--gold)] to-[var(--blue)] text-white font-bold rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View Investor Edition Projects →
          </Link>
        </div>
        
        {/* Back to Home Link */}
        <Link 
          href="/" 
          className="mt-12 inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--blue)] text-white font-semibold shadow-lg hover:opacity-90 transition-all duration-300"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Projects;
