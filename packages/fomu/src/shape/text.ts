import type { CellMetadata, NormalCellAttributes } from './cell'
import { Cell } from './cell'

export type TextAttributes = NormalCellAttributes & {
  content: string
}

export type TextMetadata = CellMetadata<TextAttributes>

export class Text extends Cell<TextAttributes> {
  static readonly type = 'text' as const

  constructor(metadata: TextMetadata) {
    super(metadata)
  }

  static fromOptions(metadata: TextMetadata) {
    return new Text(metadata)
  }
}
export type TextCell = InstanceType<typeof Text>
