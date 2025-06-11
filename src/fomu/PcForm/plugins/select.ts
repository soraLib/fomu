import { SaPluginType } from '../../plugin'

export interface SelectOption {
  label: string
  value: any
}

export const SelectPlugins = {
  'select-options': {
    label: 'options',
    attr: 'options',
    type: SaPluginType.Dialog,
    dialog: {
      component: 'widget-options',
      title: 'Options',
    },
    filter: (value: SelectOption[]) =>
      value.map((item) => item.label).join('; '),
  },
} as const
