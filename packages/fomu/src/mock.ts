import type { Cell } from './shape'
import { Shape } from './shape'

export const mockCells: Cell[] = [
  Shape.Text.fromAttrs({ content: 'mock text a', x: 0, y: 0, width: 200, height: 80 }),
  Shape.Text.fromOptions({
    id: '1',
    attrs: { content: 'mock text b', x: 0, y: 0, width: 200, height: 80 },
  }),
  Shape.Container.fromOptions({
    attrs: { x: 200, y: 200, width: 400, height: 400 },
    children: [
      new Shape.Text({ attrs: { content: 'mock text c inner', x: 50, y: 80, width: 150, height: 50 } }),
    ],
  }),
]
