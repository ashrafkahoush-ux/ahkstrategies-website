// app/investor/portal/page.tsx
import InvestorLayout from "@/components/investor/InvestorLayout";
import ProjectSelector from "@/components/investor/ProjectSelector";
import StudyViewer from "@/components/investor/StudyViewer";
import MetricsPanel from "@/components/investor/MetricsPanel";
import path from "path";
import { promises as fs } from "fs";

export const dynamic = "force-dynamic";

async function getProjects() {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "investor_studies",
      "manifest.json"
    );
    const raw = await fs.readFile(filePath, "utf-8");
    const json = JSON.parse(raw);
    return json.projects || [];
  } catch (err) {
    console.error("Failed to load projects:", err);
    return [];
  }
}

export default async function InvestorPortalPage() {
  const projects = await getProjects();

  return (
    <InvestorLayout>
      <h1 className="text-xl font-semibold text-[#F4E5B1]">
        Investor Data Room
      </h1>
      <p className="mt-1 text-[11px] text-[#F4E5B1]/75">
        Access is monitored and logged. Redistribution of materials without
        written consent from AHKStrategies is strictly prohibited.
      </p>

      <div className="mt-5 grid gap-4 md:grid-cols-[220px_minmax(0,1.6fr)_minmax(0,0.9fr)]">
        <ProjectSelector projects={projects} />
        <StudyViewer projects={projects} />
        <MetricsPanel projects={projects} />
      </div>
    </InvestorLayout>
  );
}
