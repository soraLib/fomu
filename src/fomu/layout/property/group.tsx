import type { PropType } from 'vue'
import type { SaController } from '../../config'
import type { BasicGraph } from '../../graph'
import type { SaGroupPlugin } from '../../plugin'
import { ChevronDown, TrashBinOutline } from '@vicons/ionicons5'
import { useToggle } from '@vueuse/core'
import { NButton, NCollapseTransition, NIcon } from 'naive-ui'
import { defineComponent } from 'vue'

import { useClazs } from '../../utils/class'
import ControllerItem from './item'

export default defineComponent({
  name: 'ControllerGroup',
  props: {
    plugin: {
      required: true,
      type: Object as PropType<SaGroupPlugin>,
    },
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
    const [visible, toggleVisible] = useToggle(true)

    const onClear = (evt: MouseEvent) => {
      evt.stopPropagation()

      props.graph.updateElemData(
        props.graph.selected[0],
        Object.values(props.plugin.plugins).reduce((acc, cur) => {
          return {
            ...acc,
            [cur.attr]: cur.default ?? undefined,
          }
        }, {}),
      )
    }

    return () => (
      <div class="plugin-group">
        <div
          class={useClazs('plugin-group-label', {
            'is-collapsed': !visible.value,
          })}
          onClick={() => toggleVisible()}
        >
          <div class="flex items-center gap-1">
            <span class="group-collapse-label">{props.plugin.label}</span>

            <span class="group-collapse-caret">
              <NIcon size={14}>
                <ChevronDown />
              </NIcon>
            </span>
          </div>

          {props.plugin.clearable && (
            <NButton
              secondary
              type="warning"
              circle
              text
              size="small"
              title="Clear"
              v-slots={{
                icon: () => (
                  <NIcon size={14}>
                    <TrashBinOutline />
                  </NIcon>
                ),
              }}
              onClick={onClear}
            />
          )}
        </div>

        <NCollapseTransition show={visible.value}>
          <div class="plugin-group-collapse">
            <div class="plugin-group-content">
              {Object.values(props.plugin.plugins).map((plugin) => (
                <ControllerItem
                  isInsideGroup
                  plugin={plugin}
                  controller={props.controller}
                  graph={props.graph}
                />
              ))}
            </div>
          </div>
        </NCollapseTransition>
      </div>
    )
  },
})
