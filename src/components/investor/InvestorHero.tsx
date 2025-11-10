// components/investor/InvestorHero.tsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function InvestorHero() {
  const router = useRouter();
  const [showAuth, setShowAuth] = useState(false);

  return (
    <section className="relative overflow-hidden rounded-2xl border border-[#D4AF37]/40 bg-gradient-to-br from-[#00152c] via-[#001F3F] to-[#062a52] px-6 py-8 shadow-[0_0_40px_rgba(0,0,0,0.7)]">
      {/* glow */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#D4AF37]/20 blur-3xl" />
        <div className="absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-[#003366]/60 blur-3xl" />
      </div>

      <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F4E5B1]/80">
            AHKStrategies · Mobility & Energy
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#F4E5B1] md:text-4xl">
            Strategic Mobility.{" "}
            <span className="text-[#D4AF37]">Verified Returns.</span>
          </h1>
          <p className="mt-3 text-sm text-[#F4E5B1]/80">
            Access curated feasibility studies for Q-VAN, WOW Electric
            Scooters, and the Dual Vector Mobility Program. Figures are
            validated, narratives are strategic, and access is controlled under
            NDA.
          </p>

          <div className="mt-5 flex flex-wrap gap-3 text-xs">
            <button
              onClick={() => setShowAuth(true)}
              className="rounded-md border border-[#D4AF37] bg-[#D4AF37]/10 px-4 py-2 font-semibold text-[#F4E5B1] shadow-[0_0_20px_rgba(212,175,55,0.35)] transition hover:bg-[#D4AF37]/20"
            >
              Enter Data Room
            </button>
            <button
              onClick={() => router.push("/contact?topic=investor")}
              className="rounded-md border border-[#F4E5B1]/40 px-4 py-2 font-medium text-[#F4E5B1]/80 hover:border-[#D4AF37]/70 hover:text-[#D4AF37] transition"
            >
              Request Investor Call
            </button>
          </div>

          <p className="mt-3 text-[11px] text-[#F4E5B1]/70">
            Access to full studies is restricted. Approved partners receive a
            30-day secure token linked to their corporate email.
          </p>
        </div>
      </div>

      {/* simple auth modal trigger – Eric can swap to real dialog component */}
      {showAuth && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="w-full max-w-sm rounded-xl border border-[#D4AF37]/40 bg-[#00152c] p-5 text-sm shadow-xl">
            <h2 className="text-base font-semibold text-[#F4E5B1]">
              Investor Access
            </h2>
            <p className="mt-1 text-[11px] text-[#F4E5B1]/75">
              Use your corporate email. Access is granted only to verified
              partners under NDA.
            </p>
            <form
              className="mt-3 space-y-3"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const email = (form.elements.namedItem("email") as HTMLInputElement)
                  ?.value;
                const nda = (form.elements.namedItem("nda") as HTMLInputElement)
                  ?.checked;

                const res = await fetch("/api/investor/auth", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email, nda }),
                });

                if (res.ok) {
                  router.push("/investor/portal");
                } else {
                  alert("Access pending. Our team will review and respond.");
                  setShowAuth(false);
                }
              }}
            >
              <div>
                <label className="mb-1 block text-[11px] text-[#F4E5B1]/80">
                  Corporate email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-[#F4E5B1]/30 bg-[#001F3F] px-2 py-1.5 text-xs text-[#F4E5B1] outline-none focus:border-[#D4AF37]"
                />
              </div>
              <label className="flex cursor-pointer items-center gap-2 text-[11px] text-[#F4E5B1]/80">
                <input
                  type="checkbox"
                  name="nda"
                  required
                  className="h-3 w-3 rounded border-[#F4E5B1]/40 bg-[#001F3F]"
                />
                I confirm an NDA is signed or in process.
              </label>
              <div className="flex justify-end gap-2 pt-1 text-xs">
                <button
                  type="button"
                  className="rounded-md border border-[#F4E5B1]/30 px-3 py-1 text-[#F4E5B1]/70 hover:border-[#D4AF37]/70"
                  onClick={() => setShowAuth(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md border border-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 font-semibold text-[#F4E5B1] hover:bg-[#D4AF37]/20"
                >
                  Access
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
