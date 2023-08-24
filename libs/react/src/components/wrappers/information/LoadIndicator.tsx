import { ComponentPropsWithRef, forwardRef } from 'react';
import { buildClassName } from '../../../util';

export interface LoadIndicatorProps
  extends Omit<ComponentPropsWithRef<'div'>, 'children'> {}

/**
 * Default load indicator. Shows animated dots if using JTJS theme package.
 */
export const LoadIndicator = forwardRef<HTMLDivElement, LoadIndicatorProps>(
  ({ className, ...otherProps }, ref) => {
    return (
      <div
        className={buildClassName(className, 'jtjs-loading-dots-container')}
        {...otherProps}
        ref={ref}
      >
        {[1, 2].map((num) => {
          return (
            <span
              className={`jtjs-loading-dot jtjs-loading-dot-${num}`}
              key={num}
            />
          );
        })}
      </div>
    );
  }
);
