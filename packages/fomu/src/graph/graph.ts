import type { GraphOptions } from './options'

export class Graph {
  readonly options: GraphOptions

  constructor(options: GraphOptions) {
    this.options = options
  }

  selEl(el?: Element) {
    this.options.el = el
  }

  render() {

  }
}
