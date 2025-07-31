import type { Cell } from 'fomu'
import type { GraphOptions } from './options'
import { bindCellGraph } from 'fomu'

export class Graph {
  readonly options: GraphOptions
  /**
   * graph cells
   */
  cells: Cell[] = []
  /**
   * ids of selected cells
   */
  selected: string[] = []

  constructor(options: GraphOptions) {
    this.options = options
  }

  mount(el?: Element) {
    this.options.el = el
    return this
  }

  /**
   * Sets the graph's cells and binds each cell (and its children, if any) to the current graph instance.
   */
  setCells(cells: Cell[]) {
    this.cells = cells
    bindCellGraph(cells, this)
  }

  find() {

  }

  exist() {

  }

  select(id: string): void
  select(cell: Cell): void
  select(ids: string[]): void
  select(cells: Cell[]): void
  select(_args: string | Cell | string[] | Cell[]): void {
    const args = !Array.isArray(_args) ? [_args] : _args
    this.selected = args.map(arg => typeof arg === 'string' ? arg : arg.id)
  }

  isSelected(id: string): boolean
  isSelected(cell: Cell): boolean
  isSelected(arg: string | Cell): boolean {
    return this.selected.includes((typeof arg === 'string' ? arg : arg.id))
  }

  add() {

  }

  remove() {

  }

  update() {

  }

  undo() {

  }

  redo() {

  }
}
