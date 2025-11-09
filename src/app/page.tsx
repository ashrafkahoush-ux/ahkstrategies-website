'use client';
import HeroSection from "../components/HeroSection";
import PillarsGrid from "../components/PillarsGrid";
import ParticleBG from "../components/ParticleBG";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      <HeroSection />
      <div id="pillars">
        <PillarsGrid />
      </div>
    </main>
  );
}
