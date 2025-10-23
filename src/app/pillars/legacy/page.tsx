import React from 'react';
import Link from 'next/link';

const Legacy = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden text-center text-white flex flex-col justify-center items-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
        src="/assets/backgrounds/legacy.mp4"
      />

      <div className="parallax-layer relative z-10 px-6">
        <h2 className="text-green-300 text-lg italic mb-4">
          "Legacy is not what we leave behind — it's what continues to grow because of what we've built."
        </h2>
        <h1 className="text-5xl font-bold mb-6">Legacy & Continuity</h1>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-200">
          At <strong>AHKStrategies</strong>, legacy means more than reputation — it's endurance through evolution.  
          It's about designing systems and cultures that outlast individuals, thriving across generations of thinkers, dreamers, and builders.  
          Continuity isn't repetition — it's adaptation, guided by the wisdom of experience and the courage to begin again.
        </p>
        <Link href="/" className="block mt-10 text-green-300 hover:text-white transition-colors">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Legacy;
