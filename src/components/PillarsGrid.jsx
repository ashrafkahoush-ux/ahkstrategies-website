'use client';
import Link from 'next/link';

const pillars = [
  { name: 'Projects', href: '/projects', video: '/assets/ai_images/pillars/ahk_projects_pillar.mp4', gradient: 'from-[#D4AF37]/20 via-[#00D9FF]/20 to-[#D4AF37]/20', borderGlow: 'shadow-[0_0_30px_rgba(212,175,55,0.4)]' },
  { name: 'Hub', href: '/services/consulting-hub', video: '/assets/ai_images/pillars/ahk_hub_pillar.mp4', gradient: 'from-[#00D9FF]/20 via-[#D4AF37]/20 to-[#00D9FF]/20', borderGlow: 'shadow-[0_0_30px_rgba(0,217,255,0.4)]' },
  { name: 'LaunchPad', href: '/services/launchpad', video: '/assets/ai_images/pillars/ahk_launchpad_pillar.mp4', gradient: 'from-[#D4AF37]/20 via-[#A78BFA]/20 to-[#D4AF37]/20', borderGlow: 'shadow-[0_0_30px_rgba(167,139,250,0.4)]' },
  { name: 'Studios', href: '/services/studios', video: '/assets/ai_images/pillars/ahk_studio_pillar.mp4', gradient: 'from-[#A78BFA]/20 via-[#4ADE80]/20 to-[#A78BFA]/20', borderGlow: 'shadow-[0_0_30px_rgba(74,222,128,0.4)]' },
  { name: 'Academy', href: '/services/academy', video: '/assets/ai_images/pillars/ahk_academy_pillar.mp4', gradient: 'from-[#4ADE80]/20 via-[#00D9FF]/20 to-[#4ADE80]/20', borderGlow: 'shadow-[0_0_30px_rgba(0,217,255,0.4)]' },
  { name: 'Boutique', href: '/services/boutique', video: '/assets/ai_images/pillars/ahk_boutique_pillar.mp4', gradient: 'from-[#00D9FF]/20 via-[#D4AF37]/20 to-[#00D9FF]/20', borderGlow: 'shadow-[0_0_30px_rgba(212,175,55,0.4)]' },
];

export default function PillarsGrid() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 relative z-10 py-20">
      <div className="text-center mb-16 animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-heading font-bold gradient-text-gold-blue mb-6">The AHK Empire</h2>
        <div className="w-32 h-1 mx-auto bg-gradient-to-r from-transparent via-[var(--gold)] to-[var(--blue)] animate-gradient-shift mb-4"></div>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">Six pillars of strategic excellence, each powered by cutting-edge AI and decades of cross-border expertise</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pillars.map((pillar, index) => (
          <Link key={pillar.name} href={pillar.href} className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.03] animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s`, background: 'linear-gradient(145deg, rgba(17,34,64,0.9), rgba(10,25,47,0.95))' }}>
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
              <video autoPlay loop muted playsInline className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" style={{ objectFit: 'cover', objectPosition: 'center center' }}>
                <source src={pillar.video} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/80 to-transparent"></div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-end p-6 pb-8">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-center transition-all duration-300 group-hover:transform group-hover:-translate-y-2">
                <span className="text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">AHK </span>
                <span className="text-[var(--gold)] drop-shadow-[0_4px_16px_rgba(212,175,55,0.7)]">{pillar.name}</span>
              </h3>
            </div>
            <div className={`absolute -inset-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl ${pillar.borderGlow} blur-sm`}></div>
          </Link>
        ))}
      </div>
    </section>
  );
}
