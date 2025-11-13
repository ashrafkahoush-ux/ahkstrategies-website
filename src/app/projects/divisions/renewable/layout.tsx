import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Renewable Energy Division - AHKStrategies',
  description: 'Driving the future of sustainable energy through green technology. Powering tomorrow, responsibly.',
  openGraph: {
    title: 'Renewable Energy Division - AHKStrategies',
    description: 'Driving sustainable energy through green technology',
    images: ['/assets/core/divisions/renewable.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Renewable Energy Division - AHKStrategies',
    description: 'Driving sustainable energy through green technology',
    images: ['/assets/core/divisions/renewable.jpg'],
  },
};

export default function RenewableLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
