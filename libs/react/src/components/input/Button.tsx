import { HTMLProps } from 'react';
import { formatClassName } from '../../util/util-functions';

export interface ButtonProps
  extends Omit<HTMLProps<HTMLButtonElement>, 'type'> {}

/**
 * A wrapper for the base button component.
 */
export const Button = ({
  className,
  children,
  disabled,
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      className={formatClassName('jtjs-button')}
      disabled={disabled}
      aria-disabled={disabled}
      {...otherProps}
    >
      <span className="jtjs-button-content">{children}</span>
    </button>
  );
};

export default Button;
