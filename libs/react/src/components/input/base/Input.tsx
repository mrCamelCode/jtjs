import { ComponentPropsWithRef, forwardRef } from 'react';
import { SizableProps, getPrefWidthStyle } from '../../../types/sizable.props';
import { buildClassName } from '../../../util';

export interface InputProps
  extends Omit<ComponentPropsWithRef<'input'>, 'children'>,
    SizableProps {}

/**
 * A light wrapper for the `input` element with very little default configuration.
 * Usually, you won't want to use this directly and would probably prefer using
 * something like the Checkbox, Radio, or TextInput components.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, style, prefWidth, ...otherProps }, ref) => {
    return (
      <input
        className={buildClassName(className, 'jtjs-input')}
        style={{
          ...getPrefWidthStyle(prefWidth),
          ...style,
        }}
        {...otherProps}
        ref={ref}
      />
    );
  }
);
