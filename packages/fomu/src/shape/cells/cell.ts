import type { Rect } from 'fomu'
import type { CommonStyle } from 'fomu'
import { Subscriber } from '@fomu/common'
import { StringExt } from '@fomu/common'
import { CellType } from 'fomu'

export type CellEventName = 'mousedown' | 'mouseup' | 'mouseover' | 'click' | 'dblclick' | 'contextmenu' // TODO: etc...

export type BaseCellAttributes = CommonStyle & Rect
export type CellMetadata<T extends object = {}>
  = keyof T extends never
    ? { id?: string, attrs?: Partial<BaseCellAttributes> }
    : { id?: string, attrs: Partial<BaseCellAttributes> & T }
export interface CellEventArgs {
  cell: Cell
  event: MouseEvent
}
export class Cell<Attrs extends object = {}> {
  readonly subscriber: Subscriber<Record<CellEventName, [CellEventArgs]>>
  readonly type: CellType
  readonly id: string
  readonly attrs: Partial<BaseCellAttributes> & Attrs
  el?: Element
  parent?: Cell

  constructor(metadata: CellMetadata<Attrs> = {} as CellMetadata<Attrs>) {
    this.id = metadata.id ?? StringExt.uuid()
    this.subscriber = new Subscriber()
    this.attrs = { ...(metadata.attrs || {}) } as Partial<BaseCellAttributes> & Attrs
    this.type = (this.constructor as any).type ?? CellType.Cell

    this.setup()
  }

  static fromAttrs<A extends object>(
    this: new (metadata: CellMetadata<A>) => Cell<A>,
    attrs: CellMetadata<A>['attrs'],
    id?: string,
  ): Cell<A> {
    return new this({ id, attrs } as CellMetadata<A>)
  }

  setup() {
    // listen to events
  }

  setEl(el?: Element) {
    this.el = el
  }
}
