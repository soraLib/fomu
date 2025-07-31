import type { Cell, CellMetadata } from 'fomu'
import { ContainerCell } from 'fomu'
import { CellType } from 'fomu/types'

export interface AbsoluteLayoutAttributes {}
export type AbsoluteLayoutMetadata = CellMetadata<AbsoluteLayoutAttributes> & {
  children?: Cell[]
}

export class AbsoluteLayout extends ContainerCell<AbsoluteLayoutAttributes> {
  static readonly type = CellType.Absolute

  constructor(metadata: AbsoluteLayoutMetadata) {
    super(metadata)
  }

  static fromOptions(metadata: AbsoluteLayoutMetadata) {
    return new AbsoluteLayout(metadata)
  }
}
export type AbsoluteLayoutCell = InstanceType<typeof AbsoluteLayout>
