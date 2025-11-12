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
        title="European Electric Motorbike Series"
        subtitle="Urban E-Mobility, Designed in Italy"
        tagline="Italian design meets Cairo streets."
        mediaSrc="/assets/automotive/moto_hero.jpg"
      />

      <section className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8">
        <article className="rounded-2xl border border-ahk-gold/20 bg-ahk-navy-dark/50 p-6">
          <h2 className="font-montserrat text-2xl text-ahk-gold mb-2">
            Design & Heritage
          </h2>
          <p>
            European styling, safety, and performance adapted for MENA commuting reality.
          </p>
        </article>
        <article className="rounded-2xl border border-ahk-gold/20 bg-ahk-navy-dark/50 p-6">
          <h2 className="font-montserrat text-2xl text-ahk-gold mb-2">
            Go-to-Market
          </h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>Phased homologation and localization incentives</li>
            <li>Distribution + aftersales network design</li>
            <li>Finance & fleet partnerships for uptake</li>
          </ul>
        </article>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-14 flex flex-col items-center gap-8">
        <CTAButtons
          requestHref="/contact?r=moto"
          checkoutHref="/boutique/checkout?sku=moto"
        />
        <QRCard href="/contact?r=moto" />
      </section>
    </main>
  );
}
