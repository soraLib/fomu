import type { Predicate } from '@fomu/common'
import type { Cell, MousePosition } from 'fomu'
import type { GraphOptions } from './options'
import { find } from '@fomu/common'
import { bindCellGraph, Shape } from 'fomu'

export class Graph {
  readonly options: GraphOptions
  /**
   * graph cells
   */
  cells: Cell[] = []
  /**
   * selected cells ins
   */
  selected: Cell[] = []

  /**
   * drag position
   */
  mousePosition: MousePosition = {
    startX: 0,
    startY: 0,
    x: 0,
    y: 0,
  }

  constructor(options: GraphOptions) {
    this.options = options
  }

  mount(el?: Element) {
    this.options.el = el
    return this
  }

  setMouse(pos: Partial<MousePosition> = { x: 0, y: 0, startX: 0, startY: 0 }) {
    Object.assign(this.mousePosition, pos)
  }

  /**
   * Sets the graph's cells and binds each cell (and its children, if any) to the current graph instance.
   */
  setCells(cells: Cell[]) {
    this.cells = [Shape.Absolute.fromOptions({
      attrs: {
        x: 0,
        y: 0,
        width: 800,
        height: 600,
      },
      children: cells,
    })]

    bindCellGraph(this.cells, this)
  }

  getCell(arg: string | Predicate<Cell>): Cell | undefined {
    const predicate: Predicate<Cell> = typeof arg === 'string' ? cell => cell.id === arg : arg

    return find(this.cells, predicate)
  }

  getCells(args?: (string | Predicate<Cell>)[]): Cell[] {
    return args?.map(a => this.getCell(a)).filter(a => a !== undefined) ?? this.selected
  }

  exist() {

  }

  select(id: string): void
  select(cell: Cell): void
  select(ids: string[]): void
  select(cells: Cell[]): void
  select(_args: string | Cell | string[] | Cell[]): void {
    const args = !Array.isArray(_args) ? [_args] : _args
    this.selected = args.map(arg => typeof arg === 'string' ? this.getCell(arg) : arg).filter(a => a !== undefined)
  }

  isSelected(id: string): boolean
  isSelected(cell: Cell): boolean
  isSelected(arg: string | Cell): boolean {
    return this.selected.some(cell => typeof arg === 'string' ? cell.id === arg : cell === arg)
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
