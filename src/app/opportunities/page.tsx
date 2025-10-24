'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '../../contexts/LanguageContext';

export default function OpportunitiesPage() {
  const router = useRouter();
  const { isArabic } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020617] via-[#0a0f2e] to-[#020617] text-white relative">
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
      <section className="relative py-20 px-6">
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
      <section className="max-w-6xl mx-auto px-6 py-8 pb-20">
        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#fde047' }}>
          {mounted && isArabic ? 'مجالات التركيز الرئيسية' : 'Key Focus Areas'}
        </h3>
        <ul style={{ listStyle: 'disc', paddingLeft: mounted && isArabic ? '0' : '1.5rem', paddingRight: mounted && isArabic ? '1.5rem' : '0', color: '#cbd5e1', lineHeight: '1.75' }}>
          {mounted && isArabic ? (
            <>
              <li>تكنولوجيا السيارات الكهربائية والبنية التحتية</li>
              <li>أنظمة القيادة الذاتية</li>
              <li>حلول التصنيع الذكي</li>
              <li>إدارة سلسلة التوريد المستدامة</li>
              <li>تقنيات السيارات المتصلة</li>
            </>
          ) : (
            <>
              <li>Electric Vehicle Technology & Infrastructure</li>
              <li>Autonomous Driving Systems</li>
              <li>Smart Manufacturing Solutions</li>
              <li>Sustainable Supply Chain Management</li>
              <li>Connected Vehicle Technologies</li>
            </>
          )}
        </ul>
      </section>

      {/* Call to Action Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="bg-gradient-to-br from-[#1e1b4b]/60 to-[#0f172a]/60 backdrop-blur-lg border border-white/10 rounded-3xl p-12">
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
    </div>
  );
}
