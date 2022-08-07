import { forwardRef, PropsWithoutRef } from 'react';
import { buildClassName } from '../../util/util-functions';

export interface InputProps
  extends PropsWithoutRef<JSX.IntrinsicElements['input']> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...otherProps }: InputProps, ref) => {
    return (
      <input
        className={buildClassName(className, 'jtjs-input')}
        ref={ref}
        {...otherProps}
      />
    );
  }
);

export default Input;
