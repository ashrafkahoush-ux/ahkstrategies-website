'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import IconAutomotive from '@/../public/assets/core/divisions/automotive.jpg';
import IconDigital from '@/../public/assets/core/divisions/digital.jpg';
import IconMenaExport from '@/../public/assets/core/divisions/MENA region export business.png';
import IconRenewable from '@/../public/assets/core/divisions/renewable.jpg';
import IconResearch from '@/../public/assets/core/divisions/research.jpg';
import IconTrade from '@/../public/assets/core/divisions/trade.jpg';

const divisions = [
  {
    name: 'Automotive',
    slug: 'automotive',
    description: 'Leading innovation in automotive technology and sustainable transportation solutions.',
    image: IconAutomotive,
    alt: 'Automotive Division - Innovative automotive technology and sustainable transportation',
  },
  {
    name: 'Digital',
    slug: 'digital',
    description: 'Pioneering digital transformation through innovative technology solutions.',
    image: IconDigital,
    alt: 'Digital Division - Digital transformation and innovative technology solutions',
  },
  {
    name: 'MENA Export Business',
    slug: 'mena-export',
    description: 'Facilitating strategic trade partnerships across the MENA region.',
    image: IconMenaExport,
    alt: 'MENA Export Business Division - Strategic trade partnerships in MENA region',
  },
  {
    name: 'Renewable Energy',
    slug: 'renewable',
    description: 'Driving the future of sustainable energy through green technology.',
    image: IconRenewable,
    alt: 'Renewable Energy Division - Sustainable energy and green technology',
  },
  {
    name: 'Research & Development',
    slug: 'research',
    description: 'Pioneering breakthrough innovations through cutting-edge research.',
    image: IconResearch,
    alt: 'Research & Development Division - Breakthrough innovations and cutting-edge research',
  },
  {
    name: 'International Trade',
    slug: 'trade',
    description: 'Connecting global markets through strategic trade solutions.',
    image: IconTrade,
    alt: 'International Trade Division - Global market connections and strategic trade',
  },
];

export default function ProjectsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#020617] text-white relative">
      {/* Back Button - Fixed at bottom left of page */}
      <button
        onClick={() => router.back()}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg shadow-lg hover:shadow-xl hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          zIndex: 50,
          background: 'linear-gradient(135deg, #facc15 0%, #eab308 100%)',
          boxShadow: '0 4px 14px 0 rgba(250, 204, 21, 0.4)',
        }}
      >
        <span style={{ fontSize: '1.25rem', color: 'white' }}>←</span>
        <span className="text-sm font-bold text-white">Back</span>
      </button>

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
            Projects & <span style={{ color: '#facc15' }}>Partnerships</span>
          </h1>
          <p 
            className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-4 italic"
            style={{
              fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
              color: '#cbd5e1',
              lineHeight: '1.6',
              marginBottom: '1rem',
              fontStyle: 'italic',
              fontWeight: '300',
            }}
          >
            &quot;Projects are the bridges between vision and reality — where thought takes physical form.&quot;
          </p>
          <p 
            className="text-lg md:text-xl text-slate-400 leading-relaxed"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: '#94a3b8',
              lineHeight: '1.75',
              fontWeight: '300',
            }}
          >
            AHKStrategies transforms foresight into frameworks and partnerships into progress. Each project is a manifestation of collaboration, designed to bring sustainable innovation and measurable growth to life.
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
                alt={division.alt}
                width={400}
                height={500}
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
