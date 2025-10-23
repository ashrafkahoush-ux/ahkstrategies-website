import "./globals.css";
import type { Metadata } from "next";
import NavBar from "../components/NavBar";
import PageTransition from "../components/PageTransition";

export const metadata: Metadata = {
  title: "AHKStrategies",
  description: "Where Vision Meets Human Intelligence",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-[#020617] text-slate-100 antialiased overflow-x-hidden selection:bg-white/10 selection:text-white">
        {/* Global Navigation */}
        <NavBar />

        {/* Page Transition Wrapper */}
        <main className="relative z-0">
          <PageTransition>{children}</PageTransition>
        </main>
      </body>
    </html>
  );
}
