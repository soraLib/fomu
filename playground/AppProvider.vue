<script lang="ts" setup>
import { useDark } from '@vueuse/core'
import App from './App.vue'

const isDark = useDark()
</script>

<template>
  <App />
</template>
