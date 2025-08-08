import type { Predicate } from '.'

/**
 * Represents any object with optional `children` array of the same type.
 */
type TreeNode<T> = T & { children?: T[] }

/**
 * Creates a predicate function for tree traversal.
 * Supports both a custom predicate function and key-value matching.
 */
function createPredicate<T>(
  arg1: keyof T | Predicate<T>,
  arg2?: T[keyof T],
): Predicate<T> {
  return typeof arg1 === 'function'
    ? arg1
    : (node: T) => node[arg1] === arg2
}

/**
 * Recursively searches a single tree node and its descendants.
 */
function findNodeHelper<T>(
  node: T,
  predicate: Predicate<T>,
): T | undefined {
  if (predicate(node))
    return node

  const children = (node as TreeNode<T>).children
  if (Array.isArray(children)) {
    for (const child of children) {
      const found = findNodeHelper(child, predicate)
      if (found)
        return found
    }
  }

  return undefined
}

/**
 * Finds a node within a tree structure that satisfies a predicate.
 */
export function findNode<T>(
  node: T,
  predicate: Predicate<T>,
): T | undefined

/**
 * Finds a node within a tree structure that matches the given key and value.
 */
export function findNode<T>(
  node: T,
  key: keyof T,
  value: T[keyof T],
): T | undefined

/**
 * Internal implementation for findNode.
 */
export function findNode<T>(
  node: T,
  arg1: keyof T | Predicate<T>,
  arg2?: T[keyof T],
): T | undefined {
  const predicate = createPredicate(arg1, arg2)
  return findNodeHelper(node, predicate)
}

/**
 * Finds a node in a list of tree nodes that satisfies a predicate.
 */
export function find<T>(
  nodes: T[],
  predicate: Predicate<T>,
): T | undefined

/**
 * Finds a node in a list of tree nodes that matches the given key and value.
 */
export function find<T>(
  nodes: T[],
  key: keyof T,
  value: T[keyof T],
): T | undefined

/**
 * Internal implementation for find.
 */
export function find<T>(
  nodes: T[],
  arg1: keyof T | Predicate<T>,
  arg2?: T[keyof T],
): T | undefined {
  const predicate = createPredicate(arg1, arg2)

  for (const node of nodes) {
    const result = findNode(node, predicate)
    if (result)
      return result
  }

  return undefined
}

/**
 * Recursively collects all nodes in a tree structure.
 * Optionally filters and/or maps the nodes.
 */
export function collectNodes<A, B = A>(
  nodes: A[] | undefined,
  options?: {
    filter?: Predicate<A>
    map?: (node: A) => B
  },
): B[] {
  if (!nodes)
    return []

  const filtered = options?.filter ? nodes.filter(options.filter) : nodes
  const result: B[] = []

  for (const node of filtered) {
    result.push(options?.map ? options.map(node) : (node as unknown as B))

    const children = (node as TreeNode<A>).children
    if (Array.isArray(children)) {
      result.push(...collectNodes<A, B>(children, options))
    }
  }

  return result
}
