import { formatClassName } from '../../../util/util-functions';
import Card, { CardProps } from './Card';
import { ImageCardProps } from './ImageCard';

export interface BackgroundImageCardProps extends CardProps {
  /**
   * The source of the image to use for the background.
   */
  src: string;
}

/**
 * A card that has the specified image as its background. The children of the card will
 * appear over the image.
 */
export const BackgroundImageCard = ({
  className,
  src,
  style,
  children,
  ...otherProps
}: BackgroundImageCardProps) => {
  return (
    <Card
      className={formatClassName('jtjs-background-image-card', className)}
      style={{
        backgroundImage: `url(${src})`,
        ...style,
      }}
      {...otherProps}
    >
      {children}
    </Card>
  );
};

export default BackgroundImageCard;
