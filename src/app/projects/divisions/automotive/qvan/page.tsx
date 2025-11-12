import Hero from "@/components/automotive/Hero";
import CTAButtons from "@/components/automotive/CTAButtons";
import QRCard from "@/components/automotive/QRCard";

export default function Page() {
  return (
    <main className="bg-ahk-navy text-ahk-light min-h-screen">
      <div className="max-w-6xl mx-auto px-6 pt-6">
        <a
          href="/projects/divisions/automotive"
          className="inline-block mb-6 px-4 py-2 rounded-full border border-ahk-gold/60 text-ahk-gold hover:bg-ahk-gold/10"
        >
          ← Back to Automotive
        </a>
      </div>

      <Hero
        title="Urban Micro-Logistics Platform"
        subtitle="Smart Commercial EV Systems"
        tagline="Powering the next frontier of green logistics."
        mediaSrc="/assets/automotive/qvan_hero.jpg"
      />

      <section className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8">
        <article className="rounded-2xl border border-ahk-gold/20 bg-ahk-navy-dark/50 p-6">
          <h2 className="font-montserrat text-2xl text-ahk-gold mb-2">The Vision</h2>
          <p>
            A purpose-built EV ecosystem for dense MENA/EU cities: localized assembly, modular
            batteries, AI fleet routing, and a data layer for predictable SLAs.
          </p>
        </article>

        <article className="rounded-2xl border border-ahk-gold/20 bg-ahk-navy-dark/50 p-6">
          <h2 className="font-montserrat text-2xl text-ahk-gold mb-2">Our Role</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>JV structuring and localization roadmap</li>
            <li>Assembly line blueprint + vendor orchestration</li>
            <li>Fleet AI + aftersales enablement</li>
          </ul>
        </article>
      </section>

      {/* Embed your existing teaser HTML (non-sensitive) */}
      <section className="max-w-6xl mx-auto px-6 pb-10">
        <iframe
          src="/reports/q-van-pillar.html"
          className="w-full h-[720px] rounded-2xl border border-ahk-gold/20"
          title="Q-VAN Teaser"
        />
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-14 flex flex-col items-center gap-8">
        <CTAButtons
          requestHref="/contact?r=qvan"
          checkoutHref="/boutique/checkout?sku=qvan"
        />
        <QRCard href="/contact?r=qvan" />
      </section>
    </main>
  );
}
