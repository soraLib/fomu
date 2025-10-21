import type { Predicate } from '@fomu/common'
import type { Cell, CellUpdateData, IdUpdateData, MousePosition } from 'fomu'
import type { GraphOptions } from './options'
import { find } from '@fomu/common'
import { bindCellGraph, HistoryStore, isIdUpdateData, Shape } from 'fomu'
import { assign, isEqual } from 'lodash-es'

export interface UpdatCellOptions {
  /** default false */
  skipEqualCheck?: boolean
  /** default true */
  createHistory?: boolean
}
export type GraphPluginType = 'tools' | 'layer' | 'properties' | 'panel'
export interface GraphPlugin {
  type: GraphPluginType
  component: ReturnType<typeof defineComponent> | JSX.Element
  options: Record<string, any> | undefined
}

export class Graph {
  readonly options: GraphOptions
  history = new HistoryStore()

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

  plugins: Partial<Record<GraphPluginType, GraphPlugin>> = {}

  constructor(options: GraphOptions) {
    this.options = options
  }

  mount(el?: Element) {
    this.options.el = el
    return this
  }

  usePlugin(plugin: GraphPlugin) {
    const installed = this.plugins[plugin.type]
    if (installed) {
      installed.options = plugin.options

      return this
    }

    this.plugins[plugin.type] = plugin

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

  updateCell(
    arg: string | Cell,
    data: Partial<Cell['attrs']>,
    _options?: UpdatCellOptions,
  ): Graph {
    const cell = typeof arg === 'string' ? this.getCell(cell => cell.id === arg) : arg
    if (!cell)
      return this

    const options: Required<UpdatCellOptions> = {
      skipEqualCheck: false,
      createHistory: true,
      ..._options,
    }

    if (
      !options?.skipEqualCheck
      && Object.entries(data).every(([key, value]) =>
        isEqual(value, cell.attrs[key as keyof Cell['attrs']]),
      )
    ) {
      return this
    }

    if (options.createHistory) {
      // TODO:
      // const history = new GraphHistory({
      //   type: HistoryType.Attr,
      //   data: [
      //     {
      //       id: cell.attrs.id,
      //       name: cell.attrs.name,
      //       prev: cloneDeep(pick(cell.attrs, Object.keys(data))),
      //       next: cloneDeep(data),
      //     },
      //   ],
      // })

      // this.addHistory(history)
    }

    assign(cell.attrs, data)

    return this
  }

  updateCells(
    arg: IdUpdateData[] | CellUpdateData[],
    _options?: UpdatCellOptions,
  ): Graph {
    const options: Required<UpdatCellOptions> = {
      skipEqualCheck: false,
      createHistory: true,
      ..._options,
    }

    const batch = arg.map(data => ({
      id: isIdUpdateData(data) ? data.id : data.cell,
      data: data.data,
    }))

    if (options.createHistory) {
      // TODO:
      // const record = new GraphHistory({
      //   type: HistoryType.Attr,
      //   data: batch.map(u => ({
      //     id: u.cell.id,
      //     name: u.cell.attrs.name,
      //     prev: cloneDeep(pick(u.el.attrs, Object.keys(u.data))),
      //     next: cloneDeep(u.data),
      //   })),
      // })

      // this.addHistory(history)
    }

    for (const update of batch) {
      this.updateCell(update.id, update.data, { ...options })
    }

    return this
  }
}
