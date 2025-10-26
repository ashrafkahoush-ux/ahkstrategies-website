'use client'
import { useRouter } from 'next/navigation'

export default function ConsultingHubPage() {
  const router = useRouter()

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#020617' }}>
      <section style={{ background: 'linear-gradient(180deg, rgba(58,78,122,0.2) 0%, rgba(2,6,23,1) 100%)', paddingTop: '6rem', paddingBottom: '4rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>💼</div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 'bold', color: '#D4AF37', marginBottom: '1.5rem' }}>
            AHK Consulting Hub
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#cbd5e1', lineHeight: '1.8', maxWidth: '700px', margin: '0 auto' }}>
            Strategic advisory and cross-border partnership development connecting businesses across MENA and Europe.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#D4AF37', marginBottom: '2rem' }}>Consulting Services</h2>
        <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {[
            { title: 'Market Entry Strategy', desc: 'Navigate regulatory landscapes and cultural nuances for successful market expansion in MENA and Europe.' },
            { title: 'Partnership Development', desc: 'Connect with strategic partners, investors, and distributors through our extensive cross-border network.' },
            { title: 'Strategic Advisory', desc: 'Executive-level guidance on growth strategy, innovation roadmaps, and organizational transformation.' }
          ].map((item, i) => (
            <div key={i} style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '0.75rem', padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fde047', marginBottom: '0.75rem' }}>{item.title}</h3>
              <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.5rem', color: '#e2e8f0', marginBottom: '1.5rem' }}>Ready to expand your business horizons?</h3>
          <button onClick={() => router.push('/contact')} style={{ backgroundColor: '#D4AF37', color: '#020617', padding: '1rem 3rem', borderRadius: '0.5rem', fontSize: '1.125rem', fontWeight: 700, border: 'none', cursor: 'pointer', transition: 'all 0.3s' }}>
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  )
}
