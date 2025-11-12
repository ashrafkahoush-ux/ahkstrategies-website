import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | AHKStrategies',
  description: 'Reach out to AHKStrategies for strategic partnerships, innovative projects, and collaboration opportunities across MENA and Europe.',
  openGraph: {
    title: 'Contact Us | AHKStrategies',
    description: 'Reach out to AHKStrategies for strategic partnerships, innovative projects, and collaboration opportunities across MENA and Europe.',
    images: ['/assets/core/share-default.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | AHKStrategies',
    description: 'Reach out to AHKStrategies for strategic partnerships, innovative projects, and collaboration opportunities across MENA and Europe.',
    images: ['/assets/core/share-default.png'],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
