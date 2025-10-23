'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/pillars/legacy', label: 'Legacy' },
  { href: '/pillars/people', label: 'People' },
  { href: '/pillars/innovation', label: 'Innovation' },
  { href: '/pillars/vision', label: 'Vision' },
  { href: '/pillars/human-intelligence', label: 'Human Intelligence' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export default function NavBar() {
  const pathname = usePathname()

  return (
    <header 
      className="sticky top-0 z-50 backdrop-blur-lg bg-[#020617]/70 border-b border-white/10"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'blur(12px)',
        backgroundColor: 'rgba(2, 6, 23, 0.7)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <nav 
        className="mx-auto max-w-7xl px-6 flex h-16 items-center justify-between"
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          height: '4rem',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div 
          className="text-white text-xl font-semibold tracking-wide"
          style={{
            color: 'white',
            fontSize: '1.25rem',
            fontWeight: 600,
            letterSpacing: '0.025em',
          }}
        >
          AHK<span style={{ color: '#facc15' }}>Strategies</span>
        </div>

        <ul 
          className="flex gap-3 sm:gap-5"
          style={{
            display: 'flex',
            gap: '0.75rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          {LINKS.map(({ href, label }) => {
            const active = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                    active
                      ? 'bg-yellow-400/20 text-yellow-300 shadow-inner shadow-yellow-500/20'
                      : 'bg-white/5 text-slate-200 hover:bg-white/10 hover:text-yellow-300'
                  }`}
                  style={{
                    padding: '0.375rem 0.75rem',
                    borderRadius: '0.375rem',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    transition: 'all 0.2s',
                    textDecoration: 'none',
                    display: 'inline-block',
                    ...(active ? {
                      backgroundColor: 'rgba(250, 204, 21, 0.2)',
                      color: '#fde047',
                      boxShadow: 'inset 0 2px 4px 0 rgba(234, 179, 8, 0.2)',
                    } : {
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: '#e2e8f0',
                    })
                  }}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div 
          className="flex gap-2"
          style={{
            display: 'flex',
            gap: '0.5rem',
          }}
        >
          <button 
            className="text-xs text-slate-400 border border-slate-700 px-2 py-0.5 rounded hover:text-yellow-400 hover:border-yellow-400"
            style={{
              fontSize: '0.75rem',
              color: '#94a3b8',
              border: '1px solid #334155',
              padding: '0.125rem 0.5rem',
              borderRadius: '0.25rem',
              background: 'transparent',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            EN
          </button>
          <button 
            className="text-xs text-slate-400 border border-slate-700 px-2 py-0.5 rounded hover:text-yellow-400 hover:border-yellow-400"
            style={{
              fontSize: '0.75rem',
              color: '#94a3b8',
              border: '1px solid #334155',
              padding: '0.125rem 0.5rem',
              borderRadius: '0.25rem',
              background: 'transparent',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            AR
          </button>
        </div>
      </nav>
    </header>
  )
}
