'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '../contexts/LanguageContext'

// Animated AHK Logo Component
function AnimatedAHKLogo() {
  return (
    <svg 
      width="40" 
      height="40" 
      viewBox="0 0 100 100" 
      className="animated-ahk-logo"
      style={{
        filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.6))',
      }}
    >
      {/* A */}
      <path
        d="M 20 70 L 30 30 L 40 70 M 25 55 L 35 55"
        stroke="#D4AF37"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="letter-a"
      />
      {/* H */}
      <path
        d="M 45 30 L 45 70 M 55 30 L 55 70 M 45 50 L 55 50"
        stroke="#00D9FF"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="letter-h"
      />
      {/* K */}
      <path
        d="M 60 30 L 60 70 M 60 50 L 75 30 M 60 50 L 75 70"
        stroke="#A78BFA"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="letter-k"
      />
      
      <style jsx>{`
        @keyframes pulse-gold {
          0%, 100% { opacity: 1; filter: drop-shadow(0 0 4px rgba(212, 175, 55, 0.8)); }
          50% { opacity: 0.7; filter: drop-shadow(0 0 8px rgba(212, 175, 55, 1)); }
        }
        @keyframes pulse-cyan {
          0%, 100% { opacity: 1; filter: drop-shadow(0 0 4px rgba(0, 217, 255, 0.8)); }
          50% { opacity: 0.7; filter: drop-shadow(0 0 8px rgba(0, 217, 255, 1)); }
        }
        @keyframes pulse-purple {
          0%, 100% { opacity: 1; filter: drop-shadow(0 0 4px rgba(167, 139, 250, 0.8)); }
          50% { opacity: 0.7; filter: drop-shadow(0 0 8px rgba(167, 139, 250, 1)); }
        }
        .letter-a {
          animation: pulse-gold 2s ease-in-out infinite;
        }
        .letter-h {
          animation: pulse-cyan 2s ease-in-out infinite 0.3s;
        }
        .letter-k {
          animation: pulse-purple 2s ease-in-out infinite 0.6s;
        }
      `}</style>
    </svg>
  )
}

const LINKS = [
  { href: '/pillars/vision', label: 'Vision', labelAr: 'الرؤية' },
  { href: '/pillars/legacy', label: 'Legacy', labelAr: 'الإرث' },
  { href: '/pillars/human-intelligence', label: 'Human Intelligence', labelAr: 'الذكاء البشري' },
  { href: '/pillars/innovation', label: 'Innovation', labelAr: 'الابتكار' },
  { 
    href: '/services', 
    label: 'Services', 
    labelAr: 'الخدمات',
    dropdown: [
      { href: '/services/boutique', label: 'AHK Boutique', labelAr: 'بوتيك AHK' },
      { href: '/services/launchpad', label: 'AHK LaunchPad', labelAr: 'منصة الإطلاق AHK' },
      { href: '/services/studios', label: 'AHK Studios', labelAr: 'استوديوهات AHK' },
      { href: '/services/academy', label: 'AHK Academy', labelAr: 'أكاديمية AHK' },
      { href: '/services/consulting-hub', label: 'AHK Consulting Hub', labelAr: 'مركز الاستشارات AHK' },
    ]
  },
  { href: '/projects', label: 'Projects', labelAr: 'المشاريع',
    dropdown: [
      { href: '/projects/divisions/automotive', label: 'Automotive Division', labelAr: 'قسم السيارات' },
      { href: '/projects/divisions/energy', label: 'Energy Division', labelAr: 'قسم الطاقة' },
      { href: '/projects/divisions/mobility', label: 'Mobility Division', labelAr: 'قسم التنقل' },
      { href: '/projects/divisions/technology', label: 'Technology Division', labelAr: 'قسم التكنولوجيا' },
      { href: '/projects/divisions/consulting', label: 'Consulting Division', labelAr: 'قسم الاستشارات' },
    ]
  },
  { href: '/emma', label: 'EMMA', labelAr: 'EMMA',
    dropdown: [
      { href: '/mega-team?tab=emma', label: 'MEGA-EMMA', labelAr: 'MEGA-EMMA' },
      { href: '/mega-team?tab=eric', label: 'MEGA-ERIC', labelAr: 'MEGA-ERIC' },
    ]
  },
  { href: '/opportunities', label: 'Opportunities', labelAr: 'الفرص',
    dropdown: [
      { href: '/projects/divisions/automotive/qvan', label: 'Q - Quantum Van', labelAr: 'Q - كوانتم فان' },
      { href: '/projects/divisions/automotive/moto', label: 'WOW - Wheels on Wings', labelAr: 'WOW - عجلات على أجنحة' },
      { href: '/projects/divisions/automotive/dvm', label: 'DVM - Dual Vector Model', labelAr: 'DVM - نموذج المتجه المزدوج' },
    ]
  },
  { href: '/about-us', label: 'About Us', labelAr: 'من نحن' },
]

