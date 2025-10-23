import React from 'react';
import Link from 'next/link';

const Vision = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden text-center text-white flex flex-col justify-center items-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
        src="/assets/backgrounds/vision.mp4"
      />
      <div className="parallax-layer relative z-10 px-6">
        <h2 className="text-cyan-400 text-lg italic mb-4">
          "An alliance between intuition and computation — the symphony of humanity and intelligence — is what the next era of creation will be built upon."
        </h2>
        <h1 className="text-5xl font-bold mb-6">Vision & Foresight</h1>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-200">
          The future belongs to those who can translate imagination into insight.  
          At <strong>AHKStrategies</strong>, our vision is not to chase trends — but to design the frameworks that create them.  
          We read the undercurrents of innovation, bridging human intuition with digital intelligence, shaping tomorrow with purpose and clarity.
        </p>
        <Link href="/" className="block mt-10 text-cyan-300 hover:text-white transition-colors">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Vision;
