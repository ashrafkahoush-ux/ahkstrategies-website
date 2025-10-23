import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects & Partnerships - AHKStrategies',
  description: 'Explore our strategic divisions: Automotive, Digital Transformation, MENA Export Business, Renewable Energy, Research & Development, and International Trade.',
  openGraph: {
    title: 'Projects & Partnerships - AHKStrategies',
    description: 'Strategic divisions driving innovation across industries',
    images: ['/assets/images/share-default.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects & Partnerships - AHKStrategies',
    description: 'Strategic divisions driving innovation across industries',
    images: ['/assets/images/share-default.png'],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
