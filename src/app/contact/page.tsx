'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Mail, Phone, MapPin } from 'lucide-react';
import founderPhoto from '../../../public/assets/images/founder/ashraf kahoush photo.png';

const Contact = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show toast notification (simple alert for now)
    alert('Thank you for reaching out to AHKStrategies. We\'ll get back to you soon.');
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: '',
    });
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
          right: '1.5rem',
          zIndex: 50,
          background: 'linear-gradient(135deg, #facc15 0%, #eab308 100%)',
          boxShadow: '0 4px 14px 0 rgba(250, 204, 21, 0.4)',
        }}
      >
        <span style={{ fontSize: '1.25rem', color: 'white' }}>←</span>
        <span className="text-sm font-bold text-white">Back</span>
      </button>

      {/* Header Section */}
      <section className="text-center py-12 px-6">
        <h1 className="text-5xl md:text-6xl font-semibold text-white tracking-tight" style={{ textShadow: '0 0 10px rgba(255, 215, 0, 0.4)' }}>
          Let&apos;s Create the <span className="text-amber-400">Future Together</span>
        </h1>
      </section>

      {/* Contact Form Section - Glassmorphism */}
      <section className="relative max-w-2xl mx-auto p-10 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl mt-10 mb-20">
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full bg-transparent border border-amber-400/40 text-white placeholder-slate-400 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all"
          />
          
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full bg-transparent border border-amber-400/40 text-white placeholder-slate-400 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all"
          />
          
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full bg-transparent border border-amber-400/40 text-white placeholder-slate-400 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all"
          />
          
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Message"
            required
            className="w-full bg-transparent border border-amber-400/40 text-white placeholder-slate-400 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none resize-none transition-all"
          />
          
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-amber-400 to-yellow-600 text-black font-semibold rounded-xl hover:from-yellow-300 hover:to-amber-400 transition-all duration-300 shadow-lg hover:shadow-amber-400/50"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Divider */}
      <div className="border-t border-white/10 mt-20 mb-12 max-w-4xl mx-auto"></div>

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
            Ashraf Kahoush
          </h3>
          
          <p className="text-center text-slate-300 mt-2">
            Founder & Strategic Visionary — AHKStrategies
          </p>
          
          <p className="text-center text-slate-400 mt-4 max-w-3xl mx-auto leading-relaxed">
            A forward-thinking leader with over two decades of experience across the automotive, mobility, and energy sectors in the MENA region. 
            Renowned for transforming visions into scalable realities, Ashraf blends strategic foresight with human insight to drive growth and innovation.
          </p>
          
          <p className="text-center text-slate-300 mt-3">
            ✉️ <a href="mailto:ashraf@ahkstrategies.net" className="text-amber-400 hover:text-yellow-300 transition-colors">ashraf@ahkstrategies.net</a>
          </p>
        </div>

        {/* Company Contact Section */}
        <div className="flex justify-center flex-wrap gap-6 mt-8 text-slate-300 text-sm">
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
