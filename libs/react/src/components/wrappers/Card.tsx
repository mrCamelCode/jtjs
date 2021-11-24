import { HTMLProps, ReactNode } from 'react';
import { formatClassName } from '../../util/util-functions';
import Flexbox, { FlexboxProps } from './Flexbox';

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
}

/**
 * Wrapper that logically groups related content.
 */
export const Card = ({
  className,
  children,
  flex = false,
  ...otherProps
}: CardProps) => {
  return flex ? (
    <Flexbox
      className={formatClassName('jtjs-card', className)}
      {...otherProps}
    >
      {children}
    </Flexbox>
  ) : (
    <div className={formatClassName('jtjs-card', className)} {...otherProps}>
      {children}
    </div>
  );
};

export default Card;
