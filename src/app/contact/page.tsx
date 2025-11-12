'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import founderPhoto from '../../../public/assets/core/founder/ashraf kahoush photo.png';

const Contact = () => {
  const router = useRouter();
  const { isArabic } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000814] via-[#001021] to-[#010615] text-white relative">
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

      {/* Header Section */}
      <section className="text-center py-20 px-6">
        <h1 
          className="text-5xl md:text-6xl font-bold tracking-tight" 
          style={{ 
            color: '#facc15',
            fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
            fontWeight: 'bold',
            textShadow: '0 4px 12px rgba(250, 204, 21, 0.4)' 
          }}
        >
          {mounted && isArabic ? 'لنصنع المستقبل معاً' : "Let's Create the Future Together"}
        </h1>
      </section>

      {/* Founder Section */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="text-center">
          {/* Founder Photo with Floating Animation */}
          <div className="flex justify-center mb-8">
            <Image
              src={founderPhoto}
              alt="Ashraf Kahoush — Founder & Strategic Visionary"
              className="rounded-2xl shadow-xl border border-amber-400/30 max-w-[260px] mx-auto object-cover aspect-[3/4] opacity-95 hover:scale-[1.03] transition-transform duration-500 animate-float"
              width={260}
              height={347}
              style={{ width: '260px', height: '347px', objectFit: 'cover' }}
            />
          </div>

          {/* Founder Bio */}
          <h3 className="text-2xl font-semibold text-amber-400 text-center mt-6">
            {mounted && isArabic ? 'أشرف قاحوش' : 'Ashraf Kahoush'}
          </h3>
          
          <p className="text-center text-slate-300 mt-2">
            {mounted && isArabic 
              ? 'المؤسس وصاحب الرؤية الاستراتيجية — AHKStrategies'
              : 'Founder & Strategic Visionary — AHKStrategies'
            }
          </p>
          
          <p 
            className="text-center mt-4 max-w-3xl mx-auto leading-relaxed"
            style={{ 
              fontSize: '1.125rem',
              lineHeight: '1.75',
              color: '#cbd5e1'
            }}
          >
            {mounted && isArabic
              ? 'قائد ذو تفكير استشرافي مع أكثر من عقدين من الخبرة في قطاعات السيارات والطاقة والاستثمار ,في منطقة الشرق الأوسط وشمال إفريقيا. معروف بتحويل الرؤى إلى حقائق قابلة للتطوير، يمزج أشرف بين البصيرة الاستراتيجية والرؤية البشرية لدفع النمو والابتكار.'
              : 'A forward-thinking leader with over two decades of experience across the automotive, mobility, and energy sectors in the MENA region. Renowned for transforming visions into scalable realities, Ashraf blends strategic foresight with human insight to drive growth and innovation.'
            }
          </p>
        </div>
      </section>

      {/* Contact Us Form Section - Centered Compact Card with 3D Frame */}
      <section className="flex justify-center px-6 pb-16">
        <div 
          className="overflow-hidden relative"
          style={{
            maxWidth: '700px',
            width: '100%',
            padding: '8px',
            background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.6) 0%, rgba(30, 41, 59, 0.4) 100%)',
            borderRadius: '24px',
            boxShadow: `
              inset 4px 4px 12px rgba(0, 0, 0, 0.5),
              inset -4px -4px 12px rgba(51, 65, 85, 0.3),
              0 8px 32px rgba(0, 0, 0, 0.4)
            `
          }}
        >
          <div 
            className="rounded-2xl shadow-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%)',
              width: '100%',
              border: '1px solid rgba(71, 85, 105, 0.2)'
            }}
          >
          {/* Contact Us Title */}
          <div className="text-center pt-10 pb-8 px-6">
            <h2 
              className="font-bold"
              style={{
                color: '#facc15',
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                fontWeight: 'bold',
                letterSpacing: '0.05em',
                textShadow: '0 2px 8px rgba(250, 204, 21, 0.3)'
              }}
            >
              {mounted && isArabic ? 'اتصل بنا' : 'Contact Us'}
            </h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-8 md:px-12 pb-10 space-y-5">
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder={mounted && isArabic ? 'الاسم' : 'Name'}
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
                style={{
                  background: 'rgba(30, 41, 59, 0.8)',
                  border: '1px solid rgba(71, 85, 105, 0.4)',
                  fontFamily: 'inherit',
                  fontSize: '1rem',
                  lineHeight: '1.5',
                  textAlign: mounted && isArabic ? 'right' : 'left'
                }}
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder={mounted && isArabic ? 'البريد الإلكتروني' : 'Email'}
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
                style={{
                  background: 'rgba(30, 41, 59, 0.8)',
                  border: '1px solid rgba(71, 85, 105, 0.4)',
                  fontFamily: 'inherit',
                  fontSize: '1rem',
                  lineHeight: '1.5',
                  textAlign: mounted && isArabic ? 'right' : 'left'
                }}
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder={mounted && isArabic ? 'الرسالة' : 'Message'}
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-6 py-4 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 resize-none"
                style={{
                  background: 'rgba(30, 41, 59, 0.8)',
                  border: '1px solid rgba(71, 85, 105, 0.4)',
                  fontFamily: 'inherit',
                  fontSize: '1rem',
                  lineHeight: '1.5',
                  textAlign: mounted && isArabic ? 'right' : 'left'
                }}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-3">
              <button
                type="submit"
                className="w-full py-4 font-bold text-white text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
                  boxShadow: '0 8px 24px rgba(168, 85, 247, 0.4)',
                  fontFamily: 'inherit',
                  letterSpacing: '0.025em'
                }}
              >
                {mounted && isArabic ? 'إرسال الرسالة' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
        </div>
      </section>

      {/* Company Contact Section - Bottom of Page */}
      <section className="flex justify-center px-6 pb-16 pt-12">
        <div className="flex justify-center flex-wrap gap-6 text-slate-300 text-sm">
          <a href="mailto:info@ahkstrategies.net" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
            <Mail className="text-amber-400" size={18}/>
            info@ahkstrategies.net
          </a>
          
          <a href="tel:+201040787571" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
            <Phone className="text-amber-400" size={18}/>
            +20 104 078 7571
          </a>
          
          <span className="flex items-center gap-2">
            <MapPin className="text-amber-400" size={18}/>
            Cairo, Egypt
          </span>
        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Contact;
