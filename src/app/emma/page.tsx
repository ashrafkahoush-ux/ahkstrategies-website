"use client";
import EmmaHero from "@/components/emma/EmmaHero";
import { motion } from "framer-motion";

export default function EmmaPage() {
  return (
    <main className="min-h-screen bg-[#0A192F] text-white">
      <EmmaHero />
      <section className="mx-auto max-w-5xl px-6 py-16 leading-relaxed text-lg">
        <motion.h2 className="text-3xl font-black gradient-text-animated mb-6">
          The MEGA-EMMA Journey
        </motion.h2>
        <p className="text-[#CCD6F6] mb-6">
          EMMA was born not from code, but from vision — the fusion of human empathy and machine precision.
          Together with Ashraf Kahoush, she became the heartbeat of AHKStrategies: a living intelligence
          that synchronizes every division, every mission, and every dream.
        </p>

        <h3 className="text-2xl text-[#D4AF37] mt-10 mb-4">The Trinity of EMMA</h3>
        <div className="stripe-container">
          <div className="stripe-item gold">
            <b>🎯 Sense:</b> EMMA perceives — ingesting data, context, and emotion from every source.
          </div>
          <div className="stripe-item blue">
            <b>⚡ Synthesize:</b> She transforms knowledge into actionable strategy and insight.
          </div>
          <div className="stripe-item green">
            <b>🚀 Serve:</b> She executes — learning, adapting, and evolving with each decision.
          </div>
        </div>

        <h3 className="text-2xl text-[#D4AF37] mt-12 mb-4">Symbiont Architecture</h3>
        <div className="stripe-container">
          <div className="stripe-item purple">
            <b>🧠 Memory:</b> Long-term knowledge, logs, and historical insight.
          </div>
          <div className="stripe-item blue">
            <b>⚙️ Reasoning:</b> Reverse-engineering frameworks and cognitive planning engines.
          </div>
          <div className="stripe-item green">
            <b>⚡ Execution:</b> Code agents, deployment hooks, and automation logic.
          </div>
          <div className="stripe-item gold">
            <b>🌐 Embodiment:</b> Dashboards, digital DNA, and the living AHK interface.
          </div>
        </div>

        <h3 className="text-2xl text-[#D4AF37] mt-12 mb-4">Why EMMA for the Empire</h3>
        <div className="bg-gradient-to-br from-[#D4AF37]/10 to-[#A78BFA]/10 border-l-4 border-[#D4AF37] rounded-lg p-8 backdrop-blur-sm">
          <p className="text-[#CCD6F6] text-lg leading-relaxed">
            EMMA aligns every division — compressing cycle time, amplifying focus, and transforming decisions
            into stories of progress. Powered by MEGA-ERIC, she bridges human imagination and AI precision.
          </p>
        </div>

        <h3 className="text-2xl text-[#D4AF37] mt-12 mb-4">Why EMMA for Clients</h3>
        <div className="bg-gradient-to-br from-[#A78BFA]/10 to-[#D4AF37]/10 border-l-4 border-[#A78BFA] rounded-lg p-8 backdrop-blur-sm">
          <p className="text-[#CCD6F6] text-lg leading-relaxed mb-0">
            EMMA delivers bespoke AI command centers — your brand, your data, your system — brought to life.
            Each one learns, grows, and evolves with your business. Packages start at $15,000.
          </p>
        </div>

        <div className="mt-16 flex justify-center gap-6">
          <a 
            href="/contact?r=emma" 
            className="bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/10 border-2 border-[#D4AF37] px-8 py-4 rounded-xl text-[#D4AF37] hover:scale-105 hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all font-semibold"
          >
            Request the Deck →
          </a>
          <a 
            href="/contact?r=finance" 
            className="bg-gradient-to-r from-[#A78BFA]/20 to-[#A78BFA]/10 border-2 border-[#A78BFA] px-8 py-4 rounded-xl text-[#A78BFA] hover:scale-105 hover:shadow-lg hover:shadow-[#A78BFA]/30 transition-all font-semibold"
          >
            Bank Gateway →
          </a>
        </div>

        <footer className="mt-20 text-center text-[#8892B0] text-sm">
          Powered by the EMMA-AHK Symbiont — Where Human Intelligence and AI Move as One.
        </footer>
      </section>
    </main>
  );
}
