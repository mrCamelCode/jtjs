import { HTMLProps, ReactNode } from 'react';
import { formatClassName } from '../../../util/util-functions';
import Flexbox, { FlexboxProps } from '../Flexbox';

export interface CardProps
  extends Omit<HTMLProps<HTMLDivElement>, 'wrap'>,
    FlexboxProps {
  children: ReactNode | ReactNode[];
  /**
   * (Optional, defaults to false) Whether the card should be a flex container. This will make the card a Flexbox
   * and offer all the benefits and props available to a Flexbox. Keep in mind that any FlexboxProps you pass in will
   * ONLY WORK if this prop is `true`.
   */
  flex?: boolean;
  /**
   * Whether the card has an inner shadow. This can be useful for making text in the
   * ImageCard easier to read against the image. If you'd like to customize the shadow,
   * use the `innerShadowOptions` prop.
   */
  innerShadow?: boolean;
  /**
   * Options to customize the inner shadow if the defaults don't work well for your use
   * case.
   */
  innerShadowOptions?: ShadowProps;
}

interface ShadowProps {
  /**
   * (Optional, defaults to bottom) Where the shadow should start from.
   */
  origin?: 'top' | 'right' | 'bottom' | 'left';
  /**
   * (Optional, defaults to 50%) How long the shadow should be. This can be many different length values, such
   * as rem, em, px, and %.
   */
  length?: string;
  /**
   * (Optional, defaults to black) The color of the shadow.
   */
  color?: string;
}

const Shadow = ({
  origin = 'bottom',
  length = '50%',
  color = 'black',
}: ShadowProps) => {
  const isFullHeight = origin === 'left' || origin === 'right';
  const isFullWidth = origin === 'top' || origin === 'bottom';

  const extendsHorizontally = isFullHeight;
  const extendsVertically = isFullWidth;

  let height = '';
  if (isFullHeight) {
    height = '100%';
  } else if (extendsVertically) {
    height = length;
  }

  let width = '';
  if (isFullWidth) {
    width = '100%';
  } else if (extendsHorizontally) {
    width = length;
  }

  return (
    <div
      className="jtjs-inner-shadow"
      style={{
        position: 'absolute',
        left: isFullWidth ? 0 : undefined,
        top: isFullHeight ? 0 : undefined,
        [origin]: 0,
        height,
        width,
        backgroundImage: `linear-gradient(to ${origin}, transparent, ${color})`,
      }}
    ></div>
  );
};

/**
 * Wrapper that logically groups related content.
 */
export const Card = ({
  className,
  children,
  flex = false,
  innerShadow = false,
  innerShadowOptions = {},
  ...otherProps
}: CardProps) => {
  return flex ? (
    <Flexbox
      className={formatClassName('jtjs-card', className)}
      {...otherProps}
    >
      {innerShadow ? <Shadow {...innerShadowOptions} /> : null}
      {children}
    </Flexbox>
  ) : (
    <div className={formatClassName('jtjs-card', className)} {...otherProps}>
      {innerShadow ? <Shadow {...innerShadowOptions} /> : null}
      {children}
    </div>
  );
};

export default Card;
