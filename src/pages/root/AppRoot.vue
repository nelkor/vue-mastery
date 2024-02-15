<script setup lang="ts">
import { LangSwitcher } from '@/features/lang-switcher'
</script>

<template>
  <LangSwitcher />
  <h1>{{ $t('titles.rootPage') }}</h1>
</template>
