'use client';
import Link from 'next/link';

// Cache bust timestamp for emergency deployment
const CACHE_VERSION = '?v=20251110-1450';

const pillars = [
  { name: 'Academy', href: '/services/academy', video: `/assets/ai_images/pillars/ahk_academy_pillar.mp4${CACHE_VERSION}` },
  { name: 'Boutique', href: '/services/boutique', video: `/assets/ai_images/pillars/ahk_boutique_pillar.mp4${CACHE_VERSION}` },
  { name: 'Hub', href: '/services/consulting-hub', video: `/assets/ai_images/pillars/ahk_hub_pillar.mp4${CACHE_VERSION}` },
  { name: 'LaunchPad', href: '/services/launchpad', video: `/assets/ai_images/pillars/ahk_launchpad_pillar.mp4${CACHE_VERSION}` },
  { name: 'Projects', href: '/projects', video: `/assets/ai_images/pillars/ahk_projects_pillar.mp4${CACHE_VERSION}` },
  { name: 'Studios', href: '/services/studios', video: `/assets/ai_images/pillars/ahk_studio_pillar.mp4${CACHE_VERSION}` },
];

export default function PillarsGrid() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 relative z-10 py-24">
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          The <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E5B1] to-[#00D9FF] bg-clip-text text-transparent">AHK</span> Empire
        </h2>
        <div className="w-32 h-1 mx-auto bg-gradient-to-r from-transparent via-[#00D9FF] to-transparent mb-6"></div>
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Six pillars of strategic excellence, each powered by cutting-edge AI and decades of cross-border expertise
        </p>
      </div>

      {/* Pillars Grid - 3x2 Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map((pillar, index) => (
          <Link
            key={pillar.name}
            href={pillar.href}
            className="group relative block overflow-hidden rounded-xl shadow-glow hover:shadow-glow-electric transition-all duration-500 hover:scale-105"
            style={{
              animation: `fadeInUp 0.6s ease-out forwards ${index * 0.1}s`,
              opacity: 0
            }}
          >
            {/* Aspect Ratio Container - Using Tailwind aspect-square */}
            <div className="relative w-full aspect-square">
              {/* Video Background */}
              <video
                autoPlay
                loop
                muted
                playsInline
                aria-label={`${pillar.name} pillar showcase video`}
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={pillar.video} type="video/mp4" />
              </video>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ahk-navy via-ahk-navy/60 to-transparent"></div>

              {/* Cyan Glowing Border */}
              <div className="absolute inset-0 rounded-xl border-2 border-ahk-electric/50 shadow-glow-electric group-hover:border-ahk-electric group-hover:shadow-[0_0_40px_rgba(0,217,255,0.6)] transition-all duration-500"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <h3 className="text-3xl md:text-4xl font-bold text-center transition-transform duration-300 group-hover:-translate-y-2">
                  <span className="text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">AHK </span>
                  <span className="text-ahk-gold drop-shadow-[0_4px_20px_rgba(212,175,55,0.8)]">{pillar.name}</span>
                </h3>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-ahk-electric/0 via-ahk-gold/0 to-ahk-electric/0 group-hover:from-ahk-electric/10 group-hover:via-ahk-gold/5 group-hover:to-ahk-electric/10 transition-all duration-500"></div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
