import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Innovation & Design Thinking - AHKStrategies',
  description: 'Innovation is not a product—it is a mindset. We design solutions that challenge norms, anticipate needs, and redefine what\'s possible.',
  openGraph: {
    title: 'Innovation & Design Thinking - AHKStrategies',
    description: 'Designing solutions that challenge norms and redefine what\'s possible',
    images: ['/assets/core/share-default.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Innovation & Design Thinking - AHKStrategies',
    description: 'Designing solutions that challenge norms and redefine what\'s possible',
    images: ['/assets/core/share-default.png'],
  },
};

export default function InnovationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
