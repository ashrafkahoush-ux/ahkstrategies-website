import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'International Trade Division - AHKStrategies',
  description: 'Connecting global markets through strategic trade solutions. Building bridges across borders.',
  openGraph: {
    title: 'International Trade Division - AHKStrategies',
    description: 'Connecting global markets through strategic trade solutions',
    images: ['/assets/core/divisions/trade.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'International Trade Division - AHKStrategies',
    description: 'Connecting global markets through strategic trade solutions',
    images: ['/assets/core/divisions/trade.jpg'],
  },
};

export default function TradeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
