export const setHtmlDir = (rtl: boolean) => {
  document.documentElement.setAttribute('dir', rtl ? 'rtl' : 'ltr')
}

export const setHtmlLang = (lang: string) => {
  document.documentElement.lang = lang
}
