import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import { applyLanguage } from './tools'
import { SupportedLanguage } from './types'

export const useLocalization = () => {
  const { locale, setLocaleMessage } = useI18n()

  const langChangeInProgress = ref(false)

  const setLanguage = async (lang?: SupportedLanguage) => {
    const changeTo = lang || (locale.value as SupportedLanguage)

    langChangeInProgress.value = true

    const messages = await import('./locales/' + `${changeTo}.json`)

    langChangeInProgress.value = false

    setLocaleMessage(changeTo, messages.default)
    applyLanguage(changeTo)

    if (lang) {
      locale.value = lang
    }
  }

  return {
    locale,
    setLanguage,
    langChangeInProgress,
  }
}
