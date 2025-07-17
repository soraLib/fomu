import type { Cell } from 'fomu'
import { CellType } from 'fomu/src/types'

import FallbackRenderer from './fallback.vue'
import TextRenderer from './text.vue'

export type CellRendererComponent = ReturnType<typeof defineComponent> | JSX.Element
const rendererMap: Partial<Record<CellType, CellRendererComponent>> = {
  [CellType.Text]: TextRenderer,
}

export const getRendererFor = (cell: Cell) => {
  return rendererMap[cell.type] ?? FallbackRenderer
}
