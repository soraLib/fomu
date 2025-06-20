export function getStyle(element: HTMLElement, styleName: any): string {
  if (!element || !styleName) {
    return ''
  }
  if (styleName === 'float') {
    styleName = 'cssFloat'
  }
  try {
    const style = element.style[styleName]
    if (style) {
      return style
    }
    const computed = document.defaultView?.getComputedStyle(element, '')

    return computed ? computed[styleName] : ''
  } catch {
    return element.style[styleName]
  }
}

export function isInViewport(element: HTMLElement) {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

export function hasVerticalScrollbar(element: HTMLElement) {
  return element.scrollHeight > element.clientHeight
}
export function hasHorizontalScrollbar(element: HTMLElement) {
  return element.scrollWidth > element.clientWidth
}
export function hasScrollbar(element: HTMLElement) {
  return hasVerticalScrollbar(element) || hasHorizontalScrollbar(element)
}

export function isScroll(
  el: HTMLElement,
  isVertical?: boolean,
): RegExpMatchArray {
  const determinedDirection = isVertical === null || isVertical === undefined
  const overflow = determinedDirection
    ? getStyle(el, 'overflow')
    : isVertical
      ? getStyle(el, 'overflow-y')
      : getStyle(el, 'overflow-x')

  return overflow.match(/(scroll|auto)/)!
}

export function getScrollContainer(
  el: HTMLElement,
  isVertical?: boolean,
): Window | HTMLElement {
  let parent: HTMLElement = el
  while (parent) {
    if ([window, document, document.documentElement].includes(parent)) {
      return window
    }
    if (isScroll(parent, isVertical)) {
      return parent
    }
    parent = parent.parentNode as HTMLElement
  }

  return parent
}

export function isInContainer(
  el?: HTMLElement,
  container?: HTMLElement,
): boolean {
  if (!el || !container) {
    return false
  }

  const elRect = el.getBoundingClientRect()
  let containerRect: Partial<DOMRect>

  if (
    [window, document, document.documentElement, null, undefined].includes(
      container,
    )
  ) {
    containerRect = {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      left: 0,
    }
  } else {
    containerRect = container.getBoundingClientRect()
  }

  return (
    elRect.top < containerRect.bottom! &&
    elRect.bottom > containerRect.top! &&
    elRect.right > containerRect.left! &&
    elRect.left < containerRect.right!
  )
}
