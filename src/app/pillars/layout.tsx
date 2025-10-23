import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AHKStrategies | Pillars",
  description: "Cinematic framework where vision meets human intelligence",
};

export default function PillarsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative min-h-screen bg-[#020617] text-slate-100 antialiased overflow-hidden selection:bg-white/10 selection:text-white">
      {children}
    </section>
  );
}
