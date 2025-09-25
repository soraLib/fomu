import type { Graph } from 'fomu/graph'
import { ArrowLeft, ArrowRight } from '@vicons/carbon'

export interface PluginTool {
  title: string
  icon: () => ReturnType<typeof defineComponent> | JSX.Element
  click: (graph: Graph) => void
  /** show divider after */
  divider?: boolean
  /** default size fixed */
  size?: 'fit' | 'fixed'
}
export const tools: PluginTool[] = [
  // history
  {
    title: 'Undo',
    icon: () => <ArrowLeft />,
    click: (graph: Graph) => graph.undo(),
  },
  {
    title: 'Redo',
    icon: () => <ArrowRight />,
    click: (graph: Graph) => graph.redo(),
    divider: true,
  },
]
