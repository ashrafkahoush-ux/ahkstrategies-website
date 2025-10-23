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
      <section 
        className="max-w-screen-xl mx-auto px-6 py-16"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '4rem 1.5rem',
        }}
      >
        <div className="max-w-2xl mx-auto mb-20">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-slate-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                placeholder="Your full name"
              />
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                placeholder="+20 XXX XXX XXXX"
              />
            </div>

            {/* Inquiry Type */}
            <div>
              <label htmlFor="inquiryType" className="block text-sm font-medium text-slate-300 mb-2">
                Inquiry Type
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
              >
                <option value="General Question">General Question</option>
                <option value="Business Opportunity">Business Opportunity</option>
                <option value="Partnership">Partnership</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all resize-none"
                placeholder="Tell us about your inquiry..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-yellow-500 hover:to-amber-700 transition-all duration-300 transform hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(to right, #facc15, #d97706)',
                boxShadow: '0 4px 14px 0 rgba(250, 204, 21, 0.4)',
              }}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Founder & Company Info Section */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left Column - Founder */}
          <div className="text-center space-y-4">
            <Image
              src={founderPhoto}
              alt="Ashraf Kahoush, Founder of AHK Strategies"
              className="rounded-2xl shadow-lg max-w-[260px] mx-auto"
            />
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Ashraf Kahoush</h3>
              <p className="text-slate-400">Founder & Strategic Visionary</p>
              <p className="text-slate-300 font-medium">AHK Strategies</p>
              <a 
                href="mailto:ashraf@ahkstrategies.net"
                className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                ashraf@ahkstrategies.net
              </a>
            </div>
          </div>

          {/* Right Column - Company Contact */}
          <div className="flex flex-col justify-center space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">Company Contact</h3>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-yellow-400/10 rounded-lg">
                <Mail className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1">Email</p>
                <a 
                  href="mailto:info@ahkstrategies.net"
                  className="text-white hover:text-yellow-400 transition-colors font-medium"
                >
                  info@ahkstrategies.net
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-yellow-400/10 rounded-lg">
                <Phone className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1">Phone</p>
                <a 
                  href="tel:+201040787571"
                  className="text-white hover:text-yellow-400 transition-colors font-medium"
                >
                  +20 104 078 7571
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-yellow-400/10 rounded-lg">
                <MapPin className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1">Location</p>
                <p className="text-white font-medium">Cairo – Egypt</p>
              </div>
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
