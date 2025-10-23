import React from 'react';
import Link from 'next/link';

const People = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden text-center text-white flex flex-col justify-center items-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
        src="/assets/backgrounds/people.mp4"
      />

      <div className="parallax-layer relative z-10 px-6">
        <h2 className="text-amber-300 text-lg italic mb-4">
          "Great visions are built by great people — those who see beyond their own reflection and shape the collective horizon."
        </h2>
        <h1 className="text-5xl font-bold mb-6">People & Culture</h1>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-200">
          Our people are our living architecture — the foundation of progress and creativity.  
          <strong>AHKStrategies</strong> celebrates diversity, integrity, and collective wisdom,  
          empowering every individual to contribute to the design of a sustainable, intelligent future.
        </p>
        <Link href="/" className="block mt-10 text-amber-300 hover:text-white transition-colors">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default People;
