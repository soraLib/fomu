<script setup lang="ts">
import type { Graph } from 'fomu/graph'
import type { PluginTool } from './tools'
import { tools } from './tools'

const props = defineProps<{
  graph: Graph
}>()

const onClick = (tool: PluginTool, event: MouseEvent) => tool.click(props.graph)
</script>

<template>
  <div class="tool-wrapper">
    <div v-for="tool in tools" :key="tool.title" class="tool">
      <span
        class="tool-inner"
        :class="[{
          'is-fit-size': tool.size === 'fit',
        }]"
        :title="tool.title"
        @click="onClick(tool, $event)"
      >
        <ElIcon :size="20"><component :is="tool.icon" /></ElIcon>
      </span>

      <span v-if="tool.divider" class="tool-divider" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tool-wrapper {
  display: flex;
  margin-bottom: 4px;
}

.tool {
  display: flex;
  align-items: center;
  justify-content: center;

  &-inner {
    height: 36px;
    width: 36px;
    overflow: hidden;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background var(--c-transition);
    border-radius: 4px;

    &.is-fit-size {
      width: fit-content;
    }
    &:not(.is-fit-size) {
      cursor: pointer;

      &:hover {
        background-color: var(--c-bg-hover);
      }
      &:active {
        transform: translateY(0.5px);
      }
    }
    &:active {
      color: var(--c-brand);
    }
  }
}

.tool-divider {
  margin: 0 8px 0 10px;
  border-left: 1px solid var(--c-bg-soft);
  border-right: 1px solid var(--c-divider);
  height: 90%;
}
</style>
