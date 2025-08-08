import type { Cell } from 'fomu'
import type { Rect } from 'fomu/types'

/**
 * Calculates the bounding rectangle that contains one or more cells.
 *
 * If the input array is empty, returns a default zero-sized rectangle at (0, 0).
 *
 * @example
 *
 * const cell1 = { attrs: { x: 10, y: 20, width: 50, height: 30 } }
 * const cell2 = { attrs: { x: 40, y: 10, width: 20, height: 60 } }
 * getRectangle([cell1, cell2]) // => { x: 10, y: 10, width: 50, height: 60 }
 */
export const getRectangle = (arg: Cell | Cell[]): Rect => {
  const cells = Array.isArray(arg) ? arg : [arg]
  if (!cells.length)
    return { x: 0, y: 0, width: 0, height: 0 }

  let maxX = Number.NEGATIVE_INFINITY
  let minX = Number.POSITIVE_INFINITY

  let minY = Number.POSITIVE_INFINITY
  let maxY = Number.NEGATIVE_INFINITY

  for (const cell of cells) {
    if (cell.attrs.x < minX) {
      minX = cell.attrs.x
    }
    if (maxX < cell.attrs.x + cell.attrs.width) {
      maxX = cell.attrs.x + cell.attrs.width
    }
    if (cell.attrs.y < minY) {
      minY = cell.attrs.y
    }
    if (maxY < cell.attrs.y + cell.attrs.height) {
      maxY = cell.attrs.y + cell.attrs.height
    }
  }

  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY,
  }
}

export function aheadSelected(cell: Cell) {
  return cell.graph.select([
    cell,
    ...cell.graph.selected.filter(other => other !== cell),
  ])
}

/** select cell or take it at the ahead of the selected */
export function selectOrAhead(cell: Cell) {
  const find = cell.graph.selected.find(other => other === cell)
  if (find)
    return aheadSelected(cell)

  return cell.graph.select([cell])
}
