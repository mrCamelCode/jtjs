import { HTMLProps } from 'react';
import { formatClassName } from '..';

export interface LinkProps extends HTMLProps<HTMLAnchorElement> {}

export const Link = ({ className, ...otherProps }: LinkProps) => {
  return (
    <a className={formatClassName('jtjs-link', className)} {...otherProps} />
  );
};

export default Link;
