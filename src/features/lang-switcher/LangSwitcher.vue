<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { applyLanguage, languages } from './tools'
import { SupportedLanguage } from './types'

const { locale } = useI18n()

const setLanguage = (lang: SupportedLanguage) => {
  applyLanguage(lang)

  locale.value = lang
}
</script>

<template>
  <div class="lang-switcher">
    <button
      v-for="({ label }, key) in languages"
      :key="key"
      :class="{ active: locale === key }"
      :disabled="locale === key"
      @click="() => setLanguage(key)"
    >
      {{ label }}
    </button>
  </div>
</template>
