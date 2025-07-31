import type { CellMetadata } from 'fomu'
import { Cell } from 'fomu'

export interface AbsoluteLayoutAttributes {}
export type AbsoluteLayoutMetadata = CellMetadata<AbsoluteLayoutAttributes> & {
  children?: Cell[]
}

export class AbsoluteLayout extends Cell<AbsoluteLayoutAttributes> {
  static readonly type = 'absolute' as const

  children: Cell[] = []

  constructor(metadata: AbsoluteLayoutMetadata) {
    super(metadata)

    this.children = metadata.children ?? []
  }

  static fromOptions(metadata: AbsoluteLayoutMetadata) {
    return new AbsoluteLayout(metadata)
  }
}
export type AbsoluteLayoutCell = InstanceType<typeof AbsoluteLayout>
