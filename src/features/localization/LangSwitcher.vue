<script setup lang="ts">
import { languages } from './tools'
import { useLocalization } from './hook'

const { locale, setLanguage, langChangeInProgress } = useLocalization()
</script>

<template>
  <div class="lang-switcher">
    <button
      v-for="({ label }, key) in languages"
      :key="key"
      :class="{ active: locale === key }"
      :disabled="locale === key || langChangeInProgress"
      @click="() => setLanguage(key)"
    >
      {{ label }}
    </button>
  </div>
</template>

<style lang="scss">
.lang-switcher {
  button.active {
    color: green;
    border: unset;
  }
}
</style>
