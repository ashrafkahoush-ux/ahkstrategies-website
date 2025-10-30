'use client';
import Link from 'next/link';

const pillars = [
  { name: 'Studio', href: '/services/studios', video: '/assets/ai_videos/ahk_studio.mp4', fallback: '/assets/ai_images/pillars/services.png' },
  { name: 'Boutique', href: '/services/boutique', video: '/assets/ai_videos/ahk_boutique.mp4', fallback: '/assets/ai_images/pillars/services.png' },
  { name: 'Hub', href: '/services/consulting-hub', video: '/assets/ai_videos/ahk_hub.mp4', fallback: '/assets/ai_images/pillars/services.png' },
  { name: 'Launchpad', href: '/services/launchpad', video: '/assets/ai_videos/ahk_launchpad.mp4', fallback: '/assets/ai_images/pillars/services.png' },
  { name: 'Projects', href: '/projects', video: '/assets/ai_videos/ahk_projects.mp4', fallback: '/assets/ai_images/pillars/projects.png' },
  { name: 'Academy', href: '/services/academy', video: '/assets/ai_videos/ahk_academy.mp4', fallback: '/assets/ai_images/pillars/services.png' },
];

export default function PillarsGrid() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-12 relative z-10">
      {/* 3x2 Grid: 3 columns, 2 rows */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {pillars.map(p => (
          <Link 
            key={p.name} 
            href={p.href} 
            className="group relative block overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Video Container with Aspect Ratio */}
            <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: '1 / 1' }}>
              {/* Video Background */}
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={p.video} type="video/mp4" />
                {/* Fallback image if video fails */}
                <img src={p.fallback} alt={p.name} className="w-full h-full object-cover" />
              </video>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/35"></div>

              {/* Text Content */}
              <div className="absolute inset-0 flex items-end justify-center pb-6 z-10">
                <h3 className="text-2xl font-bold text-white drop-shadow-lg group-hover:text-[#00d4ff] transition-colors duration-300">
                  {p.name}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Responsive CSS */}
      <style jsx>{`
        @media (max-width: 1023px) {
          .grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 639px) {
          .grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
