'use client';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    company: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Vision', href: '/pillars/vision' },
      { label: 'Legacy', href: '/pillars/legacy' },
      { label: 'Innovation', href: '/pillars/innovation' },
    ],
    services: [
      { label: 'Consulting Hub', href: '/services/consulting-hub' },
      { label: 'LaunchPad', href: '/services/launchpad' },
      { label: 'Studios', href: '/services/studios' },
      { label: 'Academy', href: '/services/academy' },
      { label: 'Boutique', href: '/services/boutique' },
    ],
    projects: [
      { label: 'AHK Projects', href: '/projects' },
      { label: 'Opportunities', href: '/opportunities' },
    ],
    contact: [
      { label: 'Contact Us', href: '/contact' },
    ],
  };

  return (
    <footer className="relative mt-20 border-t border-ahk-gold/20 bg-gradient-to-b from-ahk-navy/50 to-ahk-navy-dark/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-14 h-14 bg-gradient-to-br from-ahk-gold to-ahk-gold-light rounded-xl overflow-hidden shadow-glow">
                <video autoPlay loop muted playsInline aria-hidden="true" className="w-full h-full object-cover">
                  <source src="/assets/ai_images/3D-animated-logo.mp4" type="video/mp4" />
                </video>
              </div>
              <div>
                <h3 className="text-xl font-black font-display bg-gradient-to-r from-ahk-gold to-ahk-gold-light bg-clip-text text-transparent">AHK STRATEGIES</h3>
                <p className="text-xs font-semibold tracking-wider uppercase text-ahk-gold-light/80">Strategic Dashboard</p>
              </div>
            </div>
            <p className="text-ahk-light-slate/70 text-sm leading-relaxed mb-4">Where Human Intuition and AI Move as One. Empowering strategic growth through intelligence, innovation, and execution excellence.</p>
          </div>
          <div>
            <h4 className="text-ahk-gold font-bold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}><Link href={link.href} className="text-ahk-light-slate/70 hover:text-ahk-gold text-sm transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-ahk-gold font-bold mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}><Link href={link.href} className="text-ahk-light-slate/70 hover:text-ahk-gold text-sm transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-ahk-gold font-bold mb-4 text-sm uppercase tracking-wider">Projects</h4>
            <ul className="space-y-2 mb-6">
              {footerLinks.projects.map((link) => (
                <li key={link.href}><Link href={link.href} className="text-ahk-light-slate/70 hover:text-ahk-gold text-sm transition-colors">{link.label}</Link></li>
              ))}
            </ul>
            <h4 className="text-ahk-gold font-bold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2">
              {footerLinks.contact.map((link) => (
                <li key={link.href}><Link href={link.href} className="text-ahk-light-slate/70 hover:text-ahk-gold text-sm transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-ahk-gold/20 bg-ahk-navy-dark/60">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-ahk-light-slate/60 text-sm">© {currentYear} AHKStrategies | <a href="https://www.ahkstrategies.net" className="text-ahk-gold hover:text-ahk-gold-light transition-colors">www.ahkstrategies.net</a></p>
            <p className="text-ahk-light-slate/60 text-sm">Cairo, Egypt | <a href="mailto:ashraf@ahkstrategies.net" className="text-ahk-gold hover:text-ahk-gold-light transition-colors">ashraf@ahkstrategies.net</a> | +20 104 078 7571</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
