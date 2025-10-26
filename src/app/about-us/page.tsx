'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function AboutUsPage() {
  const router = useRouter()

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#020617' }}>
      {/* Hero Section */}
      <section
        style={{
          background: 'linear-gradient(180deg, rgba(58,78,122,0.2) 0%, rgba(2,6,23,1) 100%)',
          paddingTop: '6rem',
          paddingBottom: '4rem',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 'bold',
              color: '#D4AF37',
              marginBottom: '1.5rem',
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
      <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '4rem 2rem' }}>
        <h2
          style={{
            fontSize: '2.25rem',
            fontWeight: 700,
            color: '#D4AF37',
            marginBottom: '2rem',
            textAlign: 'center',
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
        style={{
          maxWidth: '1100px',
          margin: '3rem auto 4rem',
          padding: '0 2rem',
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
                boxShadow: '0 8px 24px rgba(212, 175, 55, 0.3)',
              }}
            >
              <Image
                src="/assets/images/founder/ashraf kahoush photo.png"
                alt="Ashraf Kahoush"
                width={220}
                height={220}
                style={{ objectFit: 'cover' }}
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

      {/* Our Values */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>
        <h2
          style={{
            fontSize: '2.25rem',
            fontWeight: 700,
            color: '#D4AF37',
            marginBottom: '3rem',
            textAlign: 'center',
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
        style={{
          maxWidth: '900px',
          margin: '3rem auto 5rem',
          padding: '0 2rem',
          textAlign: 'center',
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
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)'
            e.currentTarget.style.boxShadow = '0 8px 16px rgba(212, 175, 55, 0.4)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          Get in Touch
        </button>
      </section>
    </div>
  )
}
