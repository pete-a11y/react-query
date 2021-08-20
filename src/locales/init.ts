import i18n from 'i18next';

import en from 'locales/en';

const locales = {
  en,
};

i18n.init({
  lng: window.localStorage.getItem('language') || 'en',
  fallbackLng: ['en', 'ru'],
  keySeparator: '.',
  interpolation: {
    escapeValue: false,
  },
  resources: locales,
  ns: ['common'],
  defaultNS: 'common',
});
