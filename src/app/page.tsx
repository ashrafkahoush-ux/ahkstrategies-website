'use client';
import HeroSection from "../components/HeroSection";
import EmmaDNASection from "../components/EmmaDNASection";
import PillarsGrid from "../components/PillarsGrid";
import ParticleBG from "../components/ParticleBG";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      <HeroSection />
      
      {/* Strategic Hero Intro - Phase 2 */}
      <section className="relative bg-gradient-to-b from-[#031021] via-[#02182A] to-[#020815] border-y border-cyan-400/40 shadow-[0_0_60px_rgba(0,255,240,0.35)] py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-[#37f2ff] via-[#42ffe9] to-[#ffe271] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,255,240,0.9)] mb-6">
            Where human intuition, AI cognition, and MENA ambition sync into one strategic brain.
          </h1>
          <p className="text-lg md:text-xl text-slate-200/90 max-w-3xl mx-auto">
            AHKStrategies thinks in decades, moves in vectors, and turns complexity into precise, executable decisions.
          </p>
        </div>
      </section>

      <EmmaDNASection />
      <PillarsGrid />
    </main>
  );
}
