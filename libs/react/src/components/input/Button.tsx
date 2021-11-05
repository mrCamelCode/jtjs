import { HTMLProps } from 'react';
import { ThemedProps } from '../../prop-types/themed.props';
import { formatClassName } from '../../util/util-functions';
import { useTheme } from '../../hooks/use-theme.hook';

export interface ButtonProps
  extends Omit<HTMLProps<HTMLButtonElement>, 'type'>,
    ThemedProps {}

/**
 * A wrapper for the base button component that includes theme support.
 */
export const Button = ({
  className,
  style,
  children,
  theme: themeProp,
  disabled,
  ...otherProps
}: ButtonProps) => {
  const theme = themeProp ?? useTheme()[0];

  return (
    <button
      className={formatClassName('jtjs-button')}
      style={{
        backgroundColor: disabled ? theme?.disabled : theme?.button,
        color: theme?.buttonText,
        borderColor: theme?.outline,
        ...style,
      }}
      disabled={disabled}
      aria-disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
