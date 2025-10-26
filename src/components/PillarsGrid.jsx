'use client';
import Link from 'next/link';
import Image from 'next/image';

const pillars = [
  { name: 'Legacy', href: '/pillars/legacy', img: '/assets/ai_images/pillars/legacy.png' },
  { name: 'Services', href: '/services', img: '/assets/ai_images/pillars/services.png' },
  { name: 'Innovation', href: '/pillars/innovation', img: '/assets/ai_images/pillars/innovation.png' },
  { name: 'Vision', href: '/pillars/vision', img: '/assets/ai_images/pillars/vision.png' },
  { name: 'Projects', href: '/projects', img: '/assets/ai_images/pillars/projects.png' },
  { name: 'Human Intelligence', href: '/pillars/human-intelligence', img: '/assets/ai_images/pillars/human-intelligence.png' },
];

export default function PillarsGrid() {
  return (
    <section 
      className="w-full max-w-6xl mx-auto px-6 py-12 relative z-10"
      style={{
        width: '100%',
        maxWidth: '72rem',
        margin: '0 auto',
        padding: '3rem 1.5rem',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* 3x2 Grid: 3 columns, 2 rows */}
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          width: '100%',
        }}
      >
        {pillars.map(p => (
          <Link 
            key={p.name} 
            href={p.href} 
            className="group relative block overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            style={{ 
              aspectRatio: '1 / 1',
              position: 'relative',
              display: 'block',
              overflow: 'hidden',
              borderRadius: '0.75rem',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
            }}
          >
            <Image
              src={p.img}
              alt={p.name}
              width={380}
              height={380}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
                transition: 'transform 0.5s ease',
              }}
              priority
            />
            <div 
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end justify-center pb-6"
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3), transparent)',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                paddingBottom: '1.5rem',
              }}
            >
              <h3 
                className="text-xl font-bold text-white drop-shadow-lg group-hover:text-yellow-400 transition-colors duration-300"
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: 'white',
                  textShadow: '0 2px 10px rgba(0,0,0,0.8)',
                  transition: 'color 0.3s ease',
                }}
              >
                {p.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      {/* Responsive CSS for mobile/tablet */}
      <style jsx>{`
        @media (max-width: 1023px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
          }
        }
        @media (max-width: 639px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
        }
        a[href*="/pillars/"]:hover {
          box-shadow: 0 20px 40px rgba(250, 204, 21, 0.3) !important;
          transform: translateY(-4px);
        }
        a[href*="/pillars/"]:hover img {
          transform: scale(1.1);
        }
        a[href*="/pillars/"]:hover h3 {
          color: #facc15;
        }
      `}</style>
    </section>
  );
}
