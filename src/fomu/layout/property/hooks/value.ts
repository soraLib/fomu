import type { BasicElement } from '@/fomu/element'
import type { BasicGraph } from '@/fomu/graph'
import type { SaPlugin } from '@/fomu/plugin'
import { cloneDeep } from 'lodash-es'

export interface BeforeValueChangeReturn<A> {
  value: A
  error: string
}

export interface ValueChangeHookArgs {
  value: unknown
  plugin: SaPlugin
  element: BasicElement
  graph: BasicGraph
}
export interface ValueChangeHook {
  predicate: (args: ValueChangeHookArgs) => boolean
  hook: (args: ValueChangeHookArgs) => void
}

export function beforeValueChange<A, B>(
  value: A,
  plugin: SaPlugin,
  element: BasicElement,
  graph: BasicGraph,
): BeforeValueChangeReturn<B> {
  const $error = ''
  const $value: any = cloneDeep(value)

  const hookArgs: ValueChangeHookArgs = { value, plugin, graph, element }

  return {
    value: $value,
    error: $error,
  }
}

export function afterValueChange<A>(
  value: A,
  plugin: SaPlugin,
  graph: BasicGraph,
): void {
  // after value change
}
