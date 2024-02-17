<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { ThemeSwitcher } from '@/features/theme'
import { LangSwitcher } from '@/features/localization'

const { t } = useI18n()
</script>

<template>
  <ThemeSwitcher />
  <LangSwitcher />
  <h1>{{ t('titles.rootPage') }}</h1>
  <p>{{ t('descriptions.appDescription') }}</p>
</template>
