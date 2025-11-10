'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const NavBar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Vision', href: '/pillars/vision' },
    { label: 'Legacy', href: '/pillars/legacy' },
    { label: 'Innovation', href: '/pillars/innovation' },
    { label: 'Human Intelligence', href: '/pillars/human-intelligence' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-gradient-to-r from-ahk-navy/95 to-ahk-navy-light/95 border-b border-ahk-gold/20 shadow-glow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo with animated 3D video */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-ahk-gold rounded-xl blur-lg opacity-50 animate-pulse"></div>
            <div className="relative w-12 h-12 bg-gradient-to-br from-ahk-gold to-ahk-gold-light rounded-xl overflow-hidden shadow-glow">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                aria-label="AHK Strategies animated logo"
                className="w-full h-full object-cover"
              >
                <source src="/assets/ai_images/3D-animated-logo.mp4" type="video/mp4" />
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-ahk-gold to-ahk-gold-light">
                  <span className="text-ahk-navy font-black text-xl">AHK</span>
                </div>
              </video>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black font-display bg-gradient-to-r from-ahk-gold to-ahk-gold-light bg-clip-text text-transparent">
              AHK
            </span>
            <span className="text-xs font-semibold tracking-wider uppercase text-ahk-gold-light/80">
              Strategies
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                pathname === item.href
                  ? 'bg-gradient-to-r from-ahk-gold to-ahk-gold-light text-ahk-navy shadow-glow'
                  : 'text-ahk-light-slate hover:bg-ahk-gold/10 hover:text-ahk-gold'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-ahk-gold focus:outline-none text-2xl focus-visible:outline-ahk-gold"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="lg:hidden bg-ahk-navy/98 backdrop-blur-xl border-t border-ahk-gold/20 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col space-y-2 px-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 text-base font-medium rounded-lg transition-all ${
                  pathname === item.href
                    ? 'bg-gradient-to-r from-ahk-gold to-ahk-gold-light text-ahk-navy shadow-glow'
                    : 'text-ahk-light-slate hover:bg-ahk-gold/10 hover:text-ahk-gold'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
