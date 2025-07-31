<script setup lang="ts">
import type { Cell } from 'fomu'
import { getRendererFor } from '.'
import { useStyle } from './hooks/useStyle.hook'

const props = defineProps<{
  cell: Cell
}>()

const renderer = computed(() => getRendererFor(props.cell))

const onElementClick = (evt: MouseEvent) => {
  evt.stopPropagation()

  props.cell.graph.select(props.cell)
}
</script>

<template>
  <component :is="renderer" :cell="cell" :style="useStyle(cell)" @click="onElementClick" />
</template>
