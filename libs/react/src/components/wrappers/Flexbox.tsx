import { HTMLProps } from 'react';
import { formatClassName } from '../../util/util-functions';

interface BaseFlexboxProps {
  direction?: 'row' | 'column';
  reverseDirection?: boolean;
  mainAxisSpacing?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  crossAxisSpacing?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'baseline';
  contentSpacing?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'space-between'
    | 'space-around';
  wrap?: boolean;
  reverseWrap?: boolean;
  spacing?: string;
}

export const FlexboxPresets: Record<string, BaseFlexboxProps> = {
  /**
   * Everything in the box is centered.
   */
  centered: {
    mainAxisSpacing: 'center',
    contentSpacing: 'center',
  },
};

export interface FlexboxProps
  extends BaseFlexboxProps,
    Omit<HTMLProps<HTMLDivElement>, 'wrap'> {}

/**
 * A wrapper that allows for rapid and simple assembly of flexboxes.
 */
export const Flexbox = ({
  className,
  children,
  style,
  direction = 'row',
  reverseDirection = false,
  mainAxisSpacing = 'flex-start',
  crossAxisSpacing = 'flex-start',
  contentSpacing = 'flex-start',
  wrap = true,
  reverseWrap = false,
  spacing = '1rem',
  ...otherProps
}: FlexboxProps) => {
  const flexWrap = `${wrap ? 'wrap' : 'nowrap'}${
    reverseWrap && wrap ? '-reverse' : ''
  }`;
  const flexFlow = `${direction}${
    reverseDirection ? '-reverse' : ''
  } ${flexWrap}`;

  return (
    <div
      className={formatClassName('jtjs-flexbox', className)}
      style={{
        display: 'flex',
        flexFlow,
        justifyContent: mainAxisSpacing,
        alignItems: crossAxisSpacing,
        alignContent: contentSpacing,
        gap: spacing,
        ...style,
      }}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default Flexbox;