export default function NavBar() {
  const pathname = usePathname()
  const { isArabic, toggleLanguage } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch by not rendering interactive elements until mounted
  if (!mounted) {
    return (
      <header 
        className="sticky top-0 z-50 backdrop-blur-lg border-b"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          backdropFilter: 'blur(12px)',
          background: 'linear-gradient(135deg, rgba(10, 15, 30, 0.95) 0%, rgba(15, 23, 42, 0.95) 100%)',
          borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        }}
      >
        <nav 
          className="mx-auto max-w-7xl px-6 flex h-18 items-center justify-between"
          style={{
            maxWidth: '80rem',
            margin: '0 auto',
            padding: '0 1.5rem',
            display: 'flex',
            height: '4.5rem',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Link 
            href="/"
            className="flex items-center gap-3"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none',
            }}
          >
            <div style={{ width: '40px', height: '40px' }}></div>
            <div 
              className="text-white text-xl font-semibold tracking-wide"
              style={{
                color: 'white',
                fontSize: '1.25rem',
                fontWeight: 600,
                letterSpacing: '0.025em',
              }}
            >
              AHK<span style={{ color: '#D4AF37' }}>Strategies</span>
            </div>
          </Link>
        </nav>
      </header>
    )
  }

  return (
    <header 
      className="sticky top-0 z-50 backdrop-blur-lg border-b"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'blur(12px)',
        background: 'linear-gradient(135deg, rgba(10, 15, 30, 0.95) 0%, rgba(15, 23, 42, 0.95) 100%)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
      }}
    >
      <nav 
        className="mx-auto max-w-7xl px-6 flex h-18 items-center justify-between"
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          height: '4.5rem',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link 
          href="/"
          className="flex items-center gap-3 hover:scale-105 transition-transform duration-300"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
            transition: 'transform 0.3s ease',
          }}
        >
          <AnimatedAHKLogo />
          <div 
            className="text-white text-xl font-bold tracking-wide"
            style={{
              color: 'white',
              fontSize: '1.4rem',
              fontWeight: 700,
              letterSpacing: '0.025em',
              textShadow: '0 2px 10px rgba(212, 175, 55, 0.3)',
            }}
          >
            {mounted ? (
              isArabic ? (
                <>استراتيجيات <span style={{ 
                  background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>AHK</span></>
              ) : (
                <>AHK<span style={{ 
                  background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>Strategies</span></>
              )
            ) : (
              <>AHK<span style={{ 
                background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Strategies</span></>
            )}
          </div>
        </Link>

        <ul 
          className="flex gap-3 sm:gap-5"
          style={{
            display: 'flex',
            gap: '0.75rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            flexDirection: mounted && isArabic ? 'row-reverse' : 'row',
          }}
        >
          {LINKS.map((link) => {
            const active = pathname === link.href || (link.dropdown && link.dropdown.some(sub => pathname === sub.href))
            const hasDropdown = link.dropdown && link.dropdown.length > 0
            
            return (
              <li 
                key={link.href}
                style={{ position: 'relative' }}
                onMouseEnter={() => hasDropdown && setOpenDropdown(link.href)}
                onMouseLeave={() => hasDropdown && setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="block px-3 py-1.5 rounded-md text-sm font-medium text-slate-200 transition-all duration-300 ease-out hover:scale-110"
                  style={{
                    padding: '0.375rem 0.75rem',
                    borderRadius: '0.375rem',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                    display: 'inline-block',
                    transition: 'all 0.3s ease-out',
                    backgroundColor: active ? 'rgba(250, 204, 21, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                    color: active ? '#fde047' : '#e2e8f0',
                    boxShadow: active ? 'inset 0 2px 4px 0 rgba(234, 179, 8, 0.2)' : 'none',
                    transform: 'scale(1)',
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      e.currentTarget.style.backgroundColor = 'rgba(250, 204, 21, 0.15)'
                      e.currentTarget.style.color = '#fde047'
                    }
                    e.currentTarget.style.transform = 'scale(1.1)'
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'
                      e.currentTarget.style.color = '#e2e8f0'
                    }
                    e.currentTarget.style.transform = 'scale(1)'
                  }}
                >
                  {mounted && isArabic ? link.labelAr : link.label}
                </Link>

                {/* Dropdown Menu */}
                {hasDropdown && openDropdown === link.href && (
                  <div
                    className="animate-fadeIn"
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      marginTop: '0',
                      paddingTop: '0.75rem',
                      backgroundColor: 'rgba(10, 15, 30, 0.95)',
                      backdropFilter: 'blur(12px)',
                      borderRadius: '0.5rem',
                      border: '1px solid rgba(212, 175, 55, 0.3)',
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5), 0 0 15px rgba(212, 175, 55, 0.1)',
                      minWidth: '220px',
                      zIndex: 100,
                      padding: '0.5rem',
                      animation: 'slideDown 0.2s ease-out',
                    }}
                    onMouseEnter={() => setOpenDropdown(link.href)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {link.dropdown.map((subLink, index) => (
                      <Link
                        key={subLink.href}
                        href={subLink.href}
                        style={{
                          display: 'block',
                          padding: '0.75rem 1rem',
                          fontSize: '0.875rem',
                          color: pathname === subLink.href ? '#fde047' : '#e2e8f0',
                          textDecoration: 'none',
                          borderRadius: '0.375rem',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          backgroundColor: pathname === subLink.href ? 'rgba(250, 204, 21, 0.15)' : 'transparent',
                          marginBottom: index < link.dropdown.length - 1 ? '0.25rem' : '0',
                          position: 'relative',
                          overflow: 'hidden',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(250, 204, 21, 0.15)'
                          e.currentTarget.style.color = '#fde047'
                          e.currentTarget.style.transform = 'translateX(4px)'
                          e.currentTarget.style.paddingLeft = '1.25rem'
                          e.currentTarget.style.boxShadow = '0 2px 8px rgba(212, 175, 55, 0.2)'
                        }}
                        onMouseLeave={(e) => {
                          if (pathname !== subLink.href) {
                            e.currentTarget.style.backgroundColor = 'transparent'
                            e.currentTarget.style.color = '#e2e8f0'
                          }
                          e.currentTarget.style.transform = 'translateX(0)'
                          e.currentTarget.style.paddingLeft = '1rem'
                          e.currentTarget.style.boxShadow = 'none'
                        }}
                      >
                        {mounted && isArabic ? subLink.labelAr : subLink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            )
          })}
        </ul>

        {mounted && (
          <div 
            className="flex gap-2"
            style={{
              display: 'flex',
              gap: '0.5rem',
            }}
          >
            <button 
              onClick={() => toggleLanguage('en')}
              style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                border: !isArabic ? '2px solid #facc15' : '2px solid rgba(255, 255, 255, 0.3)',
                color: !isArabic ? '#facc15' : '#ffffff',
                padding: '0.25rem 0.75rem',
                borderRadius: '0.375rem',
                background: !isArabic ? 'rgba(250, 204, 21, 0.1)' : 'transparent',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              EN
            </button>
            <button 
              onClick={() => toggleLanguage('ar')}
              style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                border: isArabic ? '2px solid #facc15' : '2px solid rgba(255, 255, 255, 0.3)',
                color: isArabic ? '#facc15' : '#ffffff',
                padding: '0.25rem 0.75rem',
                borderRadius: '0.375rem',
                background: isArabic ? 'rgba(250, 204, 21, 0.1)' : 'transparent',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              AR
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
