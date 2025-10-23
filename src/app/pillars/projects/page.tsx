import React from 'react';
import Link from 'next/link';

const Projects = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden text-center text-white flex flex-col justify-center items-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
        src="/assets/backgrounds/projects.mp4"
      />

      <div className="parallax-layer relative z-10 px-6">
        <h2 className="text-purple-300 text-lg italic mb-4">
          "Projects are the bridges between vision and reality — where thought takes physical form."
        </h2>
        <h1 className="text-5xl font-bold mb-6">Projects & Partnerships</h1>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-200">
          <strong>AHKStrategies</strong> transforms foresight into frameworks and partnerships into progress.  
          Each project is a manifestation of collaboration, designed to bring sustainable innovation and measurable growth to life.
        </p>
        <Link href="/" className="block mt-10 text-purple-300 hover:text-white transition-colors">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Projects;
