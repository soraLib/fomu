<script lang="ts" setup>
import type { GlobalThemeOverrides } from 'naive-ui'
import { useDark } from '@vueuse/core'

import {
  darkTheme,
  NConfigProvider,
  NGlobalStyle,
  NLoadingBarProvider,
} from 'naive-ui'
import { computed } from 'vue'
import App from './App.vue'

const isDark = useDark()
const theme = computed(() => (isDark.value ? darkTheme : undefined))

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#18A058',
  },
}
</script>

<template>
  <NConfigProvider :theme="theme" :theme-overrides="themeOverrides">
    <NLoadingBarProvider>
      <App />
    </NLoadingBarProvider>

    <NGlobalStyle />
  </NConfigProvider>
</template>
