<script lang="ts" setup>
import { reactive } from 'vue'
import { Graph } from './graph'

import 'virtual:uno.css'

const graph = reactive(new Graph({
  width: 800,
  height: 600,
}))
const onRef = (el: Element) => graph.selEl(el)
</script>

<template>
  <div :ref="(el) => onRef(el as Element)">
    container
  </div>
</template>
