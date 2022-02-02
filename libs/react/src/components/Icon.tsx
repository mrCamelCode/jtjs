import { HTMLProps } from 'react';
import { formatClassName } from '../util/util-functions';

export interface IconProps extends HTMLProps<HTMLSpanElement> {
  /**
   * The type of icon. This affects the style of the icon pulled from FontAwesome.
   */
  iconType: 'brand' | 'regular' | 'solid';
  /**
   * The name of the icon. This must match the name of the icon in FontAwesome, minus the
   * `fa` prefix (which is added for you).
   * @example
   * <Icon iconType="solid" icon="address-card" />
   */
  icon: string;
}

/**
 * Renders an icon from FontAwesome. Note that for this component to work, you MUST either:
 * 1. Import FontAwesome via a URL like this: https://use.fontawesome.com/releases/v5.15.4/css/all.css
 * 1. Include FontAwesome in your project yourself another way
 *
 * If your icon doesn't seem to be appearing and you've verified that you're including FontAwesome
 * in your project, try verifying and changing the `iconType`.
 */
export const Icon = ({
  iconType,
  icon,
  className,
  ...otherProps
}: IconProps) => {
  let iconStyleText = 'fa';
  switch (iconType) {
    case 'brand':
      iconStyleText += 'b';
      break;
    case 'regular':
      iconStyleText += 'r';
      break;
    case 'solid':
      iconStyleText += 's';
      break;
  }

  return (
    <span
      className={formatClassName(
        `jtjs-icon ${iconStyleText} fa-${icon}`,
        className
      )}
      {...otherProps}
    />
  );
};

export default Icon;
