import { forwardRef, HTMLProps } from 'react';
import { formatClassName } from '../../util/util-functions';

interface BaseFlexboxProps {
  direction?: 'row' | 'column';
  reverseDirection?: boolean;
  horizontalAlignment?: 'left' | 'center' | 'right';
  verticalAlignment?: 'top' | 'center' | 'bottom';
  wrap?: boolean;
  reverseWrap?: boolean;
  spacing?: string;
}

export interface FlexboxProps
  extends BaseFlexboxProps,
    Omit<HTMLProps<HTMLDivElement>, 'wrap'> {}

/**
 * A wrapper that allows for rapid and simple assembly of flexboxes for common use cases.
 */
export const Flexbox = forwardRef<HTMLDivElement, FlexboxProps>(
  (
    {
      className,
      children,
      style,
      direction = 'row',
      reverseDirection = false,
      horizontalAlignment = 'left',
      verticalAlignment = 'top',
      wrap = true,
      reverseWrap = false,
      spacing = '0.5rem',
      ...otherProps
    },
    ref
  ) => {
    const flexWrap = `${wrap ? 'wrap' : 'nowrap'}${
      reverseWrap && wrap ? '-reverse' : ''
    }`;
    const flexFlow = `${direction}${
      reverseDirection ? '-reverse' : ''
    } ${flexWrap}`;

    const mainAxis = direction === 'row' ? 'x' : 'y';
    const crossAxis = mainAxis === 'x' ? 'y' : 'x';

    let horizontalAligmentToFlexTerms = '';
    switch (horizontalAlignment) {
      case 'left':
        horizontalAligmentToFlexTerms =
          mainAxis === 'x' && reverseDirection ? 'flex-end' : 'flex-start';
        break;
      case 'center':
        horizontalAligmentToFlexTerms = 'center';
        break;
      case 'right':
        horizontalAligmentToFlexTerms =
          mainAxis === 'x' && reverseDirection ? 'flex-start' : 'flex-end';
        break;
    }

    let verticalAlignmentToFlexTerms = '';
    switch (verticalAlignment) {
      case 'top':
        verticalAlignmentToFlexTerms =
          mainAxis === 'y' && reverseDirection ? 'flex-end' : 'flex-start';
        break;
      case 'center':
        verticalAlignmentToFlexTerms = 'center';
        break;
      case 'bottom':
        verticalAlignmentToFlexTerms =
          mainAxis === 'y' && reverseDirection ? 'flex-start' : 'flex-end';
        break;
    }

    // justify-content drives the alignment and spacing along the main axis.
    const justifyContent =
      mainAxis === 'x'
        ? horizontalAligmentToFlexTerms
        : verticalAlignmentToFlexTerms;

    // align-items drives the alignment along the cross axis
    const alignItems =
      crossAxis === 'x'
        ? horizontalAligmentToFlexTerms
        : verticalAlignmentToFlexTerms;

    // align-content drives the flex container's lines when multiline, and drives spacing and alignment along the
    // cross axis.
    const alignContent =
      crossAxis === 'x'
        ? horizontalAligmentToFlexTerms
        : verticalAlignmentToFlexTerms;

    return (
      <div
        className={formatClassName('jtjs-flexbox', className)}
        style={{
          display: 'flex',
          flexFlow,
          justifyContent,
          alignItems,
          alignContent,
          gap: spacing,
          ...style,
        }}
        ref={ref}
        {...otherProps}
      >
        {children}
      </div>
    );
  }
);

export default Flexbox;
