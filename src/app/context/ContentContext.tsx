'use client'

import { createContext, useContext, useState } from 'react';
import data from '../../assets/content.json';
import { Content } from '../types/Content';
import { Language } from '../types/Language';

interface ContentContextProps {
  language: Language;
  data: Content;
  setLanguage: (lang: Language) => void;
}

const ContentContext = createContext<ContentContextProps>({
  language: 'es',
  data: data,
  setLanguage: () => {},
});

export const useContent = () => useContext(ContentContext);

interface ContentProviderProps {
    children: React.ReactNode;
}

export const ContentProvider: React.FC<ContentProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <ContentContext.Provider value={{ language, data, setLanguage: changeLanguage }}>
      {children}
    </ContentContext.Provider>
  );
};
