import type { Graph } from './graph'

export class GraphBase {
  readonly graph: Graph

  constructor(graph: Graph) {
    this.graph = graph
    this.init()
  }

  protected init() {}
}
