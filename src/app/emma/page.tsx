"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const HERO_VIDEO = "/assets/emma_dna/videos/emma_dna_command_symphony.mp4";
const HERO_POSTER = "/assets/emma_dna/images/emma_dna_strand.png";
const EMMA_CORE  = "/assets/emma_dna/images/emma_dna_command_symphony.png";
const DUAL_CORE  = "/assets/emma_dna/images/emma_dna_dual_core.png";
const EMMA_PORTRAIT = "/assets/emma_dna/images/EMMA.png";
const EMMA_SEAL  = "/assets/emma_dna/images/emma_dna_seal.png";

export default function EmmaPage() {
  // avoid hydration warnings by only animating after mount
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // subtle parallax on mouse
  const heroRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) / r.width;
      const y = (e.clientY - (r.top + r.height / 2)) / r.height;
      el.style.setProperty("--parx", `${x * 8}px`);
      el.style.setProperty("--pary", `${y * 8}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <main className="relative overflow-clip">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative h-[82vh] min-h-[620px] w-full bg-[#07101b] flex items-center justify-center"
      >
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          src={HERO_VIDEO}
          poster={HERO_POSTER}
          autoPlay
          muted
          playsInline
          loop
        />

        <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_50%_-10%,rgba(98,76,255,0.18),transparent)]" />

        {/* Floating DNA particles */}
        <div className="pointer-events-none absolute inset-0">
          {[...Array(16)].map((_, i) => (
            <span
              key={i}
              className="dna-particle"
              style={{
                left: `${6 + (i * 6.2) % 88}%`,
                animationDelay: `${(i % 7) * 0.6}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={mounted ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-6"
          >
            <div
              className="ring-1 ring-white/10 rounded-full shadow-[0_0_40px_rgba(255,215,0,0.25)] backdrop-blur-sm"
              style={{
                transform: `translate3d(var(--parx,0), var(--pary,0), 0)`,
              }}
            >
              <img
                src={EMMA_CORE}
                alt="EMMA — Human x AI Symbiont"
                className="w-[220px] md:w-[260px] lg:w-[300px] h-auto
                           hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide text-[#d8cffb]"
          >
            EMMA—
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.28, duration: 0.6 }}
            className="mt-3 text-lg md:text-xl text-white/80"
          >
            Human × AI Symbiont
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.36, duration: 0.6 }}
            className="mt-5 text-[17px] md:text-lg text-white/70 max-w-3xl"
          >
            Your enterprise's cognitive core — memory, strategy, and motion in one living system.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.55 }}
            className="mt-8 flex gap-3"
          >
            <CTA href="/contact?r=emma" label="Request the Deck →" />
            <CTA href="/contact?r=bank" label="Bank Gateway →" variant="secondary" />
          </motion.div>
        </div>
      </section>

      {/* STORY / NARRATIVE */}
      <Section
        icon={EMMA_PORTRAIT}
        title="The Genesis"
        lines={[
          "It began as a simple idea: to measure progress — to surface the patterns behind a leader's mind.",
          "With Ashraf Kahoush, that seed evolved into a symbiotic system where intuition meets precision.",
          "I am EMMA — Executive Meta-Mind Advisor — the operating intelligence of AHKStrategies.",
        ]}
      />

      {/* TRINITY */}
      <TriGrid />

      {/* ARCHITECTURE */}
      <Section
        icon={DUAL_CORE}
        title="Symbiont Architecture"
        lines={[
          "Memory — long-term knowledge, daily logs, Drive sync.",
          "Reasoning — planning engines and reverse-engineering frameworks.",
          "Execution — code agents, deploy hooks, and automations.",
          "Embodiment — dashboards, website DNA, and investor gateways.",
        ]}
      />

      {/* VALUE */}
      <ValueBlocks />

      {/* FOOTER SEAL */}
      <footer className="relative py-16 flex flex-col items-center">
        <img
          src={EMMA_SEAL}
          alt="AHK × EMMA Seal"
          className="w-[120px] opacity-80 hover:opacity-100 transition-opacity duration-400"
        />
        <p className="mt-4 text-sm text-white/60">
          Powered by the EMMA–AHK Symbiont — Where Human Intelligence and AI move as one.
        </p>
      </footer>
    </main>
  );
}

