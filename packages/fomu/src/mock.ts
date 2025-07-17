import type { Cell } from './shape'
import { Shape } from './shape'

export const mockCells: Cell[] = [
  new Shape.Text({ id: '1', attrs: { content: 'mock text b', x: 100, y: 200, width: 200, height: 100 } }),
  Shape.Text.fromAttrs({ content: 'mock text a', x: 0, y: 0, width: 200, height: 80 }),
]
