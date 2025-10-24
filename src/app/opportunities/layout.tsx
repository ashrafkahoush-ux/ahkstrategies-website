import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Opportunities | AHKStrategies',
  description: 'Explore strategic partnership and career opportunities across automotive, energy, digital, and trade sectors with AHKStrategies in the MENA region.',
  openGraph: {
    title: 'Opportunities | AHKStrategies',
    description: 'Explore strategic partnership and career opportunities across automotive, energy, digital, and trade sectors with AHKStrategies in the MENA region.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Opportunities | AHKStrategies',
    description: 'Explore strategic partnership and career opportunities across automotive, energy, digital, and trade sectors with AHKStrategies in the MENA region.',
  },
};

export default function OpportunitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
