// JT TODO: Types currently have the issue of playing strangely with arrays. `PropertyPath` is aware
// of valid array paths, but shows `.length` as a key and doesn't offer property suggestions when at an
// index (i.e., `something.0.else`).
// `PropertyAtPath` works fine, expect for when arrays are involved, in which case it gets very confused
// and everything becomes never.

type DotPrefix<T extends string> = T extends '' ? '' : `.${T}`;

export type PropertyAtPath<TObject, TPath extends string> = TObject extends object
  ? TPath extends `${infer TPrefix}.${infer TSuffix}`
    ? TPrefix extends keyof TObject
      ? PropertyAtPath<TObject[TPrefix], TSuffix>
      : never
    : // We know that the path doesn't contain any dot
    TPath extends keyof TObject
    ? TObject[TPath]
    : false
  : never;

export type PropertyPath<T> = (
  T extends object
    ? { [K in Exclude<keyof T, symbol>]: `${K}${DotPrefix<PropertyPath<T[K]>>}` }[Exclude<keyof T, symbol>]
    : ''
) extends infer D
  ? Extract<D, string>
  : never;
