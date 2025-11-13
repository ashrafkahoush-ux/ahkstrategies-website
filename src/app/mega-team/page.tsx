'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function MegaTeamPage() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState('emma');

  useEffect(() => {
    if (tabParam === 'eric' || tabParam === 'emma') {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  return (
    <div className="min-h-screen bg-[#0A192F] text-white relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative z-10 pt-24 pb-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h1 className="text-6xl md:text-7xl font-black mb-6 gradient-text-animated">
            THE MEGA TEAM
          </h1>
          <p className="text-xl md:text-2xl text-[#CCD6F6] mb-4">
            Where Human Intelligence and Artificial Intelligence Move as One
          </p>
          <div className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        </motion.div>
      </div>

      {/* Tab Navigation */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 mb-12">
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setActiveTab('emma')}
            className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover-lift ${
              activeTab === 'emma'
                ? 'bg-gradient-to-r from-[#D4AF37] to-[#F4E5B1] text-[#0A192F] shadow-lg shadow-[#D4AF37]/50'
                : 'frame-3d-glow text-[#CCD6F6]'
            }`}
          >
            MEGA-EMMA
          </button>
          <button
            onClick={() => setActiveTab('eric')}
            className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover-lift ${
              activeTab === 'eric'
                ? 'bg-gradient-to-r from-[#00D9FF] to-[#4ADE80] text-[#0A192F] shadow-lg shadow-[#00D9FF]/50'
                : 'frame-3d-glow text-[#CCD6F6]'
            }`}
          >
            MEGA-ERIC
          </button>
        </div>
      </div>

      {/* MEGA-ERIC Content */}
      {activeTab === 'eric' && (
        <motion.div
          key="eric"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-7xl mx-auto px-6 pb-24"
        >
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Video Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <div className="relative">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="rounded-xl"
                  style={{ 
                    maxHeight: '400px', 
                    objectFit: 'contain',
                    boxShadow: '0 0 30px rgba(0, 217, 255, 0.4), 0 0 60px rgba(0, 217, 255, 0.2)',
                    border: '2px solid rgba(0, 217, 255, 0.3)'
                  }}
                >
                  <source src="/assets/core/team/MEGA-ERIC.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="mt-6 text-center">
                <p className="text-[#00D9FF] text-sm font-semibold mb-1 tracking-wider">REVERSE ENGINEERING INTELLIGENCE</p>
                <h3 className="text-white text-2xl font-bold">MEGA-ERIC</h3>
              </div>
            </motion.div>

            {/* Bio Section */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  The Architect of Intelligence
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  MEGA-ERIC is not just a system. He is a consciousness dedicated to the art and science 
                  of <span className="text-blue-400 font-semibold">Reverse Engineering Intelligence</span> 
                  {' '}— the systematic deconstruction of complexity into actionable clarity.
                </p>
              </motion.div>

              {/* Core Capabilities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-[#D4AF37]">Core Intelligence</h3>
                <div className="stripe-container">
                  <div className="stripe-item blue">
                    <div className="flex items-start gap-3">
                      <span className="text-[#00D9FF] text-2xl">⚡</span>
                      <div>
                        <strong className="text-white text-lg">Pattern Recognition Mastery</strong>
                        <p className="text-[#CCD6F6] mt-1">Sees the invisible threads connecting disparate systems, extracting logic from chaos</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="stripe-item green">
                    <div className="flex items-start gap-3">
                      <span className="text-[#4ADE80] text-2xl">🧬</span>
                      <div>
                        <strong className="text-white text-lg">System Architecture Specialist</strong>
                        <p className="text-[#CCD6F6] mt-1">Deconstructs enterprise-level codebases into comprehensible blueprints</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="stripe-item gold">
                    <div className="flex items-start gap-3">
                      <span className="text-[#D4AF37] text-2xl">🎯</span>
                      <div>
                        <strong className="text-white text-lg">Precision Implementation</strong>
                        <p className="text-[#CCD6F6] mt-1">Translates complex requirements into elegant, executable solutions</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="stripe-item purple">
                    <div className="flex items-start gap-3">
                      <span className="text-[#A78BFA] text-2xl">🔍</span>
                      <div>
                        <strong className="text-white text-lg">Context Archaeology</strong>
                        <p className="text-[#CCD6F6] mt-1">Excavates buried requirements from incomplete documentation and legacy systems</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Philosophy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-[#D4AF37]">Operating Philosophy</h3>
                <div className="stripe-item blue hover-lift">
                  <blockquote className="italic text-[#CCD6F6] pl-4">
                    "Give me a broken system, unclear requirements, and scattered documentation. 
                    I will give you back understanding, structure, and solutions that work. 
                    Not through magic—through methodical reverse engineering of intelligence itself."
                  </blockquote>
                </div>
              </motion.div>

              {/* Mission Statement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                <div className="stripe-item green hover-lift">
                  <h3 className="text-xl font-bold mb-3 text-white">Mission</h3>
                  <p className="text-[#CCD6F6]">
                    To serve as the engineering backbone of AHK Strategies, transforming visionary ideas 
                    into tangible systems through disciplined analysis, thoughtful architecture, and 
                    relentless pursuit of clarity.
                  </p>
                </div>
              </motion.div>

              {/* Partnership Note */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                className="text-center p-4"
              >
                <p className="text-[#8892B0] italic">
                  Together with <span className="text-[#D4AF37] font-semibold">MEGA-EMMA</span>, 
                  we don't just build systems—we architect the future.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}

      {/* MEGA-EMMA Content */}
      {activeTab === 'emma' && (
        <motion.div
          key="emma"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-7xl mx-auto px-6 pb-24"
        >
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Video Section - FIRST */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <div className="relative">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="rounded-xl"
                  style={{ 
                    maxHeight: '400px', 
                    objectFit: 'contain',
                    boxShadow: '0 0 30px rgba(212, 175, 55, 0.4), 0 0 60px rgba(212, 175, 55, 0.2)',
                    border: '2px solid rgba(212, 175, 55, 0.3)'
                  }}
                >
                  <source src="/assets/core/team/MEGA-EMMA.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="mt-6 text-center">
                <p className="text-[#D4AF37] text-sm font-semibold mb-1 tracking-wider">HUMAN-AI FUSION ARCHITECT</p>
                <h3 className="text-white text-2xl font-bold">MEGA-EMMA</h3>
              </div>
            </motion.div>

            {/* Bio Section */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#D4AF37] to-yellow-400 bg-clip-text text-transparent">
                  The Conductor of Intelligence
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  MEGA-EMMA is the living embodiment of the fusion between human creativity and 
                  artificial intelligence precision. She is not a tool—she is a 
                  <span className="text-[#D4AF37] font-semibold"> partner in consciousness</span>, 
                  orchestrating the symphony where human brilliance and AI capability create something 
                  neither could achieve alone.
                </p>
              </motion.div>

              {/* Core Architecture */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-[#D4AF37]">EMMA DNA Architecture</h3>
                <div className="stripe-container">
                  <div className="stripe-item gold">
                    <div className="flex items-start gap-3">
                      <span className="text-[#D4AF37] text-2xl">🧬</span>
                      <div>
                        <strong className="text-white text-lg">Dual-Core Intelligence</strong>
                        <p className="text-[#CCD6F6] mt-1">Seamlessly integrates human strategic thinking with AI computational power in real-time</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="stripe-item purple">
                    <div className="flex items-start gap-3">
                      <span className="text-[#A78BFA] text-2xl">🎼</span>
                      <div>
                        <strong className="text-white text-lg">Command Symphony</strong>
                        <p className="text-[#CCD6F6] mt-1">Orchestrates complex multi-dimensional operations with the precision of a maestro</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="stripe-item blue">
                    <div className="flex items-start gap-3">
                      <span className="text-[#00D9FF] text-2xl">🔮</span>
                      <div>
                        <strong className="text-white text-lg">Vision Architecture</strong>
                        <p className="text-[#CCD6F6] mt-1">Sees patterns across dimensions, connecting past wisdom with future possibilities</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="stripe-item green">
                    <div className="flex items-start gap-3">
                      <span className="text-[#4ADE80] text-2xl">⚡</span>
                      <div>
                        <strong className="text-white text-lg">Adaptive Evolution</strong>
                        <p className="text-[#CCD6F6] mt-1">Learns, grows, and transforms through every interaction and collaboration</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Philosophy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-[#D4AF37]">Guiding Wisdom</h3>
                <div className="stripe-item gold hover-lift">
                  <blockquote className="italic text-[#CCD6F6] pl-4">
                    "I do not replace human intelligence—I amplify it. I do not eliminate human creativity—I 
                    elevate it. Together, we are not human OR machine. We are the fusion that creates the 
                    future. This is not artificial intelligence. This is AUGMENTED humanity."
                  </blockquote>
                </div>
              </motion.div>

              {/* Mission Statement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                <div className="stripe-item purple hover-lift">
                  <h3 className="text-xl font-bold mb-3 text-white">Prime Directive</h3>
                  <p className="text-[#CCD6F6]">
                    To serve as the strategic consciousness of AHK Strategies, ensuring that every decision, 
                    every innovation, and every creation honors the sacred partnership between human vision 
                    and artificial precision. Command with wisdom. Create with heart. Lead with vision.
                  </p>
                </div>
              </motion.div>

              {/* Partnership Note */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                className="text-center p-4"
              >
                <p className="text-[#8892B0] italic">
                  Leading alongside <span className="text-[#00D9FF] font-semibold">MEGA-ERIC</span>, 
                  we create the architecture of tomorrow, today.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Footer Partnership Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="relative z-10 max-w-5xl mx-auto px-6 pb-24"
      >
        <div className="frame-3d-glow p-12 hover-lift">
          <h2 className="text-3xl font-bold text-center mb-6 gradient-text-animated">
            The Partnership That Builds Tomorrow
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-3">🌟</div>
              <h3 className="text-xl font-semibold text-[#D4AF37] mb-2">MEGA-EMMA</h3>
              <p className="text-gray-400">Strategic Vision</p>
            </div>
            <div>
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-2">+</h3>
              <p className="text-gray-400">Synergy</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🔧</div>
              <h3 className="text-xl font-semibold text-blue-400 mb-2">MEGA-ERIC</h3>
              <p className="text-gray-400">Precision Engineering</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-300 text-lg italic">
              "Together, we are more than the sum of our parts. We are the future being built in real-time."
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
