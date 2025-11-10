// components/investor/StudyViewer.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

type Project = {
  id: string;
  slug: string;
  file: string;
  name: string;
};

export default function StudyViewer({ projects }: { projects: Project[] }) {
  const params = useSearchParams();
  const currentSlug = params.get("project") || projects[0]?.slug;
  const active = projects.find((p) => p.slug === currentSlug) || projects[0];

  useEffect(() => {
    if (!active) return;
    fetch("/api/investor/log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "view", projectId: active.id }),
    }).catch(() => {});
  }, [active?.id]);

  if (!active) return null;

  return (
    <section className="flex min-h-[420px] flex-col overflow-hidden rounded-xl border border-[#D4AF37]/40 bg-[#00152c]">
      <div className="flex items-center justify-between border-b border-[#F4E5B1]/20 px-4 py-2 text-[11px] text-[#F4E5B1]/80">
        <div>
          <span className="font-semibold text-[#F4E5B1]">
            {active.name}
          </span>
          <span className="ml-2 text-[10px] text-[#F4E5B1]/70">
            Investor Edition (Read-Only)
          </span>
        </div>
        <span className="text-[10px] text-[#F4E5B1]/60">
          Rendered as secure embedded HTML
        </span>
      </div>
      <iframe
        src={active.file}
        className="flex-1 border-0"
        sandbox="allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
      />
    </section>
  );
}