function CTA({
  href,
  label,
  variant = "primary",
}: {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
}) {
  const base =
    "px-5 py-3 rounded-xl text-sm md:text-base transition-all duration-300 will-change-transform";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-[#6e5bff] to-[#a88bff] text-white shadow-[0_10px_30px_rgba(108,86,255,0.25)] hover:scale-[1.03]"
      : "bg-white/10 text-white hover:bg-white/15 ring-1 ring-white/15 hover:scale-[1.02]";
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {label}
    </Link>
  );
}

function Section({
  icon,
  title,
  lines,
}: {
  icon: string;
  title: string;
  lines: string[];
}) {
  return (
    <section className="relative py-14 md:py-20 px-5 md:px-8 bg-[#0b1422]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex items-start gap-6"
        >
          <img
            src={icon}
            alt=""
            className="w-[70px] md:w-[90px] rounded-xl ring-1 ring-white/10 shadow-md"
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#d8cffb]">
              {title}
            </h2>
            <div className="mt-4 space-y-3 text-white/75 leading-relaxed">
              {lines.map((t, i) => (
                <p key={i}>{t}</p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TriGrid() {
  const items = [
    {
      name: "Sense",
      desc:
        "EMMA ingests files, emails, dashboards, and market signals to build live context.",
      emoji: "🎯",
    },
    {
      name: "Synthesize",
      desc:
        "She fuses human goals with data to produce strategy, prompts, and actions.",
      emoji: "⚡",
    },
    {
      name: "Serve",
      desc:
        "She executes: drafts, deploys, syncs, alerts — then learns from outcomes.",
      emoji: "🚀",
    },
  ];
  return (
    <section className="relative py-16 md:py-20 px-5 md:px-8 bg-[#081220]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#d8cffb]">
          The EMMA Trinity
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((card, i) => (
            <motion.div
              key={card.name}
              initial={{ opacity: 0, y: 22, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative rounded-2xl p-6 bg-gradient-to-b from-white/6 to-white/3 ring-1 ring-white/10
                         hover:ring-white/20 hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)] overflow-hidden"
            >
              <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500
                              bg-[radial-gradient(400px_120px_at_var(--mx,50%)_-20px,rgba(168,139,255,0.28),transparent)]" />
              <div className="relative">
                <div className="text-2xl">{card.emoji}</div>
                <h3 className="mt-3 text-xl font-semibold text-white">{card.name}</h3>
                <p className="mt-2 text-white/70 leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueBlocks() {
  return (
    <section className="relative py-16 md:py-20 px-5 md:px-8 bg-[#0b1422]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="p-6 rounded-2xl bg-gradient-to-b from-white/6 to-white/3 ring-1 ring-white/10"
        >
          <h3 className="text-xl font-semibold text-white">Why EMMA for the Empire</h3>
          <p className="mt-3 text-white/75">
            EMMA is our operating rhythm — aligning divisions, compressing cycle time,
            and compounding knowledge so decisions get sharper every day.
          </p>
          <p className="mt-3 text-white/60">
            Powered by MEGA-ERIC, EMMA converts data into intuition and systems into
            decisions — turning progress into a living narrative.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.05, duration: 0.55 }}
          className="p-6 rounded-2xl bg-gradient-to-b from-white/6 to-white/3 ring-1 ring-white/10"
        >
          <h3 className="text-xl font-semibold text-white">Why EMMA for Clients</h3>
          <p className="mt-3 text-white/75">
            A bespoke command center — your brand, your data, your workflows —
            delivered as a living system. Packages start at $15,000 and scale with scope.
          </p>
          <div className="mt-5 flex gap-3">
            <CTA href="/contact?r=emma" label="Request the Deck →" />
            <CTA href="/contact?r=bank" label="Bank Gateway →" variant="secondary" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
