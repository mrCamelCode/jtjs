import { HTMLProps } from 'react';
import { formatClassName } from '../../util/util-functions';

export interface LabelProps extends HTMLProps<HTMLLabelElement> {}

/**
 * A wrapper for the base label component.
 */
export const Label = ({ className, children, ...otherProps }: LabelProps) => {
  return (
    <label className={formatClassName('jtjs-label', className)} {...otherProps}>
      {children}
    </label>
  );
};

export default Label;
