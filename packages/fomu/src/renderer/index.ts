import type { Cell } from 'fomu'
import { CellType } from 'fomu/types'

import AbsoluteRenderer from './components/absolute.vue'
import FallbackRenderer from './components/fallback.vue'
import TextRenderer from './components/text.vue'
import FomuRenderer from './renderer.vue'

export type CellRendererComponent = ReturnType<typeof defineComponent> | JSX.Element
const rendererMap: Record<CellType, CellRendererComponent> = {
  [CellType.Cell]: undefined,
  [CellType.Text]: TextRenderer,
  [CellType.Absolute]: AbsoluteRenderer,
}

export const getRendererFor = (cell: Cell) => rendererMap[cell.type] ?? FallbackRenderer

export {
  FomuRenderer,
}
