"use client";

export default function Footer() {
  return (
    <footer 
      style={{
        marginTop: '5rem',
        paddingTop: '3rem',
        paddingBottom: '2rem',
        textAlign: 'center',
        backgroundColor: '#0C111D',
        borderTop: '1px solid',
        borderImage: 'linear-gradient(90deg, transparent, #D4AF37, transparent) 1',
      }}
    >
      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Copyright & Website */}
        <p
          style={{
            fontSize: '0.875rem',
            color: '#cbd5e1',
            marginBottom: '0.75rem',
            fontFamily: 'Lato, sans-serif',
            fontWeight: 300,
          }}
        >
          © 2025 AHKStrategies |{' '}
          <a
            href="https://www.ahkstrategies.net"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#D4AF37',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.textDecoration = 'underline'
              e.currentTarget.style.color = '#fde047'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textDecoration = 'none'
              e.currentTarget.style.color = '#D4AF37'
            }}
          >
            www.ahkstrategies.net
          </a>
        </p>

        {/* Contact Information */}
        <p
          style={{
            fontSize: '0.875rem',
            color: '#cbd5e1',
            marginBottom: '1.5rem',
            fontFamily: 'Lato, sans-serif',
            fontWeight: 300,
          }}
        >
          Cairo, Egypt |{' '}
          <a
            href="mailto:ashraf@ahkstrategies.net"
            style={{
              color: '#D4AF37',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#fde047'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#D4AF37'
            }}
          >
            ashraf@ahkstrategies.net
          </a>
          {' '} | +20 104 078 7571
        </p>

        {/* Social Links */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1.5rem',
            marginTop: '1rem',
          }}
        >
          <span style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Follow Us →</span>
          
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/108551881/admin/dashboard/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'rgba(212, 175, 55, 0.1)',
              border: '1px solid #D4AF37',
              color: '#D4AF37',
              transition: 'all 0.3s',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#D4AF37'
              e.currentTarget.style.color = '#020617'
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(212, 175, 55, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)'
              e.currentTarget.style.color = '#D4AF37'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>

          {/* X (Twitter) */}
          <a
            href="https://x.com/akahoush"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'rgba(212, 175, 55, 0.1)',
              border: '1px solid #D4AF37',
              color: '#D4AF37',
              transition: 'all 0.3s',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#D4AF37'
              e.currentTarget.style.color = '#020617'
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(212, 175, 55, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)'
              e.currentTarget.style.color = '#D4AF37'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

