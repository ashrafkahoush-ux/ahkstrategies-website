import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | AHKStrategies',
  description: 'Learn about AHKStrategies - where vision meets human intelligence. Founded by Ashraf Kahoush to transform businesses across MENA and Europe.',
}

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
