<script setup lang="ts">
import type { AbsoluteLayout } from 'fomu'
import { FomuRenderer } from 'fomu/renderer'

defineProps<{
  cell: AbsoluteLayout
}>()
</script>

<template>
  <div class="fomu-cell fomu-cell--absolute fomu-layout--absolute">
    <FomuRenderer v-for="child in cell.children" :key="child.id" :cell="child" />
  </div>
</template>

<style lang="scss" scoped>
.fomu-cell--absolute {
  border: 1px dashed red;
}
</style>
