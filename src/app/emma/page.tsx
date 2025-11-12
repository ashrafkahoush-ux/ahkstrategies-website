"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import EmmaPulseBackground from "@/components/emma/EmmaPulseBackground";
import EmmaHelixLogo from "@/components/emma/EmmaHelixLogo";
import Link from "next/link";

// Client-side particle component to avoid hydration mismatch
function AnimatedParticle({ index }: { index: number }) {
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const [timing, setTiming] = useState({ duration: 5, delay: 0 });

  useEffect(() => {
    // Only run after hydration on client
    setPosition({
      left: Math.random() * 100,
      top: Math.random() * 100,
    });
    setTiming({
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 5,
    });
  }, []);

  return (
    <motion.div
      className="absolute w-1 h-1 bg-emma-electric rounded-full"
      style={{
        left: `${position.left}%`,
        top: `${position.top}%`,
      }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.2, 0.8, 0.2],
        scale: [1, 1.5, 1],
      }}
      transition={{
        duration: timing.duration,
        repeat: Infinity,
        delay: timing.delay,
      }}
    />
  );
}

export default function EmmaPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Ultra-Premium Animated Background */}
      <div className="fixed inset-0 -z-10">
        {/* Multi-layer gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#0A192F]" />
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 30%, rgba(8,217,255,0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 70%, rgba(154,124,249,0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 80%, rgba(212,175,55,0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 30%, rgba(8,217,255,0.15) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: 'linear-gradient(rgba(8,217,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(8,217,255,0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Floating particles - only render after mount */}
        {isMounted && [...Array(20)].map((_, i) => (
          <AnimatedParticle key={i} index={i} />
        ))}
      </div>

      <main className="relative z-10">
        {/* Hero Section - EPIC */}
        <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-20 overflow-hidden">
          {/* Hero glow effect */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                'radial-gradient(600px circle at center, rgba(8,217,255,0.4), transparent)',
                'radial-gradient(800px circle at center, rgba(154,124,249,0.4), transparent)',
                'radial-gradient(600px circle at center, rgba(212,175,55,0.4), transparent)',
                'radial-gradient(600px circle at center, rgba(8,217,255,0.4), transparent)',
              ]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />

          <div className="max-w-6xl mx-auto text-center relative z-10">
            {/* Animated Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <EmmaHelixLogo size={180} />
            </motion.div>

            {/* Epic Title */}
            <motion.h1 
              className="mt-8 font-montserrat text-5xl md:text-7xl font-black tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="inline-block">
                <span className="text-white">EMMA</span>
                <span className="text-emma-electric mx-4">—</span>
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ahk-gold via-emma-electric to-emma-violet">
                Human × AI Symbiont
              </span>
              <motion.div 
                className="mt-4 text-sm text-emma-electric font-mono"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✨ MEGA-ERIC PREMIUM VERSION v2.0 ✨
              </motion.div>
            </motion.h1>

            <motion.p 
              className="mt-6 text-xl md:text-2xl text-ahk-light/90 font-light max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Your enterprise&apos;s <span className="text-emma-electric font-semibold">cognitive core</span> — 
              memory, strategy, and motion in one <span className="text-ahk-gold font-semibold">living system</span>.
            </motion.p>

            {/* Animated accent line */}
            <motion.div
              className="mt-8 h-1 bg-gradient-to-r from-transparent via-emma-electric to-transparent mx-auto"
              initial={{ width: 0 }}
              animate={{ width: '60%' }}
              transition={{ delay: 0.9, duration: 1.2 }}
            />
          </div>
        </section>

        {/* What is EMMA - Premium Cards */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <motion.h2
            className="text-4xl font-montserrat font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emma-electric via-ahk-gold to-emma-violet">
              The EMMA Trinity
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Sense",
                icon: "🎯",
                desc: "EMMA ingests files, emails, dashboards, and market signals to build live context.",
                gradient: "from-emma-electric/20 to-emma-cyan/10",
                glow: "rgba(8, 217, 255, 0.3)"
              },
              {
                title: "Synthesize", 
                icon: "⚡",
                desc: "She fuses human goals with data to produce strategy, prompts, and actions.",
                gradient: "from-emma-violet/20 to-emma-blue/10",
                glow: "rgba(154, 124, 249, 0.3)"
              },
              {
                title: "Serve",
                icon: "🚀",
                desc: "She executes: drafts, deploys, syncs, alerts — then learns from outcomes.",
                gradient: "from-ahk-gold/20 to-ahk-gold-light/10",
                glow: "rgba(212, 175, 55, 0.3)"
              }
            ].map((item, index) => (
              <motion.article
                key={item.title}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                {/* Card glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: item.glow }}
                />

                <div className={`relative h-full rounded-2xl border border-white/10 bg-gradient-to-br ${item.gradient} backdrop-blur-xl p-8 overflow-hidden`}>
                  {/* Icon */}
                  <motion.div
                    className="text-6xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring" }}
                  >
                    {item.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-montserrat text-2xl font-bold mb-4 text-white group-hover:text-emma-electric transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-ahk-light/90 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Animated corner accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/10 to-transparent"
                    style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Architecture - Premium Showcase */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            className="relative rounded-3xl border border-white/20 bg-gradient-to-br from-ahk-navy-dark/90 to-[#112240]/90 backdrop-blur-2xl p-12 overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            {/* Animated border glow */}
            <motion.div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(8,217,255,0.5), transparent)',
                padding: '2px',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'exclude',
              }}
              animate={{
                x: ['-200%', '200%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <h2 className="font-montserrat text-3xl font-bold mb-8 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emma-electric to-emma-violet">
                Symbiont Architecture
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: "🧠", title: "Memory", desc: "Long-term knowledge, daily logs, Drive sync" },
                { icon: "⚙️", title: "Reasoning", desc: "Planning + reverse-engineering engines" },
                { icon: "⚡", title: "Execution", desc: "Code agents, deploy hooks, automations" },
                { icon: "🌐", title: "Embodiment", desc: "Dashboard UI, website DNA, investor gateways" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emma-electric/50 transition-all duration-300"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.span 
                    className="text-4xl"
                    whileHover={{ scale: 1.3, rotate: 15 }}
                    transition={{ type: "spring" }}
                  >
                    {item.icon}
                  </motion.span>
                  <div>
                    <h4 className="font-bold text-lg text-white group-hover:text-emma-electric transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-ahk-light/80 text-sm mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Why EMMA - Dual Showcase */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Why EMMA for the Empire",
                icon: "👑",
                desc: "EMMA is our operating rhythm — aligning divisions, compressing cycle time, and compounding knowledge so decisions get sharper every day.",
                gradient: "from-emma-electric/10 to-emma-cyan/5",
                borderColor: "border-emma-electric/30"
              },
              {
                title: "Why EMMA for Clients",
                icon: "💎",
                desc: "A bespoke command center: your brand, your data, your workflows — delivered as a living system. Packages start at $15,000 and scale with scope.",
                gradient: "from-ahk-gold/10 to-ahk-gold-light/5",
                borderColor: "border-ahk-gold/30"
              }
            ].map((item, index) => (
              <motion.article
                key={item.title}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className={`relative h-full rounded-2xl border ${item.borderColor} bg-gradient-to-br ${item.gradient} backdrop-blur-xl p-8`}>
                  <motion.div
                    className="text-5xl mb-4"
                    whileHover={{ scale: 1.2, rotate: -10 }}
                  >
                    {item.icon}
                  </motion.div>

                  <h3 className="font-montserrat text-2xl font-bold mb-4 text-white group-hover:text-emma-electric transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-ahk-light/90 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* CTA Section - EPIC */}
        <section className="max-w-4xl mx-auto px-6 py-20 text-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emma-electric/30 via-emma-violet/30 to-ahk-gold/30 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="relative flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact?r=emma">
                <motion.button
                  className="group relative px-8 py-4 rounded-full font-semibold text-lg overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Animated gradient background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-ahk-gold via-emma-electric to-ahk-gold"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{ backgroundSize: '200% 100%' }}
                  />
                  
                  <span className="relative z-10 text-ahk-navy font-bold">
                    Request the Deck →
                  </span>
                </motion.button>
              </Link>

              <Link href="/boutique/checkout?sku=emma-base">
                <motion.button
                  className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-emma-electric text-emma-electric hover:bg-emma-electric/10 transition-all duration-300"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(8,217,255,0.5)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Bank Gateway →
                </motion.button>
              </Link>
            </div>

            <motion.p
              className="mt-8 text-sm text-ahk-light/70"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Powered by the <span className="text-emma-electric font-semibold">EMMA–AHK Symbiont</span> — 
              Where Human Intelligence and AI move as one.
            </motion.p>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
