import { ComponentPropsWithRef, forwardRef } from 'react';
import { buildClassName } from '../../../util';

export interface LoadIndicatorProps
  extends Omit<ComponentPropsWithRef<'div'>, 'children'> {}

/**
 * Default load indicator. Appearance is driven by JTJS' theme package, but you
 * can style the elements yourself instead if you prefer.
 */
export const LoadIndicator = forwardRef<HTMLDivElement, LoadIndicatorProps>(
  ({ className, ...otherProps }: LoadIndicatorProps, ref) => {
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
