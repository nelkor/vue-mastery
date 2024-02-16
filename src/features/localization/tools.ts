import { setHtmlDir, setHtmlLang } from '@/dom'

import { LanguageValue, SupportedLanguage } from './types'

const DEFAULT_LANG = 'en'
const LS_LANG_KEY = 'lang'

const sanitizeLang = (lang: string): SupportedLanguage =>
  languages[lang as SupportedLanguage]
    ? (lang as SupportedLanguage)
    : DEFAULT_LANG

export const languages: Record<SupportedLanguage, LanguageValue> = {
  [DEFAULT_LANG]: {
    rtl: false,
    label: 'Eng',
  },
  ru: {
    rtl: false,
    label: 'Рус',
  },
  iw: {
    rtl: true,
    label: 'עִברִית',
  },
}

export const applyLanguage = (lang: SupportedLanguage) => {
  const { rtl } = languages[lang]

  setHtmlDir(rtl)
  setHtmlLang(lang)

  localStorage.setItem(LS_LANG_KEY, lang)
}

export const getInitialLang = () => {
  const initialLang = sanitizeLang(
    localStorage.getItem(LS_LANG_KEY) || navigator.language.split('-')[0],
  )

  applyLanguage(initialLang)

  return initialLang
}
