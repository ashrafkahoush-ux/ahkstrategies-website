"use client";
import { ASSETS, withBust } from "@/lib/assetMap";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

export default function HeroSection() {
  const ref = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const play = () => v.play().catch(() => {});
    play();
    const onVis = () => (document.visibilityState === "visible" ? play() : v.pause());
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  return (
    <section className="relative w-full overflow-hidden rounded-3xl shadow-xl">
      <video
        ref={ref}
        className="h-[46vh] w-full object-cover sm:h-[58vh] lg:h-[72vh]"
        src={withBust(ASSETS.hero.homeVideo)}
        poster={ASSETS.hero.poster}
        muted loop playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1528] via-transparent to-[#0b1528]/60" />
      <motion.div
        className="absolute inset-0 flex items-center justify-center px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-white text-center md:text-6xl lg:text-7xl leading-tight">
          AHKStrategies — Where Human <span className="text-[#00D9FF]">×</span> AI Move as One
        </h1>
      </motion.div>
    </section>
  );
}
