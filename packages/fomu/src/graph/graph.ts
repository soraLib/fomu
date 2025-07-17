import type { Cell } from 'fomu'
import type { GraphOptions } from './options'
import { mockCells } from 'fomu'

export class Graph {
  readonly options: GraphOptions
  cells: Cell[] = mockCells

  constructor(options: GraphOptions) {
    this.options = options
  }

  mount(el?: Element) {
    this.options.el = el
    return this
  }

  render() {

  }
}
