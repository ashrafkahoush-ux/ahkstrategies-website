'use client';
import React, { createContext, useContext, useState, useEffect, startTransition } from 'react';

type LanguageContextType = {
  isArabic: boolean;
  toggleLanguage: (lang: 'en' | 'ar') => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [isArabic, setIsArabic] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Load language preference from localStorage
    const savedLang = localStorage.getItem('language');
    startTransition(() => {
      if (savedLang === 'ar') {
        setIsArabic(true);
        document.documentElement.dir = 'rtl';
        document.documentElement.lang = 'ar';
      } else {
        document.documentElement.dir = 'ltr';
        document.documentElement.lang = 'en';
      }
      setMounted(true);
    });
  }, []);

  const toggleLanguage = (lang: 'en' | 'ar') => {
    const newIsArabic = lang === 'ar';
    setIsArabic(newIsArabic);
    localStorage.setItem('language', lang);
    document.documentElement.dir = newIsArabic ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  return (
    <LanguageContext.Provider value={{ isArabic: mounted && isArabic, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
