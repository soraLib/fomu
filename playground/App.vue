<script lang="ts" setup>
import FomuUI from 'fomu'
import PlaygroundHeader from './layout/Header/index.vue'
</script>

<template>
  <div class="fomu-playground flex flex-col h-full">
    <PlaygroundHeader />

    <FomuUI class="flex-grow mx-24 my-6 overflow-hidden " />
  </div>
</template>

<style lang="scss" scoped>
.fomu-playground {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  box-sizing: border-box;
  background: #eaeaea;
}
.dark .fomu-playground {
  background: var(--c-bg);
}
</style>
