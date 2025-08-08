import { type Cell, type Graph, isContainer } from 'fomu'

/**
 * Recursively binds the graph instance to all cells.
 */
export function bindCellGraph(arg: Cell | Cell[], graph: Graph) {
  const cells = Array.isArray(arg) ? arg : [arg]
  for (const cell of cells) {
    cell.setGraph(graph)

    if (isContainer(cell)) {
      bindCellGraph(cell.children, graph)

      for (const child of cell.children)
        child.setParent(cell)
    }
  }
}
