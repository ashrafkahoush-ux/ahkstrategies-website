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
    inquiryType: 'General Question',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      inquiryType: 'General Question',
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white relative">
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

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          style={{ objectFit: 'cover' }}
        >
          <source src="/assets/backgrounds/home2.mp4" type="video/mp4" />
        </video>
        
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#020617]"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4), #020617)',
          }}
        />
        
        <div 
          className="relative z-10 text-center px-6 max-w-5xl animate-fade-in"
          style={{
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            padding: '0 1.5rem',
            maxWidth: '64rem',
            animation: 'fadeIn 1s ease-in-out',
          }}
        >
          <h1 
            className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-lg"
            style={{
              fontSize: 'clamp(3rem, 6vw, 4.5rem)',
              fontWeight: 'bold',
              marginBottom: '1rem',
              textShadow: '0 4px 12px rgba(0,0,0,0.8)',
            }}
          >
            Let&apos;s Create the{' '}
            <span style={{ color: '#facc15' }}>Future Together</span>
          </h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-2xl mx-auto py-12 px-6">
        {/* Glassmorphism Form Container */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg p-8 hover:border-yellow-400/30 transition-all duration-300">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-yellow-400 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all"
                placeholder="Your full name"
              />
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-yellow-400 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-yellow-400 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all"
                placeholder="+20 XXX XXX XXXX"
              />
            </div>

            {/* Inquiry Type */}
            <div>
              <label htmlFor="inquiryType" className="block text-sm font-medium text-yellow-400 mb-2">
                Inquiry Type
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all"
              >
                <option value="General Question" className="bg-[#020617] text-white">General Question</option>
                <option value="Business Opportunity" className="bg-[#020617] text-white">Business Opportunity</option>
                <option value="Partnership" className="bg-[#020617] text-white">Partnership</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-yellow-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all resize-none"
                placeholder="Tell us about your inquiry..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 w-full bg-gradient-to-r from-yellow-400 to-amber-600 text-black font-semibold py-3 rounded-xl hover:from-yellow-300 hover:to-amber-500 transition-all duration-300 shadow-lg hover:shadow-yellow-400/50"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-16 mb-12"></div>

        {/* Founder Section */}
        <div className="text-center space-y-6 py-8">
          {/* Founder Photo - Passport Size */}
          <div className="flex justify-center mb-8">
            <Image
              src={founderPhoto}
              alt="Ashraf Kahoush, Founder of AHKStrategies"
              width={200}
              height={250}
              className="rounded-2xl shadow-2xl border border-yellow-500/30 hover:scale-105 transition-transform duration-300 object-cover"
              style={{ width: '200px', height: '250px', objectFit: 'cover' }}
            />
          </div>
          
          {/* Founder Info - Unified Typography */}
          <div className="space-y-4 px-6 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-yellow-400 tracking-wide">Ashraf Kahoush</h2>
            
            <p className="text-lg text-slate-300 font-medium">
              Founder & Strategic Visionary, AHKStrategies
            </p>
            
            <p className="text-base text-slate-300 leading-relaxed">
              A forward-thinking leader with over two decades of experience across the automotive, mobility, and energy sectors in the MENA region. 
              Renowned for transforming visions into scalable realities, Ashraf blends strategic foresight with human insight to drive growth and innovation.
            </p>
            
            <div className="pt-4">
              <a 
                href="mailto:ashraf@ahkstrategies.net"
                className="inline-flex items-center gap-2 text-base text-slate-300 hover:text-yellow-400 transition-all"
              >
                <Mail className="w-5 h-5 text-yellow-400" />
                <span>ashraf@ahkstrategies.net</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider before footer */}
        <div className="border-t border-white/10 mt-16 mb-8"></div>

        {/* Company Contact Footer - Horizontal Layout */}
        <div className="py-8">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-8 text-center">Company Contact</h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <a 
              href="mailto:info@ahkstrategies.net"
              className="flex items-center gap-3 text-slate-300 hover:text-yellow-400 transition-all group"
            >
              <div className="p-2 bg-yellow-400/10 rounded-lg group-hover:bg-yellow-400/20 transition-all">
                <Mail className="w-5 h-5 text-yellow-400" />
              </div>
              <span className="text-sm font-medium">info@ahkstrategies.net</span>
            </a>
            
            <a 
              href="tel:+201040787571"
              className="flex items-center gap-3 text-slate-300 hover:text-yellow-400 transition-all group"
            >
              <div className="p-2 bg-yellow-400/10 rounded-lg group-hover:bg-yellow-400/20 transition-all">
                <Phone className="w-5 h-5 text-yellow-400" />
              </div>
              <span className="text-sm font-medium">+20 104 078 7571</span>
            </a>
            
            <div className="flex items-center gap-3 text-slate-300">
              <div className="p-2 bg-yellow-400/10 rounded-lg">
                <MapPin className="w-5 h-5 text-yellow-400" />
              </div>
              <span className="text-sm font-medium">Cairo, Egypt</span>
            </div>
          </div>
        </div>
      </section>

      {/* Add fadeIn animation */}
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
      `}</style>
    </div>
  );
};

export default Contact;
