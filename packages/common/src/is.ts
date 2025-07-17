export const isNullish = (val: unknown): val is null | undefined => {
  return val === null || val === undefined
}

export const isString = (val: unknown): val is string => {
  return typeof val === 'string'
}

export const isObject = (val: unknown): val is object => {
  return typeof val === 'object' && val !== null
}
