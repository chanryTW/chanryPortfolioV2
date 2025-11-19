import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './locales/en';
import { zh } from './locales/zh';
import { ja } from './locales/ja';

// Detect browser language
const getBrowserLang = () => {
  const lang = navigator.language;
  if (lang.startsWith('en')) return 'en';
  if (lang.startsWith('ja')) return 'ja';
  return 'zh'; // Default to Traditional Chinese
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      zh: { translation: zh },
      ja: { translation: ja }
    },
    lng: getBrowserLang(), 
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;