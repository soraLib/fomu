import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue(), vueJsx(), UnoCSS()],
  base: '/fomu/',
  build: {
    outDir: process.env.BUILD_ENV === 'doc' ? 'docs' : 'dist',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '/#': path.resolve(__dirname, './types'),
    },
  },
})
