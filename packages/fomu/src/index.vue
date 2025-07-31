<script lang="ts" setup>
import { Graph } from 'fomu/graph'
import { FomuRenderer } from 'fomu/renderer'
import { mockCells } from './mock'

import 'virtual:uno.css'

const graph = reactive(new Graph({
  width: 800,
  height: 600,
}))

const onRef = (el: Element) => graph.mount(el).setCells(mockCells)
</script>

<template>
  <div :ref="(el) => onRef(el as Element)" class="fomu-graph">
    <FomuRenderer v-for="cell in graph.cells" :key="cell.id" :cell="cell" />
  </div>
</template>

<style lang="scss">
@import './renderer/styles/index.scss'
</style>
