import { HTMLProps } from 'react';
import { formatClassName } from '../util/util-functions';

export interface TextProps extends HTMLProps<HTMLParagraphElement> {}

/**
 * A base text component.
 */
export const Text = ({ className, children, ...otherProps }: TextProps) => {
  return (
    <p className={formatClassName('jtjs-text', className)} {...otherProps}>
      {children}
    </p>
  );
};

export default Text;
