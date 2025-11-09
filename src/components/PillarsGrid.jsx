'use client';
import Link from 'next/link';

const pillars = [
  { name: 'AHK Projects', href: '/projects', video: '/assets/ai_images/pillars/ahk_projects_pillar.mp4' },
  { name: 'AHK Hub', href: '/services/consulting-hub', video: '/assets/ai_images/pillars/ahk_hub_pillar.mp4' },
  { name: 'AHK LaunchPad', href: '/services/launchpad', video: '/assets/ai_images/pillars/ahk_launchpad_pillar.mp4' },
  { name: 'AHK Studios', href: '/services/studios', video: '/assets/ai_images/pillars/ahk_studio_pillar.mp4' },
  { name: 'AHK Academy', href: '/services/academy', video: '/assets/ai_images/pillars/ahk_academy_pillar.mp4' },
  { name: 'AHK Boutique', href: '/services/boutique', video: '/assets/ai_images/pillars/ahk_boutique_pillar.mp4' },
];

export default function PillarsGrid() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 relative z-10 py-20">
      {/* Section Header */}
      <div className="text-center mb-16 animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text-gold-blue mb-4">
          The AHK Empire
        </h2>
        <div className="w-32 h-1 mx-auto bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent"></div>
      </div>

      {/* 3×2 Grid Layout with letterhead styling */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pillars.map((pillar, index) => (
          <Link
            key={pillar.name}
            href={pillar.href}
            className="panel-letterhead group relative overflow-hidden rounded-xl transition-all duration-500 hover:scale-105 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Video Background */}
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              >
                <source src={pillar.video} type="video/mp4" />
              </video>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-dark)] via-transparent to-transparent opacity-80"></div>
              
              {/* Gold accent line at top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent group-hover:h-2 transition-all duration-300"></div>
            </div>

            {/* Title Overlay */}
            <div className="absolute inset-0 flex items-end justify-center p-6">
              <h3 className="text-2xl font-bold text-center transition-all duration-300 group-hover:transform group-hover:-translate-y-2">
                <span className="text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">AHK </span>
                <span className="text-[var(--gold)] drop-shadow-[0_4px_12px_rgba(212,175,55,0.6)]">
                  {pillar.name.replace('AHK ', '')}
                </span>
              </h3>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl border-gradient-animated"></div>
          </Link>
        ))}
      </div>
    </section>
  );
}
