'use client';

import React from 'react';
import Link from 'next/link';
import { Building2, TrendingUp, Globe, FileText } from 'lucide-react';

const projects = [
  {
    id: 'dvm',
    title: 'DVM Strategic Flow',
    subtitle: '2025-2035 Roadmap',
    description: 'Comprehensive strategic vision for digital value management across the AHK empire.',
    badge: 'Investor Edition',
    status: 'Active Development',
    href: '/pillars/projects/investor/dvm',
    icon: TrendingUp,
    color: '#ffd700',
  },
  {
    id: 'q-van',
    title: 'Q-VAN Initiative',
    subtitle: 'Quantum Value Asset Network',
    description: 'Next-generation asset management infrastructure with AI-driven optimization.',
    badge: 'Investor Edition',
    status: 'Phase II',
    href: '/pillars/projects/investor/q-van',
    icon: Globe,
    color: '#00d4ff',
  },
  {
    id: 'wow-mena',
    title: 'WOW-MENA',
    subtitle: 'Regional Expansion Strategy',
    description: 'Feasibility study for MENA market penetration with localized intelligence frameworks.',
    badge: 'Investor Edition',
    status: 'Market Analysis',
    href: '/pillars/projects/investor/wow-mena',
    icon: Building2,
    color: '#4ade80',
  },
];

export default function InvestorProjects() {
  return (
    <div className="relative min-h-screen w-full bg-[#0a1433] text-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1433] via-[#0d1942] to-[#0a1433]" />
      
      {/* Animated Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(#ffd700 1px, transparent 1px), linear-gradient(90deg, #ffd700 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#ffd700]/10 border border-[#ffd700] rounded-full mb-4">
            <span className="text-[#ffd700] text-sm font-semibold">INVESTOR EDITION</span>
          </div>
          <h1 className="text-5xl font-bold mb-4 text-[#ffd700]">
            Strategic Projects Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive feasibility studies and strategic roadmaps for AHK empire expansion
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <Link
                key={project.id}
                href={project.href}
                className="group relative bg-[#0d1942]/50 border border-[#ffd700]/20 rounded-xl p-6 hover:border-[#ffd700] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,215,0,0.3)]"
              >
                {/* Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-[#ffd700] text-[#0a1433] text-xs font-bold rounded">
                  {project.badge}
                </div>

                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${project.color}20` }}
                >
                  <IconComponent size={32} style={{ color: project.color }} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-2" style={{ color: project.color }}>
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 mb-3">{project.subtitle}</p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Status */}
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-gray-400">{project.status}</span>
                </div>

                {/* Arrow indicator */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <FileText size={20} className="text-[#ffd700]" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center p-8 bg-[#ffd700]/5 border border-[#ffd700]/30 rounded-xl">
          <h2 className="text-2xl font-bold text-[#ffd700] mb-4">
            Full Documentation Available
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Access comprehensive feasibility studies, financial projections, and strategic timelines 
            for each initiative under the AHK Projects portfolio.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-[#ffd700] text-[#0a1433] font-bold rounded-lg hover:bg-[#ffed4e] transition-colors"
          >
            Request Full Access
          </Link>
        </div>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link
            href="/pillars/projects"
            className="text-[#00d4ff] hover:text-white transition-colors inline-flex items-center gap-2"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
