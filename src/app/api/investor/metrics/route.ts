// app/api/investor/metrics/route.ts
import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET() {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "investor_studies",
      "manifest.json"
    );
    const raw = await fs.readFile(filePath, "utf-8");
    const json = JSON.parse(raw);
    return NextResponse.json(json, { status: 200 });
  } catch (err) {
    console.error("metrics error", err);
    return NextResponse.json({ projects: [] }, { status: 200 });
  }
}
