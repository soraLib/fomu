import type { Predicate } from 'sa-lambda/Predicate'
import type { PartialOptional } from 'sugar-sajs'
import type { PropType, VNode } from 'vue'
import type { BasicElementAttributes } from '../../element'
import type { BasicGraph } from '../../graph'
import { FlashOutline } from '@vicons/ionicons5'
import { NIcon, NInput, NScrollbar } from 'naive-ui'
import { computed, defineComponent, ref } from 'vue'
import StencilGroup from './group'

import './index.scss'

export type StencilAttrKey = 'type' | 'name' | 'width' | 'height'
export type StencilAttributes<T = object> = PartialOptional<
  BasicElementAttributes & T,
  Exclude<keyof (BasicElementAttributes & T), StencilAttrKey>
>
// native stencil config
export type NativeStencil<T = object> = (graph: any /** TODO: */) => {
  groups: { name: string }[]
  nodes: {
    [key in ReturnType<NativeStencil<T>>['groups'][number]['name']]: {
      icon: string | VNode
      title?: string
      attrs: StencilAttributes<T>
      disabled?: Predicate<BasicGraph>
    }[]
  }
}
type Nodes = ReturnType<NativeStencil>['nodes']
export type NativeItem = Nodes[keyof Nodes][number]
export type ComposedNativeStencil =
  ReturnType<NativeStencil>['groups'][number] & NativeItem

export default defineComponent({
  name: 'SaFormLayoutStencil',

  props: {
    stencil: {
      required: true,
      type: Function as PropType<NativeStencil>,
    },
    graph: {
      required: true,
      type: Object as PropType<BasicGraph>,
    },
  },

  setup(props) {
    const stencilSearch = ref('')
    const stencilSearchChange = (search: string) => {
      stencilSearch.value = search
    }

    const nativeStencil = ref<ReturnType<NativeStencil> | null>(null)
    const nativeStencilGroups = computed(() => {
      if (!nativeStencil.value) return null

      const gMap: Map<ComposedNativeStencil['name'], ComposedNativeStencil[]> =
        new Map(nativeStencil.value.groups.map((g) => [g.name, []]))
      for (const [key, value] of Object.entries(nativeStencil.value.nodes)) {
        const list = gMap.get(key)
        if (list) {
          gMap.set(
            key,
            value.map((v) => ({ ...v, name: key })),
          )
        }
      }

      return [...gMap]
    })
    const filteredNativeStencilGroups = computed(() => {
      if (!stencilSearch.value) return nativeStencilGroups.value

      return nativeStencilGroups.value?.map(
        (group): [string, ComposedNativeStencil[]] => [
          group[0],
          group[1].filter((item) => {
            return new RegExp(stencilSearch.value, 'i').test(item.attrs.name)
          }),
        ],
      )
    })

    nativeStencil.value = (props.stencil as NativeStencil)(props.graph)

    return () => (
      <div class="fomu-stencil flex flex-col justify-start p-1 box-border relative !overflow-hidden">
        <NInput
          class="stencil-search"
          value={stencilSearch.value}
          onUpdateValue={stencilSearchChange}
          clearable
          placeholder="Search Component"
        >
          {{
            prefix: () => <NIcon component={FlashOutline} />,
          }}
        </NInput>

        <NScrollbar>
          {// groups
          filteredNativeStencilGroups.value
            ?.map(
              (group) =>
                group[1].length && (
                  <StencilGroup group={group} graph={props.graph} />
                ),
            )
            .filter(Boolean)}
        </NScrollbar>
      </div>
    )
  },
})
