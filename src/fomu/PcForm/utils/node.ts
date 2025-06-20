import type { BasicElement } from '@/fomu/element'
import { isTab } from '../element'

export type Predicate<T> = (value: T) => unknown

export type TreeNode<ChildrenKeys extends string = 'children'> = Partial<
  Record<ChildrenKeys, TreeNode[]>
>

/** create find tree node predicate callback function */
function createPredicate<T extends TreeNode>(
  arg1: keyof T | Predicate<T>,
  arg2?: T[keyof T],
) {
  let predicate: Predicate<T>

  if (typeof arg1 === 'function') {
    predicate = arg1
  } else {
    predicate = (node: T) => node[arg1] === arg2
  }

  return predicate
}

/** find node recursively */
function findNodeHelper<T extends TreeNode<'children' | 'tabs'>>(
  node: T,
  predicate: Predicate<T>,
): T | undefined {
  if (predicate(node)) {
    return node
  }

  if (node.children?.length) {
    for (const child of node.children) {
      const findChildNode = findNodeHelper(<T>child, predicate)

      if (findChildNode) return findChildNode
    }
  }
  if (node.tabs?.length) {
    for (const pane of node.tabs) {
      for (const child of pane.children as any) {
        const findChildNode = findNodeHelper(<T>child, predicate)

        if (findChildNode) return findChildNode
      }
    }
  }
}

/** find node that meet the condition specified in a callback function in tree node */
export function findNode<T extends TreeNode<'children' | 'tabs'>>(
  node: T,
  predicate: Predicate<T>,
): T | undefined
/** find node in tree node by given key and value */
export function findNode<T extends TreeNode<'children' | 'tabs'>>(
  node: T,
  key: keyof T,
  value: T[keyof T],
): T | undefined
/** find node in tree node */
export function findNode<T extends TreeNode<'children' | 'tabs'>>(
  node: T,
  arg1: keyof T | Predicate<T>,
  arg2?: T[keyof T],
): T | undefined {
  const predicate = createPredicate(arg1, arg2)

  return findNodeHelper(node, predicate)
}

export function collectsElements<A extends BasicElement>(
  elems: A[] | undefined,
): A[]
export function collectsElements<A extends BasicElement>(
  elems: A[] | undefined,
  option?: {
    filter?: Predicate<A>
  },
): A[]
export function collectsElements<A extends BasicElement, B>(
  elems: A[] | undefined,
  option?: {
    filter?: Predicate<A>
    map: (a: A) => B
  },
): B[]
export function collectsElements<A extends BasicElement, B>(
  elems: A[] | undefined,
  option?: {
    filter?: Predicate<A>
    map?: (a: A) => B
  },
) {
  if (!elems) return []

  const filteredElems = option?.filter ? elems?.filter(option.filter) : elems
  const collects: any[] = []

  for (const elem of filteredElems) {
    collects.push(elem)

    if (elem.children?.length) {
      collects.push(...collectsElements<A, B>(elem.children as A[]))
    }

    if (isTab(elem) && elem.tabs?.length) {
      for (const pane of elem.tabs) {
        collects.push(...collectsElements<A, B>(pane.children as A[]))
      }
    }
  }

  const map = option?.map
  if (map) return collects.map(map)

  return collects
}
