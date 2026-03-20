import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'es' | 'en' | 'fr' | 'pt';

interface I18nContextType {
  currentLang: Language;
  t: (key: string) => any;
  changeLanguage: (lang: Language) => void;
  isLoading: boolean;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLang, setCurrentLang] = useState<Language>('es');
  const [translations, setTranslations] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Check localStorage for ufaal_lang
    const savedLang = localStorage.getItem('ufaal_lang') as Language;
    const initialLang = savedLang || 'es';
    
    if (!savedLang) {
      localStorage.setItem('ufaal_lang', 'es');
    }
    
    setCurrentLang(initialLang);
    loadTranslations(initialLang);
  }, []);

  const loadTranslations = async (lang: Language) => {
    setIsLoading(true);
    try {
      // Use dynamic import for lazy loading if possible, or fetch
      // For Vite, dynamic import is cleaner
      const data = await import(`../locales/${lang}.json`);
      setTranslations(data.default);
      document.documentElement.lang = lang;
    } catch (error) {
      console.error(`Failed to load translations for ${lang}`, error);
    } finally {
      setIsLoading(false);
    }
  };

  const changeLanguage = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem('ufaal_lang', lang);
    loadTranslations(lang);
  };

  const t = (key: string): any => {
    const keys = key.split('.');
    let result = translations;
    for (const k of keys) {
      if (result?.[k] !== undefined) {
        result = result[k];
      } else {
        return key; 
      }
    }
    return result;
  };

  return (
    <I18nContext.Provider value={{ currentLang, t, changeLanguage, isLoading }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
