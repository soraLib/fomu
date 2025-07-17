import type { Cell } from 'fomu'
import { CellType } from 'fomu/src/types'

import ContainerRenderer from './components/container.vue'
import FallbackRenderer from './components/fallback.vue'
import TextRenderer from './components/text.vue'

export type CellRendererComponent = ReturnType<typeof defineComponent> | JSX.Element
const rendererMap: Record<CellType, CellRendererComponent> = {
  [CellType.Cell]: undefined,
  [CellType.Text]: TextRenderer,
  [CellType.Container]: ContainerRenderer,
}

export const getRendererFor = (cell: Cell) => {
  return rendererMap[cell.type] ?? FallbackRenderer
}
