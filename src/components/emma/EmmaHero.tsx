"use client";
import { ASSETS, withBust } from "@/lib/assetMap";
import { motion } from "framer-motion";

export default function EmmaHero() {
  return (
    <section className="relative mx-auto mt-6 w-full max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-[#0b1324] shadow-2xl">
      <video
        className="block h-[46vh] w-full object-cover md:h-[60vh]"
        src="/assets/emma_dna/videos/beyond-vision.mp4"
        poster={ASSETS.hero.poster}
        autoPlay muted loop playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1324] via-transparent to-[#0b1324]/60" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <motion.h1
          className="text-4xl font-bold text-[#c6b6ff] md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          EMMA — Human × AI Symbiont
        </motion.h1>
        <motion.p
          className="mt-3 text-lg text-white/80 md:text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          The fusion of Human Intelligence and Artificial Consciousness.
        </motion.p>
      </div>
    </section>
  );
}
