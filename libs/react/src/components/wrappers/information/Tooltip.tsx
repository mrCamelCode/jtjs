import { buildClassName } from '../../../util';
import { InlineText, InlineTextProps } from '../../text';

export interface TooltipProps extends InlineTextProps {}

/**
 * @private
 */
export const Tooltip = ({ className, ...otherProps }: TooltipProps) => {
  return (
    <InlineText
      className={buildClassName(className, 'jtjs-tooltip')}
      role="tooltip"
      {...otherProps}
    />
  );
};
