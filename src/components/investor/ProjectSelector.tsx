// components/investor/ProjectSelector.tsx
"use client";

import { useSearchParams, useRouter } from "next/navigation";

type Project = {
  id: string;
  name: string;
  slug: string;
};

export default function ProjectSelector({ projects }: { projects: Project[] }) {
  const params = useSearchParams();
  const router = useRouter();
  const current = params.get("project") || projects[0]?.slug;

  return (
    <aside className="h-full rounded-xl border border-[#D4AF37]/40 bg-[#00152c] p-3 text-xs shadow-inner">
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F4E5B1]/75">
        Projects
      </p>
      <div className="space-y-1">
        {projects.map((p) => {
          const active = p.slug === current;
          return (
            <button
              key={p.id}
              onClick={() =>
                router.replace(`/investor/portal?project=${p.slug}`)
              }
              className={`w-full rounded-md px-2 py-1.5 text-left transition ${
                active
                  ? "bg-[#D4AF37]/15 text-[#F4E5B1] border border-[#D4AF37]/70"
                  : "text-[#F4E5B1]/75 hover:bg-[#001F3F] border border-transparent"
              }`}
            >
              {p.name}
            </button>
          );
        })}
      </div>
    </aside>
  );
}
