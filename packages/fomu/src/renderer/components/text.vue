<script setup lang="ts">
import type { TextCell } from 'fomu'

defineProps<{
  cell: TextCell
}>()
</script>

<template>
  <div class="fomu-cell fomu-cell--text">
    {{ cell.attrs.content }}
  </div>
</template>
