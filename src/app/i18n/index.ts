import { createI18n } from 'vue-i18n'

import { DEFAULT_LANG, getInitialLang } from '@/features/lang-switcher'

export const i18n = createI18n({
  legacy: false,
  locale: getInitialLang(),
  fallbackLocale: DEFAULT_LANG,
  messages: {
    en: {
      titles: {
        rootPage: 'Root Page',
      },
    },
    ru: {
      titles: {
        rootPage: 'Главная страница',
      },
    },
    iw: {
      titles: {
        rootPage: 'דף הבית',
      },
    },
  },
})
