import { forwardRef } from 'react';
import { Flexbox, FlexboxProps } from './Flexbox';
import { buildClassName } from '../../../util';

export interface ContentboxProps extends FlexboxProps {
  /**
   * (Optional, defaults to `false`). Whether the box should have a marker class that indicates it should be filled
   * (have a background color).
   */
  filled?: boolean;
}

/**
 * A simple wrapper meant to house related content.
 */
export const Contentbox = forwardRef<HTMLDivElement, ContentboxProps>(
  ({ className, filled = false, ...otherProps }, ref) => {
    return (
      <Flexbox
        className={buildClassName(
          className,
          'jtjs-contentbox',
          filled ? 'jtjs-filled' : ''
        )}
        {...otherProps}
        ref={ref}
      />
    );
  }
);
