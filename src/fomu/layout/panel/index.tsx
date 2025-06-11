import type { PropType } from 'vue'
import type { SaController } from '@/fomu/config'
import type { BasicGraph } from '@/fomu/graph'
import { useLocalStorage, useMagicKeys, whenever } from '@vueuse/core'
import { defineComponent } from 'vue'
import { Resize } from '@/components/Resize'

import './index.scss'

export default defineComponent({
  name: 'SaFormLayoutPanel',
  props: {
    graph: {
      required: true,
      type: Object as PropType<BasicGraph>,
    },
    controller: {
      required: true,
      type: Object as PropType<SaController>,
    },
  },
  setup(props) {
    const panelHeight = useLocalStorage('form-panel-height', 300)
    const { ctrl_backquote } = useMagicKeys()
    whenever(ctrl_backquote, () => {
      panelHeight.value = panelHeight.value < 100 ? 300 : 8
    })

    return () => (
      <Resize
        height={panelHeight}
        onUpdate:height={(height) => (panelHeight.value = height)}
        min={8}
        direction="top"
      >
        <div class="p-24">TODO: Events</div>
      </Resize>
    )
  },
})
