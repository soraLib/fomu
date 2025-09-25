<script setup lang="ts">
import type { Graph } from 'fomu'
import { FomuRenderer } from 'fomu/renderer'
import { mockCells } from '../mock'

const props = defineProps<{
  graph: Graph
}>()
const onRef = (el: Element) => props.graph.mount(el).setCells(mockCells)

// plugins
const GraphTools = computed(() => props.graph.plugins.tools)
</script>

<template>
  <div :ref="(el) => onRef(el as Element)" class="fomu-graph-layout">
    <component :is="GraphTools.component" v-if="GraphTools" v-bind="GraphTools.options" :graph="graph" class="fomu-graph-tools" />

    <div class="fomu-graph">
      <FomuRenderer v-for="cell in graph.cells" :key="cell.id" :cell="cell" />
    </div>
  </div>
</template>
