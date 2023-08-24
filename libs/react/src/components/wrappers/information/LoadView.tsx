import { ComponentPropsWithRef, ReactNode, forwardRef } from 'react';
import { buildClassName } from '../../../util/util-functions';
import { LoadIndicator } from './LoadIndicator';

export interface LoadViewProps extends ComponentPropsWithRef<'div'> {
  /**
   * Whether the content of the load view is loading. When `true`, animated loading dots will be
   * shown to the user (if no `loadingComponent` is provided). When `false`, the children of the view
   * will be displayed as-is.
   */
  isLoading: boolean;
  /**
   * What to show to the user when the view is loading. By default, animated dots will be shown. The
   * animation requires that you use the base styles provided by JTJS.
   */
  loadingComponent?: ReactNode;
}

/**
 * A wrapper that will show its content based on its `isLoading` prop.
 */
export const LoadView = forwardRef<HTMLDivElement, LoadViewProps>(
  (
    { isLoading, children, className, loadingComponent, ...otherProps },
    ref
  ) => {
    return (
      <div
        className={buildClassName(className, 'jtjs-load-view')}
        {...otherProps}
        ref={ref}
      >
        {isLoading ? loadingComponent ?? <LoadIndicator /> : children}
      </div>
    );
  }
);
