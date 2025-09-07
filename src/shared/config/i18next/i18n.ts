import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
   .use(Backend)
   .use(LanguageDetector)
   .use(initReactI18next)
   .init({
      debug: true,
      fallbackLng: 'en',
      supportedLngs: ['en', 'ru'],
      ns: ['main', 'registration', 'login.json'],
      defaultNS: 'translation',
      backend: {
         loadPath: '../../../../public/locales/{{lng}}/{{ns}}.json',
      },
      detection: {
         order: ['navigator', 'localStorage'],
         caches: ['localStorage', 'cookie'],
         lookupLocalStorage: 'i18nextLng',
      },
   });

export default i18n;
