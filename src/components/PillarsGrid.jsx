'use client';
import Link from 'next/link';

const pillars = [
  { name: 'AHK Academy', href: '/services/academy', video: '/assets/ai_images/pillars/ahk_academy_pillar.mp4' },
  { name: 'AHK Boutique', href: '/services/boutique', video: '/assets/ai_images/pillars/ahk_boutique_pillar.mp4' },
  { name: 'AHK Hub', href: '/services/consulting-hub', video: '/assets/ai_images/pillars/ahk_hub_pillar.mp4' },
  { name: 'AHK LaunchPad', href: '/services/launchpad', video: '/assets/ai_images/pillars/ahk_launchpad_pillar.mp4' },
  { name: 'AHK Projects', href: '/projects', video: '/assets/ai_images/pillars/ahk_projects_pillar.mp4' },
  { name: 'AHK Studios', href: '/services/studios', video: '/assets/ai_images/pillars/ahk_studio_pillar.mp4' },
];

export default function PillarsGrid() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 relative z-10" style={{ marginTop: '2cm' }}>
      {/* 3×2 Grid Layout with vertical spacing */}
      <div className="grid grid-cols-3 gap-x-8" style={{ rowGap: '1cm' }}>
        {pillars.map((pillar) => (
          <Link
            key={pillar.name}
            href={pillar.href}
            className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group cursor-pointer"
            style={{ 
              width: '81%', // 90% of 90% = 81%
              margin: '0 auto',
              border: '4px solid transparent',
              background: 'linear-gradient(#0A0F1E, #0A0F1E) padding-box, linear-gradient(135deg, #00d4ff, #ffffff, #00f0ff, #7ce8ff) border-box',
              boxShadow: '0 0 30px rgba(0, 212, 255, 0.6), 0 0 60px rgba(0, 240, 255, 0.4), 0 8px 32px rgba(0, 212, 255, 0.5), inset 0 0 30px rgba(124, 232, 255, 0.15)',
              transform: 'perspective(1000px) rotateX(2deg)',
              borderRadius: '16px',
            }}
          >
            <div
              className="absolute inset-0 rounded-xl pointer-events-none"
              style={{
                boxShadow: 'inset 0 2px 8px rgba(255, 255, 255, 0.3), inset 0 -2px 8px rgba(0, 212, 255, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            />
            
            {/* Title at top center */}
            <div className="absolute top-0 left-0 right-0 z-20 w-full" style={{ marginTop: '5mm' }}>
              <h3 
                className="transition-colors"
                style={{
                  fontSize: '1.5rem',
                  textAlign: 'center',
                  width: '100%',
                  textShadow: '0 4px 12px rgba(0,0,0,0.9), 0 2px 4px rgba(0,0,0,0.8)',
                  fontWeight: 900,
                  letterSpacing: '0.5px',
                  fontFamily: 'inherit',
                  display: 'block',
                }}
              >
                <span style={{ color: '#FFFFFF' }}>AHK </span>
                <span style={{ color: '#facc15' }}>{pillar.name.replace('AHK ', '')}</span>
              </h3>
            </div>

            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-auto rounded-lg"
            >
              <source src={pillar.video} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
          </Link>
        ))}
      </div>
    </section>
  );
}
