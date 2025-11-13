import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vision & Foresight - AHKStrategies',
  description: 'True vision is not seeing what is—it is seeing what could be. We anticipate futures, navigate uncertainties, and build pathways to tomorrow.',
  openGraph: {
    title: 'Vision & Foresight - AHKStrategies',
    description: 'Anticipating futures and building pathways to tomorrow',
    images: ['/assets/core/share-default.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vision & Foresight - AHKStrategies',
    description: 'Anticipating futures and building pathways to tomorrow',
    images: ['/assets/core/share-default.png'],
  },
};

export default function VisionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
