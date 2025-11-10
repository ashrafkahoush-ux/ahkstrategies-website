// components/investor/InvestorLayout.tsx
"use client";

import React from "react";
import Link from "next/link";

export default function InvestorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#001F3F] text-[#F4E5B1] flex flex-col">
      {/* Top bar */}
      <header className="border-b border-[#D4AF37]/40 bg-[#00152c]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md border border-[#D4AF37]/70 bg-black flex items-center justify-center text-xs font-bold tracking-tight text-[#D4AF37]">
              AHK
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-wide text-[#F4E5B1]">
                AHKStrategies
              </span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#F4E5B1]/70">
                Investor Intelligence Gateway
              </span>
            </div>
          </div>

          <nav className="flex items-center gap-4 text-xs font-medium text-[#F4E5B1]/80">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">
              Home
            </Link>
            <Link
              href="/investor"
              className="hover:text-[#D4AF37] transition-colors"
            >
              Investor Gateway
            </Link>
            <Link
              href="/investor/portal"
              className="hover:text-[#D4AF37] transition-colors"
            >
              Data Room
            </Link>
          </nav>
        </div>
      </header>

      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#003366]/50 blur-3xl" />
      </div>

      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-8">{children}</div>
      </main>

      <footer className="border-t border-[#D4AF37]/30 bg-[#00152c]/90 text-[10px] text-[#F4E5B1]/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
          <span>© {new Date().getFullYear()} AHKStrategies – Confidential.</span>
          <span>Dual Vector Mobility Program · WOW · Q-VAN</span>
        </div>
      </footer>
    </div>
  );
}
