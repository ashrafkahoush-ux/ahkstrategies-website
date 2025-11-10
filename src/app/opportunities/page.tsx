'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '../../contexts/LanguageContext';
import AnimatedBackground from '@/components/AnimatedBackground';
import Watermark from '@/components/Watermark';

export default function OpportunitiesPage() {
  const router = useRouter();
  const { isArabic } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    React.startTransition(() => {
      setMounted(true);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020617] via-[#0a0f2e] to-[#020617] text-white relative overflow-hidden">
      {/* Letterhead Background Effects */}
      <AnimatedBackground intensity="medium" colorSet="gold-blue" />
      <Watermark />
      
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg shadow-lg hover:shadow-xl hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: mounted && isArabic ? 'auto' : '1.5rem',
          left: mounted && isArabic ? '1.5rem' : 'auto',
          zIndex: 50,
          background: 'linear-gradient(135deg, #facc15 0%, #eab308 100%)',
          boxShadow: '0 4px 14px 0 rgba(250, 204, 21, 0.4)',
        }}
      >
        <span style={{ fontSize: '1.25rem', color: 'white' }}>{mounted && isArabic ? '→' : '←'}</span>
        <span className="text-sm font-bold text-white">{mounted && isArabic ? 'رجوع' : 'Back'}</span>
      </button>

      {/* Hero Section */}
      <section className="relative py-20 px-6 z-10 fade-in-down">
        <div className="max-w-6xl mx-auto text-center">
          <h1 
            className="font-bold mb-8" 
            style={{ 
              color: '#facc15',
              fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
              fontWeight: 'bold',
              textShadow: '0 4px 12px rgba(250, 204, 21, 0.4)' 
            }}
          >
            {mounted && isArabic ? 'اصنع المستقبل معنا' : 'Shape the Future With Us'}
          </h1>
          <p 
            className="text-slate-300 max-w-4xl mx-auto leading-relaxed"
            style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
              lineHeight: '1.75',
              marginBottom: '3rem'
            }}
          >
            {mounted && isArabic 
              ? 'اكتشف الفرص الاستراتيجية في قطاعات السيارات والطاقة والتحول الرقمي والتجارة. انضم إلى AHKStrategies في قيادة الابتكار والنمو في منطقة الشرق الأوسط وشمال إفريقيا وما وراءها.'
              : 'Explore strategic opportunities across automotive, energy, digital, and trade sectors. Join AHKStrategies in driving innovation and growth across the MENA region and beyond.'
            }
          </p>
        </div>
      </section>

      {/* Key Focus Areas Section */}
      <section className="max-w-6xl mx-auto px-6 py-8 pb-20 z-10 relative fade-in-up">
        <div
          style={{
            background: 'rgba(212, 175, 55, 0.05)',
            border: '1px solid rgba(212, 175, 55, 0.25)',
            borderRadius: '1rem',
            padding: '2.5rem 2rem',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          }}
        >
          <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', color: '#fde047', textAlign: 'center' }}>
            {mounted && isArabic ? 'مجالات التركيز الرئيسية' : 'Key Focus Areas'}
          </h3>
          <ul style={{ 
            listStyle: 'disc', 
            paddingLeft: mounted && isArabic ? '0' : '1.5rem', 
            paddingRight: mounted && isArabic ? '1.5rem' : '0', 
            color: '#cbd5e1', 
            lineHeight: '1.75',
            fontSize: '1.125rem',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {mounted && isArabic ? (
              <>
                <li style={{ marginBottom: '0.75rem' }}>تكنولوجيا السيارات الكهربائية والبنية التحتية</li>
                <li style={{ marginBottom: '0.75rem' }}>أنظمة القيادة الذاتية</li>
                <li style={{ marginBottom: '0.75rem' }}>حلول التصنيع الذكي</li>
                <li style={{ marginBottom: '0.75rem' }}>إدارة سلسلة التوريد المستدامة</li>
                <li>تقنيات السيارات المتصلة</li>
              </>
            ) : (
              <>
                <li style={{ marginBottom: '0.75rem' }}>Electric Vehicle Technology & Infrastructure</li>
                <li style={{ marginBottom: '0.75rem' }}>Autonomous Driving Systems</li>
                <li style={{ marginBottom: '0.75rem' }}>Smart Manufacturing Solutions</li>
                <li style={{ marginBottom: '0.75rem' }}>Sustainable Supply Chain Management</li>
                <li>Connected Vehicle Technologies</li>
              </>
            )}
          </ul>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center z-10 relative fade-in-up">
        <div className="bg-gradient-to-br from-[#1e1b4b]/60 to-[#0f172a]/60 backdrop-blur-lg border border-white/10 rounded-3xl p-12"
          style={{
            boxShadow: '0 12px 40px rgba(212, 175, 55, 0.15)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 16px 48px rgba(212, 175, 55, 0.25)'
            e.currentTarget.style.transform = 'translateY(-4px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(212, 175, 55, 0.15)'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            {mounted && isArabic ? (
              <>هل أنت مستعد <span className="text-amber-400">للتعاون؟</span></>
            ) : (
              <>Ready to <span className="text-amber-400">Collaborate?</span></>
            )}
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            {mounted && isArabic
              ? 'سواء كنت تبحث عن فرص شراكة أو فرص استثمارية أو نمو مهني، نحن هنا لاستكشاف كيف يمكننا خلق قيمة معاً.'
              : "Whether you're seeking partnership opportunities, investment prospects, or career growth, we're here to explore how we can create value together."
            }
          </p>
          <button
            onClick={() => router.push('/contact')}
            className="px-8 py-4 bg-gradient-to-r from-amber-400 to-yellow-600 text-black font-bold text-lg rounded-xl hover:from-yellow-300 hover:to-amber-400 transition-all duration-300 shadow-lg hover:shadow-amber-400/50 hover:scale-105"
          >
            {mounted && isArabic ? 'تواصل معنا' : 'Get In Touch'}
          </button>
        </div>
      </section>

      {/* Letterhead CSS Animations */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }

        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
