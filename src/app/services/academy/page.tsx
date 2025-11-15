'use client'
import { useRouter } from 'next/navigation'

export default function AcademyPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white relative">
      {/* Back Button */}
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

      {/* Hero Section with Video Background */}
      <section className="relative h-[70vh] flex items-end justify-center overflow-hidden pb-16">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectFit: 'cover' }}
        >
          <source src="/assets/ai_videos/ahk_academy.mp4" type="video/mp4" />
        </video>
        
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0A0F1E]"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4), #0A0F1E)',
          }}
        />
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ 
            textShadow: '0 4px 12px rgba(0,0,0,0.9), 0 2px 4px rgba(0,0,0,0.8)',
            fontWeight: 900 
          }}>
            AHK <span style={{ color: '#facc15' }}>Academy</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-bold" style={{ 
            textShadow: '0 3px 10px rgba(0,0,0,0.95), 0 1px 3px rgba(0,0,0,0.9)',
            color: '#ffffff',
            fontWeight: 700
          }}>
            Professional training and mentorship programs to develop future-ready talent equipped for the evolving digital economy.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#D4AF37', marginBottom: '2rem' }}>Training Programs</h2>
        <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {[
            { title: 'Strategic Leadership Development', desc: 'Executive programs focused on AI adoption, innovation management, and cross-border strategy.' },
            { title: 'Digital Skills Training', desc: 'Hands-on workshops in automation, data analytics, and digital transformation methodologies.' },
            { title: 'Mentorship Programs', desc: 'One-on-one guidance from industry experts with decades of experience in MENA and European markets.' }
          ].map((item, i) => (
            <div key={i} style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '0.75rem', padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fde047', marginBottom: '0.75rem' }}>{item.title}</h3>
              <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.5rem', color: '#e2e8f0', marginBottom: '1.5rem' }}>Invest in your team's future</h3>
          <button onClick={() => router.push('/contact')} style={{ backgroundColor: '#D4AF37', color: '#020617', padding: '1rem 3rem', borderRadius: '0.5rem', fontSize: '1.125rem', fontWeight: 700, border: 'none', cursor: 'pointer', transition: 'all 0.3s' }}>
            Explore Programs
          </button>
        </div>
      </section>
    </div>
  )
}
