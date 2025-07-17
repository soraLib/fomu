<script setup lang="ts">
import type { ContainerCell } from 'fomu'
import FomuRenderer from '../index.vue'

defineProps<{
  cell: ContainerCell
}>()
</script>

<template>
  <div class="fomu-cell fomu-cell--container">
    <FomuRenderer v-for="child in cell.children" :key="child.id" :cell="child" />
  </div>
</template>

<style lang="scss" scoped>
.fomu-cell--container {
  border: 1px dashed red;
}
</style>
