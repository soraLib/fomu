import type { GraphPlugin } from 'fomu'
import PluginToolsComponent from './src/index.vue'

export const PluginTools: GraphPlugin = {
  type: 'tools',
  component: PluginToolsComponent,
  options: {},
}
