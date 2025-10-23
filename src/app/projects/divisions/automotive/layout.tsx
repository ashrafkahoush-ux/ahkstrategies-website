import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automotive Division - AHKStrategies',
  description: 'Leading innovation in automotive technology and sustainable transportation solutions. Driving the future of mobility.',
  openGraph: {
    title: 'Automotive Division - AHKStrategies',
    description: 'Leading innovation in automotive technology and sustainable transportation solutions',
    images: ['/assets/images/divisions/automotive.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automotive Division - AHKStrategies',
    description: 'Leading innovation in automotive technology and sustainable transportation',
    images: ['/assets/images/divisions/automotive.jpg'],
  },
};

export default function AutomotiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
