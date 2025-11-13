import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Division - AHKStrategies',
  description: 'Pioneering digital transformation through innovative technology solutions. Building the digital future.',
  openGraph: {
    title: 'Digital Division - AHKStrategies',
    description: 'Pioneering digital transformation through innovative technology solutions',
    images: ['/assets/core/divisions/digital.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Division - AHKStrategies',
    description: 'Pioneering digital transformation through innovative technology',
    images: ['/assets/core/divisions/digital.jpg'],
  },
};

export default function DigitalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
