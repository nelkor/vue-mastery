<script setup lang="ts">
import { useDark } from '@vueuse/core'

const isDark = useDark({
  selector: 'body',
  attribute: 'theme',
  valueDark: 'dark',
  valueLight: 'light',
})

const toggleTheme = () => {
  isDark.value = !isDark.value
}
</script>

<template>
  <div class="theme-switcher">
    <button :class="{ dark: !isDark }" @click="toggleTheme">
      {{ $t(`theme.${isDark ? 'light' : 'dark'}`) }}
    </button>
  </div>
</template>

<style scoped lang="scss">
.theme-switcher {
  button.dark {
    color: white;
    background-color: black;
  }
}
</style>
