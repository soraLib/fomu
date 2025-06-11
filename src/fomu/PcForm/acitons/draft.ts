import type { PcGraph } from '../graph'

export function toggleDraft(graph: PcGraph) {
  graph.setIsDraft(!graph.isDraft)
  graph.setSelected()
}
