import type { SaPluginLayout } from '../plugin'
import type { PcElementAttributes } from './element'
import type { PcGraph } from './graph'
import { ElementType } from '../element'
import { BasicPlugins } from '../plugin'
import { ContextmenuPlugins } from './plugins/contextmenu'
import { RadioPlugins } from './plugins/radio'
import { SelectPlugins } from './plugins/select'
import { TabPlugins } from './plugins/tab'
import { TablePlugins } from './plugins/table'
import { TimePickerPlugins } from './plugins/timePicker'

const basicPlugins = [
  BasicPlugins['widget-id'],
  BasicPlugins['widget-name'],
  BasicPlugins['widget-style'],
  BasicPlugins['widget-size'],
  BasicPlugins['widget-position'],
  BasicPlugins['widget-font'],
  BasicPlugins['widget-border'],
]

export const PcPlugin: SaPluginLayout = {
  [ElementType.Canvas]: {
    basic: [
      BasicPlugins['widget-id'],
      BasicPlugins['widget-name'],
      BasicPlugins['widget-style'],
      BasicPlugins['widget-size'],
      BasicPlugins['widget-font'],
    ],
  },
  [ElementType.Container]: {
    basic: [...basicPlugins],
  },
  [ElementType.Text]: {
    basic: [...basicPlugins, BasicPlugins['widget-align']],
  },
  [ElementType.Input]: {
    basic: [...basicPlugins, BasicPlugins['widget-align']],
  },
  [ElementType.Textarea]: {
    basic: [...basicPlugins, BasicPlugins['widget-align']],
  },
  [ElementType.Button]: {
    basic: [...basicPlugins, BasicPlugins['widget-align']],
  },
  [ElementType.Radio]: {
    basic: [
      ...basicPlugins,
      RadioPlugins['widget-rows-x-columns'],
      SelectPlugins['select-options'],
    ],
  },
  [ElementType.Checkbox]: {
    basic: [
      ...basicPlugins,
      RadioPlugins['widget-rows-x-columns'],
      SelectPlugins['select-options'],
    ],
  },
  [ElementType.Select]: {
    basic: [
      ...basicPlugins,
      BasicPlugins['widget-align'],
      SelectPlugins['select-options'],
    ],
  },
  [ElementType.Table]: {
    basic: [...basicPlugins, TablePlugins['widget-table']],
  },
  [ElementType.Image]: {
    basic: [...basicPlugins],
  },
  [ElementType.Tab]: {
    basic: [...basicPlugins, TabPlugins['widget-tab-height']],
  },
  [ElementType.TabPane]: {},
  [ElementType.TimePicker]: {
    basic: [...basicPlugins, TimePickerPlugins['widget-time-format']],
  },
  [ElementType.Contextmenu]: {
    basic: [...basicPlugins, ContextmenuPlugins['widget-contextmenu-binds']],
  },
  [ElementType.Tree]: {
    basic: [...basicPlugins],
  },
  [ElementType.Map]: {
    basic: [...basicPlugins],
  },
  [ElementType.Chart]: {
    basic: [...basicPlugins],
  },
}

export function pcPluginValueChange<T extends keyof PcElementAttributes>(
  key: T,
  value: PcElementAttributes[T],
  graph: PcGraph,
) {
  const seleceted = graph.selected[0]

  if (!seleceted) return

  graph.updateElemData(seleceted, { [key]: value })
}
