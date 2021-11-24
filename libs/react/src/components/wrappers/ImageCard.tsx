import { formatClassName } from '../../util/util-functions';
import Card, { CardProps } from './Card';

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

export interface ImageCardProps extends CardProps {
  /**
   * The source of the image to use for the background.
   */
  src: string;
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

/**
 * A card that has the specified image as its background. The children of the card will
 * appear over the image.
 */
export const ImageCard = ({
  style,
  className,
  children,
  src,
  innerShadow = false,
  innerShadowOptions,
  ...otherProps
}: ImageCardProps) => {
  return (
    <Card
      className={formatClassName('jtjs-image-card', className)}
      style={{
        backgroundImage: `url(${src})`,
        ...style,
      }}
      {...otherProps}
    >
      {innerShadow ? <Shadow {...innerShadowOptions} /> : null}
      {children}
    </Card>
  );
};

export default ImageCard;
