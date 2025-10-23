import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research & Development Division - AHKStrategies',
  description: 'Pioneering breakthrough innovations through cutting-edge research. Transforming ideas into reality.',
  openGraph: {
    title: 'Research & Development Division - AHKStrategies',
    description: 'Pioneering breakthrough innovations through cutting-edge research',
    images: ['/assets/images/divisions/research.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Research & Development Division - AHKStrategies',
    description: 'Pioneering breakthrough innovations through cutting-edge research',
    images: ['/assets/images/divisions/research.jpg'],
  },
};

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
