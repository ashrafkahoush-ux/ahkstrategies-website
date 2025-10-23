import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MENA Export Business - AHKStrategies',
  description: 'Facilitating strategic trade partnerships across the MENA region. Connecting markets, creating opportunities.',
  openGraph: {
    title: 'MENA Export Business - AHKStrategies',
    description: 'Facilitating strategic trade partnerships across the MENA region',
    images: ['/assets/images/share-default.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MENA Export Business - AHKStrategies',
    description: 'Facilitating strategic trade partnerships across the MENA region',
    images: ['/assets/images/share-default.png'],
  },
};

export default function MENAExportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
