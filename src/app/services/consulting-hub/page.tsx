'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import AnimatedBackground from '@/components/AnimatedBackground'
import Watermark from '@/components/Watermark'

export default function ConsultingHubPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white relative">
      {/* Animated Background with particle field effect */}
      <AnimatedBackground intensity="high" colorSet="full-spectrum" />
      
      {/* Watermark */}
      <Watermark />

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
          <source src="/assets/ai_videos/ahk_hub.mp4" type="video/mp4" />
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
            AHK <span style={{ color: 'var(--gold)' }}>Consulting Hub</span>
          </h1>
          <div className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-[var(--gold)] to-[var(--blue)] animate-gradient-shift mb-6"></div>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ 
            textShadow: '0 3px 10px rgba(0,0,0,0.95), 0 1px 3px rgba(0,0,0,0.9)',
            color: '#ffffff',
            fontWeight: 700,
            animationDelay: '0.15s'
          }}>
            Strategic advisory and cross-border partnership development connecting businesses across MENA and Europe.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem' }} className="pt-24 pb-16">
        <h2 className="text-3xl font-heading font-bold mb-8 animate-fade-in-down" style={{ color: 'var(--gold)' }}>
          Consulting Services
        </h2>
        <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {[
            { title: 'Market Entry Strategy', desc: 'Navigate regulatory landscapes and cultural nuances for successful market expansion in MENA and Europe.' },
            { title: 'Partnership Development', desc: 'Connect with strategic partners, investors, and distributors through our extensive cross-border network.' },
            { title: 'Strategic Advisory', desc: 'Executive-level guidance on growth strategy, innovation roadmaps, and organizational transformation.' }
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

        <div className="animate-fade-in-up" style={{ marginTop: '4rem', textAlign: 'center', animationDelay: '0.6s' }}>
          <h3 className="text-2xl text-slate-200 mb-6">Ready to expand your business horizons?</h3>
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
            Schedule a Consultation
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
