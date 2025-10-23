'use client';
import HeroSection from "../components/HeroSection";
import PillarsGrid from "../components/PillarsGrid";
import ParticleBG from "../components/ParticleBG";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AHKStrategies - Where Vision Meets Human Intelligence",
  description: "AHKStrategies is a forward-thinking organization built on six foundational pillars: Legacy & Continuity, People & Culture, Innovation & Design Thinking, Vision & Foresight, Human Intelligence, and Strategic Projects.",
  openGraph: {
    title: "AHKStrategies - Where Vision Meets Human Intelligence",
    description: "Building enduring systems through six strategic pillars of excellence",
    images: ["/assets/images/share-default.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AHKStrategies - Where Vision Meets Human Intelligence",
    description: "Building enduring systems through six strategic pillars of excellence",
    images: ["/assets/images/share-default.png"],
  },
};

export default function Home() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      <HeroSection />
      <PillarsGrid />
    </main>
  );
}
