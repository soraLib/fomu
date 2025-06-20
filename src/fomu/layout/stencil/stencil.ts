import type { StencilAttributes } from '.'
import { useEventListener } from '@vueuse/core'
import { setDataTransfer } from '../../utils/stencil'

export namespace Stencil {
  export function updatePosition(target: HTMLElement, evt: MouseEvent) {
    target.style.left = `${evt.clientX}px`
    target.style.top = `${evt.clientY}px`
  }
  export function start(attrs: StencilAttributes, evt: DragEvent) {
    setDataTransfer(evt, 'effectAllowed', 'copy', false)
    evt.dataTransfer?.setData('element', JSON.stringify(attrs))

    const ghost = createGhostElement(attrs)
    evt.dataTransfer?.setDragImage(ghost, attrs.width / 2, attrs.height / 2)

    const cleanup = useEventListener('dragend', () => {
      document.body.removeChild(ghost)
      cleanup()
    })
  }
}

export function createGhostElement(attrs: StencilAttributes) {
  const ghost = document.createElement('div')
  ghost.classList.add('drag-ghost')

  ghost.style.cssText = `
    width: ${attrs.width}px;
    height: ${attrs.height}px;
    border: 1px solid var(--c-brand);
    position: absolute;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
  `

  ghost.innerHTML = attrs.name

  document.body.appendChild(ghost)

  return ghost
}
