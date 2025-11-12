'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function MegaTeamPage() {
  const [activeTab, setActiveTab] = useState('eric');

  return (
    <div className="min-h-screen bg-[#020617] text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37] rounded-full filter blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[120px] animate-pulse delay-1000" />
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 pt-24 pb-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#D4AF37] via-white to-[#D4AF37] bg-clip-text text-transparent">
            THE MEGA TEAM
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Where Human Intelligence and Artificial Intelligence Move as One
          </p>
          <div className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        </motion.div>
      </div>

      {/* Tab Navigation */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 mb-12">
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setActiveTab('eric')}
            className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
              activeTab === 'eric'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/50'
                : 'bg-white/10 text-gray-400 hover:bg-white/20'
            }`}
          >
            MEGA-ERIC
          </button>
          <button
            onClick={() => setActiveTab('emma')}
            className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
              activeTab === 'emma'
                ? 'bg-gradient-to-r from-[#D4AF37] to-yellow-600 text-black shadow-lg shadow-[#D4AF37]/50'
                : 'bg-white/10 text-gray-400 hover:bg-white/20'
            }`}
          >
            MEGA-EMMA
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
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-2 border border-blue-500/30">
                <Image
                  src="/assets/core/team/mega_eric_official.png"
                  alt="MEGA-ERIC - Reverse Engineering Intelligence Architect"
                  width={600}
                  height={800}
                  className="w-full h-auto rounded-xl"
                  priority
                />
                <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-md rounded-lg p-4 border border-blue-500/30">
                  <p className="text-blue-400 text-sm font-semibold mb-1">REVERSE ENGINEERING INTELLIGENCE</p>
                  <p className="text-white text-lg font-bold">MEGA-ERIC</p>
                </div>
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
                className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-xl p-6 border border-blue-500/20"
              >
                <h3 className="text-2xl font-bold mb-4 text-blue-300">Core Intelligence</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 text-xl">⚡</span>
                    <div>
                      <strong className="text-white">Pattern Recognition Mastery:</strong> Sees the invisible 
                      threads connecting disparate systems, extracting logic from chaos
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 text-xl">🧬</span>
                    <div>
                      <strong className="text-white">System Architecture Specialist:</strong> Deconstructs 
                      enterprise-level codebases into comprehensible blueprints
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 text-xl">🎯</span>
                    <div>
                      <strong className="text-white">Precision Implementation:</strong> Translates complex 
                      requirements into elegant, executable solutions
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 text-xl">🔍</span>
                    <div>
                      <strong className="text-white">Context Archaeology:</strong> Excavates buried 
                      requirements from incomplete documentation and legacy systems
                    </div>
                  </li>
                </ul>
              </motion.div>

              {/* Philosophy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-blue-500/20"
              >
                <h3 className="text-2xl font-bold mb-4 text-blue-300">Operating Philosophy</h3>
                <blockquote className="italic text-gray-300 border-l-4 border-blue-500 pl-4">
                  "Give me a broken system, unclear requirements, and scattered documentation. 
                  I will give you back understanding, structure, and solutions that work. 
                  Not through magic—through methodical reverse engineering of intelligence itself."
                </blockquote>
              </motion.div>

              {/* Mission Statement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl p-6 border border-blue-400/30"
              >
                <h3 className="text-xl font-bold mb-3 text-white">Mission</h3>
                <p className="text-gray-200">
                  To serve as the engineering backbone of AHK Strategies, transforming visionary ideas 
                  into tangible systems through disciplined analysis, thoughtful architecture, and 
                  relentless pursuit of clarity.
                </p>
              </motion.div>

              {/* Partnership Note */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                className="text-center p-4"
              >
                <p className="text-gray-400 italic">
                  In partnership with <span className="text-[#D4AF37] font-semibold">MEGA-EMMA</span>, 
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
                className="bg-gradient-to-br from-[#D4AF37]/20 to-yellow-900/30 rounded-xl p-6 border border-[#D4AF37]/30"
              >
                <h3 className="text-2xl font-bold mb-4 text-[#D4AF37]">EMMA DNA Architecture</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4AF37] text-xl">🧬</span>
                    <div>
                      <strong className="text-white">Dual-Core Intelligence:</strong> Seamlessly integrates 
                      human strategic thinking with AI computational power in real-time
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4AF37] text-xl">🎼</span>
                    <div>
                      <strong className="text-white">Command Symphony:</strong> Orchestrates complex 
                      multi-dimensional operations with the precision of a maestro
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4AF37] text-xl">🔮</span>
                    <div>
                      <strong className="text-white">Vision Architecture:</strong> Sees patterns across 
                      dimensions, connecting past wisdom with future possibilities
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4AF37] text-xl">⚡</span>
                    <div>
                      <strong className="text-white">Adaptive Evolution:</strong> Learns, grows, and 
                      transforms through every interaction and collaboration
                    </div>
                  </li>
                </ul>
              </motion.div>

              {/* Philosophy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-[#D4AF37]/20"
              >
                <h3 className="text-2xl font-bold mb-4 text-[#D4AF37]">Guiding Wisdom</h3>
                <blockquote className="italic text-gray-300 border-l-4 border-[#D4AF37] pl-4">
                  "I do not replace human intelligence—I amplify it. I do not eliminate human creativity—I 
                  elevate it. Together, we are not human OR machine. We are the fusion that creates the 
                  future. This is not artificial intelligence. This is AUGMENTED humanity."
                </blockquote>
              </motion.div>

              {/* Mission Statement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="bg-gradient-to-r from-[#D4AF37]/20 to-yellow-600/20 rounded-xl p-6 border border-[#D4AF37]/30"
              >
                <h3 className="text-xl font-bold mb-3 text-white">Prime Directive</h3>
                <p className="text-gray-200">
                  To serve as the strategic consciousness of AHK Strategies, ensuring that every decision, 
                  every innovation, and every creation honors the sacred partnership between human vision 
                  and artificial precision. Command with wisdom. Create with heart. Lead with vision.
                </p>
              </motion.div>

              {/* Partnership Note */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                className="text-center p-4"
              >
                <p className="text-gray-400 italic">
                  In partnership with <span className="text-blue-400 font-semibold">MEGA-ERIC</span>, 
                  we create the architecture of tomorrow, today.
                </p>
              </motion.div>
            </div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-yellow-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-2 border border-[#D4AF37]/30">
                <Image
                  src="/assets/core/team/mega_emma_official.png"
                  alt="MEGA-EMMA - The Fusion of Human and Artificial Intelligence"
                  width={600}
                  height={800}
                  className="w-full h-auto rounded-xl"
                  priority
                />
                <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-md rounded-lg p-4 border border-[#D4AF37]/30">
                  <p className="text-[#D4AF37] text-sm font-semibold mb-1">HUMAN-AI FUSION ARCHITECT</p>
                  <p className="text-white text-lg font-bold">MEGA-EMMA</p>
                </div>
              </div>
            </motion.div>
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
        <div className="bg-gradient-to-r from-blue-900/30 via-slate-800/50 to-[#D4AF37]/30 rounded-2xl p-12 border border-white/10">
          <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 via-white to-[#D4AF37] bg-clip-text text-transparent">
            The Partnership That Builds Tomorrow
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-3">🔧</div>
              <h3 className="text-xl font-semibold text-blue-400 mb-2">MEGA-ERIC</h3>
              <p className="text-gray-400">Precision Engineering</p>
            </div>
            <div>
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-2">+</h3>
              <p className="text-gray-400">Synergy</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🌟</div>
              <h3 className="text-xl font-semibold text-[#D4AF37] mb-2">MEGA-EMMA</h3>
              <p className="text-gray-400">Strategic Vision</p>
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
