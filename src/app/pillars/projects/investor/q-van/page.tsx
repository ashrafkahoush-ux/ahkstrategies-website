'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Globe, Network, Zap, Shield } from 'lucide-react';

export default function QVANProject() {
  const features = [
    {
      icon: Network,
      title: 'Quantum Asset Network',
      description: 'Distributed ledger architecture enabling real-time asset tracking across multiple jurisdictions',
    },
    {
      icon: Zap,
      title: 'AI-Driven Optimization',
      description: 'Machine learning algorithms predict market trends and optimize portfolio allocation automatically',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Military-grade encryption with multi-signature authentication and audit trails',
    },
    {
      icon: Globe,
      title: 'Global Integration',
      description: 'Seamless connectivity with international financial systems and regulatory frameworks',
    },
  ];

  const milestones = [
    { phase: 'Q1 2026', title: 'Platform Foundation', status: 'Planning' },
    { phase: 'Q3 2026', title: 'Beta Launch & Pilot', status: 'Roadmap' },
    { phase: 'Q1 2027', title: 'Enterprise Rollout', status: 'Vision' },
    { phase: 'Q4 2027', title: 'Global Expansion', status: 'Vision' },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#0a1433] text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1433] via-[#0d1942] to-[#0a1433]" />
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #00d4ff 1px, transparent 1px), radial-gradient(circle at 80% 80%, #00d4ff 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-[#00d4ff]/10 border border-[#00d4ff] rounded-full mb-4">
            <span className="text-[#00d4ff] text-sm font-semibold">INVESTOR EDITION • NEXT-GEN INFRASTRUCTURE</span>
          </div>
          <h1 className="text-6xl font-bold mb-4 text-[#00d4ff]">
            Q-VAN Initiative
          </h1>
          <p className="text-2xl text-gray-300 mb-6">
            Quantum Value Asset Network
          </p>
          <p className="text-lg text-gray-400 max-w-4xl leading-relaxed">
            Q-VAN represents the evolution of asset management through quantum-inspired algorithms 
            and distributed intelligence. By combining blockchain principles with AI-driven optimization, 
            Q-VAN delivers unprecedented transparency, security, and performance for institutional portfolios.
          </p>
        </div>

        {/* Core Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#00d4ff] mb-8">Core Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-[#0d1942]/50 border border-[#00d4ff]/20 rounded-xl p-8 hover:border-[#00d4ff] transition-all"
                >
                  <div className="w-16 h-16 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center mb-6">
                    <IconComponent size={32} className="text-[#00d4ff]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#00d4ff] mb-8">Development Roadmap</h2>
          <div className="space-y-4">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex items-center gap-6 bg-[#0d1942]/50 border border-[#00d4ff]/20 rounded-xl p-6 hover:border-[#00d4ff] transition-all"
              >
                <div className="flex-shrink-0 w-32 text-[#00d4ff] font-bold text-lg">
                  {milestone.phase}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-1">{milestone.title}</h3>
                </div>
                <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  milestone.status === 'Planning' ? 'bg-blue-500/20 text-blue-400' :
                  milestone.status === 'Roadmap' ? 'bg-purple-500/20 text-purple-400' :
                  'bg-gray-500/20 text-gray-400'
                }`}>
                  {milestone.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Architecture */}
        <div className="mb-16 bg-gradient-to-r from-[#00d4ff]/10 to-[#00d4ff]/5 border border-[#00d4ff] rounded-xl p-8">
          <h2 className="text-3xl font-bold text-[#00d4ff] mb-6">Technical Architecture</h2>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-start gap-3">
              <ArrowRight size={20} className="text-[#00d4ff] mt-1 flex-shrink-0" />
              <p className="text-lg"><strong>Layer 1:</strong> Distributed ledger with Byzantine fault tolerance</p>
            </div>
            <div className="flex items-start gap-3">
              <ArrowRight size={20} className="text-[#00d4ff] mt-1 flex-shrink-0" />
              <p className="text-lg"><strong>Layer 2:</strong> AI inference engine with real-time market analysis</p>
            </div>
            <div className="flex items-start gap-3">
              <ArrowRight size={20} className="text-[#00d4ff] mt-1 flex-shrink-0" />
              <p className="text-lg"><strong>Layer 3:</strong> API gateway with RESTful and GraphQL endpoints</p>
            </div>
            <div className="flex items-start gap-3">
              <ArrowRight size={20} className="text-[#00d4ff] mt-1 flex-shrink-0" />
              <p className="text-lg"><strong>Layer 4:</strong> Enterprise dashboard with customizable KPI tracking</p>
            </div>
          </div>
        </div>

        {/* Market Opportunity */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#00d4ff] mb-8">Market Opportunity</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: 'Target Market Size', value: '$2.8T', sublabel: 'Global asset management' },
              { label: 'Projected Adoption', value: '15%', sublabel: 'By 2030' },
              { label: 'Expected ROI', value: '450%', sublabel: '5-year horizon' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-[#0d1942]/50 border border-[#00d4ff]/20 rounded-xl p-6 text-center hover:border-[#00d4ff] transition-all"
              >
                <div className="text-4xl font-bold text-[#00d4ff] mb-2">{stat.value}</div>
                <div className="text-lg text-white mb-1">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#00d4ff] text-[#0a1433] text-lg font-bold rounded-lg hover:bg-[#00e5ff] transition-colors mb-8"
          >
            Request Q-VAN Technical Whitepaper
          </Link>
          <div className="mb-4">
            <Link
              href="/pillars/projects/investor"
              className="text-[#ffd700] hover:text-white transition-colors inline-flex items-center gap-2"
            >
              ← Back to Investor Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
