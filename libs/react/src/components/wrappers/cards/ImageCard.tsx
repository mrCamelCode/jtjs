import { CSSProperties, useCallback, useState } from 'react';
import { formatClassName } from '../../../util/util-functions';
import Card, { CardProps } from './Card';

interface ImageOptions {
  horizontalAlignment: 'left' | 'center' | 'right';
  verticalAlignment: 'top' | 'center' | 'bottom';
  size: 'source' | 'contain';
}

export interface ImageCardProps extends CardProps {
  /**
   * The source of the image to use for the background.
   */
  src: string;
  /**
   * The alt to use for the background image.
   */
  alt?: string;
  imgOptions?: Partial<ImageOptions>;
}

const defaultImgOptions: ImageOptions = {
  verticalAlignment: 'top',
  horizontalAlignment: 'left',
  size: 'contain',
};

/**
 * A card that has the specified image in
 *
 * TODO: This doesn't reall work how I want, because trying to be able to update how the image
 * is spaced within the container is getting messy... I'll come back to this one.
 */
export const ImageCard = ({
  className,
  children,
  src,
  alt,
  imgOptions = defaultImgOptions,
  ...otherProps
}: ImageCardProps) => {
  const [imageStyle, setImageStyle] = useState({} as CSSProperties);

  imgOptions = {
    ...defaultImgOptions,
    ...imgOptions,
  };

  // useEffect(() => {}, [
  //   imgOptions.horizontalAlignment,
  //   imgOptions.verticalAlignment,
  // ]);

  // Just using `useRef` doesn't cause a rerender when React sets the ref, so we have
  // to useCallback to do our necessary updates when the ref comes through.
  const imageRef = useCallback(
    (image: HTMLImageElement) => {
      if (image) {
        const workingImageStyle: CSSProperties = {};
        switch (imgOptions.horizontalAlignment) {
          case 'left':
            workingImageStyle.left = '0';
            break;
          case 'center':
            workingImageStyle.left = `${image.naturalWidth / 2}px`;
            break;
          case 'right':
            workingImageStyle.right = '0';
            break;
        }
        switch (imgOptions.verticalAlignment) {
          case 'top':
            workingImageStyle.top = '0';
            break;
          case 'center':
            workingImageStyle.top = `${image.naturalWidth / 2}px`;
            break;
          case 'bottom':
            workingImageStyle.bottom = '0';
            break;
        }

        // There's probably a better way to do this.
        if (
          imgOptions.horizontalAlignment === 'center' &&
          imgOptions.verticalAlignment === 'center'
        ) {
          workingImageStyle.transform = 'translate(-50%, -50%)';
        } else if (imgOptions.horizontalAlignment === 'center') {
          workingImageStyle.transform = 'translateX(-50%)';
        } else if (imgOptions.verticalAlignment === 'center') {
          workingImageStyle.transform = 'translateY(-50%)';
        }

        if (imgOptions.size === 'contain') {
          // Which dimension matches the container size should be based on which dimension is shortest
          // in the image dimensions, that way we hopefully avoid showing blank space around the image,
          // and also avoid shrinking it too much.
          if (image.naturalHeight < image.naturalWidth) {
            workingImageStyle.height = '100%';
          } else {
            // Use the width if the width is shorter, or if the two dimensions are the same.
            workingImageStyle.width = '100%';
          }

          setImageStyle((prevImageStyle) => ({
            ...prevImageStyle,
            ...workingImageStyle,
          }));
        }
      }
    },
    [
      imgOptions.horizontalAlignment,
      imgOptions.verticalAlignment,
      imgOptions.size,
    ]
  );

  return (
    <Card
      className={formatClassName('jtjs-image-card', className)}
      {...otherProps}
    >
      <img
        ref={imageRef}
        className="jtjs-image-card-image"
        src={src}
        alt={alt}
        style={{
          position: 'absolute',
          ...imageStyle,
        }}
      />
      <div className="jtjs-image-card-content">{children}</div>
    </Card>
  );
};

export default ImageCard;
