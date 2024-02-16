import { createI18n } from 'vue-i18n'

import { getInitialLang } from '@/features/localization'

export const i18n = createI18n({
  legacy: false,
  locale: getInitialLang(),
})
