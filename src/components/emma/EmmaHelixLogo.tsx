"use client";
import { motion } from "framer-motion";

export default function EmmaHelixLogo({
  size = 120,
  rotate = true,
  label = "EMMA — Human x AI Symbiont"
}: { size?: number; rotate?: boolean; label?: string }) {
  const s = size;
  return (
    <div className="relative inline-grid place-items-center">
      {/* outer glow ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ width: s, height: s }}
        animate={{ boxShadow: ["0 0 0px rgba(212,175,55,0.0)","0 0 36px rgba(212,175,55,0.35)","0 0 0px rgba(212,175,55,0.0)"] }}
        transition={{ duration: 3.6, repeat: Infinity }}
      />
      {/* rotating badge */}
      <motion.div
        className="rounded-full bg-ahk-navy-dark border border-ahk-gold/40 grid place-items-center"
        style={{ width: s, height: s }}
        animate={ rotate ? { rotate: 360 } : undefined }
        transition={ rotate ? { repeat: Infinity, duration: 24, ease: "linear" } : undefined }
      >
        <svg width={s*0.72} height={s*0.72} viewBox="0 0 200 200" fill="none">
          {/* left strand (Human DNA - gold) */}
          <motion.path
            d="M40 20 C120 20, 80 180, 160 180"
            stroke="url(#goldGrad)" strokeWidth="6" strokeLinecap="round"
            strokeDasharray="12 10" className="animate-emma-wave"
          />
          {/* right strand (AI DNA - electric) */}
          <motion.path
            d="M160 20 C80 20, 120 180, 40 180"
            stroke="url(#aiGrad)" strokeWidth="6" strokeLinecap="round"
            strokeDasharray="12 10" className="animate-emma-wave"
          />
          {/* cross bars */}
          {[...Array(6)].map((_,i)=>(
            <line key={i}
              x1={60+i*14} y1={40+i*20}
              x2={140-i*14} y2={40+i*20}
              stroke="rgba(244,229,177,0.5)" strokeWidth="2" />
          ))}
          <defs>
            <linearGradient id="goldGrad" x1="0" y1="0" x2="200" y2="0">
              <stop offset="0%" stopColor="#D4AF37"/><stop offset="100%" stopColor="#F4E5B1"/>
            </linearGradient>
            <linearGradient id="aiGrad" x1="0" y1="0" x2="200" y2="0">
              <stop offset="0%" stopColor="#08D9FF"/><stop offset="100%" stopColor="#2B6BFF"/>
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
      <div className="mt-3 text-xs tracking-wider text-ahk-gold/80 font-montserrat">{label}</div>
    </div>
  );
}
