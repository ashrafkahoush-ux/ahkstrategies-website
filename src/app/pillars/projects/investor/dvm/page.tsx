'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Target, TrendingUp, Users } from 'lucide-react';

export default function DVMProject() {
  const phases = [
    {
      year: '2025-2027',
      title: 'Foundation & Infrastructure',
      objectives: [
        'Establish core DVM framework architecture',
        'Deploy Emma AI Command Center',
        'Launch pilot programs across 3 divisions',
        'Build strategic partnerships',
      ],
      status: 'In Progress',
    },
    {
      year: '2028-2030',
      title: 'Expansion & Integration',
      objectives: [
        'Scale to 10+ active divisions',
        'Integrate cross-platform intelligence',
        'Deploy automated reporting systems',
        'Expand MENA market presence',
      ],
      status: 'Planning',
    },
    {
      year: '2031-2035',
      title: 'Global Leadership',
      objectives: [
        'Achieve market leadership in strategic consulting',
        'Launch 5 new regional hubs',
        'Complete Emma ecosystem integration',
        'Establish AHK as AI-powered empire standard',
      ],
      status: 'Vision',
    },
  ];

  const metrics = [
    { label: 'Investment Horizon', value: '10 Years', icon: Calendar },
    { label: 'Projected ROI', value: '300-500%', icon: TrendingUp },
    { label: 'Market Segments', value: '7 Pillars', icon: Target },
    { label: 'Team Growth', value: '200+ Members', icon: Users },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#0a1433] text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1433] via-[#1a2855] to-[#0a1433]" />
      
      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-[#ffd700]/10 border border-[#ffd700] rounded-full mb-4">
            <span className="text-[#ffd700] text-sm font-semibold">INVESTOR EDITION • STRATEGIC ROADMAP</span>
          </div>
          <h1 className="text-6xl font-bold mb-4 text-[#ffd700]">
            DVM Strategic Flow
          </h1>
          <p className="text-2xl text-gray-300 mb-6">
            2025-2035 Digital Value Management Framework
          </p>
          <p className="text-lg text-gray-400 max-w-4xl leading-relaxed">
            The DVM (Digital Value Management) initiative represents the cornerstone of AHK Strategies&apos; 
            long-term vision: a fully integrated, AI-powered intelligence ecosystem that synchronizes 
            all divisions, optimizes resource allocation, and delivers measurable value across every pillar 
            of the empire.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric) => {
            const IconComponent = metric.icon;
            return (
              <div
                key={metric.label}
                className="bg-[#0d1942]/50 border border-[#ffd700]/20 rounded-xl p-6 text-center hover:border-[#ffd700] transition-all"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#ffd700]/10 flex items-center justify-center">
                    <IconComponent size={24} className="text-[#ffd700]" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-[#ffd700] mb-2">{metric.value}</div>
                <div className="text-sm text-gray-400">{metric.label}</div>
              </div>
            );
          })}
        </div>

        {/* Strategic Phases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#ffd700] mb-8">Strategic Implementation Phases</h2>
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="bg-[#0d1942]/50 border border-[#ffd700]/20 rounded-xl p-8 hover:border-[#ffd700] transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-sm text-[#ffd700] font-semibold mb-2">{phase.year}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{phase.title}</h3>
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    phase.status === 'In Progress' ? 'bg-green-500/20 text-green-400' :
                    phase.status === 'Planning' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {phase.status}
                  </div>
                </div>
                <ul className="space-y-3">
                  {phase.objectives.map((objective, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <ArrowRight size={20} className="text-[#ffd700] mt-0.5 flex-shrink-0" />
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Core Components */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#ffd700] mb-8">Core System Components</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Emma AI Command Center',
                description: 'Central intelligence hub coordinating all divisions with persistent memory and context-aware decision making.',
              },
              {
                title: 'Knowledge Base Integration',
                description: 'Unified repository synchronizing reports, analyses, and strategic insights across the empire.',
              },
              {
                title: 'Automated Reporting Pipeline',
                description: 'Real-time generation of division summaries, cross-functional analyses, and executive dashboards.',
              },
              {
                title: 'Strategic Dashboard',
                description: 'Visual command interface for monitoring KPIs, resource allocation, and project timelines.',
              },
            ].map((component, index) => (
              <div
                key={index}
                className="bg-[#0d1942]/50 border border-[#ffd700]/20 rounded-xl p-6 hover:border-[#ffd700] transition-all"
              >
                <h3 className="text-xl font-bold text-[#ffd700] mb-3">{component.title}</h3>
                <p className="text-gray-300 leading-relaxed">{component.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Summary */}
        <div className="bg-gradient-to-r from-[#ffd700]/10 to-[#ffd700]/5 border border-[#ffd700] rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-[#ffd700] mb-6">Investment Opportunity</h2>
          <div className="space-y-4 text-gray-300">
            <p className="text-lg leading-relaxed">
              The DVM Strategic Flow represents a <strong>10-year commitment</strong> to building 
              sustainable, AI-powered infrastructure that delivers compounding returns across all 
              business divisions.
            </p>
            <p className="text-lg leading-relaxed">
              Early-stage investors gain exclusive access to proprietary technology, strategic 
              positioning in emerging markets, and participation in one of the most ambitious 
              digital transformation initiatives in the consulting sector.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#ffd700] text-[#0a1433] text-lg font-bold rounded-lg hover:bg-[#ffed4e] transition-colors mb-8"
          >
            Request Full Feasibility Study
          </Link>
          <div className="mb-4">
            <Link
              href="/pillars/projects/investor"
              className="text-[#00d4ff] hover:text-white transition-colors inline-flex items-center gap-2"
            >
              ← Back to Investor Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
