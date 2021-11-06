import { HTMLProps } from 'react';
import { useTheme } from '../../hooks/use-theme.hook';
import { ThemedProps } from '../../prop-types/themed.props';
import { formatClassName } from '../../util/util-functions';

export interface LabelProps extends HTMLProps<HTMLLabelElement>, ThemedProps {}

/**
 * A wrapper for the base label component that includes theme support.
 */
export const Label = ({
  className,
  style,
  children,
  theme: themeProp,
  ...otherProps
}: LabelProps) => {
  const theme = themeProp ?? useTheme()[0];

  return (
    <label
      className={formatClassName('jtjs-label', className)}
      style={{
        color: theme?.text,
        ...style,
      }}
      {...otherProps}
    >
      {children}
    </label>
  );
};

export default Label;
