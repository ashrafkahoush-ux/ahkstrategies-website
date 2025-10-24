import "./globals.css";
import type { Metadata } from "next";
import NavBar from "../components/NavBar";
import PageTransition from "../components/PageTransition";
import { LanguageProvider } from "../contexts/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL('https://ahkstrategies.com'),
  title: "AHKStrategies - Where Vision Meets Human Intelligence",
  description: "AHKStrategies is a forward-thinking organization built on six foundational pillars: Legacy & Continuity, People & Culture, Innovation & Design Thinking, Vision & Foresight, Human Intelligence, and Strategic Projects.",
  openGraph: {
    title: "AHKStrategies - Where Vision Meets Human Intelligence",
    description: "Building enduring systems through six strategic pillars of excellence",
    images: ["/assets/images/share-default.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AHKStrategies - Where Vision Meets Human Intelligence",
    description: "Building enduring systems through six strategic pillars of excellence",
    images: ["/assets/images/share-default.png"],
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
      </head>
      <body className="relative min-h-screen bg-[#020617] text-slate-100 antialiased overflow-x-hidden selection:bg-white/10 selection:text-white" suppressHydrationWarning>
        <LanguageProvider>
          {/* Global Navigation */}
          <NavBar />

          {/* Page Transition Wrapper */}
          <main className="relative z-0">
            <PageTransition>{children}</PageTransition>
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
