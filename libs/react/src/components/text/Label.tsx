import { ComponentPropsWithRef, forwardRef } from 'react';
import { buildClassName } from '../../util';

export interface LabelProps extends ComponentPropsWithRef<'label'> {}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...otherProps }, ref) => {
    return (
      <label
        className={buildClassName(className, 'jtjs-label')}
        {...otherProps}
        ref={ref}
      />
    );
  }
);
