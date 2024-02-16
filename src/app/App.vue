<script setup lang="ts">
import { useApp } from './hook'

const { isAppReady } = useApp()
</script>

<template>
  <router-view v-if="isAppReady" />
</template>
