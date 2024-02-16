import { ref } from 'vue'

import { useLocalization } from '@/features/localization'

export const useApp = () => {
  const isAppReady = ref(false)
  const { setLanguage } = useLocalization()

  setLanguage().then(() => {
    isAppReady.value = true
  })

  return { isAppReady }
}
