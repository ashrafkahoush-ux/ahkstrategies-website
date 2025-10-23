import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'People & Culture - AHKStrategies',
  description: 'People are not resources—they are the foundation. We cultivate environments where talent thrives, ideas flourish, and innovation becomes inevitable.',
  openGraph: {
    title: 'People & Culture - AHKStrategies',
    description: 'Cultivating environments where talent thrives and innovation becomes inevitable',
    images: ['/assets/images/share-default.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'People & Culture - AHKStrategies',
    description: 'Cultivating environments where talent thrives and innovation becomes inevitable',
    images: ['/assets/images/share-default.png'],
  },
};

export default function PeopleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
