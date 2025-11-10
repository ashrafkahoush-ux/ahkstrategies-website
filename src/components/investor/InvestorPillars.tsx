// components/investor/InvestorPillars.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const pillars = [
  {
    id: "q-van",
    title: "Q-VAN",
    subtitle: "Electric Vans for Smart Logistics",
    video: "/assets/ai_images/pillars/ahk_projects_pillar.mp4",
    route: "/investor?project=q-van",
  },
  {
    id: "wow",
    title: "WOW Scooters",
    subtitle: "Urban Micromobility Revolution",
    video: "/assets/ai_images/pillars/ahk_boutique_pillar.mp4",
    route: "/investor?project=wow",
  },
  {
    id: "dvm",
    title: "Dual Vector Mobility",
    subtitle: "Integrated EV Ecosystem 2025-2035",
    video: "/assets/ai_images/pillars/ahk_launchpad_pillar.mp4",
    route: "/investor?project=dvm",
  },
];

export default function InvestorPillars() {
  return (
    <div className="relative">
      {/* Title Banner - Gold-Framed Letterhead Style */}
      <div className="mb-8 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative inline-block"
        >
          {/* Gold frame border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] via-[#F4E5B1] to-[#D4AF37] opacity-30 blur-sm rounded-lg" />
          
          {/* Content */}
          <div className="relative px-8 py-4 bg-[#001F3F] border border-[#D4AF37] rounded-lg shadow-[0_0_30px_rgba(212,175,55,0.2)]">
            <h2 className="text-center text-xl md:text-2xl font-bold tracking-wide">
              <span className="text-[#F4E5B1]">AHK Strategies</span>
              <span className="mx-3 text-[#D4AF37]">|</span>
              <span className="text-[#D4AF37]">Investment Portfolio Highlights</span>
            </h2>
          </div>
        </motion.div>
      </div>

      {/* Pillars Grid */}
      <section className="grid gap-6 md:grid-cols-3">
        {pillars.map((p, index) => (
          <Link key={p.id} href={p.route}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: "easeOut" 
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-2xl border border-ahk-gold/40 bg-[#00152c] shadow-glow hover:shadow-glow-electric transition-shadow duration-500"
            >
              {/* Aspect ratio container */}
              <div className="relative w-full aspect-video">
                {/* Video background */}
                <video
                  src={p.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label={`${p.title} project showcase video`}
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-ahk-navy/40 via-ahk-navy/70 to-[#00152c]" />

                {/* Animated logo with subtle glow */}
                <div className="absolute top-4 left-4 h-10 w-10 overflow-hidden rounded-md border border-ahk-gold/70 bg-black/50 shadow-glow group-hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-shadow duration-500 animate-pulse-soft">
                  <video
                    src="/assets/ai_images/ahk_logo_animated.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-hidden="true"
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Text content */}
                <div className="relative z-10 flex flex-col justify-end min-h-[16rem] p-6">
                  <h3 className="text-lg font-bold text-ahk-gold-light mb-1 group-hover:text-white transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="text-sm text-ahk-gold/90 mb-3">
                    {p.subtitle}
                  </p>
                  <p className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-ahk-gold-light/70 group-hover:text-ahk-gold transition-colors duration-300">
                    Explore Project →
                  </p>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-ahk-gold/10 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </section>
    </div>
  );
}
