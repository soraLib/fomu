<script setup lang="ts">
import type { TextCell } from 'fomu'

defineProps<{
  cell: TextCell
}>()
</script>

<template>
  <div>{{ cell.attrs.content }}</div>
</template>
