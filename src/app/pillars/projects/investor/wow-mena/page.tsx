'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, TrendingUp, Users, Building2 } from 'lucide-react';

export default function WOWMENAProject() {
  const regions = [
    { country: 'UAE', status: 'Phase I Ready', market: '$480B' },
    { country: 'Saudi Arabia', status: 'Vision 2030 Aligned', market: '$730B' },
    { country: 'Egypt', status: 'Strategic Partner', market: '$390B' },
    { country: 'Qatar', status: 'Planning', market: '$180B' },
  ];

  const strengths = [
    {
      icon: MapPin,
      title: 'Strategic Positioning',
      description: 'Leveraging AHK Strategies\' Egyptian roots with UAE expansion for pan-MENA reach',
    },
    {
      icon: Users,
      title: 'Local Intelligence',
      description: 'Deep understanding of cultural, regulatory, and business nuances across MENA markets',
    },
    {
      icon: Building2,
      title: 'Infrastructure Ready',
      description: 'Partnerships with regional tech hubs, government initiatives, and enterprise networks',
    },
    {
      icon: TrendingUp,
      title: 'Growth Trajectory',
      description: 'MENA digital transformation market growing at 18% CAGR through 2030',
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#0a1433] text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1433] via-[#1a2855] to-[#0a1433]" />
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(to right, #4ade80 1px, transparent 1px), linear-gradient(to bottom, #4ade80 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-[#4ade80]/10 border border-[#4ade80] rounded-full mb-4">
            <span className="text-[#4ade80] text-sm font-semibold">INVESTOR EDITION • REGIONAL EXPANSION</span>
          </div>
          <h1 className="text-6xl font-bold mb-4 text-[#4ade80]">
            WOW-MENA
          </h1>
          <p className="text-2xl text-gray-300 mb-6">
            Waves of Wisdom across Middle East & North Africa
          </p>
          <p className="text-lg text-gray-400 max-w-4xl leading-relaxed">
            WOW-MENA is AHK Strategies&apos; comprehensive market entry and expansion framework for the 
            MENA region. Combining local expertise, strategic partnerships, and AI-powered intelligence, 
            WOW-MENA positions AHK as the premier consulting and innovation partner for digital transformation 
            across the fastest-growing markets in the world.
          </p>
        </div>

        {/* Target Markets */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#4ade80] mb-8">Priority Markets</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {regions.map((region, index) => (
              <div
                key={index}
                className="bg-[#0d1942]/50 border border-[#4ade80]/20 rounded-xl p-6 hover:border-[#4ade80] transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{region.country}</h3>
                    <div className="text-sm text-[#4ade80] font-semibold">{region.status}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-400 mb-1">Market Size</div>
                    <div className="text-2xl font-bold text-[#4ade80]">{region.market}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin size={16} />
                  <span className="text-sm">MENA Core Region</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Advantages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#4ade80] mb-8">Strategic Advantages</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {strengths.map((strength, index) => {
              const IconComponent = strength.icon;
              return (
                <div
                  key={index}
                  className="bg-[#0d1942]/50 border border-[#4ade80]/20 rounded-xl p-8 hover:border-[#4ade80] transition-all"
                >
                  <div className="w-16 h-16 rounded-lg bg-[#4ade80]/10 flex items-center justify-center mb-6">
                    <IconComponent size={32} className="text-[#4ade80]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{strength.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{strength.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Implementation Strategy */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#4ade80] mb-8">Three-Phase Rollout</h2>
          <div className="space-y-6">
            {[
              {
                phase: 'Phase I (2026)',
                title: 'Foundation & Partnerships',
                objectives: [
                  'Establish UAE regional headquarters',
                  'Form strategic alliances with local tech incubators',
                  'Deploy pilot programs with 5 enterprise clients',
                  'Build MENA-specific Emma AI knowledge base',
                ],
              },
              {
                phase: 'Phase II (2027-2028)',
                title: 'Market Penetration',
                objectives: [
                  'Launch AHK Academy MENA Edition',
                  'Open Saudi Arabia innovation hub',
                  'Scale to 25+ enterprise partnerships',
                  'Introduce localized consulting frameworks',
                ],
              },
              {
                phase: 'Phase III (2029-2030)',
                title: 'Regional Leadership',
                objectives: [
                  'Achieve #1 market position in digital transformation consulting',
                  'Expand to 6+ MENA countries',
                  'Launch WOW-MENA annual summit',
                  'Establish 200+ member regional network',
                ],
              },
            ].map((phaseData, index) => (
              <div
                key={index}
                className="bg-[#0d1942]/50 border border-[#4ade80]/20 rounded-xl p-8 hover:border-[#4ade80] transition-all"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-sm text-[#4ade80] font-semibold mb-2">{phaseData.phase}</div>
                    <h3 className="text-2xl font-bold text-white">{phaseData.title}</h3>
                  </div>
                </div>
                <ul className="space-y-3">
                  {phaseData.objectives.map((objective, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <ArrowRight size={20} className="text-[#4ade80] mt-0.5 flex-shrink-0" />
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Highlights */}
        <div className="mb-16 bg-gradient-to-r from-[#4ade80]/10 to-[#4ade80]/5 border border-[#4ade80] rounded-xl p-8">
          <h2 className="text-3xl font-bold text-[#4ade80] mb-6">Investment Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { label: 'Total Addressable Market', value: '$1.8T', sublabel: 'MENA Digital Economy 2030' },
              { label: 'Expected Market Share', value: '3-5%', sublabel: 'Conservative Projection' },
              { label: 'Payback Period', value: '3.5 Years', sublabel: 'From Phase I Launch' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#4ade80] mb-2">{stat.value}</div>
                <div className="text-lg text-white mb-1">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.sublabel}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            WOW-MENA positions AHK Strategies at the intersection of three mega-trends: MENA digital 
            transformation, AI-powered consulting, and regional economic diversification. Early investors 
            gain exposure to one of the world&apos;s highest-growth regions with proven local expertise.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#4ade80] text-[#0a1433] text-lg font-bold rounded-lg hover:bg-[#5eea90] transition-colors mb-8"
          >
            Download WOW-MENA Feasibility Study
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
