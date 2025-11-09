import React from 'react';
import Link from 'next/link';

const Projects = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden text-center text-white flex flex-col justify-center items-center">
      {/* Hero Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectFit: 'cover' }}
      >
        <source src="/assets/ai_videos/projects.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay for depth */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0A0F1E]"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4), #0A0F1E)',
        }}
      />

      <div className="relative z-10 px-6">
        <h2 className="text-[#00d4ff] text-lg italic mb-4">
          &ldquo;Projects are the bridges between vision and reality — where thought takes physical form.&rdquo;
        </h2>
        <h1 className="text-5xl font-bold mb-6">Projects & Partnerships</h1>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-[#d9e4ec]">
          <strong>AHKStrategies</strong> transforms foresight into frameworks and partnerships into progress.  
          Each project is a manifestation of collaboration, designed to bring sustainable innovation and measurable growth to life.
        </p>
        
        {/* Investor Projects Link */}
        <div className="mt-12">
          <Link 
            href="/pillars/projects/investor" 
            className="inline-block px-8 py-4 bg-[#ffd700] text-[#0a1433] font-bold rounded-lg hover:bg-[#ffed4e] transition-colors shadow-lg"
          >
            View Investor Edition Projects →
          </Link>
        </div>
        
        <Link href="/" className="block mt-10 text-[#00d4ff] hover:text-white transition-colors">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Projects;
