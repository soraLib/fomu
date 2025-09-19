import type { Cell } from 'fomu'

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
