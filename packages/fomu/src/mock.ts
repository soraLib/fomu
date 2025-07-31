import type { Cell } from './shape'
import { Shape } from './shape'

export const mockCells: Cell[] = [
  Shape.Text.fromAttrs({
    x: 0,
    y: 0,
    width: 200,
    height: 60,
    content: 'mock text a',
    background: '#fef3c7',
    color: '#92400e',
    fontSize: 16,
    textAlign: 'center',
    padding: ['12px', '16px', '12px', '16px'],
    borderWidth: 1,
    borderColor: '#fcd34d',
    borderStyle: 'solid',
    borderRadius: 8,
  }),

  Shape.Text.fromOptions({
    id: '1',
    attrs: {
      content: 'mock text b',
      x: 0,
      y: 100,
      width: 200,
      height: 80,
      background: '#dbeafe',
      color: '#1e3a8a',
      fontSize: 14,
      textAlign: 'left',
      padding: ['12px', '16px', '12px', '16px'],
      borderWidth: 1,
      borderColor: '#3b82f6',
      borderStyle: 'dashed',
      borderRadius: 6,
    },
  }),

  Shape.Absolute.fromOptions({
    attrs: {
      x: 400,
      y: 200,
      width: 300,
      height: 300,
      background: '#f0fdf4',
      color: '#15803d',
      fontSize: 16,
      textAlign: 'center',
      padding: ['20px', '20px', '20px', '20px'],
      borderWidth: 2,
      borderColor: '#86efac',
      borderStyle: 'solid',
      borderRadius: 12,
    },
    children: [
      new Shape.Text({
        attrs: {
          content: 'mock text c inner',
          x: 50,
          y: 80,
          width: 150,
          height: 50,
          background: '#ecfccb',
          color: '#3f6212',
          fontSize: 14,
          textAlign: 'center',
          padding: ['8px', '12px', '8px', '12px'],
          borderWidth: 1,
          borderColor: '#84cc16',
          borderStyle: 'solid',
          borderRadius: 6,
        },
      }),
    ],
  }),
]
