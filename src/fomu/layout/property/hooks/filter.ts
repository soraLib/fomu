import type { BasicElement } from '@/fomu/element'
import type { BasicGraph } from '@/fomu/graph'
import type { SaPlugin } from '@/fomu/plugin'

export function pluginValueFilter<A, B = any>(
  value: A,
  plugin: SaPlugin,
  element: BasicElement,
  graph: BasicGraph,
): B {
  const $value: any = plugin.filter
    ? plugin.filter(value, element, graph)
    : value

  return $value
}
