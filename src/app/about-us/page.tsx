'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import AnimatedBackground from '@/components/AnimatedBackground'
import Watermark from '@/components/Watermark'
import EmmaVideoCard from '@/components/emma/EmmaVideoCard'

export default function AboutUsPage() {
  const router = useRouter()

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#020617', position: 'relative', overflow: 'hidden' }}>
      {/* Letterhead Background Effects */}
      <AnimatedBackground intensity="low" colorSet="full-spectrum" />
      <Watermark />

      {/* Hero Section */}
      <section
        className="fade-in-down"
        style={{
          background: 'linear-gradient(180deg, rgba(58,78,122,0.2) 0%, rgba(2,6,23,1) 100%)',
          paddingTop: '6rem',
          paddingBottom: '4rem',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 'bold',
              color: '#D4AF37',
              marginBottom: '1.5rem',
              textShadow: '0 2px 10px rgba(212, 175, 55, 0.3)',
            }}
          >
            About AHKStrategies
          </h1>
          <p
            style={{
              fontSize: '1.375rem',
              color: '#cbd5e1',
              lineHeight: '1.8',
              fontStyle: 'italic',
            }}
          >
            Where Vision Meets Human Intelligence
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section 
        className="fade-in-up"
        style={{ 
          maxWidth: '1000px', 
          margin: '0 auto', 
          padding: '4rem 2rem',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <h2
          style={{
            fontSize: '2.25rem',
            fontWeight: 700,
            color: '#D4AF37',
            marginBottom: '2rem',
            textAlign: 'center',
            textShadow: '0 2px 8px rgba(212, 175, 55, 0.3)',
          }}
        >
          Our Story
        </h2>
        <div
          style={{
            fontSize: '1.125rem',
            lineHeight: '1.9',
            color: '#cbd5e1',
            maxWidth: '900px',
            margin: '0 auto',
            background: 'rgba(212, 175, 55, 0.03)',
            padding: '2.5rem',
            borderRadius: '1rem',
            border: '1px solid rgba(212, 175, 55, 0.15)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
          }}
        >
          <p style={{ marginBottom: '1.5rem' }}>
            Founded on the belief that <strong style={{ color: '#D4AF37' }}>intelligence transforms growth</strong>, 
            AHKStrategies bridges strategic foresight with practical execution across the MENA and European markets.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            We combine AI-powered insights with decades of cross-border experience to help businesses navigate 
            complexity, seize opportunities, and build sustainable competitive advantages.
          </p>
          <p>
            Our approach is rooted in understanding that true transformation requires both cutting-edge technology 
            and deep human expertise — a philosophy reflected in every service we deliver.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section
        className="fade-in-up"
        style={{
          maxWidth: '1100px',
          margin: '3rem auto 4rem',
          padding: '0 2rem',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(212, 175, 55, 0.05)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            borderRadius: '1rem',
            padding: '3rem 2rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
            boxShadow: '0 8px 32px rgba(212, 175, 55, 0.15)',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(212, 175, 55, 0.25)'
            e.currentTarget.style.transform = 'translateY(-4px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(212, 175, 55, 0.15)'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          {/* Founder Image */}
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                width: '220px',
                height: '220px',
                borderRadius: '50%',
                overflow: 'hidden',
                margin: '0 auto',
                border: '3px solid #D4AF37',
                boxShadow: '0 8px 24px rgba(212, 175, 55, 0.4)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(212, 175, 55, 0.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(212, 175, 55, 0.4)'
              }}
            >
              <Image
                src="/assets/images/founder/ashraf kahoush photo.png"
                alt="Ashraf Kahoush"
                width={220}
                height={220}
                style={{ 
                  objectFit: 'cover',
                  objectPosition: 'center 30%',
                  width: '220px',
                  height: '220px'
                }}
              />
            </div>
            <h3
              style={{
                fontSize: '1.75rem',
                fontWeight: 700,
                color: '#D4AF37',
                marginTop: '1.5rem',
                marginBottom: '0.5rem',
              }}
            >
              Ashraf Kahoush
            </h3>
            <p
              style={{
                fontSize: '1rem',
                color: '#94a3b8',
                fontStyle: 'italic',
              }}
            >
              Founder & Strategic Visionary
            </p>
          </div>

          {/* Founder Bio */}
          <div>
            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.8',
                color: '#cbd5e1',
                marginBottom: '1.5rem',
              }}
            >
              A forward-thinking leader with over two decades of experience across the automotive, mobility, 
              and energy sectors in the MENA region.
            </p>
            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.8',
                color: '#cbd5e1',
              }}
            >
              Renowned for transforming visions into scalable realities, Ashraf blends strategic foresight 
              with human insight to drive growth and innovation for businesses navigating complex, 
              cross-border markets.
            </p>
          </div>
        </div>
      </section>

      {/* EMMA Introduction */}
      <section
        className="fade-in-up"
        style={{
          maxWidth: '1100px',
          margin: '3rem auto 4rem',
          padding: '0 2rem',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <EmmaVideoCard variant="about" />
      </section>

      {/* Our Values */}
      <section 
        className="fade-in-up"
        style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '4rem 2rem',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <h2
          style={{
            fontSize: '2.25rem',
            fontWeight: 700,
            color: '#D4AF37',
            marginBottom: '3rem',
            textAlign: 'center',
            textShadow: '0 2px 8px rgba(212, 175, 55, 0.3)',
          }}
        >
          What Drives Us
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {[
            {
              title: 'Intelligence',
              desc: 'Combining AI precision with decades of market expertise',
            },
            {
              title: 'Impact',
              desc: 'Delivering measurable outcomes that transform businesses',
            },
            {
              title: 'Innovation',
              desc: 'Pioneering solutions for evolving market challenges',
            },
            {
              title: 'Integrity',
              desc: 'Building trust through transparency and ethical practice',
            },
          ].map((value, i) => (
            <div
              key={i}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                borderRadius: '0.75rem',
                padding: '2rem',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.5)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(212, 175, 55, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.2)'
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2)'
              }}
            >
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#fde047',
                  marginBottom: '1rem',
                }}
              >
                {value.title}
              </h3>
              <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="fade-in-up"
        style={{
          maxWidth: '900px',
          margin: '3rem auto 5rem',
          padding: '0 2rem',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(0, 217, 255, 0.08) 100%)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            borderRadius: '1rem',
            padding: '3rem 2rem',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          }}
        >
          <h2
            style={{
              fontSize: '1.875rem',
              fontWeight: 700,
              color: '#e2e8f0',
              marginBottom: '1.5rem',
            }}
          >
            Ready to Work Together?
          </h2>
          <button
            onClick={() => router.push('/contact')}
            style={{
              backgroundColor: '#D4AF37',
              color: '#020617',
              padding: '1rem 3rem',
              borderRadius: '0.5rem',
              fontSize: '1.125rem',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: '0 4px 16px rgba(212, 175, 55, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(212, 175, 55, 0.5)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(212, 175, 55, 0.3)'
            }}
          >
            Get in Touch
          </button>
        </div>
      </section>

      {/* Letterhead CSS Animations */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }

        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .fade-in-up:nth-of-type(2) {
          animation-delay: 0.1s;
          opacity: 0;
        }

        .fade-in-up:nth-of-type(3) {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .fade-in-up:nth-of-type(4) {
          animation-delay: 0.3s;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}
