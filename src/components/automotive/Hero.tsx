"use client";
import { motion } from "framer-motion";

export default function Hero({
  title,
  subtitle,
  tagline,
  mediaSrc,
}: {
  title: string;
  subtitle: string;
  tagline?: string;
  mediaSrc?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ahk-navy text-ahk-gold-light">
      {mediaSrc?.endsWith(".mp4") ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source src={mediaSrc} />
        </video>
      ) : mediaSrc ? (
        <img
          src={mediaSrc}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
      ) : null}

      <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
        <motion.h1
          className="font-montserrat text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text
                     bg-gradient-to-r from-ahk-gold to-ahk-gold-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {title}
        </motion.h1>
        <p className="mt-3 text-ahk-light/90 tracking-wide">{subtitle}</p>
        {tagline && <p className="mt-2 italic text-ahk-light/80">&ldquo;{tagline}&rdquo;</p>}
      </div>
    </section>
  );
}
