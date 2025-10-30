import React from 'react';
import Link from 'next/link';

const Projects = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden text-center text-white flex flex-col justify-center items-center bg-[#0b132b]">
      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b132b]/90 via-[#0b132b] to-[#0b132b]"></div>

      <div className="relative z-10 px-6">
        <h2 className="text-[#00d4ff] text-lg italic mb-4">
          "Projects are the bridges between vision and reality — where thought takes physical form."
        </h2>
        <h1 className="text-5xl font-bold mb-6">Projects & Partnerships</h1>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-[#d9e4ec]">
          <strong>AHKStrategies</strong> transforms foresight into frameworks and partnerships into progress.  
          Each project is a manifestation of collaboration, designed to bring sustainable innovation and measurable growth to life.
        </p>
        <Link href="/" className="block mt-10 text-[#00d4ff] hover:text-white transition-colors">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Projects;
