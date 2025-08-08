/**
 * A TypeScript type that creates a tuple with type `T` repeated `N` times.
 *
 * @example
 *
 * ```ts
 * type A = Repeat<1, 3>;     // [1, 1, 1]
 * type B = Repeat<'a', 2>;   // ['a', 'a']
 * type C = Repeat<'a', 0>;   // []
 * ```
 */
export type Repeat<T, N extends number, R extends T[] = []>
  = R['length'] extends N ? R : Repeat<T, N, [...R, T]>

/**
 * A function that tests a value of type T and returns a truthy/falsy result.
 *
 * @example
 *
 * const isPositive: Predicate<number> = n => n > 0
 * [1, -2, 3].filter(isPositive) // [1, 3]
 */
export type Predicate<T> = (value: T) => unknown
