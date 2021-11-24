import { createElement, HTMLProps } from 'react';
import { formatClassName } from '../util/util-functions';

export interface HeadingProps extends HTMLProps<HTMLHeadingElement> {
  /**
   * (Optional, defaults to 3) The importance of the heading. This will be used to determine the most appropriate
   * heading element to use and should generally denote relative importance of the heading on the page.
   */
  importance?: 1 | 2 | 3 | 4 | 5 | 6;
}

/**
 * Wraps the base heading elements and uses the appropriate element depending on the `importance` of the Heading.
 */
export const Heading = ({
  className,
  importance = 3,
  ...otherProps
}: HeadingProps) => {
  return createElement(`h${importance}`, {
    className: formatClassName('jtjs-heading', className),
    ...otherProps,
  });
};

export default Heading;
