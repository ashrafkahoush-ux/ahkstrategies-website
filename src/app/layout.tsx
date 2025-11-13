import "./globals.css";
import "../styles/letterhead-inspired.css";
import type { Metadata } from "next";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FloatingBackground from "../components/FloatingBackground";
import { LanguageProvider } from "../contexts/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ahkstrategies.net'),
  title: {
    default: "AHKStrategies — AI-Powered Strategy & Market Intelligence for MENA Growth",
    template: "%s | AHKStrategies"
  },
  description: "AHKStrategies — AI-powered strategy, automation, and consulting for MENA and European growth. Explore our Services: Boutique, LaunchPad, Studios, Academy, and Consulting Hub — where intelligence transforms innovation into measurable impact.",
  keywords: [
    "AI strategy",
    "automation",
    "consulting",
    "MENA growth",
    "digital transformation",
    "AHK Boutique",
    "LaunchPad",
    "Studios",
    "Academy",
    "Consulting Hub",
    "MENA market intelligence",
    "business consulting",
    "Ashraf Kahoush",
    "cross-border partnerships",
    "strategic advisory",
    "market entry strategy",
  ],
  authors: [{ name: "Ashraf Kahoush" }],
  creator: "AHKStrategies",
  publisher: "AHKStrategies",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ahkstrategies.net",
    siteName: "AHKStrategies",
    title: "AHKStrategies | From Vision to Services — Intelligence that Empowers Growth",
    description: "Explore AHKStrategies' full-service ecosystem — AI-driven insights, automation, media creation, learning, and consulting.",
    images: [
      {
        url: "/assets/core/share-default.png",
        width: 1200,
        height: 630,
        alt: "AHKStrategies Services — AI-driven solutions for business growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AHKStrategies | From Vision to Services — Intelligence that Empowers Growth",
    description: "Explore AHKStrategies' full-service ecosystem — AI-driven insights, automation, media creation, learning, and consulting.",
    images: ["/assets/core/share-default.png"],
    creator: "@akahoush",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Add your actual code
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="relative min-h-screen bg-[#0A192F] text-slate-100 antialiased overflow-x-hidden selection:bg-white/10 selection:text-white" suppressHydrationWarning>
        <LanguageProvider>
          {/* Floating Background Elements */}
          <FloatingBackground />

          {/* Global Navigation */}
          <NavBar />

          {/* Main Content */}
          <main className="relative z-10">
            {children}
          </main>

          {/* Global Footer */}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
