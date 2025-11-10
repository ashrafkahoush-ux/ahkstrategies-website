'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import AnimatedBackground from '@/components/AnimatedBackground'
import Watermark from '@/components/Watermark'

export default function LaunchPadPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white relative">
      <AnimatedBackground intensity="medium" colorSet="gold-blue" />
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
          <source src="/assets/ai_videos/ahk_launchpad.mp4" type="video/mp4" />
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
            AHK <span style={{ color: 'var(--gold)' }}>LaunchPad</span>
          </h1>
          {/* Geometric spark separator */}
          <div className="h-1 w-64 mx-auto mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--gold)] to-[var(--blue)] animate-gradient-shift"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[var(--gold)] rotate-45 shadow-lg shadow-[var(--gold)]/50"></div>
          </div>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ 
            textShadow: '0 3px 10px rgba(0,0,0,0.95), 0 1px 3px rgba(0,0,0,0.9)',
            color: '#ffffff',
            fontWeight: 700,
            animationDelay: '0.15s'
          }}>
            Automation, CRM, and workflow systems designed to transform SMEs into agile, data-driven organizations ready for scale.
          </p>
        </div>
      </section>

      <section className="pt-16 pb-16" style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem' }}>
        <h2 className="text-3xl font-heading font-bold mb-8 animate-fade-in-down" style={{ color: 'var(--gold)' }}>
          Our Solutions
        </h2>
        
        {/* Geometric spark separator */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent mb-8 relative">
          <div className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[var(--gold)] rotate-45"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[var(--blue)] rotate-45"></div>
          <div className="absolute left-3/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[var(--gold)] rotate-45"></div>
        </div>
        
        <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {[
            { title: 'Business Process Automation', desc: 'Streamline operations with intelligent workflows that reduce manual tasks and increase efficiency.' },
            { title: 'CRM Implementation', desc: 'Deploy and customize customer relationship management systems tailored to your business model.' },
            { title: 'Digital Transformation Roadmaps', desc: 'Strategic planning and execution support to navigate your organization\'s digital evolution.' }
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
          <h3 className="text-2xl text-slate-200 mb-6">Ready to accelerate your digital transformation?</h3>
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
            Get Started
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
