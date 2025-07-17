<script setup lang="ts">
import type { Cell } from 'fomu'
import { getRendererFor } from '.'

const props = defineProps<{
  cell: Cell
}>()

const renderer = computed(() => getRendererFor(props.cell))
</script>

<template>
  <component :is="renderer" :cell="cell" />
</template>
