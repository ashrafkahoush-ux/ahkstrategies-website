// components/investor/ProjectMetricStrip.tsx
"use client";

type ProjectMetric = {
  id: string;
  name: string;
  irr: string;
  payback: string;
  capex: string;
  tagline?: string;
};

export default function ProjectMetricStrip({
  projects,
}: {
  projects: ProjectMetric[];
}) {
  if (!projects || projects.length === 0) return null;

  return (
    <section>
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F4E5B1]/70">
        Portfolio Snapshot
      </h2>
      <div className="mt-3 grid gap-4 md:grid-cols-3">
        {projects.map((p) => (
          <div
            key={p.id}
            className="relative overflow-hidden rounded-xl border border-[#D4AF37]/40 bg-[#00152c] px-4 py-3 text-xs shadow-[0_0_25px_rgba(0,0,0,0.6)]"
          >
            <div className="pointer-events-none absolute inset-0 opacity-30">
              <div className="absolute -right-16 -top-16 h-24 w-24 rounded-full bg-[#D4AF37]/15 blur-2xl" />
            </div>
            <div className="relative">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
                {p.name}
              </p>
              {p.tagline && (
                <p className="mt-1 text-[11px] text-[#F4E5B1]/75">
                  {p.tagline}
                </p>
              )}
              <div className="mt-2 flex flex-wrap gap-3 text-[11px]">
                <span className="rounded-full border border-[#F4E5B1]/30 bg-[#001F3F] px-2 py-0.5">
                  IRR:{" "}
                  <span className="font-semibold text-[#D4AF37]">
                    {p.irr}
                  </span>
                </span>
                <span className="rounded-full border border-[#F4E5B1]/30 bg-[#001F3F] px-2 py-0.5">
                  Payback:{" "}
                  <span className="font-semibold text-[#D4AF37]">
                    {p.payback}
                  </span>
                </span>
                <span className="rounded-full border border-[#F4E5B1]/30 bg-[#001F3F] px-2 py-0.5">
                  Capex:{" "}
                  <span className="font-semibold text-[#D4AF37]">
                    {p.capex}
                  </span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
