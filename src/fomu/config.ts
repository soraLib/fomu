import type { DefineComponent, PropType } from 'vue'

import type { BasicGraph, GraphType } from './graph'
import type { HeaderToolkit } from './layout/header/toolkit'
import type { NativeStencil } from './layout/stencil'
import type { SaPlugin, SaPluginLayout } from './plugin'
import { ElementType } from './element'
import { PcGraph } from './PcForm/graph'
import { PcHeaderToolkits } from './PcForm/layout/header'
import { getPcStencil } from './PcForm/layout/stencil'
import PcWorkspace from './PcForm/layout/workspace'
import { PcPlugin, pcPluginValueChange } from './PcForm/plugin'

const PcComponents = import.meta.glob('./PcForm/controller/*/index.tsx')

function createPcFormConfig() {
  return {
    graph: new PcGraph({
      attrs: {
        type: ElementType.Canvas,
        id: '1',
        name: 'Pc Form Demo',
        width: 800,
        height: 600,
        x: 0,
        y: 0,
      },
    }),
    toolkits: PcHeaderToolkits,
    stencil: getPcStencil(),
    workspace: PcWorkspace as any,
    controller: {
      plugins: PcPlugin,
      valueChange: pcPluginValueChange,
      components: PcComponents,
    },
  }
}

export interface SaController {
  plugins: SaPluginLayout
  valueChange: (...args: any[]) => void
  components: {
    [key: NonNullable<SaPlugin['dialog']>['component']]: () => Promise<any>
  }
}

export type ILayout = {
  [key in GraphType]: () => {
    graph: BasicGraph
    toolkits: HeaderToolkit[]
    stencil: NativeStencil
    workspace: DefineComponent<{
      graph: {
        required: true
        type: PropType<BasicGraph>
      }
    }>
    controller: SaController
  }
}

export const LAYOUTS: ILayout = {
  PcForm: () => createPcFormConfig(),
}
