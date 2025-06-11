import type { PropType } from 'vue'
import type { BasicGraph } from '../../graph'
import type { HeaderToolkit } from './toolkit'
import { NScrollbar } from 'naive-ui'
import { defineComponent } from 'vue'
import Layout from './layout'
import Toolkit from './toolkit'
import './index.scss'

export default defineComponent({
  name: 'SaFormLayoutHeader',
  props: {
    toolkits: {
      required: true,
      type: Array as PropType<HeaderToolkit[]>,
    },
    graph: {
      required: true,
      type: Object as PropType<BasicGraph>,
    },
  },
  setup(props) {
    return () => (
      <div class="fomu-header overflow-auto">
        <NScrollbar x-scrollable>
          <div class="flex flex-col p-1">
            <Layout graph={props.graph} />
            <Toolkit toolkits={props.toolkits} graph={props.graph} />
          </div>
        </NScrollbar>
      </div>
    )
  },
})
