import { createI18n } from 'vue-i18n'

import { getInitialLang } from '@/features/localization'

import { slavicPluralization } from './pluralization'

export const i18n = createI18n({
  legacy: false,
  locale: getInitialLang(),
  pluralRules: {
    ru: slavicPluralization,
  },
})
