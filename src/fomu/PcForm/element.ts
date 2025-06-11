import type { BasicElement, BasicElementAttributes } from '../element'
import type { SelectOption } from './plugins/select'
import type { TableData } from './plugins/table'
import { cloneDeep } from 'lodash-es'
import { ElementType } from '../element'

export interface PcDraftAttributes {
  /** is draft element, default as `false` */
  'is-draft'?: boolean
}
export interface PcSelectAttributes {
  /** select options */
  options?: SelectOption[]
}
export interface PcRadioAttributes {
  'row-number'?: number
  'column-number'?: number
}
export interface PcTableAttributes {
  data?: TableData
}
export interface PcTimePickerAttributes {
  'time-format'?: string
}
export interface PcContextmenuAttributes {
  'contextmenu-binds'?: string[]
}
export interface PcTabAttributes {
  'tab-height'?: number
  'tab-index'?: number
  tabs?: TabPane[]
}
export type PcElementAttributes = BasicElementAttributes &
  PcDraftAttributes &
  PcSelectAttributes &
  PcRadioAttributes &
  PcTableAttributes &
  PcTimePickerAttributes &
  PcContextmenuAttributes &
  PcTabAttributes

export function isPcElementAttribute(
  attr: string,
  elem: PcElement,
): attr is keyof PcElementAttributes {
  return Reflect.has(elem.attrs, attr)
}

export const containerElements = [
  ElementType.Canvas,
  ElementType.Container,
  ElementType.Tab,
]
export function isContainerType(type: ElementType) {
  return containerElements.includes(type)
}
export function isContainer(element: PcElement) {
  return isContainerType(element.attrs.type)
}

export interface TabPane<T = PcElement> {
  id: string
  label: string
  children: T[]
}
export function isTab(
  a: object,
): a is PcElement &
  Required<Pick<PcElement, 'tabs'>> &
  Record<'attrs', PcElementAttributes & Required<PcTabAttributes>> {
  return Array.isArray((a as PcElement).tabs)
}

/** pc element */
export interface IPcElement extends BasicElement {
  children?: IPcElement[]
  tabs?: TabPane[]
  attrs: PcElementAttributes
}

export class PcElement implements IPcElement {
  el?: HTMLElement
  parent?: PcElement
  tabs?: TabPane[]
  children?: PcElement[]
  attrs: PcElementAttributes

  constructor(
    config: Pick<IPcElement, 'parent' | 'children' | 'attrs' | 'tabs'>,
  ) {
    this.parent = config.parent
    this.attrs = cloneDeep(config.attrs)
    if (config.children || isContainerType(config.attrs.type))
      this.children = config.children ?? []
    if (config.tabs) this.tabs = config.tabs
  }

  setEl(el?: HTMLElement) {
    this.el = el
  }
}

/**
 * return next unique id
 */
export function getNextId(element: PcElement): string {
  return (Number(getMaxId(element)) + 1).toString()
}

function getMaxId(element: PcElement): string {
  const ids: number[] = []

  if (element.attrs.id) ids.push(Number(element.attrs.id))

  if (element.children?.length) {
    for (const child of element.children) {
      const childId = getMaxId(child)
      if (childId) {
        ids.push(Number(childId))
      }
    }
  }
  if (element.tabs?.length) {
    for (const pane of element.tabs) {
      for (const child of pane.children) {
        const childId = getMaxId(child)
        if (childId) {
          ids.push(Number(childId))
        }
      }
    }
  }

  return ids.length > 0 ? Math.max(...ids).toString() : ''
}
