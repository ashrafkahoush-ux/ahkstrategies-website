'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const services = [
  {
    id: 'boutique',
    title: 'AHK Boutique',
    titleAr: 'بوتيك AHK',
    description: 'AI-driven market intelligence, executive newsletters, and premium industry reports.',
    descriptionAr: 'ذكاء السوق المدعوم بالذكاء الاصطناعي والنشرات التنفيذية وتقارير الصناعة المتميزة.',
    icon: '🎯',
    href: '/services/boutique',
  },
  {
    id: 'launchpad',
    title: 'AHK LaunchPad',
    titleAr: 'منصة الإطلاق AHK',
    description: 'Automation, CRM, and workflow systems for SME transformation.',
    descriptionAr: 'الأتمتة وإدارة علاقات العملاء وأنظمة سير العمل لتحويل الشركات الصغيرة والمتوسطة.',
    icon: '🚀',
    href: '/services/launchpad',
  },
  {
    id: 'studios',
    title: 'AHK Studios',
    titleAr: 'استوديوهات AHK',
    description: 'Creative storytelling and design for brands seeking digital impact.',
    descriptionAr: 'سرد القصص الإبداعية والتصميم للعلامات التجارية التي تسعى لتحقيق تأثير رقمي.',
    icon: '🎨',
    href: '/services/studios',
  },
  {
    id: 'academy',
    title: 'AHK Academy',
    titleAr: 'أكاديمية AHK',
    description: 'Professional training and mentorship to develop future-ready talent.',
    descriptionAr: 'التدريب المهني والإرشاد لتطوير المواهب الجاهزة للمستقبل.',
    icon: '🎓',
    href: '/services/academy',
  },
  {
    id: 'consulting',
    title: 'AHK Consulting Hub',
    titleAr: 'مركز الاستشارات AHK',
    description: 'Strategic advisory and cross-border partnership development.',
    descriptionAr: 'الاستشارات الاستراتيجية وتطوير الشراكات عبر الحدود.',
    icon: '💼',
    href: '/services/consulting-hub',
  },
]

export default function ServicesPage() {
  const router = useRouter()

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#020617' }}>
      {/* Header Section */}
      <section
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(58,78,122,0.15) 100%)',
          paddingTop: '5rem',
          paddingBottom: '3rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Faint Logo Background */}
        <div
          style={{
            position: 'absolute',
            top: '2rem',
            right: '2rem',
            opacity: 0.05,
            fontSize: '8rem',
            color: '#D4AF37',
            fontWeight: 'bold',
            pointerEvents: 'none',
          }}
        >
          AHK
        </div>

        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 'bold',
              color: '#D4AF37',
              marginBottom: '1.5rem',
              textShadow: '0 2px 10px rgba(212, 175, 55, 0.3)',
            }}
          >
            Our Services
          </h1>
          
          <div
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              lineHeight: '1.8',
              color: '#e2e8f0',
              fontWeight: 300,
            }}
          >
            <p style={{ marginBottom: '1rem' }}>
              At <span style={{ color: '#D4AF37', fontWeight: 600 }}>AHKStrategies</span>, 
              our services are built on a simple principle — <strong>intelligence transforms growth</strong>.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Each of our five pillars delivers practical, AI-powered solutions designed to help 
              businesses adapt, innovate, and expand across the MENA and European markets.
            </p>
            <p>
              From market insight to automation and content creation, we combine technology and 
              human expertise to deliver measurable impact.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '4rem 2rem',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {services.map((service) => (
            <div
              key={service.id}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                borderRadius: '1rem',
                padding: '2rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.6)'
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(212, 175, 55, 0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.2)'
                e.currentTarget.style.boxShadow = 'none'
              }}
              onClick={() => router.push(service.href)}
            >
              {/* Icon */}
              <div
                style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                  filter: 'grayscale(0.3)',
                }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#D4AF37',
                  marginBottom: '1rem',
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#cbd5e1',
                  marginBottom: '1.5rem',
                }}
              >
                {service.description}
              </p>

              {/* CTA Button */}
              <button
                style={{
                  backgroundColor: 'rgba(212, 175, 55, 0.1)',
                  border: '1px solid #D4AF37',
                  color: '#D4AF37',
                  padding: '0.625rem 1.5rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#D4AF37'
                  e.currentTarget.style.color = '#020617'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)'
                  e.currentTarget.style.color = '#D4AF37'
                }}
              >
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        style={{
          maxWidth: '900px',
          margin: '3rem auto 5rem',
          padding: '0 2rem',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(212, 175, 55, 0.05)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            borderRadius: '1rem',
            padding: '3rem 2rem',
          }}
        >
          <h2
            style={{
              fontSize: '1.875rem',
              fontWeight: 700,
              color: '#D4AF37',
              marginBottom: '1rem',
            }}
          >
            Ready to Transform Your Business?
          </h2>
          <p
            style={{
              fontSize: '1.125rem',
              color: '#cbd5e1',
              marginBottom: '2rem',
            }}
          >
            Let's discuss how AHKStrategies can help you navigate the future with intelligence and impact.
          </p>
          <button
            onClick={() => router.push('/contact')}
            style={{
              backgroundColor: '#D4AF37',
              color: '#020617',
              padding: '0.875rem 2.5rem',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)'
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(212, 175, 55, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  )
}
