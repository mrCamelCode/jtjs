import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { formatClassName } from '../../util/util-functions';

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

/**
 * A wrapper for the base button component.
 *
 * Note that the `type` prop is set to "button" by default, but can be overridden. This is to avoid having buttons
 * work unexpectedly as submit buttons when you use them in a form.
 */
export const Button = ({
  className,
  children,
  disabled,
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      className={formatClassName('jtjs-button', className)}
      disabled={disabled}
      aria-disabled={disabled}
      type="button"
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
