// app/investor/page.tsx
import InvestorLayout from "@/components/investor/InvestorLayout";
import InvestorHero from "@/components/investor/InvestorHero";
import ProjectMetricStrip from "@/components/investor/ProjectMetricStrip";
import InvestorPillars from "@/components/investor/InvestorPillars";
import path from "path";
import { promises as fs } from "fs";

export const dynamic = "force-static";

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

export default async function InvestorPage() {
  const projects = await getProjects();

  return (
    <InvestorLayout>
      <InvestorHero />
      <div className="mt-8">
        <ProjectMetricStrip projects={projects} />
      </div>
      <div className="mt-16 px-6 pb-16 max-w-7xl mx-auto">
        <InvestorPillars />
      </div>
    </InvestorLayout>
  );
}
