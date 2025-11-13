"use client";

import { Suspense } from "react";

export default function MegaTeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-ahk-gold">
          Loading MEGA-TEAM experience…
        </div>
      }
    >
      {children}
    </Suspense>
  );
}
