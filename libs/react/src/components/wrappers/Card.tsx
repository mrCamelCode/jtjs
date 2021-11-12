import { HTMLProps, ReactNode } from 'react';
import { formatClassName } from '../../util/util-functions';

export interface CardProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode | ReactNode[];
}

/**
 * Wrapper that logically groups related content.
 */
export const Card = ({ className, children, ...otherProps }: CardProps) => {
  return (
    <div className={formatClassName('jtjs-card', className)} {...otherProps}>
      {children}
    </div>
  );
};

export default Card;
