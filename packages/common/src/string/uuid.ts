export function uuid(): string {
  let res = ''
  const template = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'

  for (let i = 0, len = template.length; i < len; i += 1) {
    const s = template[i]
    const r = (Math.random() * 16) | 0
    const v = s === 'x' ? r : s === 'y' ? (r & 0x3) | 0x8 : s
    res += v.toString(16)
  }
  return res
}
