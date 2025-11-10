'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import EmmaVideoCard from '@/components/emma/EmmaVideoCard'

export default function EmmaSplashPage() {
  const router = useRouter()
  const [showContent, setShowContent] = useState(true)

  useEffect(() => {
    // Auto-redirect after 10 seconds (optional)
    const timer = setTimeout(() => {
      // Uncomment to enable auto-redirect
      // router.push('/dashboard/investor-intelligence')
    }, 10000)

    return () => clearTimeout(timer)
  }, [router])

  if (!showContent) {
    router.push('/dashboard/investor-intelligence')
    return null
  }

  return (
    <div className="relative min-h-screen bg-[#020617] overflow-hidden">
      {/* EMMA Splash */}
      <EmmaVideoCard variant="splash" />

      {/* Skip Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() => setShowContent(false)}
        className="fixed bottom-8 right-8 z-[60] bg-[#D4AF37]/20 hover:bg-[#D4AF37]/30 border border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-lg transition-all"
      >
        Continue to Dashboard →
      </motion.button>
    </div>
  )
}
