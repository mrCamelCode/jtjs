export type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;

export type MaybeAsync<T> = T | Promise<T>;

export type Optional<T> = T | undefined;