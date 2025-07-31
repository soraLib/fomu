import type { CellMetadata } from 'fomu'
import { Cell } from 'fomu'
import { CellType } from 'fomu/types'

export interface TextAttributes {
  content: string
}
export type TextMetadata = CellMetadata<TextAttributes>

export class Text extends Cell<TextAttributes> {
  static readonly type = CellType.Text

  constructor(metadata: TextMetadata) {
    super(metadata)
  }

  static fromOptions(metadata: TextMetadata) {
    return new Text(metadata)
  }
}
export type TextCell = InstanceType<typeof Text>
