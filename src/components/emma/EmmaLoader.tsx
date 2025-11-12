"use client";
import EmmaHelixLogo from "./EmmaHelixLogo";

export default function EmmaLoader({ label = "Initializing EMMA…" }: { label?: string }) {
  return (
    <div className="grid place-items-center min-h-[40vh]">
      <div className="rounded-2xl p-8 border border-ahk-gold/20 bg-ahk-navy-dark/70 backdrop-blur animate-emma-glow">
        <EmmaHelixLogo size={96} rotate />
        <p className="mt-4 text-sm text-ahk-light text-center">{label}</p>
      </div>
    </div>
  );
}
