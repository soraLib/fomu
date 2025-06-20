import type { PropType } from 'vue'

import type { BasicGraph } from '../../graph'
import { defineComponent } from 'vue'
import GraphHistory from './history'
import GraphScaler from './scaler/scaler'
import GraphSettings from './settings'

import GraphShortcutsGuide from './shortcuts-guide/shortcuts-guide'
import GraphShortcuts from './shortcuts/shortcuts'

import './index.scss'

export default defineComponent({
  name: 'SaFormLayoutFooter',

  props: {
    graph: {
      required: true,
      type: Object as PropType<BasicGraph>,
    },
  },

  setup(props) {
    return () => (
      <div class="fomu-footer flex justify-start items-center gap-4">
        <GraphHistory graph={props.graph} />
        <GraphShortcuts class="grow" graph={props.graph} />
        <GraphScaler graph={props.graph} />
        <GraphSettings class="mx-2" graph={props.graph} />
        <GraphShortcutsGuide />
      </div>
    )
  },
})
