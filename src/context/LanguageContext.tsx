import React, { createContext, useContext, useState } from 'react';
import { translations } from '../i18n/translations';

export type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('misou_lang');
    return (saved === 'en' || saved === 'de') ? saved : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('misou_lang', lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let result: any = translations[language];
    
    for (const k of keys) {
      if (result && k in result) {
        result = result[k];
      } else {
        // Fallback to English dictionary if key is missing in German
        if (language === 'de') {
          let enResult: any = translations['en'];
          for (const ek of keys) {
            if (enResult && ek in enResult) {
              enResult = enResult[ek];
            } else {
              enResult = null;
              break;
            }
          }
          if (enResult && typeof enResult === 'string') return enResult;
        }
        return key;
      }
    }
    return typeof result === 'string' ? result : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
