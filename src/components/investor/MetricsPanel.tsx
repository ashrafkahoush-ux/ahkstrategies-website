// components/investor/MetricsPanel.tsx
"use client";

import { useSearchParams } from "next/navigation";

type Project = {
  id: string;
  slug: string;
  irr: string;
  payback: string;
  capex: string;
  tagline?: string;
};

export default function MetricsPanel({ projects }: { projects: Project[] }) {
  const params = useSearchParams();
  const currentSlug = params.get("project") || projects[0]?.slug;
  const active = projects.find((p) => p.slug === currentSlug) || projects[0];

  if (!active) return null;

  const handleLog = (type: "download" | "call") => {
    fetch("/api/investor/log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, projectId: active.id }),
    }).catch(() => {});
  };

  return (
    <aside className="flex h-full flex-col rounded-xl border border-[#D4AF37]/40 bg-[#00152c] p-3 text-xs shadow-inner">
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F4E5B1]/75">
        Key Metrics
      </p>
      <div className="space-y-2">
        <MetricRow label="IRR" value={active.irr} />
        <MetricRow label="Payback" value={active.payback} />
        <MetricRow label="Capex" value={active.capex} />
      </div>

      {active.tagline && (
        <p className="mt-3 text-[11px] text-[#F4E5B1]/75">
          {active.tagline}
        </p>
      )}

      <div className="mt-4 flex flex-col gap-2 text-[11px]">
        <button
          onClick={() => handleLog("download")}
          className="rounded-md border border-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1.5 font-semibold text-[#F4E5B1] hover:bg-[#D4AF37]/20"
        >
          Download Investor Pack (PDF)
        </button>
        <button
          onClick={() => handleLog("call")}
          className="rounded-md border border-[#F4E5B1]/40 px-3 py-1.5 text-[#F4E5B1]/80 hover:border-[#D4AF37]/70 hover:text-[#D4AF37]"
        >
          Request Follow-Up Call
        </button>
      </div>

      <p className="mt-3 text-[10px] text-[#F4E5B1]/60">
        Every action is logged to the Command Center for compliance and
        engagement tracking.
      </p>
    </aside>
  );
}

function MetricRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-md border border-[#F4E5B1]/20 bg-[#001F3F] px-2 py-1.5">
      <span className="text-[11px] text-[#F4E5B1]/80">{label}</span>
      <span className="text-[11px] font-semibold text-[#D4AF37]">
        {value}
      </span>
    </div>
  );
}
