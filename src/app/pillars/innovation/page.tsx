import React from 'react';
import Link from 'next/link';

const Innovation = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden text-center text-white flex flex-col justify-center items-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
        src="/assets/backgrounds/innovation.mp4"
      />

      <div className="parallax-layer relative z-10 px-6">
        <h2 className="text-blue-400 text-lg italic mb-4">
          "Innovation is not invention — it's evolution by design."
        </h2>
        <h1 className="text-5xl font-bold mb-6">Innovation & Design Thinking</h1>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-200">
          At <strong>AHKStrategies</strong>, innovation is an ecosystem — not a moment.  
          We merge human curiosity with digital precision to reimagine mobility, sustainability, and energy.  
          Each breakthrough is a bridge between imagination and impact.
        </p>
        <Link href="/" className="block mt-10 text-blue-400 hover:text-white transition-colors">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Innovation;
