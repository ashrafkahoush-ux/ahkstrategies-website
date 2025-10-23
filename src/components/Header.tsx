'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Legacy', href: '/pillars/legacy' },
    { label: 'People', href: '/pillars/people' },
    { label: 'Innovation', href: '/pillars/innovation' },
    { label: 'Vision', href: '/pillars/vision' },
    { label: 'Human Intelligence', href: '/pillars/human-intelligence' },
    { label: 'Projects', href: '/pillars/projects' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/40 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-white">
        <Link href="/" className="text-2xl font-bold tracking-wide text-cyan-300 hover:text-white transition-all">
          AHK<span className="text-white">Strategies</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-all ${
                pathname === item.href
                  ? 'text-yellow-400 underline underline-offset-4'
                  : 'text-gray-300 hover:text-yellow-300'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-lg border-t border-gray-800 py-4">
          <div className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`text-base font-medium ${
                  pathname === item.href
                    ? 'text-yellow-400 underline underline-offset-4'
                    : 'text-gray-300 hover:text-yellow-300'
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

export default Header;
