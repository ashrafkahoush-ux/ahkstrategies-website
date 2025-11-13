'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '../../contexts/LanguageContext';

export default function ContactPage() {
  const router = useRouter();
  const { isArabic } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/30 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-6"
          >
            <Sparkles className="w-16 h-16 text-amber-400 animate-pulse" />
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-amber-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {mounted && isArabic ? 'لنبدأ المحادثة' : "Let's Start a Conversation"}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {mounted && isArabic 
              ? 'حوّل رؤيتك إلى واقع. تواصل معنا اليوم وابدأ رحلتك نحو التميز الاستراتيجي.'
              : 'Transform your vision into reality. Reach out today and begin your journey toward strategic excellence.'
            }
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative">
              {/* Glowing Border Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-amber-500 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000" />
              
              <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-sm font-semibold text-amber-400 mb-2">
                      {mounted && isArabic ? 'الاسم' : 'Your Name'}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-6 py-4 bg-slate-900/50 border-2 rounded-xl text-white placeholder-slate-500 focus:outline-none transition-all duration-300"
                      style={{
                        borderColor: focusedField === 'name' ? '#f59e0b' : 'rgba(148, 163, 184, 0.2)',
                        boxShadow: focusedField === 'name' ? '0 0 20px rgba(245, 158, 11, 0.3)' : 'none',
                      }}
                      placeholder={mounted && isArabic ? 'أدخل اسمك' : 'Enter your name'}
                    />
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-sm font-semibold text-purple-400 mb-2">
                      {mounted && isArabic ? 'البريد الإلكتروني' : 'Email Address'}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-6 py-4 bg-slate-900/50 border-2 rounded-xl text-white placeholder-slate-500 focus:outline-none transition-all duration-300"
                      style={{
                        borderColor: focusedField === 'email' ? '#a855f7' : 'rgba(148, 163, 184, 0.2)',
                        boxShadow: focusedField === 'email' ? '0 0 20px rgba(168, 85, 247, 0.3)' : 'none',
                      }}
                      placeholder={mounted && isArabic ? 'بريدك الإلكتروني' : 'your@email.com'}
                    />
                  </motion.div>

                  {/* Company Field */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-sm font-semibold text-cyan-400 mb-2">
                      {mounted && isArabic ? 'الشركة' : 'Company'}
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('company')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-6 py-4 bg-slate-900/50 border-2 rounded-xl text-white placeholder-slate-500 focus:outline-none transition-all duration-300"
                      style={{
                        borderColor: focusedField === 'company' ? '#06b6d4' : 'rgba(148, 163, 184, 0.2)',
                        boxShadow: focusedField === 'company' ? '0 0 20px rgba(6, 182, 212, 0.3)' : 'none',
                      }}
                      placeholder={mounted && isArabic ? 'اسم شركتك (اختياري)' : 'Your company (optional)'}
                    />
                  </motion.div>

                  {/* Message Field */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-sm font-semibold text-amber-400 mb-2">
                      {mounted && isArabic ? 'الرسالة' : 'Your Message'}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={6}
                      className="w-full px-6 py-4 bg-slate-900/50 border-2 rounded-xl text-white placeholder-slate-500 focus:outline-none transition-all duration-300 resize-none"
                      style={{
                        borderColor: focusedField === 'message' ? '#f59e0b' : 'rgba(148, 163, 184, 0.2)',
                        boxShadow: focusedField === 'message' ? '0 0 20px rgba(245, 158, 11, 0.3)' : 'none',
                      }}
                      placeholder={mounted && isArabic ? 'أخبرنا عن مشروعك...' : 'Tell us about your project...'}
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-5 rounded-xl font-bold text-lg text-white flex items-center justify-center gap-3 transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #f59e0b 100%)',
                      boxShadow: '0 10px 40px rgba(245, 158, 11, 0.4)',
                    }}
                  >
                    <Send className="w-5 h-5" />
                    {mounted && isArabic ? 'إرسال الرسالة' : 'Send Message'}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Email Card */}
              <motion.a
                href="mailto:info@ahkstrategies.net"
                whileHover={{ scale: 1.03, x: 10 }}
                className="block p-6 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-amber-400/50 transition-all duration-300"
                style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)' }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500/20 rounded-xl">
                    <Mail className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {mounted && isArabic ? 'البريد الإلكتروني' : 'Email Us'}
                    </h3>
                    <p className="text-slate-400 text-sm mb-2">
                      {mounted && isArabic ? 'راسلنا في أي وقت' : 'Drop us a line anytime'}
                    </p>
                    <p className="text-amber-400 font-semibold">info@ahkstrategies.net</p>
                  </div>
                </div>
              </motion.a>

              {/* Phone Card */}
              <motion.a
                href="tel:+201040787571"
                whileHover={{ scale: 1.03, x: 10 }}
                className="block p-6 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-300"
                style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)' }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/20 rounded-xl">
                    <Phone className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {mounted && isArabic ? 'اتصل بنا' : 'Call Us'}
                    </h3>
                    <p className="text-slate-400 text-sm mb-2">
                      {mounted && isArabic ? 'من الاثنين إلى الجمعة، 9 صباحًا - 6 مساءً' : 'Mon-Fri, 9am-6pm'}
                    </p>
                    <p className="text-purple-400 font-semibold">+20 104 078 7571</p>
                  </div>
                </div>
              </motion.a>

              {/* Location Card */}
              <motion.div
                whileHover={{ scale: 1.03, x: 10 }}
                className="block p-6 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
                style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)' }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/20 rounded-xl">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {mounted && isArabic ? 'موقعنا' : 'Visit Us'}
                    </h3>
                    <p className="text-slate-400 text-sm mb-2">
                      {mounted && isArabic ? 'المقر الرئيسي' : 'Headquarters'}
                    </p>
                    <p className="text-cyan-400 font-semibold">Cairo, Egypt</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="p-8 bg-gradient-to-br from-amber-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl border border-amber-400/20"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {mounted && isArabic ? 'لماذا تختار AHKStrategies؟' : 'Why Choose AHKStrategies?'}
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full" />
                  {mounted && isArabic ? '20+ عامًا من الخبرة الاستراتيجية' : '20+ Years of Strategic Excellence'}
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  {mounted && isArabic ? 'حلول مدعومة بالذكاء الاصطناعي' : 'AI-Powered Solutions'}
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  {mounted && isArabic ? 'خبرة منطقة الشرق الأوسط وشمال إفريقيا' : 'MENA Region Expertise'}
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full" />
                  {mounted && isArabic ? 'نتائج قابلة للقياس' : 'Measurable Results'}
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated Gradient Line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{
          background: 'linear-gradient(90deg, transparent, #f59e0b, #a855f7, #06b6d4, transparent)',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 0%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}
