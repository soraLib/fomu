import type { CSSProperties, PropType } from 'vue'
import type { PcGraph } from '../../graph'
import { computed, defineComponent, ref } from 'vue'
import { AutoScale } from '@/components/AutoScale'

import { useClazs } from '../../../utils/class'
import { usePanning } from '../../../utils/pan'
import Contextmenu from './contextmenu'
import Workspace from './graph'
import Group from './group'
import { createMock } from './mock'

import Position from './position'
import Selection from './selection'
import Snapline from './snapline'

export default defineComponent({
  name: 'SaPcFormRender',
  props: {
    graph: {
      required: true,
      type: Object as PropType<PcGraph>,
    },
  },

  setup(props) {
    const mock = createMock()
    props.graph.setCanvas(mock.canvas)
    props.graph.addChildren(mock.children, mock.canvas)
    props.graph.setSelected(['2', '3'])

    const contextmenuRef = ref<InstanceType<typeof Contextmenu> | null>(null)
    const onContextmenu = (event: MouseEvent) => {
      event.preventDefault()
      contextmenuRef.value?.open(event)
    }
    const { isPanning, isPressSpace, executePanning } = usePanning()
    const onMousedown = (event: MouseEvent) => {
      isPressSpace.value && executePanning(event, props.graph)
    }

    const gridStyle = computed<CSSProperties>(() => {
      const grid = props.graph.grid
      if (!grid.visible) {
        return {
          backgroundColor: 'var(--c-bg-soft)',
        }
      }

      if (grid.type === 'dot') {
        return {
          backgroundPositionX: '0.5px',
          backgroundPositionY: '0.5px',
          backgroundImage: `linear-gradient(var(--c-bg) ${
            grid.size - 1
          }px, transparent 0), linear-gradient(90deg, transparent ${
            grid.size - 1
          }px, #86909f 0)`,
          backgroundSize: `${grid.size}px ${grid.size}px, ${grid.size}px ${grid.size}px`,
        }
      }

      // mesh
      const boldLineColor =
        grid.type === 'double-mesh' ? 'var(--c-line-bold)' : 'transparent'
      return {
        backgroundPositionX: '-1px',
        backgroundPositionY: '-1px',
        backgroundImage: `linear-gradient(var(--c-line) 1px, transparent 0),
linear-gradient(90deg, var(--c-line) 1px, transparent 0),
linear-gradient(${boldLineColor} 1px, transparent 0),
linear-gradient(90deg, ${boldLineColor} 1px, transparent 0)`,
        backgroundSize: `${grid.size}px ${grid.size}px, ${grid.size}px ${
          grid.size
        }px, ${grid.size * 5}px ${grid.size * 5}px, ${grid.size * 5}px ${
          grid.size * 5
        }px`,
      }
    })

    return () => (
      <div class="w-full h-full relative">
        <div class="w-full h-full">
          <AutoScale
            modelValue={props.graph.scale.ratio / 100}
            type={props.graph.scale.type}
            size={{
              width: props.graph.canvas.attrs.width,
              height: props.graph.canvas.attrs.height,
            }}
            onUpdate:model-value={(ratio: number) =>
              props.graph.setScale({
                ratio: ratio * 100,
              })
            }
          >
            <div
              class={useClazs('relative workspace-container', {
                'cursor-move': props.graph.isDragging,
                'cursor-crosshair':
                  props.graph.isSelecting &&
                  props.graph.selectionBox.width > 0 &&
                  props.graph.selectionBox.height > 0,
                'cursor-grabbing': isPanning.value,
                'select-none':
                  isPanning.value ||
                  props.graph.isSelecting ||
                  props.graph.isDragging ||
                  props.graph.isResizing,
              })}
              style={{
                width: `${props.graph.canvas.attrs.width}px`,
                height: `${props.graph.canvas.attrs.height}px`,
                ...gridStyle.value,
              }}
              onContextmenu={onContextmenu}
              onMousedown={onMousedown}
            >
              <Workspace
                ref="workspace"
                graph={props.graph}
                class={useClazs({ 'pointer-events-none': isPressSpace.value })}
              />

              {props.graph.snapline.enabled && <Snapline graph={props.graph} />}
              {props.graph.selection.showSelectionBox && (
                <Group graph={props.graph} />
              )}
              {props.graph.selection.enabled && (
                <Selection graph={props.graph} />
              )}
              <Position graph={props.graph} />
            </div>
          </AutoScale>

          <Contextmenu ref={contextmenuRef} graph={props.graph} />
        </div>
      </div>
    )
  },
})
