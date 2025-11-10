// app/api/investor/auth/route.ts
import { NextRequest, NextResponse } from "next/server";

const TRUSTED_DOMAINS = [
  "mcv-eg.com",
  "wow-scooters.com",
  "ahkstrategies.net",
  "gmail.com" // you can remove this later
];

export async function POST(req: NextRequest) {
  const { email, nda } = await req.json();

  if (!email || !nda) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const domain = String(email).split("@")[1] || "";
  const trusted = TRUSTED_DOMAINS.includes(domain.toLowerCase());

  if (!trusted) {
    // here Eric can trigger an email / save to DB
    return NextResponse.json({ ok: false }, { status: 403 });
  }

  // simple cookie token, 30 days
  const res = NextResponse.json({ ok: true }, { status: 200 });
  res.cookies.set("ahk_investor_token", "verified", {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 30,
    secure: true,
    sameSite: "lax",
    path: "/"
  });

  return res;
}
