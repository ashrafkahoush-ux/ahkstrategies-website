'use client'
import { useRouter } from 'next/navigation'

export default function BoutiquePage() {
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
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎯</div>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 'bold',
              color: '#D4AF37',
              marginBottom: '1.5rem',
            }}
          >
            AHK Boutique
          </h1>
          <p
            style={{
              fontSize: '1.25rem',
              color: '#cbd5e1',
              lineHeight: '1.8',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            AI-driven market intelligence, executive newsletters, and premium industry reports 
            tailored for decision-makers navigating the MENA and European markets.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem' }}>
        {/* What We Offer */}
        <div style={{ marginBottom: '4rem' }}>
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: '#D4AF37',
              marginBottom: '2rem',
            }}
          >
            What We Offer
          </h2>
          <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                borderRadius: '0.75rem',
                padding: '1.5rem',
              }}
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fde047', marginBottom: '0.75rem' }}>
                Market Intelligence Reports
              </h3>
              <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
                In-depth analysis of industry trends, competitive landscapes, and emerging opportunities 
                across automotive, renewable energy, digital transformation, and trade sectors.
              </p>
            </div>
            
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                borderRadius: '0.75rem',
                padding: '1.5rem',
              }}
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fde047', marginBottom: '0.75rem' }}>
                Executive Newsletters
              </h3>
              <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
                Curated insights and strategic perspectives delivered to your inbox, keeping you ahead 
                of market shifts and regulatory changes.
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                borderRadius: '0.75rem',
                padding: '1.5rem',
              }}
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fde047', marginBottom: '0.75rem' }}>
                Custom Research
              </h3>
              <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
                Tailored research projects combining AI-powered data analysis with human expertise 
                to answer your most critical business questions.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Boutique */}
        <div
          style={{
            backgroundColor: 'rgba(212, 175, 55, 0.05)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            borderRadius: '1rem',
            padding: '3rem 2rem',
            marginBottom: '4rem',
          }}
        >
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: '#D4AF37',
              marginBottom: '1.5rem',
              textAlign: 'center',
            }}
          >
            Why Choose AHK Boutique?
          </h2>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              maxWidth: '800px',
              margin: '0 auto',
              color: '#cbd5e1',
              fontSize: '1.125rem',
              lineHeight: '2',
            }}
          >
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#D4AF37', marginRight: '1rem', fontSize: '1.5rem' }}>✓</span>
              <span><strong>AI-Powered Precision:</strong> Leverage cutting-edge AI tools combined with decades of industry expertise</span>
            </li>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#D4AF37', marginRight: '1rem', fontSize: '1.5rem' }}>✓</span>
              <span><strong>MENA & Europe Focus:</strong> Deep understanding of cross-border dynamics and regional nuances</span>
            </li>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#D4AF37', marginRight: '1rem', fontSize: '1.5rem' }}>✓</span>
              <span><strong>Actionable Insights:</strong> Transform data into strategic decisions that drive measurable outcomes</span>
            </li>
          </ul>
        </div>

        {/* CTA Section */}
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.5rem', color: '#e2e8f0', marginBottom: '1.5rem' }}>
            Ready to unlock strategic intelligence for your business?
          </h3>
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
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  )
}
