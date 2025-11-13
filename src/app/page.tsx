'use client';
import HeroSection from "../components/HeroSection";
import EmmaDNASection from "../components/EmmaDNASection";
import PillarsGrid from "../components/PillarsGrid";
import ParticleBG from "../components/ParticleBG";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      <HeroSection />
      <EmmaDNASection />
      <PillarsGrid />
    </main>
  );
}
