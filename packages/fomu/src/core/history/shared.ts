import type { CDCellOptions, CDHistory, Graph } from 'fomu'
import { Cell } from 'fomu'

export interface IdUpdateData {
  id: string
  data: Partial<Cell['attrs']>
}
export interface CellUpdateData {
  cell: Cell
  data: Partial<Cell['attrs']>
}
export const isIdUpdateData = (
  data: IdUpdateData | CellUpdateData,
): data is IdUpdateData => Reflect.has(data, 'id')

export const restoreCell = (history: CDHistory, graph: Graph, _options: CDCellOptions) => {
  if (!history)
    return

  const cell = Cell.fromAttrs(history.attrs, history.id)
  history.parent && cell.setParent(history.parent)
  history.children && cell.setChildren(history.children)

  graph.add(cell, _options)
}
