import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | AHKStrategies',
  description: 'AI-powered strategy, market intelligence, and digital transformation services across MENA and Europe. From insight to impact.',
  openGraph: {
    title: 'Services | AHKStrategies',
    description: 'AI-powered strategy and market intelligence for the MENA region.',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
