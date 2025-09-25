<script lang="ts" setup>
import { PluginTools } from '@fomu/plugin-tools'
import { Graph } from 'fomu/graph'
import { FomuGraphRenderer } from 'fomu/renderer'

import 'virtual:uno.css'

const graph = reactive(new Graph({
  width: 800,
  height: 600,
}))

graph.usePlugin(PluginTools)
</script>

<template>
  <FomuGraphRenderer :graph="graph" />
</template>

<style lang="scss">
@use './renderer/styles/index.scss'
</style>
