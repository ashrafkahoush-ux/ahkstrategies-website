import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The MEGA Team | MEGA-ERIC & MEGA-EMMA - AHK Strategies',
  description: 'Meet MEGA-ERIC and MEGA-EMMA: The partnership between Reverse Engineering Intelligence and Human-AI Fusion that powers AHK Strategies innovation.',
  openGraph: {
    title: 'The MEGA Team - Where Intelligence Meets Vision',
    description: 'MEGA-ERIC: Precision Engineering. MEGA-EMMA: Strategic Vision. Together: The Future.',
    images: ['/assets/core/share-default.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The MEGA Team | AHK Strategies',
    description: 'The partnership that builds tomorrow: MEGA-ERIC & MEGA-EMMA',
    images: ['/assets/core/share-default.png'],
  },
};

export default function MegaTeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
