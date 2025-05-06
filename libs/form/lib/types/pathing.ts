type DotPrefix<T extends string> = T extends '' ? '' : `.${T}`;

type ExtractArrayType<T> = T extends any[] ? T[number] : never;

export type FormValuePath<T> = (
  T extends any[] // is array
    ? ExtractArrayType<T> extends object
      ? `${number}.${FormValuePath<T[number]>}` | `${number}` | '' // for arrays of objects, allow the path to the array, an index of it, and drill into the element type
      : '' | `${number}` // for arrays of primitives, allow the path to the array, or an index of it
    : T extends Blob // don't drill into Blobs
    ? ''
    : T extends object
    ? { [K in Exclude<keyof T, symbol>]: `${K}${DotPrefix<FormValuePath<T[K]>>}` }[Exclude<keyof T, symbol>]
    : ''
) extends infer D
  ? Extract<D, string>
  : never;

type BaseFormValueTypeAtPath<T, TPath extends string> = TPath extends `${infer TPrefix}.${infer TSuffix}`
  ? T extends any[]
    ? TPrefix extends `${number}`
      ? BaseFormValueTypeAtPath<ExtractArrayType<T>, TSuffix>
      : never
    : T extends object
    ? TPrefix extends keyof T
      ? BaseFormValueTypeAtPath<T[TPrefix], TSuffix>
      : never
    : never
  : T extends any[]
  ? TPath extends `${number}`
    ? ExtractArrayType<T>
    : never
  : T extends object
  ? TPath extends keyof T
    ? T[TPath]
    : never
  : never;

export type FormValueTypeAtPath<T, TPath extends FormValuePath<T>> = BaseFormValueTypeAtPath<T, TPath>;
