import EmmaPulseBackground from "@/components/emma/EmmaPulseBackground";
import EmmaHelixLogo from "@/components/emma/EmmaHelixLogo";
import CTAButtons from "@/components/automotive/CTAButtons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EMMA — Human x AI Symbiont | AHKStrategies",
  description: "Where Human Intelligence and Artificial Intelligence move as one.",
};

export default function EmmaPage() {
  return (
    <EmmaPulseBackground>
      <main className="min-h-screen text-ahk-light">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
          <EmmaHelixLogo size={140} />
          <h1 className="mt-6 font-montserrat text-4xl md:text-5xl font-extrabold">
            EMMA — <span className="text-transparent bg-clip-text bg-gradient-to-r from-ahk-gold to-ahk-gold-light">Human x AI</span> Symbiont
          </h1>
          <p className="mt-3 text-lg text-ahk-light/90">
            Your enterprise&apos;s cognitive core — memory, strategy, and motion in one living system.
          </p>
        </section>

        {/* What is EMMA */}
        <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 pb-14">
          {[
            ["Sense", "EMMA ingests files, emails, dashboards, and market signals to build live context."],
            ["Synthesize", "She fuses human goals with data to produce strategy, prompts, and actions."],
            ["Serve", "She executes: drafts, deploys, syncs, alerts — then learns from outcomes."]
          ].map(([t,b])=>(
            <article key={t} className="rounded-2xl border border-ahk-gold/20 bg-ahk-navy-dark/50 p-6">
              <h3 className="font-montserrat text-ahk-gold text-xl mb-2">{t}</h3>
              <p>{b}</p>
            </article>
          ))}
        </section>

        {/* Architecture */}
        <section className="max-w-6xl mx-auto px-6 pb-14">
          <div className="rounded-3xl border border-ahk-gold/20 bg-ahk-navy-dark/50 p-8">
            <h2 className="font-montserrat text-2xl text-ahk-gold mb-4">Symbiont Architecture</h2>
            <ul className="grid md:grid-cols-2 gap-4 list-disc ml-5">
              <li><b>Memory:</b> long-term knowledge, daily logs, Drive sync.</li>
              <li><b>Reasoning:</b> planning + reverse-engineering engines.</li>
              <li><b>Execution:</b> code agents, deploy hooks, automations.</li>
              <li><b>Embodiment:</b> dashboard UI, website DNA, investor gateways.</li>
            </ul>
          </div>
        </section>

        {/* Why EMMA for AHK & Clients */}
        <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6 pb-14">
          <article className="rounded-2xl border border-ahk-gold/20 bg-ahk-navy-dark/50 p-6">
            <h3 className="font-montserrat text-ahk-gold text-xl mb-2">Why EMMA for the Empire</h3>
            <p>
              EMMA is our operating rhythm — aligning divisions, compressing cycle time,
              and compounding knowledge so decisions get sharper every day.
            </p>
          </article>
          <article className="rounded-2xl border border-ahk-gold/20 bg-ahk-navy-dark/50 p-6">
            <h3 className="font-montserrat text-ahk-gold text-xl mb-2">Why EMMA for Clients</h3>
            <p>
              A bespoke command center: your brand, your data, your workflows —
              delivered as a living system. Packages start at $15,000 and scale with scope.
            </p>
          </article>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-6 pb-24 text-center">
          <CTAButtons requestHref="/contact?r=emma" checkoutHref="/boutique/checkout?sku=emma-base" />
          <p className="mt-4 text-sm text-ahk-light/70">
            Powered by the EMMA–AHK Symbiont — Where Human Intelligence and AI move as one.
          </p>
        </section>
      </main>
    </EmmaPulseBackground>
  );
}
