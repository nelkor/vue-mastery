<script setup lang="ts">
import { LangSwitcher } from '@/features/localization'
</script>

<template>
  <LangSwitcher />
  <h1>{{ $t('titles.rootPage') }}</h1>
  <p>{{ $t('descriptions.appDescription') }}</p>
</template>
