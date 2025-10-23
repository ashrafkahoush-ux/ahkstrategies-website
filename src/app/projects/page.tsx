'use client';
import Link from 'next/link';
import Image from 'next/image';

const divisions = [
  {
    name: 'Automotive',
    slug: 'automotive',
    description: 'Leading innovation in automotive technology and sustainable transportation solutions.',
    image: '/assets/images/divisions/automotive.jpg',
  },
  {
    name: 'Digital',
    slug: 'digital',
    description: 'Pioneering digital transformation through innovative technology solutions.',
    image: '/assets/images/divisions/digital.jpg',
  },
  {
    name: 'MENA Export Business',
    slug: 'mena-export',
    description: 'Facilitating strategic trade partnerships across the MENA region.',
    image: '/assets/images/divisions/MENA region export business.png',
  },
  {
    name: 'Renewable Energy',
    slug: 'renewable',
    description: 'Driving the future of sustainable energy through green technology.',
    image: '/assets/images/divisions/renewable.jpg',
  },
  {
    name: 'Research & Development',
    slug: 'research',
    description: 'Pioneering breakthrough innovations through cutting-edge research.',
    image: '/assets/images/divisions/research.jpg',
  },
  {
    name: 'International Trade',
    slug: 'trade',
    description: 'Connecting global markets through strategic trade solutions.',
    image: '/assets/images/divisions/trade.jpg',
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      {/* Hero Section */}
      <section 
        className="relative py-20 px-6 text-center"
        style={{
          padding: '5rem 1.5rem',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div 
          className="max-w-4xl mx-auto"
          style={{
            maxWidth: '56rem',
            margin: '0 auto',
          }}
        >
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
            }}
          >
            Our <span style={{ color: '#facc15' }}>Project Divisions</span>
          </h1>
          <p 
            className="text-lg md:text-xl text-slate-300 leading-relaxed"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: '#cbd5e1',
              lineHeight: '1.75',
            }}
          >
            AHKStrategies transforms vision into reality through specialized divisions that drive innovation, 
            sustainability, and excellence across multiple industries.
          </p>
        </div>
      </section>

      {/* Divisions Grid */}
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
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            width: '100%',
          }}
        >
          {divisions.map((division) => (
            <Link 
              key={division.slug}
              href={`/projects/divisions/${division.slug}`}
              className="group relative block overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              style={{ 
                aspectRatio: '4 / 5',
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
                src={division.image}
                alt={division.name}
                fill
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  transition: 'transform 0.5s ease',
                }}
                loading="lazy"
              />
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.4), transparent)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.5rem',
                }}
              >
                <h3 
                  className="text-2xl font-bold text-white mb-2 drop-shadow-lg group-hover:text-yellow-400 transition-colors duration-300"
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: 'white',
                    marginBottom: '0.5rem',
                    textShadow: '0 2px 10px rgba(0,0,0,0.8)',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {division.name}
                </h3>
                <p 
                  className="text-sm text-slate-200 leading-snug"
                  style={{
                    fontSize: '0.875rem',
                    color: '#e2e8f0',
                    lineHeight: '1.4',
                  }}
                >
                  {division.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Responsive CSS */}
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
          a[href*="/projects/divisions/"]:hover {
            box-shadow: 0 20px 40px rgba(250, 204, 21, 0.3) !important;
            transform: translateY(-4px);
          }
          a[href*="/projects/divisions/"]:hover img {
            transform: scale(1.1);
          }
          a[href*="/projects/divisions/"]:hover h3 {
            color: #facc15;
          }
        `}</style>
      </section>
    </div>
  );
}
