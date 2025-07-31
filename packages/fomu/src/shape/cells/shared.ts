import type { Cell, ContainerCell } from 'fomu'
import { CellType } from 'fomu/types'

/**
 * Returns whether the cell is a container with children (ContainerCell).
 *
 * @example
 *
 * isContainer(cell) && cell.children
 */
export const isContainer = (cell: Cell): cell is ContainerCell => {
  return cell.type === CellType.Absolute
}
