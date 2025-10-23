import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Human Intelligence - AHKStrategies',
  description: 'In a world of artificial intelligence, human intelligence remains irreplaceable. We amplify human creativity, intuition, and wisdom to solve complex challenges.',
  openGraph: {
    title: 'Human Intelligence - AHKStrategies',
    description: 'Amplifying human creativity, intuition, and wisdom to solve complex challenges',
    images: ['/assets/images/share-default.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Human Intelligence - AHKStrategies',
    description: 'Amplifying human creativity, intuition, and wisdom',
    images: ['/assets/images/share-default.png'],
  },
};

export default function HumanIntelligenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
