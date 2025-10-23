import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legacy & Continuity - AHKStrategies',
  description: 'Building enduring systems that thrive across generations. At AHKStrategies, legacy means more than reputation — it\'s endurance through evolution.',
  openGraph: {
    title: 'Legacy & Continuity - AHKStrategies',
    description: 'Building enduring systems that thrive across generations',
    images: ['/assets/images/share-default.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legacy & Continuity - AHKStrategies',
    description: 'Building enduring systems that thrive across generations',
    images: ['/assets/images/share-default.png'],
  },
};

export default function LegacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
