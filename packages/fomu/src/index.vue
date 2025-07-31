<script lang="ts" setup>
import { Graph } from 'fomu/graph'
import { FomuRenderer } from 'fomu/renderer'

import 'virtual:uno.css'

const graph = ref(new Graph({
  width: 800,
  height: 600,
}))

const onRef = (el: Element) => graph.value.mount(el).render()
</script>

<template>
  <div :ref="(el) => onRef(el as Element)" class="fomu-graph">
    <FomuRenderer v-for="cell in graph.cells" :key="cell.id" :cell="cell" />
  </div>
</template>
