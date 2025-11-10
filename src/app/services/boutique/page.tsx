'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import AnimatedBackground from '@/components/AnimatedBackground'
import Watermark from '@/components/Watermark'

export default function BoutiquePage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white relative overflow-hidden">
      <AnimatedBackground intensity="medium" colorSet="gold-blue" />
      <Watermark />
      
      {/* Neural circuit pattern background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ zIndex: 0 }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="neural-circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="var(--gold)"/>
              <circle cx="150" cy="50" r="2" fill="var(--gold)"/>
              <circle cx="50" cy="150" r="2" fill="var(--gold)"/>
              <circle cx="150" cy="150" r="2" fill="var(--gold)"/>
              <line x1="50" y1="50" x2="150" y2="50" stroke="var(--gold)" strokeWidth="0.5"/>
              <line x1="50" y1="50" x2="50" y2="150" stroke="var(--gold)" strokeWidth="0.5"/>
              <line x1="150" y1="50" x2="150" y2="150" stroke="var(--gold)" strokeWidth="0.5"/>
              <line x1="50" y1="150" x2="150" y2="150" stroke="var(--gold)" strokeWidth="0.5"/>
              <line x1="50" y1="50" x2="150" y2="150" stroke="var(--gold)" strokeWidth="0.5" strokeDasharray="2,2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-circuit)" />
        </svg>
      </div>

      {/* Hero Section with Video Background */}
      <section className="relative h-[70vh] flex items-end justify-center overflow-hidden pb-16 pt-24">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          style={{ objectFit: 'cover', zIndex: 1 }}
        >
          <source src="/assets/ai_videos/ahk_boutique.mp4" type="video/mp4" />
        </video>
        
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0A0F1E]"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4), #0A0F1E)',
            zIndex: 1,
          }}
        />
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4 animate-fade-in-down" style={{ 
            textShadow: '0 4px 12px rgba(0,0,0,0.9), 0 2px 4px rgba(0,0,0,0.8)',
            fontWeight: 900 
          }}>
            AHK <span style={{ color: 'var(--gold)' }}>Boutique</span>
          </h1>
          <div className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-[var(--gold)] to-[var(--blue)] animate-gradient-shift mb-6"></div>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ 
            textShadow: '0 3px 10px rgba(0,0,0,0.95), 0 1px 3px rgba(0,0,0,0.9)',
            color: '#ffffff',
            fontWeight: 700,
            animationDelay: '0.15s'
          }}>
            AI-driven market intelligence, executive newsletters, and premium industry reports 
            tailored for decision-makers navigating the MENA and European markets.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-16 pb-16 relative z-10" style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem' }}>
        {/* What We Offer */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 className="text-3xl font-heading font-bold mb-8 animate-fade-in-down" style={{ color: 'var(--gold)' }}>
            What We Offer
          </h2>
          <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {[
              { title: 'Market Intelligence Reports', desc: 'In-depth analysis of industry trends, competitive landscapes, and emerging opportunities across automotive, renewable energy, digital transformation, and trade sectors.' },
              { title: 'Executive Newsletters', desc: 'Curated insights and strategic perspectives delivered to your inbox, keeping you ahead of market shifts and regulatory changes.' },
              { title: 'Custom Research', desc: 'Tailored research projects combining AI-powered data analysis with human expertise to answer your most critical business questions.' }
            ].map((item, i) => (
              <div 
                key={i} 
                className="panel-letterhead group animate-fade-in-up"
                style={{ 
                  padding: '1.5rem',
                  animationDelay: `${i * 0.15}s`
                }}
              >
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--gold)' }}>{item.title}</h3>
                <p className="text-base leading-relaxed" style={{ color: '#cbd5e1' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Boutique */}
        <div
          className="animate-fade-in-up"
          style={{
            backgroundColor: 'rgba(212, 175, 55, 0.05)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            borderRadius: '1rem',
            padding: '3rem 2rem',
            marginBottom: '4rem',
            animationDelay: '0.45s'
          }}
        >
          <h2 className="text-3xl font-heading font-bold mb-6 text-center" style={{ color: 'var(--gold)' }}>
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
              <span style={{ color: 'var(--gold)', marginRight: '1rem', fontSize: '1.5rem' }}>✓</span>
              <span className="text-base leading-relaxed"><strong>AI-Powered Precision:</strong> Leverage cutting-edge AI tools combined with decades of industry expertise</span>
            </li>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--gold)', marginRight: '1rem', fontSize: '1.5rem' }}>✓</span>
              <span className="text-base leading-relaxed"><strong>MENA & Europe Focus:</strong> Deep understanding of cross-border dynamics and regional nuances</span>
            </li>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--gold)', marginRight: '1rem', fontSize: '1.5rem' }}>✓</span>
              <span className="text-base leading-relaxed"><strong>Actionable Insights:</strong> Transform data into strategic decisions that drive measurable outcomes</span>
            </li>
          </ul>
        </div>

        {/* CTA Section */}
        <div className="animate-fade-in-up" style={{ textAlign: 'center', animationDelay: '0.6s' }}>
          <h3 className="text-2xl text-slate-200 mb-6">
            Ready to unlock strategic intelligence for your business?
          </h3>
          <button
            onClick={() => router.push('/contact')}
            className="px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 hover:opacity-90 shadow-lg"
            style={{ 
              background: 'linear-gradient(to right, var(--gold), var(--blue))',
              color: 'white',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Contact Us Today
          </button>
        </div>
        
        {/* Back to Home Link */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.75s' }}>
          <Link 
            href="/" 
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--blue)] text-white font-semibold shadow-lg hover:opacity-90 transition-all duration-300"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  )
}
