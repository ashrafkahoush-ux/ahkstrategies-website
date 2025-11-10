// app/api/investor/log/route.ts
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function POST(req: NextRequest) {
  try {
    const { type, projectId } = await req.json();
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const ua = req.headers.get("user-agent") || "unknown";

    const now = new Date();
    const dateStr = now.toISOString().slice(0, 10);
    const logDir = path.join(
      process.cwd(),
      "CommandCenter",
      "Reports",
      "InvestorLogs"
    );
    const logFile = path.join(logDir, `${dateStr}.log`);

    await fs.mkdir(logDir, { recursive: true });
    const line = `${now.toISOString()} | ${type} | project=${projectId} | ip=${ip} | ua=${ua}\n`;
    await fs.appendFile(logFile, line, "utf-8");

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("log error", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
