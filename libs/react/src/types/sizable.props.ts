import { CSSProperties } from 'react';

export enum Size {
  XXS = '3rem',
  XS = '5rem',
  SM = '8rem',
  MD = '12rem',
  LG = '18rem',
  XL = '24rem',
  XXL = '30rem'
}

export interface SizableProps {
  /**
   * The preferred width of the element. If set, this tells the element to have a
   * max-width that matches what's specified. Can be a string for an exact unit,
   * or one of the available variants of {@link Size}.
   */
  prefWidth?: Size | string;
}

export function getPrefWidthStyle(
  prefWidth: SizableProps['prefWidth']
): CSSProperties {
  return prefWidth
    ? {
        maxWidth: prefWidth,
      }
    : {};
}
