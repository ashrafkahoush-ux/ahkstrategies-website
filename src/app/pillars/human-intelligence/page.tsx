import Image from "next/image";
import Link from "next/link";

export default function HumanIntelligencePage() {
  return (
    <div className="relative h-screen w-full overflow-hidden text-center text-white flex flex-col justify-center items-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
        src="/assets/backgrounds/human-intelligence.mp4"
      />
      <div className="parallax-layer relative z-10 px-6 text-white">
        <h1 className="text-4xl md:text-5xl font-bold">Human Intelligence</h1>
        <p className="mt-3 max-w-2xl text-lg opacity-90">
          People-first strategy, decision clarity, and leadership systems that
          compound over time.
        </p>
      </div>
      <section className="relative py-20 mx-auto max-w-5xl px-6 prose prose-lg">
        <h2>Why it matters</h2>
        <p>
          Technology amplifies judgment; it doesn't replace it. We design org
          structures, incentives, and decision protocols that let talent do its
          best work—measurably.
        </p>

        <h3>What we implement</h3>
        <ul>
          <li>Decision frameworks (one-way vs. two-way doors)</li>
          <li>Leadership operating cadence &amp; scorecards</li>
          <li>Org design aligned to strategy (not politics)</li>
          <li>Partner ecosystems &amp; knowledge transfer</li>
        </ul>

        <p className="mt-10">
          <Link href="/" className="no-underline">
            ← Back to Home
          </Link>
        </p>
      </section>
    </div>
  );
}
