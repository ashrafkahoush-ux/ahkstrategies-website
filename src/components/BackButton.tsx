'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

// =============================================================================
// UNIFIED BACK BUTTON COMPONENT - GOLD BOX STANDARD
// =============================================================================
// Standardized across entire website: gold background (#D4AF37), navy "BACK" text
// Fixed bottom-right positioning (bottom-10 right-10)
// Use this component everywhere - NO other back button variations allowed
// =============================================================================

interface BackButtonProps {
  /** Optional URL to navigate to (if not provided, uses router.back()) */
  href?: string;
  /** Additional CSS classes for layout overrides */
  className?: string;
}

export default function BackButton({ 
  href, 
  className = '' 
}: BackButtonProps) {
  const router = useRouter();

  const buttonContent = (
    <motion.button
      type="button"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`relative px-5 py-2 rounded-lg font-bold text-sm md:text-base overflow-hidden group ${className}`}
      style={{
        background: '#D4AF37',
        color: '#0A192F',
        boxShadow: '0 4px 12px rgba(212, 175, 55, 0.4)',
        fontFamily: 'Montserrat, sans-serif',
        cursor: 'pointer',
        border: 'none',
        letterSpacing: '0.05em',
      }}
      onClick={() => !href && router.back()}
    >
      {/* Subtle Shine Effect on Hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
          pointerEvents: 'none'
        }}
      />
      
      {/* Button Text */}
      <span className="relative z-10">BACK</span>
    </motion.button>
  );

  // Handle navigation: either Link or router.back()
  if (href) {
    return (
      <Link href={href} className="inline-block" aria-label="Go back">
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
}

// =============================================================================
// USAGE EXAMPLES
// =============================================================================
//
// 1. Generic back (uses browser history):
//    <BackButton />
//
// 2. Specific route:
//    <BackButton href="/opportunities" />
//
// 3. Custom label:
//    <BackButton label="← Return to Home" />
//
// 4. Arabic version:
//    <BackButton label="← رجوع" />
//
// 5. With layout override:
//    <BackButton className="mt-4" />
//
// =============================================================================
// DESIGN TOKENS
// =============================================================================
//
// Background: bg-yellow-400 (#FACC15 in Tailwind v4)
// Text: text-[#00153A] (AHK dark navy blue)
// Font: font-bold, text-base
// Border radius: rounded-xl (0.75rem)
// Shadow (default): 0 4px 0 rgba(0,21,58,0.3) — 3D bottom shadow
// Shadow (hover): 0 6px 0 rgba(0,21,58,0.4) — stronger on hover
// Shadow (active): 0 2px 0 rgba(0,21,58,0.3) — reduced on press
// Transform (hover): -translate-y-0.5 (lift up 2px)
// Transform (active): translate-y-1 (press down 4px)
// Transition: all properties, 150ms, ease-in-out
//
// =============================================================================
