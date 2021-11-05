import { HTMLProps } from 'react';
import { useTheme } from '../hooks/use-theme.hook';
import { ThemedProps } from '../prop-types/themed.props';
import { formatClassName } from '../util/util-functions';

export interface TextProps
  extends HTMLProps<HTMLParagraphElement>,
    ThemedProps {}

/**
 * A base text component. This component wraps a <p> tag, so you shouldn't be making any tags a child of this tag
 * if the tag would be invalid as a child of a <p> tag.
 */
export const Text = ({
  theme: themeProp,
  className,
  children,
  style,
  ...otherProps
}: TextProps) => {
  const theme = themeProp ?? useTheme()[0];

  return (
    <p
      className={formatClassName('jtjs-text', className)}
      style={{
        color: theme?.text,
        ...style,
      }}
      {...otherProps}
    >
      {children}
    </p>
  );
};

export default Text;
