<script setup lang="ts">
import type { Cell } from 'fomu'
import { aheadSelected } from 'fomu'
import { getRendererFor } from '.'
import { useDrag, useStyle } from './hooks'

const props = defineProps<{
  cell: Cell
}>()

const renderer = computed(() => getRendererFor(props.cell))

const onClick = (evt: MouseEvent) => {
  evt.stopPropagation()

  props.cell.graph.select(props.cell)
}
const onMousedown = (evt: MouseEvent) => {
  evt.stopPropagation()

  const { graph } = props.cell

  // contextmenu event
  if (evt.button === 2)
    return graph.select(props.cell)

  if (evt.ctrlKey) {
    const index = graph.selected.indexOf(props.cell)
    if (index !== -1) {
      if (index === 0) {
        graph.select(graph.selected.slice(1))
      } else {
        aheadSelected(props.cell)
      }
    } else {
      if (graph.selected[0] === graph.cells[0]) {
        graph.selected = [props.cell]
      } else {
        graph.selected.unshift(props.cell)
      }
    }

    return
  }

  useDrag(evt, props.cell)
}
</script>

<template>
  <component :is="renderer" :cell="cell" :style="useStyle(cell)" @click="onClick" @mousedown="onMousedown" />
</template>
